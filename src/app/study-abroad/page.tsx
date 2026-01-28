"use client";

import Image from "next/image";
import Link from "next/link";

export default function StudyAbroadPage() {

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
                        className="object-cover"
                    />
                </div>
                <div className="relative container mx-auto px-4 py-20 sm:py-32 md:py-40 lg:py-50">
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
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-7 max-w-6xl mx-auto mb-8 sm:mb-16">
                    {countries.map((country, index) => (
                        <div key={index} className="text-center">
                            <Link
                                href={`/mbbs-abroad-admission/`}
                                className="block group"
                            >
                                <div className="bg-white rounded-xl p-2 sm:p-3 shadow-md border-2 border-teal-300 hover:shadow-lg transition-all hover:scale-105 w-full h-28 sm:h-32 lg:h-40 mx-auto flex items-center justify-center">
                                    <div className={`relative ${country.name === 'NEPAL' ? 'w-12 h-16 sm:w-14 sm:h-20 lg:w-16 lg:h-25' : 'w-24 h-16 sm:w-28 sm:h-20 lg:w-50 lg:h-30'}`}>
                                        <Image
                                            src={country.flag}
                                            alt={`${country.name} flag`}
                                            fill
                                            className="object-cover rounded"
                                        />
                                    </div>
                                </div>
                            </Link>
                            <h3 className="font-semibold text-gray-800 mt-2 sm:mt-3 text-xs sm:text-sm">
                                {country.name}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>

            {/* Pricing Section */}
            <div className="bg-gray-50 py-8 sm:py-12 lg:py-16 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
                        {/* Left side - Medical Counselor Image */}
                        <div className="lg:w-1/2 relative flex justify-center order-2 lg:order-1">
                            <div className="relative w-full max-w-sm sm:max-w-md">
                                {/* Background circle */}
                                <div className="absolute inset-0 w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 mx-auto overflow-hidden mt-16 sm:mt-20 lg:mt-30 -ml-10 sm:-ml-16 lg:-ml-20">
                                    <Image
                                        src="/images/study-abroad/bg.webp"
                                        alt="Background"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Medical Counselor Image */}
                                <div className="relative z-10 mt-12 sm:mt-16 lg:mt-20 -ml-24 sm:-ml-32 lg:-ml-43">
                                    <Image
                                        src="/images/study-abroad/bg-overlay.webp"
                                        alt="Medical Counselor"
                                        width={400}
                                        height={400}
                                        className="object-contain w-full h-auto max-w-xs sm:max-w-sm lg:max-w-md mx-auto"
                                    />
                                </div>

                                {/* Talk to Expert Button */}
                                <button className="absolute top-8 sm:top-12 lg:top-16 right-2 sm:right-4 lg:-right-25 bg-[#005787] text-white px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-full font-semibold flex items-center gap-1 sm:gap-2 shadow-lg hover:bg-[#005787] transition-colors text-xs sm:text-sm lg:text-base z-20">
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                    <span className="hidden sm:inline">Talk To An Expert</span>
                                    <span className="sm:hidden">Expert</span>
                                </button>
                            </div>
                        </div>

                        {/* Right side - Plan Image */}
                        <div className="lg:w-1/2 order-1 lg:order-2">
                            <div className="relative w-full h-64 sm:h-80 lg:h-110 overflow-hidden">
                                <Image
                                    src="/images/study-abroad/bottom.webp"
                                    alt="Study Abroad Plan"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Bottom Banner */}
                    <div className="mt-8 sm:mt-10 lg:mt-0">
                        <div className="bg-cover bg-center bg-no-repeat rounded-2xl p-4 sm:p-6 lg:p-8 text-center text-white relative overflow-hidden" style={{ backgroundImage: "url('/images/study-abroad/price-bg.webp')" }}>
                            <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold mb-4">
                                <span className="block sm:inline">Admission Service Charge :-</span>
                                <span className="text-gray-300 line-through ml-0 sm:ml-2 block sm:inline mt-2 sm:mt-0">₹ 1,29,999</span>
                                <span className="bg-red-500 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg ml-0 sm:ml-4 text-xl sm:text-2xl block sm:inline mt-2 sm:mt-0">₹99,999</span>
                            </h2>

                            <button className="bg-[#005787] text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full font-bold text-base sm:text-lg hover:bg-[#005787] transition-colors mt-4">
                                BOOK NOW
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Disclaimer */}
            <div className="max-w-5xl mx-auto px-4">
                <div className="mt-4 sm:mt-6 bg-white border-2 border-dashed border-gray-300 rounded-xl p-3 sm:p-4 md:p-6">
                    <div className="space-y-2">
                        <div className="flex items-start gap-2">
                            <span className="text-red-500 font-bold flex-shrink-0 text-sm md:text-base">Note:-</span>
                            <div className="space-y-1 text-sm md:text-base">
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
            <div className="py-8 sm:py-12 lg:py-16 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2E3C] mb-2">
                        OUR <span className="text-[#287FC4]">SUCCESSFUL STORIES</span>
                    </h2>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#00CFB2] mb-8 sm:mb-12 drop-shadow-2xl"> 
                        HEAR FROM OUR STUDENT
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="relative group cursor-pointer">
                                <div className="relative overflow-hidden rounded-lg">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.title}
                                        width={300}
                                        height={200}
                                        className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center">
                                            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M8 5v10l7-5-7-5z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <h4 className="mt-3 sm:mt-4 font-semibold text-gray-800 text-sm sm:text-base">{testimonial.title}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}