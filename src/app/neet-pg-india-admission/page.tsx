"use client";

import Image from "next/image";
import { Button } from "primereact/button";
import { useEffect, useState } from "react";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import Link from "next/link";



const branches = [
    {
        title: "Pediatrics",
        icon: "/images/Pediatrics.webp",
        color: "#ecd5ff",
        bg: "bg-[#ecd5ff]"
    },
    {
        title: "Internal Medicine",
        icon: "/images/InternalMedicine.webp",
        color: "#ffe5eb",
        bg: "bg-[#ffe5eb]"
    },
    {
        title: "Orthopedics",
        icon: "/images/Orthopedics.webp",
        color: "#d0ffc5",
        bg: "bg-[#d0ffc5]"
    },
    {
        title: "Psychiatry",
        icon: "/images/Psychiatry.webp",
        color: "#ffe58f",
        bg: "bg-[#ffe58f]"
    },
    {
        title: "Radiology",
        icon: "/images/Radiology.webp",
        color: "#c4e9ff",
        bg: "bg-[#c4e9ff]"
    },
    {
        title: "Anatomy",
        icon: "/images/Anatomy.webp",
        color: "#d0ffc5",
        bg: "bg-[#d0ffc5]"
    },
    {
        title: "Medical Jurisprudence",
        icon: "/images/MedicalJurisprudence.webp",
        color: "#ecd5ff",
        bg: "bg-[#ecd5ff]"
    },
    {
        title: "Pathology",
        icon: "/images/Pathology.webp",
        color: "#ffe5eb",
        bg: "bg-[#ffe5eb]"
    },
    {
        title: "MS Obstetrics and Gyna..",
        icon: "/images/MS.webp",
        color: "#d0ffc5",
        bg: "bg-[#d0ffc5]"
    },
    {
        title: "Pharmacology",
        icon: "/images/Pharmacology.webp",
        color: "#ffe58f",
        bg: "bg-[#ffe58f]"
    },
    {
        title: "OBGYN",
        icon: "/images/OBGYN.webp",
        color: "#c4e9ff",
        bg: "bg-[#c4e9ff]"
    },
    {
        title: "Biochemistry",
        icon: "/images/Biochemistry.webp",
        color: "#d0ffc5",
        bg: "bg-[#d0ffc5]"
    },
    {
        title: "Community health",
        icon: "/images/CommunityHealth.webp",
        color: "#ecd5ff",
        bg: "bg-[#ecd5ff]"
    },
    {
        title: "Radiation therapy",
        icon: "/images/RadiationTherapy.webp",
        color: "#ffe5eb",
        bg: "bg-[#ffe5eb]"
    },
    {
        title: "Pulmonology",
        icon: "/images/Pulmonology.webp",
        color: "#d0ffc5",
        bg: "bg-[#d0ffc5]"
    },
    {
        title: "Cardiology",
        icon: "/images/Cardiology.webp",
        color: "#ffe58f",
        bg: "bg-[#ffe58f]"
    },
    {
        title: "Oncology",
        icon: "/images/Oncology.webp",
        color: "#c4e9ff",
        bg: "bg-[#c4e9ff]"
    },
    {
        title: "Ophthalmology",
        icon: "/images/Ophthalmology.webp",
        color: "#d0ffc5",
        bg: "bg-[#d0ffc5]"
    },
    {
        title: "Nuclear medicine",
        icon: "/images/NuclearMedicine.webp",
        color: "#ecd5ff",
        bg: "bg-[#ecd5ff]"
    },
    {
        title: "Dermatology",
        icon: "/images/Dermatology.webp",
        color: "#ffe5eb",
        bg: "bg-[#ffe5eb]"
    },
    {
        title: "Microbiology",
        icon: "/images/Microbiology.webp",
        color: "#d0ffc5",
        bg: "bg-[#d0ffc5]"
    },
    {
        title: "General Surgery",
        icon: "/images/GeneralSurgery.webp",
        color: "#ffe58f",
        bg: "bg-[#ffe58f]"
    },
    {
        title: "Anesthesiology",
        icon: "/images/Anesthesiology.webp",
        color: "#c4e9ff",
        bg: "bg-[#c4e9ff]"
    },
    {
        title: "ENT",
        icon: "/images/ENT.webp",
        color: "#c4e9ff",
        bg: "bg-[#c4e9ff]"
    }


];

