"use client";

import React, { useState, useRef, useEffect, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getBlogs, getWpBlogs, getGlobalBanner, type Blog, type BannerItem } from '@/lib/api';
import { useWebSocket } from '@/hooks/useWebSocket';
import CounselorSection from '@/components/CounselorSection';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import GlobalBanner from '@/components/GlobalBanner';

const categoryColors: Record<string, string> = {
  // 'Education': 'bg-[#BFE6DB] text-[#00A88E]',
  'Exams': 'bg-[#FFE0B2] text-[#C77700]',
  'Government': 'bg-[#D5DCE5] text-[#2C3E50]',
  // 'Careers': 'bg-[#C9E2FF] text-[#004E89]',
  'MBBS in India': 'bg-[#E8F5E9] text-[#2E7D32]',
  'MBBS Abroad': 'bg-[#BFE6DB] text-[#00A88E]',
  'Study Abroad': 'bg-[#BFE6DB] text-[#00A88E]',
  'NEET UG': 'bg-[#FFEBEE] text-[#D32F2F]',
  'NEET PG': 'bg-[#FFF9C4] text-[#F9A825]',
  'Notification': 'bg-[#E1F5FE] text-[#0288D1]',
};

const defaultCategoryColor = 'bg-[#E3F2FD] text-[#005A8B]';
const stableCategoryOrder = ['All', 'Exams', 'Government', 'MBBS in India', 'MBBS Abroad', 'Study Abroad', 'NEET UG', 'NEET PG', 'Notification'];
const BLOGS_CACHE_KEY = 'radical_blogs_cache_v1';

const excludedCategoryNames = ['blog', 'blogs', 'other', 'others', 'uncategorized', 'uncategorised'];

const toCategoryList = (value: unknown): string[] => {
  let list: string[] = [];
  if (Array.isArray(value)) {
    list = value.map((item) => String(item).trim()).filter(Boolean);
  } else if (typeof value === 'string') {
    list = value.split(',').map((item) => item.trim()).filter(Boolean);
  }

  return list.filter(cat => !excludedCategoryNames.includes(cat.toLowerCase()));
};

const normalizeCategoryForMatch = (value: string) =>
  value
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]/g, '');

