"use client";

import { Button } from "primereact/button";
import { useState } from "react";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Link from "next/link";
import Image from "next/image";





const neetupadmissionplans = [
    {
        id: 1,
        title: "Standard",
        subtitle: "Complete end-to-end premium support",
        price: "₹ 9,999",
        color: "bg-[#B6FFA7]",
        border: "border-[#2CBF0F]",
        bgImage: "/images/borderShape1.webp",
        icon: "/images/st1.svg",
        features: [
            "MBBS / BDS",
            "Alerts, Notifications, Updates",
            "Detailed Information on Admission Procedure",
            "Rank Based Analysis",
            "Guidance over Documentation",
            "Counselling Registrations Support over call and MEET",
            "Colleges Choice List Pdf by Our Expert",
            "Updated Fee and Seat Matrix Round wise",
            "Bonds and Rural Services Rules Guidance over call",
            "Central Pool Quota Seats Information",
            "NON REFUNDABLE",
        ],
    },
    {
        id: 2,
        title: "Strategy",
        subtitle: "Smart planning with added support",
        price: "₹ 27,999",
        color: "bg-[#AEC2FF]",
        border: "border-[#607DD6]",
        bgImage: "/images/borderShape2.webp",
        icon: "/images/st2.svg",
        features: [
            "MBBS / BDS / AYUSH",
            "All Services of Standard Plan",
            "Offer Letters from 2 MBBS Abroad Universities",
            "Exclusive alerts of Vacant Seats",
            "Budget friendly colleges suggestion",
            "Office or Online meet with Senior Admission Manager",
            "Counselling Registrations and by our Expert up to 2 states only",
            "MBBS Abroad Dedicated Counselling",
            "NEET PG Reservations Guidance",
            "Hidden Charges Information",
            "NON REFUNDABLE",
        ],
    },
    {
        id: 3,
        title: "Ultimate",
        subtitle: "Complete end-to-end premium support",
        price: "₹ 84,499",
        originalPrice: "₹ 129,999",
        color: "bg-[#D3F4FF]",
        border: "border-[#42ACCF]",
        bgImage: "/images/borderShape3.webp",
        icon: "/images/st3.svg",
        features: [
            "MBBS / BDS / AYUSH",
            "All Services of Standard Plan + Strategy",
            "Full Guidance throughout MBBS/BDS/AYUSH Journey",
            "Call/Whatsapp Guidance by Directors",
            "Low Budget and Vacant seats information Of MQ/NRI/Other Quota Seats",
            "Admission on Negotiated Tuition Fee (If Available)",
            "Unlimited Counselling registrations and Choice filling by our Experts",
            "NRI Seats Documentation and Admission Support",
            "College Reporting and Offline Documentation Support at Nodal Center",
            "Securities Refund Assurance (if Applicable)",
            "REFUNDABLE",
        ],
    },
];

