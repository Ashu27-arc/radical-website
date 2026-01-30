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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative text-white py-24 px-4" style={{
        backgroundImage: 'url(/images/ayush/hero.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#007EC8]/80 via-[#7BA9F8]/80 to-transparent bg-[length:60%_100%] bg-no-repeat"></div>
        
        {/* Snake Beam Animation */}
        <div className="snake-beam-container absolute inset-0">
          <div className="snake-beam snake-beam-1"></div>
          <div className="snake-beam snake-beam-2"></div>
        </div>
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10">
          {/* Left Content */}
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl lg:text-4xl font-bold mb-6">
              Secure Your Admission in Top
              <span> AYUSH</span> Colleges of INDIA
            </h1>
            
            <div className="text-xl mb-6">
              BAMS | BHMS | BNYS | BUMS | BSMS
            </div>
            
            <p className="text-lg mb-8 leading-relaxed">
              Radical Education Guides Aspiring Doctors In Pursuing MBBS-
              Equivalent Courses In Ayurveda, Homeopathy, Unani, Siddha, And Yoga
              & Naturopathy with Transparent Counselling And Admission Support.
            </p>
            
            <div className="flex items-center space-x-8">
              <div className="flex items-center">
                <span className="text-green-400 text-2xl mr-2">●</span>
                <span>12+ Years Experience</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-400 text-2xl mr-2">●</span>
                <span>15000+ Admissions</span>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:w-1/3 ">
            <div className="bg-white rounded-2xl p-6 shadow-2xl relative overflow-hidden border border-gray-100">
              
              {/* Top-left corner beam - L shape (horizontal to vertical) */}
              <div className="absolute top-0 left-0">
                <div className="w-50 h-4 bg-[#00CFB2] shadow-lg animate-slide-right"></div>
                <div className="w-4 h-50 bg-[#00CFB2] shadow-lg animate-slide-down"></div>
              </div>
              
              {/* Bottom-right corner beam - inverted L shape (vertical to horizontal) */}
              <div className="absolute bottom-0 right-0">
                <div className="w-4 h-50 bg-[#287FC4] ml-auto shadow-lg animate-slide-up"></div>
                <div className="w-50 h-4 bg-[#287FC4] shadow-lg animate-slide-left"></div>
              </div>
              
              <div className="relative z-10 border border-gray-200 rounded-lg p-1">
                <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
                  Book <span className="text-[#00CFB2]">AYUSH</span> Counselling
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full Name*"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#00CFB2] text-gray-800 placeholder-gray-400 transition-all duration-300 bg-gray-50 focus:bg-white text-sm"
                      required
                    />
                  </div>
                  
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address*"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#00CFB2] text-gray-800 placeholder-gray-400 transition-all duration-300 bg-gray-50 focus:bg-white text-sm"
                      required
                    />
                  </div>
                  
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number*"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#00CFB2] text-gray-800 placeholder-gray-400 transition-all duration-300 bg-gray-50 focus:bg-white text-sm"
                      required
                    />
                  </div>
                  
                  <div className="relative">
                    <select
                      name="stream"
                      value={formData.stream}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#00CFB2] text-gray-800 transition-all duration-300 bg-gray-50 focus:bg-white appearance-none cursor-pointer text-sm"
                      required
                    >
                      <option value="">Select Preferred AYUSH Stream</option>
                      <option value="BAMS">BAMS - Ayurveda</option>
                      <option value="BHMS">BHMS - Homeopathy</option>
                      <option value="BUMS">BUMS - Unani</option>
                      <option value="BSMS">BSMS - Siddha</option>
                      <option value="BNYS">BNYS - Yoga & Naturopathy</option>
                    </select>
                    {/* Custom dropdown arrow */}
                    <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#287FC4] to-[#00CFB2] text-white py-3 rounded-lg font-semibold hover:from-[#00CFB2] hover:to-[#287FC4] transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                  >
                    SUBMIT
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Courses Section */}
      <div className="py-20 px-4 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Explore AYUSH Courses
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We Provide Expert Counselling For All Traditional & Alternative Medicine Programs Under AYUSH.
            </p>
          </div>

          {/* Course Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* BAMS Card */}
            <div className="relative animate-card-tilt-3d">
              {/* Beam Effect Container */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10 rounded-2xl overflow-hidden">
                {/* Left Vertical Beam */}
                <div className="absolute top-0 left-0 w-3 h-40 bg-[#4CAF50]"></div>
                {/* Top Horizontal Beam */}
                <div className="absolute top-0 left-0 w-full h-2 bg-[#4CAF50]"></div>
                {/* Right Vertical Beam */}
                <div className="absolute top-0 right-0 w-3 h-40 bg-[#4CAF50]"></div>
              </div>
              
              {/* Card Content */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border-4 border-[#4CAF50] relative transform transition-all duration-700 hover:scale-105 hover:shadow-2xl animate-card-breathe">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <img src="/images/ayush/plant.webp" alt="Plant" className="w-6 h-6" />
                  </div>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    Ayurveda
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-green-600 mb-2">BAMS</h3>
                <h4 className="text-base font-semibold text-gray-800 mb-3">
                  Bachelor Of Ayurvedic Medicine & Surgery
                </h4>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  Ancient Indian Medicine System Focusing On Natural Healing Through Herbs, Lifestyle, And Holistic Treatments For Complete Wellness.
                </p>
              </div>
            </div>

            {/* BHMS Card */}
            <div className="bg-white rounded-2xl p-6 shadow-md border-4 border-[#B00096] hover:shadow-lg transition-all duration-300 relative overflow-hidden animate-card-morph transform hover:scale-105 hover:-rotate-2">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
                   <img src="/images/ayush/herbal.webp" alt="Plant" className="w-6 h-6" />
                </div>
                <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                  Homeopathy
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-pink-600 mb-2">BHMS</h3>
              <h4 className="text-base font-semibold text-gray-800 mb-3">
                Bachelor Of Homeopathic Medicine & Surgery
              </h4>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Gentle Healing Approach Using Highly Diluted Substances To Stimulate The Body's Natural Healing Processes And Restore Balance.
              </p>
              
              {/* Beam line effect */}
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#B00096]"></div>
              
              {/* Bottom left beam */}
              <div className="absolute bottom-0 left-0 w-2 h-40 bg-[#B00096]"></div>
              
              {/* Bottom right beam */}
              <div className="absolute bottom-0 right-0 w-2 h-40 bg-[#B00096]"></div>
            </div>

            {/* BUMS Card */}
            <div className="bg-white rounded-2xl p-6 shadow-md border-4 border-[#0791AB] hover:shadow-lg transition-all duration-300 relative overflow-hidden animate-card-wave transform hover:scale-105 hover:rotate-1">
              {/* Beam line effect */}
              <div className="absolute top-0 left-0 w-full h-2 bg-[#0791AB]"></div>
              <div className="absolute top-0 left-0 h-40 w-2 bg-[#0791AB]"></div>
              <div className="absolute top-0 right-0 h-40 w-2 bg-[#0791AB]"></div>
              
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                   <img src="/images/ayush/c.webp" alt="Plant" className="w-6 h-6" />
                </div>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                  Unani
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-blue-600 mb-2">BUMS</h3>
              <h4 className="text-base font-semibold text-gray-800 mb-3">
                Bachelor Of Unani Medicine & Surgery
              </h4>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                Traditional Greco-Arabic Medicine Emphasizing Natural Remedies, Diet Regulation, And Maintaining Body's Natural Equilibrium.
              </p>
            </div>
          </div>

          {/* Second Row */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* BSMS Card */}
            <div className="bg-white rounded-2xl p-6 shadow-md border-4 border-[#2F4159] hover:shadow-lg transition-all duration-300 relative animate-card-slide-diagonal transform hover:scale-105 hover:-rotate-1">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                   <img src="/images/ayush/c-1.webp" alt="Plant" className="w-6 h-6" />
                </div>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                  Siddha
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-700 mb-2">BSMS</h3>
              <h4 className="text-base font-semibold text-gray-800 mb-3">
                Bachelor Of Siddha Medicine & Surgery
              </h4>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                Ancient Tamil System Of Medicine Using Natural Substances, Minerals, And Metals For Comprehensive Healing And Longevity.
              </p>
                {/* Beam line effect */}
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#2F4159]"></div>
              
              {/* Bottom left beam */}
              <div className="absolute bottom-0 left-0 w-2 h-40 bg-[#2F4159]"></div>
              
              {/* Bottom right beam */}
              <div className="absolute bottom-0 right-0 w-2 h-40 bg-[#2F4159]"></div>
            </div>

            {/* BNYS Card */}
            <div className="bg-white rounded-2xl p-6 shadow-md border-4 border-[#EE6161] hover:shadow-lg transition-all duration-300 relative animate-card-spiral transform hover:scale-105 hover:rotate-2">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                   <img src="/images/ayush/om.webp" alt="Plant" className="w-6 h-6" />
                </div>
                <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
                  Yoga & Naturopathy
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-red-600 mb-2">BNYS</h3>
              <h4 className="text-base font-semibold text-gray-800 mb-3">
                Bachelor Of Naturopathy & Yoga Sciences
              </h4>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                Holistic Approach Combining Yoga Practices, Natural Therapies, And Lifestyle Modifications For Optimal Health And Wellness.
              </p>

                {/* Beam line effect */}
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#EE6161]"></div>
              
              {/* Bottom left beam */}
              <div className="absolute bottom-0 left-0 w-2 h-40 bg-[#EE6161]"></div>
              
              {/* Bottom right beam */}
              <div className="absolute bottom-0 right-0 w-2 h-40 bg-[#EE6161]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Radical Education For AYUSH Section */}
      <div className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why Choose Radical Education For AYUSH?
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Your Trusted Partner For AYUSH Medical Admissions With Proven Expertise And Transparent Guidance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Expert AYUSH Counselling */}
            <div className="bg-[#00CFB2]/15 rounded-2xl p-8 text-center relative overflow-hidden">
              <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 overflow-hidden">
                <Image
                  src="/images/ayush/icon.webp"
                  alt="Expert AYUSH Counselling"
                  width={48}
                  height={48}
                  className="w-12 h-12 object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-[#00000] mb-4 text-left">Expert AYUSH Counselling</h3>
              <p className="text-gray-600 text-sm leading-relaxed text-left">
                Specialized Guidance In All AYUSH<br /> Disciplines - BAMS, BHMS, BUMS, BSMS,<br /> 
                BNYS With Experienced Counsellors
              </p>
            </div>

            {/* Top College Tie-Ups */}
            <div className="bg-[#287FC4]/15 rounded-2xl p-8 text-center relative overflow-hidden">
                <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 overflow-hidden">
                <Image
                  src="/images/ayush/icon-1.webp"
                  alt="Expert AYUSH Counselling"
                  width={48}
                  height={48}
                  className="w-12 h-12 object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-[#00000] mb-4 text-left">Top College Tie-Ups</h3>
              <p className="text-gray-600 text-sm leading-relaxed text-left">
                Direct Partnerships With NCISM/CCIM/<br /> AYUSH-Approved Colleges Across<br /> India For Guaranteed Admissions
              </p>
            </div>

            {/* Transparent Process */}
            <div className="bg-[#A8019D]/15 rounded-2xl p-8 text-center relative overflow-hidden">
              <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 overflow-hidden">
                <Image
                  src="/images/ayush/icon-2.webp"
                  alt="Expert AYUSH Counselling"
                  width={48}
                  height={48}
                  className="w-12 h-12 object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-[#00000] mb-4 text-left">Transparent Process</h3>
              <p className="text-gray-600 text-sm leading-relaxed text-left">
                100% Transparent Admission Process<br /> With Complete Documentation<br /> Support And Scholarship Guidance
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* AYUSH Admission Process Section */}
      <div className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              AYUSH Admission Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Simple 4-step process to secure your AYUSH medical college admission
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 - Register With Us */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Top section with background image and number overlay */}
              <div className="relative h-24 flex items-center justify-center">
                {/* Background Image */}
                <img
                  src="/images/ayush/card.webp"
                  alt="Register"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Number */}
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center relative z-10 border-2 border-white/30">
                  <span className="text-black text-2xl font-bold">1</span>
                </div>
              </div>
              
              {/* Content section */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-green-600 mb- text-center">Register With Us</h3>
                <p className="text-gray-600 text-sm leading-relaxed text-center">
                  Fill The Form And Get Registered With Radical Education
                </p>
              </div>
            </div>

            {/* Step 2 - Expert Counselling */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Top section with background image and number overlay */}
              <div className="relative h-24 flex items-center justify-center">
                {/* Background Image */}
                <img
                  src="/images/ayush/card-1.webp"
                  alt="Counselling"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Number */}
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center relative z-10 border-2 border-white/30">
                  <span className="text-black text-2xl font-bold">2</span>
                </div>
              </div>
              
              {/* Content section */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-blue-600 mb-3 text-center">Expert Counselling</h3>
                <p className="text-gray-600 text-sm leading-relaxed text-center">
                  Get Personalized AYUSH Stream And College Guidance
                </p>
              </div>
            </div>

            {/* Step 3 - Select College */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Top section with background image and number overlay */}
              <div className="relative h-24 flex items-center justify-center">
                {/* Background Image */}
                <img
                  src="/images/ayush/card-2.webp"
                  alt="Select College"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Number */}
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center relative z-10 border-2 border-white/30">
                  <span className="text-black text-2xl font-bold">3</span>
                </div>
              </div>
              
              {/* Content section */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-yellow-600 mb-3 text-center">Select College</h3>
                <p className="text-gray-600 text-sm leading-relaxed text-center">
                  Choose Your Preferred AYUSH College And Stream
                </p>
              </div>
            </div>

            {/* Step 4 - Confirm Admission */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Top section with background image and number overlay */}
              <div className="relative h-24 flex items-center justify-center">
                {/* Background Image */}
                <img
                  src="/images/ayush/card-3.webp"
                  alt="Confirm Admission"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Number */}
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center relative z-10 border-2 border-white/30">
                  <span className="text-black text-2xl font-bold">4</span>
                </div>
              </div>
              
              {/* Content section */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-purple-600 mb-3 text-center">Confirm Admission</h3>
                <p className="text-gray-600 text-sm leading-relaxed text-center">
                  Complete Documentation And Start Your AYUSH Journey
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Top AYUSH Colleges We Guide For Section */}
      <div className="py-20 px-4 bg-white border-t border-b border-gray-200">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Top AYUSH Colleges We Guide For
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Reputed government and private AYUSH institutions across India
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {/* Government AYUSH Colleges */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="h-48 mb-6 rounded-xl overflow-hidden">
                <Image
                  src="/images/ayush/g.webp"
                  alt="Government AYUSH Colleges"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Government AYUSH Colleges</h3>
              <p className="text-gray-600 text-sm mb-4">
                Top government institutions with affordable fees and excellent infrastructure
              </p>
              <div className="flex items-center text-green-600">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                <span className="text-sm">Ministry of AYUSH Approved</span>
              </div>
            </div>

            {/* Private AYUSH Colleges */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="h-48 mb-6 rounded-xl overflow-hidden">
                <Image
                  src="/images/ayush/g-1.webp"
                  alt="Private AYUSH Colleges"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Private AYUSH Colleges</h3>
              <p className="text-gray-600 text-sm mb-4">
                Premium private institutions with world-class facilities and placements
              </p>
              <div className="flex items-center text-green-600">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                <span className="text-sm">CCIM Recognized</span>
              </div>
            </div>

            {/* Specialized AYUSH Centers */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="h-48 mb-6 rounded-xl overflow-hidden">
                <Image
                  src="/images/ayush/g-2.webp"
                  alt="Specialized AYUSH Centers"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Specialized AYUSH Centers</h3>
              <p className="text-gray-600 text-sm mb-4">
                Institutes specializing in specific AYUSH streams with research facilities
              </p>
              <div className="flex items-center text-green-600">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                <span className="text-sm">Research Focused</span>
              </div>
            </div>
          </div>

          {/* Eligibility & Course Details Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Eligibility & Course Details
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Complete information about AYUSH medical courses and eligibility criteria
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center border-2 border-gray-200 rounded-2xl p-8">
            {/* Left Side - Details */}
            <div className="space-y-8">
              {/* NEET Qualification Required */}
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">NEET Qualification Required</h3>
                  <p className="text-gray-600 text-sm">
                    Valid NEET score is mandatory for all AYUSH medical admissions in India
                  </p>
                </div>
              </div>

              {/* Course Duration: 5.5 Years */}
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Course Duration: 5.5 Years</h3>
                  <p className="text-gray-600 text-sm">
                    4.5 years academic study + 1 year compulsory internship
                  </p>
                </div>
              </div>

              {/* Multiple AYUSH Streams */}
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Multiple AYUSH Streams</h3>
                  <p className="text-gray-600 text-sm">
                    BAMS, BHMS, BUMS, BSMS, BNYS - Choose your specialization
                  </p>
                </div>
              </div>

              {/* Affordable Fee Structure */}
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Affordable Fee Structure</h3>
                  <p className="text-gray-600 text-sm">
                    Government colleges from ₹60K/year, Private colleges from ₹2L/year
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Image and CTA */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#287FC4]/25 to-[#00CFB2]/25 rounded-3xl p-8 text-center">
                <div className="mb-6">
                  <Image
                    src="/images/ayush/b.webp"
                    alt="Start Your AYUSH Journey"
                    width={300}
                    height={200}
                    className="w-full max-w-sm mx-auto rounded-2xl"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Start Your AYUSH Journey
                </h3>
                <p className="text-gray-600 mb-6">
                  Join thousands of successful AYUSH doctors with our expert guidance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='py-10 px-4 md:px-10'>
        <GoogleReviews />
      </div>
    </div>
  );
}
