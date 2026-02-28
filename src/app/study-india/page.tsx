"use client";

import { Button } from "primereact/button";
import { Image } from "primereact/image";

const studyIndiaLists = [
    {
        id: 1,
        title: 'Mbbs in India',
    },
    {
        id: 2,
        title: "Bams in India",
    },
    {
        id: 3,
        title: 'Bhms in India',
    },
    {
        id: 4,
        title: 'Bums in India',
    },
    {
        id: 5,
        title: 'Bnys in India',
    },
    {
        id: 6,
        title: 'Bds in India',
    },
    {
        id: 7,
        title: "Bsms in India",
    },
    {
        id: 8,
        title: 'Md in India',
    },
    {
        id: 9,
        title: 'Ms in India',
    },
    {
        id: 10,
        title: 'Dnb in India',
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
            <section id="connect-counselor" className="pb-8 md:pb-16 bg-[#F4F7F8]">
                <div className="container mx-auto px-3 md:px-4">
                    <div className="relative rounded-2xl md:rounded-3xl overflow-hidden min-h-[350px] md:min-h-[480px] flex items-center">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-30"
                        >
                            <source src="/videos/radical.mp4" type="video/mp4" />
                        </video>
                        <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 max-w-full md:max-w-3xl">
                            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-black mb-3 md:mb-4 leading-tight">
                                Book Your <span className="text-[#61C9B8]">20 MIN Free<br className="hidden md:block" /> Counselling Session</span> Today
                            </h2>
                            <p className="text-sm md:text-base text-[#1E242C] mb-6 md:mb-8 font-medium">
                                Google Meet | Zoom | Microsoft Teams | Whatsapp Available
                            </p>
                            <a
                                href="#connect-counselor"
                                className="inline-flex items-center justify-center px-8 py-3 rounded-[60px] bg-[#FF3D6B] text-white font-semibold text-sm md:text-base hover:bg-[#e0355f] transition-colors shadow-lg hover:shadow-xl"
                            >
                                Book Now
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-10 lg:py-15">
                <div className="container px-3 md:px-4">
                    <div className="flex justify-between items-end mb-10 lg:mb-15 rounded-xl bg-[#FFE5EB] fadeUp">
                        <div className="w-6/10 lg:w-5/10 p-6 lg:p-16">
                            <div className="text-lg md:text-3xl font-bold lg:mb-4 mb-2 leading-6 lg:leading-9">Book your 20 MIN free<br className="hidden lg:block" /> counselling session today</div>
                            <div className="text-black lg:mb-4 mb-2 text-xs lg:text-base">Google Meet | Zoom | Microsoft teams | Whatsapp Available</div>
                            <Button rounded className="uppercase text-white! bg-[#FF3D68]! border-[#FF3D68]!">BOOK NOW</Button>
                        </div>
                        <div className="w-4/10 lg:px-16 px-4">
                            <Image src="/images/counsellingRi.webp" alt="" className="w-full" />
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