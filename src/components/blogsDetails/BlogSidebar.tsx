"use client";

import { Dropdown } from "primereact/dropdown";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getBlogLinks, type BlogLink } from '@/lib/api';

interface BlogSidebarProps {
    className?: string;
}



const BlogSidebar = ({ className = "" }: BlogSidebarProps) => {

    const [selectedCourse, setSelectedCourse] = useState(null);
    const [links, setLinks] = useState<BlogLink[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getBlogLinks().then((data) => {
            // Sort by date (newest first) and take top 8
            const sorted = [...data].sort((a, b) => {
                const dateA = new Date(a.createdAt || 0);
                const dateB = new Date(b.createdAt || 0);
                return dateB.getTime() - dateA.getTime();
            }).slice(0, 8);
            setLinks(sorted);
            setLoading(false);
        }).catch(() => setLoading(false));
    }, []);

    const formatDate = (d?: string) => {
        if (!d) return 'Recent';
        const date = new Date(d);
        return isNaN(date.getTime()) ? 'Recent' : date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
    };

    return (
        <div className={`w-full px-4 sm:px-6 lg:px-0 lg:col-span-1 animate-fadeIn mb-12 sm:mb-16 lg:mb-20 lg:sticky lg:top-[100px] lg:w-full lg:max-w-none lg:self-start lg:h-[calc(100vh-8rem)] lg:overflow-y-auto scrollbar-hide ${className}`} style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            {/* Get In Touch Form */}
            <div className="mb-8">
                <div className="bg-[#E1F2FF] p-4 sm:p-5 md:p-6 rounded-lg transition-transform hover:scale-[1.01] duration-300 shadow-sm">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-3 sm:mb-4 text-center">Get In Touch</h3>
                    <div className="space-y-4">
                        <div className="relative w-full">
                            <input
                                type="text"
                                placeholder=" "
                                className="peer w-full bg-white p-2.5 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base transition-shadow focus:shadow-md"
                            />
                            <span className="absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 text-sm text-[#78787899] pointer-events-none transition-opacity duration-200 peer-focus:opacity-0 peer-not-placeholder-shown:opacity-0">
                                Name
                            </span>
                        </div>
                        <div className="relative w-full">
                            <input
                                type="email"
                                placeholder=" "
                                className="peer w-full bg-white p-2.5 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base transition-shadow focus:shadow-md"
                            />
                            <span className="absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 text-sm text-[#78787899] pointer-events-none transition-opacity duration-200 peer-focus:opacity-0 peer-not-placeholder-shown:opacity-0">
                                Email Address
                            </span>
                        </div>
                        <div className="relative w-full">
                            <input
                                type="tel"
                                placeholder=" "
                                className="peer w-full bg-white p-2.5 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base transition-shadow focus:shadow-md"
                            />
                            <span className="absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 text-sm text-[#78787899] pointer-events-none transition-opacity duration-200 peer-focus:opacity-0 peer-not-placeholder-shown:opacity-0">
                                Mobile No
                            </span>
                        </div>
                        <div className="relative w-full group">
                            <Dropdown
                                value={selectedCourse}
                                onChange={(e) => setSelectedCourse(e.value)}
                                options={[
                                    { label: "MBBS", value: "MBBS" },
                                    { label: "BDS", value: "BDS" },
                                    { label: "NEET PG", value: "NEET PG" },
                                ]}
                                optionLabel="label"
                                placeholder="" 
                                className="w-full bg-white border border-gray-300 rounded-lg text-sm md:text-base"
                                
                            />
                            {!selectedCourse && (
                                <span className="absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 text-sm text-[#78787899] pointer-events-none transition-opacity duration-200 ">
                                    Select Course
                                </span>
                            )}
                        </div>
                        <button className="w-full bg-gradient-to-r from-[#63CDB4] to-[#0077BF] hover:from-[#0077BF] hover:to-[#63CDB4] text-white py-2.5 sm:py-3 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg text-sm md:text-base">
                            Submit
                        </button>
                    </div>
                </div>
            </div>

            {/* Important Links Section - Dynamic */}
            <div className="bg-[#E1F2FF] p-4 sm:p-5 md:p-6 rounded-lg mt-4 sm:mt-6">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#287FC4] mb-4 sm:mb-5 md:mb-6">Important Links</h3>

                {loading ? (
                    <div className="space-y-4 animate-pulse">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="pb-4 border-b border-gray-200">
                                <div className="h-4 bg-gray-200 rounded w-full mb-2" />
                                <div className="h-3 bg-gray-200 rounded w-1/2" />
                            </div>
                        ))}
                    </div>
                ) : links.length > 0 ? (
                    <div className="space-y-4 sm:space-y-5 md:space-y-6">
                        {links.map((link) => (
                            <Link
                                key={link._id || link.id}
                                href={link.link || '#'}
                                target={link.link?.startsWith('http') ? "_blank" : "_self"}
                                className="block mb-4 pb-4 border-[#ABABAB] border-b transition-colors duration-300 group"
                            >
                                <h4 className="font-semibold text-gray-800 mb-1.5 sm:mb-2 leading-tight text-sm md:text-base group-hover:text-[#287FC4] transition-colors break-words">
                                    {link.name}
                                </h4>
                                <div className="text-gray-500 text-xs md:text-sm flex items-center justify-between">
                                    <span className="capitalize">{link.categories || 'Update'}</span>
                                    <span>{formatDate(link.createdAt)}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-500 text-sm italic">No recent links available</p>
                )}

                {/* Advertisement Banners */}
                <div className="mt-4 sm:mt-5 md:mt-6 space-y-3 sm:space-y-4">
                    <div className="bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-xl flex flex-col">
                        <img
                            src="/images/blogs/ad-1.webp"
                            alt="Study MBBS in Kyrgyzstan"
                            className="w-full h-auto opacity-90 hover:opacity-100 transition-opacity block m-0 p-0"
                        />
                    </div>
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-xl flex flex-col">
                        <img
                            src="/images/blogs/ad.webp"
                            alt="NEET PG Admission"
                            className="w-full h-auto opacity-90 hover:opacity-100 transition-opacity block m-0 p-0"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogSidebar;