"use client";

import React, { useEffect, useRef, useState } from 'react';

/**
 * ShortcodeRenderer Component
 * 
 * Purpose: Renders WordPress HTML (shortcode output) with isolated CSS.
 * - Loads official TwentyTwentyFive theme and WPForms CSS dynamically.
 * - Scopes styles using Shadow DOM to prevent global style leakage.
 * - Cleans up resources on unmount.
 */

interface ShortcodeRendererProps {
  html: string;
  className?: string;
}

// WordPress CSS Assets
const WP_CSS_URLS = [
  'https://backup.radicaleducation.in/wp-content/themes/twentytwentyfive/style.css',
  'https://backup.radicaleducation.in/wp-content/plugins/wpforms/assets/css/wpforms-full.css',
];

const ShortcodeRenderer: React.FC<ShortcodeRendererProps> = ({ html, className = '' }) => {
  const hostRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!hostRef.current) return;

    // 1. Initialize Shadow DOM for strict style isolation
    const shadowRoot = hostRef.current.shadowRoot || hostRef.current.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = '';

    // 2. Create a wrapper for the HTML content
    const wrapper = document.createElement('div');
    wrapper.className = `wp-shortcode-container ${className}`;
    
    // Fix absolute URLs for images and links if they are relative
    let processedHtml = html;
    if (processedHtml.includes('wpforms-container')) {
       // Ensure form actions point to the WordPress backend
       processedHtml = processedHtml.replace(/action="\/([^"]*)"/g, 'action="https://backup.radicaleducation.in/$1"');
    }
    
    wrapper.innerHTML = processedHtml;

    // 3. Load WordPress CSS dynamically into the Shadow Root
    WP_CSS_URLS.forEach((url) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = url;
      shadowRoot.appendChild(link);
    });

    // 4. Add isolation-level resets and typography
    const internalStyles = document.createElement('style');
    internalStyles.textContent = `
      :host { display: block; width: 100%; overflow: visible; }
      .wp-shortcode-container {
        all: initial; display: block;
        font-family: 'Inter', -apple-system, system-ui, sans-serif;
        line-height: 1.8; color: #1f2937; font-size: 17px;
      }
      @media (max-width: 768px) { .wp-shortcode-container { font-size: 15px; } }
      
      p { margin-bottom: 1.5rem; text-align: justify; }
      h1, h2, h3 { font-weight: 700; margin-top: 2rem; margin-bottom: 1rem; color: #111827; display: block; }
      a { color: #005A8B; text-decoration: underline; font-weight: 600; }
      img { max-width: 100%; h-auto; border-radius: 12px; margin: 2rem auto; display: block; }
      
      /* THE FIX: Hide the "Please enable JavaScript" message */
      .wpforms-error-noscript, noscript, .wpforms-noscript {
        display: none !important;
        visibility: hidden !important;
      }

      /* Native WPForms Styling fallbacks */
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
    `;
    shadowRoot.appendChild(internalStyles);
    shadowRoot.appendChild(wrapper);

    // 5. Load Scripts globally (only if a form is present)
    // WPForms scripts often fail inside Shadow DOM, so we load them globally 
    // to handle the non-shadow parts of the form submission if possible.
    if (processedHtml.includes('wpforms-container') && !document.getElementById('wpforms-scripts')) {
       const scriptContainer = document.createElement('div');
       scriptContainer.id = 'wpforms-scripts';
       
       const jquery = document.createElement('script');
       jquery.src = 'https://code.jquery.com/jquery-3.7.1.min.js';
       
       const wpforms = document.createElement('script');
       wpforms.src = 'https://backup.radicaleducation.in/wp-content/plugins/wpforms/assets/js/wpforms.js';
       
       scriptContainer.appendChild(jquery);
       scriptContainer.appendChild(wpforms);
       document.body.appendChild(scriptContainer);
    }

    setIsReady(true);
  }, [html, className]);

  return (
    <div
      ref={hostRef}
      className={`shortcode-renderer-host ${isReady ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}
    />
  );
};

export default ShortcodeRenderer;
