import { NextRequest, NextResponse } from 'next/server';

const WP_API_BASE = 'https://backup.radicaleducation.in/wp-json/wp/v2/posts';

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
  wpUrl.searchParams.set('_embed', '1');
  if (slug) {
    wpUrl.searchParams.set('slug', slug);
  } else {
    wpUrl.searchParams.set('per_page', perPage);
    const fields = searchParams.get('_fields');
    if (fields) wpUrl.searchParams.set('_fields', fields);
  }

  try {
    async function fetchFromWp(url: string) {
      const res = await fetch(url, {
        headers: { Accept: 'application/json' },
        next: { revalidate: 60 },
      });
      if (!res.ok) return null;
      return await res.json();
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
    console.error('[/api/wp/posts] Fetch failed:', message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
