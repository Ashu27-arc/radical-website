"use client";

import Image from "next/image";
import { Button } from "primereact/button";
import { useEffect, useState } from "react";

const branches = [
    {
        title: "Internal Medicine",
        desc: "I Designed A Web UI For An AI-Powered HR Co-Pilot That Helps HRs Generate Job Descriptions And Screen Resumes.",
        icon: "/images/InternalMedicine.webp",
        color: "bg-[#FFEFF2]",
    },
    {
        title: "Orthopedics",
        desc: "I Designed A Web UI For An AI-Powered HR Co-Pilot That Helps HRs Generate Job Descriptions And Screen Resumes.",
        icon: "/images/Orthopedics.webp",
        color: "bg-[#E4FFDE]",
    },
    {
        title: "Psychiatry",
        desc: "I Designed A Web UI For An AI-Powered HR Co-Pilot That Helps HRs Generate Job Descriptions And Screen Resumes.",
        icon: "/images/Psychiatry.webp",
        color: "bg-[#FFEDB3]",
    },
    {
        title: "Dermatology",
        desc: "I Designed A Web UI For An AI-Powered HR Co-Pilot That Helps HRs Generate Job Descriptions And Screen Resumes.",
        icon: "/images/Dermatology.webp",
        color: "bg-[#F4E7FF]",
    },
    {
        title: "Pediatrics",
        desc: "I Designed A Web UI For An AI-Powered HR Co-Pilot That Helps HRs Generate Job Descriptions And Screen Resumes.",
        icon: "/images/Pediatrics.webp",
        color: "bg-[#F4E7FF]",
    },
    {
        title: "Radiology",
        desc: "I Designed A Web UI For An AI-Powered HR Co-Pilot That Helps HRs Generate Job Descriptions And Screen Resumes.",
        icon: "/images/Radiology.webp",
        color: "bg-[#E0F3FF]",
    },
    {
        title: "Anatomy",
        desc: "I Designed A Web UI For An AI-Powered HR Co-Pilot That Helps HRs Generate Job Descriptions And Screen Resumes.",
        icon: "/images/Anatomy.webp",
        color: "bg-[#DCFFD6]",
    },
    {
        title: "Medical Jurisprudence",
        desc: "I Designed A Web UI For An AI-Powered HR Co-Pilot That Helps HRs Generate Job Descriptions And Screen Resumes.",
        icon: "/images/MedicalJurisprudence.webp",
        color: "bg-[#E5FBFF]",
    },
    {
        title: "Microbiology",
        desc: "I Designed A Web UI For An AI-Powered HR Co-Pilot That Helps HRs Generate Job Descriptions And Screen Resumes.",
        icon: "/images/Microbiology.webp",
        color: "bg-[#FFEDB3]",
    },
    {
        title: "General Surgery",
        desc: "I Designed A Web UI For An AI-Powered HR Co-Pilot That Helps HRs Generate Job Descriptions And Screen Resumes.",
        icon: "/images/GeneralSurgery.webp",
        color: "bg-[#F4E7FF]",
    },
    {
        title: "Anesthesiology",
        desc: "I Designed A Web UI For An AI-Powered HR Co-Pilot That Helps HRs Generate Job Descriptions And Screen Resumes.",
        icon: "/images/Anesthesiology.webp",
        color: "bg-[#FFEFF2]",
    },
    {
        title: "ENT",
        desc: "I Designed A Web UI For An AI-Powered HR Co-Pilot That Helps HRs Generate Job Descriptions And Screen Resumes.",
        icon: "/images/ENT.webp",
        color: "bg-[#E0F3FF]",
    },
    {
        title: "Pathology",
        desc: "I Designed A Web UI For An AI-Powered HR Co-Pilot That Helps HRs Generate Job Descriptions And Screen Resumes.",
        icon: "/images/Pathology.webp",
        color: "bg-[#FFEFF2]",
    },
    {
        title: "MS Obstetrics And Gynaecology",
        desc: "I Designed A Web UI For An AI-Powered HR Co-Pilot That Helps HRs Generate Job Descriptions And Screen Resumes.",
        icon: "/images/Gynaecology.webp",
        color: "bg-[#E0F3FF]",
    },
    {
        title: "Pharmacology",
        desc: "I Designed A Web UI For An AI-Powered HR Co-Pilot That Helps HRs Generate Job Descriptions And Screen Resumes.",
        icon: "/images/Pharmacology.webp",
        color: "bg-[#F4E7FF]",
    },
    {
        title: "Radiation Therapy",
        desc: "I Designed A Web UI For An AI-Powered HR Co-Pilot That Helps HRs Generate Job Descriptions And Screen Resumes.",
        icon: "/images/RadiationTherapy.webp",
        color: "bg-[#DCFFD6]",
    },
    {
        title: "OBGYN",
        desc: "I Designed A Web UI For An AI-Powered HR Co-Pilot That Helps HRs Generate Job Descriptions And Screen Resumes.",
        icon: "/images/OBGYN.webp",
        color: "bg-[#FFEDB3]",
    },
    {
        title: "Biochemistry",
        desc: "I Designed A Web UI For An AI-Powered HR Co-Pilot That Helps HRs Generate Job Descriptions And Screen Resumes.",
        icon: "/images/Biochemistry.webp",
        color: "bg-[#E4FFDE]",
    },
    {
        title: "Community Health",
        desc: "I Designed A Web UI For An AI-Powered HR Co-Pilot That Helps HRs Generate Job Descriptions And Screen Resumes.",
        icon: "/images/CommunityHealth.webp",
        color: "bg-[#FFEFF2]",
    },
    {
        title: "Pulmonology",
        desc: "I Designed A Web UI For An AI-Powered HR Co-Pilot That Helps HRs Generate Job Descriptions And Screen Resumes.",
        icon: "/images/Pulmonology.webp",
        color: "bg-[#F4E7FF]",
    },
    {
        title: "Ophthalmology",
        desc: "I Designed A Web UI For An AI-Powered HR Co-Pilot That Helps HRs Generate Job Descriptions And Screen Resumes.",
        icon: "/images/Ophthalmology.webp",
        color: "bg-[#F4E7FF]",
    },
    {
        title: "Nuclear Medicine",
        desc: "I Designed A Web UI For An AI-Powered HR Co-Pilot That Helps HRs Generate Job Descriptions And Screen Resumes.",
        icon: "/images/NuclearMedicine.webp",
        color: "bg-[#E0F3FF]",
    },
    {
        title: "Cardiology",
        desc: "I Designed A Web UI For An AI-Powered HR Co-Pilot That Helps HRs Generate Job Descriptions And Screen Resumes.",
        icon: "/images/Cardiology.webp",
        color: "bg-[#DCFFD6]",
    },
    {
        title: "Oncology",
        desc: "I Designed A Web UI For An AI-Powered HR Co-Pilot That Helps HRs Generate Job Descriptions And Screen Resumes.",
        icon: "/images/Oncology.webp",
        color: "bg-[#E5FBFF]",
    },
];

