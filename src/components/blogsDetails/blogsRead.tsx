"use client";

import { useState, useRef } from 'react';
import Image from 'next/image';
import BlogSidebar from './BlogSidebar';

interface BlogsReadProps {
    slug: string;
}

const BlogsRead = ({ slug }: BlogsReadProps) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');
    const categoryContainerRef = useRef<HTMLDivElement>(null);

    const categories = ['All', 'Education', 'Exams', 'Government', 'Careers'];

    const handleSearch = () => {
        // Handle search functionality
        console.log('Searching for:', searchTerm);
    };

    const scrollToActiveCategory = () => {
        if (categoryContainerRef.current) {
            const activeButton = categoryContainerRef.current.querySelector(`button:nth-child(${categories.indexOf(activeCategory) + 1})`) as HTMLElement;
            if (activeButton) {
                activeButton.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
        }
    };

    return (
        <div className="w-full bg-gray-50 py-8 md:py-20 relative">
            <div className="max-w-6xl mx-auto px-4">
                {/* Search Section */}
                <div className="flex flex-col lg:flex-row gap-4 items-start justify-start mb-8">
                    {/* Search Input */}
                    <div className="relative w-full max-w-md lg:max-w-sm lg:-ml-30">
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
                    <div 
                        ref={categoryContainerRef}
                        className="flex gap-1 items-center flex-1 min-w-0 lg:-pr-50 overflow-x-auto"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                        <style jsx>{`
                            div::-webkit-scrollbar {
                                display: none;
                            }
                        `}</style>
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-3 md:px-11.5 py-2 rounded-full font-medium transition-all duration-200 text-sm md:text-base whitespace-nowrap ${activeCategory === category
                                        ? category === 'All'
                                            ? 'bg-[#2CBF0F] text-white'
                                            : category === 'Education'
                                                ? 'bg-[#BFE6DB] text-[#00A88E]'
                                                : category === 'Exams'
                                                    ? 'bg-[#FFE0B2] text-[#C77700]'
                                                    : category === 'Government'
                                                        ? 'bg-[#D5DCE5] text-[#2C3E50]'
                                                        : category === 'Careers'
                                                            ? 'bg-[#C9E2FF] text-[#004E89]'
                                                            : 'bg-[#C9E2FF] text-[#004E89]'
                                        : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-50'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                    
                    {/* Right Arrow Button - Inline and subtle */}
                    <button 
                        onClick={scrollToActiveCategory}
                        className="flex w-8 h-8 md:w-10 md:h-10 rounded-full bg-white shadow-sm hover:shadow-md transition-all duration-200 items-center justify-center flex-shrink-0 border border-gray-200 hover:border-gray-300 lg:-mr-30">
                        <Image
                            src="/images/blogs/right-arrow.webp"
                            alt="Scroll to active category"
                            width={16}
                            height={16}
                            className="object-contain opacity-60 hover:opacity-100 transition-opacity"
                        />
                    </button>
                </div>
            </div>
            


            {/* main content */}
            <div className="max-w-7xl mx-auto px-4 mt-8 lg:ml-22">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
                    {/* Blog Content - Left Side */}
                    <div className="lg:col-span-2">
                        {/* Blog Category Badge */}
                        <div className="mb-4">
                            <span className="inline-block text-[#00A88E] px-3 py-1 rounded text-sm font-medium">
                                Educational
                            </span>
                        </div>

                        {/* Blog Title */}
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
                            NEET Exam in India: Your Gateway to a Bright Medical Career
                        </h1>

                        {/* Blog Meta */}
                        <div className="flex items-center text-gray-500 text-sm mb-6">
                            <span>Garima Pareek</span>
                            <span className="mx-2">•</span>
                            <span>15 Jan 2025</span>
                        </div>

                        {/* Blog Image */}
                        <div className="mb-6">
                            <img
                                src="/images/blogs/card.webp"
                                alt="NEET Exam Blog"
                                className="w-full h-48 md:h-64 object-cover rounded-lg"
                            />
                        </div>

                        {/* Blog Content */}
                        <div className="prose max-w-none text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                            <p className="mb-4">
                                Invite Your Friends And Unlock Exclusive Benefits—Earn More With Every Successful Referral. Invite Your Friends And
                                Unlock Exclusive Benefits Invite Your Friends And Unlock Exclusive Invite Your Friends And Unlock Exclusive Benefits—
                                Earn More With Every Successful Referral. Invite Your Friends And Unlock Exclusive Benefits Invite Your Friends And
                                Unlock Exclusive Invite Your Friends And Unlock Exclusive Benefits—Earn More With Every Successful Referral. Invite
                                Your Friends And Unlock Exclusive Benefits Invite Your Friends And Unlock Exclusive
                            </p>

                            <p className="mb-4">
                                Invite Your Friends And Unlock Exclusive Benefits—Earn More With Every Successful Referral. Invite Your Friends And
                                Unlock Exclusive Benefits Invite Your Friends And Unlock Exclusive Invite Your Friends And Unlock Exclusive Benefits—
                                Earn More With Every Successful Referral. Invite Your Friends And Unlock Exclusive Benefits Invite Your Friends And
                                Unlock Exclusive Invite Your Friends And Unlock Exclusive Benefits—Earn More With Every Successful Referral. Invite
                                Your Friends And Unlock Exclusive Benefits Invite Your Friends And Unlock Exclusive
                            </p>

                            <h2 className="text-lg md:text-xl font-bold text-gray-800 mt-8 mb-4">
                                NEET Exam in India: Your Gateway to a Bright Medical Career
                            </h2>

                            <p className="mb-4">
                                Invite Your Friends And Unlock Exclusive Benefits—Earn More With Every Successful Referral. Invite Your Friends And
                                Unlock Exclusive Benefits Invite Your Friends And Unlock Exclusive Invite Your Friends And Unlock Exclusive Benefits—
                                Earn More With Every Successful Referral. Invite Your Friends And Unlock Exclusive Benefits Invite Your Friends And
                                Unlock Exclusive Invite Your Friends And Unlock Exclusive Benefits—Earn More With Every Successful Referral. Invite
                                Your Friends And Unlock Exclusive Benefits Invite Your Friends And Unlock Exclusive
                            </p>

                            <p className="mb-4">
                                Invite Your Friends And Unlock Exclusive Benefits—Earn More With Every Successful Referral. Invite Your Friends And
                                Unlock Exclusive Benefits Invite Your Friends And Unlock Exclusive Invite Your Friends And Unlock Exclusive Benefits—
                                Earn More With Every Successful Referral. Invite Your Friends And Unlock Exclusive Benefits Invite Your Friends And
                                Unlock Exclusive Invite Your Friends And Unlock Exclusive Benefits—Earn More With Every Successful Referral. Invite
                                Your Friends And Unlock Exclusive Benefits Invite Your Friends And Unlock Exclusive
                            </p>
                        </div>

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

