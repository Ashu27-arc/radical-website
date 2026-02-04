"use client";

import Link from "next/link";
import { Image } from "primereact/image";
import { useState } from "react";

export const universities = [
  { id: 1, title: "Assam", image: "/images/Frame1321317787-8.webp", url: "/assam" },
  { id: 2, title: "Andaman & Nicobar Islands", image: "/images/Frame11321317787.webp", url: "/andaman-nicobar" },
  { id: 3, title: "Andhra Pradesh", image: "/images/Frame1321317787-7.webp", url: "/andhra-pradesh" },
  { id: 4, title: "Arunachal Pradesh", image: "/images/Frame1321317787-6.webp", url: "/arunachal-pradesh" },
  { id: 5, title: "Bihar", image: "/images/Frame1321317787-9.webp", url: "/bihar" },
  { id: 6, title: "Chandigarh", image: "/images/Frame1321317787.webp", url: "/chandigarh" },
  { id: 7, title: "Chhattisgarh", image: "/images/Frame1321317787-1.webp", url: "/chhattisgarh" },
  { id: 8, title: "Delhi - GGSIPU", image: "/images/Frame1321317787-2.webp", url: "/delhi-ggsipu" },
  { id: 9, title: "Goa", image: "/images/Frame1321317787-3.webp", url: "/goa" },
  { id: 10, title: "Jharkhand", image: "/images/Frame1321317787-4.webp", url: "/jharkhand" },
  { id: 11, title: "Gujarat", image: "/images/Frame1321317788-2.webp", url: "/gujarat" },
  { id: 12, title: "Karnataka", image: "/images/Frame1321317788-3.webp", url: "/karnataka" },
  { id: 13, title: "Haryana", image: "/images/Frame1321317788-1.webp", url: "/haryana" },
  { id: 14, title: "Himachal Pradesh", image: "/images/Frame1321317788.webp", url: "/himachal-pradesh" },
  { id: 15, title: "Jammu & Kashmir", image: "/images/Frame1321317787-5.webp", url: "/jammu-kashmir" },
  { id: 16, title: "Kerala", image: "/images/Frame1321317788-4.webp", url: "/kerala" },
  { id: 17, title: "Maharashtra", image: "/images/Frame1321317789.webp", url: "/maharashtra" },
  { id: 18, title: "Madhya Pradesh", image: "/images/Frame1321317790.webp", url: "/madhya-pradesh" },
  { id: 19, title: "Manipur", image: "/images/Frame1321317791.webp", url: "/manipur" },
  { id: 20, title: "Meghalaya", image: "/images/Frame1321317792.webp", url: "/meghalaya" },
  { id: 21, title: "Nagaland", image: "/images/Frame1321317793.webp", url: "/nagaland" },
  { id: 22, title: "Odisha", image: "/images/Frame1321317794.webp", url: "/odisha" },
  { id: 23, title: "Pondicherry", image: "/images/Frame1321317789-1.webp", url: "/pondicherry" },
  { id: 24, title: "Punjab", image: "/images/Frame1321317795.webp", url: "/punjab" },
  { id: 25, title: "ESIC Colleges", image: "/images/Frame1321317787-10.webp", url: "/esic" },
  { id: 26, title: "Rajasthan", image: "/images/Frame1321317796.webp", url: "/rajasthan" },
  { id: 27, title: "Sikkim", image: "/images/Frame1321317797.webp", url: "/sikkim" },
  { id: 28, title: "Tamil Nadu", image: "/images/Frame1321317798.webp", url: "/tamil-nadu" },
  { id: 29, title: "Telangana", image: "/images/Frame1321317799.webp", url: "/telangana" },
  { id: 30, title: "Uttarakhand", image: "/images/Frame1321317800.webp", url: "/uttarakhand" },
  { id: 31, title: "Uttar Pradesh", image: "/images/Frame1321317788-5.webp", url: "/uttar-pradesh" },
  { id: 32, title: "MCC (Medical Counselling Committee)", image: "/images/Frame1321317801.webp", url: "/mcc" },
];

export default function CounsellingAuthorityPage() {
    const [expanded, setExpanded] = useState(false);
    
    console.log('Component rendered, expanded:', expanded);
    console.log('Universities count:', universities.length);
    console.log('Showing items:', expanded ? universities.length : 4);

    return (
        <section className="lg:pb-15 lg:pt-30 py-10 overflow-hidden text-[#4A4A4A]">
            <div className="container px-3 md:px-4">
                <h6 className="uppercase text-sm font-semibold text-black mb-4 fadeUp">NEET 2025-</h6>
                <h1 className="font-bold text-black text-2xl md:text-4xl mb-8 fadeUp">Counselling Authorities</h1>
                <p className="mb-6 fadeUp">Invite your friends and unlock exclusive benefits—earn more with every successful referral. Invite your friends and unlock exclusive benefits Invite your friends and unlock exclusive Invite your friends and unlock exclusive benefits—earn more with every successful referral. Invite your friends and unlock exclusive benefits Invite your friends and unlock exclusive  Invite your friends and unlock exclusive benefits—earn more with every successful referral. Invite your friends and unlock exclusive benefits Invite your friends and unlock exclusive</p>
                <p className="fadeUp">Invite your friends and unlock exclusive benefits—earn more with every successful referral. Invite your friends and unlock exclusive benefits Invite your friends and unlock exclusive Invite your friends and unlock exclusive benefits—earn more with every successful referral. Invite your friends and unlock exclusive benefits Invite your friends and unlock exclusive  Invite your friends and unlock exclusive benefits—earn more with every successful referral. Invite your friends and unlock exclusive benefits Invite your friends and unlock exclusive</p>
                
                {/* Desktop View - Always show all */}
                <div className="hidden md:grid md:grid-cols-4 lg:grid-cols-5 gap-8 mt-10 mb-20">
                    {universities.map((item) => (
                        <Link key={item.id} href={item.url} className="group flex flex-col items-center text-center fadeUp">
                            <div className="w-44 h-44 rounded-full bg-white">
                                <Image src={item.image} alt={item.title} className="w-full"/>
                            </div>
                            <p className="mt-2 text-lg text-[#287FC4] font-semibold leading-tight">
                                {item.title}
                            </p>
                        </Link>
                    ))}
                </div>

                {/* Mobile View - Show 4 initially, all after View More */}
                <div className="md:hidden">
                    <div className="mb-4 text-center text-red-500 font-bold">
                        DEBUG: Expanded = {expanded ? 'TRUE' : 'FALSE'} | Showing {expanded ? universities.length : 4} items
                    </div>
                    
                    <div className="grid grid-cols-2 gap-6 mt-10">
                        {universities.slice(0, expanded ? universities.length : 4).map((item) => (
                            <Link key={item.id} href={item.url} className="group flex flex-col items-center text-center fadeUp">
                                <div className="w-34 h-34 rounded-full bg-white">
                                    <Image src={item.image} alt={item.title} className="w-full"/>
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
                                onClick={() => {
                                    console.log('Button clicked!');
                                    setExpanded(true);
                                    console.log('State should be true now');
                                }}
                                className="bg-[#287FC4] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1e6ba8] transition-colors"
                            >
                                View More (Click me!)
                            </button>
                        </div>
                    )}
                    
                    <div className="mb-20"></div>
                </div>
                
                <div className="text-center uppercase text-4xl lg:text-6xl font-black text-[#00CFB240] fadeUp">CONNECT WITH US</div>
            </div>
        </section>
    );
}