const features = [
    "Alerts, Notifications, Updates",
    "Detailed Information on Admission Procedure",
    "Alerts, Notifications, Updates",
    "Guidance over Documentation",
    "Bonds and Rural Services Rules Guidance over call",
    "Alerts, Notifications, Updates",
    "Guidance over Documentation",
    "Bonds and Rural Services Rules Guidance over call",
];

const videos = [
    {
      id: 1,
      title: 'Successful Admission',
      youtubeId: 'dQw4w9WgXcQ',
    },
    {
      id: 2,
      title: "Ishika's Govt. MBBS Seat Journey",
      youtubeId: '9bZkp7q19f0',
    },
    {
      id: 3,
      title: 'Successful Admission',
      youtubeId: '3JZ_D3ELwOQ',
    },
  ];

export default function NeetPgIndiaAdmissionPage() {
    const [visibleCount, setVisibleCount] = useState(24);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setVisibleCount(4);
            } else {
                setVisibleCount(12);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const loadMore = () => {
        setVisibleCount((prev) => prev + 4);
    };

    const visibleItems = branches.slice(0, visibleCount);
    return (
        <>
            <section className="lg:py-50 md:py-40 py-20 relative overflow-hidden z-2 bg-[url('/images/neet-pg-india-admission.webp')] bg-cover bg-center bg-no-repeat">
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,126,200,1)_0%,rgba(80,166,217,1)_20%,rgba(255,255,255,0)_87%)] -z-1" />
                <div className="container px-3 md:px-4 fadeUp">
                    <div className="w-full lg:w-4/10 md:8/10 md:text-left text-center">
                        <h1 className="uppercase lg:text-5xl text-4xl font-bold text-white lg:mb-6 mb-4">NEET PG <br className="hidden lg:block" />ADMISSION</h1>
                        <p className="text-white text-lg m-0 p-0">I designed a web UI for an AI-powered HR Co-Pilot that helps HRs generate job descriptions and screen resumes</p>
                    </div>
                </div>
            </section>
            <section className="py-10 lg:py-15 overflow-hidden">
                <div className="container px-3 md:px-4">
                    <h6 className="text-black font-semibold mb-6 fadeUp">Courses</h6>
                    <h2 className='text-black text-4xl font-bold mb-6 lg:mb-10 fadeUp mb-8'>PG Branches</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 fadeUp">
                        {visibleItems.map((item, index) => (
                            <div
                                key={index}
                                className={`${item.color} rounded-2xl p-5 hover:shadow-md transition`}
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
                        ))}
                    </div>

                    {visibleCount < branches.length && (
                        <div className="text-center mt-8">
                            <button
                                onClick={loadMore}
                                className="px-6 py-2 rounded-full bg-[#005A8B] text-white text-sm hover:bg-[#005A8B] transition"
                            >
                                View More
                            </button>
                        </div>
                    )}
                </div>
            </section>
            <section className="pt-10 lg:pt-15 overflow-hidden bg-[url('/images/anExpert.webp')] bg-cover bg-center bg-no-repeat">
                <div className="container px-3 md:px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:gap-10">
                        <div className="relative">
                            <div className="absolute right-0 top-20">
                                <Button size="small" icon="pi pi-phone" label="Talk to an expert" className='move-y text-white! bg-[#005787]! border-[#005787]!' rounded />
                            </div>
                            <Image src="/images/anEept.webp" height="529" width="552" className="move-x w-full max-w-[550px] h-auto" alt="" />
                        </div>
                        <div>
                            <div className="relative z-2 lg:p-8 p-6 rounded-2xl lg:rounded-4xl shadow-[0px_1px_2px_0px_#0000001A,0px_3px_3px_0px_#00000017,0px_7px_4px_0px_#0000000D,0px_12px_5px_0px_#00000003,0px_19px_5px_0px_#00000000] bg-white">
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
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pb-10 lg:pb-15">
                <div className="container px-3 md:px-4">
                    <div className="p-8 rounded-xl bg-[url('/images/addmi.webp')] bg-cover bg-center bg-no-repeat mb-6">
                        <div className="flex flex-wrap gap-2 fadeUp items-end justify-center">
                            <div className="text-white lg:text-4xl text-2xl font-bold">Admission Service Charge :-</div><br className="md:hidden block"/>
                            <div className="font-light text-[#CACACA] relative -top-0.5">₹ 1,29,999 </div>
                            <div className="font-bold lg:text-4xl text-2xl py-1 px-2 bg-white text-[#FF0000] font-semibold">₹ 84,499/-</div>
                        </div>
                        <div className="text-center mt-8 fadeUp">
                            <Button size="small" label="BOOK NOW" className='text-white! bg-[#005787]! border-[#005787]!' rounded />
                        </div>
                    </div>
                    <div className="lg:mb-15 mb-10 fadeUp flex text-[#2CBF0F] border rounded-xl border-dashed border-[#2CBF0F] gap-2 lg:justify-center mx-auto w-full lg:w-7/10 p-4 lg:px-8 lg:py-4">
                        <div className="text-[#FF0000]">Note:-</div>
                        <div className="space-y-3">
                            <div>1. This service charge includes the Visa charges but does not cover the Ticket charges.</div>
                            <div>2. Get the offer price 99,999 before NEET Result</div>
                        </div>
                    </div> 
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
            </section>
        </>
    )
}