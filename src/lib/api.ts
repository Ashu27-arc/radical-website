import axios from 'axios';

// Blogs: CRM se fetch (radical-crm DB). Forms: Next.js API (radicalDb).
const getWebsiteBase = () => (typeof window !== 'undefined' ? '' : process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000');
const getCrmApiUrl = () => {
  const url = process.env.NEXT_PUBLIC_CRM_API_URL;
  if (!url) return 'https://backend-radical.onrender.com';
  return url.endsWith('/') ? url.slice(0, -1) : url;
};

// Create axios instance with default configuration
const apiClient = axios.create({
  baseURL: getCrmApiUrl(),
  timeout: 120000, // 120s timeout to accommodate sleeping backend instances
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to handle authentication
apiClient.interceptors.request.use(
  (config) => {
    // Add auth token if available
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token') || sessionStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Avoid noisy logs during production builds when upstream APIs may be unreachable.
    if (process.env.NODE_ENV !== 'production') {
      console.error('API Error:', error.response?.data || error.message);
    }
    return Promise.reject(error);
  }
);

export interface BlogFaq {
  question: string;
  answer: string;
}

export interface Blog {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  author: string;
  category: string;
  status: string;
  date: string;
  views?: number;
  likes?: number;
  featuredImage?: string;
  slug: string;
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  faqs?: BlogFaq[];
  pdf?: string;
  createdAt?: string;
}

export interface BlogLink {
  id: string;
  _id: string;
  idNumber: number;
  link: string;
  categories: string;
  name: string;
  banner?: string;
  imageUrl?: string;
  featuredImage?: string;
  image?: string;
  coverImage?: string;
  status: string;
  createdAt?: string;
}

export interface NeetUpdate {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
  important: boolean;
  course?: string;
  year?: number;
  month?: string;
  state?: string;
  imageUrl?: string;
  link?: string;
  status: string;
  createdAt?: string;
  updatedAt?: string;
}

export async function getBlogs(): Promise<Blog[]> {
  try {
    const response = await apiClient.get('/api/blogs', {
      params: { _t: Date.now() }
    });
    const blogs = Array.isArray(response.data) ? response.data : [];
    
    return blogs.map((blog: any) => ({
      ...blog,
      featuredImage: blog.featuredImage || blog.image || blog.imageUrl || blog.banner || blog.coverImage || ''
    }));
  } catch (error) {
    return [];
  }
}

export async function getBlogLinks(): Promise<BlogLink[]> {
  try {
    const token = typeof window !== 'undefined'
      ? (localStorage.getItem('token') || sessionStorage.getItem('token'))
      : null;

    const headers: Record<string, string> = {};

    // Authorization only when token exists; prevents "Bearer null" requests on live public users
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    const response = await apiClient.get('/api/blogs-links', {
      params: { _t: Date.now() },
      headers
    });

    return Array.isArray(response.data) ? response.data : [];
  } catch (error) {
    console.error(" getBlogLinks API Error:", error);
    return [];
  }
}

export async function getWpBlogs(): Promise<Blog[]> {
  try {
    const response = await axios.get('https://backup.radicaleducation.in/?rest_route=/wp/v2/posts&_embed&per_page=100');
    const posts = response.data;

    return posts.map((post: any) => {
      // Extract category name
      let category = 'Latest Update';
      if (post._embedded && post._embedded['wp:term'] && post._embedded['wp:term'][0]) {
        const categories = post._embedded['wp:term'][0];
        if (categories.length > 0) {
          category = categories.map((c: any) => c.name).join(', ');
        }
      }

      // Extract featured image
      let featuredImage = '';
      if (post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0]) {
        const media = post._embedded['wp:featuredmedia'][0];
        featuredImage = media.media_details?.sizes?.large?.source_url || 
                        media.media_details?.sizes?.full?.source_url || 
                        media.source_url || '';
      } else if (post.featured_image_url) {
        featuredImage = post.featured_image_url;
      } else if (post.jetpack_featured_media_url) {
        featuredImage = post.jetpack_featured_media_url;
      }

      // Extract author name
      let author = 'Radical Education';
      if (post._embedded && post._embedded.author && post._embedded.author[0]) {
        author = post._embedded.author[0].name;
      }

      // Strip HTML from excerpt
      const stripHtml = (html: string) => {
        if (typeof window === 'undefined') {
          return html.replace(/<[^>]*>?/gm, '');
        }
        const doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.textContent || "";
      };

      return {
        id: post.id.toString(),
        title: post.title.rendered,
        excerpt: stripHtml(post.excerpt.rendered),
        content: post.content.rendered,
        author: author,
        category: category,
        status: 'Published',
        date: post.date,
        featuredImage: featuredImage,
        slug: `blogs/${post.slug}`,
        createdAt: post.date,
      };
    });
  } catch (error) {
    console.error('Error fetching WP blogs:', error);
    return [];
  }
}

export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  try {
    // Try CRM API first
    const response = await apiClient.get(`/api/blogs/slug/${encodeURIComponent(slug)}`, {
      params: { _t: Date.now() },
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache'
      }
    });
    if (response.data) {
      const blog = response.data;
      blog.featuredImage = blog.featuredImage || blog.image || blog.imageUrl || blog.banner || blog.coverImage || '';
      return blog;
    }
  } catch (error) {
    // Fall through to WP attempt
  }

  try {
    // Try WordPress API
    // Remove 'blogs/' prefix if it exists in the slug (some routes might pass it)
    const wpSlug = slug.startsWith('blogs/') ? slug.replace('blogs/', '') : slug;
    const response = await axios.get(`https://backup.radicaleducation.in/?rest_route=/wp/v2/posts&_embed&slug=${encodeURIComponent(wpSlug)}`);

    if (Array.isArray(response.data) && response.data.length > 0) {
      const post = response.data[0];

      // Extract category name
      let category = 'Latest Update';
      if (post._embedded && post._embedded['wp:term'] && post._embedded['wp:term'][0]) {
        const categories = post._embedded['wp:term'][0];
        if (categories.length > 0) {
          category = categories.map((c: any) => c.name).join(', ');
        }
      }

      // Extract featured image
      let featuredImage = '';
      if (post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0]) {
        const media = post._embedded['wp:featuredmedia'][0];
        featuredImage = media.media_details?.sizes?.large?.source_url || 
                        media.media_details?.sizes?.full?.source_url || 
                        media.source_url || '';
      } else if (post.featured_image_url) {
        featuredImage = post.featured_image_url;
      } else if (post.jetpack_featured_media_url) {
        featuredImage = post.jetpack_featured_media_url;
      }

      // Extract author name
      let author = 'Radical Education';
      if (post._embedded && post._embedded.author && post._embedded.author[0]) {
        author = post._embedded.author[0].name;
      }

      // Extract excerpt
      const stripHtml = (html: string) => {
        if (typeof window === 'undefined') {
          return html.replace(/<[^>]*>?/gm, '');
        }
        const doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.textContent || "";
      };

      return {
        id: post.id.toString(),
        title: post.title.rendered,
        excerpt: stripHtml(post.excerpt.rendered),
        content: post.content.rendered,
        author: author,
        category: category,
        status: 'Published',
        date: post.date,
        featuredImage: featuredImage,
        slug: `blogs/${post.slug}`,
        createdAt: post.date,
      };
    }
    return null;
  } catch (error) {
    console.error('Error fetching WP blog by slug:', error);
    return null;
  }
}

