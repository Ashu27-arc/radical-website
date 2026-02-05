"use client";

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BlogsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

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

  const categories = ['All', 'Education', 'Exams', 'Government', 'Careers', 'Government', 'Exams'];

  const blogPosts = [
    {
      id: 1,
      category: 'Educational',
      title: 'NEET Exam in India: Your Gateway to a Bright Medical Career',
      description: 'Invite Your Friends And Unlock Exclusive Benefits—Earn More With Every Successful Referral.',
      author: 'Danish Farzan',
      date: '19 Jan 2022',
      image: '/images/blogs/neet-blog.jpg',
      categoryColor: 'bg-teal-500',
      slug: 'neet-exam-india-gateway-medical-career'
    },
    {
      id: 2,
      category: 'Exams',
      title: 'NEET Exam in India: Your Gateway to a Bright Medical',
      description: 'Invite Your Friends And Unlock Exclusive Benefits—Earn More With Every Successful Referral.',
      author: 'Danish Farzan',
      date: '19 Jan 2022',
      image: '/images/blogs/neet-blog.jpg',
      categoryColor: 'bg-orange-500',
      slug: 'neet-exam-preparation-guide'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div className="bg-white py-2 md:py-4 animate-fadeIn">
        <div className="container mx-auto px-4">
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
              <button className="hidden md:flex w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow items-center justify-center">
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
              <button className="hidden md:flex w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow items-center justify-center">
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
            <Link href="/blogs/neet-exam-india-gateway-medical-career" className="block">
              <div className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <div className="relative h-48 md:h-80">
                  <Image
                    src="/images/blogs/b.webp"
                    alt="NEET Exam Blog"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <span className="inline-block bg-teal-500 text-white px-3 py-1 rounded-full text-xs md:text-sm mb-3 md:mb-4">
                    Educational
                  </span>
                  <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-3 md:mb-4 hover:text-blue-600 transition-colors">
                    NEET Exam in India: Your Gateway to a Bright Medical Career
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">
                    Invite Your Friends And Unlock Exclusive Benefits—Earn More With Every Successful Referral. Invite Your Friends And Unlock Exclusive Benefits Invite Your Friends And Unlock Exclusive
                  </p>
                  <div className="flex items-center text-gray-500 text-xs md:text-sm">
                    <span>Danish Farzan</span>
                    <span className="mx-2">•</span>
                    <span>19 Jan 2022</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Sidebar */}
          <div className="space-y-4 md:space-y-6">
            {blogPosts.map((post, index) => (
              <Link key={post.id} href={`/blogs/${post.slug}`} className="block animate-fadeIn" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                <div className={`bg-white rounded-lg p-4 md:p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer ${index < blogPosts.length - 1 ? 'border-b-2 border-gray-200' : ''}`}>
                  <span className={`inline-block ${post.categoryColor} text-white px-3 py-1 rounded-full text-xs md:text-sm mb-3 md:mb-4`}>
                    {post.category}
                  </span>
                  <h4 className="text-base md:text-lg font-bold text-gray-800 mb-2 md:mb-3 hover:text-blue-600 transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4">
                    {post.description}
                  </p>
                  <div className="flex items-center text-gray-500 text-xs">
                    <span>{post.author}</span>
                    <span className="mx-2">•</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Extended horizontal line that spans full width */}
          <div className="absolute -bottom-4 left-0 right-0 border-b-3 border-gray-200 lg:col-span-3"></div>
        </div>

        {/* Blog Cards Grid */}
        <div className="mt-16 md:mt-30">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {/* Blog Card 1 */}
            <Link href="/blogs/neet-exam-india-gateway-medical-career" className="block animate-fadeIn" style={{ animationDelay: '0.3s' }}>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <div className="relative h-40 md:h-48">
                  <Image
                    src="/images/blogs/card.webp"
                    alt="NEET Exam Blog"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <span className="inline-block text-[#00A88E] px-3 py-1 rounded-full text-xs md:text-sm mb-2 md:mb-3">
                    Educational
                  </span>
                  <h3 className="text-base md:text-lg font-bold text-gray-800 mb-2 md:mb-3 hover:text-blue-600 transition-colors">
                    NEET Exam in India: Your Gateway to a Bright Medical
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4">
                    Invite Your Friends And Unlock Exclusive Benefits—Earn More With Every Successful Referral.
                  </p>
                  <div className="flex items-center text-gray-500 text-xs">
                    <span>Danish Farzan</span>
                    <span className="mx-2">•</span>
                    <span>19 Jan 2022</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Blog Card 2 */}
            <Link href="/blogs/neet-exam-preparation-guide" className="block animate-fadeIn" style={{ animationDelay: '0.4s' }}>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <div className="relative h-40 md:h-48">
                  <Image
                    src="/images/blogs/card-1.webp"
                    alt="NEET Exam Blog"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <span className="inline-block text-[#C77700] px-3 py-1 rounded-full text-xs md:text-sm mb-2 md:mb-3">
                    Exams
                  </span>
                  <h3 className="text-base md:text-lg font-bold text-gray-800 mb-2 md:mb-3 hover:text-blue-600 transition-colors">
                    NEET Exam in India: Your Gateway to a Bright Medical
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4">
                    Invite Your Friends And Unlock Exclusive Benefits—Earn More With Every Successful Referral.
                  </p>
                  <div className="flex items-center text-gray-500 text-xs">
                    <span>Danish Farzan</span>
                    <span className="mx-2">•</span>
                    <span>19 Jan 2022</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Blog Card 3 */}
            <Link href="/blogs/government-medical-colleges-guide" className="block animate-fadeIn" style={{ animationDelay: '0.5s' }}>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <div className="relative h-40 md:h-48">
                  <Image
                    src="/images/blogs/card-2.webp"
                    alt="NEET Exam Blog"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <span className="inline-block text-[#2C3E50] px-3 py-1 rounded-full text-xs md:text-sm mb-2 md:mb-3">
                    Government
                  </span>
                  <h3 className="text-base md:text-lg font-bold text-gray-800 mb-2 md:mb-3 hover:text-blue-600 transition-colors">
                    NEET Exam in India: Your Gateway to a Bright Medical
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4">
                    Invite Your Friends And Unlock Exclusive Benefits—Earn More With Every Successful Referral.
                  </p>
                  <div className="flex items-center text-gray-500 text-xs">
                    <span>Danish Farzan</span>
                    <span className="mx-2">•</span>
                    <span>19 Jan 2022</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Blog Card 4 */}
            <Link href="/blogs/medical-career-opportunities" className="block animate-fadeIn" style={{ animationDelay: '0.6s' }}>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <div className="relative h-40 md:h-48">
                  <Image
                    src="/images/blogs/card-2.webp"
                    alt="NEET Exam Blog"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <span className="inline-block text-[#2C3E50] px-3 py-1 rounded-full text-xs md:text-sm mb-2 md:mb-3">
                    Government
                  </span>
                  <h3 className="text-base md:text-lg font-bold text-gray-800 mb-2 md:mb-3 hover:text-blue-600 transition-colors">
                    NEET Exam in India: Your Gateway to a Bright Medical
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4">
                    Invite Your Friends And Unlock Exclusive Benefits—Earn More With Every Successful Referral.
                  </p>
                  <div className="flex items-center text-gray-500 text-xs">
                    <span>Danish Farzan</span>
                    <span className="mx-2">•</span>
                    <span>19 Jan 2022</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Blog Card 5 */}
            <Link href="/blogs/mbbs-admission-guide" className="block animate-fadeIn" style={{ animationDelay: '0.7s' }}>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <div className="relative h-40 md:h-48">
                  <Image
                    src="/images/blogs/card.webp"
                    alt="NEET Exam Blog"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <span className="inline-block text-[#00A88E] px-3 py-1 rounded-full text-xs md:text-sm mb-2 md:mb-3">
                    Educational
                  </span>
                  <h3 className="text-base md:text-lg font-bold text-gray-800 mb-2 md:mb-3 hover:text-blue-600 transition-colors">
                    NEET Exam in India: Your Gateway to a Bright Medical
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4">
                    Invite Your Friends And Unlock Exclusive Benefits—Earn More With Every Successful Referral.
                  </p>
                  <div className="flex items-center text-gray-500 text-xs">
                    <span>Danish Farzan</span>
                    <span className="mx-2">•</span>
                    <span>19 Jan 2022</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Blog Card 6 */}
            <Link href="/blogs/medical-entrance-exams" className="block animate-fadeIn" style={{ animationDelay: '0.8s' }}>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <div className="relative h-40 md:h-48">
                  <Image
                    src="/images/blogs/card-1.webp"
                    alt="NEET Exam Blog"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <span className="inline-block text-[#C77700] px-3 py-1 rounded-full text-xs md:text-sm mb-2 md:mb-3">
                    Exams
                  </span>
                  <h3 className="text-base md:text-lg font-bold text-gray-800 mb-2 md:mb-3 hover:text-blue-600 transition-colors">
                    NEET Exam in India: Your Gateway to a Bright Medical
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4">
                    Invite Your Friends And Unlock Exclusive Benefits—Earn More With Every Successful Referral.
                  </p>
                  <div className="flex items-center text-gray-500 text-xs">
                    <span>Danish Farzan</span>
                    <span className="mx-2">•</span>
                    <span>18 Jan 2022</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center mt-8 md:mt-12 space-x-1 bg-white shadow-lg rounded-full px-4 md:px-6 py-3 w-fit mx-auto overflow-x-auto">
            <button className="px-2 md:px-3 py-2 text-gray-500 hover:text-gray-700 text-sm md:text-base whitespace-nowrap">
              ← Previous
            </button>
            <button className="px-2 md:px-3 py-2 text-gray-500 hover:text-gray-700 text-sm md:text-base">
              1
            </button>
            <button className="px-2 md:px-3 py-2 bg-blue-600 text-white rounded text-sm md:text-base">
              2
            </button>
            <button className="px-2 md:px-3 py-2 text-gray-500 hover:text-gray-700 text-sm md:text-base">
              3
            </button>
            <button className="px-2 md:px-3 py-2 text-gray-500 hover:text-gray-700 text-sm md:text-base">
              4
            </button>
            <button className="px-2 md:px-3 py-2 text-gray-500 hover:text-gray-700 text-sm md:text-base">
              5
            </button>
            <button className="px-2 md:px-3 py-2 text-gray-500 hover:text-gray-700 text-sm md:text-base whitespace-nowrap">
              Next →
            </button>
          </div>
        </div>

        {/* contact form */}
        <div className="mt-12 md:mt-16 mb-6 md:mb-8 animate-fadeIn" style={{ animationDelay: '0.9s' }}>
          {/* Title */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 md:mb-8 text-center px-4">
            Connect With <span className="text-blue-400">Our Counselor</span>
          </h2>

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