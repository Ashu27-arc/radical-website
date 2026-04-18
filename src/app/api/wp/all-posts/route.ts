import { NextResponse } from 'next/server';
import { fetchAllWordPressPosts } from '@/lib/wp-fetcher';

// Force dynamic rendering — this route fetches 3,700+ WP posts and cannot
// be statically generated at build time (exceeds the 60s build timeout).
// It will be executed on-demand per request instead.
export const dynamic = 'force-dynamic';

/**
 * GET /api/wp/all-posts
 * 
 * Fetches all WordPress posts using pagination and concurrency,
 * returning them as a single array of Blog objects.
 */
export async function GET() {
  try {
    const allPosts = await fetchAllWordPressPosts();

    return NextResponse.json(allPosts, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200',
      },
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    console.error('[/api/wp/all-posts] Fetch failed:', message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
