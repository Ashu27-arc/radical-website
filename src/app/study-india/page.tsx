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
            <section className="lg:py-50 md:py-40 py-20 relative overflow-hidden z-2 bg-[url('/images/study-indiaHero.webp')] bg-cover bg-center bg-no-repeat">
                <div className="absolute inset-0 bg-black/55 -z-1" />
                <div className="container px-3 md:px-4 fadeUp">
                    <div className="w-full lg:w-6/10 md:8/10 text-center mx-auto mb-8">
                        <h1 className="uppercase lg:text-5xl text-4xl font-bold text-white lg:mb-6 mb-4">STUDY MEDICAL INDIA</h1>
                        <p className="text-white text-lg m-0 p-0">I designed a web UI for an AI-powered HR Co-Pilot that helps HRs generate job descriptions and screen resumes</p>
                    </div>
                    <div className="w-full lg:w-8/10 text-center mx-auto">
                        <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-3">
                            {studyIndiaLists.map((studyIndiaList) => (
                            <div key={studyIndiaList.id} className="">
                                <Button label={studyIndiaList.title} className="blurBtn w-full uppercase" rounded/>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-10 lg:py-15">
                <div className="container px-3 md:px-4">
                    <div className="flex justify-between items-end mb-10 lg:mb-15 rounded-xl bg-[#FFE5EB] fadeUp">
                        <div className="w-6/10 lg:w-5/10 p-6 lg:p-16">
                            <div className="text-lg md:text-3xl font-bold lg:mb-4 mb-2 leading-6 lg:leading-9">Book your 20 MIN free<br className="hidden lg:block"/> counselling session today</div>
                            <div className="text-black lg:mb-4 mb-2 text-xs lg:text-base">Google Meet | Zoom | Microsoft teams | Whatsapp Available</div>
                            <Button rounded className="uppercase text-white! bg-[#FF3D68]! border-[#FF3D68]!">BOOK NOW</Button>
                        </div>
                        <div className="w-4/10 lg:px-16 px-4">
                            <Image src="/images/counsellingRi.webp" alt="" className="w-full"/>
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