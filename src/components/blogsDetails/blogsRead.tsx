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

const getCategoryColor = (cat: string) => categoryColors[cat] || defaultCategoryColor;

const getCategoryTextColor = (cat: string) => {
    const style = getCategoryColor(cat);
    return style.split(' ').find(s => s.startsWith('text-')) || style;
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

    // 2. Add allow="popups" AND class="crm-embed" to iframes and force minimum height for xform-blogs embeds
    result = result.replace(
        /<iframe(?=\s)([^>]*?)(\s*\/?>)/gi,
        (match: string, attrs: string, close: string) => {
            let newAttrs = attrs;

            if (/xform-blogs\.vercel\.app/i.test(newAttrs)) {
                // Banner / WhatsApp widget iframes → keep fixed 150px + clip overflow (unchanged)
                const isBanner = /banner|whatsapp/i.test(newAttrs);

                if (isBanner) {
                    const targetHeight = '150px';
                    if (/style=["'][^"']*["']/i.test(newAttrs)) {
                        newAttrs = newAttrs.replace(/style=["']([^"']*)["']/i, (_: string, s: string) => {
                            let res = s.replace(/height\s*:[^;"!]*(!important)?;?/gi, '');
                            res = res.replace(/min-height\s*:[^;"!]*(!important)?;?/gi, '');
                            return `style="${res};height:${targetHeight} !important;min-height:${targetHeight};overflow:hidden;"`;
                        });
                    } else {
                        newAttrs += ` style="height:${targetHeight} !important;min-height:${targetHeight};overflow:hidden;"`;
                    }
                } else {
                    // Embedded forms → only add min-height, do NOT force fixed height or clip overflow
                    if (/style=["'][^"']*["']/i.test(newAttrs)) {
                        newAttrs = newAttrs.replace(/style=["']([^"']*)["']/i, (_: string, s: string) => {
                            const res = s.replace(/min-height\s*:[^;"!]*(!important)?;?/gi, '');
                            return `style="${res};min-height:500px;"`;
                        });
                    } else {
                        newAttrs += ` style="min-height:500px;"`;
                    }
                }
            } else {
                // Non-xform-blogs iframes (Google Forms, Typeform etc.) → add min-height so they don't get clipped
                if (/style=["'][^"']*["']/i.test(newAttrs)) {
                    newAttrs = newAttrs.replace(/style=["']([^"']*)["']/i, (_: string, s: string) => {
                        const res = s.replace(/min-height\s*:[^;"!]*(!important)?;?/gi, '');
                        return `style="${res};min-height:350px;"`;
                    });
                } else {
                    newAttrs += ` style="min-height:350px;"`;
                }
            }

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

    // 3. Remove all <br> tags that appear right before/after embeds or images to avoid spacing
    result = result.replace(/(<\/(?:div|iframe|img)>)\s*<br\s*\/?>/gi, '$1');
    result = result.replace(/<br\s*\/?>\s*(<(?:div|iframe|img)[^>]*>)/gi, '$1');

    // 3b. Strip standalone &nbsp; text nodes ONLY between block-level elements (not inline/link context)
    // We intentionally do NOT strip &nbsp; after </a> or before <a> to preserve spaces around hyperlinks
    result = result.replace(/(<\/(?:div|p|h[1-6]|ul|ol|li|table|tr|td|th|figure|section|article|aside|header|footer|blockquote)>)\s*(?:&nbsp;|\u00A0)+\s*(?=<)/gi, '$1');
    result = result.replace(/&nbsp;(?=\s*<(?:div|p|br|h[1-6]|ul|ol|li|table|tr|td|th|img|iframe|figure|section|article|aside|header|footer|blockquote)[\s>])/gi, '');
    result = result.replace(/(?<=<\/(?:div|p|br|h[1-6]|ul|ol|li|table|tr|td|th|img|iframe|figure|section|article|aside|header|footer|blockquote)>)\s*&nbsp;/gi, '');

    // 4. Unwrap iframes, .crm-embed, .crm-form-container, and img from ANY generic wrappers (p, div, figure) to eliminate parent margins
    result = result
        .replace(/<(?:p|div|figure)[^>]*>\s*(<iframe[^>]*>.*?<\/iframe>)\s*<\/(?:p|div|figure)>/gi, '$1')
        .replace(/<(?:p|div|figure)[^>]*>\s*(<div class="(?:crm-embed|crm-form-container)"[^>]*>.*?<\/div>)\s*<\/(?:p|div|figure)>/gi, '$1')
        .replace(/<(?:p|div|figure)[^>]*>\s*(<a[^>]*>\s*<img[^>]+>\s*<\/a>|<img[^>]+>)\s*<\/(?:p|div|figure)>/gi, '$1')
        // Second pass in case of double wrapping (e.g. <div><p><img></p></div>)
        .replace(/<(?:p|div|figure)[^>]*>\s*(<a[^>]*>\s*<img[^>]+>\s*<\/a>|<img[^>]+>)\s*<\/(?:p|div|figure)>/gi, '$1');

    // 5. Remove empty paragraphs, divs, spans recursively (handles <div><p>&nbsp;</p></div> etc.)
    let prev;
    do {
        prev = result;
        result = result.replace(/<(p|div|span|h[1-6]|figure|strong|b|em|i|a)[^>]*>\s*(?:&nbsp;|\u00A0|\s)*\s*<\/\1>/gi, '');
    } while (result !== prev);

    // 6. Force inject margin-bottom: 2rem onto all images to prevent CRM inline styles from overriding. 
    result = result.replace(/<img([^>]*)>/gi, (match: string, attrs: string) => {
        // Check if it's a banner (we want zero margin for banners)
        const isBanner = /Banner|Widget/i.test(attrs);
        const margin = isBanner ? '0' : '2rem';

        // Strip out existing margin and padding
        let cleanAttrs = attrs.replace(/margin[^:]*:[^;"]*;?/gi, '').replace(/padding[^:]*:[^;"]*;?/gi, '');

        const style = `margin: ${margin} auto !important; display: block; border-radius: 12px;`;

        if (/style="/i.test(cleanAttrs)) {
            return `<img${cleanAttrs.replace(/style="/i, `style="${style} `)}>`;
        } else if (/style='/i.test(cleanAttrs)) {
            return `<img${cleanAttrs.replace(/style='/i, `style='${style} `)}>`;
        } else {
            return `<img${cleanAttrs} style="${style}">`;
        }
    });

    // 7. Remove zero-width spaces or other invisible chars that might create layout space
    result = result.replace(/[\u200B-\u200D\uFEFF]/g, '');

    // 8. Trim spaces between image and the next block element completely
    // NOTE: Do NOT include <\/a> or link start here — that would strip spaces between text hyperlinks
    result = result.replace(/(<img[^>]+>)\s+(?=<[^a/])/gi, '$1');

    // 8b. Fix missing spaces around hyperlinks (common issue with editor/CRM rendering)
    // Add a space before <a> if it's immediately preceded by text or a block element closing
    result = result.replace(/([^\s>(])<a\s/gi, '$1 <a ');
    // Add a space after </a> if it's immediately followed by a character that isn't space or punctuation
    result = result.replace(/<\/a>([^\s.,!?;:)<])/gi, '</a> $1');

    // 9. Final trim of whitespace at start/end
    return result.trim();
};

/** Process FAQ answer: convert plain-text newlines and bullet points to HTML, and open links in new tab */
const processFaqAnswer = (rawAnswer: string) => {
    if (!rawAnswer) return '';

    // If it looks like HTML (has tags), just fix links and return
    if (/<[a-z][\s\S]*>/i.test(rawAnswer)) {
        return rawAnswer.replace(/<a\s+/gi, '<a target="_blank" rel="noopener noreferrer" ');
    }

    // Plain text: convert bullet lines into styled list, rest into paragraphs
    const lines = rawAnswer.split('\n');
    let result = '';
    let inList = false;

    for (const line of lines) {
        const trimmed = line.trim();
        if (trimmed.startsWith('•') || trimmed.startsWith('-')) {
            if (!inList) {
                result += '<ul style="list-style:none;margin:6px 0;padding:0;">';
                inList = true;
            }
            const content = trimmed.replace(/^[•\-]\s*/, '');
            result += `<li style="display:flex;align-items:flex-start;gap:8px;margin-bottom:4px;"><span style="color:#005A8B;font-weight:bold;flex-shrink:0;">•</span><span>${content}</span></li>`;
        } else {
            if (inList) {
                result += '</ul>';
                inList = false;
            }
            if (trimmed === '') {
                result += '<br>';
            } else {
                result += `<p style="margin:0 0 6px 0;">${trimmed}</p>`;
            }
        }
    }

    if (inList) result += '</ul>';

    return result.replace(/<a\s+/gi, '<a target="_blank" rel="noopener noreferrer" ');
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
            } else if (data.type === 'BULK_BANNER_UPDATE') {
                // For bulk updates (especially sequential), it's far safer to just refetch the latest data
                // from the database to ensure we have the correct image for THIS specific blog.
                if (blog?.slug) {
                    getBlogBySlug(blog.slug).then((updatedData) => {
                        if (updatedData) setBlog(updatedData);
                    }).catch(console.error);
                }
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
            {/* Navigation / Back Button */}
            <div className="bg-white border-b border-gray-100 py-2">
                <div className="max-w-6xl mx-auto px-4">
                    <Link href="/blogs" className="text-[#005A8B] hover:underline flex items-center gap-2 font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Blogs
                    </Link>
                </div>
            </div>

            {/* Scrollable Content */}
            <div className="lg:pt-2 md:pt-2 pt-2">
                {/* main content */}
                <div className="container px-4 mt-1">
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
                                            <span key={idx} className={`inline-block ${getCategoryTextColor(cat)} text-xs sm:text-sm font-semibold`}>
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
                                        className="blog-content max-w-none text-gray-800 mb-4 text-sm sm:text-[15px] md:text-[17px] leading-7 sm:leading-8 wrap-break-word [&_p]:text-justify [&_p]:mb-6 [&_h1]:mt-8 [&_h1]:mb-4 [&_h2]:mt-8 [&_h2]:mb-4 [&_h3]:mt-6 [&_h3]:mb-3 [&_img]:max-w-full [&_img]:h-auto [&_img]:rounded-xl [&_img]:shadow-sm [&_img]:my-8 [&_img]:mx-auto [&_a:not(:has(img))]:text-[#005A8B] [&_a:not(:has(img))]:underline [&_a:not(:has(img))]:font-semibold break-words [overflow-wrap:anywhere]"
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


                                <div className="space-y-4 sm:space-y-5 mb-8 sm:mb-12 md:mb-16">

                                    {/* Textarea */}
                                    <div className="relative w-full">
                                        <textarea
                                            placeholder=" "
                                            className="peer w-full p-3 sm:p-4 border border-gray-300 rounded-lg resize-none h-20 sm:h-24 md:h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base min-h-[80px]"
                                        />
                                        <span className="absolute left-3 sm:left-4 top-3 text-sm md:text-base text-[#78787899] pointer-events-none transition-opacity duration-200 peer-focus:opacity-0 peer-not-placeholder-shown:opacity-0">
                                            Write your comment here...
                                        </span>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                                        <div className="relative flex-1 w-full">
                                            <input
                                                type="text"
                                                placeholder=" "
                                                className="peer flex-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base min-h-[44px]"
                                            />
                                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm md:text-base text-[#78787899] pointer-events-none transition-opacity duration-200 peer-focus:opacity-0 peer-not-placeholder-shown:opacity-0">
                                                Name
                                            </span>
                                        </div>
                                        <div className="relative flex-1 w-full">
                                            <input
                                                type="email"
                                                placeholder=" "
                                                className="peer flex-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base min-h-[44px]"
                                            />
                                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm md:text-base text-[#78787899] pointer-events-none transition-opacity duration-200 peer-focus:opacity-0 peer-not-placeholder-shown:opacity-0">
                                                Email Address
                                            </span>
                                        </div>
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

