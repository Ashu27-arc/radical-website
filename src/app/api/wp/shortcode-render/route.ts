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
    const headers: Record<string, string> = {
      'Accept': 'application/json',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    };

    if (process.env.WP_USER && process.env.WP_APP_PASSWORD) {
      const auth = Buffer.from(`${process.env.WP_USER}:${process.env.WP_APP_PASSWORD}`).toString('base64');
      headers['Authorization'] = `Basic ${auth}`;
    }

    const blockRes = await fetch(blockUrl, {
      headers,
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
  body { 
    font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', Roboto, sans-serif; 
    background: transparent; 
    color: #374151;
    line-height: 1.5;
  }
  img { max-width: 100%; height: auto; display: block; margin: 1.5rem auto; border-radius: 8px; }
  table { width: 100%; border-collapse: collapse; margin: 1.5rem 0; font-size: 14px; }
  th, td { border: 1px solid #e5e7eb; padding: 10px 14px; text-align: left; }
  th { background: #f3f4f6; font-weight: 600; color: #111827; }
  tr:nth-child(even) td { background: #f9fafb; }

  /* ── Form & WPForms Styling ── */
  .wpforms-container, form {
    width: 100% !important;
    max-width: 100% !important;
    margin: 1rem 0 !important;
  }
  .wpforms-field-container { margin-bottom: 1.5rem; }
  .wpforms-field { margin-bottom: 1.25rem; display: flex; flex-direction: column; }
  
  .wpforms-field-label, label {
    display: block;
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 0.5rem;
    color: #111827;
  }
  
  .wpforms-field-sublabel {
    display: block;
    font-size: 12px;
    margin-top: 4px;
    color: #6b7280;
  }
  
  input[type="text"], input[type="email"], input[type="tel"], input[type="url"], 
  input[type="number"], select, textarea {
    width: 100%;
    padding: 12px 16px;
    border: 1px solid #d1d5db;
    border-radius: 10px;
    font-size: 15px;
    transition: all 0.2s ease;
    outline: none;
    background-color: #fafafa;
    font-family: inherit;
    color: #1f2937;
  }
  
  input:focus, textarea:focus, select:focus {
    border-color: #005A8B;
    box-shadow: 0 0 0 4px rgba(0, 90, 139, 0.1);
    background-color: #ffffff;
  }
  
  .wpforms-submit-container, .form-submit {
    margin-top: 2rem;
  }
  
  .wpforms-submit, button[type="submit"] {
    background: linear-gradient(135deg, #005A8B 0%, #0077BF 100%) !important;
    color: #ffffff !important;
    border: none !important;
    padding: 14px 32px !important;
    font-size: 16px !important;
    font-weight: 700 !important;
    border-radius: 10px !important;
    cursor: pointer !important;
    transition: all 0.3s ease !important;
    display: inline-block !important;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06) !important;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  .wpforms-submit:hover, button[type="submit"]:hover {
    background: linear-gradient(135deg, #004a73 0%, #005A8B 100%) !important;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05) !important;
    transform: translateY(-1px);
  }
  
  .wpforms-submit:active, button[type="submit"]:active {
    transform: translateY(0);
  }
  
  .wpforms-required-label { color: #ef4444; margin-left: 2px; }
  
  /* Success/Confirmation Message */
  .wpforms-confirmation-container-full, .wpforms-confirmation-container {
    padding: 2rem;
    background-color: #ecfdf5;
    border: 1px solid #10b981;
    border-radius: 12px;
    color: #065f46;
    text-align: center;
    font-weight: 500;
  }

  /* Hide WPForms branding/notices we don't want */
  .wpforms-error-noscript, .wpforms-noscript { display: none !important; }
  
  /* Error styling */
  .wpforms-error { color: #ef4444; font-size: 13px; margin-top: 6px; font-weight: 500; }
  input.wpforms-error, textarea.wpforms-error { border-color: #ef4444 !important; background-color: #fef2f2 !important; }
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
