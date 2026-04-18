"use client";

import { Button } from "primereact/button";
import Image from "next/image";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Link from "next/link";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const studyIndiaLists = [
    {
        id: 1,
        title: 'MBBS in India',
        link: "#"
    },
    {
        id: 2,
        title: "BAMS in India",
        link: "#"
    },
    {
        id: 3,
        title: 'BHMS in India',
        link: "#"
    },
    {
        id: 4,
        title: 'BUMS in India',
        link: "#"
    },
    {
        id: 5,
        title: 'BNYS in India',
        link: "#"
    },
    {
        id: 6,
        title: 'BDS in India',
        link: "#"
    },
    {
        id: 7,
        title: "BAMS in India",
        link: "#"
    },
    {
        id: 8,
        title: 'MD in India',
        link: "#"
    },
    {
        id: 9,
        title: 'MS in India',
        link: "#"
    },
    {
        id: 10,
        title: 'DNB in India',
        link: "#"
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

export default function StudyIndiaPage() {
    const [videoPopup, setVideoPopup] = useState<{ id: number; title: string; youtubeId: string } | null>(null);

    return (
        <>
            <FloatingWhatsApp />
            <section
                className="relative pb-30 lg:pt-40 pt-30 bg-cover bg-center bg-no-repeat z-2"
                style={{ backgroundImage: "url('/images/study-indiaHeroNew.webp')" }}
            >
                <div className="absolute inset-0 bg-black/50 -z-2"></div>
                <div className="max-w-6xl mx-auto px-6">
                    <div className="lg:px-50 text-center text-white mb-10 lg:mb-20">
                        <h1 className="text-white font-semibold mb-2 md:text-5xl text-3xl">Start Your Medical Journey in India</h1>
                        <div>Affordable, trusted, and student-focused pathways to top medical colleges across India.  We guide you every step of the way—from choosing the right university to starting your journey as a doctor.</div>
                    </div>
                    <div className="flex flex-wrap justify-center lg:gap-4 gap-2">

                        {studyIndiaLists.map((item, index) => (

                            <Link
                                key={index}
                                href={item.link}
                                className="px-6 py-3 text-sm text-white font-semibold rounded-full border border-white/30 bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300"
                            >
                                {item.title}
                            </Link>

                        ))}

                    </div>

                </div>

            </section>

            <section className="mt-10 lg:mt-20 mb-16 py-12 lg:py-18">
                <div className="container px-4 md:px-6">
                    <div className="relative w-full aspect-[1240/350] rounded-2xl overflow-hidden shadow-lg cursor-pointer">
                        <Link href="https://neetbhaiya.in" target="_blank" className="block w-full h-full">
                            <Image
                                src="/images/banner-neet-bhaiya.webp"
                                alt="NEET UG Banner"
                                fill
                                className="object-cover"
                            />
                        </Link>

                        {/* Play Store Button Overlay */}
                        <div
                            className="absolute left-[7.3%] bottom-9 h-[41px] z-10 hover:scale-105 transition-transform"
                        >
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

                        {/* App Store Button Overlay */}
                        <div
                            className="absolute left-[19.9%] bottom-8 h-[45px] z-10 hover:scale-105 transition-transform"
                        >
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
            </section>

            <section className="py-10 lg:py-15">
                <div className="container px-4 md:px-6">
                    <div className='mb-10 fadeUp text-center'>
                        <h2 className='text-black text-4xl font-bold mb-4'>OUR <span className='text-[#287FC4]'>SUCCESSFUL STORIES</span></h2>
                        <div className='uppercase text-[#00CFB240] leading-12 text-[42px] md:text-5xl lg:text-7xl font-black'>HEAR FROM OUR STUDENTS</div>
                    </div>
                    <Swiper
                        modules={[Autoplay, Pagination, Navigation]}
                        spaceBetween={24}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        navigation={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                        className="pb-12"
                    >
                        {videos.map((video) => (
                            <SwiperSlide key={video.id}>
                                <div
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
                            </SwiperSlide>
                        ))}
                    </Swiper>
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