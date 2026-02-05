"use client";
import React, { useState } from "react";
import Image from "next/image";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";

export default function NeetDetails() {
    const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
    const [isCourseOpen, setIsCourseOpen] = useState(false);
    const [selectedFilterCourse, setSelectedFilterCourse] = useState("MBBS");
    const [brokenImages, setBrokenImages] = useState<{ [key: string]: boolean }>({});

    const courseOptions = [
        { label: "MBBS", value: "mbbs" },
        { label: "BDS", value: "bds" },
        { label: "BAMS", value: "bams" },
    ];

    const handleImageError = (id: string) => {
        setBrokenImages(prev => ({ ...prev, [id]: true }));
    };

    return (
        <div className="bg-[#f8f9fa] min-h-screen font-sans py-6 sm:py-10">
            {/* Top Search & Filter Bar */}
            <div className="max-w-7xl mx-auto px-4 py-4 sm:py-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-4">
                    {/* Search Bar - Responsive width and layout */}
                    <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
                        <div className="relative w-full sm:w-[320px]">
                            <input
                                type="text"
                                placeholder="search here"
                                className="w-full h-11 sm:h-12 rounded-full px-6 bg-white border-none shadow-sm text-gray-600 focus:outline-none text-sm"
                            />
                        </div>
                        <button className="h-11 sm:h-12 w-full sm:w-auto px-8 rounded-full bg-[#005f8f] hover:bg-[#004a70] text-white text-sm font-medium transition-all shadow-md active:scale-95">
                            Search
                        </button>
                    </div>

                    {/* Filters - Wrapping on small screens */}
                    <div className="flex flex-wrap items-center justify-center lg:justify-end gap-2 sm:gap-3 w-full lg:w-auto">
                        <button className="bg-[#32cd32] text-white h-10 sm:h-12 px-6 sm:px-8 rounded-full text-sm sm:text-base font-medium shadow-sm transition-all hover:bg-[#2ead2e] active:scale-95">
                            All
                        </button>
                        <div className="relative">
                            <button
                                onClick={() => setIsCourseOpen(!isCourseOpen)}
                                className="h-10 sm:h-12 px-6 sm:px-8 rounded-full bg-[#E0F4FF] text-[#035f94] font-medium flex items-center gap-2 hover:bg-[#d1e9fc] transition-all shadow-sm active:scale-95 text-sm sm:text-base"
                            >
                                Course
                                <i className={`pi pi-chevron-down text-xs sm:text-sm transition-transform ${isCourseOpen ? 'rotate-180' : ''}`}></i>
                            </button>

                            {/* Dropdown Menu - Centered on mobile */}
                            {isCourseOpen && (
                                <div className="absolute top-12 sm:top-16 left-1/2 -translate-x-1/2 sm:left-0 sm:translate-x-0 z-50 w-[280px] sm:w-[340px] bg-[#E0F4FF] border border-blue-100 rounded-2xl shadow-xl p-4 sm:p-5 animate-in fade-in zoom-in duration-200">
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
                                                    setSelectedFilterCourse(course);
                                                    setIsCourseOpen(false);
                                                }}
                                                className={`
                                                    h-10 sm:h-12 rounded-lg font-semibold text-xs sm:text-sm transition-all shadow-sm border
                                                    ${selectedFilterCourse === course
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
                        <button className="h-10 sm:h-12 px-6 sm:px-8 rounded-full bg-[#e6f2ff] text-[#005f8f] text-sm sm:text-base font-medium shadow-sm flex items-center gap-2 hover:bg-[#d9e9ff] transition-all active:scale-95">
                            Year <i className="pi pi-chevron-down text-xs sm:text-sm"></i>
                        </button>
                        <button className="h-10 sm:h-12 px-6 sm:px-8 rounded-full bg-[#e6f2ff] text-[#005f8f] text-sm sm:text-base font-medium shadow-sm flex items-center gap-2 hover:bg-[#d9e9ff] transition-all active:scale-95">
                            Months <i className="pi pi-chevron-down text-xs sm:text-sm"></i>
                        </button>
                        <button className="h-10 sm:h-12 px-6 sm:px-8 rounded-full bg-[#e6f2ff] text-[#005f8f] text-sm sm:text-base font-medium shadow-sm flex items-center gap-2 hover:bg-[#d9e9ff] transition-all active:scale-95">
                            State <i className="pi pi-chevron-down text-xs sm:text-sm"></i>
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8 pb-16">
                {/* Main Content (Left Column) */}
                <div className="lg:col-span-2">
                    {/* Breadcrumb / Category */}
                    <div className="mb-2">
                        <span className="text-[#00cfb2] font-semibold text-xs sm:text-sm tracking-wide">
                            Educational
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-[#1a2b4b] text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-3">
                        NEET Exam in India: Your Gateway to a Bright Medical Career
                    </h1>

                    {/* Meta Info */}
                    <div className="flex items-center text-[10px] sm:text-xs text-gray-500 mb-4 sm:mb-6">
                        <span className="mr-2">Danish Farzan</span>
                        <span className="mx-2">•</span>
                        <span>19 Jan 2022</span>
                    </div>

                    {/* Featured Image */}
                    <div className="w-full h-[250px] sm:h-[350px] md:h-[400px] rounded-2xl overflow-hidden mb-6 sm:mb-8 relative shadow-sm">
                        <Image
                            src="/images/neet-update/details.webp"
                            alt="University Building"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Content Text */}
                    <div className="text-gray-600 text-xs sm:text-sm leading-6 sm:leading-7 space-y-4 sm:space-y-6">
                        <p>
                            Invite Your Friends And Unlock Exclusive Benefits—Earn More With
                            Every Successful Referral. Invite Your Friends And Unlock Exclusive
                            Benefits Invite Your Friends And Unlock Exclusive Invite Your
                            Friends And Unlock Exclusive Benefits—Earn More With Every
                            Successful Referral. Invite Your Friends And Unlock Exclusive
                            Benefits Invite Your Friends And Unlock Exclusive Invite Your
                            Friends And Unlock Exclusive Benefits—Earn More With Every
                            Successful Referral. Invite Your Friends And Unlock Exclusive
                            Benefits Invite Your Friends And Unlock Exclusive
                        </p>

                        <p>
                            Invite Your Friends And Unlock Exclusive Benefits—Earn More With
                            Every Successful Referral. Invite Your Friends And Unlock Exclusive
                            Benefits Invite Your Friends And Unlock Exclusive Invite Your
                            Friends And Unlock Exclusive Benefits—Earn More With Every
                            Successful Referral. Invite Your Friends And Unlock Exclusive
                            Benefits Invite Your Friends And Unlock Exclusive Invite Your
                            Friends And Unlock Exclusive Benefits—Earn More With Every
                            Successful Referral. Invite Your Friends And Unlock Exclusive
                            Benefits Invite Your Friends And Unlock Exclusive
                        </p>

                        <h2 className="text-[#1a2b4b] text-lg sm:text-xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4">
                            NEET Exam in India: Your Gateway to a Bright Medical Career
                        </h2>

                        <p>
                            Invite Your Friends And Unlock Exclusive Benefits—Earn More With
                            Every Successful Referral. Invite Your Friends And Unlock Exclusive
                            Benefits Invite Your Friends And Unlock Exclusive Invite Your
                            Friends And Unlock Exclusive Benefits—Earn More With Every
                            Successful Referral. Invite Your Friends And Unlock Exclusive
                            Benefits Invite Your Friends And Unlock Exclusive Invite Your
                            Friends And Unlock Exclusive Benefits—Earn More With Every
                            Successful Referral. Invite Your Friends And Unlock Exclusive
                            Benefits Invite Your Friends And Unlock Exclusive
                        </p>

                        <p>
                            Invite Your Friends And Unlock Exclusive Benefits—Earn More With
                            Every Successful Referral. Invite Your Friends And Unlock Exclusive
                            Benefits Invite Your Friends And Unlock Exclusive Invite Your
                            Friends And Unlock Exclusive Benefits—Earn More With Every
                            Successful Referral. Invite Your Friends And Unlock Exclusive
                            Benefits Invite Your Friends And Unlock Exclusive Invite Your
                            Friends And Unlock Exclusive Benefits—Earn More With Every
                            Successful Referral. Invite Your Friends And Unlock Exclusive
                            Benefits Invite Your Friends And Unlock Exclusive
                        </p>
                    </div>
                </div>

                {/* Sidebar (Right Column) */}
                <div className="lg:col-span-1 space-y-8 sm:space-y-10 bg-[#E1F2FF] rounded-2xl py-8 sm:py-0">
                    {/* Get In Touch Form */}
                    <div className="px-4 sm:p-6 rounded-2xl">
                        <h3 className="text-[#1a2b4b] text-xl font-bold mb-6">
                            Get In Touch
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <InputText
                                    placeholder="name"
                                    className="w-full p-3 bg-gray-50 border-none rounded-lg text-sm focus:ring-1 focus:ring-blue-200"
                                />
                            </div>
                            <div>
                                <InputText
                                    placeholder="email address"
                                    className="w-full p-3 bg-gray-50 border-none rounded-lg text-sm focus:ring-1 focus:ring-blue-200"
                                />
                            </div>
                            <div>
                                <InputText
                                    placeholder="mobile no"
                                    className="w-full p-3 bg-gray-50 border-none rounded-lg text-sm focus:ring-1 focus:ring-blue-200"
                                />
                            </div>
                            <div>
                                <Dropdown
                                    value={selectedCourse}
                                    onChange={(e) => setSelectedCourse(e.value)}
                                    options={courseOptions}
                                    optionLabel="label"
                                    placeholder="select course"
                                    className="w-full bg-gray-50 border-none rounded-lg text-sm flex items-center"
                                    pt={{
                                        root: { className: "p-0" },
                                        input: { className: "p-3 text-sm bg-transparent" },
                                        trigger: { className: "w-12" },
                                    }}
                                />
                            </div>
                            <button className="w-full bg-gradient-to-r from-[#63CDB4] to-[#0077BF] hover:opacity-90 text-white font-medium py-3 rounded-lg transition-all duration-300 shadow-md mt-2 transform hover:-translate-y-0.5">
                                Submit
                            </button>
                        </div>
                    </div>

                    {/* Related Articles */}
                    <div className="px-5 sm:px-6">
                        <h3 className="text-[#38b6ff] text-xl sm:text-2xl font-bold mb-6">Related</h3>
                        <div className="space-y-6 sm:space-y-8 text-sm">
                            {[1, 2, 3].map((_, idx) => (
                                <div key={idx} className="space-y-1 group cursor-pointer">
                                    <h4 className="text-[#1a2b4b] font-bold text-base sm:text-lg leading-tight group-hover:text-[#38b6ff] transition-colors">
                                        NEET Exam in India: Your Gateway to a Bright Medical
                                    </h4>
                                    <div className="flex items-center text-gray-400 text-[10px] sm:text-xs">
                                        <span>Danish Farzan</span>
                                        <span className="mx-2">•</span>
                                        <span>19 Jan 2022</span>
                                    </div>
                                    <div className="h-px bg-gray-200/60 w-full mt-4"></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Ads / Banners */}
                    <div className="space-y-6 px-5 sm:px-6 pb-8 sm:pb-12">
                        <div className="rounded-2xl overflow-hidden shadow-lg h-[180px] sm:h-[200px] relative group cursor-pointer">
                            <Image
                                src="/images/neet-update/ad-1.webp"
                                alt="Study MBBS in Kyrgyzstan"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors"></div>
                        </div>

                        <div className="rounded-2xl overflow-hidden shadow-lg h-[180px] sm:h-[200px] relative group cursor-pointer">
                            <Image
                                src="/images/neet-update/ad.webp"
                                alt="NEET PG Admission Open"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

