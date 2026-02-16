"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import NeetDetails from "@/components/neet-update-details/neet-details";
// Primeicons imported in layout.tsx

// Mock Data for the articles
const articles = [
    {
        id: 1,
        date: "19 Jan 2022",
        title: "NEET Exam in India: Your Gateway to a Bright Medical",
        description:
            "Invite Your Friends And Unlock Exclusive Benefits--Earn More With Every Successful Referral. Invite Your",
        image: "/images/neet-update/card.webp",
    },
    {
        id: 2,
        date: "19 Jan 2022",
        title: "NEET Exam in India: Your Gateway to a Bright Medical",
        description:
            "Invite Your Friends And Unlock Exclusive Benefits--Earn More With Every Successful Referral. Invite Your",
        image: "/images/neet-update/card-1.webp",
    },
    {
        id: 3,
        date: "19 Jan 2022",
        title: "NEET Exam in India: Your Gateway to a Bright Medical",
        description:
            "Invite Your Friends And Unlock Exclusive Benefits--Earn More With Every Successful Referral. Invite Your",
        image: "/images/neet-update/card-2.webp",
    },
    {
        id: 4,
        date: "19 Jan 2022",
        title: "NEET Exam in India: Your Gateway to a Bright Medical",
        description:
            "Invite Your Friends And Unlock Exclusive Benefits--Earn More With Every Successful Referral. Invite Your",
        image: "/images/neet-update/card-3.webp",
    },
    {
        id: 5,
        date: "19 Jan 2022",
        title: "NEET Exam in India: Your Gateway to a Bright Medical",
        description:
            "Invite Your Friends And Unlock Exclusive Benefits--Earn More With Every Successful Referral. Invite Your",
        image: "/images/neet-update/card-4.webp",
    },
    {
        id: 6,
        date: "19 Jan 2022",
        title: "NEET Exam in India: Your Gateway to a Bright Medical",
        description:
            "Invite Your Friends And Unlock Exclusive Benefits--Earn More With Every Successful Referral. Invite Your",
        image: "/images/neet-update/card-5.webp",
    },
];

