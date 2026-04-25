'use client';
import Image from "next/image";
import CounselorSection from "@/components/CounselorSection";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';

import { galleryData } from "@/data/galleryData";
import { useEffect, useState } from "react";
import GalleryModal from "@/components/gallery/GalleryModal";
import GalleryCard from "@/components/gallery/GalleryCard";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const countries = [
    { name: 'India', flag: '/flags/india.webp' },
    { name: 'Nepal', flag: '/flags/nepal.webp' },
    { name: 'Kyrgyzstan', flag: '/flags/kyrgyzstan.webp' },
    { name: 'Russia', flag: '/flags/russia.webp' },
    { name: 'Kazakhstan', flag: '/flags/kazakhstan.webp' },
    { name: 'Georgia', flag: '/flags/georgia.webp' },
    { name: 'Singapore', flag: '/flags/singapore.webp' },
    { name: 'Bangladesh', flag: '/flags/bangladesh.webp' },
    { name: 'Uzbekistan', flag: '/flags/uzbekistan.webp' },
];

export default function GalleryPage() {
    const years = Object.keys(galleryData).map(Number).sort((a, b) => a - b);

    const currentYear = new Date().getFullYear();
    const currentMonth = new Date()
        .toLocaleString('en-US', { month: 'long' })
        .toUpperCase();

    // Find current year index (fallback to first year)
    const defaultYearIndex = Math.max(
        years.indexOf(currentYear),
        0
    );

    const [yearIndex, setYearIndex] = useState(defaultYearIndex);
    const [modalEvents, setModalEvents] = useState<any[] | null>(null);

    const activeYear = years[yearIndex];

    return (
        <>
            <FloatingWhatsApp />
            <div className="bg-[#F4F7F8]">
                {/* Hero Section */}
                <section className="relative h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden">
                    <div
                        className="absolute inset-0 bg-[url('/images/galleryHero.webp')] bg-cover bg-center bg-no-repeat"
                        style={{ backgroundAttachment: 'scroll' }}
                    />
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="container mx-auto px-4 relative z-10 text-center fadeUp">
                        <div className="max-w-3xl mx-auto">
                            <h1 className="uppercase text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 lg:mb-6">
                                OUR GALLERY
                            </h1>
                            <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed">
                                Explore our journey through the years as we help students achieve their medical career goals across the globe.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Countries Swiper */}
                <section className="bg-white py-12 md:py-20">
                    <div className="container mx-auto px-4 fadeUp text-center">
                        <div className="mb-10 md:mb-14">
                            {/* <h2 className="text-[#0B2E3C] text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                                Our Global Presence
                            </h2> */}
                            <p className="text-[#4A4A4A] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                                We are proud to support students pursuing their goals in these nations
                            </p>
                        </div>
                        <Swiper
                            modules={[Autoplay, FreeMode]}
                            spaceBetween={20}
                            slidesPerView={3}
                            loop={true}
                            speed={5000}
                            freeMode={true}
                            autoplay={{
                                delay: 0,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                640: { slidesPerView: 4, spaceBetween: 20 },
                                768: { slidesPerView: 5, spaceBetween: 30 },
                                1024: { slidesPerView: 7, spaceBetween: 40 },
                            }}
                            className="w-full"
                        >
                            {countries.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="flex flex-col items-center gap-3 cursor-pointer group pb-4">
                                        <div className="w-[55px] h-[55px] rounded-[10px] overflow-hidden flex items-center justify-center bg-white shadow-[0_4px_15px_rgba(0,0,0,0.08)] border border-gray-50 transition-transform duration-300 group-hover:scale-110">
                                            <Image
                                                src={item.flag}
                                                alt={item.name}
                                                width={55}
                                                height={55}
                                                className="object-cover w-full h-full"
                                            />
                                        </div>
                                        <p className="text-[13px] md:text-sm font-medium text-[#4A4A4A] text-center whitespace-nowrap">
                                            {item.name}
                                        </p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </section>

                {/* Journey Section */}
                <section className="py-12 md:py-20 bg-[#F4F7F8]">
                    <div className="container mx-auto px-4">
                        <div className='flex flex-col md:flex-row items-center gap-8 mb-12 md:mb-20'>
                            <div className='w-full md:w-[65%] fadeLeft'>
                                <div className='lg:pr-20 md:pr-10'>
                                    <div className='text-[#0B2E3C] uppercase text-sm font-semibold tracking-widest mb-4'>
                                        Explore Our Journey
                                    </div>
                                    <div className='text-[#4A4A4A] text-base md:text-lg leading-relaxed relative pl-6'>
                                        <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#00CFB2]" />
                                        <div>
                                            From final goodbyes to the first taste of independence, see our students off as they depart for top-tier medical universities worldwide.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full md:w-[35%] flex justify-center md:justify-end fadePopup'>
                                <div className='text-[#00CFB212] text-[80px] md:text-[100px] lg:text-[150px] font-bold leading-none'>
                                    {activeYear}
                                </div>
                            </div>
                        </div>

                        {/* Year Navigation */}
                        <div className="flex justify-end items-center gap-4 mb-12 relative z-2">
                            <button
                                onClick={() => setYearIndex((i) => Math.max(i - 1, 0))}
                                disabled={yearIndex === 0}
                                className="w-10 h-10 cursor-pointer rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center disabled:opacity-40 hover:border-black transition-colors"
                                aria-label="Previous year"
                            >
                                <i className="pi pi-arrow-left text-black"></i>
                            </button>

                            <span className="text-[#005A8B] font-bold text-xl min-w-[50px] text-center">
                                {activeYear}
                            </span>

                            <button
                                onClick={() => setYearIndex((i) => Math.min(i + 1, years.length - 1))}
                                disabled={yearIndex === years.length - 1}
                                className="w-10 h-10 cursor-pointer rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center disabled:opacity-40 hover:border-black transition-colors"
                                aria-label="Next year"
                            >
                                <i className="pi pi-arrow-right text-black"></i>
                            </button>
                        </div>

                        {/* Gallery Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 mb-20 fadeUp">
                            {galleryData[activeYear].map((item, index) => (
                                <GalleryCard
                                    key={index}
                                    item={item}
                                    isActive={
                                        activeYear === currentYear && item.month === currentMonth
                                    }
                                    onClick={() => setModalEvents(item.events)}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Counselor Section Wrapper */}
                <div className="mb-20">
                    <CounselorSection />
                </div>

                {modalEvents && (
                    <GalleryModal
                        visible
                        events={modalEvents}
                        onHide={() => setModalEvents(null)}
                    />
                )}
            </div>
        </>
    );
}
