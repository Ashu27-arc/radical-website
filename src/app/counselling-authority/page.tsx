"use client";

import Link from "next/link";
import { Image } from "primereact/image";

export const universities = [
  { id: 1, title: "Assam", image: "/images/1.webp", url: "/assam" },
  { id: 2, title: "Andaman & Nicobar Islands", image: "/images/2.webp", url: "/andaman-nicobar" },
  { id: 3, title: "Andhra Pradesh", image: "/images/3.webp", url: "/andhra-pradesh" },
  { id: 4, title: "Arunachal Pradesh", image: "/images/4.webp", url: "/arunachal-pradesh" },
  { id: 5, title: "Bihar", image: "/images/5.webp", url: "/bihar" },

  { id: 6, title: "Chandigarh", image: "/images/6.webp", url: "/chandigarh" },
  { id: 7, title: "Chhattisgarh", image: "/images/7.webp", url: "/chhattisgarh" },
  { id: 8, title: "Delhi - GGSIPU", image: "/images/8.webp", url: "/delhi-ggsipu" },
  { id: 9, title: "Goa", image: "/images/9.webp", url: "/goa" },
  { id: 10, title: "Jharkhand", image: "/images/10.webp", url: "/jharkhand" },

  { id: 11, title: "Gujarat", image: "/images/11.webp", url: "/gujarat" },
  { id: 12, title: "Karnataka", image: "/images/12.webp", url: "/karnataka" },
  { id: 13, title: "Haryana", image: "/images/13.webp", url: "/haryana" },
  { id: 14, title: "Himachal Pradesh", image: "/images/14.webp", url: "/himachal-pradesh" },
  { id: 15, title: "Jammu & Kashmir", image: "/images/15.webp", url: "/jammu-kashmir" },

  { id: 16, title: "Kerala", image: "/images/16.webp", url: "/kerala" },
  { id: 17, title: "Maharashtra", image: "/images/17.webp", url: "/maharashtra" },
  { id: 18, title: "Madhya Pradesh", image: "/images/18.webp", url: "/madhya-pradesh" },
  { id: 19, title: "Manipur", image: "/images/19.webp", url: "/manipur" },
  { id: 20, title: "Meghalaya", image: "/images/20.webp", url: "/meghalaya" },

  { id: 21, title: "Nagaland", image: "/images/21.webp", url: "/nagaland" },
  { id: 22, title: "Odisha", image: "/images/22.webp", url: "/odisha" },
  { id: 23, title: "Pondicherry", image: "/images/23.webp", url: "/pondicherry" },
  { id: 24, title: "Punjab", image: "/images/24.webp", url: "/punjab" },
  { id: 25, title: "ESIC Colleges", image: "/images/25.webp", url: "/esic" },

  { id: 26, title: "Rajasthan", image: "/images/26.webp", url: "/rajasthan" },
  { id: 27, title: "Sikkim", image: "/images/27.webp", url: "/sikkim" },
  { id: 28, title: "Tamil Nadu", image: "/images/28.webp", url: "/tamil-nadu" },
  { id: 29, title: "Telangana", image: "/images/29.webp", url: "/telangana" },
  { id: 30, title: "Uttarakhand", image: "/images/30.webp", url: "/uttarakhand" },

  { id: 31, title: "Uttar Pradesh", image: "/images/31.webp", url: "/uttar-pradesh" },
  { id: 32, title: "MCC (Medical Counselling Committee)", image: "/images/32.webp", url: "/mcc" },
];


export default function MbbsInIndiaPage() {

    return (
        <>
            <section className="lg:pb-15 lg:pt-30 py-10 overflow-hidden text-[#4A4A4A]">
                <div className="container px-3 md:px-4">
                    <h6 className="uppercase text-sm font-semibold text-black mb-4 fadeUp">NEET 2025-</h6>
                    <h1 className="font-bold text-black text-2xl md:text-4xl mb-8 fadeUp">Counselling Authorities</h1>
                    <p className="mb-6 fadeUp">Invite your friends and unlock exclusive benefits—earn more with every successful referral. Invite your friends and unlock exclusive benefits Invite your friends and unlock exclusive Invite your friends and unlock exclusive benefits—earn more with every successful referral. Invite your friends and unlock exclusive benefits Invite your friends and unlock exclusive  Invite your friends and unlock exclusive benefits—earn more with every successful referral. Invite your friends and unlock exclusive benefits Invite your friends and unlock exclusive</p>
                    <p className="fadeUp">Invite your friends and unlock exclusive benefits—earn more with every successful referral. Invite your friends and unlock exclusive benefits Invite your friends and unlock exclusive Invite your friends and unlock exclusive benefits—earn more with every successful referral. Invite your friends and unlock exclusive benefits Invite your friends and unlock exclusive  Invite your friends and unlock exclusive benefits—earn more with every successful referral. Invite your friends and unlock exclusive benefits Invite your friends and unlock exclusive</p>
                    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 md:gap-5 gap-4 mt-10">
                        {universities.map((item) => (
                            <Link key={item.id} href={item.url} className="group flex flex-col items-center text-center fadeUp">
                                <div className="w-34 md:w-44 md:h-44 h-34 rounded-full bg-white">
                                    <Image src={item.image} alt={item.title} className="w-full"/>
                                </div>
                                <p className="mt-4 text-sm md:text-lg text-[#287FC4] font-semibold leading-tight">
                                    {item.title}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}