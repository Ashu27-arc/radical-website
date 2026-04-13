"use client";

import { Button } from "primereact/button";
import { useState } from "react";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Link from "next/link";

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
            "All Standard + Strategy features",
            "Full admission guidance till final seat",
            "Direct expert (call/WhatsApp) support",
            "Low budget & NRI quota assistance",
            "Unlimited counselling & documentation help",
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
            "All Standard features included",
            "College & budget planning (India + Abroad)",
            "Offer letters from abroad universities",
            "Vacant seat alerts",
            "Expert counselling (limited states)",
            "NON REFUNDABLE",
        ],
    },
    {
        id: 3,
        title: "Ultimate",
        subtitle: "Complete end-to-end premium support",
        price: "₹ 129,999",
        color: "bg-[#D3F4FF]",
        border: "border-[#42ACCF]",
        bgImage: "/images/borderShape3.webp",
        icon: "/images/st3.svg",
        features: [
            "All Standard + Strategy features",
            "Full admission guidance till final seat",
            "Direct expert (call/WhatsApp) support",
            "Low budget & NRI quota assistance",
            "Unlimited counselling & documentation help",
            "NON REFUNDABLE",
        ],
    },
];

const videos = [
    {
        id: 1,
        title: 'Utkarshika Gupta, CSAMC, Etah',
        youtubeId: 'jfq8RbTIrtI',
    },
    {
        id: 2,
        title: "Ayush Kushwaha, GSAMC, Hapur",
        youtubeId: 'hwYjHX5pk9w',
    },
    {
        id: 3,
        title: 'Sangam Yadav, MGAMC, Lucknow',
        youtubeId: 'CxDL_T4CWs8',
    },
];

export default function NeetUgIndiaAdmissionPage() {
    const [videoPopup, setVideoPopup] = useState<{ id: number; title: string; youtubeId: string } | null>(null);

    return (
        <>
            <FloatingWhatsApp />
            <section className="lg:py-45 md:py-36 py-20 relative overflow-hidden z-2 bg-[url('/banner-neet-ug.webp')] bg-cover bg-center bg-no-repeat">
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
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-14 lg:gap-10 mb-14 lg:mb-20">
                        {neetupadmissionplans.map((plan) => (
                            <div
                                key={plan.id}
                                className="group fadeUp relative z-10 rounded-2xl pt-16 pb-8 px-6 shadow-xl transition-all duration-500 bg-white hover:shadow-2xl hover:bg-[linear-gradient(163.56deg,_#02CCB2_6.49%,_#0080C8_98.8%)] transition-all duration-300 hover:text-white"
                            >
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
                    <div id="connect-counselor" className="mb-16 grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:gap-20 gap-10 bg-[#FFE5EB] lg:rounded-3xl rounded-2xl lg:pl-20 md:pl-10 pt-10 md:pr-0 px-10">
                        <div className="text-center md:text-left self-center lg:-translate-6">
                            <h2 className="mb-3 font-bold text-black lg:text-4xl text-3xl">Book your 20 MIN free counselling session today </h2>
                            <div className="text-[#404040] font-medium text-base mb-8">Google Meet | Zoom | Microsoft teams | Whatsapp Available</div>
                            <Link href="https://www.neetbhaiya.in/" target="_blank" className="cursor-pointer text-white rounded-full bg-[#FF3D68] px-6 py-3 uppercase font-medium">BOOK NOW</Link>
                        </div>
                        <div>
                            <img src="/images/counsellingRi.webp" width={510} height={312} alt="" />
                        </div>
                    </div>
                    <div className='mb-10 fadeUp text-center'>
                        <h2 className='text-black text-4xl font-bold mb-4'>OUR <span className='text-[#287FC4]'>SUCCESSFUL STORIES</span></h2>
                        <div className='uppercase text-[#00CFB240] leading-12 text-[42px] md:text-5xl lg:text-7xl font-black'>HEAR FROM OUR STUDENTS</div>
                    </div>
                    <div className="grid gap-6 md:grid-cols-3 grid-cols-1">
                        {videos.map((video) => (
                            <div
                                key={video.id}
                                className="fadeUp relative min-w-[340px] h-[240px] rounded-xl overflow-hidden shadow-lg cursor-pointer group"
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
