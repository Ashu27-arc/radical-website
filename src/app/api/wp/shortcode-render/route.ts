import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export const revalidate = 300;

const WP_BASE = 'https://backup.radicaleducation.in';

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const scEncoded = searchParams.get('sc') || '';

  if (!scEncoded) {
    return new NextResponse('Missing sc param', { status: 400 });
  }

  let shortcode = '';
  try {
    shortcode = Buffer.from(scEncoded, 'base64').toString('utf8');
  } catch {
    return new NextResponse('Invalid sc param', { status: 400 });
  }

  try {
    const blockUrl =
      `${WP_BASE}/wp-json/wp/v2/block-renderer/core%2Fshortcode?attributes%5Btext%5D=${encodeURIComponent(shortcode)}`;

    const headers: Record<string, string> = {
      Accept: 'application/json',
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    };

    if (process.env.WP_USER && process.env.WP_APP_PASSWORD) {
      const auth = Buffer.from(
        `${process.env.WP_USER}:${process.env.WP_APP_PASSWORD}`
      ).toString('base64');
      headers['Authorization'] = `Basic ${auth}`;
    }

    const blockRes = await axios.get(blockUrl, { headers });

    if (blockRes.status === 200) {
      const json = blockRes.data;
      const rendered: string = json?.rendered || '';
      if (rendered.trim()) {
        return buildHtmlResponse(rendered);
      }
    }
  } catch { }

  return buildHtmlResponse(
    `<p style="color:#888;font-style:italic;padding:1rem;">
      [Shortcode rendering unavailable: <code>${escapeHtml(shortcode)}</code>]
    </p>`
  );
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
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
* {
  box-sizing:border-box;
  margin: 0;
  padding: 0
}
body {
  font-family: 'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: transparent;
}

.wpforms-container {
  width: 100% !important
}
.wpforms-form {
  margin: 0 !important
}
img {
  max-width: 100%;
  height: auto
}
table {
  width: 100%;
  border-collapse: collapse
}
</style>

</head>
<body>
<div style="padding:16px;">
${htmlContent}
</div>

<script src="${WP_BASE}/wp-content/plugins/wpforms/assets/js/wpforms.js"></script>

</body>
</html>`;

  return new NextResponse(page, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
      'Access-Control-Allow-Origin': '*'
    },
  });
}