"use client";

import { Dropdown } from "primereact/dropdown";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface BlogSidebarProps {
    className?: string;
}



const BlogSidebar = ({ className = "" }: BlogSidebarProps) => {

    const [selectedCourse, setSelectedCourse] = useState(null);
    const [wpBlogs, setWpBlogs] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        import('@/lib/api').then(api => api.getWpBlogs())
            .then((wpData) => {
                // Take top 5 WordPress blogs
                setWpBlogs(wpData.slice(0, 5));
                setLoading(false);
            }).catch(() => setLoading(false));
    }, []);

    const formatDate = (d?: string) => {
        if (!d) return 'Recent';
        const date = new Date(d);
        return isNaN(date.getTime()) ? 'Recent' : date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
    };

    return (
        <div className={`w-full px-4 sm:px-6 lg:px-0 lg:col-span-1 animate-fadeIn mb-12 sm:mb-16 lg:mb-20 lg:sticky lg:top-[210px] lg:w-full lg:max-w-none lg:self-start lg:h-[calc(100vh-13rem)] lg:overflow-y-auto scrollbar-hide ${className}`} style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            {/* Get In Touch Form */}
            <div className="mb-8">
                <div className="bg-[#E1F2FF] p-4 sm:p-5 md:p-6 rounded-lg transition-transform hover:scale-[1.01] duration-300 shadow-sm">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-3 sm:mb-4 text-center">Request a free callback <br /> from Our Counsellor </h3>
                    <div className="space-y-3">
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
                        <div className="flex items-center gap-2">
                            <input type="checkbox" id="consent" className="w-4 h-4" />
                            <label htmlFor="consent" className="text-[14px] text-[#787878]">I consent to receiving calls, Whatsapp messages and Google RCS from Radical Education to Assist with this Enquiry.</label>
                        </div>
                        <button className="w-full bg-gradient-to-r from-[#63CDB4] to-[#0077BF] hover:from-[#0077BF] hover:to-[#63CDB4] text-white py-2.5 sm:py-3 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg text-sm md:text-base">
                            Submit
                        </button>
                    </div>
                </div>
            </div>



            {/* Recent Blogs Section - WordPress */}
            <div className="bg-white p-4 sm:p-5 md:p-6 rounded-xl mt-4 sm:mt-6 shadow-md border border-gray-100">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-4 sm:mb-5">Recent Blogs</h3>

                {loading ? (
                    <div className="space-y-5 animate-pulse">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="flex gap-3 pb-4">
                                <div className="w-16 h-16 bg-gray-100 rounded-lg shrink-0" />
                                <div className="flex-1 space-y-2">
                                    <div className="h-4 bg-gray-100 rounded w-full" />
                                    <div className="h-3 bg-gray-100 rounded w-1/2" />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : wpBlogs.length > 0 ? (
                    <div className="space-y-5">
                        {wpBlogs.map((blog) => (
                            <Link
                                key={blog.id}
                                href={`/${blog.slug}`}
                                className="flex gap-3 group transition-all duration-300"
                            >
                                <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-lg overflow-hidden relative shadow-sm border border-gray-50">
                                    <Image
                                        src={blog.featuredImage || '/images/blogs/card.webp'}
                                        alt={blog.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="font-bold text-gray-800 mb-1 leading-tight text-xs sm:text-sm md:text-base group-hover:text-[#005A8B] transition-colors line-clamp-2">
                                        {blog.title}
                                    </h4>
                                    <div className="text-gray-500 text-[10px] sm:text-xs">
                                        {formatDate(blog.date)}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-500 text-sm italic">No recent blogs found</p>
                )}
            </div>

            {/* Sidebar Banners */}
            <div className="mt-6 space-y-4">
                <div className="group relative overflow-hidden rounded-xl shadow-lg border-2 border-transparent hover:border-teal-400 transition-all duration-300">
                    <img
                        src="/images/blogs/ad-1.webp"
                        alt="Study MBBS in Kyrgyzstan"
                        className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="group relative overflow-hidden rounded-xl shadow-lg border-2 border-transparent hover:border-blue-500 transition-all duration-300">
                    <img
                        src="/images/blogs/ad.webp"
                        alt="NEET PG Admission"
                        className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
            </div>
        </div>
    );
};

export default BlogSidebar;