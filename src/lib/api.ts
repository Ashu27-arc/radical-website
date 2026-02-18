// Website uses Next.js API only (same origin). No CRM backend URL.
const getBaseUrl = () => (typeof window !== 'undefined' ? '' : process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000');

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
  const base = getBaseUrl();
  const res = await fetch(`${base}/api/blogs?_t=${Date.now()}`, {
    cache: 'no-store',
    headers: { 'Cache-Control': 'no-cache, no-store, must-revalidate', 'Pragma': 'no-cache' }
  });
  if (!res.ok) return [];
  const data = await res.json();
  return Array.isArray(data) ? data : [];
}

export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  const base = getBaseUrl();
  const res = await fetch(`${base}/api/blogs/slug/${encodeURIComponent(slug)}?_t=${Date.now()}`, {
    cache: 'no-store',
    headers: { 'Cache-Control': 'no-cache, no-store, must-revalidate', 'Pragma': 'no-cache' }
  });
  if (!res.ok) return null;
  return res.json();
}
