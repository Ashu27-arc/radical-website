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
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<style>
  :root {
    --primary-color: #005A8B;
    --primary-hover: #004a73;
    --bg-light: #f9fafb;
    --text-main: #1f2937;
    --text-muted: #6b7280;
    --border-color: #e5e7eb;
    --radius: 12px;
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }
  
  body { 
    font-family: 'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; 
    background: transparent; 
    color: var(--text-main);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }

  img { max-width: 100%; height: auto; display: block; margin: 1.5rem auto; border-radius: var(--radius); }
  
  table { width: 100%; border-collapse: collapse; margin: 1.5rem 0; font-size: 14px; overflow: hidden; border-radius: 8px; border: 1px solid var(--border-color); }
  th, td { border: 1px solid var(--border-color); padding: 12px 16px; text-align: left; }
  th { background: #f3f4f6; font-weight: 600; color: #111827; }

  /* ── Form & WPForms Styling ── */
  .wpforms-container, form {
    width: 100% !important;
    max-width: 100% !important;
    margin: 1rem 0 !important;
    font-family: inherit;
  }

  .wpforms-field-container { margin-bottom: 2rem; }
  
  .wpforms-field { 
    margin-bottom: 1.5rem; 
    display: flex; 
    flex-direction: column; 
    width: 100%;
    clear: both;
  }
  
  .wpforms-field-label, label {
    display: block;
    font-weight: 600;
    font-size: 15px;
    margin-bottom: 8px;
    color: #111827;
    letter-spacing: -0.01em;
  }
  
  .wpforms-field-sublabel {
    display: block;
    font-size: 12px;
    margin-top: 6px;
    color: var(--text-muted);
    font-weight: 400;
  }

  input[type="text"], input[type="email"], input[type="tel"], input[type="url"], 
  input[type="number"], input[type="password"], select, textarea {
    width: 100%;
    padding: 14px 18px;
    border: 1.5px solid var(--border-color);
    border-radius: var(--radius);
    font-size: 16px;
    font-family: inherit;
    color: var(--text-main);
    background-color: #ffffff;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    outline: none;
    box-shadow: var(--shadow-sm);
  }
  
  input:focus, textarea:focus, select:focus {
    border-color: var(--primary-color);
    box-shadow: 0 0 0 4px rgba(0, 90, 139, 0.1), var(--shadow-sm);
    background-color: #ffffff;
  }

  textarea { min-height: 140px; resize: vertical; }

  /* Grid Layouts */
  .wpforms-field-row {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
  }
  
  .wpforms-one-half { width: calc(50% - 0.75rem) !important; float: left; margin-right: 1.5rem; clear: none !important; }
  .wpforms-one-half:nth-of-type(2n) { margin-right: 0; }
  
  @media (max-width: 640px) {
    .wpforms-one-half { width: 100% !important; float: none; margin-right: 0; }
  }

  /* Checkboxes & Radios */
  .wpforms-field-checkbox ul, .wpforms-field-radio ul {
    list-style: none;
    padding: 0;
    margin: 4px 0 0 0;
  }
  .wpforms-field-checkbox li, .wpforms-field-radio li {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .wpforms-field-checkbox input, .wpforms-field-radio input {
    width: 20px;
    height: 20px;
    margin-right: 12px;
    cursor: pointer;
    accent-color: var(--primary-color);
  }

  /* Submit Button */
  .wpforms-submit-container, .form-submit {
    margin-top: 2.5rem;
    clear: both;
  }
  
  .wpforms-submit, button[type="submit"] {
    background: linear-gradient(135deg, var(--primary-color) 0%, #0077BF 100%) !important;
    color: #ffffff !important;
    border: none !important;
    padding: 16px 40px !important;
    font-size: 16px !important;
    font-weight: 700 !important;
    border-radius: var(--radius) !important;
    cursor: pointer !important;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
    display: inline-flex !important;
    align-items: center;
    justify-content: center;
    box-shadow: var(--shadow-md) !important;
    text-transform: uppercase;
    letter-spacing: 1px;
    width: auto !important;
  }
  
  .wpforms-submit:hover, button[type="submit"]:hover {
    background: linear-gradient(135deg, var(--primary-hover) 0%, var(--primary-color) 100%) !important;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2) !important;
    transform: translateY(-2px);
  }
  
  .wpforms-submit:active, button[type="submit"]:active {
    transform: translateY(0);
    box-shadow: var(--shadow-sm) !important;
  }
  
  .wpforms-required-label { color: #ef4444; margin-left: 4px; }
  
  /* Success Message */
  .wpforms-confirmation-container-full, .wpforms-confirmation-container {
    padding: 3rem 2rem;
    background-color: #f0fdf4;
    border: 2px solid #22c55e;
    border-radius: 20px;
    color: #166534;
    text-align: center;
    font-weight: 600;
    font-size: 18px;
    margin: 2rem 0;
    box-shadow: 0 20px 25px -5px rgba(34, 197, 94, 0.05);
  }

  /* Error Message */
  .wpforms-error { color: #dc2626; font-size: 13px; margin-top: 8px; font-weight: 500; }
  input.wpforms-error, textarea.wpforms-error { border-color: #dc2626 !important; background-color: #fef2f2 !important; }
  label.wpforms-error { color: #dc2626 !important; }

  .wpforms-error-noscript, .wpforms-noscript { display: none !important; }
</style>
</head>
<body>
<div style="padding: 16px;">
${htmlContent}
</div>
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
