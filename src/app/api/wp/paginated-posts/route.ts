import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import { fetchAllWordPressPosts } from '@/lib/wp-fetcher';

const WP_API_BASE = 'https://swa.radicaleducation.in/wp-json/wp/v2/posts';

export const revalidate = 60;

/** Strip all HTML tags and return plain text. */
const stripHtml = (html: string): string => {
  if (!html) return '';
  const stripped = html.replace(/<[^>]*>?/gm, '');
  return stripped.replace(/\[[^\]]+\]/g, '').trim();
};

function extractPostData(posts: any[]) {
  if (!Array.isArray(posts)) return [];
  
  return posts.map(post => {
    let featuredImage = '';
    try {
      featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '';
    } catch {
      featuredImage = '';
    }

    const category = post._embedded?.['wp:term']?.[0]?.map((c: any) => c.name).join(', ') || 'Latest Update';
    const author = post._embedded?.author?.[0]?.name || 'Radical Education';

    return {
      id: post.id?.toString(),
      title: post.title?.rendered || 'Untitled',
      content: post.content?.rendered || '',
      excerpt: stripHtml(post.excerpt?.rendered || ''),
      slug: post.slug,
      date: post.date,
      featuredImage,
      author,
      category,
      status: 'Published',
      faqs: Array.isArray(post.acf?.faqs) ? post.acf.faqs : Array.isArray(post.faqs) ? post.faqs : []
    };
  });
}

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  
  const page = searchParams.get('page') || '1';
  const perPage = searchParams.get('per_page') || '12';
  const search = searchParams.get('search') || '';

  const wpUrl = new URL(WP_API_BASE);
  wpUrl.searchParams.set('page', page);
  wpUrl.searchParams.set('per_page', perPage);
  wpUrl.searchParams.set('_embed', '1');
  wpUrl.searchParams.set('_fields', 'id,slug,title,excerpt,date,categories,_links,content,acf,faqs');
  
  if (search) {
    wpUrl.searchParams.set('search', search);
  }

  try {
    const headers: Record<string, string> = {
      'Accept': 'application/json',
      'User-Agent': 'Mozilla/5.0'
    };

    if (process.env.WP_USER && process.env.WP_APP_PASSWORD) {
      const auth = Buffer.from(`${process.env.WP_USER}:${process.env.WP_APP_PASSWORD}`).toString('base64');
      headers['Authorization'] = `Basic ${auth}`;
    }

    const res = await axios.get(wpUrl.toString(), { headers });
    
    const totalPages = parseInt(res.headers['x-wp-totalpages'] || '1', 10);
    const total = parseInt(res.headers['x-wp-total'] || '0', 10);
    
    const blogs = extractPostData(res.data);

    return NextResponse.json({
      blogs,
      totalPages,
      total,
      page: parseInt(page, 10)
    }, {
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120',
      },
    });
  } catch (err: any) {
    const message = err.response?.data?.message || err.message || 'Unknown error';
    console.error('[/api/wp/paginated-posts] Fetch failed:', message);
    return NextResponse.json({ error: message, blogs: [], totalPages: 1 }, { status: err.response?.status || 500 });
  }
}