// NEET Updates API functions
export async function getNeetUpdates(): Promise<NeetUpdate[]> {
  try {
    const response = await apiClient.get('/api/neet-updates', {
      params: { _t: Date.now() },
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache'
      }
    });

    console.log('NEET updates API response:', response.data);
    return response.data.data || [];
  } catch (error) {
    console.error('Error fetching NEET updates:', error);

    // Return mock data only in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Returning mock data for development');
      return [
        {
          id: "1",
          title: "NEET 2025 Registration Open",
          description: "Online registration for NEET 2025 has started. Last date to apply is March 15, 2025.",
          date: "2025-02-10",
          category: "Registration",
          important: true,
          course: "MBBS",
          year: 2025,
          status: "active"
        },
        {
          id: "2",
          title: "Exam Date Announced",
          description: "NEET 2025 will be conducted on May 4, 2025. Admit cards will be available from April 20.",
          date: "2025-02-08",
          category: "Exam",
          important: true,
          course: "MBBS",
          year: 2025,
          status: "active"
        }
      ];
    }

    throw error;
  }
}

export async function getNeetUpdateById(id: string): Promise<NeetUpdate | null> {
  try {
    const response = await apiClient.get(`/api/neet-updates/${id}`);
    return response.data.data || null;
  } catch (error) {
    console.error('Error fetching NEET update by ID:', error);
    return null;
  }
}
