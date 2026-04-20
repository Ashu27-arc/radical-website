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
        "Documentation Attestation"
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
            title: 'Mayank Kumar',
            youtubeId: 'Vr6ZZQ3jVH8',
        },
        {
            id: 2,
            title: "Tanishka",
            youtubeId: 'Fccp8dm3ewA',
        },
        {
            id: 3,
            title: 'Daksh',
            youtubeId: 'Eip7W83K8YQ',
        },
        {
            id: 4,
            title: '',
            youtubeId: '6DJoje1YFI4',
        },
        {
            id: 5,
            title: 'Aseem',
            youtubeId: 'E0-uSX-dabA',
        },
        {
            id: 6,
            title: '',
            youtubeId: 'd6xSZh_IBCc',
        },
        {
            id: 7,
            title: '',
            youtubeId: 'FWEyO03eG90',
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
                        <p className="text-white text-lg m-0 p-0">Radical Education is your personalised gateway to a successful medical career. Get expert guidance, clear processes, and authentic information to secure your MBBS seat with confidence.</p>
                    </div>
                </div>
            </section>

            {/* Countries Section */}
            <div className="container mx-auto px-4 py-10 sm:py-12 lg:py-16">
                <div className="flex flex-col lg:flex-row items-start justify-between gap-4 sm:gap-8">
                    {/* Left side - Countries and Heading */}
                    <div className="lg:w-1/2">
                        {/* <p className="text-gray-600 mb-2 text-sm sm:text-base font-semibold">COUNTRIES</p> */}
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Global Education,
                            Made Simple.</h2>
                    </div>

                    {/* Right side - Description */}
                    <div className="lg:w-1/2">
                        <p className="text-gray-600 text-sm sm:text-base">
                            Transform your perspective with life-changing study abroad experiences. Gain the international experience, language skills, and global network that top employers are looking for. Your journey to a world-class degree starts here.
                        </p>
                    </div>
                </div>
            </div>

            <section className="py-10 bg-white mb-10 lg:mb-20">
                <div className="study-abroadCuntrySlider overflow-hidden">
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
                                slidesPerView: 2,
                            },
                            480: {
                                slidesPerView: 3,
                            },
                            768: {
                                slidesPerView: 4,
                            },
                            1024: {
                                slidesPerView: 6,
                            },
                        }}
                        className="!ease-linear !overflow-visible"
                    >
                        {countries.map((country, index) => (
                            <SwiperSlide key={index} className="!overflow-visible">
                                <div className="text-center flex flex-col items-center">
                                    <Link
                                        href={`/mbbs-abroad-admission/`}
                                        className="block group"
                                    >
                                        <div className="transition-all hover:scale-110 duration-300 relative hover:z-[100] p-4">
                                            <div className="w-[100px] h-[85px] rounded-[10px] overflow-hidden shadow-lg mx-auto bg-white relative border border-gray-100">
                                                <Image
                                                    src={country.flag}
                                                    alt={`${country.name} flag`}
                                                    width={100}
                                                    height={85}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                    </Link>
                                    <h3 className="font-semibold text-gray-800 mt-0 md:mt-1 text-xs md:text-sm">
                                        {country.name}
                                    </h3>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>


            <section className="py-10 lg:py-15 overflow-hidden bg-[#F4F7F8]">
                <div className="container px-3 md:px-4 lg:px-20 max-w-[1010px]!">
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:gap-10 mb-16">
                        <div className="relative">
                            <Image src="/images/study-abroad/studyAbroad.svg" width="572" height="764" className="w-full h-auto" alt="" />
                        </div>
                        <div>
                            <div
                                className="group fadeUp relative z-10 rounded-2xl pt-16 pb-8 px-6 shadow-xl transition-all duration-500 bg-white hover:shadow-2xl hover:bg-[linear-gradient(163.56deg,_#02CCB2_6.49%,_#0080C8_98.8%)] transition-all duration-300 hover:text-white"
                            >
                                <div className="absolute left-1/2 -translate-x-1/2 -top-[35px] border-[8px] border-[#F4F7F8] rounded-full">
                                    <img
                                        src="/images/st4.svg"
                                        alt=""
                                        className="w-16 h-16 object-contain"
                                    />
                                </div>
                                <div className="text-center mb-3 text-lg font-semibold text-black group-hover:text-white! transition-colors duration-300">Standard</div>
                                <div className="text-center text-xs text-[#686767] group-hover:text-white! transition-colors duration-300 mb-6">Start Your Global Medical Journey <br /> with End-to-End Expert Support. </div>
                                <div className="flex justify-center mb-8">
                                    <div className="relative w-[237px] h-[112px] border-[4px] border-[#0095C2] rounded-[20px] flex flex-col items-center justify-center transition-colors duration-300">
                                        <div className="text-center font-light lg:text-4xl text-black text-3xl group-hover:text-white! transition-colors duration-300">₹ 99,999</div>
                                        <div className="text-[14px] font-semibold text-[#0095C2] group-hover:text-white! transition-colors duration-300 mt-1 uppercase">Admission Fee</div>
                                        <div className="absolute -top-5 -right-5 w-12 h-12">
                                            <img src="/images/study-abroad/corner.svg" alt="" className="w-full h-full object-contain" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3 mb-10">
                                    <Button className="text-[#005787]! border-[#DFF1FF]! bg-[#E5F3FF]! group-hover:bg-[#FFFFFF47]! group-hover:text-white! group-hover:border-[#FFFFFF47]! w-full flex gap-2 items-center transition-all duration-300" rounded>
                                        Pay Now
                                    </Button>
                                </div>
                                <div className="text-base text-black font-semibold group-hover:text-white! transition-colors duration-300 mb-5">Features</div>
                                <ul className="space-y-5 text-sm text-[#686767] mb-4">
                                    {features.map((item, index) => (
                                        <li key={index} className="flex gap-2">
                                            <span className="text-yellow-500 transition-colors duration-300">✦</span>
                                            <span className="group-hover:text-white transition-colors duration-300">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                            </div>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mb-10 items-center">
                        <div className="flex flex-wrap gap-2 fadeUp items-end md:justify-start justify-center">
                            <div className="text-[#0B2E3C] text-2xl font-bold">Admission Service Charge :-</div>
                        </div>
                        <div className="flex flex-wrap lg:gap-6 gap-3 items-center justify-center md:justify-end fadeUp">
                            <div className="font-light text-[#BDBCBC] line-through text-xl">₹ 1,29,999 </div>
                            <div className="lg:text-2xl py-3 px-8 rounded-lg text-white font-semibold bg-[#0095C2]">₹ 99,999</div>
                        </div>
                    </div>
                    {/* <div className="bg-white rounded-lg sm:rounded-xl p-6 lg:p-8">
                        <div className="space-y-1 sm:space-y-2">
                            <div className="flex items-start gap-2">
                                <span className="text-black flex-shrink-0 text-xs sm:text-sm md:text-base">Note:</span>
                                <div className="space-y-1 text-xs sm:text-sm md:text-base">
                                    <p className="text-[#2CBF0F]">
                                        1. This service charge includes the Visa charges but does not cover the Ticket charges.
                                    </p>
                                    <p className="text-[#2CBF0F]">
                                        2. Get the offer price 99,999 before NEET Result
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>


            {/* Success Stories Section */}
            <div className="py-6 sm:py-8 md:py-12 lg:py-16">
                <div className="container mx-auto px-4 text-center">
                    <div className='mb-10 fadeUp text-center'>
                        <h2 className='text-black text-4xl font-bold mb-4'>OUR <span className='text-[#287FC4]'>SUCCESSFUL STORIES</span></h2>
                        <div className='uppercase text-[#00CFB240] leading-12 text-[42px] md:text-5xl lg:text-7xl font-black'>HEAR FROM OUR STUDENT</div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3 grid-cols-1">
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