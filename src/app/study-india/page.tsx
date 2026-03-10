"use client";

import { Button } from "primereact/button";
import { Image } from "primereact/image";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Link from "next/link";

const studyIndiaLists = [
    {
        id: 1,
        title: 'Mbbs in India',
        link: "#"
    },
    {
        id: 2,
        title: "Bams in India",
        link: "#"
    },
    {
        id: 3,
        title: 'Bhms in India',
        link: "#"
    },
    {
        id: 4,
        title: 'Bums in India',
        link: "#"
    },
    {
        id: 5,
        title: 'Bnys in India',
        link: "#"
    },
    {
        id: 6,
        title: 'Bds in India',
        link: "#"
    },
    {
        id: 7,
        title: "Bsms in India",
        link: "#"
    },
    {
        id: 8,
        title: 'Md in India',
        link: "#"
    },
    {
        id: 9,
        title: 'Ms in India',
        link: "#"
    },
    {
        id: 10,
        title: 'Dnb in India',
        link: "#"
    },
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

export default function StudyIndiaPage() {

    return (
        <>
            <FloatingWhatsApp />
            <section
                className="relative pb-30 lg:pt-40 pt-30 bg-cover bg-center bg-no-repeat z-2"
                style={{ backgroundImage: "url('/images/study-indiaHeroNew.webp')" }}
            >
                <div className="absolute inset-0 bg-black/50 -z-2"></div>
                <div className="max-w-6xl mx-auto px-6">
                    <div className="lg:px-50 text-center text-white mb-10 lg:mb-20">
                        <h1 className="text-white font-semibold mb-2 md:text-5xl text-3xl">STUDY MEDICAL INDIA</h1>
                        <div>I designed a web UI for an AI-powered HR Co-Pilot that helps HRs generate job descriptions and screen resumes</div>
                    </div>
                    <div className="flex flex-wrap justify-center lg:gap-4 gap-2">

                        {studyIndiaLists.map((item, index) => (

                            <Link
                                key={index}
                                href={item.link}
                                className="px-6 py-3 text-sm
text-white
font-semibold
rounded-full
border border-white/30
bg-white/10
backdrop-blur-md
hover:bg-white/20
transition-all
duration-300"
                            >
                                {item.title}
                            </Link>

                        ))}

                    </div>

                </div>

            </section>

            <section className="py-10 lg:py-15">
                <div className="container px-3 md:px-4">
                    <section id="connect-counselor" className="mb-16">
                        <div className="">
                            <div className="bg-[#F4F7F8] rounded-2xl md:rounded-3xl overflow-hidden flex gap-4 md:px-10 md:pt-10 lg:px-16 lg:pt-16 px-4 pt-4">
                                <div className="w-[60%] relative z-2">
                                    <h2 className="text-sm md:text-4xl lg:text-[42px] font-bold text-black mb-2 md:mb-4 leading-tight">
                                        Book Your <span className="text-[#61C9B8]">20 MIN Free<br className="hidden md:block" /> Counselling Session</span> Today
                                    </h2>
                                    <p className="text-xs md:text-base text-[#1E242C] mb-1 md:mb-8 font-medium">
                                        Google Meet | Zoom | Microsoft Teams | Whatsapp Available
                                    </p>
                                    <a
                                        href="#connect-counselor"
                                        className="inline-flex items-center justify-center lg:px-8 lg:py-3 px-3 py-1 rounded-[60px] bg-[#FF3D6B] text-white font-semibold text-xs md:text-base hover:bg-[#e0355f] transition-colors shadow-lg hover:shadow-xl"
                                    >
                                        Book Now
                                    </a>
                                </div>
                                <div className="w-[40%]">
                                    <img src="/images/session.webp" alt="" className="w-full" />
                                </div>
                            </div>
                        </div>
                    </section>
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