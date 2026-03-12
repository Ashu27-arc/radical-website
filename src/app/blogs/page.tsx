"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getBlogs, type Blog } from '@/lib/api';
import { useWebSocket } from '@/hooks/useWebSocket';
import CounselorForm from '@/components/CounselorForm';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const categoryColors: Record<string, string> = {
  'Educational': 'bg-teal-500 text-white',
  'Education': 'bg-teal-500 text-white',
  'Exams': 'bg-orange-500 text-white',
  'Government': 'bg-gray-600 text-white',
  'Careers': 'bg-blue-500 text-white',
  'MBBS in India': 'bg-green-500 text-white',
  'MBBS Abroad': 'bg-teal-500 text-white',
  'Study Abroad': 'bg-teal-500 text-white',
  'NEET UG': 'bg-red-500 text-white',
  'Neet UG': 'bg-red-500 text-white',
  'NEET PG': 'bg-yellow-500 text-white',
  'Neet PG': 'bg-yellow-500 text-white',
  'Notification': 'bg-blue-500 text-white',
  'Development': 'bg-purple-500 text-white',
};

const defaultCategoryColor = 'bg-[#005A8B] text-white';

const BlogsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;
  const scrollRef = useRef<HTMLDivElement>(null);
  const [refreshKey, setRefreshKey] = useState(0);
  const wsUrl = process.env.NEXT_PUBLIC_WS_URL || 'wss://backend-radical.onrender.com';
  const { addMessageHandler, isConnected } = useWebSocket(wsUrl);

  // Initial load from Next.js API (same MongoDB as CRM)
  useEffect(() => {
    getBlogs().then((data) => {
      setBlogs(data);
      setLoading(false);
    }).catch((error) => {
      console.error('Error loading blogs:', error);
      setLoading(false);
    });
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

  const publishedBlogs = blogs.filter((b) => b.status === 'Published');
  const categories = ['All', ...Array.from(new Set(publishedBlogs.flatMap((b) => b.category?.split(',').map(c => c.trim())).filter(Boolean)))];

  // Connection status indicator
  const connectionStatus = (
    <div className="flex items-center justify-end mb-4 pr-4">
      <span className={`inline-flex items-center text-xs ${isConnected ? 'text-green-600' : 'text-red-600'}`}>
        <span className={`inline-block w-2 h-2 rounded-full mr-2 ${isConnected ? 'bg-green-600' : 'bg-red-600'}`}></span>
        {isConnected ? 'Live Updates Active' : 'Live Updates Offline'}
      </span>
    </div>
  );

  // Reset to first page when filters change and ensure page is valid
  useEffect(() => {
    setCurrentPage((prev) => {
      const maxPages = Math.ceil(publishedBlogs.filter((b) => {
        const matchCategory = activeCategory === 'All' || (b.category && b.category.split(',').map(c => c.trim()).includes(activeCategory));
        const matchSearch = !searchQuery.trim() ||
          b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (b.excerpt && b.excerpt.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchCategory && matchSearch;
      }).length / blogsPerPage);
      return prev > maxPages ? 1 : prev;
    });
  }, [activeCategory, searchQuery, publishedBlogs]);

  const filtered = publishedBlogs.filter((b) => {
    const matchCategory = activeCategory === 'All' || (b.category && b.category.split(',').map(c => c.trim()).includes(activeCategory));
    const matchSearch = !searchQuery.trim() ||
      b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (b.excerpt && b.excerpt.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCategory && matchSearch;
  });

  // Handle case where there aren't enough blogs - use paginated data
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;

  const currentBlogs = filtered.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.max(1, Math.ceil(filtered.length / blogsPerPage));

  // Use paginated data for featured and sidebar
  const featuredBlog = currentBlogs[0] || null;
  const sidebarBlogs = currentBlogs.length > 1
    ? currentBlogs.slice(1, Math.min(4, currentBlogs.length))
    : [];

  const gridBlogs = currentBlogs;
  const getCategoryColor = (cat: string) => categoryColors[cat] || defaultCategoryColor;
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
          : 'text-gray-400 hover:text-gray-600'
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
          : 'text-gray-400 hover:text-gray-600'
          }`}
      >
        Next
      </button>
    );

    return pages;
  };

  return (
    <div className="min-h-screen">
      <FloatingWhatsApp />
      {/* Header Section */}
      <div className="bg-white py-2 md:py-4 animate-fadeIn">
        <div className="container mx-auto px-4">
          {/* Live: CRM se blog post hote hi yahan update (WebSocket) */}
          <div className="flex justify-end mb-2">
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-500 animate-pulse' : 'bg-amber-500'}`} />
              <span className="text-xs text-gray-500">
                {isConnected ? 'Live – CRM updates yahan turant dikhenge' : 'Reconnecting…'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Search and Category Section */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-s border-b border-gray-200 transition-all duration-200">
        <div className="container mx-auto px-4 py-3 md:py-4">
          <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6">
            {/* Search Section */}
            <div className="flex flex-col lg:flex-row gap-2 sm:gap-3 items-stretch lg:items-start justify-start">
              {/* Search Input with Icon */}
              <div className="relative w-full lg:max-w-[450px] md:max-w-[320px] max-w-full">
                <input
                  type="text"
                  placeholder="search your blog here"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-2 pr-11 sm:pr-12 rounded-full bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 placeholder-gray-400 text-sm sm:text-base min-h-[44px] sm:min-h-0"
                />
                <button
                  className="absolute right-1.5 sm:right-2 top-1/2 -translate-y-1/2 bg-[#005A8B] hover:bg-blue-700 text-white p-2 sm:p-2 rounded-full transition-colors duration-200 min-w-[44px] min-h-[44px] sm:min-w-0 sm:min-h-0 flex items-center justify-center"
                  aria-label="Search"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>

              {/* Category Filter Buttons - responsive gap & scroll */}
              <div className="flex bg-white lg:bg-transparent rounded-full lg:rounded-none shadow-sm lg:shadow-none p-1.5 sm:p-1 lg:p-0 items-center gap-1 sm:gap-3 flex-1 min-w-0 w-full lg:w-auto overflow-hidden">
                {/* Left Arrow - Desktop/Tablet */}
                <button
                  onClick={() => scroll('left')}
                  className="hidden md:flex w-8 h-8 rounded-full bg-white shadow-sm hover:shadow-md transition-all duration-200 items-center justify-center shrink-0 border border-gray-200 hover:border-gray-300 hover:scale-110 active:scale-95"
                >
                  <Image src="/images/blogs/left-arrow.webp" alt="Scroll Left" width={16} height={16} className="object-contain opacity-60 hover:opacity-100" />
                </button>

                <div
                  ref={scrollRef}
                  className="flex gap-3 md:gap-4 items-center flex-1 overflow-x-auto scrollbar-hide py-1 min-w-0"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`px-3 sm:px-4 md:px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 text-xs sm:text-sm whitespace-nowrap shrink-0 min-h-[40px] sm:min-h-0 ${activeCategory === category
                        ? category === 'All'
                          ? 'bg-[#2CBF0F] text-white shadow-md'
                          : category === 'Education'
                            ? 'bg-[#BFE6DB] text-[#00A88E] shadow-md'
                            : category === 'Exams'
                              ? 'bg-[#FFE0B2] text-[#C77700] shadow-md'
                              : category === 'Government'
                                ? 'bg-[#D5DCE5] text-[#2C3E50] shadow-md'
                                : category === 'Careers'
                                  ? 'bg-[#C9E2FF] text-[#004E89] shadow-md'
                                  : 'bg-[#C9E2FF] text-[#004E89] shadow-md'
                        : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                        }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                {/* Right Arrow - Desktop/Tablet */}
                <button
                  onClick={() => scroll('right')}
                  className="hidden md:flex w-8 h-8 rounded-full bg-white shadow-sm hover:shadow-md transition-all duration-200 items-center justify-center shrink-0 border border-gray-200 hover:border-gray-300 hover:scale-110 active:scale-95"
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

      {/* Blog Content */}
      <div className="container mx-auto px-4 py-2 pt-4 md:py-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-4">Fresh Update</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 relative">
          {/* Main Blog Post */}
          <div className="lg:col-span-2 animate-fadeIn rounded-lg shadow-[0_12px_30px_rgba(0,0,0,0.3)]" style={{ animationDelay: '0.1s' }}>
            {featuredBlog ? (
              <Link href={`/${featuredBlog.slug}`} className="block">
                <div className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                  <div className="relative h-48 sm:h-60 md:h-72 lg:h-80">
                    {featuredBlog.featuredImage ? (
                      <Image
                        src={featuredBlog.featuredImage}
                        alt={featuredBlog.title}
                        fill
                        className="object-contain"
                      />
                    ) : (
                      <Image
                        src="/images/blogs/b.webp"
                        alt={featuredBlog.title}
                        fill
                        className="object-contain"
                      />
                    )}
                  </div>
                  <div className="p-4 md:p-6">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {featuredBlog.category?.split(',').map((c) => c.trim()).filter(Boolean).map((cat, idx) => (
                        <span key={idx} className={`inline-block ${getCategoryColor(cat)} px-3 py-1 rounded-full text-xs md:text-sm`}>
                          {cat}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-2 hover:text-blue-600 transition-colors">
                      {featuredBlog.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 text-justify mb-2 line-clamp-2">
                      {featuredBlog.excerpt || featuredBlog.title}
                    </p>
                    <div className="flex items-center text-gray-500 text-xs md:text-sm">
                      <span>{featuredBlog.author}</span>
                      <span className="mx-2">•</span>
                      <span>{formatDate(featuredBlog.date)}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ) : (
              <div className="bg-white rounded-lg overflow-hidden border border-gray-200 p-8 text-center text-gray-500">
                {loading ? 'Loading...' : 'No published blogs yet. Check back later.'}
              </div>
            )}
          </div>

          {/* Sidebar - Fixed on Desktop */}
          <div className="space-y-4 md:space-y-6">
            {sidebarBlogs.length > 0 ? (
              sidebarBlogs.map((post, index) => (
                <Link key={post.id} href={`/${post.slug}`} className="block animate-fadeIn" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                  <div className={`bg-white rounded-lg p-4 md:p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer ${index < sidebarBlogs.length - 1 ? 'border-b-2 border-gray-200' : ''}`}>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {post.category?.split(',').map((c) => c.trim()).filter(Boolean).map((cat, idx) => (
                        <span key={idx} className={`inline-block ${getCategoryColor(cat)} px-3 py-1 rounded-full text-xs md:text-sm`}>
                          {cat}
                        </span>
                      ))}
                    </div>
                    <h4 className="text-base md:text-lg font-bold text-gray-800 mb-1 md:mb-2 hover:text-blue-600 transition-colors">
                      {post.title}
                    </h4>
                    <p className="text-gray-600 text-xs md:text-sm text-justify mb-2 line-clamp-2">
                      {post.excerpt || post.title}
                    </p>
                    <div className="flex items-center text-gray-500 text-xs">
                      <span>{post.author}</span>
                      <span className="mx-2">•</span>
                      <span>{formatDate(post.date)}</span>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="bg-white rounded-lg p-6 text-center text-gray-500 border-2 border-dashed border-gray-200">
                <p className="text-sm md:text-base">No additional blogs available</p>
                <p className="text-xs md:text-sm mt-2">More blogs will appear here as they are published</p>
              </div>
            )}
          </div>

          {/* Extended horizontal line that spans full width */}
          <div className="absolute -bottom-4 left-0 right-0 border-b-3 border-gray-200 lg:col-span-3"></div>
        </div>

        {/* Blog Cards Grid */}
        <div className="mt-16 md:mt-30">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {gridBlogs.map((blog, index) => (
              <React.Fragment key={blog.id}>
                <Link href={`/${blog.slug}`} className="block animate-fadeIn" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
                  <div className="bg-white rounded-lg overflow-hidden shadow-[0_8px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                    <div className="relative h-40 sm:h-44 md:h-48 lg:h-52 rounded-t-lg overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
                      {blog.featuredImage ? (
                        <Image
                          src={blog.featuredImage}
                          alt={blog.title}
                          fill
                          className="object-contain"
                        />
                      ) : (
                        <Image
                          src={["/images/blogs/card.webp", "/images/blogs/card-1.webp", "/images/blogs/card-2.webp"][index % 3]}
                          alt={blog.title}
                          fill
                          className="object-contain"
                        />
                      )}
                    </div>
                    <div className="p-4 md:p-6">
                      <div className="flex flex-wrap gap-2 mb-1 md:mb-2">
                        {blog.category?.split(',').map((c) => c.trim()).filter(Boolean).map((cat, idx) => (
                          <span key={idx} className={`inline-block ${getCategoryColor(cat)} px-3 py-1 rounded-full text-xs md:text-sm`}>
                            {cat}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-base md:text-lg font-bold text-gray-800 mb-1 md:mb-2 hover:text-blue-600 transition-colors line-clamp-2">
                        {blog.title}
                      </h3>
                      <p className="text-gray-600 text-xs md:text-sm text-justify mb-2 line-clamp-2">
                        {blog.excerpt || blog.title}
                      </p>
                      <div className="flex items-center text-gray-500 text-xs">
                        <span>{blog.author}</span>
                        <span className="mx-2">•</span>
                        <span>{formatDate(blog.date)}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </React.Fragment>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center mt-8 md:mt-12">
            <div className="flex justify-center items-center gap-2 md:gap-4 bg-white shadow-lg rounded-full px-6 md:px-8 py-3 md:py-4">
              {renderPagination()}
            </div>
          </div>
        </div>

        {/* contact form */}
        <div className="mt-12 md:mt-16 mb-6 md:mb-8 animate-fadeIn" style={{ animationDelay: '0.9s' }}>
          {/* Title */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 md:mb-8 text-center px-4">
            Connect With <span className="text-blue-400">Our Counselor</span>
          </h2>

          {/* Combined container for image and form */}
          <div className="relative rounded-2xl overflow-hidden mx-4 md:mx-0">
            {/* Background Image */}
            <div className="relative h-72 sm:h-80 md:h-[420px] lg:h-[480px]">
              <Image
                src="/images/blogs/contact.webp"
                alt="Contact Background"
                fill
                className="object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            </div>
          </div>

          {/* Form Container - Outside background */}
          <div className="flex justify-center -mt-40 md:-mt-48 lg:-mt-56 relative z-10 px-4">
            <div className="bg-[#005A8B] bg-opacity-90 rounded-2xl p-6 md:p-8 w-full max-w-md mx-auto shadow-2xl">
              <CounselorForm />
            </div>
          </div>
        </div>
      </div>
      {connectionStatus}
    </div>
  );
};

export default BlogsPage;