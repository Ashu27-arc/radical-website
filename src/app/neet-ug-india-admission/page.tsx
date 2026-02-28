"use client";

import { Button } from "primereact/button";
import { Image } from "primereact/image";

const neetupadmissionplans = [
    {
        id: 1,
        title: "STANDARD",
        subtitle: "I designed a web UI for an AI-powered HR Co-Pil I ",
        price: "₹ 9,999",
        color: "bg-[#FFCBC5]",
        border: "border-[#C9746C]",
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

export default function NeetUgIndiaAdmissionPage() {
    return (
        <>
            <section className="lg:py-45 md:py-36 py-20 relative overflow-hidden z-2 bg-[url('/images/neet-ug-india-admission-hero.webp')] bg-cover bg-center bg-no-repeat">
                {/* <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,126,200,1)_0%,rgba(80,166,217,1)_20%,rgba(255,255,255,0)_87%)] -z-1" /> */}
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
                                className={`prcCardStyle1 fadeUp overflow-hidden relative z-1 rounded-2xl border-2 ${plan.border} ${plan.color} p-6 lg:px-6 lg:py-8 shadow-md hover:shadow-xl transition`}
                            >
                                <div className="text-lg font-semibold text-[#0B2E3C] uppercase">{plan.title}</div>
                                <div className="text-xs text-[#0B2E3C] mb-6">{plan.subtitle}</div>
                                <div className="font-bold lg:text-5xl text-4xl mb-8">{plan.price}</div>
                                <div className="text-xs text-[#0B2E3C] mb-5">What’s included?</div>
                                <ul className="space-y-4 text-sm text-gray-700 mb-8">
                                    {plan.features.map((item, index) => (
                                        <li key={index} className="flex gap-2">
                                            <span className="text-yellow-500">✦</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex flex-col gap-3">
                                    <Button className="text-[#005787]! border-[#DFF1FF]! bg-[#DFF1FF]! w-full flex gap-2 items-center" rounded>
                                        <i className="pi pi-phone"></i> Talk to an Expert
                                    </Button>
                                    <Button className="text-[#ffffff]! border-[#005787]! bg-[#005787]! w-full flex gap-2 items-center" rounded>
                                        Pay now <i className="pi pi-arrow-right"></i>
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="p-8 lg:p-12 rounded-xl bg-[url('/images/planBg.webp')] bg-cover bg-center bg-no-repeat mb-6">
                        <div className="flex justify-between gap-2 items-center">
                            <div className="text-black fadeLeft font-bold text-xl md:text-4xl">Get 35% OFF on the Ultimate<br className="hidden md:block" /> Plan – Now at just</div>
                            <div>
                                <div className="fadeRight inline-flex px-8! py-3 text-white text-2xl rounded-lg bg-[#FF0000] font-semibold">₹ 84,499/-</div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-10 fadeUp flex text-[#2CBF0F] border rounded-xl border-dashed border-[#2CBF0F] gap-2 items-center lg:justify-center mx-auto w-full lg:w-5/10 p-4 lg:px-8 lg:py-4">
                        <div className="">Note:-</div>
                        <div>One Shot Payment (NO PARTIAL PAYMENT, NO NEGOTIATIONS)</div>
                    </div>
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