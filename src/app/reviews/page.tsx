"use client";

import { useState } from 'react';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from 'next/image';






const reviewtestimonials = [
    {
        id: 1,
        name: "Mayank kumar",
        location: "Delhi → Russia",
        text: "My name is Mayank Kumar. I have completed my class 12 from Balodir Public School in Delhi. I’m really excited to explore my MBBS dreams at 12th State Medical University.",
        tag: "MBBS",
        status: "Secured a seat at",
        avatar: "/images/reviews/user1.webp",
        logo: "/images/reviews/university1.webp",
    },
    {
        id: 2,
        name: "Daksh Moom",
        location: "Assam → Kyrgyzstan",
        text: "My name is Daksha Moom. I'm in the Office International Medical University, Kyrgyzstan. And who did you get in which education? I got in the radical education.",
        tag: "MBBS",
        status: "Secured a seat at",
        avatar: "/images/reviews/user2.webp",
        logo: "/images/reviews/university2.webp",
    },
    {
        id: 3,
        name: "Aseem",
        location: "Delhi → Kazakhstan",
        text: "Krystal Covington is a business growth strategist with 15 years of experience in marketing and public relations. Krystal received varsity",
        tag: "MBBS",
        status: "Secured a seat at",
        avatar: "/images/reviews/user3.webp",
        logo: "/images/reviews/university3.webp",
    },
    {
        id: 4,
        name: "Tanishka",
        location: "Uttar Pradesh → Russia",
        text: "I'm Tanishka, I'm from Ghaziabad I'm going to Tver State Medical University through Radical Education. Actually I got a pamphlet my initial day when I am preparing for NEET.",
        tag: "MBBS",
        status: "Secured a seat at",
        avatar: "/images/reviews/user4.webp",
        logo: "/images/reviews/university1.webp",
    },
    {
        id: 5,
        name: "ETSHAMUL HAQUE",
        location: "India",
        text: "I secured an MBBS seat in medical College with the help of radical education. The process was very professional.",
        tag: "MBBS",
        status: "Secured a seat at",
        avatar: "/images/reviews/user5.webp",
        logo: "/images/reviews/university4.webp",
    },
    {
        id: 6,
        name: "Aryan Vijay",
        location: "India",
        text: "I recently took counselling services from Radical Education for my BDS admission. My counsellor, Sudhanshu.",
        tag: "BDS",
        status: "Secured a seat at",
        avatar: "/images/reviews/user6.webp",
        logo: "/images/reviews/university5.webp",
    },
    {
        id: 7,
        name: "YASHVI AGARWAL",
        location: "India",
        text: "I’m so grateful to Radical Education and especially Hitesh Agrawal ma'am for helping me throughout my MBBS admission process.",
        tag: "MBBS",
        status: "Secured a seat at",
        avatar: "/images/reviews/user7.webp",
        logo: "/images/reviews/university6.webp",
    },
    {
        id: 8,
        name: "Iqra Ansari",
        location: "India",
        text: "My experience with Radical Education has been amazing! I took their help for MBBS counselling, and the entire process was smooth and transparent.",
        tag: "MBBS",
        status: "Secured a seat at",
        avatar: "/images/reviews/user8.webp",
        logo: "/images/reviews/university7.webp",
    },
    {
        id: 9,
        name: "Swarnjit Bhadra",
        location: "India",
        text: "Glad to secure a seat in BAMS in the first round. Great counselling company, very engaging mentors. Highly recommend them.",
        tag: "BAMS",
        status: "Secured a seat at",
        avatar: "/images/reviews/user9.webp",
        logo: "/images/reviews/university8.webp",
    },
    {
        id: 10,
        name: "SHREYA JAIN",
        location: "India",
        text: "Ms.Hitashi Agarwal Mam counsellor at radical education made NEET counselling hassle free and resolved each and every query regarding whole process.",
        tag: "MBBS",
        status: "Secured a seat at",
        avatar: "/images/reviews/user10.webp",
        logo: "/images/reviews/university9.webp",
    },
    {
        id: 11,
        name: "KSHIRAJ LUTHRA",
        location: "India",
        text: "I choose radical education for my mbbs counselling and it was very helpful they guided me very well throughout the process in securing",
        tag: "MBBS",
        status: "Secured a seat at",
        avatar: "/images/reviews/user11.webp",
        logo: "/images/reviews/university10.webp",
    },
    {
        id: 12,
        name: "Sangam Yadav",
        location: "India",
        text: "Attending the Radical Education BAMS counselling was an excellent experience. Specially dr kk sir was always available to answer my queries regarding BAMS colleges",
        tag: "BAMS",
        status: "Secured a seat at",
        avatar: "/images/reviews/user12.webp",
        logo: "/images/reviews/university11.webp",
    },
    {
        id: 13,
        name: "TANYA SAXENA",
        location: "India",
        text: "I choose Radical Education for my MBBS counselling. The process was smooth and professional.",
        tag: "MBBS",
        status: "Secured a seat at",
        avatar: "/images/reviews/user13.webp",
        logo: "/images/reviews/university12.webp",
    },
];


