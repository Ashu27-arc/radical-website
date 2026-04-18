import { NextResponse } from 'next/server';
import { fetchAllWordPressPosts } from '@/lib/wp-fetcher';

// Revalidate this route's cache every 1 hour (Next.js ISR for Route Handlers)
export const revalidate = 3600;

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