const videos = [
    {
        id: 1,
        title: 'Arush Loomba, KD Medical College, Mathura',
        youtubeId: '5cGL3vAHVgY',
    },
    {
        id: 2,
        title: 'Etshamul Haque, NCR Institute of Medical Sciences, Uttar Pradesh',
        youtubeId: '_voXIMBO5kE',
    },
    {
        id: 3,
        title: 'Tanish Bhatiya, GMC, Washim',
        youtubeId: 'LGz27v7iCf0',
    },
    {
        id: 4,
        title: 'Saubhagya Agrawal, NIMS, Noida',
        youtubeId: 'lHUOtZmHvng',
    },
    {
        id: 5,
        title: 'Anhad Kaur, Sri Guru Ram Das Institute of Medical Sciences and Research, Amritsar',
        youtubeId: '7t81QLx4TeM',
    },
    {
        id: 6,
        title: 'Aditya Verma, Maharishi Markandeshwar Dental Sciences & Research College',
        youtubeId: 'EG7fg6sd5Uo',
    },
    {
        id: 7,
        title: 'Piyush Bisht, GMC, Haldwani',
        youtubeId: 'AY9meq3dpRA',
    },
    {
        id: 8,
        title: 'Prabhat Soni, GMC Jhunjhunu',
        youtubeId: 'XYZPevx_UE0',
    },
    {
        id: 9,
        title: 'Rudra Pratap Singh, HIMS, Sitapur',
        youtubeId: 'tBWzWhOelNo',
    },
    {
        id: 10,
        title: 'Sherya Jain, TMU, Moradabad',
        youtubeId: 'Ltk485g1cEw',
    },
    {
        id: 11,
        title: 'Aditya Maan, GMC Sirohi',
        youtubeId: 'QdpT-kOvM2g',
    },
    {
        id: 12,
        title: 'Yashvi Agarwal, MRWC, Hyderabad',
        youtubeId: '37-KkRicxAs',
    },
    {
        id: 13,
        title: 'Kumar Amlendu, Government Medical College, Ariyalur',
        youtubeId: 'TRLNAiSqDqY',
    },
    {
        id: 14,
        title: 'Abhishek Sharma, NIIMS, Gr. Noida',
        youtubeId: 'UxIt6DyD4CE',
    },
    {
        id: 15,
        title: 'Prabhleen Kaur, GDC, Amritsar',
        youtubeId: '0GAQQwIU8n0',
    },
    {
        id: 16,
        title: 'Annant, MMC, Muzaffarnagar',
        youtubeId: '6lhfvUFUoQM',
    },
    {
        id: 17,
        title: 'Ved Unnarkar, BVDU Medical College, Sangli',
        youtubeId: 'qiE-UwKIPD8',
    },
    {
        id: 18,
        title: 'Sangam Yadav, MGAMC',
        youtubeId: 'CxDL_T4CWs8',
    },
    {
        id: 19,
        title: 'Vyomkesh, FHMC, Agra',
        youtubeId: 'i76uENNwSok',
    },
    {
        id: 20,
        title: 'Angel, SDC',
        youtubeId: 'z9U9FDWPlYo',
    },
    {
        id: 21,
        title: 'Mohammed Athar, FHMC, Agra',
        youtubeId: 'nvZ7duCvCLw',
    },
    {
        id: 22,
        title: 'Kshiraj Luthra, GMC Alwar',
        youtubeId: 'sOUSF0lu4fw',
    },
    {
        id: 23,
        title: 'Amara, IAMS',
        youtubeId: 'Xuk6FOEcmIc',
    },
    {
        id: 24,
        title: 'Ayush Kushwaha, Hapur',
        youtubeId: 'hwYjHX5pk9w',
    },
    {
        id: 25,
        title: 'Utkarshika, CSAMC, Etah',
        youtubeId: 'jfq8RbTIrtI',
    },
];

