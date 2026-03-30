"use client";

import Image from "next/image";
import { Button } from "primereact/button";
import { useEffect, useState } from "react";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'


const branches = [
    {
        title: "Internal Medicine",
        desc: "I Designed A Web UI For An AI-Powered HR Co-Pilot That Helps HRs Generate Job Descriptions And Screen Resumes.",
        icon: "/images/InternalMedicine.webp",
        color: "bg-[#FFEFF2]",
    },
    {
        title: "Orthopedics",
        desc: "Studies and treats disorders related to bones, joints, and the musculoskeletal system. Includes trauma, fractures, and joint surgeries.",
        icon: "/images/Orthopedics.webp",
        color: "bg-[#E4FFDE]",
    },
    {
        title: "Psychiatry",
        desc: "Studies and treats mental health-related issues and emotional stability. Includes therapy, counselling, and medication.",
        icon: "/images/Psychiatry.webp",
        color: "bg-[#FFEDB3]",
    },
    {
        title: "Dermatology",
        desc: "Studies and treats skin, hair, and nail-related disorders. It includes medical and cosmetic treatments.",
        icon: "/images/Dermatology.webp",
        color: "bg-[#F4E7FF]",
    },
    {
        title: "Pediatrics",
        desc: "Studies and treats health-related issues in infants, children, and teens. It includes growth, development, and childhood-related diseases.",
        icon: "/images/Pediatrics.webp",
        color: "bg-[#F4E7FF]",
    },
    {
        title: "Radiology",
        desc: "Uses X-rays, CT scans, and MRI for diagnosis. Acts as a backbone in modern medical sciences for investigations.",
        icon: "/images/Radiology.webp",
        color: "bg-[#E0F3FF]",
    },
    {
        title: "Anatomy",
        desc: "Studies the structure of the human body. Acts as the foundation for all other medical sciences.",
        icon: "/images/Anatomy.webp",
        color: "bg-[#DCFFD6]",
    },
    {
        title: "Medical Jurisprudence",
        desc: "Studies and treats the legal aspects of medical practice.Includes ethics, laws, and responsibilities.",
        icon: "/images/MedicalJurisprudence.webp",
        color: "bg-[#E5FBFF]",
    },
    {
        title: "Microbiology",
        desc: "Studies microorganisms like bacteria, viruses, and fungi. Acts as the backbone for all other medical sciences.",
        icon: "/images/Microbiology.webp",
        color: "bg-[#FFEDB3]",
    },
    {
        title: "General Surgery",
        desc: "It involves the surgical management of all kinds of health conditions. It includes abdominal, traumatic, and emergency surgeries.",
        icon: "/images/GeneralSurgery.webp",
        color: "bg-[#F4E7FF]",
    },
    {
        title: "Anesthesiology",
        desc: "It is concerned with anesthesia and patient care. It ensures that surgical procedures are performed without any pain.",
        icon: "/images/Anesthesiology.webp",
        color: "bg-[#FFEFF2]",
    },
    {
        title: "ENT (Otorhinolaryngology) ",
        desc: "It is concerned with the diagnosis and treatment of ear, nose, and throat disorders. It includes medical and surgical aspects.",
        icon: "/images/ENT.webp",
        color: "bg-[#E0F3FF]",
    },
    {
        title: "Pathology",
        desc: "It is concerned with the study of diseases through the examination of bodily fluids and tissues.It is very important for the proper diagnosis and treatment of health and disease.",
        icon: "/images/Pathology.webp",
        color: "bg-[#FFEFF2]",
    },
    {
        title: "Obstetrics and Gynecology (OB GYN) ",
        desc: "Concerned with female reproductive health, pregnancy, and childbirth. It also deals with the diagnosis and treatment of gynecological disorders.",
        icon: "/images/Gynaecology.webp",
        color: "bg-[#E0F3FF]",
    },
    {
        title: "Pharmacology",
        desc: "Studies drugs, their mechanisms, effects, and therapeutic us.Studies drugs, their mechanisms, effects, and therapeutic us",
        icon: "/images/Pharmacology.webp",
        color: "bg-[#F4E7FF]",
    },
    {
        title: "Radiotherapy",
        desc: "The use of radiation to treat cancer and other diseases. This field is concerned with the precise use of radiation therapy.",
        icon: "/images/RadiationTherapy.webp",
        color: "bg-[#DCFFD6]",
    },
    {
        title: "MS OB GYN",
        desc: "Postgraduate specialization in obstetrics and gynecology. This field provides training to medical graduates in the surgical and medical management of female health.",
        icon: "/images/OBGYN.webp",
        color: "bg-[#FFEDB3]",
    },
    {
        title: "Biochemistry",
        desc: "Studies chemical processes in living organisms.This field provides a foundation for the molecular basis of disease.",
        icon: "/images/Biochemistry.webp",
        color: "bg-[#E4FFDE]",
    },
    {
        title: "Community Medicine",
        desc: "Concerned with public health, disease prevention, and health promotion.This field deals with healthcare at a community or public leve",
        icon: "/images/CommunityHealth.webp",
        color: "bg-[#FFEFF2]",
    },
    {
        title: "Pulmonology",
        desc: "Specialization in diseases affecting the respiratory system. This field includes various conditions such as asthma, COPD, and lung infections.",
        icon: "/images/Pulmonology.webp",
        color: "bg-[#F4E7FF]",
    },
    {
        title: "Ophthalmology",
        desc: "Deals with eye disorders and their treatment. This field includes vision correction, eye surgery, and eye disease management.",
        icon: "/images/Ophthalmology.webp",
        color: "bg-[#F4E7FF]",
    },
    {
        title: "Nuclear Medicine",
        desc: "Uses radioactive substances for diagnosis and treatment.Commonly used in images and cancer treatments.",
        icon: "/images/NuclearMedicine.webp",
        color: "bg-[#E0F3FF]",
    },
    {
        title: "Cardiology",
        desc: "Studies and treats disorders related to the heart and cardiovascular systems. Includes diagnosis, treatment, and prevention of heart-related diseases.",
        icon: "/images/Cardiology.webp",
        color: "bg-[#DCFFD6]",
    },
    {
        title: "Oncology",
        desc: "Studies, prevents, and treats adult diseases. Acts as the backbone for all other medical sciences.",
        icon: "/images/Oncology.webp",
        color: "bg-[#E5FBFF]",
    },
];

