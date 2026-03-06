"use client";

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BlogSidebar from './BlogSidebar';
import { getBlogBySlug, type Blog } from '@/lib/api';
import { useWebSocket } from '@/hooks/useWebSocket';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

interface BlogsReadProps {
    slug: string;
}

const formatDate = (d: string) => {
    if (!d) return '';
    const date = new Date(d);
    return isNaN(date.getTime()) ? d : date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
};

// Remove background colors from pasted HTML (copied from other sites/CRMs)
const sanitizeBlogContent = (html: string) => {
    if (!html) return '';

    // Remove inline background-color and background styles
    let result = html
        .replace(/background-color\s*:\s*[^;"]*;?/gi, '')
        .replace(/background\s*:\s*[^;"]*;?/gi, '');

    // Add allow="popups" to iframes so links (e.g. WhatsApp) inside embedded banners can open
    result = result.replace(
        /<iframe(?=\s)([^>]*?)(\s*\/?>)/gi,
        (_, attrs, close) => {
            if (/allow\s*=/i.test(attrs)) {
                return `<iframe${attrs}${close}`;
            }
            return `<iframe${attrs} allow="popups"${close}`;
        }
    );
    return result;
};

/** Process FAQ answer HTML so links open in new tab */
const processFaqAnswer = (html: string) => {
    if (!html) return '';
    return html.replace(/<a\s+/gi, '<a target="_blank" rel="noopener noreferrer" ');
};

const BlogsRead = ({ slug }: BlogsReadProps) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');
    const categoryContainerRef = useRef<HTMLDivElement>(null);
    const [blog, setBlog] = useState<Blog | null>(null);
    const [loading, setLoading] = useState(true);
    const { addMessageHandler, isConnected } = useWebSocket();
    
    // Connection status indicator
    const connectionStatus = (
        <div className="flex items-center justify-end mb-4 pr-4">
            <span className={`inline-flex items-center text-xs ${isConnected ? 'text-green-600' : 'text-red-600'}`}>
                <span className={`inline-block w-2 h-2 rounded-full mr-2 ${isConnected ? 'bg-green-600' : 'bg-red-600'}`}></span>
                {isConnected ? 'Live Updates Active' : 'Live Updates Offline'}
            </span>
        </div>
    );

    useEffect(() => {
        getBlogBySlug(slug).then((data) => {
            setBlog(data);
            setLoading(false);
        }).catch(() => setLoading(false));
    }, [slug]);

    // Real-time updates for blog changes
    useEffect(() => {
        const removeHandler = addMessageHandler((data) => {
            if (data.type === 'UPDATE_BLOG' && data.blog?.id === blog?.id) {
                // Update the current blog with new data
                setBlog(data.blog);
            } else if (data.type === 'DELETE_BLOG' && data.blogId === blog?.id) {
                // Redirect to blogs page if current blog is deleted
                window.location.href = '/blogs';
            }
        });
        
        return () => removeHandler();
    }, [addMessageHandler, blog?.id]);

    const categories = ['All', 'Education', 'Exams', 'Government', 'Careers'];

    const handleSearch = () => {
        if (searchTerm.trim()) {
            window.location.href = `/blogs?search=${encodeURIComponent(searchTerm.trim())}`;
        }
    };

    const scroll = (direction: 'left' | 'right') => {
        if (categoryContainerRef.current) {
            const { current } = categoryContainerRef;
            const scrollAmount = 200;
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <div className="w-full bg-gray-50 relative animate-fadeIn">
            <FloatingWhatsApp />
            {/* Fixed Search Section */}
            <div className="sticky top-12 md:top-28 z-10 bg-gray-50 py-2 md:py-6 shadow-sm">
                <div className="max-w-6xl mx-auto px-4">
                    {connectionStatus}
                    {/* Search Section */}
                    <div className="flex flex-col lg:flex-row gap-4 items-start justify-start">
                        {/* Search Input with Icon */}
                        <div className="relative w-full max-w-md lg:max-w-sm lg:-ml-10">
                            <input
                                type="text"
                                placeholder="search your blog here"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                                className="w-full px-4 py-2 pr-12 rounded-full bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 placeholder-gray-400"
                            />
                            <button
                                onClick={handleSearch}
                                className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#005A8B] hover:bg-blue-700 text-white p-2 rounded-full transition-colors duration-200"
                                aria-label="Search"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                        </div>

                    {/* Category Filter Buttons - Inline */}
                    <div className="flex bg-white lg:bg-transparent rounded-full lg:rounded-none shadow-sm lg:shadow-none p-1 lg:p-0 items-center gap-2 flex-1 min-w-0 w-full lg:w-auto overflow-hidden">
                        {/* Left Arrow - Desktop/Tablet */}
                        <button
                            onClick={() => scroll('left')}
                            className="hidden md:flex w-8 h-8 rounded-full bg-white shadow-sm hover:shadow-md transition-all duration-200 items-center justify-center flex-shrink-0 border border-gray-200 hover:border-gray-300 hover:scale-110 active:scale-95"
                        >
                            <Image src="/images/blogs/left-arrow.webp" alt="Scroll Left" width={16} height={16} className="object-contain opacity-60 hover:opacity-100" />
                        </button>

                        <div
                            ref={categoryContainerRef}
                            className="flex gap-10 items-center flex-1 overflow-x-auto scrollbar-hide py-1"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            <style jsx>{`
                            div::-webkit-scrollbar {
                                display: none;
                            }
                        `}</style>
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`px-4 md:px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 text-sm whitespace-nowrap ${activeCategory === category
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
                            className="hidden md:flex w-8 h-8 rounded-full bg-white shadow-sm hover:shadow-md transition-all duration-200 items-center justify-center flex-shrink-0 border border-gray-200 hover:border-gray-300 hover:scale-110 active:scale-95"
                        >
                            <Image src="/images/blogs/right-arrow.webp" alt="Scroll Right" width={16} height={16} className="object-contain opacity-60 hover:opacity-100" />
                        </button>
                    </div>

                    {/* Mobile Arrows Row - Only visible on small screens */}
                    <div className="flex md:hidden justify-center gap-4 w-full mt-2">
                        <button
                            onClick={() => scroll('left')}
                            className="flex w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200 items-center justify-center border border-gray-100 active:scale-95"
                        >
                            <Image src="/images/blogs/left-arrow.webp" alt="Scroll Left" width={20} height={20} className="object-contain" />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="flex w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200 items-center justify-center border border-gray-100 active:scale-95"
                        >
                            <Image src="/images/blogs/right-arrow.webp" alt="Scroll Right" width={20} height={20} className="object-contain" />
                        </button>
                    </div>
                </div>
            </div>
        </div>

            {/* Scrollable Content */}
            <div className="pt-4">
                {/* main content */}
                <div className="max-w-7xl mx-auto px-4 mt-8 lg:ml-22">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
                    {/* Blog Content - Left Side */}
                    <div className="lg:col-span-2">
                        {loading ? (
                            <div className="animate-pulse space-y-4">
                                <div className="h-6 bg-gray-200 rounded w-24" />
                                <div className="h-8 bg-gray-200 rounded w-3/4" />
                                <div className="h-4 bg-gray-200 rounded w-1/3" />
                                <div className="h-48 bg-gray-200 rounded-lg" />
                                <div className="h-4 bg-gray-200 rounded w-full" />
                                <div className="h-4 bg-gray-200 rounded w-full" />
                            </div>
                        ) : !blog ? (
                            <div className="text-center py-12">
                                <h2 className="text-xl font-bold text-gray-800 mb-2">Blog not found</h2>
                                <p className="text-gray-600 mb-4">The blog you are looking for does not exist or has been removed.</p>
                                <Link href="/blogs" className="text-[#005A8B] hover:underline font-medium">← Back to Blogs</Link>
                            </div>
                        ) : (
                            <>
                                {/* Blog Category Badge */}
                                <div className="mb-4">
                                    <span className="inline-block text-[#00A88E] px-3 py-1 rounded text-sm font-medium bg-[#BFE6DB]">
                                        {blog.category}
                                    </span>
                                </div>

                                {/* Blog Title */}
                                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 break-words">
                                    {blog.title}
                                </h1>

                                {/* Blog Meta */}
                                <div className="flex items-center text-gray-500 text-sm mb-6">
                                    <span>{blog.author}</span>
                                    <span className="mx-2">•</span>
                                    <span>{formatDate(blog.date)}</span>
                                </div>

                                {/* Blog Image */}
                                <div className="mb-6 relative w-full h-48 md:h-64">
                                    {blog.featuredImage ? (
                                            <Image
                                                src={blog.featuredImage}
                                                alt={blog.title}
                                                fill
                                                className="object-cover rounded-lg"
                                            />
                                        ) : (
                                        <Image
                                            src="/images/blogs/card.webp"
                                            alt={blog.title}
                                            fill
                                            className="object-cover rounded-lg"
                                        />
                                    )}
                                </div>

                                {/* Blog Content - justified, Metropolis font */}
                                <div
                                    className="blog-content max-w-none text-gray-800 mb-4 text-[15px] md:text-[17px] leading-8 space-y-4 break-words text-justify"
                                    style={{ wordBreak: 'break-word', overflowWrap: 'anywhere', fontFamily: 'Metropolis, sans-serif' }}
                                    dangerouslySetInnerHTML={{ __html: sanitizeBlogContent(blog.content || blog.excerpt || '') }}
                                />

                                {/* FAQs Section - SEO friendly accordion */}
                                {blog.faqs && blog.faqs.length > 0 && (
                                    <div className="mt-4 mb-6 border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
                                        <h2 className="text-xl md:text-2xl font-bold text-gray-800 px-6 py-4 bg-gray-50 border-b border-gray-200">
                                            Frequently Asked Questions
                                        </h2>
                                        <div className="divide-y divide-gray-200 [&>*:first-child]:border-t-0">
                                            {blog.faqs.map((faq, idx) => (
                                                <details
                                                    key={idx}
                                                    className="group [&_summary::-webkit-details-marker]:hidden [&_summary::marker]:hidden"
                                                >
                                                    <summary className="flex items-start gap-3 px-6 py-2.5 cursor-pointer list-none hover:bg-gray-50 transition-colors">
                                                        <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 font-bold text-sm group-open:hidden">+</span>
                                                        <span className="flex-shrink-0 w-6 h-6 hidden group-open:flex items-center justify-center rounded-full bg-indigo-100 text-indigo-700 font-bold text-base leading-none">−</span>
                                                        <span className="font-medium text-gray-800 flex-1">{faq.question}</span>
                                                    </summary>
                                                    <div
                                                        className="pl-[3.25rem] pr-6 pb-3 pt-0 text-gray-600 text-[15px] leading-relaxed [&_a]:text-blue-600 [&_a]:underline hover:[&_a]:text-blue-800"
                                                        dangerouslySetInnerHTML={{ __html: processFaqAnswer(faq.answer) }}
                                                    />
                                                </details>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* JSON-LD FAQ schema for SEO */}
                                {blog.faqs && blog.faqs.length > 0 && (
                                    <script
                                        type="application/ld+json"
                                        dangerouslySetInnerHTML={{
                                            __html: JSON.stringify({
                                                "@context": "https://schema.org",
                                                "@type": "FAQPage",
                                                mainEntity: blog.faqs.map((faq) => ({
                                                    "@type": "Question",
                                                    name: faq.question,
                                                    acceptedAnswer: {
                                                        "@type": "Answer",
                                                        text: (faq.answer || '').replace(/<[^>]+>/g, '').trim() || faq.answer
                                                    }
                                                }))
                                            })
                                        }}
                                    />
                                )}
                            </>
                        )}

                        {/* Comment Section */}
                        <div className="pt-8">
                            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-6">Comment</h3>

                            {/* Social Share Icons */}
                            <div className="flex items-center gap-3 md:gap-4 mb-6">
                                <button className="w-8 h-8 bg-black text-white rounded flex items-center justify-center"> {/* Twitter/X share button */}
                                    <span className="text-sm">𝕏</span>
                                </button>
                                <button className="w-8 h-8 bg-blue-600 text-white rounded flex items-center justify-center"> {/* Facebook share button */}
                                    <span className="text-sm">f</span>
                                </button>
                                <button className="w-8 h-8 bg-blue-700 text-white rounded flex items-center justify-center"> {/* LinkedIn share button */}
                                    <span className="text-sm">in</span>
                                </button>
                                <button className="w-8 h-8 bg-gray-600 text-white rounded flex items-center justify-center"> {/* Email share button */}
                                    <span className="text-sm">✉</span>
                                </button>
                            </div>

                            {/* Comment Form */}
                            <div className="space-y-5 mb-12 md:mb-16">
                                <textarea
                                    placeholder="write your comment here..."
                                    className="w-full p-3 md:p-4 border border-gray-300 rounded-lg resize-none h-24 md:h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                                />
                                <div className="flex flex-col md:flex-row gap-4">
                                    <input
                                        type="text"
                                        placeholder="name"
                                        className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                                    />
                                    <input
                                        type="email"
                                        placeholder="email address"
                                        className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                                    />
                                    <button className="bg-gradient-to-r from-[#63CDB4] to-[#0077BF] hover:from-[#0077BF] hover:to-[#63CDB4] text-white px-4 md:px-6 py-3 rounded-lg font-medium transition-all duration-200 text-sm md:text-base">
                                        Post ➤
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar - Right Side */}
                    <BlogSidebar />
                </div>
            </div>
            </div>
        </div>
    );
};

export default BlogsRead;

