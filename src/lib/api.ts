const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://backend-radical.onrender.com';

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
}

export async function getBlogs(): Promise<Blog[]> {
  // Add cache-busting query param to always get fresh data
  const res = await fetch(`${API_URL}/api/blogs?_t=${Date.now()}`, { 
    cache: 'no-store',
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache'
    }
  });
  if (!res.ok) return [];
  const data = await res.json();
  return Array.isArray(data) ? data : [];
}

export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  const res = await fetch(`${API_URL}/api/blogs/slug/${encodeURIComponent(slug)}?_t=${Date.now()}`, {
    cache: 'no-store',
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache'
    }
  });
  if (!res.ok) return null;
  return res.json();
}