export default function TestimonialsPage() {
    const [videoPopup, setVideoPopup] = useState<{ id: number; title: string; youtubeId: string } | null>(null);
    const videos = [
        { id: 1, title: 'Utkarshika Gupta, CSAMC, Etah', youtubeId: 'jfq8RbTIrtI' },
        { id: 2, title: 'Ayush Kushwaha, GSAMC, Hapur', youtubeId: 'hwYjHX5pk9w' },
        { id: 3, title: 'Sangam Yadav, MGAMC, Lucknow', youtubeId: 'CxDL_T4CWs8' },
        { id: 4, title: 'Anhad Kaur, SGRDIMSR, Amristar', youtubeId: '7t81QLx4TeM' },
        { id: 5, title: 'Prabhat Soni, GMC, Jhunjhunu', youtubeId: 'XYZPevx_UE0' },
        { id: 6, title: 'Aditya Maan, GMC, Sirohi', youtubeId: 'QdpT-kOvM2g' },
        // { id: 7, title: 'Annant, MMC, Muzaffarnagar', youtubeId: '6lhfvUFUoQM' },
    ];
    return (
        <div className="w-full bg-white">
            <FloatingWhatsApp />

            <section className="py-16 bg-gradient-to-b from-[#CDE7FF] to-[#F4F7F8]">
                <div className="max-w-7xl pt-14 mx-auto px-4">
                    <div className='text-center'>
                        <h2 className="text-5xl font-bold fadeUp">
                            <span className="bg-gradient-to-r from-[#128FFF] to-[#63CDB4] bg-clip-text text-transparent">Radical Education</span>
                        </h2>
                        <p className="mt-2 text-black text-3xl fadeUp">
                            is trusted by parents and students like you
                        </p>
                        <p className="text-lg text-black mt-6 fadeUp">
                            Here are a few real experiences from those who navigated NEET counselling with clarity.
                        </p>
                    </div>
                    <div className="mx-auto max-w-[1100px]">
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            loop={true}
                            centeredSlides={true}
                            slidesPerView={1}
                            navigation
                            spaceBetween={30}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                            }}
                            breakpoints={{
                                768: {
                                    slidesPerView: 3,
                                },
                            }}
                            className="!p-20 rvwSlider"
                        >
                            {reviewtestimonials.map((item) => (
                                <SwiperSlide key={item.id}>
                                    {({ isActive, isPrev, isNext }) => {
                                        let cardClass = "";

                                        if (isActive) {
                                            cardClass = "border-2 border-white rotate-0 z-20 bg-gradient-to-b from-[#D0FFAD] to-[#F4F7F8]";
                                        } else if (isPrev) {
                                            cardClass = "border-2 border-white -rotate-6 z-10 translate-y-6 bg-gradient-to-b from-[#CDE7FF] to-[#F4F7F8]";
                                        } else if (isNext) {
                                            cardClass = "border-2 border-white rotate-6 z-10 translate-y-6 bg-gradient-to-b from-[#CDE7FF] to-[#F4F7F8]";
                                        } else {
                                            cardClass = "border-2 border-white opacity-0 translate-y-10 bg-gradient-to-b from-[#CDE7FF] to-[#F4F7F8]";
                                        }

                                        return (
                                            <div
                                                className={`transition-all duration-500 bg-white rounded-2xl px-6 py-10 shadow-xl transform
hover:shadow-2xl hover:scale-[1.03] ${cardClass}`}
                                            >
                                                <div className="flex items-center gap-3 mb-5">
                                                    <img
                                                        src={item.avatar}
                                                        alt={item.name}
                                                        className="w-12 h-12 rounded-full object-cover"
                                                    />
                                                    <div className="text-left">
                                                        <h4 className="text-sm font-semibold">{item.name}</h4>
                                                        <p className="text-xs text-gray-400">{item.location}</p>
                                                    </div>
                                                </div>
                                                <div className="text-yellow-400 text-sm mb-3 text-left">★★★★★</div>
                                                <p className="text-sm text-gray-600 leading-relaxed text-left">
                                                    {item.text}
                                                </p>
                                            </div>
                                        );
                                    }}
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="mt-8 flex items-center justify-center gap-2 text-gray-600 fadeUp">
                        <div className="flex -space-x-2">
                            <img src="/images/reviews/Iqra-Ansari.webp" className="w-10 h-10 rounded-full border" />
                            <img src="/images/reviews/Sahil-Gautam.webp" className="w-10 h-10 rounded-full border" />
                            <img src="/images/reviews/Iqra-Ansari.webp" className="w-10 h-10 rounded-full border" />
                        </div>
                        <span className="text-[#005787]">
                            <span className='font-bold'>85+</span> Success Stories
                        </span>
                        <span>That Define Success</span>
                    </div>
                </div>
            </section>
            <section className="pb-20 bg-[#F4F7F8]">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="fadeUp">
                        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {videos.map((video) => (
                                <button
                                    key={video.id}
                                    type="button"
                                    onClick={() => setVideoPopup(video)}
                                    className="relative w-full h-[260px] rounded-xl overflow-hidden shadow-lg text-left focus:outline-none focus:ring-2 focus:ring-[#287FC4] focus:ring-offset-2 group cursor-pointer block"
                                >
                                    <img
                                        src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                                        alt={video.title}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    {/* Play icon overlay */}
                                    <span className="absolute inset-0 flex items-center justify-center">
                                        <span className="w-14 h-14 rounded-full bg-black/60 flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300">
                                            <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </span>
                                    </span>

                                    <span className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-3 py-2 text-white text-sm font-medium">
                                        {video.title}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
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
                                            src={`https://www.youtube.com/embed/${videoPopup.youtubeId}`}
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
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-16 fadeUp">
                        {reviewtestimonials.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white rounded-xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <Image
                                        src={item.avatar}
                                        alt={item.name}
                                        width={40}
                                        height={40}
                                        className="rounded-full object-cover"
                                    />
                                    <div>
                                        <h3 className="text-sm font-semibold text-gray-800">
                                            {item.name}
                                        </h3>
                                        <p className="text-xs text-gray-500">{item.location}</p>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600 leading-relaxed mb-4 min-h-[91px]">
                                    {item.text}
                                </p>
                                <div className="flex items-center justify-between">
                                    <span className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-600 font-medium">
                                        {item.tag}
                                    </span>

                                    <div className="flex items-center gap-2">
                                        <span className="text-xs text-gray-500">
                                            {item.status}
                                        </span>
                                        <Image
                                            src={item.logo}
                                            alt="logo"
                                            width={37}
                                            height={48}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
