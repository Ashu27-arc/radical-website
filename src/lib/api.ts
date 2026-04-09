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

/** Universal base64 encoder: works in browser (btoa) and Node.js (Buffer). */
function encodeBase64(str: string): string {
  if (typeof window !== 'undefined') {
    // browser – encode UTF-8 bytes then base64
    return btoa(
      encodeURIComponent(str).replace(/%([0-9A-F]{2})/gi, (_m, hex) =>
        String.fromCharCode(parseInt(hex, 16))
      )
    );
  }
  return Buffer.from(str, 'utf8').toString('base64');
}

/**
 * Convert ALL remaining raw WordPress shortcodes into responsive iframe embeds.
 *
 * - [wpforms id="X"]  → direct WPForms view URL (proven endpoint)
 * - [anything ...]    → /api/wp/shortcode-render?sc=[base64] proxy
 */
export function replaceWpForms(content: string, postSlug?: string): string {
  if (!content) return '';

  // 1. [wpforms id="123"] → direct WPForms embed
  let result = content.replace(/\[wpforms\s+id=["']?(\d+)["']?\]/gi, (_match, id) => {
    return `<div class="wpforms-container-embed" style="width:100%;margin:2rem 0;clear:both;"><iframe src="https://backup.radicaleducation.in/wpforms/view/${id}" style="width:100%;min-height:500px;border:none;overflow:hidden;" loading="lazy" allow="payment;clipboard-write;geolocation" title="WPForms Form ${id}"></iframe></div>`;
  });

  // 2. Specific shortcodes (iframe, banner, crm-form) → proxy iframe
  const slugParam = postSlug ? `&slug=${encodeURIComponent(postSlug)}` : '';
  const shortcodeRegex = /\[(iframe|banner|banner-iframe|crm-form|form)([^\]]*)\]/gi;

  
  result = result.replace(shortcodeRegex, (match, tag, attrs) => {
    // Avoid re-encoding if something looks like it's already an iframe or has suspicious tag
    if (!tag || /^\d+/.test(tag)) return match;

    const encoded = encodeBase64(`[${tag}${attrs}]`);
    return `<div class="wp-shortcode-iframe-embed" style="width:100%;margin:1.5rem 0;clear:both;"><iframe src="/api/wp/shortcode-render?sc=${encoded}${slugParam}" style="width:100%;min-height:200px;border:none;overflow:hidden;" loading="lazy" title="WordPress ${tag} shortcode" scrolling="no" onload="try{this.style.height=this.contentDocument.body.scrollHeight+'px'}catch(e){}"></iframe></div>`;
  });


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
      headers: { 
        'Accept': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      },
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
  
  // Clean slug: remove query params and trailing/leading slashes
  const cleanSlug = slug.split('?')[0].replace(/^\/+|\/+$/g, '');
  if (!cleanSlug) return null;

  try {
    // Extract the actual post name (last part of the path)
    const wpSlug = cleanSlug.split('/').pop() || cleanSlug;
    
    const isClient = typeof window !== 'undefined';
    const params = `slug=${encodeURIComponent(wpSlug)}&_embed=1`;
    const lowerParams = `slug=${encodeURIComponent(wpSlug.toLowerCase())}&_embed=1`;
    
    // Helper to fetch and check if it's a valid post
    async function tryFetch(type: 'posts' | 'pages', queryParams: string) {
      const url = isClient
        ? `/api/wp/${type}?${queryParams}`
        : `https://backup.radicaleducation.in/wp-json/wp/v2/${type}?${queryParams}`;

      const res = await fetch(url, {
        method: 'GET',
        headers: { 
          'Accept': 'application/json',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        },
        next: { revalidate: 60 },
      });

      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          return mapWpPostToBlog(data[0]);
        }
      }
      return null;
    }

    // Attempt 1: Posts with original slug
    let blog = await tryFetch('posts', params);
    if (blog) return blog;

    // Attempt 2: Posts with lowercase slug (WordPress default behavior)
    if (wpSlug !== wpSlug.toLowerCase()) {
      blog = await tryFetch('posts', lowerParams);
      if (blog) return blog;
    }

    // Attempt 3: Pages with original slug
    blog = await tryFetch('pages', params);
    if (blog) return blog;

    // Attempt 4: Pages with lowercase slug
    if (wpSlug !== wpSlug.toLowerCase()) {
      blog = await tryFetch('pages', lowerParams);
      if (blog) return blog;
    }

    // Final attempt: fallback to fetching with the full path as slug (some WP setups use full paths)
    if (cleanSlug !== wpSlug) {
      const fullPathParams = `slug=${encodeURIComponent(cleanSlug)}&_embed=1`;
      blog = await tryFetch('posts', fullPathParams);
      if (!blog) blog = await tryFetch('pages', fullPathParams);
      if (blog) return blog;
    }

    return null;
  } catch (error) {
    console.error('[getBlogBySlug] critical failure:', error);
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
