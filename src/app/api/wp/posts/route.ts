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
    // fetch() on the server has no CORS restriction.
    // next: { revalidate: 60 } caches the upstream response in Next.js data cache.
    const res = await fetch(wpUrl.toString(), {
      headers: { Accept: 'application/json' },
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: `WP API returned ${res.status}` },
        { status: res.status }
      );
    }

    const data = await res.json();

    return NextResponse.json(data, {
      headers: {
        // Allow browsers / CDNs to cache for 60 s too
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120',
      },
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    console.error('[/api/wp/posts] Fetch failed:', message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
