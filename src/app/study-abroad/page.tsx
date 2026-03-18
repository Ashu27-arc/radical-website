"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css/pagination';
import { Button } from "primereact/button";

export default function StudyAbroadPage() {
    const [showAllCountries, setShowAllCountries] = useState(false);

    const countries = [
        { name: "NEPAL", flag: "/images/study-abroad/flags/nepal.webp", slug: "nepal" },
        { name: "RUSSIA", flag: "/images/study-abroad/flags/russia.webp", slug: "russia" },
        { name: "GEORGIA", flag: "/images/study-abroad/flags/georgia.webp", slug: "georgia" },
        { name: "BANGLADESH", flag: "/images/study-abroad/flags/bangladesh.webp", slug: "bangladesh" },
        { name: "SINGAPORE", flag: "/images/study-abroad/flags/singapore.webp", slug: "singapore" },
        { name: "KAZAKHSTAN", flag: "/images/study-abroad/flags/kazakhstan.webp", slug: "kazakhstan" },
        { name: "UZBEKISTAN", flag: "/images/study-abroad/flags/uzbekistan.webp", slug: "uzbekistan" },
        { name: "KYRGYZSTAN", flag: "/images/study-abroad/flags/kyrgyzstan.webp", slug: "kyrgyzstan" },
        { name: "ITALY", flag: "/images/study-abroad/flags/italy.webp", slug: "italy" }
    ];

    const features = [
        "Agents Verification Available",
        "Agents Qualification Verification Available",
        "Agents Qualification Available",
        "Agents Qualification Available",
        "Agents Qualification Services Available with call",
        "Agents Qualification Services",
        "Agents Qualification Services Available with call"
    ];

    const testimonials = [
        {
            image: "/images/study-abroad/story.webp",
            title: "Successful Admission"
        },
        {
            image: "/images/study-abroad/story-1.webp",
            title: "PRINCE'S SPOT MBBS SEAT POINT WITH"
        },
        {
            image: "/images/study-abroad/story-2.webp",
            title: "Successful Admission"
        }
    ];

    const videos = [
        {
            id: 1,
            title: 'Successful Admission',
            youtubeId: 'jfq8RbTIrtI',
        },
        {
            id: 2,
            title: "Ishika's Govt. MBBS Seat Journey",
            youtubeId: 'hwYjHX5pk9w',
        },
        {
            id: 3,
            title: 'Successful Admission',
            youtubeId: 'CxDL_T4CWs8',
        },
    ];

    return (
        <div className="min-h-screen bg-[#F4F7F8]">
            <FloatingWhatsApp />
            <section className="lg:py-50 md:py-40 py-20 relative overflow-hidden z-2 bg-[url('/images/study-abroad-hero.webp')] bg-cover bg-center bg-no-repeat">
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,126,200,1)_0%,rgba(80,166,217,1)_20%,rgba(255,255,255,0)_87%)] -z-1" />
                <div className="container px-3 md:px-4 fadeUp">
                    <div className="w-full lg:w-4/10 md:8/10 md:text-left text-center">
                        <h1 className="uppercase lg:text-5xl text-4xl font-bold text-white lg:mb-4 mb-2">STUDY ABROAD</h1>
                        <h3 className="text-3xl font-bold text-white lg:mb-6 mb-4">Admission Services</h3>
                        <p className="text-white text-lg m-0 p-0">NEPAL | RUSSIA | GEORGIA | SINGAPORE | BANGLADESH | UZBEKISTAN | KAZAKHSTAN | KYRGYZSTAN | ITALY</p>
                    </div>
                </div>
            </section>

            {/* Countries Section */}
            <div className="container mx-auto px-4 py-10 sm:py-12 lg:py-16">
                <div className="flex flex-col lg:flex-row items-start justify-between gap-4 sm:gap-8">
                    {/* Left side - Countries and Heading */}
                    <div className="lg:w-1/2">
                        <p className="text-gray-600 mb-2 text-sm sm:text-base font-semibold">COUNTRIES</p>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">STUDY ABROAD</h2>
                    </div>

                    {/* Right side - Description */}
                    <div className="lg:w-1/2">
                        <p className="text-gray-600 text-sm sm:text-base">
                            Discover a World Where you can Experience a Life, that You have
                            never Experienced, and Become what you have never Imagined.
                        </p>
                    </div>
                </div>
            </div>

            <section className="py-8 bg-white mb-10 lg:mb-20">
                <div className="study-abroadCuntrySlider">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={30}
                        loop={true}
                        speed={7000}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 3,
                            },
                            480: {
                                slidesPerView: 4,
                            },
                            768: {
                                slidesPerView: 5,
                            },
                            1024: {
                                slidesPerView: 7,
                            },
                        }}
                        className="!ease-linear"
                    >
                        {countries.map((country, index) => (
                            <SwiperSlide key={index}>
                                <div className="text-center flex flex-col items-center">
                                    <Link
                                        href={`/mbbs-abroad-admission/`}
                                        className="block group"
                                    >
                                        <div className="transition-all hover:scale-110 duration-300">
                                            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden shadow-lg mx-auto">
                                                <Image
                                                    src={country.flag}
                                                    alt={`${country.name} flag`}
                                                    width={96}
                                                    height={96}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                    </Link>
                                    <h3 className="font-semibold text-gray-800 mt-2 md:mt-3 text-xs md:text-sm">
                                        {country.name}
                                    </h3>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>


            <section className="py-10 lg:py-15 overflow-hidden bg-[#F4F7F8]">
                <div className="container px-3 md:px-4 lg:px-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:gap-30">
                        <div className="relative">
                            <Image src="/images/csdcsdcs.webp" width="572" height="764" className="move-x w-full max-w-[430px] h-auto" alt="" />
                        </div>
                        <div>
                            <div
                                style={{
                                    backgroundImage: "url('/images/borderShape3.webp')",
                                }}
                                className={`group prcCardStyle1 fadeUp overflow-hidden relative z-1 rounded-2xl border-2 border-[#42ACCF] hover:border-[#007EC8] bg-[#D3F4FF] hover:bg-[#B8EAFB] p-6 lg:px-6 lg:py-8 shadow-md hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 cursor-pointer`}
                            >
                                <div className="text-lg font-semibold text-[#0B2E3C] group-hover:text-[#005787] uppercase transition-colors duration-300">Standard</div>
                                <div className="text-xs text-[#0B2E3C] group-hover:text-[#005787] mb-6 transition-colors duration-300">I designed a web UI for an AI-powered HR Co-Pil I </div>
                                <div className="font-bold lg:text-5xl text-4xl mb-8 group-hover:text-[#005787] transition-colors duration-300">₹ 9,999</div>
                                <div className="text-xs text-[#0B2E3C] group-hover:text-[#005787] mb-5 transition-colors duration-300">Features</div>
                                <ul className="space-y-4 text-sm text-gray-700 mb-8">
                                    {features.map((item, index) => (
                                        <li key={index} className="flex gap-2">
                                            <span className="text-yellow-500 group-hover:text-[#007EC8] transition-colors duration-300">✦</span>
                                            <span className="group-hover:text-[#0B2E3C] transition-colors duration-300">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex flex-col gap-3">
                                    <Button className="text-[#005787]! border-[#DFF1FF]! bg-[#DFF1FF]! group-hover:bg-[#005787]! group-hover:text-white! group-hover:border-[#005787]! w-full flex gap-2 items-center transition-all duration-300" rounded>
                                        Pay now <i className="pi pi-arrow-right"></i>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container px-3 md:px-4 pb-20">
                <div className="p-8 rounded-xl bg-[url('/images/addmi.webp')] bg-cover bg-center bg-no-repeat mb-6">
                    <div className="flex flex-wrap gap-2 fadeUp items-end justify-center">
                        <div className="text-white lg:text-4xl text-2xl font-bold">Admission Service Charge :-</div><br className="md:hidden block" />
                        <div className="font-light text-[#CACACA] relative -top-0.5 line-through">₹ 1,29,999 </div>
                        <div className="font-bold lg:text-4xl text-2xl py-1 px-2 bg-white text-[#FF0000] font-semibold">₹ 99,999/-</div>
                    </div>
                    <div className="text-center mt-8 fadeUp">
                        <Button size="small" label="BUY NOW" className='text-white! bg-[#005787]! border-[#005787]! hover:bg-[#004469]! hover:shadow-2xl hover:scale-105 transition-all hover:animate-none' rounded />
                    </div>
                </div>
                <div className="max-w-5xl mx-auto px-4">
                    <div className="mt-3 sm:mt-4 md:mt-6 bg-white border-2 border-dashed border-gray-300 rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 lg:p-6">
                        <div className="space-y-1 sm:space-y-2">
                            <div className="flex items-start gap-1 sm:gap-2">
                                <span className="text-red-500 font-bold flex-shrink-0 text-xs sm:text-sm md:text-base">Note:-</span>
                                <div className="space-y-1 text-xs sm:text-sm md:text-base">
                                    <p className="text-green-600">
                                        1. This Service Charge Includes The Visa Charges But Does Not Cover The Ticket Charges.
                                    </p>
                                    <p className="text-green-600">
                                        2. Get The Offer Price 99,999 Before NEET Result
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Success Stories Section */}
            <div className="py-6 sm:py-8 md:py-12 lg:py-16 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <div className='mb-10 fadeUp text-center'>
                        <h2 className='text-black text-4xl font-bold mb-4'>OUR <span className='text-[#287FC4]'>SUCESSFUL STORIES</span></h2>
                        <div className='uppercase text-[#00CFB240] leading-12 text-[42px] md:text-5xl lg:text-7xl font-black'>HEAR FORM OUR STUDENT</div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3 grid-cols-1">
                        {videos.map((video) => (
                            <div
                                key={video.id}
                                className="fadeUp relative min-w-[340px] h-[240px] rounded-xl overflow-hidden shadow-lg"
                            >
                                {/* YouTube Video */}
                                <iframe
                                    className="absolute inset-0 w-full h-[240px]"
                                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                                    title={video.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}