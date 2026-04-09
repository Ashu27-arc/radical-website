"use client";

import React, { useEffect, useRef, useState } from 'react';

/**
 * ShortcodeRenderer Component
 *
 * Purpose: Renders WordPress HTML (shortcode output) inside an isolated Shadow DOM.
 * - Iframes inside the content are rendered OUTSIDE the shadow root (appended to a
 *   sibling div) so browser same-origin checks work correctly.
 * - Tables get full, responsive styling.
 * - Background colors from pasted HTML are stripped to match site design.
 */

interface ShortcodeRendererProps {
  html: string;
  className?: string;
}

const WP_CSS_URLS = [
  'https://backup.radicaleducation.in/wp-content/themes/twentytwentyfive/style.css',
];

const INTERNAL_STYLES = `
  :host { display: block; width: 100%; overflow: visible; }

  .wp-shortcode-container {
    all: initial;
    display: block;
    font-family: 'Inter', -apple-system, system-ui, sans-serif;
    line-height: 1.8;
    color: #1f2937;
    font-size: 17px;
  }

  @media (max-width: 768px) { .wp-shortcode-container { font-size: 15px; } }

  /* ── Typography ── */
  p  { margin-bottom: 1.5rem; text-align: justify; display: block; }
  h1 { font-size: 2rem;   font-weight: 800; }
  h2 { font-size: 1.6rem; font-weight: 700; }
  h3 { font-size: 1.3rem; font-weight: 700; }
  h4 { font-size: 1.1rem; font-weight: 700; }
  h5 { font-size: 1rem;   font-weight: 700; }
  h6 { font-size: 0.95rem; font-weight: 700; }
  h1,h2,h3,h4,h5,h6 {
    margin-top: 2rem;
    margin-bottom: 1rem;
    color: #111827;
    display: block;
    line-height: 1.3;
  }
  ul, ol { margin: 1rem 0 1.5rem 1.5rem; padding: 0; display: block; }
  li { margin-bottom: 0.4rem; }
  a  { color: #005A8B; text-decoration: underline; font-weight: 600; }
  a:hover { color: #0077BF; }
  strong, b { font-weight: 700; }
  em, i { font-style: italic; }
  blockquote {
    border-left: 4px solid #005A8B;
    margin: 1.5rem 0;
    padding: 0.75rem 1.25rem;
    background: #f0f9ff;
    color: #374151;
    border-radius: 0 8px 8px 0;
  }
  hr { border: none; border-top: 2px solid #e5e7eb; margin: 2rem 0; }

  /* ── Images ── */
  img {
    max-width: 100%;
    height: auto;
    border-radius: 12px;
    margin: 2rem auto;
    display: block;
  }

  /* ── Iframe embeds (shortcodes rendered as iframes) ── */
  .wp-shortcode-iframe-embed,
  .wpforms-container-embed {
    width: 100%;
    margin: 1.5rem 0;
    clear: both;
    display: block;
  }
  .wp-shortcode-iframe-embed iframe,
  .wpforms-container-embed iframe {
    width: 100%;
    border: none;
    display: block;
  }

  /* ── Tables ── */
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 1.5rem 0 2rem 0;
    font-size: 0.95em;
    display: table;
    overflow-x: auto;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 1px 6px rgba(0,0,0,0.07);
  }
  thead { background: #005A8B; color: #fff; }
  thead th {
    padding: 12px 16px;
    font-weight: 700;
    text-align: left;
    font-size: 0.92em;
    white-space: nowrap;
    color: #fff;
  }
  tbody tr { border-bottom: 1px solid #e5e7eb; transition: background 0.15s; }
  tbody tr:nth-child(even) { background: #f8fafc; }
  tbody tr:hover { background: #eff6ff; }
  td, td * { color: #374151; }
  td {
    padding: 10px 16px;
    vertical-align: top;
    line-height: 1.6;
  }
  td:first-child { font-weight: 600; color: #1e3a5f; }

  /* Responsive table scroll on small screens */
  .wp-shortcode-container > table,
  .wp-shortcode-container .wp-block-table table {
    display: block;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  /* ── WPForms styling fallbacks ── */
  .wpforms-error-noscript, noscript, .wpforms-noscript {
    display: none !important;
  }
  .wpforms-container { margin: 2rem 0; width: 100% !important; }
  .wpforms-form button[type=submit] {
    background-color: #005A8B !important;
    color: white !important;
    padding: 12px 24px !important;
    border-radius: 8px !important;
    border: none !important;
    font-weight: bold !important;
    cursor: pointer !important;
  }

  /* ── Code blocks ── */
  pre, code {
    font-family: 'Fira Code', 'Courier New', monospace;
    background: #f3f4f6;
    border-radius: 6px;
  }
  code { padding: 2px 6px; font-size: 0.88em; }
  pre  { padding: 1rem 1.25rem; overflow-x: auto; margin: 1.5rem 0; }
  pre code { background: none; padding: 0; }
`;