const BlogsPage = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['All']);
  const [searchQuery, setSearchQuery] = useState('');
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [banners, setBanners] = useState<BannerItem[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 100;
  const scrollRef = useRef<HTMLDivElement>(null);
  const [refreshKey, setRefreshKey] = useState(0);
  const [totalPagesServer, setTotalPagesServer] = useState(1);
  const wsUrl = process.env.NEXT_PUBLIC_WS_URL || 'https://backend-radical.onrender.com';
  const { addMessageHandler } = useWebSocket(wsUrl);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    const fetchBlogs = async () => {
      try {
        let query = searchQuery.trim();
        if (!selectedCategories.includes('All')) {
          const catQuery = selectedCategories.join(' ');
          query = query ? `${query} ${catQuery}` : catQuery;
        }

        const res = await fetch(`/api/wp/paginated-posts?page=${currentPage}&per_page=${blogsPerPage}&search=${encodeURIComponent(query)}`);
        const data = await res.json();

        if (!isMounted) return;

        if (data.blogs) {
          setBlogs(data.blogs);
          setTotalPagesServer(data.totalPages || 1);
        }
      } catch (error) {
        console.error('Error fetching paginated blogs:', error);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    // Debounce fetch if typing search
    const timeoutId = setTimeout(() => {
      fetchBlogs();
    }, 300);

    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
    };
  }, [currentPage, searchQuery, selectedCategories, refreshKey]);

  useEffect(() => {
    const removeHandler = addMessageHandler((data) => {
      switch (data.type) {
        case 'NEW_BLOG':
          if (data.blog && data.blog.status === 'Published') {
            setRefreshKey(k => k + 1); // just refresh the page
          }
          break;
        case 'UPDATE_BLOG':
          if (!data.blog?.id) break;
          setRefreshKey(k => k + 1);
          break;
        case 'DELETE_BLOG':
          if (data.blogId) {
            setRefreshKey(k => k + 1);
          }
          break;
      }
    });
    return () => removeHandler();
  }, [addMessageHandler]);

  useEffect(() => {
    const t = setInterval(() => setRefreshKey((k) => k + 1), 60000);
    return () => clearInterval(t);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 200;
      if (direction === 'left') current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      else current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const publishedBlogs = useMemo(() => {
    return blogs
      .filter(b => (b.status || '').toLowerCase() === 'published' && (b.status || '').toLowerCase() !== 'archived')
      .map(b => ({
        ...b,
        categories: b.category,
        isExternal: false,
      } as any))
      .sort((a, b) => {
        const dateA = new Date(a.date || a.createdAt);
        const dateB = new Date(b.date || b.createdAt);
        return dateB.getTime() - dateA.getTime();
      });
  }, [blogs]);

  const categories = stableCategoryOrder;

  const filtered = publishedBlogs; // Already paginated and filtered by API

  useEffect(() => { setCurrentPage(1); }, [selectedCategories, searchQuery]);

  const currentBlogs = filtered;
  const totalPages = totalPagesServer;

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
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  };

  const renderPagination = () => {
    const pages = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    if (endPage - startPage + 1 < maxVisiblePages) startPage = Math.max(1, endPage - maxVisiblePages + 1);

    pages.push(
      <button key="prev" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}
        className={`px-4 md:px-6 py-2 text-sm md:text-base font-medium transition-colors ${currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-[#005A8B] hover:text-blue-700 font-bold'}`}>
        Previous
      </button>
    );

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button key={i} onClick={() => handlePageChange(i)}
          className={`w-10 h-10 md:w-12 md:h-12 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${i === currentPage ? 'bg-blue-500 text-white shadow-lg scale-110' : 'text-gray-600 hover:bg-gray-100'}`}>
          {i}
        </button>
      );
    }

    pages.push(
      <button key="next" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}
        className={`px-4 md:px-6 py-2 text-sm md:text-base font-medium transition-colors ${currentPage === totalPages ? 'text-gray-300 cursor-not-allowed' : 'text-[#005A8B] hover:text-blue-700 font-bold'}`}>
        Next
      </button>
    );
    return pages;
  };

  return (
    <>
      <FloatingWhatsApp />
      <div className="sticky top-[80px] md:top-[130px] z-40 bg-white/95 backdrop-blur-sm shadow-md border-b border-gray-100 transition-all duration-200">
        <div className="container mx-auto px-4 py-1.5 md:py-2">
          <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6">
            <div className="flex flex-col lg:flex-row gap-2 sm:gap-2 items-stretch lg:items-center justify-start">
              <div className="relative w-full lg:max-w-[450px] md:max-w-[320px] max-w-full">
                <input type="text" placeholder="Search your dream college" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-3 sm:px-4 h-9 sm:h-10 rounded-full bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 placeholder-gray-400 text-sm sm:text-base opacity-80" />
                <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#005A8B] hover:bg-blue-700 text-white h-7 w-7 sm:h-8 sm:w-8 rounded-full transition-colors duration-200 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
              <div className="flex bg-white lg:bg-transparent rounded-full lg:rounded-none shadow-sm lg:shadow-none p-1.5 sm:p-1 lg:p-0 items-center gap-2 sm:gap-3 flex-1 min-w-0 w-full lg:w-auto overflow-hidden">
                <button onClick={() => scroll('left')} className="hidden md:flex w-10 h-10 rounded-full bg-white shadow-sm hover:shadow-md transition-all duration-200 items-center justify-center shrink-0 border border-gray-200 hover:border-gray-300 hover:scale-110 active:scale-95">
                  <Image src="/images/blogs/left-arrow.webp" alt="Scroll Left" width={16} height={16} className="object-contain opacity-60 hover:opacity-100" />
                </button>
                <div ref={scrollRef} className="flex gap-3 md:gap-4 items-center flex-1 overflow-x-auto scrollbar-hide py-1 min-w-0" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                  {categories.map((category) => {
                    const isSelected = selectedCategories.includes(category);
                    const isAll = category === 'All';
                    const themeStyle = isAll ? 'bg-white text-gray-600 border-gray-200' : (categoryColors[category] || defaultCategoryColor);
                    
                    const toggleCategory = () => {
                      if (isAll) {
                        setSelectedCategories(['All']);
                      } else {
                        setSelectedCategories(prev => {
                          const withoutAll = prev.filter(c => c !== 'All');
                          if (prev.includes(category)) {
                            const next = withoutAll.filter(c => c !== category);
                            return next.length === 0 ? ['All'] : next;
                          } else {
                            return [...withoutAll, category];
                          }
                        });
                      }
                    };

                    return (
                      <button key={category} onClick={toggleCategory}
                        className={`px-3 sm:px-4 md:px-5 py-1.5 rounded-full font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 text-xs sm:text-sm whitespace-nowrap shrink-0 border ${isSelected ? 'bg-[#005A8B] text-white border-[#005A8B] shadow-md' : `${themeStyle} ${isAll ? '' : 'border-transparent'} hover:bg-[#005A8B] hover:text-white hover:border-[#005A8B]`}`}>
                        {category}
                      </button>
                    );
                  })}
                </div>
                {!selectedCategories.includes('All') && (
                  <button 
                    onClick={() => setSelectedCategories(['All'])}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#005A8B] text-white hover:bg-blue-700 transition-all duration-300 text-xs font-bold shadow-md hover:shadow-lg active:scale-95 shrink-0 ml-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                    </svg>
                    Clear Filters
                  </button>
                )}
                <button onClick={() => scroll('right')} className="hidden md:flex w-10 h-10 rounded-full bg-white shadow-sm hover:shadow-md transition-all duration-200 items-center justify-center shrink-0 border border-gray-200 hover:border-gray-300 hover:scale-110 active:scale-95">
                  <Image src="/images/blogs/right-arrow.webp" alt="Scroll Right" width={16} height={16} className="object-contain opacity-60 hover:opacity-100" />
                </button>
              </div>
              <div className="flex md:hidden justify-center gap-3 sm:gap-4 w-full mt-1">
                <button onClick={() => scroll('left')} className="flex w-11 h-11 sm:w-10 sm:h-10 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200 items-center justify-center border border-gray-100 active:scale-95 min-h-[44px] min-w-[44px]">
                  <Image src="/images/blogs/left-arrow.webp" alt="Scroll Left" width={20} height={20} className="object-contain" />
                </button>
                <button onClick={() => scroll('right')} className="flex w-11 h-11 sm:w-10 sm:h-10 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200 items-center justify-center border border-gray-100 active:scale-95 min-h-[44px] min-w-[44px]">
                  <Image src="/images/blogs/right-arrow.webp" alt="Scroll Right" width={20} height={20} className="object-contain" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

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
          {/* <GlobalBanner banners={banners} /> */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Fresh Update</h2>
          <div className="flex flex-col lg:flex-row gap-6 lg:items-start">
            {(() => {
              const featured = filtered[0];
              return (
                <Link href={`/${featured.slug}`} className="group lg:w-[70%] w-full flex-shrink-0 block">
                  <div className="rounded-2xl overflow-hidden relative h-[220px] sm:h-[270px] md:h-[310px] w-full shadow-sm">
                    <Image src={featured.featuredImage || '/images/blogs/card.webp'} alt={featured.title} fill unoptimized onError={(e) => { const t = e.target as HTMLImageElement; t.src = '/images/blogs/card.webp'; t.srcset = ''; }} className="object-cover bg-gray-50 transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="mt-3">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {toCategoryList(featured.category).map((cat, idx) => (
                        <span key={idx} className={`inline-block ${getCategoryColor(cat)} text-[15px] font-bold px-2 py-0.5 rounded-full`}>{cat}</span>
                      ))}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">{featured.title}</h3>
                    <p className="text-gray-500 text-sm line-clamp-2 mb-3">{featured.excerpt || featured.title}</p>
                    <div className="flex items-center text-gray-400 text-xs font-medium">
                      <span>{featured.author || 'Radical Education'}</span>
                      <span className="mx-2">•</span>
                      <span>{formatDate(featured.date || featured.createdAt)}</span>
                    </div>
                  </div>
                </Link>
              );
            })()}
            <div className="lg:w-[48%] w-full flex flex-col divide-y divide-gray-200 lg:h-[310px] sm:h-[270px] h-[220px] overflow-hidden">
              {filtered.slice(1, 3).map((blog, idx) => (
                <Link key={`fresh-${blog.id}-${idx}`} href={`/${blog.slug}`} className="group py-4 first:pt-0 last:pb-0 block flex-1">
                  <div className="flex flex-wrap gap-1 mb-1">
                    {toCategoryList(blog.category).map((cat, catIdx) => (
                      <span key={catIdx} className={`inline-block ${getCategoryTextColor(cat)} font-semibold text-[15px] px-1.5 py-0.5 rounded-full`}>{cat}</span>
                    ))}
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">{blog.title}</h3>
                  <p className="text-gray-500 text-xs line-clamp-2 mb-1.5">{blog.excerpt || blog.title}</p>
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

      <div className="min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {loading
              ? Array.from({ length: 6 }).map((_, index) => (
                <div key={`blog-skeleton-${index}`} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-50 animate-pulse">
                  <div className="h-48 sm:h-56 w-full bg-gray-200" />
                  <div className="p-6 space-y-3">
                    <div className="h-4 w-28 bg-gray-200 rounded" />
                    <div className="h-5 w-full bg-gray-200 rounded" />
                    <div className="h-4 w-4/5 bg-gray-200 rounded" />
                  </div>
                </div>
              ))
              : currentBlogs.map((blog, index) => (
                <Link key={blog.id} href={`/${blog.slug}`} className="group block h-full animate-fadeIn" style={{ animationDelay: `${0.1 * (index % 3)}s` }}>
                  <div className="transition-transform duration-300 group-hover:scale-102 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full border border-gray-50">
                    <div className="w-full overflow-hidden">
                      <Image
                        src={blog.featuredImage || "/images/blogs/card.webp"}
                        alt={blog.title}
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {toCategoryList(blog.category).map((cat, idx) => (
                          <span key={idx} className={`inline-block ${getCategoryTextColor(cat)} font-semibold text-[10px] md:text-xs px-2 py-0.5 rounded-full bg-opacity-10`}>{cat}</span>
                        ))}
                      </div>
                      <h3 className="text-base md:text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">{blog.title}</h3>
                      <p className="text-gray-600 text-sm md:text-base line-clamp-2 mb-4 text-justify mt-auto">{blog.excerpt || blog.title}</p>
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
          {currentBlogs.length === 0 && !loading && (
            <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200 mt-8">
              <p className="text-gray-400">No more blogs to display in this category</p>
            </div>
          )}
          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-12 md:mt-20">
              <div className="flex justify-center items-center gap-2 md:gap-4 bg-white shadow-xl rounded-full px-6 py-3 border border-gray-100">
                {renderPagination()}
              </div>
            </div>
          )}
          <div className="my-20">
            <CounselorSection />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogsPage;