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
    // This is the ONLY way to "avoid affecting other components" when loading 
    // WordPress theme CSS which often contains global resets (*, body, html).
    const shadowRoot = hostRef.current.shadowRoot || hostRef.current.attachShadow({ mode: 'open' });

    // 2. Clear existing content (important for HMR/Hot Reloading)
    shadowRoot.innerHTML = '';

    // 3. Create a wrapper for the HTML content
    const wrapper = document.createElement('div');
    wrapper.className = `wp-shortcode-container ${className}`;
    // Using native innerHTML inside Shadow Root instead of dangerouslySetInnerHTML 
    // because React does not manage the internal tree of a Shadow Root directly.
    wrapper.innerHTML = html;

    // 4. Load WordPress CSS dynamically into the Shadow Root
    WP_CSS_URLS.forEach((url) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = url;
      shadowRoot.appendChild(link);
    });

    // 5. Add isolation-level resets
    // This ensures the content doesn't completely lose app-level typography
    // while still being protected from the theme's global resets.
    const internalStyles = document.createElement('style');
    internalStyles.textContent = `
      :host {
        display: block;
        width: 100%;
        overflow: visible;
        contain: content;
      }
      .wp-shortcode-container {
        all: initial; /* Reset inherited styles to keep isolation strict */
        display: block;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
        line-height: 1.6;
        color: #333;
        text-align: left;
      }
      /* Ensure typical WP form elements looks decent */
      .wp-shortcode-container input, 
      .wp-shortcode-container select, 
      .wp-shortcode-container textarea {
        font-family: inherit;
      }
    `;
    shadowRoot.appendChild(internalStyles);
    shadowRoot.appendChild(wrapper);

    // Fade in when ready
    setIsReady(true);

    // 6. Cleanup: 
    // Styles inside Shadow DOM are automatically removed when the host (hostRef) unmounts.
    return () => {
      // Logic for explicit unmounting if needed
    };
  }, [html, className]);

  return (
    <div
      ref={hostRef}
      id="wp-shortcode-renderer-root"
      className={`shortcode-renderer-host ${isReady ? 'opacity-100 transition-opacity duration-700' : 'opacity-0'}`}
      style={{ minHeight: '50px' }}
    />
  );
};

export default ShortcodeRenderer;