const ShortcodeRenderer: React.FC<ShortcodeRendererProps> = ({ html, className = '' }) => {
  const hostRef = useRef<HTMLDivElement>(null);
  const iframeContainerRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!hostRef.current) return;

    // ── 1. Init Shadow DOM ────────────────────────────────────────────────────
    const shadowRoot =
      hostRef.current.shadowRoot ||
      hostRef.current.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = '';

    // ── 2. Strip background-color / background CSS from pasted content ────────
    let processedHtml = html
      .replace(/background-color\s*:\s*[^;"']*;?/gi, '')
      .replace(/background\s*:\s*[^;"']*;?/gi, '');

    // ── 3. Extract iframe HTML so it can live OUTSIDE the shadow root ─────────
    //       (iframes inside shadow DOM have same-origin issues with onload/height)
    const iframes: string[] = [];
    const IFRAME_PLACEHOLDER = 'data-iframe-placeholder';
    processedHtml = processedHtml.replace(
      /<div[^>]*class="(?:wp-shortcode-iframe-embed|wpforms-container-embed)"[^>]*>[\s\S]*?<\/div>/gi,
      (match) => {
        const idx = iframes.length;
        iframes.push(match);
        return `<div ${IFRAME_PLACEHOLDER}="${idx}" style="width:100%;margin:1.5rem 0"></div>`;
      }
    );

    // ── 4. Build shadow content ───────────────────────────────────────────────
    const wrapper = document.createElement('div');
    wrapper.className = `wp-shortcode-container ${className}`;
    wrapper.innerHTML = processedHtml;

    // WP theme CSS
    WP_CSS_URLS.forEach((url) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = url;
      shadowRoot.appendChild(link);
    });

    const styleEl = document.createElement('style');
    styleEl.textContent = INTERNAL_STYLES;
    shadowRoot.appendChild(styleEl);
    shadowRoot.appendChild(wrapper);

    // ── 5. Render extracted iframes in the light DOM sibling ─────────────────
    if (iframeContainerRef.current) {
      iframeContainerRef.current.innerHTML = '';
      iframes.forEach((iframeHtml) => {
        const div = document.createElement('div');
        div.innerHTML = iframeHtml;
        // Auto-resize iframe on load
        const iframe = div.querySelector('iframe');
        if (iframe) {
          iframe.addEventListener('load', () => {
            try {
              const body = iframe.contentDocument?.body;
              if (body) iframe.style.height = body.scrollHeight + 'px';
            } catch { /* cross-origin */ }
          });
        }
        iframeContainerRef.current!.appendChild(div);
      });
    }

    // ── 6. Placeholder divs inside shadow → sync their position ──────────────
    //       We don't need to do complex positioning; iframes render sequentially
    //       below the shadow content, which is fine for most blog layouts.

    setIsReady(true);
  }, [html, className]);

  return (
    <div
      className={`shortcode-renderer-wrapper ${isReady ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
    >
      {/* Shadow DOM host – contains text/images/tables */}
      <div ref={hostRef} className="shortcode-renderer-host" />

      {/* Light DOM – contains iframes (needed for correct resize & CORS) */}
      <div ref={iframeContainerRef} className="shortcode-iframe-container" />
    </div>
  );
};

export default ShortcodeRenderer;
