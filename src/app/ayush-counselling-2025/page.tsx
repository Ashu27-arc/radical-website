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
    <div className="min-h-screen bg-gray-50 sideright">
      {/* Hero Section */}
      <div className="relative text-white pt-10 lg:pt-18 pb-10 lg:pb-4" style={{
        backgroundImage: 'url(/images/ayush-counselling-2025-Hero.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>

        {/* Snake Beam Animation */}
        <div className="snake-beam-container absolute inset-0">
          <div className="snake-beam snake-beam-1"></div>
          <div className="snake-beam snake-beam-2"></div>
        </div>
        <div className="container px-3 md:px-4 mx-auto relative z-10">
          <div className='flex flex-col lg:gap-20 md:gap-10 md:flex-row items-center justify-between'>
            {/* Left Content */}
            <div className="w-full md:w-1/2 mb-8 lg:mb-0 animate-slide-in-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
                Secure Your Admission in Top
                <span className="text-[#00CFB2]"> AYUSH</span> Colleges of INDIA
              </h1>

              <div className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6">
                BAMS | BHMS | BNYS | BUMS | BSMS
              </div>

              <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed">
                Radical Education Guides Aspiring Doctors In Pursuing MBBS-
                Equivalent Courses In Ayurveda, Homeopathy, Unani, Siddha, And Yoga
                & Naturopathy with Transparent Counselling And Admission Support.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 md:space-x-8">
                <div className="flex items-center">
                  <span className="text-green-400 text-xl sm:text-2xl mr-2">●</span>
                  <span className="text-sm sm:text-base">12+ Years Experience</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-400 text-xl sm:text-2xl mr-2">●</span>
                  <span className="text-sm sm:text-base">15000+ Admissions</span>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="w-full md:w-1/2 animate-slide-in-right">
              <div className="bg-[#EFEFEF] rounded-2xl p-3 shadow-2xl relative overflow-hidden z-3">
                <div className="absolute left-0 top-0 w-2 w-50 h-50 bg-[#00CFB2] -z-1"></div>
                <div className="absolute right-0 bottom-0 w-50 h-50 bg-[#287FC4] -z-1"></div>

                <div className="relative z-2 bg-white rounded-lg p-6 shadow-lg">
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
      <div className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-3 md:px-20">
          <div className="text-center mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
              Explore AYUSH Courses
            </h2>
            <p className="text-base sm:text-lg text-gray-600 px-4">
              We Provide Expert Counselling For All Traditional & Alternative Medicine Programs Under AYUSH.
            </p>
          </div>

          {/* Course Cards Grid */}
          <div className="flex flex-col justify-center md:flex-row flex-wrap -m-6">
            {/* BAMS Card */}
            <div className='w-full md:w-1/2 lg:w-1/3 p-4'>
              <div className="relative text-center z-3 p-10 rounded-xl border-2 border-[#DBEFDC] shadow-lg overflow-hidden">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#DBEFDC] rounded-full flex items-center justify-center">
                    <img src="/images/ayush/plant.webp" alt="Plant" className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span className="bg-[#4CAF501A] text-[#4CAF50] px-4 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium">
                    Ayurveda
                  </span>
                </div>
                <h3 className="text-xl text-center sm:text-2xl font-bold text-[#4CAF50] mb-6">BAMS</h3>
                <h4 className="w-full text-sm sm:text-base font-semibold text-gray-800 mb-4">
                  Bachelor Of Ayurvedic Medicine & Surgery
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-8">
                  Ancient Indian Medicine System Focusing On Natural Healing Through Herbs, Lifestyle, And Holistic Treatments For Complete Wellness.
                </p>
                <div className='absolute -bottom-5 bg-[#DBEFDC] rounded-full h-10 w-[200px] left-[50%] -translate-x-[50%]'></div>
              </div>
            </div>

            {/* BHMS Card */}
            <div className='w-full md:w-1/2 lg:w-1/3 p-4'>
              <div className="relative text-center z-3 p-10 rounded-xl border-2 border-[#EFCCEA] shadow-lg overflow-hidden">
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#EFCCEA] rounded-full flex items-center justify-center">
                      <img src="/images/ayush/herbal.webp" alt="Plant" className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <span className="bg-[#EFCCEA] text-[#B00096] px-4 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium">
                      Homeopathy
                    </span>
                  </div>
                  <h3 className="text-xl text-center sm:text-2xl font-bold text-[#B00096] mb-6">BHMS</h3>
                  <h4 className="w-full text-sm sm:text-base font-semibold text-gray-800 mb-4">
                    Bachelor Of Homeopathic Medicine & Surgery
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-8">
                    Gentle Healing Approach Using Highly Diluted Substances To Stimulate The Body's Natural Healing Processes And Restore Balance.
                  </p>
                  <div className='absolute -bottom-5 bg-[#EFCCEA] rounded-full h-10 w-[200px] left-[50%] -translate-x-[50%]'></div>
              </div>
            </div>

            {/* BUMS Card */}
            <div className='w-full md:w-1/2 lg:w-1/3 p-4'>
              <div className="relative text-center z-3 p-10 rounded-xl border-2 border-[#EFCCEA] shadow-lg overflow-hidden">
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#CDE9EE] rounded-full flex items-center justify-center">
                      <img src="/images/ayush/c.webp" alt="Plant" className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <span className="bg-[#CDE9EE] text-[#0791AB] px-4 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium">
                      Unani
                    </span>
                  </div>
                  <h3 className="text-xl text-center sm:text-2xl font-bold text-[#0791AB] mb-6">BUMS</h3>
                  <h4 className="w-full text-sm sm:text-base font-semibold text-gray-800 mb-4">
                    Bachelor Of Unani Medicine & Surgery
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-8">
                    Traditional Greco-Arabic Medicine Emphasizing Natural Remedies, Diet Regulation, And Maintaining Body's Natural Equilibrium.
                  </p>
                  <div className='absolute -bottom-5 bg-[#CDE9EE] rounded-full h-10 w-[200px] left-[50%] -translate-x-[50%]'></div>
              </div>
            </div>

            {/* BSMS Card */}
            <div className='w-full md:w-1/2 lg:w-1/3 p-4'>
                <div className="relative text-center z-3 p-10 rounded-xl border-2 border-[#D5D9DE] shadow-lg overflow-hidden">
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#D5D9DE] rounded-full flex items-center justify-center">
                      <img src="/images/ayush/c-1.webp" alt="Plant" className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <span className="bg-[#D5D9DE] text-[#2F4159] px-4 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium">
                      Siddha
                    </span>
                  </div>
                  <h3 className="text-xl text-center sm:text-2xl font-bold text-[#2F4159] mb-6">BSMS</h3>
                  <h4 className="w-full text-sm sm:text-base font-semibold text-gray-800 mb-4">
                    Bachelor Of Siddha Medicine & Surgery
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed md:px-6 mb-8">
                    Ancient Tamil System Of Medicine Using Natural Substances, Minerals, And Metals For Comprehensive Healing And Longevity.
                  </p>
                  <div className='absolute -bottom-5 bg-[#D5D9DE] rounded-full h-10 w-[200px] left-[50%] -translate-x-[50%]'></div>
                </div>
            </div>

            {/* BNYS Card */}
            <div className='w-full md:w-1/2 lg:w-1/3 p-4'>
                <div className="relative text-center z-3 p-10 rounded-xl border-2 border-[#D5D9DE] shadow-lg overflow-hidden">
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FCDFDF] rounded-xl flex items-center justify-center">
                      <img src="/images/ayush/om.webp" alt="Plant" className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <span className="bg-[#FCDFDF] text-[#EE6161] px-4 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium">
                      Yoga & Naturopathy
                    </span>
                  </div>

                  <h3 className="text-xl text-center sm:text-2xl font-bold text-[#EE6161] mb-6">BNYS</h3>
                  <h4 className="w-full text-sm sm:text-base font-semibold text-gray-800 mb-4">
                    Bachelor Of Naturopathy & Yoga Sciences
                  </h4>

                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-8">
                    Holistic Approach Combining Yoga Practices, Natural Therapies, And Lifestyle Modifications For Optimal Health And Wellness.
                  </p>
                  <div className='absolute -bottom-5 bg-[#FCDFDF] rounded-full h-10 w-[200px] left-[50%] -translate-x-[50%]'></div>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Radical Education For AYUSH Section */}
      <div className="pb-12 sm:pb-16 md:pb-20 bg-[#EFF6FF]">
        <div className="container mx-auto px-3 md:px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
              Why Choose Radical Education For AYUSH?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto px-4">
              Your Trusted Partner For AYUSH Medical Admissions With Proven Expertise And Transparent Guidance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Expert AYUSH Counselling */}
            <div className="bg-[#00CFB2]/15 p-6 sm:p-8 text-center relative overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group">
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

              <h3 className="text-lg sm:text-xl font-bold text-[#00000] mb-3 sm:mb-4 relative z-10 transform transition-all duration-300 group-hover:text-[#00CFB2]">
                Expert AYUSH Counselling
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed relative z-10 transform transition-all duration-300 group-hover:text-gray-700">
                Specialized Guidance In All AYUSH<br className="hidden sm:block" /> Disciplines - BAMS, BHMS, BUMS, BSMS,<br className="hidden sm:block" />
                BNYS With Experienced Counsellors
              </p>

              {/* Animated Border */}
              <div className="absolute inset-0 border-2 border-[#00CFB2] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
            </div>

            {/* Top College Tie-Ups */}
            <div className="bg-[#287FC4]/15 p-6 sm:p-8 text-center relative overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group">
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

              <h3 className="text-lg sm:text-xl font-bold text-[#00000] mb-3 sm:mb-4 relative z-10 transform transition-all duration-300 group-hover:text-[#287FC4]">
                Top College Tie-Ups
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed relative z-10 transform transition-all duration-300 group-hover:text-gray-700">
                Direct Partnerships With NCISM/CCIM/<br className="hidden sm:block" /> AYUSH-Approved Colleges Across<br className="hidden sm:block" /> India For Guaranteed Admissions
              </p>

              {/* Animated Border */}
              <div className="absolute inset-0 border-2 border-[#287FC4] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
            </div>

            {/* Transparent Process */}
            <div className="bg-[#A8019D]/15 p-6 sm:p-8 text-center relative overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group">
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

              <h3 className="text-lg sm:text-xl font-bold text-[#00000] mb-3 sm:mb-4 relative z-10 transform transition-all duration-300 group-hover:text-[#A8019D]">
                Transparent Process
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed relative z-10 transform transition-all duration-300 group-hover:text-gray-700">
                100% Transparent Admission Process<br className="hidden sm:block" /> With Complete Documentation<br className="hidden sm:block" /> Support And Scholarship Guidance
              </p>

              {/* Animated Border */}
              <div className="absolute inset-0 border-2 border-[#A8019D] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
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
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              Simple 4-step process to secure your AYUSH medical college admission
            </p>
          </div>

          <div className='md:bg-[#E2EEEF] md:py-20 md:px-10 px-5 relative z-2'>           
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 sm:gap-6">
              <div className="overflow-hidden bg-[url('/images/card1.webp')] bg-no-repeat bg-[length:100%_100%]">
                <div className="py-36 px-10">
                  <h3 className="text-base sm:text-lg font-bold text-black mb-4 text-center">Register With Us</h3>
                  <p className="text-black text-xs sm:text-sm leading-relaxed text-center">
                    Fill The Form And Get Registered With Radical Education
                  </p>
                </div>
              </div>
              <div className="overflow-hidden bg-[url('/images/card2.webp')] bg-no-repeat bg-[length:100%_100%]">
                <div className="py-36 px-10">
                  <h3 className="text-base sm:text-lg font-bold text-black mb-4 text-center">Expert Counselling</h3>
                  <p className="text-black text-xs sm:text-sm leading-relaxed text-center">
                    Get Personalized AYUSH Stream And College Guidance
                  </p>
                </div>
              </div>
              <div className="overflow-hidden bg-[url('/images/card3.webp')] bg-no-repeat bg-[length:100%_100%]">
                <div className="py-36 px-10">
                  <h3 className="text-base sm:text-lg font-bold text-black mb-4 text-center">Select College</h3>
                  <p className="text-black text-xs sm:text-sm leading-relaxed text-center">
                    Choose Your Preferred AYUSH College And Stream
                  </p>
                </div>
              </div>
              <div className="overflow-hidden bg-[url('/images/card4.webp')] bg-no-repeat bg-[length:100%_100%]">
                <div className="py-36 px-10">
                  <h3 className="text-base sm:text-lg font-bold text-black mb-4 text-center">Confirm Admission</h3>
                  <p className="text-black text-xs sm:text-sm leading-relaxed text-center">
                    Complete Documentation And Start Your AYUSH Journey
                  </p>
                </div>
              </div>
            </div>
            <img src="/images/arroww.svg" className='hidden md:block w-full md:px-20 lg:px-35 -mt-10 relative -z-1' alt=''/>
            <img src="/images/arrowwMob.svg" className='md:hidden w-[100px] h-auto absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 -z-1' alt=''/>
          </div> 
        </div>
      </div>

      {/* Top AYUSH Colleges We Guide For Section */}
      <div className="pb-12 sm:pb-16 md:pb-20 bg-[#EFF6FF]">
        <div className="container mx-auto px-3 md:px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
              Top AYUSH Colleges We Guide For
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto px-4">
              Reputed government and private AYUSH institutions across India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mb-12 sm:mb-20">
            {/* Government AYUSH Colleges */}
            <div className="bg-white rounded-lg p-3 sm:p-4 shadow-lg border border-gray-200">
              <div className="h-40 sm:h-48 mb-4 sm:mb-6 rounded-xl overflow-hidden">
                <Image
                  src="/images/ayush/g.webp"
                  alt="Government AYUSH Colleges"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">Government AYUSH Colleges</h3>
              <p className="text-gray-600 text-sm mb-3 sm:mb-4">
                Top government institutions with affordable fees and excellent infrastructure
              </p>
              <div className="flex items-center text-green-600">
                <span className="mr-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M7.99998 0C3.58173 0 0 3.58173 0 7.99998C0 12.4182 3.58173 16 7.99998 16C12.4182 16 16 12.4182 16 7.99998C16 3.58173 12.4183 0 7.99998 0ZM11.0126 5.14177L12.1438 6.27303L7.19999 11.2376L4.23438 8.27197L5.36561 7.14071L7.19999 8.97509L11.0126 5.14177Z" fill="#2CBF0F" />
                  </svg>
                </span>
                <span className="text-sm">Ministry of AYUSH Approved</span>
              </div>
            </div>

            {/* Private AYUSH Colleges */}
            <div className="bg-white rounded-lg p-3 sm:p-4 shadow-lg border border-gray-200">
              <div className="h-40 sm:h-48 mb-4 sm:mb-6 rounded-xl overflow-hidden">
                <Image
                  src="/images/ayush/g-1.webp"
                  alt="Private AYUSH Colleges"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">Private AYUSH Colleges</h3>
              <p className="text-gray-600 text-sm mb-3 sm:mb-4">
                Premium private institutions with world-class facilities and placements
              </p>
              <div className="flex items-center text-green-600">
                <span className="mr-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M7.99998 0C3.58173 0 0 3.58173 0 7.99998C0 12.4182 3.58173 16 7.99998 16C12.4182 16 16 12.4182 16 7.99998C16 3.58173 12.4183 0 7.99998 0ZM11.0126 5.14177L12.1438 6.27303L7.19999 11.2376L4.23438 8.27197L5.36561 7.14071L7.19999 8.97509L11.0126 5.14177Z" fill="#2CBF0F" />
                  </svg>
                </span>
                <span className="text-sm">CCIM Recognized</span>
              </div>
            </div>

            {/* Specialized AYUSH Centers */}
            <div className="bg-white rounded-lg p-3 sm:p-4 shadow-lg border border-gray-200">
              <div className="h-40 sm:h-48 mb-4 sm:mb-6 rounded-xl overflow-hidden">
                <Image
                  src="/images/ayush/g-2.webp"
                  alt="Specialized AYUSH Centers"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">Specialized AYUSH Centers</h3>
              <p className="text-gray-600 text-sm mb-3 sm:mb-4">
                Institutes specializing in specific AYUSH streams with research facilities
              </p>
              <div className="flex items-center text-green-600">
                <span className="mr-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M7.99998 0C3.58173 0 0 3.58173 0 7.99998C0 12.4182 3.58173 16 7.99998 16C12.4182 16 16 12.4182 16 7.99998C16 3.58173 12.4183 0 7.99998 0ZM11.0126 5.14177L12.1438 6.27303L7.19999 11.2376L4.23438 8.27197L5.36561 7.14071L7.19999 8.97509L11.0126 5.14177Z" fill="#2CBF0F" />
                  </svg>
                </span>
                <span className="text-sm">Research Focused</span>
              </div>
            </div>
          </div>

          {/* Eligibility & Course Details Section */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
              Eligibility & Course Details
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto px-4">
              Complete information about AYUSH medical courses and eligibility criteria
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center bg-white">
            {/* Left Side - Details */}
            <div className="space-y-6 sm:space-y-8 p-6">
              {/* NEET Qualification Required */}
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M15 0C6.71575 0 0 6.71575 0 15C0 23.2842 6.71575 30 15 30C23.2842 30 30 23.2842 30 15C30 6.71575 23.2842 0 15 0ZM20.6486 9.64082L22.7697 11.7619L13.5 21.0705L7.93947 15.5099L10.0605 13.3888L13.5 16.8283L20.6486 9.64082Z" fill="#2CBF0F" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-800">NEET Qualification Required</h3>
                  <p className="text-gray-600 text-sm">
                    Valid NEET score is mandatory for all AYUSH medical admissions in India
                  </p>
                </div>
              </div>

              {/* Course Duration: 5.5 Years */}
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg width="30" height="30" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                  <h3 className="text-base sm:text-lg font-bold text-gray-800">Course Duration: 5.5 Years</h3>
                  <p className="text-gray-600 text-sm">
                    4.5 years academic study + 1 year compulsory internship
                  </p>
                </div>
              </div>

              {/* Multiple AYUSH Streams */}
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-[30px] h-[30px] flex items-center justify-center flex-shrink-0">
                  <Image src="/images/gra.webp" alt='' height="30" width="30" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-800">Multiple AYUSH Streams</h3>
                  <p className="text-gray-600 text-sm">
                    BAMS, BHMS, BUMS, BSMS, BNYS - Choose your specialization
                  </p>
                </div>
              </div>

              {/* Affordable Fee Structure */}
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-7 h-7 flex items-center justify-center flex-shrink-0 mt-1">
                  <Image src="/images/aff.webp" alt='' height="30" width="30" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-800">Affordable Fee Structure</h3>
                  <p className="text-gray-600 text-sm">
                    Government colleges from ₹60K/year, Private colleges from ₹2L/year
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Image and CTA */}
            <div className="relative mt-8 lg:mt-0">
              <div className="bg-gradient-to-br from-[#287FC4]/25 to-[#00CFB2]/25 p-6 sm:p-8 text-center">
                <div className="mb-4 sm:mb-6">
                  <Image
                    src="/images/ayush/b.webp"
                    alt="Start Your AYUSH Journey"
                    width={300}
                    height={200}
                    className="w-full max-w-sm mx-auto rounded-2xl"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                  Start Your AYUSH Journey
                </h3>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                  Join thousands of successful AYUSH doctors with our expert guidance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-12 sm:pb-16 md:pb-20 bg-[#EFF6FF]">
        <div className="container mx-auto px-3 md:px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
              Student Success Stories
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              Hear from our successful students
            </p>
          </div>
          <GoogleReviews />
        </div>
      </div>
    </div>
  );
}
