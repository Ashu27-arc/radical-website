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
  // We now solely use WordPress API for blogs
  return [];
}


// ─── Helpers ────────────────────────────────────────────────────────────────

/** Strip all HTML tags and shortcodes, returning plain text. */
const stripHtml = (html: string): string => {
  if (!html) return '';
  // Remove WordPress shortcodes first
  const stripped = html.replace(/\[[^\]]+\]/g, '');
  if (typeof window === 'undefined') {
    return stripped.replace(/<[^>]*>?/gm, '');
  }
  try {
    const doc = new DOMParser().parseFromString(stripped, 'text/html');
    return doc.body.textContent || '';
  } catch {
    return stripped.replace(/<[^>]*>?/gm, '');
  }
};

/**
 * Fallback banner: extract the src of the first <img> found in the post's
 * rendered HTML content. Returns an empty string if none is found.
 */
const extractFirstImageFromContent = (html: string): string => {
  if (!html) return '';
  const match = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  return match ? match[1] : '';
};

/** Featured-image extraction from the _embedded['wp:featuredmedia'] object. */
const extractFeaturedImage = (post: any, contentHtml: string): string => {
  try {
    const media = post._embedded?.['wp:featuredmedia']?.[0];
    if (media) {
      const url =
        media.media_details?.sizes?.large?.source_url ||
        media.media_details?.sizes?.full?.source_url ||
        media.source_url;
      if (url) return url;
    }
    // Secondary fallbacks from non-standard WP fields
    if (post.featured_image_url) return post.featured_image_url;
    if (post.jetpack_featured_media_url) return post.jetpack_featured_media_url;
    if (post.yoast_head_json?.og_image?.[0]?.url)
      return post.yoast_head_json.og_image[0].url;
    if (post.better_featured_image?.source_url)
      return post.better_featured_image.source_url;
  } catch { /* */ }

  // Requirement §5 – last resort: first <img> in post content
  return extractFirstImageFromContent(contentHtml);
};

/** Category string from _embedded['wp:term']. */
const extractCategory = (post: any): string => {
  try {
    const terms = post._embedded?.['wp:term']?.[0];
    if (Array.isArray(terms) && terms.length > 0) {
      return terms.map((c: any) => c.name).join(', ');
    }
  } catch { /* */ }
  return 'Latest Update';
};

/** Author name from _embedded.author. */
const extractAuthor = (post: any): string => {
  try {
    const name = post._embedded?.author?.[0]?.name;
    if (name) return name;
  } catch { /* */ }
  return 'Radical Education';
};

/**
 * Map a raw WordPress REST API post object to the local Blog interface.
 * Requirement §3 – explicit field mapping.
 */
const mapWpPostToBlog = (post: any): Blog => {
  const contentHtml: string = post.content?.rendered || '';
  return {
    id: post.id?.toString() ?? Math.random().toString(),           // §3 id
    title: post.title?.rendered || 'Untitled',                     // §3 title
    excerpt: stripHtml(post.excerpt?.rendered || ''),              // §3 excerpt (stripped)
    content: contentHtml,                                          // §3 content (raw HTML)
    author: extractAuthor(post),
    category: extractCategory(post),
    status: 'Published',
    date: post.date || new Date().toISOString(),                   // §3 date
    featuredImage: extractFeaturedImage(post, contentHtml),       // §4 + §5
    slug: `blogs/${post.slug}`,                                    // §3 slug
    createdAt: post.date,
  };
};

// ─── getWpBlogs ──────────────────────────────────────────────────────────────

/**
 * Fetch the latest blog posts from WordPress.
 *
 * Uses the native fetch API (§8 – no axios) via the local /api/wp/posts proxy
 * route so there are no CORS issues when called from the browser.
 *
 * next: { revalidate: 60 } (§9) is honoured server-side by Next.js data cache;
 * the proxy route also sets Cache-Control headers for CDN-layer caching.
 */
export async function getWpBlogs(): Promise<Blog[]> {
  try {
    const base = getWebsiteBase();
    // §1 – endpoint; §9 – ISR revalidation via next.revalidate
    const url = `${base}/api/wp/posts?per_page=10&_embed=1`;

    const res = await fetch(url, {
      headers: { Accept: 'application/json' },
      // next.revalidate is used by the Next.js data cache (server-side only)
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.error(`[getWpBlogs] HTTP ${res.status}`);
      return [];
    }

    const data = await res.json();
    if (!Array.isArray(data)) return [];

    return data.map(mapWpPostToBlog); // §3
  } catch (error) {
    // §10 – safe error handling: never throw, always return empty array
    console.error('[getWpBlogs] Fetch error:', error instanceof Error ? error.message : error);
    return [];
  }
}

/**
 * Fetch a single post by its slug from WordPress.
 * Uses native fetch (§8) with 60-second ISR revalidation (§9).
 */
export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  try {
    // Normalise slug – strip 'blogs/' prefix if the route included it
    const wpSlug = slug.startsWith('blogs/') ? slug.slice('blogs/'.length) : slug;

    const base = getWebsiteBase();
    const url = `${base}/api/wp/posts?slug=${encodeURIComponent(wpSlug)}&_embed=1`;

    const res = await fetch(url, {
      headers: { Accept: 'application/json' },
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.error(`[getBlogBySlug] HTTP ${res.status} for slug="${wpSlug}"`);
      return null;
    }

    const data = await res.json();
    if (Array.isArray(data) && data.length > 0) {
      return mapWpPostToBlog(data[0]);
    }

    return null;
  } catch (error) {
    // §10 – safe error handling
    console.error('[getBlogBySlug] Fetch error:', error instanceof Error ? error.message : error);
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
