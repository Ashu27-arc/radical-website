// Blogs: CRM se fetch (radical-crm DB). Forms: Next.js API (radicalDb).
const getWebsiteBase = () => (typeof window !== 'undefined' ? '' : process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000');
const getCrmApiUrl = () => process.env.NEXT_PUBLIC_CRM_API_URL || 'https://backend-radical.onrender.com';

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
  const crm = getCrmApiUrl();
  const res = await fetch(`${crm}/api/blogs?_t=${Date.now()}`, {
    cache: 'no-store',
    headers: { 'Cache-Control': 'no-cache, no-store, must-revalidate', 'Pragma': 'no-cache' }
  });
  if (!res.ok) return [];
  const data = await res.json();
  return Array.isArray(data) ? data : [];
}

export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  const crm = getCrmApiUrl();
  const res = await fetch(`${crm}/api/blogs/slug/${encodeURIComponent(slug)}?_t=${Date.now()}`, {
    cache: 'no-store',
    headers: { 'Cache-Control': 'no-cache, no-store, must-revalidate', 'Pragma': 'no-cache' }
  });
  if (!res.ok) return null;
  return res.json();
}
