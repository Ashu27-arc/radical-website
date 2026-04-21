"use client";

import Link from "next/link";
import { Image } from "primereact/image";
import { useState } from "react";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const universities = [
    {
        id: 1,
        title: "Andaman & Nicobar Islands",
        image: "/images/Frame11321317787.webp",
        url: "/andaman-and-nicobar-islands-medical-counseling/",
    },
    {
        id: 2,
        title: "Andhra Pradesh",
        image: "/images/Frame1321317787-7.webp",
        url: "/official-website-for-andhra-pradesh-medical/",
    },
    {
        id: 3,
        title: "Arunachal Pradesh",
        image: "/images/Frame1321317787-6.webp",
        url: "/official-website-for-arunachal-pradesh-medical/",
    },
    {
        id: 4,
        title: "Assam",
        image: "/images/Frame1321317787-8.webp",
        url: "/official-website-for-assam-medical-counseling/",
    },
    {
        id: 5,
        title: "Bihar",
        image: "/images/Frame1321317787-9.webp",
        url: "/official-website-for-bihar-medical-counseling/",
    },
    {
        id: 6,
        title: "Chandigarh",
        image: "/images/Frame1321317787.webp",
        url: "/chandigarh-medical-counseling/",
    },
    {
        id: 7,
        title: "Chhattisgarh",
        image: "/images/Frame1321317787-1.webp",
        url: "/official-website-for-chhattisgarh-medical/",
    },
    {
        id: 8,
        title: "Delhi - GGSIPU",
        image: "/images/Frame1321317787-2.webp",
        url: "/official-website-for-delhi-ipu-counseling/",
    },
    {
        id: 9,
        title: "ESIC Colleges",
        image: "/images/Frame1321317787-10.webp",
        url: "/official-website-for-esic-medical-counseling/",
    },
    {
        id: 10,
        title: "Goa",
        image: "/images/Frame1321317787-3.webp",
        url: "/official-website-for-goa-medical-counseling/",
    },
    {
        id: 11,
        title: "Gujarat",
        image: "/images/Frame1321317788-2.webp",
        url: "/official-website-for-gujarat-medical-counseling/",
    },
    {
        id: 12,
        title: "Haryana",
        image: "/images/Frame1321317788-1.webp",
        url: "/official-website-for-haryana-medical-counseling/",
    },
    {
        id: 13,
        title: "Himachal Pradesh",
        image: "/images/Frame1321317788.webp",
        url: "/official-website-for-himachal-pradesh-medical-counseling/",
    },
    {
        id: 14,
        title: "Jammu & Kashmir",
        image: "/images/Frame1321317787-5.webp",
        url: "/official-website-for-jammu-medical-counseling/",
    },
    {
        id: 15,
        title: "Jharkhand",
        image: "/images/Frame1321317787-4.webp",
        url: "/official-website-for-jharkhand-medical/",
    },
    {
        id: 16,
        title: "Karnataka",
        image: "/images/Frame1321317788-3.webp",
        url: "/official-website-for-karnataka-medical-counseling/",
    },
    {
        id: 17,
        title: "Kerala",
        image: "/images/Frame1321317788-4.webp",
        url: "/official-website-for-kerala-medical-counseling/",
    },
    {
        id: 18,
        title: "Madhya Pradesh",
        image: "/images/Frame1321317790.webp",
        url: "/official-website-for-madhya-pradesh-medical-counseling/",
    },
    {
        id: 19,
        title: "Maharashtra",
        image: "/images/Frame1321317789.webp",
        url: "/official-website-for-maharashtra-medical-counseling/",
    },
    {
        id: 20,
        title: "Manipur",
        image: "/images/Frame1321317791.webp",
        url: "/official-website-for-manipur-medical-counseling/",
    },
    {
        id: 21,
        title: "MCC (Medical Counselling Committee)",
        image: "/images/Frame1321317801.webp",
        url: "/official-website-for-mcc-medical-counseling/",
    },
    {
        id: 22,
        title: "Meghalaya",
        image: "/images/Frame1321317792.webp",
        url: "/official-website-for-meghalaya-medical-counseling/",
    },
    {
        id: 23,
        title: "Nagaland",
        image: "/images/Frame1321317793.webp",
        url: "/official-website-for-nagaland-medical/",
    },
    {
        id: 24,
        title: "Odisha",
        image: "/images/Frame1321317794.webp",
        url: "/official-website-for-odisha-medical-counseling/",
    },
    {
        id: 25,
        title: "Pondicherry",
        image: "/images/Frame1321317789-1.webp",
        url: "/official-website-for-pondicherry-medical/",
    },
    {
        id: 26,
        title: "Punjab",
        image: "/images/Frame1321317795.webp",
        url: "/official-website-for-punjab-medical-counseling/",
    },
    {
        id: 27,
        title: "Rajasthan",
        image: "/images/Frame1321317796.webp",
        url: "/official-website-for-rajasthan-medical-counseling/",
    },
    {
        id: 28,
        title: "Sikkim",
        image: "/images/Frame1321317797.webp",
        url: "/official-website-for-sikkim-medical-counseling/",
    },
    {
        id: 29,
        title: "Tamil Nadu",
        image: "/images/Frame1321317798.webp",
        url: "/official-website-for-tamilnadu-medical/",
    },
    {
        id: 30,
        title: "Telangana",
        image: "/images/Frame1321317799.webp",
        url: "/official-website-for-telangana-medical-counseling/",
    },
    {
        id: 31,
        title: "Uttar Pradesh",
        image: "/images/Frame1321317788-5.webp",
        url: "/official-website-for-uttar-pradesh-counseling/",
    },
    {
        id: 32,
        title: "Uttarakhand",
        image: "/images/Frame1321317800.webp",
        url: "/official-website-for-uttarakhand-medical-counseling/",
    },
];

