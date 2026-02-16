"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function StudyAbroadPage() {
    const [showAllCountries, setShowAllCountries] = useState(false);

    const countries = [
        { name: "NEPAL", flag: "/images/study-abroad/flags/nepal.webp", slug: "nepal" },
        { name: "RUSSIA", flag: "/images/study-abroad/flags/russia.webp", slug: "russia" },
        { name: "GEORGIA", flag: "/images/study-abroad/flags/georgia.webp", slug: "georgia" },
        { name: "BANGLADESH", flag: "/images/study-abroad/flags/bangladesh.webp", slug: "bangladesh" },
        { name: "SINGAPORE", flag: "/images/study-abroad/flags/singapore.webp", slug: "singapore" },
        { name: "KAZAKHSTAN", flag: "/images/study-abroad/flags/kazakhstan.webp", slug: "kazakhstan" },
        { name: "UZBEKISTAN", flag: "/images/study-abroad/flags/uzbekistan.webp", slug: "uzbekistan" },
        { name: "KYRGYZSTAN", flag: "/images/study-abroad/flags/kyrgyzstan.webp", slug: "kyrgyzstan" },
        { name: "ITALY", flag: "/images/study-abroad/flags/italy.webp", slug: "italy" }
    ];

    const features = [
        "Agents Verification Available",
        "Agents Qualification Verification Available",
        "Agents Qualification Available",
        "Agents Qualification Available",
        "Agents Qualification Services Available with call",
        "Agents Qualification Services",
        "Agents Qualification Services Available with call"
    ];

    const testimonials = [
        {
            image: "/images/study-abroad/story.webp",
            title: "Successful Admission"
        },
        {
            image: "/images/study-abroad/story-1.webp",
            title: "PRINCE'S SPOT MBBS SEAT POINT WITH"
        },
        {
            image: "/images/study-abroad/story-2.webp",
            title: "Successful Admission"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                <div className="absolute inset-0">
                    <Image
                        src="/images/study-abroad/study-abroad.webp"
                        alt="Study Abroad Hero"
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, (max-width: 1280px) 100vw, (max-width: 1536px) 100vw, 100vw"
                        priority
                    />
                </div>
                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-10 lg:py-12 xl:py-14 2xl:py-16">
                </div>
            </div>

            {/* Countries Section */}
            <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
                <div className="flex flex-col lg:flex-row items-start justify-between mb-8 sm:mb-12 gap-4 sm:gap-8">
                    {/* Left side - Countries and Heading */}
                    <div className="lg:w-1/2">
                        <p className="text-gray-600 mb-2 text-sm sm:text-base">COUNTRIES</p>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">STUDY ABROAD</h2>
                    </div>

                    {/* Right side - Description */}
                    <div className="lg:w-1/2">
                        <p className="text-gray-600 text-sm sm:text-base">
                            Discover a World Where you can Experience a Life, that You have
                            never Experienced, and Become what you have never Imagined.
                        </p>
                    </div>
                </div>

                {/* Country Grid */}
                <div className="max-w-6xl mx-auto mb-4 sm:mb-8 lg:mb-16">
                    {/* Mobile View - Show only 4 countries initially */}
                    <div className="block sm:hidden">
                        <div className="grid grid-cols-2 gap-3 mb-4">
                            {countries.slice(0, showAllCountries ? countries.length : 4).map((country, index) => (
                                <div key={index} className="text-center">
                                    <Link
                                        href={`/mbbs-abroad-admission/`}
                                        className="block group"
                                    >
                                        <div className="bg-white rounded-lg p-2 shadow-md border-2 border-teal-300 hover:shadow-lg transition-all hover:scale-105 w-full h-24 mx-auto flex items-center justify-center">
                                            <div className={`relative ${country.name === 'NEPAL' ? 'w-10 h-12' : 'w-20 h-12'}`}>
                                                <Image
                                                    src={country.flag}
                                                    alt={`${country.name} flag`}
                                                    fill
                                                    className="object-cover rounded"
                                                />
                                            </div>
                                        </div>
                                    </Link>
                                    <h3 className="font-semibold text-gray-800 mt-1 text-xs">
                                        {country.name}
                                    </h3>
                                </div>
                            ))}
                        </div>
                        
                        {/* View More Button for Mobile */}
                        {!showAllCountries && countries.length > 4 && (
                            <div className="text-center">
                                <button
                                    onClick={() => setShowAllCountries(true)}
                                    className="bg-[#005787] text-white px-6 py-2 rounded-full font-semibold text-sm hover:bg-[#004666] transition-colors"
                                >
                                    View More
                                </button>
                            </div>
                        )}
                        
                        {/* View Less Button for Mobile */}
                        {showAllCountries && (
                            <div className="text-center">
                                <button
                                    onClick={() => setShowAllCountries(false)}
                                    className="bg-gray-600 text-white px-6 py-2 rounded-full font-semibold text-sm hover:bg-gray-700 transition-colors"
                                >
                                    View Less
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Desktop/Tablet View - Show all countries */}
                    <div className="hidden sm:grid sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 lg:gap-7">
                        {countries.map((country, index) => (
                            <div key={index} className="text-center">
                                <Link
                                    href={`/mbbs-abroad-admission/`}
                                    className="block group"
                                >
                                    <div className="bg-white rounded-xl p-3 shadow-md border-2 border-teal-300 hover:shadow-lg transition-all hover:scale-105 w-full h-28 md:h-32 lg:h-40 mx-auto flex items-center justify-center">
                                        <div className={`relative ${country.name === 'NEPAL' ? 'w-12 h-16 md:w-14 md:h-20 lg:w-16 lg:h-25' : 'w-24 h-16 md:w-28 md:h-20 lg:w-50 lg:h-30'}`}>
                                            <Image
                                                src={country.flag}
                                                alt={`${country.name} flag`}
                                                fill
                                                className="object-cover rounded"
                                            />
                                        </div>
                                    </div>
                                </Link>
                                <h3 className="font-semibold text-gray-800 mt-2 md:mt-3 text-sm">
                                    {country.name}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Pricing Section */}
            <div className="bg-gray-50 -py-20 sm:py-8 md:py-12 lg:py-16 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    {/* Mobile Layout - Stack images vertically */}
                    <div className="block lg:hidden">
                        {/* Top - Medical Counselor Image (Mobile) */}
                        <div className="relative flex justify-center mb-6">
                            <div className="relative w-full max-w-sm sm:max-w-md">
                                {/* Background circle */}
                                <div className="absolute inset-0 w-56 h-56 sm:w-64 sm:h-64 mx-auto overflow-hidden mt-20 sm:mt-8 ml-3 sm:-ml-12">
                                    <Image
                                        src="/images/study-abroad/bg.webp"
                                        alt="Background"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Medical Counselor Image */}
                                <div className="relative z-0 sm:z-10 mt-2 sm:mt-6 -ml-1 sm:-ml-16">
                                    <Image
                                        src="/images/study-abroad/bg-overlay.webp"
                                        alt="Medical Counselor"
                                        width={400}
                                        height={400}
                                        className="object-contain w-full h-auto max-w-sm sm:max-w-md mx-auto"
                                    />
                                </div>

                                {/* Talk to Expert Button */}
                                <button className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-[#005787] text-white px-3 py-2 sm:px-4 sm:py-2 rounded-full font-semibold flex items-center gap-2 shadow-lg hover:bg-[#004a6b] transition-colors text-xs sm:text-sm z-20">
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                    <span>Talk To An Expert</span>
                                </button>
                            </div>
                        </div>

                        {/* Bottom - Plan Image (Mobile) */}
                        <div className="-mt-14 sm:mt-12 relative z-10 sm:z-0">
                            <div className="relative w-full h-80 sm:h-72 overflow-hidden">
                                <Image
                                    src="/images/study-abroad/bottom.webp"
                                    alt="Study Abroad Plan"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                    {/* Desktop Layout - Side by side */}
                    <div className="hidden lg:flex items-center gap-12">
                        {/* Left side - Medical Counselor Image */}
                        <div className="lg:w-1/2 relative flex justify-center">
                            <div className="relative w-full max-w-lg">
                                {/* Background circle */}
                                <div className="absolute inset-0 w-80 h-80 mx-auto overflow-hidden mt-30 -ml-20">
                                    <Image
                                        src="/images/study-abroad/bg.webp"
                                        alt="Background"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Medical Counselor Image */}
                                <div className="relative z-10 mt-20 -ml-43">
                                    <Image
                                        src="/images/study-abroad/bg-overlay.webp"
                                        alt="Medical Counselor"
                                        width={400}
                                        height={400}
                                        className="object-contain w-full h-auto max-w-md mx-auto"
                                    />
                                </div>

                                {/* Talk to Expert Button */}
                                <button className="absolute top-16 -right-25 bg-[#005787] text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg hover:bg-[#004a6b] transition-colors text-base z-20">
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                    <span>Talk To An Expert</span>
                                </button>
                            </div>
                        </div>

                        {/* Right side - Plan Image */}
                        <div className="lg:w-1/2">
                            <div className="relative w-full h-80 xl:h-110 overflow-hidden">
                                <Image
                                    src="/images/study-abroad/bottom.webp"
                                    alt="Study Abroad Plan"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                    {/* Bottom Banner */}
                    <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-0">
                        <div className="bg-cover bg-center bg-no-repeat rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 text-center text-white relative overflow-hidden" style={{ backgroundImage: "url('/images/study-abroad/price-bg.webp')" }}>
                            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-3 sm:mb-4">
                                <span className="block sm:inline">Admission Service Charge :-</span>
                                <span className="text-gray-300 line-through ml-0 sm:ml-2 block sm:inline mt-1 sm:mt-0">₹ 1,29,999</span>
                                <span className="bg-red-500 text-white px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 rounded-lg ml-0 sm:ml-4 text-lg sm:text-xl md:text-2xl block sm:inline mt-1 sm:mt-0">₹99,999</span>
                            </h2>

                            <button className="bg-[#005787] text-white px-4 py-2 sm:px-6 sm:py-2 md:px-8 md:py-3 rounded-full font-bold text-sm sm:text-base md:text-lg hover:bg-[#005787] transition-colors mt-2 sm:mt-4">
                                BOOK NOW
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Disclaimer */}
            <div className="max-w-5xl mx-auto px-4">
                <div className="mt-3 sm:mt-4 md:mt-6 bg-white border-2 border-dashed border-gray-300 rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 lg:p-6">
                    <div className="space-y-1 sm:space-y-2">
                        <div className="flex items-start gap-1 sm:gap-2">
                            <span className="text-red-500 font-bold flex-shrink-0 text-xs sm:text-sm md:text-base">Note:-</span>
                            <div className="space-y-1 text-xs sm:text-sm md:text-base">
                                <p className="text-green-600">
                                    1. This Service Charge Includes The Visa Charges But Does Not Cover The Ticket Charges.
                                </p>
                                <p className="text-green-600">
                                    2. Get The Offer Price 99,999 Before NEET Result
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Success Stories Section */}
            <div className="py-6 sm:py-8 md:py-12 lg:py-16 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0B2E3C] mb-1 sm:mb-2">
                        OUR <span className="text-[#287FC4]">SUCCESSFUL STORIES</span>
                    </h2>
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#00CFB2] mb-6 sm:mb-8 md:mb-12 drop-shadow-2xl"> 
                        HEAR FROM OUR STUDENT
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="relative group cursor-pointer">
                                <div className="relative overflow-hidden rounded-lg">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.title}
                                        width={300}
                                        height={200}
                                        className="w-full h-32 sm:h-40 md:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center">
                                            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M8 5v10l7-5-7-5z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <h4 className="mt-2 sm:mt-3 md:mt-4 font-semibold text-gray-800 text-xs sm:text-sm md:text-base">{testimonial.title}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}