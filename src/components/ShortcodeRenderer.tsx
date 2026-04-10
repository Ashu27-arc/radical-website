"use client";

import React, { useEffect, useRef, useState } from "react";

interface ShortcodeRendererProps {
  html: string;
  className?: string;
}


const INTERNAL_STYLES = `
:host { 
  display: block; 
  width: 100%;
  --wp-primary: #005A8B;
  --wp-primary-dark: #004a73;
  --wp-text: #1f2937;
  --wp-text-light: #6b7280;
  --wp-border: #e5e7eb;
  --wp-bg-input: #f9fafb;
}

.wp-shortcode-container {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.8;
  color: var(--wp-text);
  font-size: 17px;
}

img {
  width: 100% !important;
  height: auto !important;
  display: block;
}
img[sizes],
img[sizes="auto"],
img[sizes^="auto"] {
  aspect-ratio: 16/9;
  object-fit: cover;
  contain: none !important;
}


table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  margin: 1.5rem 0;
  font-size: 0.95em;
  border: 1px solid var(--wp-border);
  border-radius: 12px;
  overflow: hidden;
}

thead { background: var(--wp-primary); color: #fff; }
th, td { padding: 14px 18px; border-bottom: 1px solid var(--wp-border); border-right: 1px solid var(--wp-border); }
th:last-child, td:last-child { border-right: none; }
tr:last-child td { border-bottom: none; }
th { font-weight: 600; text-align: left; }
.pageLink{
display:none !important;
}
.blgdtlsfrmhdr {
display: flex;
align-items:center; 
gap:4px;
}
.blgdtlsfrmhdr h4{
margin:0;
paddng:0;
}
.blog-content-wrapper h1 strong, .blog-content-wrapper h2 strong, .blog-content-wrapper h3 strong{
font-weight:600;
}
/* WPForms Modern Styling */
.wpforms-container {
  width: 100% !important;
  margin: 1.5rem auto !important;
  padding: 1.5rem !important;
  background: #ffffff;
  border: 1px solid var(--wp-border);
  border-radius: 20px;
  max-width: 100% !important;
  box-sizing: border-box !important;
}

.wpforms-form {
  margin: 0 !important;
}

.wpforms-head-container {
  margin-bottom: 1.5rem !important;
}

.wpforms-title {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 12px !important;
  text-align: center !important;
  font-size: 1.85rem !important;
  font-weight: 900 !important;
  color: var(--wp-primary) !important;
  margin-bottom: 0.75rem !important;
  letter-spacing: -0.025em;
}

.wpforms-description {
  color: var(--wp-text-light) !important;
  font-size: 1rem !important;
}

.wpforms-field-container {
  display: flex !important;
  flex-direction: column !important;
  gap: 1.25rem !important;
}

.wpforms-field {
  padding: 0 !important;
  margin: 0 !important;
  clear: both;
}

.wpforms-field-label {
  display: block !important;
  font-weight: 600 !important;
  margin-bottom: 0.75rem !important;
  font-size: 0.95rem !important;
  color: var(--wp-text) !important;
}

.wpforms-field-required {
  color: #ef4444 !important;
  margin-left: 4px;
}

.wpforms-field input[type="text"],
.wpforms-field input[type="email"],
.wpforms-field input[type="tel"],
.wpforms-field input[type="url"],
.wpforms-field input[type="number"],
.wpforms-field select,
.wpforms-field textarea {
  width: 100% !important;
  padding: 1rem 1.25rem !important;
  border: 2px solid var(--wp-border) !important;
  border-radius: 14px !important;
  background-color: var(--wp-bg-input) !important;
  font-size: 1rem !important;
  color: var(--wp-text) !important;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1) !important;
  box-sizing: border-box !important;
}

.wpforms-field input:focus,
.wpforms-field select:focus,
.wpforms-field textarea:focus {
  outline: none !important;
  border-color: var(--wp-primary) !important;
  background-color: #fff !important;
  transform: translateY(-1px);
}

.wpforms-submit-container {
  margin-top: 1.5rem !important;
  padding: 0 !important;
}

.wpforms-submit {
  background: var(--wp-primary) !important;
  background: linear-gradient(135deg, var(--wp-primary) 0%, var(--wp-primary-dark) 100%) !important;
  color: #fff !important;
  border: none !important;
  width: 100% !important;
  padding: 1.125rem 2rem !important;
  font-size: 1.1rem !important;
  font-weight: 700 !important;
  border-radius: 14px !important;
  cursor: pointer !important;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
}

.wpforms-submit:hover {
  transform: translateY(-2px);
  filter: brightness(1.1);
}

.wpforms-submit:active {
  transform: translateY(0);
}

.wpforms-field-sublabel {
  display: block !important;
  font-size: 0.8rem !important;
  color: var(--wp-text-light) !important;
  margin-top: 0.4rem !important;
  font-weight: 400 !important;
}

.wpforms-error {
  color: #ef4444 !important;
  font-size: 0.8rem !important;
  margin-top: 0.4rem !important;
  display: block !important;
}

input.wpforms-error, 
textarea.wpforms-error,
select.wpforms-error {
  border-color: #ef4444 !important;
}

input.wpforms-error:focus {
  border-color: #ef4444 !important;
}
.schema-faq {
  margin-top: 30px;
}

.schema-faq-section {
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 12px;
}

.schema-faq-question {
  display: block;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  position: relative;
  padding-right: 30px;
}

.schema-faq-question::after {
  content: "+";
  position: absolute;
  right: 0;
  top: 0;
  font-size: 22px;
  transition: 0.3s;
}

.schema-faq-answer {
  display: none;
  margin-top: 10px;
  color: var(--wp-text-light);
}

.schema-faq-section.active .schema-faq-answer {
  display: block;
}

.schema-faq-section.active .schema-faq-question::after {
  content: "−";
}
/* Success Messages */
.wpforms-confirmation-container-full {
  background: #f0fdf4 !important;
  border: 1px solid #bbf7d0 !important;
  border-radius: 16px !important;
  padding: 2rem !important;
  color: #166534 !important;
  font-weight: 600 !important;
  text-align: center !important;
}

@media (max-width: 640px) {
  .wpforms-container {
    padding: 1.5rem !important;
    border-radius: 16px;
  }
}
`;





