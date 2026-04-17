import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

const WP_API_BASE = 'https://swa.radicaleducation.in/wp-json/wp/v2/posts';

// Revalidate this route's cache every 60 seconds (Next.js ISR for Route Handlers)
export const revalidate = 60;

/**
 * GET /api/wp/posts
 *
 * Supported query params (forwarded to WP API):
 *   slug        – fetch a single post by slug
 *   per_page    – number of posts (default: 10)
 *   _embed      – always forced to "1"
 */
export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  const slug = searchParams.get('slug');
  const perPage = searchParams.get('per_page') ?? '10';

  // Build the upstream WP URL
  const wpUrl = new URL(WP_API_BASE);
  
  // Forward all query parameters from the incoming request (per_page, slug, search, _fields, etc.)
  searchParams.forEach((value, key) => {
    wpUrl.searchParams.set(key, value);
  });

  // Always force _embed=1 for metadata extraction
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
        return { data: res.data, status: 200, error: null };
      } catch (error: any) {
        const status = error.response?.status || 500;
        const errorText = error.response?.data || error.message;
        console.error(`[WP API ERROR] ${url} - Status: ${status}`, errorText);
        return { data: null, status, error: errorText };
      }
    }

    let result = await fetchFromWp(wpUrl.toString());

    // If slug search returned nothing, try lowercase version (WP default)
    if (slug && (!result.data || (Array.isArray(result.data) && result.data.length === 0)) && slug !== slug.toLowerCase()) {
      wpUrl.searchParams.set('slug', slug.toLowerCase());
      const lowerResult = await fetchFromWp(wpUrl.toString());
      if (lowerResult.data && Array.isArray(lowerResult.data) && lowerResult.data.length > 0) {
        result = lowerResult;
      }
    }

    if (!result.data) {
      return NextResponse.json(
        { error: 'WP API failure', details: result.error },
        { status: result.status || 502 }
      );
    }

    return NextResponse.json(result.data, {
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120',
      },
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    console.error('[/api/wp/posts] Fetch failed:', message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