const features = [
    "Alerts, Notifications, Updates",
    "Detailed Information on Admission Procedure",
    // "Alerts, Notifications, Updates",
    "Guidance on Documentation",
    "Guidance on Bonds and Rural Service Rules over call",
    // "Alerts, Notifications, Updates",
    // "Guidance on Documentation",
    // "Guidance on Bonds and Rural Service Rules over call",
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

export default function NeetPgIndiaAdmissionPage() {

    return (
        <>
            <FloatingWhatsApp />
            <section className="lg:py-50 md:py-40 py-20 relative overflow-hidden z-2 bg-[url('/images/neet-pg-india-admission.webp')] bg-cover bg-center bg-no-repeat">
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,126,200,1)_0%,rgba(80,166,217,1)_20%,rgba(255,255,255,0)_87%)] -z-1" />
                <div className="container px-3 md:px-4 fadeUp">
                    <div className="w-full lg:w-4/10 md:8/10 md:text-left text-center">
                        <h1 className="uppercase lg:text-5xl text-4xl font-bold text-white lg:mb-6 mb-4">NEET PG <br className="hidden lg:block" />ADMISSION</h1>
                        <p className="text-white text-lg m-0 p-0">Advance your medical career with expert guidance for postgraduate admissions—navigate counselling, secure top specializations, and take the next step with confidence.</p>
                    </div>
                </div>
            </section>
            <section className="py-10 lg:py-15 overflow-hidden">
                <div className="container px-3 md:px-4">
                    <h6 className="text-black font-semibold mb-6 fadeUp">Courses</h6>
                    <h2 className='text-black text-4xl font-bold mb-6 lg:mb-10 fadeUp mb-8'>PG Branches</h2>

                    {/* 
                    {visibleCount < branches.length && (
                        <div className="text-center mt-8">
                            <button
                                onClick={loadMore}
                                className="px-6 py-2 rounded-full bg-[#005A8B] text-white text-sm hover:bg-[#005A8B] transition"
                            >
                                View More
                            </button>
                        </div>
                    )} */}
                </div>
                <div className="fadeUp">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={24}
                        slidesPerView={1.2}
                        centeredSlides={true}
                        loop={true}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1.5,
                            },
                            768: {
                                slidesPerView: 2.5,
                            },
                            1024: {
                                slidesPerView: 3.5,
                            },
                        }}
                    >
                        {branches.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div
                                    className={`${item.color} rounded-2xl p-5 hover:shadow-md transition h-full`}
                                >
                                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white shadow mb-4">
                                        <img
                                            src={item.icon}
                                            alt={item.title}
                                            className="w-8 h-8 object-contain"
                                        />
                                    </div>

                                    <h3 className="font-semibold text-gray-900 text-sm">
                                        {item.title}
                                    </h3>

                                    <div className="border-t border-black/25 my-4"></div>

                                    <p className="text-xs text-gray-600 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
            <section className="py-10 lg:py-15 overflow-hidden bg-[url('/images/anExpert.webp')] bg-cover bg-center bg-no-repeat">
                <div className="container px-3 md:px-4 lg:px-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:gap-30">
                        <div className="relative">
                            <Image src="/images/csdcsdcs.webp" width="572" height="764" className="move-x w-full max-w-[455px] h-auto" alt="" />
                        </div>
                        <div>
                            <div
                                style={{
                                    backgroundImage: "url('/images/borderShape3.webp')",
                                }}
                                className={`group prcCardStyle1 fadeUp overflow-hidden relative z-1 rounded-2xl border-2 border-[#42ACCF] hover:border-[#007EC8] bg-[#D3F4FF] hover:bg-[#B8EAFB] p-6 lg:px-6 lg:py-8 shadow-md hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 cursor-pointer`}
                            >
                                <div className="text-lg font-semibold text-[#0B2E3C] group-hover:text-[#005787] uppercase transition-colors duration-300">Standard</div>
                                <div className="text-xs text-[#0B2E3C] group-hover:text-[#005787] mb-6 transition-colors duration-300">Unlock exclusive, end-to-end counselling support with our premium plans. </div>
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
                            {/* <div className="relative z-2 lg:p-8 p-6 rounded-2xl lg:rounded-4xl shadow-[0px_1px_2px_0px_#0000001A,0px_3px_3px_0px_#00000017,0px_7px_4px_0px_#0000000D,0px_12px_5px_0px_#00000003,0px_19px_5px_0px_#00000000] bg-white">
                                <svg className="absolute left-0 right-0 top-0 -z-10 w-full h-auto" viewBox="0 0 561 353" preserveAspectRatio="xMidYMid meet" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M47.9725 267.501C35.1584 257.971 19.0739 243.37 9.16839 234.107C3.25522 228.578 0 220.828 0 212.732V30C0 13.4315 13.4315 0 30 0H530.344C546.982 0 560.441 13.5394 560.343 30.1767L559.267 212.914C559.22 220.903 555.996 228.545 550.233 234.077C540.091 243.814 523.653 259.311 513.404 267.501C368.59 383.228 196.719 378.128 47.9725 267.501Z" fill="url(#paint0_linear_350_142)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_350_142" x1="0" y1="133.751" x2="560.521" y2="133.751" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#287FC4" />
                                            <stop offset="1" stopColor="#01CDB1" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <div className="rounded-2xl lg:rounded-4xl relative">
                                    <div className="flex justify-center absolute -top-20 inset-x-0">
                                        <div className="relative z-3 border-10 border-white shadow-lg text-white inline-flex flex-col gap-1 py-2 px-10 rounded-full bg-[linear-gradient(270deg,#287FC4_0%,#00CFB2_100%)]">
                                            <div className="font-semibold">Standard</div>
                                            <div className="flex gap-3 items-end">
                                                <div className="font-bold text-5xl">₹ 9,999</div>
                                                <div className="text-lg font-light">per month</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lg:px-8 px-6 pt-20 pb-6 lg:pb-8 bg-white rounded-2xl lg:rounded-4xl shadow-lg">
                                        <h4 className="text-lg uppercase text-black mb-5 font-semibold">Features</h4>
                                        <ul className="space-y-4">
                                            {features.map((item, index) => (
                                                <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                                                    <span className="mt-0.5">
                                                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M5.27963 0C2.37583 0 0 2.37583 0 5.27963C0 8.18343 2.37583 10.5593 5.27963 10.5593C8.18343 10.5593 10.5593 8.18343 10.5593 5.27963C10.5593 2.37583 8.18343 0 5.27963 0ZM4.22371 7.91945L1.58389 5.27963L2.32832 4.53521L4.22371 6.42531L8.23095 2.41807L8.97538 3.16778L4.22371 7.91945Z" fill="#2CBF0F" />
                                                        </svg>
                                                    </span>

                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
            <section className="pb-10 lg:pb-15">
                <div className="container px-3 md:px-4">
                    <div className="p-8 rounded-xl bg-[url('/images/addmi.webp')] bg-cover bg-center bg-no-repeat mb-6">
                        <div className="flex flex-wrap gap-2 fadeUp items-end justify-center">
                            <div className="text-white lg:text-4xl text-2xl font-bold">Admission Service Charge:</div><br className="md:hidden block" />
                            <div className="font-light text-[#CACACA] relative -top-0.5 line-through">₹ 1,29,999 </div>
                            <div className="font-bold lg:text-4xl text-2xl py-1 px-2 bg-white text-[#FF0000] font-semibold">₹ 84,499</div>
                        </div>
                        <div className="text-center mt-8 fadeUp">
                            <Button size="small" label="BUY NOW" className='text-white! bg-[#005787]! border-[#005787]! hover:bg-[#004469]! hover:shadow-2xl hover:scale-105 transition-all hover:animate-none' rounded />
                        </div>
                    </div>
                    <div className="lg:mb-15 mb-10 fadeUp flex text-[#2CBF0F] border rounded-xl border-dashed border-[#2CBF0F] gap-2 lg:justify-center mx-auto w-full lg:w-7/10 p-4 lg:px-8 lg:py-4">
                        <div className="text-[#FF0000]">Note:</div>
                        <div className="space-y-3">
                            <div>1. This service charge includes visa charges but does not cover ticket charges.</div>
                            <div>2. Get the offer price of ₹99,999 before the NEET result</div>
                        </div>
                    </div>
                    <div className='mb-10 fadeUp text-center'>
                        <h2 className='text-black text-4xl font-bold mb-4'>OUR <span className='text-[#287FC4]'>SUCCESSFUL STORIES</span></h2>
                        <div className='uppercase text-[#00CFB240] leading-12 text-[42px] md:text-5xl lg:text-7xl font-black'>HEAR FROM OUR STUDENTS</div>
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
            </section>
        </>
    )
}