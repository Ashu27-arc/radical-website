import { NextRequest, NextResponse } from 'next/server';

const WP_API_BASE = 'https://backup.radicaleducation.in/wp-json/wp/v2/pages';

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
  wpUrl.searchParams.set('_embed', '1');
  if (slug) wpUrl.searchParams.set('slug', slug);

  try {
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
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120',
      },
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    console.error('[/api/wp/pages] Fetch failed:', message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