export default function CounsellingAuthorityPage() {
    const [expanded, setExpanded] = useState(false);

    return (
        <section className="lg:pb-15 lg:pt-30 py-10 overflow-hidden text-[#4A4A4A]">
            <FloatingWhatsApp />
            <div className="container px-3 md:px-4">
                <h6 className="uppercase text-sm font-semibold text-black mb-4 fadeUp">NEET 2026-</h6>
                <h1 className="font-bold text-black text-2xl md:text-4xl mb-8 fadeUp">Counselling Authorities</h1>
                <p className="mb-6 fadeUp">The counselling process for NEET admission differs considerably across states, as each has its own criteria, reservation policies, seat matrix, fee structures, and counselling dates. Students need to understand the nuances of the counselling process in each state to secure the best available seat in a medical college, which is quite challenging for them to do on their own without proper guidance from experts in the field.  </p>
                <p className="fadeUp">State-wise NEET counselling authorities are well aware of the nuances of each state’s counselling process, which enables us to provide the best possible guidance to the students to obtain the best available seat in a medical college by guiding the students to the states where they have the highest probability of getting a seat, the criteria for the state of domicile, cut-off trends, and documentation procedures, etc. We do not only provide counselling services but also provide transparent, step-by-step guidance to the students to help them succeed in the admission process to the medical college of their choice, which aligns with their career objectives and aspirations.</p>

                {/* Desktop View - Always show all */}
                <div className="hidden md:grid md:grid-cols-4 lg:grid-cols-5 gap-8 mt-10 mb-10">
                    {universities.map((item) => (
                        <Link key={item.id} href={item.url} className="group flex flex-col items-center text-center fadeUp">
                            <div className="w-full h-auto rounded-full bg-white">
                                <Image src={item.image} alt={item.title} className="w-full" />
                            </div>
                            <p className="mt-2 text-lg text-[#287FC4] font-semibold leading-tight">
                                {item.title}
                            </p>
                        </Link>
                    ))}
                </div>

                {/* Mobile View - Show 4 initially, all after View More */}
                <div className="md:hidden">
                    <div className="grid grid-cols-2 gap-6 mt-10">
                        {universities.slice(0, expanded ? universities.length : 4).map((item) => (
                            <Link key={item.id} href={item.url} className="group flex flex-col items-center text-center fadeUp">
                                <div className="w-34 h-34 rounded-full bg-white">
                                    <Image src={item.image} alt={item.title} className="w-full" />
                                </div>
                                <p className="mt-2 text-sm text-[#287FC4] font-semibold leading-tight">
                                    {item.title}
                                </p>
                            </Link>
                        ))}
                    </div>

                    {!expanded && (
                        <div className="text-center mt-8">
                            <button
                                onClick={() => setExpanded(true)}
                                className="bg-[#287FC4] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1e6ba8] transition-colors"
                            >
                                View More
                            </button>
                        </div>
                    )}

                    <div className="mb-20"></div>
                </div>


            </div>
        </section>
    );
}