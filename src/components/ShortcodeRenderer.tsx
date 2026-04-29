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
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.8;
  color: var(--wp-text);
  font-size: 17px;
}

img {
  width: 100% !important;
  height: auto !important;
  display: block;
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
.wp-block-table{
margin:0;
}
img[class*="wp-image-"]{
  width: 100% !important;
    height: auto !important;
    max-width: 100%;
    display: block;
    contain: none !important;
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
    align-items: center;
    gap: 0;
    justify-content: center;
    flex-direction: column;
    color: #fff;
    line-height: 1.3;
}
    .blgdtlsfrmhdr big{
    font-size:26px;
    font-weight: normal;
    }
    .wpforms-form .wpforms-label-hide{
    display:none !important;
    }
   .wpforms-form .wpforms-field-payment-checkbox fieldset{
   padding:0;
   border:none;
   }
   .wpforms-form .wpforms-field-payment-checkbox fieldset legend{
   display:none !important;
   }
   .wpforms-form .wpforms-field-payment-checkbox ul.wpforms-field-required{
   padding:0 !important;
   margin:0 !important;
   color:#fff !important;
       list-style: none;
   }
.blgdtlsfrmhdr h4{
margin:0;
paddng:0;
font-size:30px;
font-weight: bold;
}
.blog-content-wrapper h1 strong, .blog-content-wrapper h2 strong, .blog-content-wrapper h3 strong{
font-weight:600;
}
/* WPForms Modern Styling */
.wpforms-container {
  width: 100% !important;
  margin: 1.5rem auto !important;
  padding: 1.5rem !important;
  background: #0b77b6;
  border: 1px solid var(--wp-border);
  border-radius: 20px;
  box-sizing: border-box !important;
  max-width:500px;
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
/* ===== MODERN FAQ ACCORDION ===== */

.sp-easy-accordion {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* Card */
.sp-easy-accordion .sp-ea-single {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  padding: 18px 20px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0,0,0,0.04);
}

/* Hover effect */
.sp-easy-accordion .sp-ea-single:hover {
  border-color: var(--wp-primary);
  box-shadow: 0 6px 20px rgba(0,0,0,0.08);
}

/* Active */
.sp-easy-accordion .sp-ea-single.active {
  border-color: var(--wp-primary);
  background: #f8fbff;
}

/* Question */
.sp-easy-accordion .ea-header a {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 17px;
  font-weight: 600;
  color: var(--wp-text);
  text-decoration: none;
  cursor: pointer;
  gap: 15px;
}

/* Icon circle */
.sp-easy-accordion .ea-header a::after {
  content: "+";
  min-width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f1f5f9;
  border-radius: 50%;
  font-size: 20px;
  font-weight: 500;
  transition: all 0.3s ease;
}
.sp-easy-accordion .sp-ea-single .ea-header{
margin:0;
}
/* Active icon */
.sp-easy-accordion .sp-ea-single.active .ea-header a::after {
  content: "−";
  background: var(--wp-primary);
  color: #fff;
  transform: rotate(180deg);
}

/* Answer */
.sp-easy-accordion .sp-collapse {
  max-height: 0;
  overflow: hidden;
  transition: all 0.35s ease;
  opacity: 0;
}

/* Active answer */
.sp-easy-accordion .sp-ea-single.active .sp-collapse {
  max-height: 500px;
  opacity: 1;
  margin-top: 12px;
}

/* Answer text */
.sp-easy-accordion .ea-body {
  font-size: 15.5px;
  color: var(--wp-text-light);
  line-height: 1.7;
}

/* Mobile */
@media (max-width: 640px) {
  .sp-easy-accordion .sp-ea-single {
    padding: 16px;
  }

  .sp-easy-accordion .ea-header a {
    font-size: 15px;
  }
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








  }, [html, className]);


// ================= FAQ ACCORDION JS =================


useEffect(() => {
  if (!hostRef.current) return;

  const shadowRoot =
    hostRef.current.shadowRoot ||
    hostRef.current.attachShadow({ mode: "open" });

  shadowRoot.innerHTML = "";

  // ✅ CLEAN HTML HERE
  let processedHtml = html
    .replace(/background-color\s*:\s*[^;"']*;?/gi, "")
    .replace(/background\s*:\s*[^;"']*;?/gi, "")
    .replace(/box-shadow\s*:\s*[^;"']*;?/gi, "")
    .replace(/href="#"/g, 'href="javascript:void(0)"') // 🔥 FIX scroll
    .replace(/data-sptoggle="spcollapse"/g, ""); // 🔥 REMOVE plugin conflict

  const wrapper = document.createElement("div");
  wrapper.className = `wp-shortcode-container ${className}`;
  wrapper.innerHTML = processedHtml;

  const styleEl = document.createElement("style");
  styleEl.textContent = INTERNAL_STYLES;

  shadowRoot.appendChild(styleEl);
  shadowRoot.appendChild(wrapper);

  setIsReady(true);

  // ================= FAQ (schema-faq) =================
  const faqs = shadowRoot.querySelectorAll(".schema-faq-section");
  const questions = shadowRoot.querySelectorAll(".schema-faq-question");

  if (faqs.length > 0) {
    faqs.forEach((f) => f.classList.remove("active"));
    faqs[0].classList.add("active");
  }

  const handleSchemaClick = (e: Event) => {
    e.preventDefault();
    e.stopPropagation();

    const target = e.currentTarget as HTMLElement;
    const parent = target.closest(".schema-faq-section");

    faqs.forEach((f) => f.classList.remove("active"));

    if (parent) parent.classList.add("active");
  };

  questions.forEach((q) => {
    q.addEventListener("click", handleSchemaClick);
  });

  // ================= EASY ACCORDION (sp-ea) =================
  const accordions = shadowRoot.querySelectorAll(".sp-easy-accordion");

  accordions.forEach((accordion) => {
    const items = accordion.querySelectorAll(".sp-ea-single");
    const links = accordion.querySelectorAll(".ea-header a");

    if (items.length > 0) {
      items.forEach((i) => i.classList.remove("active"));
      items[0].classList.add("active");
    }

    const handleAccordionClick = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();

      const link = e.currentTarget as HTMLElement;
      const parent = link.closest(".sp-ea-single");

      items.forEach((i) => i.classList.remove("active"));

      if (parent) parent.classList.add("active");
    };

    links.forEach((l) => {
      l.addEventListener("click", handleAccordionClick);
    });
  });

  // ✅ CLEANUP
  return () => {
    questions.forEach((q) => {
      q.removeEventListener("click", handleSchemaClick);
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