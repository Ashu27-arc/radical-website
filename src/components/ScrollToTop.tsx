'use client';

import { useEffect, useState } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down to 300px
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div 
      className={`fixed bottom-8 right-8 z-[100] transition-all duration-500 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-50 pointer-events-none'
      }`}
    >
      <button
        onClick={scrollToTop}
        className="group relative w-14 h-14 bg-gradient-to-br from-[#007594] to-[#63cdb4] text-white rounded-full flex items-center justify-center shadow-[0_10px_25px_-5px_rgba(0,117,148,0.4)] hover:shadow-[0_20px_35px_-10px_rgba(0,117,148,0.5)] active:scale-90 transition-all duration-300 border border-white/20"
        aria-label="Scroll to top"
      >
        <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <i className="pi pi-arrow-up text-2xl font-bold group-hover:-translate-y-1 transition-transform duration-300" />
      </button>
    </div>
  );
}
