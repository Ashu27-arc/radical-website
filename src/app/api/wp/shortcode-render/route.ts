import { NextRequest, NextResponse } from 'next/server';

export const revalidate = 300; // cache 5 min

const WP_BASE = 'https://backup.radicaleducation.in';

/**
 * GET /api/wp/shortcode-render?sc=[base64 shortcode]&slug=[post-slug]
 *
 * Returns a self-contained HTML page that renders the given WordPress shortcode.
 * Strategy:
 *   1. Try WP block renderer (Gutenberg core/shortcode) – works without auth on some installs.
 *   2. Fallback: Return a minimal iframe-friendly HTML page that loads and displays
 *      the shortcode's output by fetching the post's WP frontend and extracting content.
 */
export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const scEncoded = searchParams.get('sc') || '';
  const slug = searchParams.get('slug') || '';

  if (!scEncoded) {
    return new NextResponse('Missing sc param', { status: 400 });
  }

  let shortcode = '';
  try {
    shortcode = Buffer.from(scEncoded, 'base64').toString('utf8');
  } catch {
    return new NextResponse('Invalid sc param', { status: 400 });
  }

  // ── Strategy 1: WP Gutenberg block renderer ──────────────────────────────
  try {
    const blockUrl = `${WP_BASE}/wp-json/wp/v2/block-renderer/core%2Fshortcode?attributes%5Btext%5D=${encodeURIComponent(shortcode)}`;
    const blockRes = await fetch(blockUrl, {
      headers: { Accept: 'application/json' },
      next: { revalidate: 300 },
    });

    if (blockRes.ok) {
      const json = await blockRes.json();
      const rendered: string = json?.rendered || '';
      if (rendered.trim()) {
        return buildHtmlResponse(rendered);
      }
    }
  } catch {
    // strategy 1 failed, fall through
  }

  // ── Strategy 2: Fetch WP frontend post removed to prevent content repetition ────────────────
  // Note: Strategy 2 was returning the entire blog content inside the iframe, 
  // causing recursive rendering. We now only rely on the Gutenberg block renderer.


  // ── Final fallback: show raw shortcode as a notice ─────────────────────────
  return buildHtmlResponse(
    `<p style="color:#888;font-style:italic;padding:1rem;">
      [Shortcode rendering unavailable: <code>${escapeHtml(shortcode)}</code>]
    </p>`
  );
}

function escapeHtml(str: string) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function buildHtmlResponse(htmlContent: string): NextResponse {
  const page = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: -apple-system, BlinkMacSystemFont, 'Inter', sans-serif; background: transparent; }
  img { max-width: 100%; height: auto; display: block; }
  table { width: 100%; border-collapse: collapse; }
  th, td { border: 1px solid #e5e7eb; padding: 8px 12px; text-align: left; }
  th { background: #f3f4f6; font-weight: 600; }
  tr:nth-child(even) td { background: #f9fafb; }
</style>
</head>
<body>
${htmlContent}
</body>
</html>`;

  return new NextResponse(page, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
      'X-Frame-Options': 'SAMEORIGIN',
    },
  });
}
