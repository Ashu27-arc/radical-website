'use client';
//import { Image } from "primereact/image";
import Image from "next/image";
import CounselorForm from "@/components/CounselorForm";
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
    const years = Object.keys(galleryData).map(Number).sort();

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
                <section className="lg:py-60 md:py-40 py-20 relative overflow-hidden z-2 bg-[url('/images/galleryHero.webp')] bg-cover bg-center bg-no-repeat bg-fixed">
                    <div className="absolute inset-0 bg-black/50 -z-1" />
                    <div className="mx-auto px-4 w-full lg:w-4/10 md:8/10 text-center fadeUp">
                        <h1 className="uppercase lg:text-5xl text-4xl font-bold text-white lg:mb-6 mb-4">OUR GALLERY</h1>
                        <p className="text-white text-lg m-0 p-0">Explore our journey through the years as we help students achieve their medical career goals across the globe.</p>
                    </div>
                </section>

                <section className="bg-white pt-10">
                    <div className="container mx-auto px-4 fadeUp">
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
                            className="w-full pb-10"
                        >
                            {countries.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="flex flex-col items-center gap-3 cursor-pointer group">
                                        <div className="w-[55px] h-[55px] rounded-[18px] overflow-hidden flex items-center justify-center bg-white shadow-[0_4px_15px_rgba(0,0,0,0.08)] border border-gray-50 transition-transform duration-300 group-hover:scale-110">
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
                <section className="pt-20 pb-20 bg-[#F4F7F8] overflow-hidden">
                    <div className="container px-3 md:px-4">
                        <div className='flex flex-col md:flex-row gap-8'>
                            <div className='md:w-13/20 w-full fadeLeft'>
                                <div className='lg:pr-60 md:pr-10 lg:pl-6 pl-3 relative z-2'>
                                    <div className='text-[#0B2E3C] uppercase text-sm font-semibold tracking-widest mb-4 lg:mb-6'>Explore Our Journey</div>
                                    <div className='text-[#4A4A4A] mb-4 lg:mb-6 leading-7 relative'>
                                        <span className="absolute left-[-20px] top-0 bottom-0 w-[2px] bg-[#00CFB2]" />
                                        <div>Take a closer look at our milestones and the success stories of future doctors. Our team proudly supports students as they take the next step toward their global medical education.</div>
                                    </div>
                                </div>
                            </div>
                            <div className='md:w-7/20 w-full fadePopup'>
                                <div className='text-nowrap text-[#00CFB212] text-[80px] md:text-[100px] lg:text-[180px] font-bold leading-1 md:mt-16'>{activeYear}</div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-end items-center gap-4 mb-20 -mt-15 relative z-2">
                                <button
                                    onClick={() => setYearIndex((i) => Math.max(i - 1, 0))}
                                    disabled={yearIndex === 0}
                                    className="w-10 h-10 cursor-pointer rounded-full bg-transparent border border-black flex items-center justify-center disabled:opacity-40"
                                    aria-label="Previous year"
                                >
                                    <i className="pi pi-arrow-left text-black"></i>
                                </button>

                                <span className="text-[#005A8B] font-semibold text-lg">
                                    {activeYear}
                                </span>

                                <button
                                    onClick={() => setYearIndex((i) => Math.min(i + 1, years.length - 1))}
                                    disabled={yearIndex === years.length - 1}
                                    className="w-10 h-10 cursor-pointer rounded-full bg-transparent border border-black flex items-center justify-center disabled:opacity-40"
                                    aria-label="Next year"
                                >
                                    <i className="pi pi-arrow-right text-black"></i>
                                </button>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-30 mb-15 fadeUp">
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
                            {modalEvents && (
                                <GalleryModal
                                    visible
                                    events={modalEvents}
                                    onHide={() => setModalEvents(null)}
                                />
                            )}
                        </div>
                    </div>
                </section>
                <div className="my-20">
                    <CounselorSection />
                </div>
            </div>
        </>
    );
}
