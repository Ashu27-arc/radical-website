"use client";
import Image from "next/image";
import { useState } from "react";

export default function MBBSDeemedCollegesPage() {
    return (
        <div className="py-10">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* LEFT CONTENT */}
                <div className="lg:col-span-2 bg-gray-100 rounded-xl p-6">
                    <span className="text-sm text-emerald-500 font-semibold">
                        Educational
                    </span>

                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
                        MBBS Deemed Colleges in India 2025–2026: Fees, Cutoff & Admission
                    </h1>

                    <p className="text-sm text-gray-500 mt-1">
                        Danish Farzan • 19 Jan 2022
                    </p>

                    {/* IMAGE */}
                    <div className="mt-6">
                        <Image
                            src="/images/deemed/bg.webp"
                            alt="MBBS Deemed Colleges in India"
                            width={1200}
                            height={600}
                            className="w-full h-[350px] object-cover rounded-xl"
                            priority
                        />
                    </div>

                    {/* CONTENT */}
                    <div className="mt-6 text-gray-700 leading-relaxed text-sm space-y-4">
                        {/* Paragraphs with watermark background */}
                        <div className="relative p-6 rounded-lg overflow-hidden">
                            {/* Watermark background image */}
                            <div 
                                className="absolute inset-0 bg-no-repeat bg-center pointer-events-none"
                                style={{
                                    backgroundImage: "url('/images/deemed/Radical-Logo.webp')",
                                    backgroundSize: "400px",
                                    zIndex: 0
                                }}
                            ></div>
                            
                            {/* Content with relative positioning to appear above watermark */}
                            <div className="relative z-10 space-y-4">
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
                            className="w-full object-contain my-6"
                        />

                        <h2 className="text-xl font-bold text-blue-600 mt-8 mb-4">
                            List of Private Medical colleges in Bihar is given in the table below
                        </h2>

                        {/* Private Medical Colleges Table */}
                        <div className="relative overflow-x-auto">
                            {/* Watermark background image */}
                            <div 
                                className="absolute inset-0 bg-no-repeat bg-center pointer-events-none opacity-1"
                                style={{
                                    backgroundImage: "url('/images/deemed/Radical-Logo.webp')",
                                    backgroundSize: "400px",
                                    zIndex: 0
                                }}
                            ></div>
                            
                            {/* Table with relative positioning to appear above watermark */}
                            <div className="relative z-10">
                                <table className="w-full border-collapse border border-gray-300">
                                    <thead>
                                        <tr className="bg-[#E1F2FF]">
                                            <th className="border border-gray-300 px-4 py-2 text-left">S.NO</th>
                                            <th className="border border-gray-300 px-4 py-2 text-left">NAME of the College</th>
                                            <th className="border border-gray-300 px-4 py-2 text-left">
                                                <div className="flex items-center gap-1">
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="black"/>
                                                    </svg>
                                                    Location
                                                </div>
                                            </th>
                                            <th className="border border-gray-300 px-4 py-2 text-left">Detailed Overview</th>
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
                                                <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                                                <td className="border border-gray-300 px-4 py-2">
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center">
                                                            <Image
                                                                src={college.logo}
                                                                alt={`${college.name} logo`}
                                                                width={32}
                                                                height={32}
                                                                className="w-full h-full object-cover"
                                                            />
                                                        </div>
                                                        {college.name}
                                                    </div>
                                                </td>
                                                <td className="border border-gray-300 px-4 py-2">{college.location}</td>
                                                <td className="border border-gray-300 px-4 py-2">
                                                    <button className="text-blue-600 hover:underline">Click Here</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <h2 className="text-xl font-bold text-blue-600 mt-8 mb-4">
                            List of Government Medical colleges in Bihar is given in the table below
                        </h2>
                        {/* Government Colleges Table */}
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse border border-gray-300">
                                <thead>
                                    <tr className="bg-[#E1F2FF]">
                                        <th className="border border-gray-300 px-4 py-2 text-left">S.NO</th>
                                        <th className="border border-gray-300 px-4 py-2 text-left">NAME of the College</th>
                                        <th className="border border-gray-300 px-4 py-2 text-left">
                                            <div className="flex items-center gap-1">
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="black"/>
                                                </svg>
                                                Location
                                            </div>
                                        </th>
                                        <th className="border border-gray-300 px-4 py-2 text-left">Detailed Overview</th>
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
                                            <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                                            <td className="border border-gray-300 px-4 py-2">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center">
                                                        <Image
                                                            src={college.logo}
                                                            alt={`${college.name} logo`}
                                                            width={32}
                                                            height={32}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                    {college.name}
                                                </div>
                                            </td>
                                            <td className="border border-gray-300 px-4 py-2">{college.location}</td>
                                            <td className="border border-gray-300 px-4 py-2">
                                                <button className="text-blue-600 hover:underline">Click Here</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* neet exam india */}
                        <div className="p-6 rounded-xl mt-8">
                            <h2 className="text-xl font-bold text-gray-800 mb-4">
                                NEET Exam in India: Your Gateway to a Bright Medical Career
                            </h2>

                            <p className="text-gray-700 text-sm mb-6 leading-relaxed">
                                Invite Your Friends And Unlock Exclusive Benefits—Earn More With Every Successful Referral. Invite Your Friends And
                                Unlock Exclusive Benefits Invite Your Friends And Unlock Exclusive Invite Your Friends And Unlock Exclusive Benefits—
                                Earn More With Every Successful Referral. Invite Your Friends And Unlock Exclusive Benefits—Earn More With Every Successful Referral. Invite
                                Your Friends And Unlock Exclusive Benefits Invite Your Friends And Unlock Exclusive
                            </p>

                            <h3 className="text-lg font-bold text-gray-800 mb-3">
                                Expected MBBS Cutoff for Bihar 2025
                            </h3>

                            <p className="text-sm text-gray-600 mb-4">
                                The cutoff scores vary for different categories and institutions. Below is an estimate based on previous years' trends:
                            </p>

                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse border border-gray-300 bg-white">
                                    <thead>
                                        <tr className="bg-[#E1F2FF]">
                                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Category</th>
                                            <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Government Colleges Cutoff<br />(NEET Score)</th>
                                            <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Private Colleges Cutoff<br />(NEET Score)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="hover:bg-white-50">
                                            <td className="border border-gray-300 px-4 py-3 font-medium">General</td>
                                            <td className="border border-gray-300 px-4 py-3 text-center">600+</td>
                                            <td className="border border-gray-300 px-4 py-3 text-center">450+</td>
                                        </tr>
                                        <tr className="hover:bg-white-50">
                                            <td className="border border-gray-300 px-4 py-3 font-medium">OBC</td>
                                            <td className="border border-gray-300 px-4 py-3 text-center">580+</td>
                                            <td className="border border-gray-300 px-4 py-3 text-center">430+</td>
                                        </tr>
                                        <tr className="hover:bg-white-50">
                                            <td className="border border-gray-300 px-4 py-3 font-medium">SC</td>
                                            <td className="border border-gray-300 px-4 py-3 text-center">480+</td>
                                            <td className="border border-gray-300 px-4 py-3 text-center">350+</td>
                                        </tr>
                                        <tr className="hover:bg-white-50">
                                            <td className="border border-gray-300 px-4 py-3 font-medium">ST</td>
                                            <td className="border border-gray-300 px-4 py-3 text-center">450+</td>
                                            <td className="border border-gray-300 px-4 py-3 text-center">320+</td>
                                        </tr>
                                        <tr className="hover:bg-white-50">
                                            <td className="border border-gray-300 px-4 py-3 font-medium">EWS</td>
                                            <td className="border border-gray-300 px-4 py-3 text-center">590+</td>
                                            <td className="border border-gray-300 px-4 py-3 text-center">440+</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p className="text-xs text-gray-600 mt-4">
                                These cutoff scores are approximate and may change based on NEET 2025 results and the number of applicants for MBBS
                                in Bihar 2025.
                            </p>

                            <h3 className="text-lg font-bold text-gray-800 mt-6 mb-3">
                                NEET Exam in India: Your Gateway to a Bright Medical Career
                            </h3>

                            <p className="text-gray-700 text-sm leading-relaxed">
                                Invite Your Friends And Unlock Exclusive Benefits—Earn More With Every Successful Referral. Invite Your Friends And
                                Unlock Exclusive Benefits Invite Your Friends And Unlock Exclusive Invite Your Friends And Unlock Exclusive Benefits—Earn More With Every Successful Referral. Invite
                                Your Friends And Unlock Exclusive Benefits Invite Your Friends And Unlock Exclusive
                            </p>
                        </div>

                        {/* FAQ's */}
                        <div className="mt-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">FAQ'S</h2>
                            <FAQSection />
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDEBAR */}
                <div className="space-y-6 bg-[#E1F2FF] min-h-screen">

                    {/* SEARCH */}
                    <div className="bg-[#E1F2FF] p-4 rounded-xl mt-12">
                        <div className="flex rounded-full overflow-hidden">
                            <input
                                type="text"
                                placeholder="search your blog here"
                                className="flex-1 px-4 py-2 outline-none text-sm bg-white"
                            />
                            <button className="bg-blue-700 text-white px-6 py-2 text-sm font-medium">
                                Search
                            </button>
                        </div>
                    </div>

                    {/* GET IN TOUCH */}
                    <div className="bg-[#E1F2FF] p-6 rounded-xl">
                        <h3 className="text-xl font-bold text-center text-gray-800 mb-4">
                            Get In Touch
                        </h3>

                        <div className="space-y-3">
                            <input
                                type="text"
                                placeholder="name"
                                className=" bg-white w-full px-4 py-2 rounded-lg outline-none text-sm"
                            />
                            <input
                                type="email"
                                placeholder="email address"
                                className="bg-white w-full px-4 py-2 rounded-lg outline-none text-sm"
                            />
                            <input
                                type="tel"
                                placeholder="mobile no"
                                className="bg-white w-full px-4 py-2 rounded-lg outline-none text-sm"
                            />
                            <input
                                type="text"
                                placeholder="select course"
                                className="bg-white w-full px-4 py-2 rounded-lg outline-none text-sm"
                            />

                            <button className="w-full mt-2 bg-gradient-to-r from-[#63CDB4] to-[#0077BF] text-white py-3 rounded-xl font-semibold">
                                Submit
                            </button>
                        </div>
                    </div>

                    {/* RELATED */}
                    <div className="bg-[#E1F2FF] p-6">
                        <h3 className="text-lg font-bold text-blue-600 mb-4">
                            Related
                        </h3>

                        <div className="space-y-4">
                            {[1, 2, 3].map((item) => (
                                <div key={item} className="border-b pb-3 last:border-b-0">
                                    <h4 className="font-semibold text-gray-800 text-sm">
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
                    <div className="space-y-4 px-4">
                        {/* Kyrgyzstan Banner */}
                        <div className="rounded-xl overflow-hidden">
                            <Image
                                src="/images/deemed/banner-k.webp"
                                alt="Study MBBS in Kyrgyzstan"
                                width={400}
                                height={200}
                                className="w-full h-auto object-contain"
                            />
                        </div>

                        {/* NEET PG Banner */}
                        <div className="rounded-xl overflow-hidden">
                            <Image
                                src="/images/deemed/banner-n.webp"
                                alt="NEET PG Admission"
                                width={400}
                                height={200}
                                className="w-full h-auto object-contain"
                            />
                        </div>

                        {/* Study Abroad Banner */}
                        <div className="rounded-xl overflow-hidden">
                            <Image
                                src="/images/deemed/banner-mg.webp"
                                alt="Study Abroad"
                                width={400}
                                height={200}
                                className="w-full h-auto object-contain"
                            />
                        </div>

                        {/* Study India Banner */}
                        <div className="rounded-xl overflow-hidden">
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
            <div className="mt-16 text-center">
                <h2 className="text-4xl md:text-6xl font-bold text-[#A8E6CF] opacity-80">
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
        <div className="space-y-4">
            {faqs.map((faq, index) => (
                <div 
                    key={index} 
                    className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
                >
                    <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full p-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                    >
                        <h3 className="font-semibold text-gray-800 text-sm pr-4">
                            {index + 1}. {faq.question}
                        </h3>
                        <div className={`transform transition-transform duration-300 ${openFAQ === index ? 'rotate-180' : ''}`}>
                            <svg 
                                className="w-5 h-5 text-gray-500" 
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
                        <div className="px-4 pb-4 border-t border-gray-100">
                            <p className="text-gray-600 text-xs leading-relaxed pt-3 animate-fadeIn">
                                {faq.answer}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}