export function NeetUpdateContent() {
    const [currentPage, setCurrentPage] = useState(2);
    const [isCourseOpen, setIsCourseOpen] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState("MBBS");

    const searchParams = useSearchParams();
    const showDetails = searchParams.get("details") === "true";

    if (showDetails) {
        return <NeetDetails />;
    }

    return (
        <div className="bg-[#Fdfdfd] min-h-screen pb-10 md:pb-20 py-1">
            {/* Hero Section */}
            <section className="relative w-full h-[350px] sm:h-[400px] md:h-[500px]">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('/images/neet-update/hero-section.webp')",
                    }}
                >
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>

                {/* Hero Content */}
                <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex flex-col md:flex-row items-start md:items-end justify-between pb-8 md:pb-20 text-white">
                    <div className="max-w-2xl pt-10 md:pt-0 top-20">
                        <span className="text-[#38b6ff] font-medium text-xs sm:text-sm md:text-base mb-1 sm:mb-2 block">
                            19 Jan 2022
                        </span>
                        <Link href="?details=true" target="_blank">
                            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight mb-3 sm:mb-1 hover:text-[#38b6ff] transition-colors cursor-pointer">
                                NEET Exam in India: Your Gateway to a Bright Medical Career
                            </h1>
                        </Link>
                        <p className="text-gray-200 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mb-6 md:-mb-1 line-clamp-3 md:line-clamp-none">
                            Invite Your Friends And Unlock Exclusive Benefits—Earn More With Every
                            Successful Referral. Invite Your Friends And Unlock Exclusive Benefits
                            Invite Your Friends And Unlock Exclusive
                        </p>
                    </div>

                    {/* Slider Arrows (Visual Only) - Hidden on smallest phones for better layout */}
                    <div className="flex justify-center md:justify-start w-full md:w-auto gap-4 mt-4 md:mt-0 md:mb-8 shrink-0">
                        <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition">
                            <i className="pi pi-arrow-left text-xs sm:text-sm"></i>
                        </button>
                        <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition">
                            <i className="pi pi-arrow-right text-xs sm:text-sm"></i>
                        </button>
                    </div>
                </div>
            </section>

            {/* Search & Filter Section */}
            <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-6 md:py-12">
                <div className="flex flex-col xl:flex-row items-center justify-between gap-6">
                    {/* Search Bar */}
                    <div className="flex flex-col sm:flex-row items-center gap-3 w-full xl:w-auto">
                        <div className="relative w-full sm:w-[320px]">
                            <input
                                type="text"
                                placeholder="search here"
                                className="w-full h-11 sm:h-12 rounded-full pl-6 pr-4 bg-white border border-gray-100 shadow-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-100 text-sm"
                            />
                        </div>
                        <button className="h-11 sm:h-12 w-full sm:w-auto px-8 rounded-full bg-[#005A8B] text-white font-medium hover:bg-[#024d7a] transition shadow-md text-sm">
                            Search
                        </button>
                    </div>

                    {/* Filters */}
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 w-full xl:w-auto justify-center xl:justify-end">
                        <button className="h-9 sm:h-10 px-4 sm:px-6 rounded-full bg-[#2CBF0F] text-white font-medium hover:bg-[#34a834] transition shadow-sm text-sm">
                            All
                        </button>

                        <div className="relative">
                            <button
                                onClick={() => setIsCourseOpen(!isCourseOpen)}
                                className="h-9 sm:h-10 px-4 sm:px-6 rounded-full bg-[#E0F4FF] text-[#035f94] font-medium flex items-center gap-2 hover:bg-[#d1e9fc] transition shadow-sm text-sm"
                            >
                                Course
                                <i className={`pi pi-chevron-down text-[10px] sm:text-xs transition-transform ${isCourseOpen ? 'rotate-180' : ''}`}></i>
                            </button>

                            {/* Dropdown Menu - Responsive width */}
                            {isCourseOpen && (
                                <div className="absolute top-12 left-1/2 -translate-x-1/2 sm:left-0 sm:translate-x-0 z-50 w-[280px] sm:w-[340px] bg-[#E0F4FF] border border-blue-100 rounded-2xl shadow-xl p-4 sm:p-5 animate-in fade-in zoom-in duration-200">
                                    <div className="grid grid-cols-2 gap-2 sm:gap-3">
                                        {[
                                            "MBBS",
                                            "BDS",
                                            "MS",
                                            "BNB",
                                            "MD",
                                            "AYUSH"
                                        ].map((course) => (
                                            <button
                                                key={course}
                                                onClick={() => {
                                                    setSelectedCourse(course);
                                                    setIsCourseOpen(false);
                                                }}
                                                className={`
                                                    h-10 sm:h-12 rounded-lg font-semibold text-xs sm:text-sm transition-all shadow-sm border
                                                    ${selectedCourse === course
                                                        ? "bg-gradient-to-r from-[#3facb1] to-[#0d6ea6] text-white border-transparent shadow-md"
                                                        : "bg-transparent border-[#0B6096] text-[#0B6096] hover:bg-white hover:border-[#3facb1]"
                                                    }
                                                `}
                                            >
                                                {course}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {["Year", "Months", "State"].map((filter) => (
                            <div key={filter} className="relative">
                                <button
                                    className="h-9 sm:h-10 px-4 sm:px-6 rounded-full bg-[#E0F4FF] text-[#035f94] font-medium flex items-center gap-2 hover:bg-[#d1e9fc] transition shadow-sm text-sm"
                                >
                                    {filter}
                                    <i className="pi pi-chevron-down text-[10px] sm:text-xs"></i>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Articles Grid */}
            <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pb-10 sm:pb-16">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-8">
                    {articles.map((article, index) => (
                        <Link
                            key={`${article.id}-${index}`}
                            href="?details=true"
                            target="_blank"
                            className="bg-white rounded-2xl p-3 sm:p-4 transition border border-gray-50 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start hover:shadow-md transition-shadow cursor-pointer block"
                        >
                            <div className="w-full sm:w-[180px] md:w-[200px] h-[180px] sm:h-[160px] flex-shrink-0 rounded-xl overflow-hidden relative block">
                                <img
                                    src={article.image}
                                    alt="Article Thumbnail"
                                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="flex-1 py-1 sm:pr-2">
                                <span className="text-[#38b6ff] text-[10px] sm:text-xs font-semibold block mb-1 sm:mb-2">
                                    {article.date}
                                </span>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight mb-2 sm:mb-3 hover:text-[#035f94] transition-colors line-clamp-2">
                                        {article.title}
                                    </h3>
                                </div>
                                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-1 line-clamp-2 sm:line-clamp-3">
                                    {article.description}
                                </p>
                                <div className="mt-2 text-gray-500 text-xs sm:text-sm">
                                    <span className="text-gray-400 hover:text-[#035f94] transition block">Read More...</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Pagination */}
            <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 pb-8 sm:pb-12">
                <div className="bg-white rounded-full py-1.5 sm:py-2 px-3 sm:px-4 inline-flex items-center justify-center gap-1 mx-auto relative left-1/2 -translate-x-1/2 shadow-sm border border-gray-100 overflow-x-auto max-w-[90vw] no-scrollbar">
                    <button className="whitespace-now600 px-2 h-8 sm:h-10 flex items-center justify-center text-gray-400 hover:text-gray-600 transition text-xs sm:text-sm">
                        <i className="pi pi-chevron-left text-[10px] sm:text-xs mr-1"></i> Prev
                    </button>

                    {[1, 2, 3, 4, 5].map((pageNum) => (
                        <button
                            key={pageNum}
                            className={`w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0 flex items-center justify-center rounded-full text-xs sm:text-sm font-medium transition-all ${pageNum === 2
                                ? "bg-[#2980b9] text-white shadow-md"
                                : "text-gray-500 hover:bg-gray-50"
                                }`}
                        >
                            {pageNum}
                        </button>
                    ))}

                    <button className="whitespace-nowrap px-2 h-8 sm:h-10 flex items-center justify-center text-gray-400 hover:text-gray-600 transition text-xs sm:text-sm">
                        Next <i className="pi pi-chevron-right text-[10px] sm:text-xs ml-1"></i>
                    </button>
                </div>
            </section>
        </div>
    );
}

export default function NeetUpdatePage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <NeetUpdateContent />
        </Suspense>
    );
}
