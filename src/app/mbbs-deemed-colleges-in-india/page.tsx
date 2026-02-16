"use client";
import Image from "next/image";
import { useState } from "react";

export default function MBBSDeemedCollegesPage() {
    return (
        <div className="min-h-screen">
            <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8">

                {/* LEFT CONTENT */}
                <div className="lg:col-span-2 pt-4 lg:pt-30 min-w-0">
                    <span className="text-xs sm:text-sm md:text-base text-emerald-500 font-semibold">
                        Educational
                    </span>

                    <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 mt-2 leading-tight break-words">
                        MBBS Deemed Colleges in India 2025–2026: Fees, Cutoff & Admission
                    </h1>

                    <p className="text-xs sm:text-sm text-gray-500 mt-1">
                        Danish Farzan • 19 Jan 2022
                    </p>

                    {/* IMAGE */}
                    <div className="mt-4 sm:mt-5 md:mt-6">
                        <Image
                            src="/images/deemed/bg.webp"
                            alt="MBBS Deemed Colleges in India"
                            width={1200}
                            height={600}
                            className="w-full h-[160px] sm:h-[220px] md:h-[280px] lg:h-[320px] xl:h-[350px] object-cover rounded-lg sm:rounded-xl min-h-0"
                            priority
                        />
                    </div>

                    {/* CONTENT */}
                    <div className="mt-4 sm:mt-5 md:mt-6 text-gray-700 leading-relaxed text-xs sm:text-sm md:text-base space-y-3 sm:space-y-4 md:space-y-5 min-w-0">
                        {/* Paragraphs with watermark background */}
                        <div className="relative rounded-lg overflow-hidden">
                            {/* Watermark background image */}
                            <div 
                                className="absolute inset-0 bg-no-repeat bg-center pointer-events-none opacity-30 sm:opacity-40 md:opacity-50"
                                style={{
                                    backgroundImage: "url('/images/deemed/Radical-Logo.webp')",
                                    backgroundSize: "clamp(120px, 18vw, 400px)",
                                    zIndex: 0
                                }}
                            ></div>
                            
                            {/* Content with relative positioning to appear above watermark */}
                            <div className="relative z-10 space-y-3 sm:space-y-4">
                                <p>
                                    Invite Your Friends And Unlock Exclusive Benefits—Earn More With
                                    Every Successful Referral. Invite Your Friends And Unlock
                                    Exclusive Benefits Invite Your Friends And Unlock Exclusive
                                    Benefits—Earn More With Every Successful Referral. Invite Your Friends And
                                    Unlock Exclusive Invite Your Friends And Unlock Exclusive Benefits—Earn More With Every Successful Referral. Invite
                                    Your Friends And Unlock Exclusive Benefits Invite Your Friends And Unlock Exclusive
                                </p>
                                <p>
                                    Invite Your Friends And Unlock Exclusive Benefits—Earn More With
                                    Every Successful Referral. Invite Your Friends And Unlock
                                    Exclusive Benefits Invite Your Friends And Unlock Exclusive
                                    Benefits—Earn More With Every Successful Referral. Invite Your Friends And
                                    Unlock Exclusive Invite Your Friends And Unlock Exclusive Benefits—Earn More With Every Successful Referral. Invite
                                    Your Friends And Unlock Exclusive Benefits Invite Your Friends And Unlock Exclusive
                                </p>
                            </div>
                        </div>

                        {/* WhatsApp Banner */}
                        <Image
                            src="/images/deemed/whatsapp-banner.webp"
                            alt="NEET 2025 Latest Updates"
                            width={800}
                            height={200}
                            className="w-full h-auto object-contain my-4 sm:my-5 md:my-6 max-w-full"
                        />

                        <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#287FC4] mt-5 sm:mt-6 md:mt-8 mb-3 sm:mb-4">
                            List of Private Medical colleges in Bihar is given in the table below
                        </h2>

                        {/* Private Medical Colleges Table */}
                        <div className="relative overflow-x-auto -mx-1 sm:mx-0 max-w-full rounded-lg border border-gray-200">
                            {/* Watermark background image */}
                            <div 
                                className="absolute inset-0 bg-no-repeat bg-center pointer-events-none opacity-20 sm:opacity-30 md:opacity-40 lg:opacity-50"
                                style={{
                                    backgroundImage: "url('/images/deemed/Radical-Logo.webp')",
                                    backgroundSize: "clamp(120px, 18vw, 400px)",
                                    zIndex: 0
                                }}
                            ></div>
                            
                            {/* Table with relative positioning to appear above watermark */}
                            <div className="relative z-10 min-w-[320px] sm:min-w-0">
                                <table className="w-full border-collapse border border-gray-300 text-[10px] sm:text-xs md:text-sm table-fixed sm:table-auto">
                                    <thead>
                                        <tr className="bg-[#E1F2FF]">
                                            <th className="border border-gray-300 px-1.5 sm:px-2 md:px-3 lg:px-4 py-1.5 sm:py-2 text-left">S.NO</th>
                                            <th className="border border-gray-300 px-1.5 sm:px-2 md:px-3 lg:px-4 py-1.5 sm:py-2 text-left">NAME of the College</th>
                                            <th className="border border-gray-300 px-1.5 sm:px-2 md:px-3 lg:px-4 py-1.5 sm:py-2 text-left">
                                                <div className="flex items-center gap-1">
                                                    <svg width="12" height="12" className="sm:w-4 sm:h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="black"/>
                                                    </svg>
                                                    <span className="hidden sm:inline">Location</span>
                                                    <span className="sm:hidden">Loc.</span>
                                                </div>
                                            </th>
                                            <th className="border border-gray-300 px-1.5 sm:px-2 md:px-3 lg:px-4 py-1.5 sm:py-2 text-left">
                                                <span className="hidden sm:inline">Detailed Overview</span>
                                                <span className="sm:hidden">Details</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white">
                                        {[
                                            { name: "Katihar Medical College", location: "Katihar", logo: "/images/deemed/logos/01.webp" },
                                            { name: "Mata Gujri Memorial Medical College", location: "Kishanganj", logo: "/images/deemed/logos/02.webp" },
                                            { name: "Narayan Medical College & Hospital", location: "Sasaram", logo: "/images/deemed/logos/03.webp" },
                                            { name: "Lord Buddha Koshi Medical College and Hospital", location: "Saharsa", logo: "/images/deemed/logos/04.webp" },
                                            { name: "Shree Narayan Medical Institute & Hospital", location: "Saharsa", logo: "/images/deemed/logos/05.webp" },
                                            { name: "Netaji Subhas Medical College & Hospital", location: "Bihta", logo: "/images/deemed/logos/06.webp" },
                                            { name: "Madhubani Medical College", location: "Madhubani", logo: "/images/deemed/logos/07.webp" },
                                            { name: "Radha Devi Jageshwari Memorial Medical College and Hospital", location: "Araria", logo: "/images/deemed/logos/08.webp" },
                                            { name: "Himalaya Medical College and Hospital", location: "Jolly Grant", logo: "/images/deemed/logos/09.webp" }
                                        ].map((college, index) => (
                                            <tr key={index} className="hover:bg-white-50">
                                                <td className="border border-gray-300 px-2 sm:px-3 lg:px-4 py-2">{index + 1}</td>
                                                <td className="border border-gray-300 px-1.5 sm:px-2 md:px-3 lg:px-4 py-1.5 sm:py-2">
                                                    <div className="flex items-center gap-1 sm:gap-2 min-w-0">
                                                        <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full overflow-hidden flex-shrink-0">
                                                            <Image
                                                                src={college.logo}
                                                                alt={`${college.name} logo`}
                                                                width={32}
                                                                height={32}
                                                                className="w-full h-full object-cover"
                                                            />
                                                        </div>
                                                        <span className="text-[10px] sm:text-xs md:text-sm leading-tight truncate">{college.name}</span>
                                                    </div>
                                                </td>
                                                <td className="border border-gray-300 px-1.5 sm:px-2 md:px-3 lg:px-4 py-1.5 sm:py-2 whitespace-nowrap">{college.location}</td>
                                                <td className="border border-gray-300 px-1.5 sm:px-2 md:px-3 lg:px-4 py-1.5 sm:py-2">
                                                    <button className="text-blue-600 hover:underline text-[10px] sm:text-xs md:text-sm whitespace-nowrap">
                                                        <span className="hidden sm:inline">Click Here</span>
                                                        <span className="sm:hidden">View</span>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#287FC4] mt-5 sm:mt-6 md:mt-8 mb-3 sm:mb-4">
                            List of Government Medical colleges in Bihar is given in the table below
                        </h2>
                        {/* Government Colleges Table */}
                        <div className="overflow-x-auto -mx-1 sm:mx-0 max-w-full rounded-lg border border-gray-200">
                            <table className="w-full border-collapse border border-gray-300 text-[10px] sm:text-xs md:text-sm min-w-[320px] sm:min-w-0 table-fixed sm:table-auto">
                                <thead>
                                    <tr className="bg-[#E1F2FF]">
                                        <th className="border border-gray-300 px-1.5 sm:px-2 md:px-3 lg:px-4 py-1.5 sm:py-2 text-left">S.NO</th>
                                        <th className="border border-gray-300 px-1.5 sm:px-2 md:px-3 lg:px-4 py-1.5 sm:py-2 text-left">NAME of the College</th>
                                        <th className="border border-gray-300 px-1.5 sm:px-2 md:px-3 lg:px-4 py-1.5 sm:py-2 text-left">
                                            <div className="flex items-center gap-1">
                                                <svg width="12" height="12" className="sm:w-4 sm:h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="black"/>
                                                </svg>
                                                <span className="hidden sm:inline">Location</span>
                                                <span className="sm:hidden">Loc.</span>
                                            </div>
                                        </th>
                                        <th className="border border-gray-300 px-1.5 sm:px-2 md:px-3 lg:px-4 py-1.5 sm:py-2 text-left">
                                            <span className="hidden sm:inline">Detailed Overview</span>
                                            <span className="sm:hidden">Details</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white">
                                    {[
                                        { name: "Katihar Medical College", location: "Katihar", logo: "/images/deemed/logos/01.webp" },
                                        { name: "Mata Gujri Memorial Medical College", location: "Kishanganj", logo: "/images/deemed/logos/02.webp" },
                                        { name: "Narayan Medical College & Hospital", location: "Sasaram", logo: "/images/deemed/logos/03.webp" },
                                        { name: "Lord Buddha Koshi Medical College and Hospital", location: "Saharsa", logo: "/images/deemed/logos/04.webp" },
                                        { name: "Shree Narayan Medical Institute & Hospital", location: "Saharsa", logo: "/images/deemed/logos/05.webp" },
                                        { name: "Netaji Subhas Medical College & Hospital", location: "Bihta", logo: "/images/deemed/logos/06.webp" },
                                        { name: "Madhubani Medical College", location: "Madhubani", logo: "/images/deemed/logos/07.webp" },
                                        { name: "Radha Devi Jageshwari Memorial Medical College and Hospital", location: "Araria", logo: "/images/deemed/logos/08.webp" },
                                        { name: "Himalaya Medical College and Hospital", location: "Jolly Grant", logo: "/images/deemed/logos/09.webp" }
                                    ].map((college, index) => (
                                        <tr key={index} className="hover:bg-gray-50">
                                            <td className="border border-gray-300 px-1.5 sm:px-2 md:px-3 lg:px-4 py-1.5 sm:py-2">{index + 1}</td>
                                            <td className="border border-gray-300 px-1.5 sm:px-2 md:px-3 lg:px-4 py-1.5 sm:py-2">
                                                <div className="flex items-center gap-1 sm:gap-2 min-w-0">
                                                    <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full overflow-hidden flex-shrink-0">
                                                        <Image
                                                            src={college.logo}
                                                            alt={`${college.name} logo`}
                                                            width={32}
                                                            height={32}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                    <span className="text-[10px] sm:text-xs md:text-sm leading-tight truncate">{college.name}</span>
                                                </div>
                                            </td>
                                            <td className="border border-gray-300 px-1.5 sm:px-2 md:px-3 lg:px-4 py-1.5 sm:py-2 whitespace-nowrap">{college.location}</td>
                                            <td className="border border-gray-300 px-1.5 sm:px-2 md:px-3 lg:px-4 py-1.5 sm:py-2">
                                                <button className="text-blue-600 hover:underline text-[10px] sm:text-xs md:text-sm whitespace-nowrap">
                                                    <span className="hidden sm:inline">Click Here</span>
                                                    <span className="sm:hidden">View</span>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* neet exam india */}
                        <div className="rounded-lg sm:rounded-xl mt-5 sm:mt-6 md:mt-8">
                            <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-3 sm:mb-4">
                                NEET Exam in India: Your Gateway to a Bright Medical Career
                            </h2>

                            <p className="text-gray-700 text-xs sm:text-sm md:text-base mb-4 sm:mb-5 md:mb-6 leading-relaxed">
                                Invite Your Friends And Unlock Exclusive Benefits—Earn More With Every Successful Referral. Invite Your Friends And
                                Unlock Exclusive Benefits Invite Your Friends And Unlock Exclusive Invite Your Friends And Unlock Exclusive Benefits—
                                Earn More With Every Successful Referral. Invite Your Friends And Unlock Exclusive Benefits—Earn More With Every Successful Referral. Invite
                                Your Friends And Unlock Exclusive Benefits Invite Your Friends And Unlock Exclusive
                            </p>

                            <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-800 mb-2 sm:mb-3">
                                Expected MBBS Cutoff for Bihar 2025
                            </h3>

                            <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4">
                                The cutoff scores vary for different categories and institutions. Below is an estimate based on previous years' trends:
                            </p>

                            <div className="overflow-x-auto -mx-1 sm:mx-0 max-w-full rounded-lg border border-gray-200">
                                <table className="w-full border-collapse border border-gray-300 bg-white text-[10px] sm:text-xs md:text-sm min-w-[240px]">
                                    <thead>
                                        <tr className="bg-[#E1F2FF]">
                                            <th className="border border-gray-300 px-1.5 sm:px-2 md:px-3 lg:px-4 py-1.5 sm:py-2 md:py-3 text-left font-semibold">Category</th>
                                            <th className="border border-gray-300 px-1.5 sm:px-2 md:px-3 lg:px-4 py-1.5 sm:py-2 md:py-3 text-center font-semibold">
                                                <span className="hidden sm:inline">Government Colleges Cutoff<br />(NEET Score)</span>
                                                <span className="sm:hidden">Govt. Cutoff</span>
                                            </th>
                                            <th className="border border-gray-300 px-1.5 sm:px-2 md:px-3 lg:px-4 py-1.5 sm:py-2 md:py-3 text-center font-semibold">
                                                <span className="hidden sm:inline">Private Colleges Cutoff<br />(NEET Score)</span>
                                                <span className="sm:hidden">Pvt. Cutoff</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="hover:bg-gray-50">
                                            <td className="border border-gray-300 px-1.5 sm:px-2 md:px-3 lg:px-4 py-1.5 sm:py-2 md:py-3 font-medium">General</td>
                                            <td className="border border-gray-300 px-1.5 sm:px-2 md:px-3 lg:px-4 py-1.5 sm:py-2 md:py-3 text-center">600+</td>
                                            <td className="border border-gray-300 px-1.5 sm:px-2 md:px-3 lg:px-4 py-1.5 sm:py-2 md:py-3 text-center">450+</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                            <td className="border border-gray-300 px-1.5 sm:px-2 md:px-3 lg:px-4 py-1.5 sm:py-2 md:py-3 font-medium">OBC</td>
                                            <td className="border border-gray-300 px-1.5 sm:px-2 md:px-3 lg:px-4 py-1.5 sm:py-2 md:py-3 text-center">580+</td>
                                            <td className="border border-gray-300 px-1.5 sm:px-2 md:px-3 lg:px-4 py-1.5 sm:py-2 md:py-3 text-center">430+</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                            <td className="border border-gray-300 px-1.5 sm:px-2 md:px-3 lg:px-4 py-1.5 sm:py-2 md:py-3 font-medium">SC</td>
                                            <td className="border border-gray-300 px-1.5 sm:px-2 md:px-3 lg:px-4 py-1.5 sm:py-2 md:py-3 text-center">480+</td>
                                            <td className="border border-gray-300 px-1.5 sm:px-2 md:px-3 lg:px-4 py-1.5 sm:py-2 md:py-3 text-center">350+</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                            <td className="border border-gray-300 px-1.5 sm:px-2 md:px-3 lg:px-4 py-1.5 sm:py-2 md:py-3 font-medium">ST</td>
                                            <td className="border border-gray-300 px-1.5 sm:px-2 md:px-3 lg:px-4 py-1.5 sm:py-2 md:py-3 text-center">450+</td>
                                            <td className="border border-gray-300 px-1.5 sm:px-2 md:px-3 lg:px-4 py-1.5 sm:py-2 md:py-3 text-center">320+</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                            <td className="border border-gray-300 px-1.5 sm:px-2 md:px-3 lg:px-4 py-1.5 sm:py-2 md:py-3 font-medium">EWS</td>
                                            <td className="border border-gray-300 px-1.5 sm:px-2 md:px-3 lg:px-4 py-1.5 sm:py-2 md:py-3 text-center">590+</td>
                                            <td className="border border-gray-300 px-1.5 sm:px-2 md:px-3 lg:px-4 py-1.5 sm:py-2 md:py-3 text-center">440+</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p className="text-xs sm:text-sm text-gray-600 mt-3 sm:mt-4">
                                These cutoff scores are approximate and may change based on NEET 2025 results and the number of applicants for MBBS
                                in Bihar 2025.
                            </p>

                            <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-800 mt-4 sm:mt-5 md:mt-6 mb-2 sm:mb-3">
                                NEET Exam in India: Your Gateway to a Bright Medical Career
                            </h3>

                            <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
                                Invite Your Friends And Unlock Exclusive Benefits—Earn More With Every Successful Referral. Invite Your Friends And
                                Unlock Exclusive Benefits Invite Your Friends And Unlock Exclusive Invite Your Friends And Unlock Exclusive Benefits—Earn More With Every Successful Referral. Invite
                                Your Friends And Unlock Exclusive Benefits Invite Your Friends And Unlock Exclusive
                            </p>
                        </div>

                        {/* FAQ's */}
                        <div className="mt-5 sm:mt-6 md:mt-8">
                            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 md:mb-6">FAQ'S</h2>
                            <FAQSection />
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDEBAR */}
                <div className="pt-4 lg:pt-30 space-y-4 sm:space-y-5 md:space-y-6 bg-[#E1F2FF] min-h-0 lg:min-h-screen min-w-0">

                    {/* SEARCH */}
                    <div className="bg-[#E1F2FF] px-4 md:px-5 lg:px-6 rounded-lg sm:rounded-xl m-0">
                        <div className="flex rounded-full overflow-hidden border border-gray-200 sm:border-0">
                            <input
                                type="text"
                                placeholder="search your blog here"
                                className="h-[50px] flex-1 min-w-0 px-3 sm:px-4 py-2.5 sm:py-2 outline-none text-xs sm:text-sm bg-white"
                            />
                            <button className="cursor-pointer bg-[#005A8B] text-white px-3 sm:px-4 md:px-6 py-2.5 sm:py-2 text-xs sm:text-sm font-medium touch-manipulation">
                                Search
                            </button>
                        </div>
                    </div>

                    {/* GET IN TOUCH */}
                    <div className="bg-[#E1F2FF] p-4 md:p-5 lg:p-6 rounded-lg sm:rounded-xl m-0">
                        <h3 className="text-xl md:text-2xl font-bold text-center text-gray-800 mb-6">
                            Get In Touch
                        </h3>

                        <div className="space-y-2 sm:space-y-3">
                            <input
                                type="text"
                                placeholder="Name"
                                className="bg-white w-full px-3 sm:px-4 py-2.5 sm:py-2 rounded-lg outline-none text-xs sm:text-sm min-h-[50px] touch-manipulation"
                            />
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="bg-white w-full px-3 sm:px-4 py-2.5 sm:py-2 rounded-lg outline-none text-xs sm:text-sm min-h-[50px] touch-manipulation"
                            />
                            <input
                                type="tel"
                                placeholder="Mobile Number"
                                className="bg-white w-full px-3 sm:px-4 py-2.5 sm:py-2 rounded-lg outline-none text-xs sm:text-sm min-h-[50px] touch-manipulation"
                            />
                            <input
                                type="text"
                                placeholder="Select Course"
                                className="bg-white w-full px-3 sm:px-4 py-2.5 sm:py-2 rounded-lg outline-none text-xs sm:text-sm min-h-[50px] touch-manipulation"
                            />

                            <button className="cursor-pointer w-full mt-2 bg-gradient-to-r from-[#63CDB4] to-[#0077BF] text-white py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base touch-manipulation min-h-[50px]">
                                Submit
                            </button>
                        </div>
                    </div>

                    {/* RELATED */}
                    <div className="bg-[#E1F2FF] p-4 md:p-5 lg:p-6 m-0">
                        <h3 className="text-base sm:text-lg font-bold text-[#287FC4] mb-3 sm:mb-4">
                            Related
                        </h3>

                        <div className="space-y-3 sm:space-y-4">
                            {[1, 2, 3].map((item) => (
                                <div key={item} className="border-b border-gray-600 pb-2 sm:pb-3 last:border-b-0">
                                    <h4 className="font-semibold text-gray-800 text-xs sm:text-sm md:text-base leading-tight">
                                        NEET Exam in India: Your Gateway to a Bright Medical
                                    </h4>
                                    <p className="text-xs text-gray-500 mt-1">
                                        Danish Farzan • 19 Jan 2022
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ADVERTISEMENT BANNERS */}
                    <div className="lg:space-y-6 space-y-4 px-4 md:px-5 lg:px-6">
                        {/* Kyrgyzstan Banner */}
                        <div className="rounded-lg sm:rounded-xl overflow-hidden max-w-full">
                            <Image
                                src="/images/deemed/banner-k.webp"
                                alt="Study MBBS in Kyrgyzstan"
                                width={400}
                                height={200}
                                className="w-full h-auto object-contain max-w-full"
                            />
                        </div>

                        {/* NEET PG Banner */}
                        <div className="rounded-lg sm:rounded-xl overflow-hidden max-w-full">
                            <Image
                                src="/images/deemed/banner-n.webp"
                                alt="NEET PG Admission"
                                width={400}
                                height={200}
                                className="w-full h-auto object-contain max-w-full"
                            />
                        </div>

                        {/* Study Abroad Banner */}
                        <div className="rounded-lg sm:rounded-xl overflow-hidden max-w-full">
                            <Image
                                src="/images/deemed/banner-mg.webp"
                                alt="Study Abroad"
                                width={400}
                                height={200}
                                className="w-full h-auto object-contain max-w-full"
                            />
                        </div>

                        {/* Study India Banner */}
                        <div className="rounded-lg sm:rounded-xl overflow-hidden max-w-full">
                            <Image
                                src="/images/deemed/banner-mp.webp"
                                alt="Study in India"
                                width={400}
                                height={200}
                                className="w-full h-auto object-contain max-w-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Connect With Us Section */}
            <div className="py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16 text-center px-3 sm:px-4 md:px-6">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#00CFB240] break-words">
                    CONNECT WITH US
                </h2>
            </div>
        </div>
    );
}

// FAQ Component with animations
function FAQSection() {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const faqs = [
        {
            question: "Can I Get Admission Without Clearing NEET UG?",
            answer: "No, NEET UG is mandatory for admission to MBBS courses in India. All medical colleges, whether government or private, require a valid NEET UG score for admission. This is as per the Medical Council of India (MCI) guidelines."
        },
        {
            question: "What is the minimum NEET score required for deemed universities?",
            answer: "The minimum NEET score varies by category and college. Generally, for deemed universities, General category students need around 450+ marks, while reserved categories may have lower cutoffs. The exact cutoff depends on the specific college and competition."
        },
        {
            question: "Are deemed medical colleges recognized by MCI/NMC?",
            answer: "Yes, all deemed medical colleges offering MBBS courses are recognized by the National Medical Commission (NMC), formerly known as MCI. However, it's important to verify the recognition status before taking admission."
        },
        {
            question: "What is the fee structure for deemed medical colleges?",
            answer: "The fee structure for deemed medical colleges varies significantly, ranging from ₹15 lakhs to ₹1 crore for the complete MBBS course. The fees depend on the college's reputation, location, and facilities provided."
        },
        {
            question: "Is there any management quota in deemed universities?",
            answer: "Yes, most deemed universities have a management quota (usually 15% of total seats) in addition to the merit-based seats. Management quota seats typically have higher fees and may have slightly relaxed admission criteria."
        }
    ];

    const toggleFAQ = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    return (
        <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
                <div 
                    key={index} 
                    className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
                >
                    <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full p-3 sm:p-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                    >
                        <h3 className="font-semibold text-gray-800 text-xs sm:text-sm pr-2 sm:pr-4 leading-tight">
                            {index + 1}. {faq.question}
                        </h3>
                        <div className={`transform transition-transform duration-300 flex-shrink-0 ${openFAQ === index ? 'rotate-180' : ''}`}>
                            <svg 
                                className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </button>
                    
                    <div 
                        className={`transition-all duration-300 ease-in-out ${
                            openFAQ === index 
                                ? 'max-h-96 opacity-100' 
                                : 'max-h-0 opacity-0'
                        } overflow-hidden`}
                    >
                        <div className="px-3 sm:px-4 pb-3 sm:pb-4 border-t border-gray-100">
                            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed pt-2 sm:pt-3 animate-fadeIn">
                                {faq.answer}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}