export default function NeetUgIndiaAdmissionPage() {
    const [videoPopup, setVideoPopup] = useState<{ id: number; title: string; youtubeId: string } | null>(null);

    return (
        <>
            <FloatingWhatsApp />
            <section className="lg:py-45 md:py-36 py-20 relative overflow-hidden z-2 bg-[url('/images/neet-ug-india-hero.webp')] bg-cover bg-center bg-no-repeat">
                <div className="container px-3 md:px-4 fadeUp">
                    <div className="w-full lg:w-4/10 md:8/10 md:text-left text-center">
                        <h1 className="uppercase lg:text-5xl text-4xl font-bold text-white lg:mb-6 mb-4">NEET UG <br className="hidden lg:block" />ADMISSION</h1>
                        <p className="text-white text-lg m-0 p-0">Radical Education is your personalised gateway to a successful medical career begins here—get expert guidance, clear processes, and authentic information to secure your MBBS seat with confidence.</p>
                    </div>
                </div>
            </section>
            <section className="py-10 lg:py-15 overflow-hidden bg-[#F4F7F8]">
                <div className="container px-3 md:px-4 max-w-[1240px]">
                    <h2 className='text-black text-4xl font-bold mb-10 lg:mb-16 text-center fadeUp'>Pricing & <span className='text-[#287FC4]'>Packages</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-3 md:px-3 lg:gap-10 mb-14 lg:mb-20">
                        {neetupadmissionplans.map((plan) => (
                            <div
                                key={plan.id}
                                className="group fadeUp relative z-10 rounded-2xl pt-16 pb-8 px-6 md:px-3 shadow-xl transition-all duration-500 bg-white hover:shadow-2xl hover:bg-[linear-gradient(163.56deg,_#02CCB2_6.49%,_#0080C8_98.8%)] transition-all duration-300 hover:text-white"
                            >
                                {plan.title === "Ultimate" && (
                                    <div className="absolute top-0 right-0 w-[120px] h-[120px] overflow-hidden z-20">
                                        <div className="absolute top-[18px] right-[-35px] rotate-[33deg] bg-[#FFDB4B] text-[#0B2E3C] text-xs font-semibold text-center py-1 w-[160px]">
                                            Get 35% OFF
                                        </div>
                                    </div>
                                )}
                                <div className="absolute left-1/2 -translate-x-1/2 -top-[35px] border-[8px] border-[#F4F7F8] rounded-full">
                                    <img
                                        src={plan.icon}
                                        alt={plan.title}
                                        className="w-16 h-16 object-contain"
                                    />
                                </div>
                                <div className="text-center mb-3 text-lg font-semibold text-[#0B2E3C] group-hover:text-white! transition-colors duration-300">{plan.title}</div>
                                <div className="text-center text-xs text-[#0B2E3C] group-hover:text-white! transition-colors duration-300 mb-6">{plan.subtitle}</div>
                                <div className="text-center font-light lg:text-5xl text-4xl group-hover:text-white! transition-colors duration-300 mb-8">{plan.price}</div>
                                <div className="flex flex-col gap-3 mb-10">
                                    <Button className="text-[#005787]! border-[#DFF1FF]! bg-[#128FFF1C]! group-hover:bg-[#FFFFFF47]! group-hover:text-white! group-hover:border-[#FFFFFF47]! w-full flex gap-2 items-center transition-all duration-300" rounded>
                                        Pay now
                                    </Button>
                                </div>
                                <div className="text-base text-black font-semibold group-hover:text-white! transition-colors duration-300 mb-5">What's included?</div>
                                <ul className="space-y-4 text-sm text-gray-700 mb-8">
                                    {plan.features.map((item, index) => (
                                        <li key={index} className="flex gap-2">
                                            <span className="text-yellow-500 transition-colors duration-300">✦</span>
                                            <span className="group-hover:text-white! transition-colors duration-300">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                            </div>
                        ))}
                    </div>

                    <section className="mb-16">
                        <div className="container px-3 md:px-0">
                            <div className="relative w-full aspect-[1240/350] rounded-2xl overflow-hidden shadow-lg cursor-pointer">
                                {/* Base Banner Link */}
                                <Link href="https://neetbhaiya.in" target="_blank" className="block w-full h-full">
                                    <Image
                                        src="/images/banner-neet-bhaiya.webp"
                                        alt="NEET UG Banner"
                                        fill
                                        className="object-cover"
                                    />
                                </Link>

                                <div className="grid grid-cols-2 lg:gap-3 md:gap-2 gap-2 absolute left-[7.3%] bottom-2.5 md:bottom-5 lg:bottom-7 xl:bottom-12 w-[40%] xl:w-[30%]">
                                    <div className="hover:scale-105 transition-transform">
                                        <Link
                                            href="https://play.google.com/store/apps/details?id=com.kaveka.NeetBhaiya"
                                            target="_blank"
                                            className="block w-full h-full"
                                        >
                                            <Image
                                                src="/svg/play-store.svg"
                                                alt="Google Play Store"
                                                width={200}
                                                height={200}
                                                className="object-contain w-full h-full"
                                            />
                                        </Link>
                                    </div>
                                    <div className="hover:scale-105 transition-transform">
                                        <Link
                                            href="https://apps.apple.com/in/app/neet-bhaiya/id6737535565"
                                            target="_blank"
                                            className="block w-full h-full"
                                        >
                                            <Image
                                                src="/svg/app-store.svg"
                                                alt="App Store"
                                                width={200}
                                                height={200}
                                                className="object-contain w-full h-full"
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className='mb-10 fadeUp text-center'>
                        <h2 className='text-black text-4xl font-bold mb-4'>OUR <span className='text-[#287FC4]'>SUCCESSFUL STORIES</span></h2>
                        <div className='uppercase text-[#00CFB240] leading-12 text-[42px] md:text-5xl lg:text-7xl font-black'>HEAR FROM OUR STUDENTS</div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {videos.map((video) => (
                            <div
                                key={video.id}
                                className="fadeUp relative w-full h-[240px] rounded-xl overflow-hidden shadow-lg cursor-pointer group"
                                onClick={() => setVideoPopup(video)}
                            >
                                <img
                                    src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                                    alt={video.title}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 transition-transform duration-300 group-hover:scale-110">
                                        <img
                                            src="/images/reviews/you-tube.webp"
                                            className="w-full h-full object-contain"
                                            alt="Play button"
                                        />
                                    </div>
                                </div>
                                <span className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-3 py-2 text-white text-sm font-medium">
                                    {video.title}
                                </span>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {videoPopup && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
                    onClick={() => setVideoPopup(null)}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Video player"
                >
                    <div
                        className="relative w-full max-w-4xl rounded-2xl overflow-hidden bg-white shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="p-3 bg-[#F4F7F8]">
                            <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black">
                                <button
                                    type="button"
                                    onClick={() => setVideoPopup(null)}
                                    className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors"
                                    aria-label="Close"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                                <iframe
                                    className="absolute inset-0 w-full h-full"
                                    src={`https://www.youtube.com/embed/${videoPopup.youtubeId}?autoplay=1`}
                                    title={videoPopup.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
