"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import { Button } from "primereact/button";

export default function StudyAbroadPage() {
    const [showAllCountries, setShowAllCountries] = useState(false);
    const [showAllFeatures, setShowAllFeatures] = useState(false);
    const [videoPopup, setVideoPopup] = useState<{ id: number; title: string; youtubeId: string } | null>(null);

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
        "University Selection",
        "Offer Letter",
        "Admission Assistance",
        "Documentation Assistance",
        "Pre- Departure Guidance",
        "Education Loan",
        "Travel Assistance",
        "Currency exchange Support",
        "Health Insurance",
        "Internship Support",
        "Flight Ticket Booking",
        "Documentation Attestation",
        // "Scholarship Guidance",
        // "Post-Arrival Support",
        // "Accommodation Help",
        // "Part-time Job Assistance"
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
            title: 'Tanishka Rana, TVER',
            youtubeId: 'Fccp8dm3ewA',
        },
        {
            id: 2,
            title: 'Mayank Kumar, TVER',
            youtubeId: 'Vr6ZZQ3jVH8',
        },
        {
            id: 3,
            title: 'Mayank’s Proud Parent, TVER',
            youtubeId: 'WP7BbcvkLL0',
        },
        {
            id: 4,
            title: 'Aseem, Asfendiyarov Kazakh National Medical University, Kazakhstan',
            youtubeId: '6DJoje1YFI4',
        },
        {
            id: 5,
            title: 'Daksh Moom, OSH INTERNATIONAL MEDICAL UNIVERSITY, Kyrgyzstan',
            youtubeId: 'Eip7W83K8YQ',
        },
        {
            id: 6,
            title: 'Riddhi Singh, KSMU, Russia',
            youtubeId: 'FWEyO03eG90',
        },
        {
            id: 7,
            title: 'TANJINA NASRIN CHOUDHURY, OSH INTERNATIONAL MEDICAL UNIVERSITY, Kyrgyzstan',
            youtubeId: 'E0-uSX-dabA',
        },
    ];

    return (
        <div className="min-h-screen bg-[#F4F7F8]">
            <FloatingWhatsApp />
            <section className="lg:py-50 md:py-40 py-20 relative overflow-hidden z-2 bg-[url('/images/study-abroad-hero.webp')] bg-cover bg-center bg-no-repeat">
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,126,200,1)_0%,rgba(80,166,217,1)_20%,rgba(255,255,255,0)_87%)] -z-1" />
                <div className="container px-6 md:px-12 lg:px-20 fadeUp">
                    <div className="w-full lg:w-4/10 md:8/10 md:text-left text-center">
                        <h1 className="uppercase lg:text-5xl text-4xl font-bold text-white lg:mb-4 mb-2">STUDY ABROAD</h1>
                        <h3 className="text-3xl font-bold text-white lg:mb-6 mb-4">Admission Services</h3>
                        <p className="text-white text-lg m-0 p-0">Radical Education is your personalised gateway to a successful medical career. Get expert guidance, clear processes, and authentic information to secure your MBBS seat with confidence.</p>
                    </div>
                </div>
            </section>

            <section className="mb-10 lg:mb-20">
                <div className="bg-white py-12 md:py-16 border-y border-gray-200">
                    <div className="w-full text-center">
                        <div className="container mx-auto px-4 md:px-6 lg:px-8 mb-10">
                            <h2 className="text-3xl md:text-[16px] font-medium font-weight-500 text-gray-900 mb-4 text-left">Our Students are Everywhere.</h2>
                        </div>
                        <div className="study-abroadCuntrySlider overflow-hidden w-full">
                            <Swiper
                                modules={[Autoplay, Pagination]}
                                spaceBetween={8}
                                loop={true}
                                slidesPerGroup={3}
                                pagination={{
                                    clickable: true,
                                    el: '.swiper-pagination-custom',
                                }}
                                speed={3000}
                                autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: false,
                                }}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 3,
                                    },
                                    360: {
                                        slidesPerView: 4,
                                    },
                                    480: {
                                        slidesPerView: 5,
                                    },
                                    768: {
                                        slidesPerView: 7,
                                    },
                                    1024: {
                                        slidesPerView: 9,
                                    },
                                }}
                                className="!ease-linear"
                            >
                                {[...countries, ...countries].map((country, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="text-center flex flex-col items-center">
                                            <Link
                                                href={`/mbbs-abroad-admission/`}
                                                className="block group"
                                            >
                                                <div className="transition-all hover:scale-110 duration-300 p-2">
                                                    <div className="w-[52px] h-[52px] sm:w-[58px] sm:h-[58px] md:w-[64px] md:h-[64px] lg:w-[68px] lg:h-[68px] rounded-[10px] overflow-hidden shadow-lg mx-auto bg-white relative border border-gray-100 flex items-center justify-center">
                                                        <Image
                                                            src={country.flag}
                                                            alt={`${country.name} flag`}
                                                            width={68}
                                                            height={68}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                </div>
                                            </Link>
                                            <h3 className="font-semibold text-gray-800 mt-0 md:mt-1 text-[10px] sm:text-xs md:text-sm">
                                                {country.name}
                                            </h3>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
                {/* Custom Pagination outside white section */}
                <div className="swiper-pagination-custom flex justify-center mt-6 !static"></div>
                <style dangerouslySetInnerHTML={{__html: `
                    .swiper-pagination-custom .swiper-pagination-bullet:nth-child(n+5) {
                        display: none !important;
                    }
                    .swiper-pagination-custom:has(.swiper-pagination-bullet:nth-child(5).swiper-pagination-bullet-active) .swiper-pagination-bullet:nth-child(1),
                    .swiper-pagination-custom:has(.swiper-pagination-bullet:nth-child(6).swiper-pagination-bullet-active) .swiper-pagination-bullet:nth-child(2) {
                        opacity: var(--swiper-pagination-bullet-opacity, 1) !important;
                        background: var(--swiper-pagination-color, var(--swiper-theme-color)) !important;
                    }
                `}} />
            </section>


            <section className="py-10 lg:py-15 overflow-hidden bg-[#F4F7F8]">
                <div className="container px-6 md:px-12 lg:px-20 max-w-[1240px]!">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8 mb-16 items-stretch">
                        <div className="flex flex-col w-full md:w-[443px] md:h-[768.23px] px-12 pt-12 bg-cover bg-center bg-no-repeat rounded-2xl md:ml-auto md:mr-0 mx-auto" style={{ backgroundImage: "url('/images/study-bg.webp')" }}>
                            <div className="md:pr-0 pr-6 mb-6">
                                <h3 className="text-white mb-5 text-3xl font-light">Study Abroad. <span className="font-medium block">But do it smart.</span></h3>
                                <div className="text-white text-[14px] font-normal mb-3 font-weight-400">Your future isn’t average. <br />Your decisions shouldn’t be either. </div>
                                <div className="text-white text-[14px] font-normal font-weight-400">Get expert-guided admission into top international universities with zero confusion, zero guesswork.</div>
                            </div>
                            <Image src="/images/study-img.webp" width="333" height="416" className="w-full h-auto mt-auto" alt="" />
                        </div>
                        <div className="">
                            <div
                                className="fadeUp relative z-10 rounded-2xl pt-16 pb-8 px-8 shadow-xl bg-white flex flex-col w-full md:w-[425px] md:min-h-[768.23px] md:ml-0 md:mr-auto mx-auto"
                            >
                                <div className="absolute left-1/2 -translate-x-1/2 -top-[35px] border-[8px] border-[#F4F7F8] rounded-full">
                                    <img
                                        src="/images/st4.svg"
                                        alt=""
                                        className="w-16 h-16 object-contain"
                                    />
                                </div>
                                <div className="text-center mb-3 text-lg font-semibold text-black">Standard</div>
                                <div className="text-center text-xs text-[#686767] mb-6">Start Your Global Medical Journey <br /> with End-to-End Expert Support. </div>
                                <div className="flex justify-center mb-8">
                                    <div className="relative w-[237px] h-[112px] border-[4px] border-[#7358B33B] rounded-[20px] flex flex-col items-center justify-center">
                                        <div className="text-center font-semibold font-weight-600 lg:text-4xl text-black text-3xl">₹ 99,999</div>
                                        <div className="text-[14px] font-normal font-weight-400 text-[#7061C0] mt-1 text-center">Admission service charge <span className="font-bold font-weight-700 text-[#7061C0]">before NEET result</span></div>
                                        <div className="absolute -top-5 -right-5 w-12 h-12">
                                            <img src="/images/study-abroad/corner.svg" alt="" className="w-full h-full object-contain" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3 mb-6">
                                    <Button className="text-white! border-[#DFF1FF]! bg-[#7061C0]! w-full flex gap-2 items-center" rounded>
                                        Pay Now
                                    </Button>
                                </div>
                                <div className="text-base text-black font-semibold mb-5">Features</div>
                                <div className="relative">
                                    <ul className={`space-y-4 text-sm text-[#686767] transition-all duration-700 ease-in-out overflow-hidden ${showAllFeatures ? 'max-h-[800px] opacity-100' : 'max-h-[210px]'}`}>
                                        {(showAllFeatures ? features : features.slice(0, 6)).map((item, index) => (
                                            <li key={index} className="flex gap-2">
                                                <span className="text-yellow-500">✦</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    {!showAllFeatures && features.length > 3 && (
                                        <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-white to-transparent pointer-events-none" />
                                    )}
                                </div>
                                {features.length > 3 && (
                                    <button
                                        onClick={() => setShowAllFeatures(!showAllFeatures)}
                                        className="mt-6 text-[16px] font-normal font-weight-500 text-[#005A88] flex items-center justify-between w-full"
                                    >
                                        <span>{showAllFeatures ? 'View Less' : 'View More'}</span>
                                        <Image
                                            src="/svg/down-circle-arrow.svg"
                                            alt="arrow"
                                            width={25}
                                            height={25}
                                            className={`transition-all duration-300 ${showAllFeatures ? 'rotate-180' : ''}`}
                                        />
                                    </button>
                                )}
                                <div className="mt-auto pt-4">
                                    <div className="flex gap-2 items-start">
                                        <span className="text-[#1D1D1D] font-semibold text-[12px] uppercase tracking-wider mt-0.5">Note:</span>
                                        <p className="text-[12px] font-weight-600 text-[#6E67C9] poppins">
                                            This service charge includes the Visa charges but <br />
                                            <span className="font-semibold font-weight-400 text-[#6E67C9] text-[12px]"> does not cover the ticket charges.</span>
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mb-16">
                <div className="container px-6 md:px-12 lg:px-20">
                    <div className="relative w-full aspect-[1240/350] rounded-2xl overflow-hidden shadow-lg cursor-pointer">
                        {/* Base Banner Link */}
                        <Link href="https://neetbhaiya.in" target="_blank" className="block w-full h-full">
                            <Image
                                src="/images/packages-nb-banner.webp"
                                alt="NEET UG Banner"
                                fill
                                className="object-cover"
                            />
                        </Link>

                        <div className="flex gap-2 absolute left-[7.3%] bottom-2.5 md:bottom-5 lg:bottom-7 xl:bottom-10 w-[135px] md:w-[200px] lg:w-[250px] xl:w-[300px]">
                            <div className="hover:scale-105 transition-transform w-full">
                                <Link
                                    href="https://play.google.com/store/apps/details?id=com.kaveka.NeetBhaiya"
                                    target="_blank"
                                    className="block w-full h-full"
                                >
                                    <Image
                                        src="/svg/play-store.svg"
                                        alt="Google Play Store"
                                        width={131}
                                        height={37}
                                        className="object-contain w-full h-full"
                                    />
                                </Link>
                            </div>
                            <div className="hover:scale-105 transition-transform w-full mt-0.5">
                                <Link
                                    href="https://apps.apple.com/in/app/neet-bhaiya/id6737535565"
                                    target="_blank"
                                    className="block w-full h-full"
                                >
                                    <Image
                                        src="/svg/app-store.svg"
                                        alt="App Store"
                                        width={131}
                                        height={37}
                                        className="object-contain w-full h-full"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Success Stories Section */}
            <div className="py-6 sm:py-8 md:py-12 lg:py-16">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
                    <div className='mb-10 fadeUp text-center'>
                        <h2 className='text-black text-4xl font-bold mb-4'>OUR <span className='text-[#287FC4]'>SUCCESSFUL STORIES</span></h2>
                        <div className='uppercase text-[#00CFB240] leading-12 text-[42px] md:text-5xl lg:text-7xl font-black'>HEAR FROM OUR STUDENTS</div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 grid-cols-1">
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
        </div>
    );
}