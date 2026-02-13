"use client";

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BlogSidebar from './BlogSidebar';
import { getBlogBySlug, type Blog } from '@/lib/api';

interface BlogsReadProps {
    slug: string;
}

const formatDate = (d: string) => {
    if (!d) return '';
    const date = new Date(d);
    return isNaN(date.getTime()) ? d : date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
};

const BlogsRead = ({ slug }: BlogsReadProps) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');
    const categoryContainerRef = useRef<HTMLDivElement>(null);
    const [blog, setBlog] = useState<Blog | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getBlogBySlug(slug).then((data) => {
            setBlog(data);
            setLoading(false);
        }).catch(() => setLoading(false));
    }, [slug]);

    const categories = ['All', 'Education', 'Exams', 'Government', 'Careers'];

    const handleSearch = () => {
        // Handle search functionality
        console.log('Searching for:', searchTerm);
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
        <div className="w-full bg-gray-50 py-8 md:py-20 relative animate-fadeIn">
            <div className="max-w-6xl mx-auto px-4">
                {/* Search Section */}
                <div className="flex flex-col lg:flex-row gap-4 items-start justify-start mb-8">
                    {/* Search Input */}
                    <div className="relative w-full max-w-md lg:max-w-sm lg:-ml-10">
                        <input
                            type="text"
                            placeholder="search your blog here"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full px-4 py-2 rounded-full borderbg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 placeholder-gray-400"
                        />
                    </div>

                    {/* Search Button */}
                    <div className="space-x-2">
                        <button
                            onClick={handleSearch}
                            className="bg-[#005A8B] hover:bg-blue-700 text-white px-4 md:px-6 py-2 rounded-full font-medium transition-colors duration-200 border border-blue-600 text-sm md:text-base"
                        >
                            Search
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
                            className="flex gap-2 items-center flex-1 overflow-x-auto scrollbar-hide py-1"
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



            {/* main content */}
            <div className="max-w-7xl mx-auto px-4 mt-8 lg:ml-22 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
                    {/* Blog Content - Left Side */}
                    <div className="lg:col-span-2 overflow-hidden">
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

                                {/* Blog Content */}
                                <div
                                    className="prose max-w-none text-gray-700 leading-relaxed mb-8 text-sm md:text-base prose-headings:text-gray-800 prose-p:mb-4 break-words overflow-wrap-anywhere"
                                    style={{ wordBreak: 'break-word', overflowWrap: 'anywhere' }}
                                    dangerouslySetInnerHTML={{ __html: blog.content || blog.excerpt || '' }}
                                />
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
                            <div className="space-y-4">
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
    );
};

export default BlogsRead;