const features = [
    "Personalized Profile Evaluation",
    "Counselling for AIQ, State, Deemed, DNB & Private Colleges",
    "Smart Choice Filling & Branch Strategy",
    "Seat Matrix, Fee & Cutoff Insights",
    "Real-Time Alerts & Deadline Tracking",
    "1-on-1 Counsellor Access",
    "Document Verification Help",
    "Mop-up & Stray Round Support",
    "NRI/Management Quota Guidance",
    "Post-Admission Help (Hostel, Loan, Relocation)",
];

const videos = [
    {
        id: 4,
        title: 'Amita Gulia, KD, Mathura',
        youtubeId: 'zg2naNV56kg',
    },
    {
        id: 5,
        title: 'Ankita Sharma, MIMS, Barabanki',
        youtubeId: 'glMWO1xvfUo',
    },
];

export default function NeetPgIndiaAdmissionPage() {
    const [showAllFeatures, setShowAllFeatures] = useState(false);
    const [videoPopup, setVideoPopup] = useState<{ id: number; title: string; youtubeId: string } | null>(null);


    return (
        <>
            <FloatingWhatsApp />
            <section className="lg:py-50 md:py-40 py-20 relative overflow-hidden z-2 bg-[url('/images/neet-pg-india-admission.webp')] bg-cover bg-center bg-no-repeat">
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,126,200,1)_0%,rgba(80,166,217,1)_20%,rgba(255,255,255,0)_87%)] -z-1" />
                <div className="container px-6 md:px-12 lg:px-20 fadeUp">
                    <div className="w-full lg:w-4/10 md:8/10 md:text-left text-center">
                        <h1 className="uppercase lg:text-5xl text-4xl font-bold text-white lg:mb-6 mb-4">NEET PG <br className="hidden lg:block" />ADMISSION</h1>
                        <p className="text-white text-lg m-0 p-0">Advance your medical career with expert guidance for postgraduate admissions—navigate counselling, secure top specializations, and take the next step with confidence.</p>
                    </div>
                </div>
            </section>
            <section className="py-10 lg:py-15 overflow-hidden bg-[#F4F7F8]">
                <div className="container px-6 md:px-12 lg:px-20 max-w-[1240px]!">
                    <h6 className="text-black font-semibold mb-6 fadeUp">Courses</h6>
                    <h2 className='text-black text-4xl font-bold mb-6 lg:mb-10 fadeUp mb-8'>PG Branches</h2>
                </div>
                <div className="fadeUp">
                    <Swiper
                        style={{ cursor: "grabbing" }}
                        modules={[Autoplay]}
                        spaceBetween={17}
                        slidesPerView={"auto"}
                        centeredSlides={true}
                        loop={true}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                    >
                        {branches.map((item, index) => (
                            <SwiperSlide key={index} style={{ width: 'auto' }}>
                                <div style={{ backgroundColor: `${item.color}60` }}
                                    className="group rounded-[12px] mx-auto w-[146px] h-[176px] pt-6 px-3 transition flex flex-col gap-3 justify-start items-center text-center"
                                >
                                    <div
                                        style={{
                                            backgroundColor: `${item.color}40`,
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.backgroundColor = item.color;
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.backgroundColor = `${item.color}40`;
                                        }}
                                        className="w-[70px] h-[70px] p-2 inline-flex items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110"
                                    >
                                        <div style={{ backgroundColor: `${item.color}` }} className={`w-full h-full inline-flex items-center justify-center rounded-full`}>
                                            <img
                                                src={item.icon}
                                                alt={item.title}
                                                className="w-8 h-8 object-contain"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center">
                                        <h3 className="font-normal text-[#0B2E3C] text-[14px]">
                                            {item.title}
                                        </h3>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
            <section className="py-10 lg:pt-15 lg:pb-40 overflow-hidden bg-[#F4F7F8]">
                <div className="container px-6 md:px-12 lg:px-20 max-w-[1010px]!">
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 lg:gap-12 mb-16 items-start">
                        <div className="relative">
                            <Image src="/neetpg-card.webp" width="572" height="764" className="w-full object-cover rounded-2xl" alt="" />
                        </div>
                        <div className="h-full">
                            <div
                                className="fadeUp relative z-10 rounded-2xl pt-16 pb-8 px-8 shadow-xl bg-white h-full flex flex-col"
                            >
                                <div className="absolute left-1/2 -translate-x-1/2 -top-[35px] border-[8px] border-[#F4F7F8] rounded-full">
                                    <img
                                        src="/images/st5.svg"
                                        alt=""
                                        className="w-16 h-16 object-contain"
                                    />
                                </div>
                                <div className="text-center mb-3 text-lg font-semibold text-black">Standard</div>
                                <div className="text-center text-xs text-[#686767] mb-6">Turn Your NEET Rank into a Medical <br /> Seat with Expert Guidance. </div>
                                <div className="flex justify-center mb-8">
                                    <div className="relative w-[237px] h-[112px] border-[4px] border-[#EE6E1E3B] rounded-[20px] flex flex-col items-center justify-center">
                                        <div className="text-center font-semibold font-weight-600 lg:text-4xl text-black text-3xl">₹ 84,999</div>
                                        <div className="text-[14px] font-normal font-weight-400 text-[#EE6E1E] mt-1 text-center">Admission service charge <span className="text-[14px] text-[#EE6E1E] font-bold font-weight-700">before NEET result</span></div>
                                        <div className="absolute -top-5 -right-5 w-12 h-12">
                                            <img src="/svg/pg-corner.svg" alt="" className="w-full h-full object-contain" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3 mb-10">
                                    <Button className="text-white! border-[#DFF1FF]! bg-[#EE6E1E]! w-full flex gap-2 items-center" rounded>
                                        Pay Now
                                    </Button>
                                </div>
                                <div className="text-base text-black font-semibold mb-5">Features</div>
                                <ul className="space-y-4 text-sm text-[#686767] flex-grow">
                                    {(showAllFeatures ? features : features.slice(0, 6)).map((item, index) => (
                                        <li key={index} className="flex gap-2">
                                            <span className="text-yellow-500">✦</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                {features.length > 6 && (
                                    <button
                                        onClick={() => setShowAllFeatures(!showAllFeatures)}
                                        className="mt-6 text-sm font-semibold text-[#005A88] flex items-center justify-between w-full"
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
                                <div className="mt-2">
                                    <div className="flex gap-2 items-start">
                                        <span className="text-[#1D1D1D] font-semibold text-[12px] uppercase tracking-wider mt-0.5">Note:</span>
                                        <p className="text-[12px] font-weight-600 font-semibold leading-relaxed text-[#EE6E1E] poppins">
                                            This service charge includes the Visa charges but <span className="font-normal font-weight-400 text-[#EE6E1E]">does not cover the ticket charges.</span>
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


            <section className="pb-10 lg:pb-15 bg-[#F4F7F8]">
                <div className="container px-6 md:px-12 lg:px-20">
                    <div className='mb-10 fadeUp text-center'>
                        <h2 className='text-black text-4xl font-bold mb-4'>OUR <span className='text-[#287FC4]'>SUCCESSFUL STORIES</span></h2>
                        <div className='uppercase text-[#00CFB240] leading-12 text-[42px] md:text-5xl lg:text-7xl font-black'>HEAR FROM OUR STUDENTS</div>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 grid-cols-1">
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