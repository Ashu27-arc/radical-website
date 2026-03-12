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
                        <a 
                            href="https://www.neetbhaiya.in/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="block w-full"
                        >
                            <img 
                                src="/images/banner-neet-bhaiya.webp" 
                                alt="Book Your Free Counselling Session" 
                                className="w-full rounded-2xl md:rounded-3xl object-cover"
                            />
                        </a>
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