"use client";

import { Button } from "primereact/button";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const neetupadmissionplans = [
    {
        id: 1,
        title: "STANDARD",
        subtitle: "I designed a web UI for an AI-powered HR Co-Pil I ",
        price: "₹ 9,999",
        color: "bg-[#B6FFA7]",
        border: "border-[#2CBF0F]",
        bgImage: "/images/borderShape1.webp",
        features: [
            "MBBS / BDS",
            "Alerts, Notifications, Updates",
            "Rank Based Analysis",
            "Guidance over Documentation",
            "Counselling Registrations Support over call and NEET",
            "Colleges Choice List Pdf by Our Expert",
            "Updated Fee and Seat Matrix Round wise",
            "Central Pool Quota Seats Information",
            "NON REFUNDABLE",
        ],
    },
    {
        id: 2,
        title: "STANDARD",
        subtitle: "I designed a web UI for an AI-powered HR Co-Pil I ",
        price: "₹ 9,999",
        color: "bg-[#AEC2FF]",
        border: "border-[#607DD6]",
        bgImage: "/images/borderShape2.webp",
        features: [
            "MBBS / BDS",
            "Alerts, Notifications, Updates",
            "Rank Based Analysis",
            "Guidance over Documentation",
            "Counselling Registrations Support over call and NEET",
            "Colleges Choice List Pdf by Our Expert",
            "Updated Fee and Seat Matrix Round wise",
            "Central Pool Quota Seats Information",
            "NON REFUNDABLE",
        ],
    },
    {
        id: 3,
        title: "STANDARD",
        subtitle: "I designed a web UI for an AI-powered HR Co-Pil I ",
        price: "₹ 9,999",
        color: "bg-[#D3F4FF]",
        border: "border-[#42ACCF]",
        bgImage: "/images/borderShape3.webp",
        features: [
            "MBBS / BDS",
            "Alerts, Notifications, Updates",
            "Rank Based Analysis",
            "Guidance over Documentation",
            "Counselling Registrations Support over call and NEET",
            "Colleges Choice List Pdf by Our Expert",
            "Updated Fee and Seat Matrix Round wise",
            "Central Pool Quota Seats Information",
            "NON REFUNDABLE",
        ],
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

export default function NeetUgIndiaAdmissionPage() {
    return (
        <>
            <FloatingWhatsApp />
            <section className="lg:py-45 md:py-36 py-20 relative overflow-hidden z-2 bg-[url('/images/neet-ug-india-admission-hero.webp')] bg-cover bg-center bg-no-repeat">
                <div className="container px-3 md:px-4 fadeUp">
                    <div className="w-full lg:w-4/10 md:8/10 md:text-left text-center">
                        <h1 className="uppercase lg:text-5xl text-4xl font-bold text-white lg:mb-6 mb-4">NEET UG <br className="hidden lg:block" />ADMISSION</h1>
                        <p className="text-white text-lg m-0 p-0">I designed a web UI for an AI-powered HR Co-Pilot that helps HRs generate job descriptions and screen resumes</p>
                    </div>
                </div>
            </section>
            <section className="py-10 lg:py-15 overflow-hidden">
                <div className="container px-3 md:px-4">
                    <h2 className='text-black text-4xl font-bold mb-6 lg:mb-10 text-center fadeUp'>Pricing & <span className='text-[#287FC4]'>Packages</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 mb-10 lg:mb-15">
                        {neetupadmissionplans.map((plan) => (
                            <div
                                key={plan.id}
                                style={{
                                    backgroundImage: `url(${plan.bgImage})`,
                                }}
                                className={`prcCardStyle1 group fadeUp overflow-hidden relative z-1 rounded-2xl border-2 ${plan.border} hover:border-[#007EC8] ${plan.color} hover:bg-[#B8EAFB] p-6 lg:px-6 lg:py-8 shadow-md hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 cursor-pointer`}
                            >
                                <div className="text-lg font-semibold text-[#0B2E3C] group-hover:text-[#005787] transition-colors duration-300 uppercase">{plan.title}</div>
                                <div className="text-xs text-[#0B2E3C] group-hover:text-[#005787] transition-colors duration-300 mb-6">{plan.subtitle}</div>
                                <div className="font-bold lg:text-5xl text-4xl group-hover:text-[#005787] transition-colors duration-300 mb-8">{plan.price}</div>
                                <div className="text-xs text-[#0B2E3C] group-hover:text-[#005787] transition-colors duration-300 mb-5">What's included?</div>
                                <ul className="space-y-4 text-sm text-gray-700 mb-8">
                                    {plan.features.map((item, index) => (
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
                        ))}
                    </div>
                    <div className="p-8 lg:p-12 rounded-xl bg-[url('/images/planBg.webp')] bg-cover bg-center bg-no-repeat mb-16">
                        <div className="flex justify-between gap-2 items-center">
                            <div>
                                <div className="flex justify-between gap-2 items-center">
                                    <div className="text-black fadeUp font-bold text-xl md:text-4xl">Get 35% OFF on the Ultimate Plan-Now at just</div>
                                </div>
                                <div className="mt-5 fadeUp flex text-[#538AA1] gap-2 items-center">
                                    <div className="md:inline-flex hidden">
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.26202 5.827L4.05311 6.88145C4.09837 6.89451 4.13957 6.91882 4.17287 6.95213C4.20618 6.98543 4.23049 7.02663 4.24355 7.07188L5.29801 10.863C5.31442 10.9205 5.34912 10.971 5.39685 11.007C5.44457 11.043 5.50272 11.0625 5.5625 11.0625C5.62228 11.0625 5.68043 11.043 5.72816 11.007C5.77588 10.971 5.81058 10.9205 5.827 10.863L6.88145 7.07188C6.89451 7.02663 6.91882 6.98543 6.95213 6.95213C6.98543 6.91882 7.02663 6.89451 7.07188 6.88145L10.863 5.827C10.9205 5.81058 10.971 5.77588 11.007 5.72816C11.043 5.68043 11.0625 5.62228 11.0625 5.5625C11.0625 5.50272 11.043 5.44457 11.007 5.39685C10.971 5.34912 10.9205 5.31442 10.863 5.29801L7.07188 4.24355C7.02663 4.23049 6.98543 4.20618 6.95213 4.17287C6.91882 4.13957 6.89451 4.09837 6.88145 4.05311L5.827 0.26202C5.81058 0.20454 5.77588 0.153974 5.72816 0.117974C5.68043 0.0819737 5.62228 0.0625 5.5625 0.0625C5.50272 0.0625 5.44457 0.0819737 5.39685 0.117974C5.34912 0.153974 5.31442 0.20454 5.29801 0.26202L4.24355 4.05311C4.23049 4.09837 4.20618 4.13957 4.17287 4.17287C4.13957 4.20618 4.09837 4.23049 4.05311 4.24355L0.26202 5.29801C0.20454 5.31442 0.153974 5.34912 0.117974 5.39685C0.0819737 5.44457 0.0625 5.50272 0.0625 5.5625C0.0625 5.62228 0.0819737 5.68043 0.117974 5.72816C0.153974 5.77588 0.20454 5.81058 0.26202 5.827Z" fill="url(#paint0_linear_3023_1298)" stroke="#FCD34D" strokeWidth="0.125" strokeLinecap="round" strokeLinejoin="round" />
                                            <defs>
                                                <linearGradient id="paint0_linear_3023_1298" x1="3.16089" y1="1.40464" x2="7.96411" y2="9.72036" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#FCD966" />
                                                    <stop offset="0.0001" stopColor="#FCD966" />
                                                    <stop offset="1" stopColor="#FCCD34" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div>Note:- One Shot Payment (No partial payment, no negotiations)</div>
                                </div>
                            </div>
                            <div>
                                <div className="fadeRight inline-flex px-4 md:px-8! py-3 text-white md:text-2xl text-lg rounded-lg bg-[#FF0000] font-semibold">₹ 84,499</div>
                            </div>
                        </div>
                    </div>
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
                        <h2 className='text-black text-4xl font-bold mb-4'>OUR <span className='text-[#287FC4]'>SUCCESSFUL STORIES</span></h2>
                        <div className='uppercase text-[#00CFB240] leading-12 text-[42px] md:text-5xl lg:text-7xl font-black'>HEAR FROM OUR STUDENTS</div>
                    </div>
                    <div className="grid gap-6 md:grid-cols-3 grid-cols-1">
                        {videos.map((video) => (
                            <div
                                key={video.id}
                                className="fadeUp relative min-w-[340px] h-[240px] rounded-xl overflow-hidden shadow-lg"
                            >
                                <iframe
                                    className="absolute inset-0 w-full h-[240px]"
                                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                                    title={video.title}
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
