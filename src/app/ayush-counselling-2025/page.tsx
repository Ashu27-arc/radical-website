"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import GoogleReviews from '@/components/GoogleReviews';

export default function AyushCounselling2025() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    stream: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const response = await fetch('/api/ayush-counselling', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitMessage({ type: 'success', text: data.message });
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          stream: ''
        });
      } else {
        setSubmitMessage({ type: 'error', text: data.message });
      }
    } catch (error) {
      setSubmitMessage({ type: 'error', text: 'Failed to submit. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative text-white pt-12 md:pt-20 lg:pt-24 pb-12 md:pb-16 lg:pb-10" style={{
        backgroundImage: 'url(/images/ayush-counselling-2025-Hero.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>

        {/* Snake Beam Animation */}
        <div className="snake-beam-container absolute inset-0 pointer-events-none overflow-hidden">
          <div className="snake-beam snake-beam-1"></div>
          <div className="snake-beam snake-beam-2"></div>
        </div>
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
          <div className='flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20'>
            {/* Left Content */}
            <div className="w-full lg:w-1/2 mb-10 lg:mb-0 animate-slide-in-left text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 leading-tight text-balance">
                Secure Your Admission in Top
                <span className="text-[#00CFB2]"> AYUSH</span> Colleges of INDIA
              </h1>

              <div className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-6 text-[#00CFB2] tracking-wide">
                BAMS | BHMS | BNYS | BUMS | BSMS
              </div>

              <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Radical Education Guides Aspiring Doctors In Pursuing MBBS-
                Equivalent Courses In Ayurveda, Homeopathy, Unani, Siddha, And Yoga
                & Naturopathy with Transparent Counselling And Admission Support.
              </p>

              <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-8 md:space-x-12">
                <div className="flex items-center">
                  <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                    <circle cx="8" cy="8" r="8" fill="white" />
                    <path d="M11.0126 5.14177L12.1438 6.27303L7.19999 11.2376L4.23438 8.27197L5.36561 7.14071L7.19999 8.97509L11.0126 5.14177Z" fill="#287FC4" />
                  </svg>
                  <span className="text-sm sm:text-base font-semibold">12+ Years Experience</span>
                </div>
                <div className="flex items-center">
                  <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                    <circle cx="8" cy="8" r="8" fill="white" />
                    <path d="M11.0126 5.14177L12.1438 6.27303L7.19999 11.2376L4.23438 8.27197L5.36561 7.14071L7.19999 8.97509L11.0126 5.14177Z" fill="#287FC4" />
                  </svg>
                  <span className="text-sm sm:text-base font-semibold">15000+ Admissions</span>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="w-full lg:w-5/12 animate-slide-in-right max-w-xl mx-auto lg:mx-0">
              <div className="bg-[#EFEFEF]/80 backdrop-blur-sm rounded-3xl p-1.5 sm:p-3 shadow-2xl relative overflow-hidden z-3">
                <div className="absolute left-0 top-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-[#00CFB2] -z-1 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60"></div>
                <div className="absolute right-0 bottom-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-[#287FC4] -z-1 translate-x-1/2 translate-y-1/2 rounded-full opacity-60"></div>

                <div className="relative z-2 bg-white rounded-2xl p-5 sm:p-8 shadow-lg">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 text-center">
                    Book <span className="text-[#00CFB2]">AYUSH</span> Counselling
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                    {submitMessage && (
                      <div className={`p-3 rounded-lg text-sm ${submitMessage.type === 'success'
                        ? 'bg-green-100 text-green-700 border border-green-300'
                        : 'bg-red-100 text-red-700 border border-red-300'
                        }`}>
                        {submitMessage.text}
                      </div>
                    )}

                    <div className="relative">
                      <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name*"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#00CFB2] text-gray-800 placeholder-gray-400 transition-all duration-300 bg-gray-50 focus:bg-white text-sm"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address*"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#00CFB2] text-gray-800 placeholder-gray-400 transition-all duration-300 bg-gray-50 focus:bg-white text-sm"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number*"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#00CFB2] text-gray-800 placeholder-gray-400 transition-all duration-300 bg-gray-50 focus:bg-white text-sm"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="relative">
                      <select
                        name="stream"
                        value={formData.stream}
                        onChange={handleInputChange}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#00CFB2] text-gray-800 transition-all duration-300 bg-gray-50 focus:bg-white appearance-none cursor-pointer text-sm"
                        required
                        disabled={isSubmitting}
                      >
                        <option value="">Select Preferred AYUSH Stream</option>
                        <option value="BAMS">BAMS - Ayurveda</option>
                        <option value="BHMS">BHMS - Homeopathy</option>
                        <option value="BUMS">BUMS - Unani</option>
                        <option value="BSMS">BSMS - Siddha</option>
                        <option value="BNYS">BNYS - Yoga & Naturopathy</option>
                      </select>
                      {/* Custom dropdown arrow */}
                      <div className="absolute inset-y-0 right-0 flex items-center px-2 sm:px-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-[#287FC4] to-[#00CFB2] text-white py-2.5 sm:py-3 rounded-lg font-semibold hover:from-[#00CFB2] hover:to-[#287FC4] transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Courses Section */}
      <div className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 text-balance">
              Explore AYUSH Courses
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
              We Provide Expert Counselling For All Traditional & Alternative Medicine Programs Under AYUSH.
            </p>
          </div>

          {/* Course Cards Grid */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center -m-4">
            {/* BAMS Card */}
            <div className='w-full sm:w-1/2 lg:w-1/3 p-4 flex'>
              <div className="relative text-center z-3 p-6 sm:p-8 md:p-10 rounded-2xl border-2 border-[#DBEFDC] shadow-lg overflow-hidden bg-white flex flex-col w-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="flex items-center justify-between mb-6 sm:mb-8">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#DBEFDC] rounded-full flex items-center justify-center flex-shrink-0">
                    <img src="/images/ayush/plant.webp" alt="Plant" className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span className="bg-[#4CAF501A] text-[#4CAF50] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                    Ayurveda
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#4CAF50] mb-4 sm:mb-6">BAMS</h3>
                <h4 className="text-base sm:text-lg font-bold text-gray-800 mb-3 sm:mb-4">
                  Bachelor Of Ayurvedic Medicine & Surgery
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 sm:mb-8 flex-grow">
                  Ancient Indian Medicine System Focusing On Natural Healing Through Herbs, Lifestyle, And Holistic Treatments For Complete Wellness.
                </p>
                <div className='absolute -bottom-5 bg-[#DBEFDC] rounded-full h-10 w-[200px] left-[50%] -translate-x-[50%] opacity-50'></div>
              </div>
            </div>

            {/* BHMS Card */}
            <div className='w-full sm:w-1/2 lg:w-1/3 p-4 flex'>
              <div className="relative text-center z-3 p-6 sm:p-8 md:p-10 rounded-2xl border-2 border-[#EFCCEA] shadow-lg overflow-hidden bg-white flex flex-col w-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="flex items-center justify-between mb-6 sm:mb-8">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#EFCCEA] rounded-full flex items-center justify-center flex-shrink-0">
                    <img src="/images/ayush/herbal.webp" alt="Plant" className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span className="bg-[#EFCCEA] text-[#B00096] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                    Homeopathy
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#B00096] mb-4 sm:mb-6">BHMS</h3>
                <h4 className="text-base sm:text-lg font-bold text-gray-800 mb-3 sm:mb-4">
                  Bachelor Of Homeopathic Medicine & Surgery
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 sm:mb-8 flex-grow">
                  Gentle Healing Approach Using Highly Diluted Substances To Stimulate The Body's Natural Healing Processes And Restore Balance.
                </p>
                <div className='absolute -bottom-5 bg-[#EFCCEA] rounded-full h-10 w-[200px] left-[50%] -translate-x-[50%] opacity-50'></div>
              </div>
            </div>

            {/* BUMS Card */}
            <div className='w-full sm:w-1/2 lg:w-1/3 p-4 flex'>
              <div className="relative text-center z-3 p-6 sm:p-8 md:p-10 rounded-2xl border-2 border-[#CDE9EE] shadow-lg overflow-hidden bg-white flex flex-col w-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="flex items-center justify-between mb-6 sm:mb-8">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#CDE9EE] rounded-full flex items-center justify-center flex-shrink-0">
                    <img src="/images/ayush/c.webp" alt="Plant" className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span className="bg-[#CDE9EE] text-[#0791AB] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                    Unani
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0791AB] mb-4 sm:mb-6">BUMS</h3>
                <h4 className="text-base sm:text-lg font-bold text-gray-800 mb-3 sm:mb-4">
                  Bachelor Of Unani Medicine & Surgery
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 sm:mb-8 flex-grow">
                  Traditional Greco-Arabic Medicine Emphasizing Natural Remedies, Diet Regulation, And Maintaining Body's Natural Equilibrium.
                </p>
                <div className='absolute -bottom-5 bg-[#CDE9EE] rounded-full h-10 w-[200px] left-[50%] -translate-x-[50%] opacity-50'></div>
              </div>
            </div>

            {/* BSMS Card */}
            <div className='w-full sm:w-1/2 lg:w-1/3 p-4 flex'>
              <div className="relative text-center z-3 p-6 sm:p-8 md:p-10 rounded-2xl border-2 border-[#D5D9DE] shadow-lg overflow-hidden bg-white flex flex-col w-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="flex items-center justify-between mb-6 sm:mb-8">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#D5D9DE] rounded-full flex items-center justify-center flex-shrink-0">
                    <img src="/images/ayush/c-1.webp" alt="Plant" className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span className="bg-[#D5D9DE] text-[#2F4159] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                    Siddha
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#2F4159] mb-4 sm:mb-6">BSMS</h3>
                <h4 className="text-base sm:text-lg font-bold text-gray-800 mb-3 sm:mb-4">
                  Bachelor Of Siddha Medicine & Surgery
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 sm:mb-8 flex-grow">
                  Ancient Tamil System Of Medicine Using Natural Substances, Minerals, And Metals For Comprehensive Healing And Longevity.
                </p>
                <div className='absolute -bottom-5 bg-[#D5D9DE] rounded-full h-10 w-[200px] left-[50%] -translate-x-[50%] opacity-50'></div>
              </div>
            </div>

            {/* BNYS Card */}
            <div className='w-full sm:w-1/2 lg:w-1/3 p-4 flex'>
              <div className="relative text-center z-3 p-6 sm:p-8 md:p-10 rounded-2xl border-2 border-[#D5D9DE] shadow-lg overflow-hidden bg-white flex flex-col w-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="flex items-center justify-between mb-6 sm:mb-8">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FCDFDF] rounded-xl flex items-center justify-center flex-shrink-0">
                    <img src="/images/ayush/om.webp" alt="Plant" className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span className="bg-[#FCDFDF] text-[#EE6161] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                    Yoga & Naturopathy
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#EE6161] mb-4 sm:mb-6">BNYS</h3>
                <h4 className="text-base sm:text-lg font-bold text-gray-800 mb-3 sm:mb-4">
                  Bachelor Of Naturopathy & Yoga Sciences
                </h4>

                <p className="text-gray-600 text-sm leading-relaxed mb-6 sm:mb-8 flex-grow">
                  Holistic Approach Combining Yoga Practices, Natural Therapies, And Lifestyle Modifications For Optimal Health And Wellness.
                </p>
                <div className='absolute -bottom-5 bg-[#FCDFDF] rounded-full h-10 w-[200px] left-[50%] -translate-x-[50%] opacity-50'></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Radical Education For AYUSH Section */}
      <div className="py-16 sm:py-20 md:py-24 bg-[#EFF6FF]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 text-balance">
              Why Choose Radical Education For AYUSH?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto px-4 leading-relaxed">
              Your Trusted Partner For AYUSH Medical Admissions With Proven Expertise And Transparent Guidance
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Expert AYUSH Counselling */}
            <div className="bg-[#00CFB2]/15 p-6 sm:p-10 text-center relative overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group rounded-2xl">
              {/* Animated Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00CFB2]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Icon Container with Hover Animation */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 overflow-hidden bg-white shadow-lg relative z-10">
                <Image
                  src="/images/ayush/icon.webp"
                  alt="Expert AYUSH Counselling"
                  width={48}
                  height={48}
                  className="w-10 h-10 sm:w-12 sm:h-12 object-cover"
                />
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-full bg-[#00CFB2]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 relative z-10 transform transition-all duration-300 group-hover:text-[#00CFB2]">
                Expert AYUSH Counselling
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed relative z-10 transform transition-all duration-300 group-hover:text-gray-700">
                Specialized Guidance In All AYUSH Disciplines - BAMS, BHMS, BUMS, BSMS,
                BNYS With Experienced Counsellors
              </p>

              {/* Animated Border */}
              <div className="absolute inset-0 border-2 border-[#00CFB2] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse rounded-2xl"></div>
            </div>

            {/* Top College Tie-Ups */}
            <div className="bg-[#287FC4]/15 p-6 sm:p-10 text-center relative overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group rounded-2xl">
              {/* Animated Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#287FC4]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>


              {/* Icon Container with Hover Animation */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 overflow-hidden bg-white shadow-lg relative z-10">
                <Image
                  src="/images/ayush/icon-1.webp"
                  alt="Top College Tie-Ups"
                  width={48}
                  height={48}
                  className="w-10 h-10 sm:w-12 sm:h-12 object-cover"
                />
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-full bg-[#287FC4]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 relative z-10 transform transition-all duration-300 group-hover:text-[#287FC4]">
                Top College Tie-Ups
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed relative z-10 transform transition-all duration-300 group-hover:text-gray-700">
                Direct Partnerships With NCISM/CCIM/ AYUSH-Approved Colleges Across India For Guaranteed Admissions
              </p>

              {/* Animated Border */}
              <div className="absolute inset-0 border-2 border-[#287FC4] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse rounded-2xl"></div>
            </div>

            {/* Transparent Process */}
            <div className="bg-[#A8019D]/15 p-6 sm:p-10 text-center relative overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group rounded-2xl">
              {/* Animated Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#A8019D]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>


              {/* Icon Container with Hover Animation */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 overflow-hidden bg-white shadow-lg relative z-10">
                <Image
                  src="/images/ayush/icon-2.webp"
                  alt="Transparent Process"
                  width={48}
                  height={48}
                  className="w-10 h-10 sm:w-12 sm:h-12 object-cover"
                />
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-full bg-[#A8019D]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 relative z-10 transform transition-all duration-300 group-hover:text-[#A8019D]">
                Transparent Process
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed relative z-10 transform transition-all duration-300 group-hover:text-gray-700">
                100% Transparent Admission Process With Complete Documentation Support And Scholarship Guidance
              </p>

              {/* Animated Border */}
              <div className="absolute inset-0 border-2 border-[#A8019D] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* AYUSH Admission Process Section */}
      <div className="pb-12 sm:pb-16 md:pb-20 bg-[#EFF6FF]">
        <div className="container mx-auto px-3 md:px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
              AYUSH Admission Process
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4 leading-relaxed font-medium">
              A transparent and hassle-free 4-step process to secure your preferred AYUSH medical college admission with expert support.
            </p>
          </div>

          <div className='md:bg-[#E2EEEF] py-10 md:py-20 px-4 md:px-10 rounded-3xl relative z-2'>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6">
              <div className="overflow-hidden bg-[url('/images/card1.webp')] bg-no-repeat bg-[length:100%_100%] transition-transform hover:scale-105 duration-300 min-h-[250px] sm:min-h-0">
                <div className="py-16 sm:py-24 md:py-32 px-6 md:px-8">
                  <h3 className="text-lg md:text-xl font-bold text-black mb-3 md:mb-4 text-center">Register With Us</h3>
                  <p className="text-black text-xs md:text-sm leading-relaxed text-center font-medium">
                    Fill The Form And Get Registered With Radical Education
                  </p>
                </div>
              </div>
              <div className="overflow-hidden bg-[url('/images/card2.webp')] bg-no-repeat bg-[length:100%_100%] transition-transform hover:scale-105 duration-300 min-h-[250px] sm:min-h-0">
                <div className="py-16 sm:py-24 md:py-32 px-6 md:px-8">
                  <h3 className="text-lg md:text-xl font-bold text-black mb-3 md:mb-4 text-center">Expert Counselling</h3>
                  <p className="text-black text-xs md:text-sm leading-relaxed text-center font-medium">
                    Get Personalized AYUSH Stream And College Guidance
                  </p>
                </div>
              </div>
              <div className="overflow-hidden bg-[url('/images/card3.webp')] bg-no-repeat bg-[length:100%_100%] transition-transform hover:scale-105 duration-300 min-h-[250px] sm:min-h-0">
                <div className="py-16 sm:py-24 md:py-32 px-6 md:px-8">
                  <h3 className="text-lg md:text-xl font-bold text-black mb-3 md:mb-4 text-center">Select College</h3>
                  <p className="text-black text-xs md:text-sm leading-relaxed text-center font-medium">
                    Choose Your Preferred AYUSH College And Stream
                  </p>
                </div>
              </div>
              <div className="overflow-hidden bg-[url('/images/card4.webp')] bg-no-repeat bg-[length:100%_100%] transition-transform hover:scale-105 duration-300 min-h-[250px] sm:min-h-0">
                <div className="py-16 sm:py-24 md:py-32 px-6 md:px-8">
                  <h3 className="text-lg md:text-xl font-bold text-black mb-3 md:mb-4 text-center">Confirm Admission</h3>
                  <p className="text-black text-xs md:text-sm leading-relaxed text-center font-medium">
                    Complete Documentation And Start Your AYUSH Journey
                  </p>
                </div>
              </div>
            </div>
            <img src="/images/arroww.svg" className='hidden lg:block w-full md:px-20 lg:px-32 -mt-10 relative -z-1 opacity-50' alt='' />
            <div className='lg:hidden absolute inset-0 flex items-center justify-center -z-1'>
              <img src="/images/arrowwMob.svg" className='w-16 h-auto opacity-50 rotate-90 sm:rotate-0' alt='' />
            </div>
          </div>
        </div>
      </div>

      {/* Top AYUSH Colleges We Guide For Section */}
      <div className="py-16 sm:py-20 md:py-24 bg-[#EFF6FF]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 text-balance">
              Top AYUSH Colleges We Guide For
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto px-4 leading-relaxed">
              Reputed government and private AYUSH institutions across India
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-20">
            {/* Government AYUSH Colleges */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-lg border border-gray-100 flex flex-col transition-all duration-300 hover:shadow-xl group">
              <div className="h-44 sm:h-52 mb-4 sm:mb-6 rounded-xl overflow-hidden relative">
                <Image
                  src="/images/ayush/g.webp"
                  alt="Government AYUSH Colleges"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-gray-800 mb-2 sm:mb-3">Government AYUSH Colleges</h3>
              <p className="text-gray-600 text-sm mb-4 flex-grow leading-relaxed">
                Top government institutions with affordable fees and excellent infrastructure across India.
              </p>
              <div className="flex items-center text-green-600 font-semibold mt-auto">
                <span className="mr-2">
                  <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M7.99998 0C3.58173 0 0 3.58173 0 7.99998C0 12.4182 3.58173 16 7.99998 16C12.4182 16 16 12.4182 16 7.99998C16 3.58173 12.4183 0 7.99998 0ZM11.0126 5.14177L12.1438 6.27303L7.19999 11.2376L4.23438 8.27197L5.36561 7.14071L7.19999 8.97509L11.0126 5.14177Z" fill="#2CBF0F" />
                  </svg>
                </span>
                <span className="text-xs sm:text-sm">Ministry of AYUSH Approved</span>
              </div>
            </div>

            {/* Private AYUSH Colleges */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-lg border border-gray-100 flex flex-col transition-all duration-300 hover:shadow-xl group">
              <div className="h-44 sm:h-52 mb-4 sm:mb-6 rounded-xl overflow-hidden relative">
                <Image
                  src="/images/ayush/g-1.webp"
                  alt="Private AYUSH Colleges"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-gray-800 mb-2 sm:mb-3">Private AYUSH Colleges</h3>
              <p className="text-gray-600 text-sm mb-4 flex-grow leading-relaxed">
                Premium private institutions with world-class facilities and excellent placement records.
              </p>
              <div className="flex items-center text-blue-600 font-semibold mt-auto">
                <span className="mr-2">
                  <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M7.99998 0C3.58173 0 0 3.58173 0 7.99998C0 12.4182 3.58173 16 7.99998 16C12.4182 16 16 12.4182 16 7.99998C16 3.58173 12.4183 0 7.99998 0ZM11.0126 5.14177L12.1438 6.27303L7.19999 11.2376L4.23438 8.27197L5.36561 7.14071L7.19999 8.97509L11.0126 5.14177Z" fill="#287FC4" />
                  </svg>
                </span>
                <span className="text-xs sm:text-sm">NCISM/CCIM Recognized</span>
              </div>
            </div>

            {/* Specialized AYUSH Centers */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-lg border border-gray-100 flex flex-col transition-all duration-300 hover:shadow-xl group">
              <div className="h-44 sm:h-52 mb-4 sm:mb-6 rounded-xl overflow-hidden relative">
                <Image
                  src="/images/ayush/g-2.webp"
                  alt="Specialized AYUSH Centers"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-gray-800 mb-2 sm:mb-3">Specialized AYUSH Centers</h3>
              <p className="text-gray-600 text-sm mb-4 flex-grow leading-relaxed">
                Institutes specializing in specific AYUSH streams with advanced research facilities.
              </p>
              <div className="flex items-center text-purple-600 font-semibold mt-auto">
                <span className="mr-2">
                  <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M7.99998 0C3.58173 0 0 3.58173 0 7.99998C0 12.4182 3.58173 16 7.99998 16C12.4182 16 16 12.4182 16 7.99998C16 3.58173 12.4183 0 7.99998 0ZM11.0126 5.14177L12.1438 6.27303L7.19999 11.2376L4.23438 8.27197L5.36561 7.14071L7.19999 8.97509L11.0126 5.14177Z" fill="#A8019D" />
                  </svg>
                </span>
                <span className="text-xs sm:text-sm">Research & Clinical Excellence</span>
              </div>
            </div>
          </div>

          {/* Eligibility & Course Details Section */}
          <div className="text-center mt-16 md:mt-24 mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 text-balance">
              Eligibility & Course Details
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto px-4 leading-relaxed">
              Complete information about AYUSH medical courses and eligibility criteria
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Left Side - Details */}
            <div className="space-y-6 sm:space-y-8 p-6 sm:p-8 bg-white rounded-3xl border border-gray-100 shadow-xl">
              {/* NEET Qualification Required */}
              <div className="flex items-start space-x-4 sm:space-x-6 group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-100 transition-colors duration-300">
                  <svg width="24" height="24" viewBox="0 0 30 30" fill="none" className="w-6 h-6 sm:w-8 sm:h-8">
                    <path fillRule="evenodd" clipRule="evenodd" d="M15 0C6.71575 0 0 6.71575 0 15C0 23.2842 6.71575 30 15 30C23.2842 30 30 23.2842 30 15C30 6.71575 23.2842 0 15 0ZM20.6486 9.64082L22.7697 11.7619L13.5 21.0705L7.93947 15.5099L10.0605 13.3888L13.5 16.8283L20.6486 9.64082Z" fill="#2CBF0F" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1">NEET Qualification Required</h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    Valid NEET score is mandatory for all AYUSH medical admissions in India as per NCISM guidelines.
                  </p>
                </div>
              </div>

              {/* Course Duration: 5.5 Years */}
              <div className="flex items-start space-x-4 sm:space-x-6 group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors duration-300">
                  <svg width="24" height="24" viewBox="0 0 32 32" fill="none" className="w-6 h-6 sm:w-8 sm:h-8">
                    <mask id="mask0_840_1406" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
                      <path d="M16 31C24.2845 31 31 24.2845 31 16C31 7.7155 24.2845 1 16 1C7.7155 1 1 7.7155 1 16C1 24.2845 7.7155 31 16 31Z" fill="white" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                      <path d="M16.0117 7V16.0075L22.371 22.3675" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </mask>
                    <g mask="url(#mask0_840_1406)">
                      <path d="M-2 -2H34V34H-2V-2Z" fill="#0B2E3C" />
                    </g>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1">Course Duration: 5.5 Years</h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    Comprises 4.5 years of academic study followed by 1 year of compulsory rotating internship.
                  </p>
                </div>
              </div>

              {/* Multiple AYUSH Streams */}
              <div className="flex items-start space-x-4 sm:space-x-6 group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-purple-50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-purple-100 transition-colors duration-300">
                  <Image src="/images/gra.webp" alt='' height="32" width="32" className="w-7 h-7 sm:w-9 sm:h-9" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1">Multiple AYUSH Streams</h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    BAMS, BHMS, BUMS, BSMS, BNYS - Wide range of specializations in traditional medicine.
                  </p>
                </div>
              </div>

              {/* Affordable Fee Structure */}
              <div className="flex items-start space-x-4 sm:space-x-6 group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-amber-50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-amber-100 transition-colors duration-300">
                  <Image src="/images/aff.webp" alt='' height="32" width="32" className="w-7 h-7 sm:w-9 sm:h-9" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1">Affordable Fee Structure</h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    Govt. colleges approx. ₹60K-1.5L/year, Private colleges from ₹2.5L/year depending on state.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Image and CTA */}
            <div className="relative mt-10 lg:mt-0 flex flex-col items-center justify-center">
              <div className="bg-white p-2 rounded-[2rem] shadow-2xl border border-gray-100 w-full max-w-lg">
                <div className="bg-gradient-to-br from-[#287FC4] to-[#00CFB2] p-8 sm:p-12 text-center rounded-[1.8rem] text-white">
                  <div className="mb-6 sm:mb-8 relative">
                    <div className="absolute inset-0 bg-white/20 blur-3xl rounded-full scale-150"></div>
                    <Image
                      src="/images/ayush/b.webp"
                      alt="Start Your AYUSH Journey"
                      width={300}
                      height={200}
                      className="w-full max-w-xs mx-auto rounded-2xl relative z-10 shadow-lg transform -rotate-2 hover:rotate-0 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold mb-4">
                    Start Your <br />AYUSH Journey?
                  </h3>
                  <p className="text-white/90 mb-8 text-sm sm:text-base leading-relaxed">
                    Join thousands of successful doctors who secured admissions through our expert guidance.
                  </p>
                  <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="bg-white text-[#287FC4] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors duration-300 shadow-lg"
                  >
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-16 sm:py-20 md:py-24 bg-[#EFF6FF]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 text-balance">
              Student Success Stories
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
              Hear from our successful students
            </p>
          </div>
          <GoogleReviews />
        </div>
      </div>
    </div>
  );
}