const ShortcodeRenderer: React.FC<ShortcodeRendererProps> = ({
  html,
  className = "",
}) => {
  const hostRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!hostRef.current) return;

    const shadowRoot =
      hostRef.current.shadowRoot ||
      hostRef.current.attachShadow({ mode: "open" });

    shadowRoot.innerHTML = "";

    // remove inline background and shadow styles
    let processedHtml = html
      .replace(/background-color\s*:\s*[^;"']*;?/gi, "")
      .replace(/background\s*:\s*[^;"']*;?/gi, "")
      .replace(/box-shadow\s*:\s*[^;"']*;?/gi, "");

    const wrapper = document.createElement("div");
    wrapper.className = `wp-shortcode-container ${className}`;
    wrapper.innerHTML = processedHtml;



    // internal styles
    const styleEl = document.createElement("style");
    styleEl.textContent = INTERNAL_STYLES;
    shadowRoot.appendChild(styleEl);

    shadowRoot.appendChild(wrapper);







    

    setIsReady(true);




// ================= FAQ ACCORDION JS =================

const faqs = shadowRoot.querySelectorAll(".schema-faq-section");
const questions = shadowRoot.querySelectorAll(".schema-faq-question");

if (faqs.length > 0) {
  faqs.forEach((f) => f.classList.remove("active"));
  faqs[0].classList.add("active");
}

const handleClick = (e: Event) => {
  const target = e.currentTarget as HTMLElement;
  const parent = target.closest(".schema-faq-section");

  faqs.forEach((f) => f.classList.remove("active"));

  if (parent) parent.classList.add("active");
};

questions.forEach((q) => {
  q.addEventListener("click", handleClick);
});

// cleanup (VERY IMPORTANT)
return () => {
  questions.forEach((q) => {
    q.removeEventListener("click", handleClick);
  });
};


  }, [html, className]);




  

  return (
    <div
      className={`shortcode-renderer-wrapper ${isReady ? "opacity-100" : "opacity-0"
        } transition-opacity duration-500`}
    >
      <div ref={hostRef} />
    </div>
  );
};

export default ShortcodeRenderer;