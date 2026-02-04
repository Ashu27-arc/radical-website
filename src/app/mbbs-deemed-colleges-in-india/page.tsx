"use client";
import Image from "next/image";
import { useState } from "react";

export default function MBBSDeemedCollegesPage() {
    return (
        <div className="py-4 sm:py-6 lg:py-10">
            <div className="max-w-7xl mx-auto px-2 sm:px-4 grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">

                {/* LEFT CONTENT */}
                <div className="lg:col-span-2 bg-gray-100 rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6">
                    <span className="text-xs sm:text-sm text-emerald-500 font-semibold">
                        Educational
                    </span>

                    <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mt-2 leading-tight">
                        MBBS Deemed Colleges in India 2025–2026: Fees, Cutoff & Admission
                    </h1>

                    <p className="text-xs sm:text-sm text-gray-500 mt-1">
                        Danish Farzan • 19 Jan 2022
                    </p>

                    {/* IMAGE */}
                    <div className="mt-4 sm:mt-6">
                        <Image
                            src="/images/deemed/bg.webp"
                            alt="MBBS Deemed Colleges in India"
                            width={1200}
                            height={600}
                            className="w-full h-[180px] sm:h-[220px] md:h-[280px] lg:h-[350px] object-cover rounded-lg sm:rounded-xl"
                            priority
                        />
                    </div>

                    {/* CONTENT */}
                    <div className="mt-4 sm:mt-6 text-gray-700 leading-relaxed text-xs sm:text-sm space-y-3 sm:space-y-4">
                        {/* Paragraphs with watermark background */}
                        <div className="relative p-3 sm:p-4 lg:p-6 rounded-lg overflow-hidden">
                            {/* Watermark background image */}
                            <div 
                                className="absolute inset-0 bg-no-repeat bg-center pointer-events-none opacity-30 sm:opacity-50"
                                style={{
                                    backgroundImage: "url('/images/deemed/Radical-Logo.webp')",
                                    backgroundSize: "200px sm:300px lg:400px",
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
                            className="w-full object-contain my-4 sm:my-6"
                        />

                        <h2 className="text-base sm:text-lg lg:text-xl font-bold text-blue-600 mt-6 sm:mt-8 mb-3 sm:mb-4">
                            List of Private Medical colleges in Bihar is given in the table below
                        </h2>

                        {/* Private Medical Colleges Table */}
                        <div className="relative overflow-x-auto">
                            {/* Watermark background image */}
                            <div 
                                className="absolute inset-0 bg-no-repeat bg-center pointer-events-none opacity-20 sm:opacity-30 lg:opacity-50"
                                style={{
                                    backgroundImage: "url('/images/deemed/Radical-Logo.webp')",
                                    backgroundSize: "200px sm:300px lg:400px",
                                    zIndex: 0
                                }}
                            ></div>
                            
                            {/* Table with relative positioning to appear above watermark */}
                            <div className="relative z-10">
                                <table className="w-full border-collapse border border-gray-300 text-xs sm:text-sm">
                                    <thead>
                                        <tr className="bg-[#E1F2FF]">
                                            <th className="border border-gray-300 px-2 sm:px-3 lg:px-4 py-2 text-left">S.NO</th>
                                            <th className="border border-gray-300 px-2 sm:px-3 lg:px-4 py-2 text-left">NAME of the College</th>
                                            <th className="border border-gray-300 px-2 sm:px-3 lg:px-4 py-2 text-left">
                                                <div className="flex items-center gap-1">
                                                    <svg width="12" height="12" className="sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="black"/>
                                                    </svg>
                                                    <span className="hidden sm:inline">Location</span>
                                                    <span className="sm:hidden">Loc.</span>
                                                </div>
                                            </th>
                                            <th className="border border-gray-300 px-2 sm:px-3 lg:px-4 py-2 text-left">
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
                                                <td className="border border-gray-300 px-2 sm:px-3 lg:px-4 py-2">
                                                    <div className="flex items-center gap-1 sm:gap-2">
                                                        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full overflow-hidden flex items-center justify-center flex-shrink-0">
                                                            <Image
                                                                src={college.logo}
                                                                alt={`${college.name} logo`}
                                                                width={32}
                                                                height={32}
                                                                className="w-full h-full object-cover"
                                                            />
                                                        </div>
                                                        <span className="text-xs sm:text-sm leading-tight">{college.name}</span>
                                                    </div>
                                                </td>
                                                <td className="border border-gray-300 px-2 sm:px-3 lg:px-4 py-2">{college.location}</td>
                                                <td className="border border-gray-300 px-2 sm:px-3 lg:px-4 py-2">
                                                    <button className="text-blue-600 hover:underline text-xs sm:text-sm">
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
                        <h2 className="text-base sm:text-lg lg:text-xl font-bold text-blue-600 mt-6 sm:mt-8 mb-3 sm:mb-4">
                            List of Government Medical colleges in Bihar is given in the table below
                        </h2>
                        {/* Government Colleges Table */}
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse border border-gray-300 text-xs sm:text-sm">
                                <thead>
                                    <tr className="bg-[#E1F2FF]">
                                        <th className="border border-gray-300 px-2 sm:px-3 lg:px-4 py-2 text-left">S.NO</th>
                                        <th className="border border-gray-300 px-2 sm:px-3 lg:px-4 py-2 text-left">NAME of the College</th>
                                        <th className="border border-gray-300 px-2 sm:px-3 lg:px-4 py-2 text-left">
                                            <div className="flex items-center gap-1">
                                                <svg width="12" height="12" className="sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="black"/>
                                                </svg>
                                                <span className="hidden sm:inline">Location</span>
                                                <span className="sm:hidden">Loc.</span>
                                            </div>
                                        </th>
                                        <th className="border border-gray-300 px-2 sm:px-3 lg:px-4 py-2 text-left">
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
                                            <td className="border border-gray-300 px-2 sm:px-3 lg:px-4 py-2">
                                                <div className="flex items-center gap-1 sm:gap-2">
                                                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full overflow-hidden flex items-center justify-center flex-shrink-0">
                                                        <Image
                                                            src={college.logo}
                                                            alt={`${college.name} logo`}
                                                            width={32}
                                                            height={32}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                    <span className="text-xs sm:text-sm leading-tight">{college.name}</span>
                                                </div>
                                            </td>
                                            <td className="border border-gray-300 px-2 sm:px-3 lg:px-4 py-2">{college.location}</td>
                                            <td className="border border-gray-300 px-2 sm:px-3 lg:px-4 py-2">
                                                <button className="text-blue-600 hover:underline text-xs sm:text-sm">
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
                        <div className="p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl mt-6 sm:mt-8">
                            <h2 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-3 sm:mb-4">
                                NEET Exam in India: Your Gateway to a Bright Medical Career
                            </h2>

                            <p className="text-gray-700 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">
                                Invite Your Friends And Unlock Exclusive Benefits—Earn More With Every Successful Referral. Invite Your Friends And
                                Unlock Exclusive Benefits Invite Your Friends And Unlock Exclusive Invite Your Friends And Unlock Exclusive Benefits—
                                Earn More With Every Successful Referral. Invite Your Friends And Unlock Exclusive Benefits—Earn More With Every Successful Referral. Invite
                                Your Friends And Unlock Exclusive Benefits Invite Your Friends And Unlock Exclusive
                            </p>

                            <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-800 mb-2 sm:mb-3">
                                Expected MBBS Cutoff for Bihar 2025
                            </h3>

                            <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                                The cutoff scores vary for different categories and institutions. Below is an estimate based on previous years' trends:
                            </p>

                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse border border-gray-300 bg-white text-xs sm:text-sm">
                                    <thead>
                                        <tr className="bg-[#E1F2FF]">
                                            <th className="border border-gray-300 px-2 sm:px-3 lg:px-4 py-2 sm:py-3 text-left font-semibold">Category</th>
                                            <th className="border border-gray-300 px-2 sm:px-3 lg:px-4 py-2 sm:py-3 text-center font-semibold">
                                                <span className="hidden sm:inline">Government Colleges Cutoff<br />(NEET Score)</span>
                                                <span className="sm:hidden">Govt. Cutoff</span>
                                            </th>
                                            <th className="border border-gray-300 px-2 sm:px-3 lg:px-4 py-2 sm:py-3 text-center font-semibold">
                                                <span className="hidden sm:inline">Private Colleges Cutoff<br />(NEET Score)</span>
                                                <span className="sm:hidden">Pvt. Cutoff</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="hover:bg-white-50">
                                            <td className="border border-gray-300 px-2 sm:px-3 lg:px-4 py-2 sm:py-3 font-medium">General</td>
                                            <td className="border border-gray-300 px-2 sm:px-3 lg:px-4 py-2 sm:py-3 text-center">600+</td>
                                            <td className="border border-gray-300 px-2 sm:px-3 lg:px-4 py-2 sm:py-3 text-center">450+</td>
                                        </tr>
                                        <tr className="hover:bg-white-50">
                                            <td className="border border-gray-300 px-2 sm:px-3 lg:px-4 py-2 sm:py-3 font-medium">OBC</td>
                                            <td className="border border-gray-300 px-2 sm:px-3 lg:px-4 py-2 sm:py-3 text-center">580+</td>
                                            <td className="border border-gray-300 px-2 sm:px-3 lg:px-4 py-2 sm:py-3 text-center">430+</td>
                                        </tr>
                                        <tr className="hover:bg-white-50">
                                            <td className="border border-gray-300 px-2 sm:px-3 lg:px-4 py-2 sm:py-3 font-medium">SC</td>
                                            <td className="border border-gray-300 px-2 sm:px-3 lg:px-4 py-2 sm:py-3 text-center">480+</td>
                                            <td className="border border-gray-300 px-2 sm:px-3 lg:px-4 py-2 sm:py-3 text-center">350+</td>
                                        </tr>
                                        <tr className="hover:bg-white-50">
                                            <td className="border border-gray-300 px-2 sm:px-3 lg:px-4 py-2 sm:py-3 font-medium">ST</td>
                                            <td className="border border-gray-300 px-2 sm:px-3 lg:px-4 py-2 sm:py-3 text-center">450+</td>
                                            <td className="border border-gray-300 px-2 sm:px-3 lg:px-4 py-2 sm:py-3 text-center">320+</td>
                                        </tr>
                                        <tr className="hover:bg-white-50">
                                            <td className="border border-gray-300 px-2 sm:px-3 lg:px-4 py-2 sm:py-3 font-medium">EWS</td>
                                            <td className="border border-gray-300 px-2 sm:px-3 lg:px-4 py-2 sm:py-3 text-center">590+</td>
                                            <td className="border border-gray-300 px-2 sm:px-3 lg:px-4 py-2 sm:py-3 text-center">440+</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p className="text-xs text-gray-600 mt-3 sm:mt-4">
                                These cutoff scores are approximate and may change based on NEET 2025 results and the number of applicants for MBBS
                                in Bihar 2025.
                            </p>

                            <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-800 mt-4 sm:mt-6 mb-2 sm:mb-3">
                                NEET Exam in India: Your Gateway to a Bright Medical Career
                            </h3>

                            <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                                Invite Your Friends And Unlock Exclusive Benefits—Earn More With Every Successful Referral. Invite Your Friends And
                                Unlock Exclusive Benefits Invite Your Friends And Unlock Exclusive Invite Your Friends And Unlock Exclusive Benefits—Earn More With Every Successful Referral. Invite
                                Your Friends And Unlock Exclusive Benefits Invite Your Friends And Unlock Exclusive
                            </p>
                        </div>

                        {/* FAQ's */}
                        <div className="mt-6 sm:mt-8">
                            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">FAQ'S</h2>
                            <FAQSection />
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDEBAR */}
                <div className="space-y-4 sm:space-y-6 bg-[#E1F2FF] min-h-screen">

                    {/* SEARCH */}
                    <div className="bg-[#E1F2FF] p-3 sm:p-4 rounded-lg sm:rounded-xl mt-6 sm:mt-12">
                        <div className="flex rounded-full overflow-hidden">
                            <input
                                type="text"
                                placeholder="search your blog here"
                                className="flex-1 px-3 sm:px-4 py-2 outline-none text-xs sm:text-sm bg-white"
                            />
                            <button className="bg-blue-700 text-white px-4 sm:px-6 py-2 text-xs sm:text-sm font-medium">
                                Search
                            </button>
                        </div>
                    </div>

                    {/* GET IN TOUCH */}
                    <div className="bg-[#E1F2FF] p-4 sm:p-6 rounded-lg sm:rounded-xl">
                        <h3 className="text-lg sm:text-xl font-bold text-center text-gray-800 mb-3 sm:mb-4">
                            Get In Touch
                        </h3>

                        <div className="space-y-2 sm:space-y-3">
                            <input
                                type="text"
                                placeholder="name"
                                className="bg-white w-full px-3 sm:px-4 py-2 rounded-lg outline-none text-xs sm:text-sm"
                            />
                            <input
                                type="email"
                                placeholder="email address"
                                className="bg-white w-full px-3 sm:px-4 py-2 rounded-lg outline-none text-xs sm:text-sm"
                            />
                            <input
                                type="tel"
                                placeholder="mobile no"
                                className="bg-white w-full px-3 sm:px-4 py-2 rounded-lg outline-none text-xs sm:text-sm"
                            />
                            <input
                                type="text"
                                placeholder="select course"
                                className="bg-white w-full px-3 sm:px-4 py-2 rounded-lg outline-none text-xs sm:text-sm"
                            />

                            <button className="w-full mt-2 bg-gradient-to-r from-[#63CDB4] to-[#0077BF] text-white py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base">
                                Submit
                            </button>
                        </div>
                    </div>

                    {/* RELATED */}
                    <div className="bg-[#E1F2FF] p-4 sm:p-6">
                        <h3 className="text-base sm:text-lg font-bold text-blue-600 mb-3 sm:mb-4">
                            Related
                        </h3>

                        <div className="space-y-3 sm:space-y-4">
                            {[1, 2, 3].map((item) => (
                                <div key={item} className="border-b pb-2 sm:pb-3 last:border-b-0">
                                    <h4 className="font-semibold text-gray-800 text-xs sm:text-sm leading-tight">
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
                    <div className="space-y-3 sm:space-y-4 px-2 sm:px-4">
                        {/* Kyrgyzstan Banner */}
                        <div className="rounded-lg sm:rounded-xl overflow-hidden">
                            <Image
                                src="/images/deemed/banner-k.webp"
                                alt="Study MBBS in Kyrgyzstan"
                                width={400}
                                height={200}
                                className="w-full h-auto object-contain"
                            />
                        </div>

                        {/* NEET PG Banner */}
                        <div className="rounded-lg sm:rounded-xl overflow-hidden">
                            <Image
                                src="/images/deemed/banner-n.webp"
                                alt="NEET PG Admission"
                                width={400}
                                height={200}
                                className="w-full h-auto object-contain"
                            />
                        </div>

                        {/* Study Abroad Banner */}
                        <div className="rounded-lg sm:rounded-xl overflow-hidden">
                            <Image
                                src="/images/deemed/banner-mg.webp"
                                alt="Study Abroad"
                                width={400}
                                height={200}
                                className="w-full h-auto object-contain"
                            />
                        </div>

                        {/* Study India Banner */}
                        <div className="rounded-lg sm:rounded-xl overflow-hidden">
                            <Image
                                src="/images/deemed/banner-mp.webp"
                                alt="Study in India"
                                width={400}
                                height={200}
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Connect With Us Section */}
            <div className="mt-12 sm:mt-16 text-center px-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-[#A8E6CF] opacity-80">
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
                            <p className="text-gray-600 text-xs leading-relaxed pt-2 sm:pt-3 animate-fadeIn">
                                {faq.answer}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}