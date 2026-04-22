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
        "Scholarship Guidance",
        "Post-Arrival Support",
        "Accommodation Help",
        "Part-time Job Assistance"
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
                <div className="container px-6 md:px-12 lg:px-20 fadeUp">
                    <div className="w-full lg:w-4/10 md:8/10 md:text-left text-center">
                        <h1 className="uppercase lg:text-5xl text-4xl font-bold text-white lg:mb-4 mb-2">STUDY ABROAD</h1>
                        <h3 className="text-3xl font-bold text-white lg:mb-6 mb-4">Admission Services</h3>
                        <p className="text-white text-lg m-0 p-0">Radical Education is your personalised gateway to a successful medical career. Get expert guidance, clear processes, and authentic information to secure your MBBS seat with confidence.</p>
                    </div>
                </div>
            </section>

            <section className="mb-10 lg:mb-20">
                <div className="bg-white py-12 md:py-16">
                    <div className="container mx-auto px-4 mb-10 text-center">
                        <h2 className="text-3xl md:text-[16px] font-medium font-weight-500 text-gray-900 mb-4 text-left">Our Students are Everywhere.</h2>
                    </div>
                    <div className="study-abroadCuntrySlider overflow-hidden">
                        <Swiper
                            modules={[Autoplay, Pagination]}
                            spaceBetween={30}
                            loop={true}
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
                            className="!ease-linear"
                        >
                            {countries.map((country, index) => (
                                <SwiperSlide key={index}>
                                    <div className="text-center flex flex-col items-center">
                                        <Link
                                            href={`/mbbs-abroad-admission/`}
                                            className="block group"
                                        >
                                            <div className="transition-all hover:scale-110 duration-300 p-4">
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
                </div>
                {/* Custom Pagination outside white section */}
                <div className="swiper-pagination-custom flex justify-center mt-6 !static"></div>
            </section>


            <section className="py-10 lg:py-15 overflow-hidden bg-[#F4F7F8]">
                <div className="container px-6 md:px-12 lg:px-20 max-w-[1010px]!">
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 lg:gap-12 mb-16">
                        <div className="relative h-full">
                            <Image src="/images/study-abroad/studyAbroad.svg" width="572" height="764" className="w-full h-full object-cover rounded-2xl" alt="" />
                        </div>
                        <div className="h-full">
                            <div
                                className="fadeUp relative z-10 rounded-2xl pt-16 pb-8 px-8 shadow-xl bg-white h-full flex flex-col"
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
                                <div className="flex flex-col gap-3 mb-10">
                                    <Button className="text-white! border-[#DFF1FF]! bg-[#7061C0]! w-full flex gap-2 items-center" rounded>
                                        Pay Now
                                    </Button>
                                </div>
                                <div className="text-base text-black font-semibold mb-5">Features</div>
                                <div className="flex-1 min-h-0 overflow-hidden relative">
                                    <ul className={`space-y-4 text-sm text-[#686767] transition-all duration-300 ${showAllFeatures ? 'max-h-[280px] overflow-y-auto pr-2' : 'max-h-[160px] overflow-hidden'}`}>
                                        {(showAllFeatures ? features : features.slice(0, 4)).map((item, index) => (
                                            <li key={index} className="flex gap-2">
                                                <span className="text-yellow-500">✦</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    {!showAllFeatures && features.length > 4 && (
                                        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent pointer-events-none" />
                                    )}
                                </div>
                                {features.length > 4 && (
                                    <button
                                        onClick={() => setShowAllFeatures(!showAllFeatures)}
                                        className="mt-6 text-sm font-semibold text-[#005A88] flex items-center justify-between w-full border-t pt-4"
                                    >
                                        <span>{showAllFeatures ? 'View Less' : 'View More'}</span>
                                        <Image
                                            src="/svg/down-circle-arrow.svg"
                                            alt="arrow"
                                            width={32}
                                            height={32}
                                            className={`transition-all duration-300 ${showAllFeatures ? 'rotate-180' : ''}`}
                                        />
                                    </button>
                                )}
                                <div className="mt-4">
                                    <div className="flex gap-2 items-start">
                                        <span className="text-[#1D1D1D] font-semibold text-[12px] uppercase tracking-wider mt-0.5">Note:</span>
                                        <p className="text-[12px] font-weight-600 font-semibold leading-relaxed text-[#6E67C9] poppins">
                                            This service charge includes the Visa charges but <span className="font-normal font-weight-400 text-[#6E67C9] text-[12px]">does not cover the ticket charges.</span>
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
                                src="/images/banner-neet-bhaiya.webp"
                                alt="NEET UG Banner"
                                fill
                                className="object-cover"
                            />
                        </Link>

                        {/* Play Store Button Overlay */}
                        <div
                            className="absolute left-[7.3%] bottom-9 lg:bottom-12 md:bottom-5 h-[41px] z-10 hover:scale-105 transition-transform"
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
                            className="absolute left-[15.5%] md:left-[19%] md:bottom-4 bottom-8 lg:bottom-11 h-[45px] z-10 hover:scale-105 transition-transform"
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