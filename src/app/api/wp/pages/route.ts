import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

const WP_API_BASE = 'https://swa.radicaleducation.in/wp-json/wp/v2/pages';

export const revalidate = 60;

/**
 * GET /api/wp/pages
 *
 * Proxy to WordPress Pages API (used as a fallback in getBlogBySlug).
 *   slug     – fetch a single page by slug
 *   _embed   – always forced to "1"
 */
export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  const slug = searchParams.get('slug');

  const wpUrl = new URL(WP_API_BASE);
  
  // Forward all query parameters
  searchParams.forEach((value, key) => {
    wpUrl.searchParams.set(key, value);
  });

  // Force _embed=1
  wpUrl.searchParams.set('_embed', '1');

  try {
    async function fetchFromWp(url: string) {
      const headers: Record<string, string> = {
        'Accept': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      };

      if (process.env.WP_USER && process.env.WP_APP_PASSWORD) {
        const auth = Buffer.from(`${process.env.WP_USER}:${process.env.WP_APP_PASSWORD}`).toString('base64');
        headers['Authorization'] = `Basic ${auth}`;
      }

      try {
        const res = await axios.get(url, { headers });
        return res.data;
      } catch {
        return null;
      }
    }

    let data = await fetchFromWp(wpUrl.toString());

    // If slug search returned nothing, try lowercase version (WP default)
    if (slug && (!data || (Array.isArray(data) && data.length === 0)) && slug !== slug.toLowerCase()) {
      wpUrl.searchParams.set('slug', slug.toLowerCase());
      const lowerData = await fetchFromWp(wpUrl.toString());
      if (lowerData && Array.isArray(lowerData) && lowerData.length > 0) {
        data = lowerData;
      }
    }

    if (!data) {
      return NextResponse.json({ error: 'WP API failure' }, { status: 502 });
    }

    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120',
      },
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    console.error('[/api/wp/pages] Fetch failed:', message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
