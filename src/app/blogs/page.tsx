"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getBlogs, type Blog } from '@/lib/api';
import { useWebSocket } from '@/hooks/useWebSocket';

const categoryColors: Record<string, string> = {
  'Educational': 'bg-teal-500',
  'Education': 'bg-teal-500',
  'Exams': 'bg-orange-500',
  'Government': 'bg-gray-600',
  'Careers': 'bg-blue-500',
  'MBBS in India': 'bg-green-100 text-green-700',
  'MBBS Abroad': 'bg-teal-100 text-teal-700',
  'NEET UG': 'bg-red-100 text-red-700',
  'NEET PG': 'bg-yellow-100 text-yellow-700',
  'Development': 'bg-gray-200 text-gray-700',
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
  const { addMessageHandler, isConnected } = useWebSocket(process.env.NEXT_PUBLIC_WS_URL || 'wss://backend-radical.onrender.com');

  // Initial load of blogs
  useEffect(() => {
    getBlogs().then((data) => {
      setBlogs(data);
      setLoading(false);
    }).catch((error) => {
      console.error('Error loading blogs:', error);
      setLoading(false);
    });
  }, []);

  // Listen for real-time blog updates via WebSocket
  useEffect(() => {
    const removeHandler = addMessageHandler((data) => {
      console.log('Website received WebSocket message:', data);
      
      switch (data.type) {
        case 'NEW_BLOG':
          // Add new blog to the list if it's published
          if (data.blog && data.blog.status === 'Published') {
            setBlogs((prev) => {
              // Check if blog already exists
              const exists = prev.find((b) => b.id === data.blog.id);
              if (exists) return prev;
              console.log('Adding new blog to website:', data.blog.title);
              return [data.blog, ...prev];
            });
          }
          break;

        case 'UPDATE_BLOG':
          // Update existing blog in the list
          setBlogs((prev) =>
            prev.map((b) => (b.id === data.blog.id ? data.blog : b))
          );
          break;

        case 'DELETE_BLOG':
          // Remove blog from the list
          setBlogs((prev) => prev.filter((b) => b.id !== data.blogId));
          break;
      }
    });

    return () => {
      removeHandler();
    };
  }, [addMessageHandler]);

  // Also poll for updates every 5 seconds as fallback
  useEffect(() => {
    const interval = setInterval(() => {
      getBlogs().then((data) => {
        setBlogs((prev) => {
          // Only update if different
          if (data.length !== prev.length) {
            console.log('Poll update: New blogs detected');
            return data;
          }
          return prev;
        });
      });
    }, 5000);

    return () => clearInterval(interval);
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
  const categories = ['All', ...Array.from(new Set(publishedBlogs.map((b) => b.category).filter(Boolean)))];
  
  // Reset to first page when filters change and ensure page is valid
  useEffect(() => {
    setCurrentPage((prev) => {
      const maxPages = Math.ceil(publishedBlogs.filter((b) => {
        const matchCategory = activeCategory === 'All' || b.category === activeCategory;
        const matchSearch = !searchQuery.trim() ||
          b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (b.excerpt && b.excerpt.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchCategory && matchSearch;
      }).length / blogsPerPage);
      return prev > maxPages ? 1 : prev;
    });
  }, [activeCategory, searchQuery, publishedBlogs]);
  
  const filtered = publishedBlogs.filter((b) => {
    const matchCategory = activeCategory === 'All' || b.category === activeCategory;
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
    if (currentPage > 1) {
      pages.push(
        <button
          key="prev"
          onClick={() => handlePageChange(currentPage - 1)}
          className="px-2 md:px-3 py-2 text-gray-500 hover:text-gray-700 text-sm md:text-base whitespace-nowrap hover:bg-gray-100 rounded transition-colors"
        >
          ← Previous
        </button>
      );
    }
    
    // First page
    if (startPage > 1) {
      pages.push(
        <button
          key={1}
          onClick={() => handlePageChange(1)}
          className="px-2 md:px-3 py-2 text-gray-500 hover:text-gray-700 text-sm md:text-base hover:bg-gray-100 rounded transition-colors"
        >
          1
        </button>
      );
      
      if (startPage > 2) {
        pages.push(
          <span key="start-ellipsis" className="px-1 py-2 text-gray-400 text-sm md:text-base">
            ...
          </span>
        );
      }
    }
    
    // Page numbers
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-2 md:px-3 py-2 rounded text-sm md:text-base transition-colors ${i === currentPage
            ? 'bg-blue-600 text-white'
            : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
            }`}
        >
          {i}
        </button>
      );
    }
    
    // Last page
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push(
          <span key="end-ellipsis" className="px-1 py-2 text-gray-400 text-sm md:text-base">
            ...
          </span>
        );
      }
      
      pages.push(
        <button
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          className="px-2 md:px-3 py-2 text-gray-500 hover:text-gray-700 text-sm md:text-base hover:bg-gray-100 rounded transition-colors"
        >
          {totalPages}
        </button>
      );
    }
    
    // Next button
    if (currentPage < totalPages) {
      pages.push(
        <button
          key="next"
          onClick={() => handlePageChange(currentPage + 1)}
          className="px-2 md:px-3 py-2 text-gray-500 hover:text-gray-700 text-sm md:text-base whitespace-nowrap hover:bg-gray-100 rounded transition-colors"
        >
          Next →
        </button>
      );
    }
    
    return pages;
  };

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div className="bg-white py-2 md:py-4 animate-fadeIn">
        <div className="container mx-auto px-4">
          {/* Live Status Indicator */}
          <div className="flex justify-end mb-2">
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
              <span className="text-xs text-gray-500">
                {isConnected ? 'Live Updates' : 'Offline'}
              </span>
            </div>
          </div>
          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 -mb-4 py-4 md:py-8">
            <div className="w-full max-w-2xl">
              <input
                type="text"
                placeholder="search your blog here"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 md:px-6 py-3 shadow-lg drop-shadow-lg rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
              />
            </div>
            <button className="bg-[#005A8B] text-white px-6 md:px-8 py-3 rounded-full hover:bg-blue-700 transition-colors whitespace-nowrap text-sm md:text-base w-full sm:w-auto">
              Search
            </button>
          </div>

          {/* Category Tabs */}
          <div ref={scrollRef} className="flex justify-start md:justify-center overflow-hidden md:overflow-x-auto [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <div className="flex space-x-2 md:space-x-8 p-2 rounded-full min-w-max">
              {/* Left Arrow Button - Hidden on mobile */}
              <button 
                onClick={() => scroll('left')}
                className="hidden md:flex w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow items-center justify-center"
              >
                <Image
                  src="/images/blogs/left-arrow.webp"
                  alt="Previous"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </button>
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(category)}
                  className={`px-3 md:px-6 py-2 rounded-full transition-colors text-sm md:text-base whitespace-nowrap ${activeCategory === category
                    ? 'bg-[#005A8B] text-white'
                    : category === 'Education'
                      ? 'bg-[#BFE6DB] text-[#00A88E]'
                      : category === 'Exams'
                        ? 'bg-[#FFE0B2] text-[#C77700]'
                        : category === 'Careers'
                          ? 'bg-[#D5DCE5] text-[#004E89]'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                >
                  {category}
                </button>
              ))}
              {/* Right Arrow Button - Hidden on mobile */}
              <button 
                onClick={() => scroll('right')}
                className="hidden md:flex w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow items-center justify-center"
              >
                <Image
                  src="/images/blogs/right-arrow.webp"
                  alt="Next"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </button>
            </div>
          </div>

          {/* Mobile Only Arrows */}
          <div className="flex md:hidden justify-center space-x-4 mt-4 w-full">
            <button onClick={() => scroll('left')} className="w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow flex items-center justify-center">
              <Image
                src="/images/blogs/left-arrow.webp"
                alt="Previous"
                width={20}
                height={20}
                className="object-contain"
              />
            </button>
            <button onClick={() => scroll('right')} className="w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow flex items-center justify-center">
              <Image
                src="/images/blogs/right-arrow.webp"
                alt="Next"
                width={20}
                height={20}
                className="object-contain"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="container mx-auto px-4 py-2 md:py-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8">Fresh Update</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 relative">
          {/* Main Blog Post */}
          <div className="lg:col-span-2 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
            {featuredBlog ? (
              <Link href={`/blogs/${featuredBlog.slug}`} className="block">
                <div className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                  <div className="relative h-48 md:h-80">
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
                    <span className={`inline-block ${getCategoryColor(featuredBlog.category)} text-white px-3 py-1 rounded-full text-xs md:text-sm mb-3 md:mb-4`}>
                      {featuredBlog.category}
                    </span>
                    <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-3 md:mb-4 hover:text-blue-600 transition-colors">
                      {featuredBlog.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4 line-clamp-2">
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

          {/* Sidebar */}
          <div className="space-y-4 md:space-y-6">
            {sidebarBlogs.length > 0 ? (
              sidebarBlogs.map((post, index) => (
                <Link key={post.id} href={`/blogs/${post.slug}`} className="block animate-fadeIn" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                  <div className={`bg-white rounded-lg p-4 md:p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer ${index < sidebarBlogs.length - 1 ? 'border-b-2 border-gray-200' : ''}`}>
                    <span className={`inline-block ${getCategoryColor(post.category)} text-white px-3 py-1 rounded-full text-xs md:text-sm mb-3 md:mb-4`}>
                      {post.category}
                    </span>
                    <h4 className="text-base md:text-lg font-bold text-gray-800 mb-2 md:mb-3 hover:text-blue-600 transition-colors">
                      {post.title}
                    </h4>
                    <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4 line-clamp-2">
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
              <Link key={blog.id} href={`/blogs/${blog.slug}`} className="block animate-fadeIn" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                  <div className="relative h-40 md:h-48">
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
                    <span className={`inline-block ${getCategoryColor(blog.category)} px-3 py-1 rounded-full text-xs md:text-sm mb-2 md:mb-3`}>
                      {blog.category}
                    </span>
                    <h3 className="text-base md:text-lg font-bold text-gray-800 mb-2 md:mb-3 hover:text-blue-600 transition-colors line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4 line-clamp-2">
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
            ))}
          </div>

          {/* Pagination */}
          <div className="flex flex-col items-center mt-8 md:mt-12">
            {/* Page Info Text */}
            <div className="text-sm md:text-base text-gray-600 mb-3">
              Page <span className="font-semibold text-blue-600">{currentPage}</span> of <span className="font-semibold">{totalPages}</span>
            </div>
            {/* Pagination Buttons */}
            <div className="flex justify-center items-center space-x-1 bg-white shadow-lg rounded-full px-4 md:px-6 py-3 w-fit mx-auto overflow-x-auto">
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
            <div className="relative h-[300px] md:h-[500px]">
              <Image
                src="/images/blogs/contact.webp"
                alt="Contact Background"
                fill
                className="object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-opacity-30"></div>
            </div>
          </div>

          {/* Form Container - Outside background */}
          <div className="flex justify-center -mt-40 md:-mt-90 relative z-10 px-4">
            <div className="bg-[#005A8B] bg-opacity-90 rounded-2xl p-6 md:p-8 w-full max-w-md mx-auto shadow-2xl">
              <form className="space-y-3 md:space-y-4">
                {/* Full Name */}
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border-1 focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-700 bg-white text-sm md:text-base"
                />

                {/* Phone No */}
                <input
                  type="tel"
                  placeholder="Phone No"
                  className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border-1 focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-700 bg-white text-sm md:text-base"
                />

                {/* Select Course */}
                <select className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border-1 border-white focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-700 bg-white text-sm md:text-base">
                  <option value="">Select Course</option>
                  <option value="mbbs">MBBS</option>
                  <option value="bds">BDS</option>
                  <option value="ayush">AYUSH</option>
                  <option value="neet-pg">NEET PG</option>
                </select>

                {/* Select State */}
                <select className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border-1 border-white focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-700 bg-white text-sm md:text-base">
                  <option value="">Select State</option>
                  <option value="delhi">Delhi</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="bangalore">Bangalore</option>
                  <option value="chennai">Chennai</option>
                  <option value="kolkata">Kolkata</option>
                </select>

                {/* Consent Checkbox */}
                <div className="flex items-start space-x-3 text-left">
                  <input
                    type="checkbox"
                    id="consent"
                    className="mt-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 flex-shrink-0"
                  />
                  <label htmlFor="consent" className="text-white text-xs md:text-sm">
                    I Consent To Receiving Calls, WhatsApp, Email And Google RCS From
                    Advisor To Assist With This Enquiry.
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#63CDB4] to-[#0077BF] hover:from-[#0077BF] hover:to-[#63CDB4] text-white font-semibold py-2 md:py-3 px-4 md:px-6 rounded-lg transition-all duration-200 text-sm md:text-base"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;