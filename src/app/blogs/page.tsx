"use client";

import React, { useState, useRef, useEffect, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getBlogs, getBlogLinks, getWpBlogs, type Blog, type BlogLink } from '@/lib/api';
import { useWebSocket } from '@/hooks/useWebSocket';
import CounselorForm from '@/components/CounselorForm';
import CounselorSection from '@/components/CounselorSection';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const categoryColors: Record<string, string> = {
  'Educational': 'bg-[#BFE6DB] text-[#00A88E]',
  'Education': 'bg-[#BFE6DB] text-[#00A88E]',
  'Exams': 'bg-[#FFE0B2] text-[#C77700]',
  'Government': 'bg-[#D5DCE5] text-[#2C3E50]',
  'Careers': 'bg-[#C9E2FF] text-[#004E89]',
  'MBBS in India': 'bg-[#E8F5E9] text-[#2E7D32]',
  'MBBS Abroad': 'bg-[#BFE6DB] text-[#00A88E]',
  'Study Abroad': 'bg-[#BFE6DB] text-[#00A88E]',
  'NEET UG': 'bg-[#FFEBEE] text-[#D32F2F]',
  'Neet UG': 'bg-[#FFEBEE] text-[#D32F2F]',
  'Neet-UG': 'bg-[#FFEBEE] text-[#D32F2F]',
  'NEET PG': 'bg-[#FFF9C4] text-[#F9A825]',
  'Neet PG': 'bg-[#FFF9C4] text-[#F9A825]',
  'Notification': 'bg-[#E1F5FE] text-[#0288D1]',
};

const defaultCategoryColor = 'bg-[#E3F2FD] text-[#005A8B]';
const stableCategoryOrder = ['All', 'Education', 'Exams', 'Government', 'Careers', 'MBBS in India', 'MBBS Abroad', 'Study Abroad', 'NEET UG', 'NEET PG', 'Notification'];
const BLOGS_CACHE_KEY = 'radical_blogs_cache_v1';
const BLOG_LINKS_CACHE_KEY = 'radical_blog_links_cache_v1';
const WP_BLOGS_CACHE_KEY = 'radical_wp_blogs_cache_v1';

const toCategoryList = (value: unknown): string[] => {
  if (Array.isArray(value)) {
    return value.map((item) => String(item).trim()).filter(Boolean);
  }

  if (typeof value === 'string') {
    return value.split(',').map((item) => item.trim()).filter(Boolean);
  }

  return [];
};

const normalizeCategoryForMatch = (value: string) =>
  value
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]/g, '');

const BlogsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [blogLinks, setBlogLinks] = useState<BlogLink[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 12; // Increased to handle more blogs
  const scrollRef = useRef<HTMLDivElement>(null);
  const [refreshKey, setRefreshKey] = useState(0);
  const wsUrl = process.env.NEXT_PUBLIC_WS_URL || 'https://backend-radical.onrender.com';
  const { addMessageHandler, isConnected } = useWebSocket(wsUrl);

  // Initial load from Next.js API (same MongoDB as CRM)
  useEffect(() => {
    let isMounted = true;

    let cachedBlogs: Blog[] = [];
    let cachedLinks: BlogLink[] = [];

    if (typeof window !== 'undefined') {
      try {
        const rawBlogs = sessionStorage.getItem(BLOGS_CACHE_KEY);
        const rawLinks = sessionStorage.getItem(BLOG_LINKS_CACHE_KEY);
        cachedBlogs = rawBlogs ? JSON.parse(rawBlogs) : [];
        cachedLinks = rawLinks ? JSON.parse(rawLinks) : [];
      } catch {
        cachedBlogs = [];
        cachedLinks = [];
      }
    }

    const hasCachedData = cachedBlogs.length > 0 || cachedLinks.length > 0;
    if (hasCachedData) {
      setBlogs(cachedBlogs);
      setBlogLinks(cachedLinks);
      setLoading(false);
    } else {
      setLoading(true);
    }

    Promise.allSettled([getBlogs(), getBlogLinks(), getWpBlogs()])
      .then(([blogsResult, linksResult, wpResult]) => {
        if (!isMounted) return;

        const blogsData = blogsResult.status === 'fulfilled' ? (blogsResult.value || []) : [];
        const linksData = linksResult.status === 'fulfilled' ? (linksResult.value || []) : [];
        const wpData = wpResult.status === 'fulfilled' ? (wpResult.value || []) : [];

        // Combine all blog data
        const combinedBlogs = [...blogsData, ...wpData];

        // Use fresh data when available, otherwise keep cached data.
        setBlogs(combinedBlogs.length ? combinedBlogs : cachedBlogs);
        setBlogLinks(linksData.length ? linksData : cachedLinks);
        setLoading(false);

        if (typeof window !== 'undefined') {
          try {
            if (combinedBlogs.length) sessionStorage.setItem(BLOGS_CACHE_KEY, JSON.stringify(combinedBlogs));
            if (linksData.length) sessionStorage.setItem(BLOG_LINKS_CACHE_KEY, JSON.stringify(linksData));
          } catch {
            // Ignore storage errors.
          }
        }
      })
      .catch((error) => {
        if (!isMounted) return;
        console.error('Error loading blogs:', error);
        setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [refreshKey]);

  // Real-time: CRM se blog post/update/delete par WebSocket se turant update
  useEffect(() => {
    const removeHandler = addMessageHandler((data) => {
      switch (data.type) {
        case 'NEW_BLOG':
          if (data.blog && data.blog.status === 'Published') {
            setBlogs((prev) => {
              if (prev.find((b) => b.id === data.blog.id)) return prev;
              return [data.blog, ...prev];
            });
          }
          break;
        case 'UPDATE_BLOG':
          if (!data.blog?.id) break;
          setBlogs((prev) => {
            if (data.blog.status !== 'Published') {
              return prev.filter((b) => b.id !== data.blog.id);
            }
            const exists = prev.some((b) => b.id === data.blog.id);
            if (!exists) return [data.blog, ...prev];
            return prev.map((b) => (b.id === data.blog.id ? { ...b, ...data.blog } : b));
          });
          break;
        case 'DELETE_BLOG':
          if (data.blogId) {
            setBlogs((prev) => prev.filter((b) => b.id !== data.blogId));
          }
          break;
        case 'BULK_BANNER_UPDATE':
          // Update all currently cached blogs with the new banner
          const { newBannerUrl } = data;
          if (newBannerUrl) {
            setBlogs((prev) => prev.map((blog) => {
              if (!blog.content) return blog;
              const bannerRegex = /<div class="crm-embed"[^>]*>[\s\S]*?<iframe[^>]*src=["']https?:\/\/xform-blogs\.vercel\.app\/[^"']*["'][\s\S]*?<\/iframe>[\s\S]*?<\/div>|<iframe[^>]*src=["']https?:\/\/xform-blogs\.vercel\.app\/[^"']*["'][\s\S]*?<\/iframe>|<div class="crm-embed"[^>]*>[\s\S]*?<iframe[^>]*src=["']https?:\/\/xform-blogs\.vercel\.app\/(banner|whatsapp)[^"']*["'][\s\S]*?<\/iframe>[\s\S]*?<\/div>|<div class="crm-embed"[^>]*>[\s\S]*?<img[^>]*src=["'][^"']*\/uploads\/blogs\/blog-banner-[^"']*["'][\s\S]*?<\/div>|<img[^>]*src=["'][^"']*\/uploads\/blogs\/blog-banner-[^"']*["'][^>]*>|<div class="crm-embed"[^>]*>[\s\S]*?<img[^>]*alt=["'](Banner|Widget|Blog Banner|WhatsApp Banner|WhatsApp Widget)["'][^>]*>[\s\S]*?<\/div>|<img[^>]*alt=["'](Banner|Widget|Blog Banner|WhatsApp Banner|WhatsApp Widget)["'][^>]*>/gi;
              if (bannerRegex.test(blog.content)) {
                const newBannerHtml = `<div class="crm-embed" contenteditable="false" style="width:100%;max-width:900px;margin:0 auto;margin-bottom:20px;"><img src="${newBannerUrl}" alt="Banner" style="display:block;width:100%;height:auto;border-radius:12px;overflow:hidden;" /></div>`;
                bannerRegex.lastIndex = 0;
                return { ...blog, content: blog.content.replace(bannerRegex, newBannerHtml) };
              }
              return blog;
            }));
          }
          break;
      }
    });
    return () => removeHandler();
  }, [addMessageHandler]);

  // Fallback: har 60s refresh agar WebSocket disconnect ho
  useEffect(() => {
    const t = setInterval(() => setRefreshKey((k) => k + 1), 60000);
    return () => clearInterval(t);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 200;
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  // Normalize combined list
  const publishedBlogs = useMemo(() => {
    const rawBlogs = blogs.filter(b => (b.status || '').toLowerCase() === 'published' && (b.status || '').toLowerCase() !== 'archived');
    const rawLinks = blogLinks.filter(l => (l.status || '').toLowerCase() === 'active' || (l.status || '').toLowerCase() === 'published');

    const normalizedLinks = rawLinks.map(l => ({
      id: l.id || l._id,
      title: l.name,
      excerpt: l.name,
      author: 'Radical Education',
      category: l.categories || 'Study Abroad',
      status: 'Published',
      date: l.createdAt || new Date().toISOString(),
      featuredImage: l.banner || l.imageUrl || l.image || l.featuredImage || l.coverImage,
      slug: l.link || '',
      isExternal: l.link && (l.link.startsWith('http') || l.link.startsWith('//'))
    } as any));

    return [...rawBlogs, ...normalizedLinks].sort((a, b) => {
      const dateA = new Date(a.date || a.createdAt);
      const dateB = new Date(b.date || b.createdAt);
      return dateB.getTime() - dateA.getTime();
    });
  }, [blogs, blogLinks]);

  const categories = useMemo(() => {
    const allCats = new Set<string>(stableCategoryOrder);
    publishedBlogs.forEach(b => {
      const cats = toCategoryList(b.category || b.categories || '');
      cats.forEach((c: string) => allCats.add(c));
    });
    const known = stableCategoryOrder.filter((c) => allCats.has(c));
    const dynamic = Array.from(allCats).filter((c) => !stableCategoryOrder.includes(c)).sort((a, b) => a.localeCompare(b));
    return [...known, ...dynamic];
  }, [publishedBlogs]);

  // Connection status indicator
  const connectionStatus = (
    <div className="flex items-center justify-end mb-4 pr-4">
      <span className={`inline-flex items-center text-xs ${isConnected ? 'text-green-600' : 'text-red-600'}`}>
        <span className={`inline-block w-2 h-2 rounded-full mr-2 ${isConnected ? 'bg-green-600' : 'bg-red-600'}`}></span>
        {isConnected ? 'Live Updates Active' : 'Live Updates Offline'}
      </span>
    </div>
  );

  const filtered = useMemo(() => {
    return publishedBlogs.filter((b) => {
      const blogCats = toCategoryList(b.category || b.categories || '').map(normalizeCategoryForMatch);
      const activeCategoryNormalized = normalizeCategoryForMatch(activeCategory);

      const matchCategory = activeCategory === 'All' ||
        blogCats.includes(activeCategoryNormalized);

      const matchSearch = !searchQuery.trim() ||
        b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (b.excerpt && b.excerpt.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchQuery, publishedBlogs]);

  // Reset to first page when filtering
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, searchQuery]);

  // Use paginated data for featured and sidebar
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filtered.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.max(1, Math.ceil(filtered.length / blogsPerPage));

  // Simple uniform grid of all blogs
  const gridBlogs = currentBlogs;

  const getCategoryColor = (cat: string) => categoryColors[cat] || defaultCategoryColor;
  const getCategoryTextColor = (cat: string) => {
    const style = getCategoryColor(cat);
    return style.split(' ').find(s => s.startsWith('text-')) || style;
  };
  const formatDate = (d: string) => {
    if (!d) return '';
    const date = new Date(d);
    return isNaN(date.getTime()) ? d : date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      // Scroll to top when page changes
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  };

  const renderPagination = () => {
    const pages = [];
    const maxVisiblePages = 5;

    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    // Adjust start page if we're near the end
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    // Previous button
    pages.push(
      <button
        key="prev"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4 md:px-6 py-2 text-sm md:text-base font-medium transition-colors ${currentPage === 1
          ? 'text-gray-300 cursor-not-allowed'
          : 'text-[#005A8B] hover:text-blue-700 font-bold'
          }`}
      >
        Previous
      </button>
    );

    // Page numbers
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`w-10 h-10 md:w-12 md:h-12 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${i === currentPage
            ? 'bg-blue-500 text-white shadow-lg scale-110'
            : 'text-gray-600 hover:bg-gray-100'
            }`}
        >
          {i}
        </button>
      );
    }

    // Next button
    pages.push(
      <button
        key="next"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-4 md:px-6 py-2 text-sm md:text-base font-medium transition-colors ${currentPage === totalPages
          ? 'text-gray-300 cursor-not-allowed'
          : 'text-[#005A8B] hover:text-blue-700 font-bold'
          }`}
      >
        Next
      </button>
    );

    return pages;
  };

  return (
    <>
      <FloatingWhatsApp />
      {/* Header Section */}
      {/* <div className="bg-white py-4 animate-fadeIn">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-2">Our Latest Blogs</h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">Stay updated with the latest in medical education, NEET updates, and admission guidance.</p>
        </div>
      </div> */}

      {/* Sticky Search and Category Section */}
      <div className="sticky top-[80px] md:top-[130px] z-40 bg-white/95 backdrop-blur-sm shadow-md border-b border-gray-100 transition-all duration-200">
        <div className="container mx-auto px-4 py-1.5 md:py-2">
          <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6">
            {/* Search Section */}
            <div className="flex flex-col lg:flex-row gap-2 sm:gap-2 items-stretch lg:items-center justify-start">
              {/* Search Input with Icon */}
              <div className="relative w-full lg:max-w-[450px] md:max-w-[320px] max-w-full">
                <input
                  type="text"
                  placeholder="search your dream college"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-3 sm:px-4 h-9 sm:h-10 rounded-full bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 placeholder-gray-400 text-sm sm:text-base"
                />
                <button
                  className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#005A8B] hover:bg-blue-700 text-white h-7 w-7 sm:h-8 sm:w-8 rounded-full transition-colors duration-200 flex items-center justify-center"
                  aria-label="Search"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>

              {/* Category Filter Buttons - responsive gap & scroll */}
              <div className="flex bg-white lg:bg-transparent rounded-full lg:rounded-none shadow-sm lg:shadow-none p-1.5 sm:p-1 lg:p-0 items-center gap-2 sm:gap-3 flex-1 min-w-0 w-full lg:w-auto overflow-hidden">
                {/* Left Arrow - Desktop/Tablet */}
                <button
                  onClick={() => scroll('left')}
                  className="hidden md:flex w-10 h-10 rounded-full bg-white shadow-sm hover:shadow-md transition-all duration-200 items-center justify-center shrink-0 border border-gray-200 hover:border-gray-300 hover:scale-110 active:scale-95"
                >
                  <Image src="/images/blogs/left-arrow.webp" alt="Scroll Left" width={16} height={16} className="object-contain opacity-60 hover:opacity-100" />
                </button>

                <div
                  ref={scrollRef}
                  className="flex gap-3 md:gap-4 items-center flex-1 overflow-x-auto scrollbar-hide py-1 min-w-0"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {categories.map((category) => {
                    const isActive = activeCategory === category;
                    const isAll = category === 'All';
                    const themeStyle = isAll ? 'bg-white text-gray-600 border-gray-200' : (categoryColors[category] || defaultCategoryColor);

                    return (
                      <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-3 sm:px-4 md:px-5 py-1.5 rounded-full font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 text-xs sm:text-sm whitespace-nowrap shrink-0 border ${isActive
                          ? 'bg-[#005A8B] text-white border-[#005A8B] shadow-md'
                          : `${themeStyle} ${isAll ? '' : 'border-transparent'} hover:bg-[#005A8B] hover:text-white hover:border-[#005A8B]`
                          }`}
                      >
                        {category}
                      </button>
                    );
                  })}
                </div>

                {/* Right Arrow - Desktop/Tablet */}
                <button
                  onClick={() => scroll('right')}
                  className="hidden md:flex w-10 h-10 rounded-full bg-white shadow-sm hover:shadow-md transition-all duration-200 items-center justify-center shrink-0 border border-gray-200 hover:border-gray-300 hover:scale-110 active:scale-95"
                >
                  <Image src="/images/blogs/right-arrow.webp" alt="Scroll Right" width={16} height={16} className="object-contain opacity-60 hover:opacity-100" />
                </button>
              </div>

              {/* Mobile Arrows Row - Only visible on small screens */}
              <div className="flex md:hidden justify-center gap-3 sm:gap-4 w-full mt-1">
                <button
                  onClick={() => scroll('left')}
                  className="flex w-11 h-11 sm:w-10 sm:h-10 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200 items-center justify-center border border-gray-100 active:scale-95 min-h-[44px] min-w-[44px]"
                >
                  <Image src="/images/blogs/left-arrow.webp" alt="Scroll Left" width={20} height={20} className="object-contain" />
                </button>
                <button
                  onClick={() => scroll('right')}
                  className="flex w-11 h-11 sm:w-10 sm:h-10 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200 items-center justify-center border border-gray-100 active:scale-95 min-h-[44px] min-w-[44px]"
                >
                  <Image src="/images/blogs/right-arrow.webp" alt="Scroll Right" width={20} height={20} className="object-contain" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fresh Update Section */}
      {loading ? (
        <div className="container mx-auto px-4 py-15 animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-52 mb-6" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 h-[310px] bg-gray-200 rounded-2xl" />
            <div className="space-y-4">
              <div className="h-[148px] bg-gray-200 rounded-xl" />
              <div className="h-[148px] bg-gray-200 rounded-xl" />
            </div>
          </div>
        </div>
      ) : filtered.length > 0 && (
        <div className="container mx-auto px-4 py-15">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Fresh Update</h2>
          <div className="flex flex-col lg:flex-row gap-6 lg:items-start">
            {/* Left: Large Featured Card */}
            {(() => {
              const featured = filtered[0];
              return (
                <Link
                  href={featured.isExternal ? featured.slug : `/${featured.slug}`}
                  target={featured.isExternal ? '_blank' : '_self'}
                  className="group lg:w-[70%] w-full flex-shrink-0 block"
                >
                  <div className="rounded-2xl overflow-hidden relative h-[220px] sm:h-[270px] md:h-[310px] w-full shadow-sm">
                    <Image
                      src={featured.featuredImage || '/images/blogs/card.webp'}
                      alt={featured.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-3">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {(featured.category || featured.categories)?.split(',').map((c: string) => c.trim()).filter(Boolean).map((cat: string, idx: number) => (
                        <span key={idx} className={`inline-block ${getCategoryColor(cat)} text-[15px] font-bold px-2 py-0.5 rounded-full`}>
                          {cat}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                      {featured.title}
                    </h3>
                    <p className="text-gray-500 text-sm line-clamp-2 mb-3">
                      {featured.excerpt || featured.title}
                    </p>
                    <div className="flex items-center text-gray-400 text-xs font-medium">
                      <span>{featured.author || 'Radical Education'}</span>
                      <span className="mx-2">•</span>
                      <span>{formatDate(featured.date || featured.createdAt)}</span>
                    </div>
                  </div>
                </Link>
              );
            })()}

            {/* Right: 2 smaller list cards */}
            <div className="lg:w-[48%] w-full flex flex-col divide-y divide-gray-200 lg:h-[310px] sm:h-[270px] h-[220px] overflow-hidden">
              {filtered.slice(1, 3).map((blog, idx) => (
                <Link
                  key={`fresh-${blog.id}-${idx}`}
                  href={blog.isExternal ? blog.slug : `/${blog.slug}`}
                  target={blog.isExternal ? '_blank' : '_self'}
                  className="group py-4 first:pt-0 last:pb-0 block flex-1"
                >
                  <div className="flex flex-wrap gap-1 mb-1">
                    {(blog.category || blog.categories)?.split(',').map((c: string) => c.trim()).filter(Boolean).map((cat: string, catIdx: number) => (
                      <span key={catIdx} className={`inline-block ${getCategoryTextColor(cat)} font-semibold text-[15px] px-1.5 py-0.5 rounded-full`}>
                        {cat}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                    {blog.title}
                  </h3>
                  <p className="text-gray-500 text-xs line-clamp-2 mb-1.5">
                    {blog.excerpt || blog.title}
                  </p>
                  <div className="flex items-center text-gray-400 text-[10px] font-medium">
                    <span>{blog.author || 'Radical Education'}</span>
                    <span className="mx-1.5">•</span>
                    <span>{formatDate(blog.date || blog.createdAt)}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Blog Content */}
      <div className="min-h-screen">
        <div className="container mx-auto px-4 py-8">

          {/* Blog Cards Grid */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
              {loading
                ? Array.from({ length: 6 }).map((_, index) => (
                  <div key={`blog-skeleton-${index}`} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-50 animate-pulse">
                    <div className="h-48 sm:h-56 w-full bg-gray-200" />
                    <div className="p-6 space-y-3">
                      <div className="h-4 w-28 bg-gray-200 rounded" />
                      <div className="h-5 w-full bg-gray-200 rounded" />
                      <div className="h-4 w-4/5 bg-gray-200 rounded" />
                      <div className="h-4 w-2/3 bg-gray-200 rounded" />
                    </div>
                  </div>
                ))
                : gridBlogs.map((blog, index) => (
                  <Link
                    key={blog.id}
                    href={blog.isExternal ? blog.slug : `/${blog.slug}`}
                    target={blog.isExternal ? "_blank" : "_self"}
                    className="group block h-full animate-fadeIn"
                    style={{ animationDelay: `${0.1 * (index % 3)}s` }}
                  >
                    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full border border-gray-50">
                      <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                        <Image
                          src={blog.featuredImage || '/images/blogs/card.webp'}
                          alt={blog.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex flex-wrap gap-2 mb-3">
                          {(blog.category || blog.categories)?.split(',').map((c: string) => c.trim()).filter(Boolean).map((cat: string, idx: number) => (
                            <span key={idx} className={`inline-block ${getCategoryTextColor(cat)} font-semibold text-[10px] md:text-xs px-2 py-0.5 rounded-full bg-opacity-10`}>
                              {cat}
                            </span>
                          ))}
                        </div>
                        <h3 className="text-base md:text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                          {blog.title}
                        </h3>
                        <p className="text-gray-600 text-sm md:text-base line-clamp-2 mb-4 text-justify mt-auto">
                          {blog.excerpt || blog.title}
                        </p>
                        <div className="flex items-center text-gray-400 text-xs font-medium pt-3 border-t border-gray-50">
                          <span>{blog.author || 'Radical Education'}</span>
                          <span className="mx-2">•</span>
                          <span>{formatDate(blog.date || blog.createdAt)}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>

            {/* Empty state for grid */}
            {gridBlogs.length === 0 && !loading && (
              <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200 mt-8">
                <p className="text-gray-400">No more blogs to display in this category</p>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center mt-12 md:mt-20">
                <div className="flex justify-center items-center gap-2 md:gap-4 bg-white shadow-xl rounded-full px-6 py-3 border border-gray-100">
                  {renderPagination()}
                </div>
              </div>
            )}
          </div>

          {/* contact form */}
          <div className="mt-12 md:mt-16 mb-6 md:mb-8 animate-fadeIn" style={{ animationDelay: '0.9s' }}>
            {/* Title */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 md:mb-8 text-center px-4">
              Connect With <span className="text-blue-400">Our Counsellor</span>
            </h2>

            {/* Combined container for image and form */}
            {/* <div className="relative rounded-2xl overflow-hidden mx-4 md:mx-0">
              <div className="relative h-72 sm:h-80 md:h-[420px] lg:h-[480px]">
                <Image
                  src="/images/blogs/contact.webp"
                  alt="Contact Background"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-opacity-30"></div>
              </div>
            </div> */}

            {/* Form Container - Outside background */}
            <div className="my-20">
              <CounselorSection />
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 pb-8">
          {connectionStatus}
        </div>
      </div>
    </>
  );
};

export default BlogsPage;