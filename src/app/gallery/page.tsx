'use client';
//import { Image } from "primereact/image";
import Image from "next/image";
import CounselorForm from "@/components/CounselorForm";
import CounselorSection from "@/components/CounselorSection";
import { Swiper, SwiperSlide } from 'swiper/react';

import { galleryData } from "@/data/galleryData";
import { useEffect, useState } from "react";
import GalleryModal from "@/components/gallery/GalleryModal";
import GalleryCard from "@/components/gallery/GalleryCard";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const countries = [
    { name: 'India', flag: '/images/india.webp' },
    { name: 'Nepal', flag: '/images/nepal.webp' },
    { name: 'Kyrgyzstan', flag: '/images/kyrgyzstan.webp' },
    { name: 'Russia', flag: '/images/russia.webp' },
    { name: 'Kazakhstan', flag: '/images/kazakhstan.webp' },
    { name: 'Georgia', flag: '/images/georgia.webp' },
    { name: 'Singapore', flag: '/images/singapore.webp' },
    { name: 'Bangladesh', flag: '/images/bangladesh.webp' },
    { name: 'Uzbekistan', flag: '/images/uzbekistan.webp' },
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

                <section className="bg-[#F4F7F8] pt-14">
                    <div className='container px-3 md:px-4'>
                        {/* <div className="text-[#0B2E3C] font-semibold mb-3 fadeUp">Select country</div> */}
                    </div>
                    <div className="bg-white py-4 fadeUp">
                        <div className='container px-3 md:px-4'>
                            <Swiper
                                spaceBetween={24}
                                slidesPerView={2}
                                breakpoints={{
                                    768: { slidesPerView: 4 },
                                    1024: { slidesPerView: 9 },
                                }}
                                className="w-full"
                            >
                                {countries.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="flex flex-col items-center gap-2">
                                            <div className="w-[85px] h-[60px] rounded-[15px] overflow-hidden shadow-sm bg-gray-50 flex items-center justify-center p-1.5">
                                                <Image
                                                    src={item.flag}
                                                    alt={item.name}
                                                    width={85}
                                                    height={60}
                                                    className="object-contain w-full h-full"
                                                />
                                            </div>
                                            <p className="text-sm font-medium text-gray-700 text-center">
                                                {item.name}
                                            </p>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
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
