"use client";

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BlogSidebar from './BlogSidebar';
import { getBlogBySlug, type Blog } from '@/lib/api';
import { useWebSocket } from '@/hooks/useWebSocket';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { usePathname } from 'next/navigation';

interface BlogsReadProps {
    slug: string;
}

const formatDate = (d: string) => {
    if (!d) return '';
    const date = new Date(d);
    return isNaN(date.getTime()) ? d : date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
};

// Remove background colors from pasted HTML (copied from other sites/CRMs) and fix spacing
const sanitizeBlogContent = (html: string) => {
    if (!html) return '';

    // Remove inline background-color and background styles
    let result = html
        .replace(/background-color\s*:\s*[^;"]*;?/gi, '')
        .replace(/background\s*:\s*[^;"]*;?/gi, '');

    // 1. Strip ALL height attributes from images so they don't leave empty vertical gaps 
    result = result.replace(/(<img[^>]*?)\s+height=["'][^"']*["']/gi, '$1');
    result = result.replace(/(<img[^>]*?)\s+style=["'][^"']*height:[^;"]*;?["']/gi, '$1');

    // 2. Add allow="popups" AND class="crm-embed" to iframes so they style correctly
    result = result.replace(
        /<iframe(?=\s)([^>]*?)(\s*\/?>)/gi,
        (_, attrs, close) => {
            let newAttrs = attrs;
            if (!/allow\s*=/i.test(newAttrs)) {
                newAttrs += ' allow="popups"';
            }
            if (!/class\s*=/i.test(newAttrs)) {
                newAttrs += ' class="crm-embed"';
            } else if (!/crm-embed/.test(newAttrs)) {
                newAttrs = newAttrs.replace(/class=["']([^"']*)["']/i, (_: string, c: string) => `class="${c} crm-embed"`);
            }
            return `<iframe${newAttrs}${close}`;
        }
    );

    // 3. Remove all <br> tags entirely to ensure no extra whitespace anywhere before processing wrappers
    result = result.replace(/<br\s*\/?>/gi, '');

    // 4. Unwrap iframes, .crm-embed, and img from ANY generic wrappers (p, div, figure) to eliminate parent margins
    result = result
        .replace(/<(?:p|div|figure)[^>]*>\s*(<iframe[^>]*>.*?<\/iframe>)\s*<\/(?:p|div|figure)>/gi, '$1')
        .replace(/<(?:p|div|figure)[^>]*>\s*(<div class="crm-embed"[^>]*>.*?<\/div>)\s*<\/(?:p|div|figure)>/gi, '$1')
        .replace(/<(?:p|div|figure)[^>]*>\s*(<a[^>]*>\s*<img[^>]+>\s*<\/a>|<img[^>]+>)\s*<\/(?:p|div|figure)>/gi, '$1')
        // Second pass in case of double wrapping (e.g. <div><p><img></p></div>)
        .replace(/<(?:p|div|figure)[^>]*>\s*(<a[^>]*>\s*<img[^>]+>\s*<\/a>|<img[^>]+>)\s*<\/(?:p|div|figure)>/gi, '$1');

    // 5. Remove empty paragraphs, divs, spans recursively (handles <div><p>&nbsp;</p></div> etc.)
    let prev;
    do {
        prev = result;
        result = result.replace(/<(p|div|span|h[1-6]|figure|strong|b|em|i|a)[^>]*>\s*(?:&nbsp;|\u00A0|\s)*\s*<\/\1>/gi, '');
    } while (result !== prev);

    // 6. Force inject margin-bottom: 0 onto all images to prevent CRM inline styles from overriding. Also reset padding and display.
    result = result.replace(/<img([^>]*)>/gi, (match, attrs) => {
        // Strip out existing margin and padding from inline style to avoid conflicts
        let cleanAttrs = attrs.replace(/margin[^:]*:[^;"]*;?/gi, '').replace(/padding[^:]*:[^;"]*;?/gi, '');
        if (/style="/i.test(cleanAttrs)) {
            return `<img${cleanAttrs.replace(/style="/i, 'style="margin: 0 !important; padding: 0 !important; display: block !important; ')}>`;
        } else if (/style='/i.test(cleanAttrs)) {
            return `<img${cleanAttrs.replace(/style='/i, "style='margin: 0 !important; padding: 0 !important; display: block !important; ")}>`;
        } else {
            return `<img${cleanAttrs} style="margin: 0 !important; padding: 0 !important; display: block !important;">`;
        }
    });

    // 7. Remove zero-width spaces or other invisible chars that might create layout space
    result = result.replace(/[\u200B-\u200D\uFEFF]/g, '');

    // 8. Trim spaces between image and the next block element completely
    result = result.replace(/(<img[^>]+>|<\/a>)\s+(?=<)/gi, '$1');

    // 9. Final trim of whitespace at start/end
    return result.trim();
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
    const { addMessageHandler } = useWebSocket();

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


    const pathname = usePathname()
    const siteUrl = "https://radicaleducation.in"
    const url = `${siteUrl}${pathname}`

    return (
        <div className="w-full min-w-0 bg-gray-50 relative animate-fadeIn">
            <FloatingWhatsApp />
            {/* Fixed Search Section - responsive padding & spacing */}
            <div className="sticky top-[72px] sm:top-[80px] md:top-[90px] lg:top-[132px] z-10 bg-gray-50 py-2 sm:py-3 md:py-4 shadow-sm">
                <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6">
                    {/* Search Section */}
                    <div className="flex flex-col lg:flex-row gap-2 sm:gap-2 items-stretch lg:items-start justify-start">
                        {/* Search Input with Icon */}
                        <div className="relative w-full lg:max-w-[450px] md:max-w-[320px] max-w-full">
                            <input
                                type="text"
                                placeholder="search your blog here"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                                className="w-full px-3 sm:px-4 h-9 sm:h-10 rounded-full bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 placeholder-gray-400 text-sm sm:text-base"
                            />
                            <button
                                onClick={handleSearch}
                                className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#005A8B] hover:bg-blue-700 text-white h-7 w-7 sm:h-8 sm:w-8 rounded-full transition-colors duration-200 flex items-center justify-center"
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
                                ref={categoryContainerRef}
                                className="flex gap-3 md:gap-4 items-center flex-1 overflow-x-auto scrollbar-hide py-1 min-w-0"
                                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                            >
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => setActiveCategory(category)}
                                        className={`px-3 sm:px-4 md:px-5 py-1.5 rounded-full font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 text-xs sm:text-sm whitespace-nowrap shrink-0 ${activeCategory === category
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
                        <div className="flex md:hidden justify-center gap-3 sm:gap-4 w-full mt-2">
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

            {/* Scrollable Content */}
            <div className="lg:pt-14 md:pt-8 pt-6">
                {/* main content */}
                <div className="container px-4 mt-4 sm:mt-6 md:mt-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                        {/* Blog Content - Left Side */}
                        <div className="lg:col-span-2">
                            {loading ? (
                                <div className="animate-pulse space-y-3 sm:space-y-4">
                                    <div className="h-5 sm:h-6 bg-gray-200 rounded w-20 sm:w-24" />
                                    <div className="h-6 sm:h-8 bg-gray-200 rounded w-[85%] sm:w-3/4" />
                                    <div className="h-4 bg-gray-200 rounded w-1/3" />
                                    <div className="h-40 sm:h-48 md:h-56 bg-gray-200 rounded-lg" />
                                    <div className="h-4 bg-gray-200 rounded w-full" />
                                    <div className="h-4 bg-gray-200 rounded w-full" />
                                </div>
                            ) : !blog ? (
                                <div className="text-center py-8 sm:py-12 px-2">
                                    <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">Blog not found</h2>
                                    <p className="text-gray-600 mb-4 text-sm sm:text-base">The blog you are looking for does not exist or has been removed.</p>
                                    <Link href="/blogs" className="text-[#005A8B] hover:underline font-medium text-sm sm:text-base">← Back to Blogs</Link>
                                </div>
                            ) : (
                                <>
                                    {/* Blog Category Badge */}
                                    <div className="mb-2 flex flex-wrap gap-2 mt-8">
                                        {blog.category?.split(',').map((c) => c.trim()).filter(Boolean).map((cat, idx) => (
                                            <span key={idx} className="inline-block text-[#00A88E] pr-2.5 sm:pr-3 rounded text-xs sm:text-sm font-medium">
                                                {cat}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Blog Title - responsive typography */}
                                    <h1 className="text-lg min-[400px]:text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-2 wrap-break-word leading-tight">
                                        {blog.title}
                                    </h1>

                                    {/* Blog Meta - wraps on small screens */}
                                    <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-gray-500 text-xs sm:text-sm mb-3">
                                        <span>{blog.author}</span>
                                        <span className="hidden sm:inline">•</span>
                                        <span>{formatDate(blog.date)}</span>
                                    </div>

                                    {/* Blog Image - responsive height */}
                                    <div className="mb-3 sm:mb-4 relative w-full h-40 min-[400px]:h-48 sm:h-52 md:h-60 lg:h-64 rounded-lg overflow-hidden">
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

                                    {/* Blog Content - responsive text & line height */}
                                    <div
                                        className="blog-content max-w-none text-gray-800 mb-4 text-sm sm:text-[15px] md:text-[17px] leading-7 sm:leading-8 wrap-break-word [&_p]:text-justify [&_p]:mb-3 sm:[&_p]:mb-3 [&_p:has(img)]:!mb-0 sm:[&_p:has(img)]:!mb-0 [&_figure]:!m-0 [&_figure]:!p-0 [&_h1]:m-0 [&_h2]:m-0 [&_h3]:m-0 [&_h4]:m-0 [&_h5]:m-0 [&_h6]:m-0 [&_img]:max-w-full [&_img]:h-auto [&_img]:!block [&_img]:!m-0 [&_img]:!p-0 [&_img+*]:!mt-0 [&_a:has(img)]:!block [&_a:has(img)]:!m-0 [&_a:has(img)]:!p-0 [&_a:has(img)]:!leading-[0px] [&_a:has(img)]:!text-[0px] [&_a:has(img)+*]:!mt-0 [&_.crm-embed]:!m-0 [&_.crm-embed]:!p-0 [&_.crm-embed]:!block [&_.crm-embed+*]:!mt-0 [&_iframe]:!m-0 [&_iframe]:!p-0 [&_iframe]:mx-auto [&_iframe]:!block"
                                        style={{ wordBreak: 'break-word', overflowWrap: 'anywhere', fontFamily: 'Metropolis, sans-serif' }}
                                        dangerouslySetInnerHTML={{ __html: sanitizeBlogContent(blog.content || blog.excerpt || '') }}
                                    />

                                    {/* PDF Download Section - High Impact & Premium */}
                                    {blog.pdf && (
                                        <div className="my-8 p-6 sm:p-8 bg-gradient-to-br from-indigo-50 via-white to-blue-50 rounded-2xl border-2 border-indigo-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 transition-all hover:shadow-md">
                                            <div className="flex items-center gap-5">
                                                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-100 rounded-2xl flex items-center justify-center shrink-0 shadow-inner">
                                                    <svg className="w-10 h-10 sm:w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">Detailed Guide Available</h3>
                                                    <p className="text-gray-600 text-sm sm:text-base">Download the full PDF version of this blog for offline reading.</p>
                                                </div>
                                            </div>
                                            <a
                                                href={blog.pdf}
                                                download={`${blog.slug || 'blog'}-detailed-guide.pdf`}
                                                className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all flex items-center justify-center gap-3 active:scale-95"
                                            >
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                                </svg>
                                                DOWNLOAD PDF
                                            </a>
                                        </div>
                                    )}

                                    {/* FAQs Section - responsive padding & typography */}
                                    {blog.faqs && blog.faqs.length > 0 && (
                                        <div className="mt-4 mb-4 sm:mb-6 border border-gray-200 rounded-lg sm:rounded-xl overflow-hidden bg-white shadow-sm">
                                            <h2 className="text-base sm:text-xl md:text-2xl font-bold text-gray-800 px-3 py-3 sm:px-4 sm:py-4 md:px-6 md:py-4 bg-gray-50 border-b border-gray-200">
                                                Frequently Asked Questions
                                            </h2>
                                            <div className="divide-y divide-gray-200 [&>*:first-child]:border-t-0">
                                                {blog.faqs.map((faq, idx) => (
                                                    <details
                                                        key={idx}
                                                        className="group [&_summary::-webkit-details-marker]:hidden [&_summary::marker]:hidden"
                                                    >
                                                        <summary className="flex items-start gap-2 sm:gap-3 px-3 py-2.5 sm:px-6 sm:py-2.5 cursor-pointer list-none hover:bg-gray-50 transition-colors">
                                                            <span className="shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 font-bold text-sm group-open:hidden">+</span>
                                                            <span className="shrink-0 w-6 h-6 hidden group-open:flex items-center justify-center rounded-full bg-indigo-100 text-indigo-700 font-bold text-base leading-none">−</span>
                                                            <span className="font-medium text-gray-800 flex-1 text-sm sm:text-base min-w-0">{faq.question}</span>
                                                        </summary>
                                                        <div
                                                            className="pl-11 sm:pl-13 pr-3 sm:pr-4 md:pr-6 pb-3 pt-0 text-gray-600 text-sm sm:text-[15px] leading-relaxed [&_a]:text-blue-600 [&_a]:underline hover:[&_a]:text-blue-800"
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

                            {/* Comment Section - responsive spacing & touch targets */}
                            <div className="pt-6 sm:pt-8">
                                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-4 sm:mb-6">Comment</h3>

                                <div className="flex items-center gap-4 mb-6">
                                    <Link
                                        href={`https://twitter.com/intent/tweet?url=${url}`}
                                        target="_blank"
                                    >
                                        <Image src="/images/twitter.svg" width={16} height={16} alt="Twitter" />
                                    </Link>
                                    <Link
                                        href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
                                        target="_blank"
                                    >
                                        <Image src="/images/facebook.svg" width={18} height={18} alt="Facebook" />
                                    </Link>
                                    <Link href={`https://www.instagram.com/?url=${url}`} target='_blank'>
                                        <Image src='/images/instagram.svg' width='16' height='16' alt="" />
                                    </Link>
                                    <Link
                                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}
                                        target="_blank"
                                    >
                                        <Image src="/images/linkedin.svg" width={16} height={16} alt="LinkedIn" />
                                    </Link>
                                    <Link
                                        href={`https://wa.me/?text=${url}`}
                                        target="_blank"
                                    >
                                        <Image src="/images/whatsapp.svg" width={20} height={20} alt="Whatsapp" />
                                    </Link>
                                    <Link
                                        href={`https://t.me/share/url?url=${url}`}
                                        target="_blank"
                                    >
                                        <Image src="/images/teligram.svg" width={18} height={18} alt="Telegram" />
                                    </Link>
                                    <Link href={`https://www.youtube.com/share?url=${url}`} target='_blank'>
                                        <Image src='/images/youtube.svg' width='20' height='20' alt="" />
                                    </Link>
                                </div>

                                {/* Comment Form - responsive */}
                                <div className="space-y-4 sm:space-y-5 mb-8 sm:mb-12 md:mb-16">
                                    <textarea
                                        placeholder="write your comment here..."
                                        className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg resize-none h-20 sm:h-24 md:h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base min-h-[80px]"
                                    />
                                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                                        <input
                                            type="text"
                                            placeholder="name"
                                            className="flex-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base min-h-[44px]"
                                        />
                                        <input
                                            type="email"
                                            placeholder="email address"
                                            className="flex-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base min-h-[44px]"
                                        />
                                        <button className="w-full sm:w-auto bg-gradient-to-r from-[#63CDB4] to-[#0077BF] hover:from-[#0077BF] hover:to-[#63CDB4] text-white px-4 md:px-6 py-3 rounded-lg font-medium transition-all duration-200 text-sm md:text-base min-h-[44px]">
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

