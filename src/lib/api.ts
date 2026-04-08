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
      // Don't log 404s globally, as some endpoints explicitly handle them as fallbacks
      if (error.response?.status !== 404) {
        console.error('API Error:', error.response?.data || error.message);
      }
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
  return getWpBlogs();
}


// ─── Helpers ────────────────────────────────────────────────────────────────

/**
 * Replace WPForms shortcodes or pre-rendered WPForms HTML with responsive iframe embeds.
 * Requirement §5
 */
export function replaceWpForms(content: string): string {
  if (!content) return '';

  // 1. Handle raw shortcodes like [wpforms id="123"]
  let result = content.replace(/\[wpforms\s+id=["']?(\d+)["']?\]/g, (match, id) => {
    return `<div class="wpforms-container-embed" style="width: 100%; margin: 2rem 0; clear: both;">
      <iframe 
        src="https://backup.radicaleducation.in/wpforms/view/${id}" 
        style="width: 100%; min-height: 500px; border: none; overflow: hidden;" 
        loading="lazy"
        allow="payment; clipboard-write; geolocation"
        title="WPForm ${id}"
      ></iframe>
    </div>`;
  });

  // 2. We intentionally do NOT replace already-rendered WPForms HTML containers 
  // with an iframe anymore. Replacing them was causing the 'whole site' (header/footer) 
  // to appear inside the blog post. Instead, we keep the native HTML and 
  // handle the 'Please enable JavaScript' warning via CSS in the renderer.
  
  return result;
}

/** Strip all HTML tags and return plain text. */
const stripHtml = (html: string): string => {
  if (!html) return '';
  // Remove all HTML tags
  const stripped = html.replace(/<[^>]*>?/gm, '');
  // Remove any remaining shortcodes for the excerpt
  return stripped.replace(/\[[^\]]+\]/g, '').trim();
};

/** Featured-image extraction specifically from the _embedded object. Requirement §4 */
const extractFeaturedImage = (post: any): string => {
  try {
    return post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '';
  } catch {
    return '';
  }
};

/**
 * Map a raw WordPress REST API post object to the local Blog interface.
 * Requirement §3
 */
const mapWpPostToBlog = (post: any): Blog => {
  return {
    id: post.id?.toString(),                            // id -> post.id
    title: post.title?.rendered || 'Untitled',          // title -> post.title.rendered
    content: post.content?.rendered || '',             // content -> post.content.rendered
    excerpt: stripHtml(post.excerpt?.rendered || ''),   // excerpt -> clean text
    slug: post.slug,                                    // slug -> post.slug
    date: post.date,                                    // date -> post.date
    featuredImage: extractFeaturedImage(post),          // Requirement §4
    author: post._embedded?.author?.[0]?.name || 'Radical Education',
    category: post._embedded?.['wp:term']?.[0]?.map((c: any) => c.name).join(', ') || 'Latest Update',
    status: 'Published'
  };
};

/**
 * Fetch the latest blog posts from WordPress.
 * Requirement §1, §8, §9, §10
 */
export async function getWpBlogs(): Promise<Blog[]> {
  try {
    const isClient = typeof window !== 'undefined';
    const params = 'per_page=100&_fields=id,slug,title,content,excerpt,date,categories,_links,_embedded';
    
    // On client, use our local proxy. On server, call WP directly.
    const url = isClient 
      ? `/api/wp/posts?${params}` 
      : `https://backup.radicaleducation.in/wp-json/wp/v2/posts?_embed=1&${params}`;

    const res = await fetch(url, {
      method: 'GET',
      headers: { 'Accept': 'application/json' },
      next: { revalidate: 60 },
    });

    if (!res.ok) return [];

    const data = await res.json();
    if (!Array.isArray(data)) return [];

    return data.map(mapWpPostToBlog);
  } catch (error) {
    console.error('[getWpBlogs] error:', error);
    return [];
  }
}

/**
 * Fetch a single post by its slug from WordPress.
 * Requirement §8, §9, §10
 */
export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  if (!slug) return null;
  try {
    const wpSlug = slug.includes('/') ? slug.split('/').pop() : slug;
    if (!wpSlug) return null;
    
    const isClient = typeof window !== 'undefined';
    const params = `slug=${encodeURIComponent(wpSlug)}&_embed=1`;
    
    // 1. Try fetching as a POST
    const postUrl = isClient
      ? `/api/wp/posts?${params}`
      : `https://backup.radicaleducation.in/wp-json/wp/v2/posts?${params}`;

    const postRes = await fetch(postUrl, {
      method: 'GET',
      headers: { 'Accept': 'application/json' },
      next: { revalidate: 60 },
    });

    if (postRes.ok) {
      const posts = await postRes.json();
      if (Array.isArray(posts) && posts.length > 0) {
        return mapWpPostToBlog(posts[0]);
      }
    }

    // 2. Fallback: Try fetching as a PAGE
    const pageUrl = isClient
      ? `/api/wp/pages?${params}`
      : `https://backup.radicaleducation.in/wp-json/wp/v2/pages?${params}`;

    const pageRes = await fetch(pageUrl, {
      method: 'GET',
      headers: { 'Accept': 'application/json' },
      next: { revalidate: 60 },
    });

    if (pageRes.ok) {
      const pages = await pageRes.json();
      if (Array.isArray(pages) && pages.length > 0) {
        return mapWpPostToBlog(pages[0]);
      }
    }

    return null;
  } catch (error) {
    console.error('[getBlogBySlug] error:', error);
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
