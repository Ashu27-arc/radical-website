"use client";

import { Image } from "primereact/image";
import Link from "next/link";
import { useState } from "react";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const universities = [
    {
        id: 1,
        title: "Amrita Vishwa Vidyapeetham, Haryana",
        image: "/images/amrita.webp",
        url: "/amrita",
    },
    {
        id: 2,
        title: "Dr. Y Patil Medical College, Pune",
        image: "/images/patil.webp",
        url: "/patil",
    },
    {
        id: 3,
        title: "Himalayan University, Dehradun",
        image: "/images/himalayan.webp",
        url: "/himalayan",
    },
    {
        id: 4,
        title: "Jamia Hamdard College, New Delhi",
        image: "/images/jamia.webp",
        url: "/jamia",
    },
    {
        id: 5,
        title: "JSS University, Karnataka",
        image: "/images/jss.webp",
        url: "/jss",
    },
    {
        id: 6,
        title: "Kalinga Institute of Medical Science",
        image: "/images/kalinga.webp",
        url: "/kalinga",
    },
    {
        id: 7,
        title: "Manipal Academy of Higher Education, Karnataka",
        image: "/images/manipal.webp",
        url: "/manipal",
    },
    {
        id: 8,
        title: "MMU University, Haryana",
        image: "/images/mmu.webp",
        url: "/mmu",
    },
];

export default function BDSInIndiaPage() {
    const [showAllUniversities, setShowAllUniversities] = useState(false);

    return (
        <>
            <FloatingWhatsApp />
            <section className="lg:py-50 md:py-40 py-16 relative overflow-hidden z-2 bg-[url('/images/bds/bds-hero.webp')] bg-cover bg-center bg-no-repeat">
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,126,200,1)_0%,rgba(80,166,217,1)_20%,rgba(255,255,255,0)_87%)] -z-1" />
                <div className="container px-4 md:px-4 fadeUp">
                    <div className="w-full lg:w-4/10 md:w-8/10 text-left">
                        <h1 className="uppercase lg:text-5xl md:text-4xl text-3xl font-bold text-white lg:mb-6 md:mb-4 mb-3 leading-tight">BDS IN INDIA</h1>
                        <p className="text-white lg:text-lg md:text-base text-sm m-0 p-0 px-2">Quality dental education at affordable costs—build your future as a dentist with confidence.</p>
                    </div>
                </div>
            </section>
            <section className="lg:py-15 md:py-10 py-8 overflow-hidden">
                <div className="container px-4 md:px-4">
                    <div className="flex md:flex-row flex-col md:gap-2 items-end">
                        <div className="w-full lg:w-8/12 md:w-6/10 text-[#4A4A4A] text-sm md:pb-10 pb-6 fadeLeft">
                            <h2 className="mb-6 md:mb-8 lg:text-2xl md:text-xl text-lg font-bold text-black">Bachelor's in Dental Surgery (BDS) in India</h2>
                            <p className="mb-4 md:mb-6 text-xs md:text-sm leading-relaxed">The Bachelor of Dental Surgery (BDS) program offered by Indian colleges is an undergraduate program with a duration of 5 years, including an internship. The program is designed to educate students for a career in dentistry. The program includes learning a lot about oral health, such as dental anatomy, oral diseases, gum care, artificial replacement of teeth, oral surgery, etc.</p>
                            <p className="text-xs md:text-sm leading-relaxed">Students are provided with ample opportunities to gain hands-on experience at well-equipped dental hospitals, where they can learn to treat different kinds of dental problems. The program is designed to ensure that students can not only learn about their subject, but can also put their learning into practice. Students can become proficient at providing care to their patients, treating their teeth, and using advanced techniques.</p>
                        </div>
                        <div className="w-full lg:w-4/12 md:w-4/10 fadeRight">
                            <div className="flex items-center justify-center md:justify-start">
                                <div>
                                    <div className="w-[250px] md:w-[290px] md:mx-0 mx-auto p-4 md:p-6 rounded-xl bg-[#E3F4F3] intereInfoCard md:translate-x-8 translate-x-0">
                                        <h5 className="mb-3 text-[#005A8B] leading-5 md:leading-6 font-bold text-base md:text-lg max-w-[200px] md:max-w-[230px]">Are you interested in studying medicine in India?</h5>
                                        <button className='font-semibold text-xs uppercase py-3 md:py-4 px-4 md:px-6 rounded-full cursor-pointer relative text-white! bg-gradient-to-r! from-[#00CFB2]! to-[#005A8B]! border-[#00CFB2]!'>
                                            BOOK CONSULTANTATION
                                        </button>
                                    </div>
                                </div>
                                <Image src="/images/intere.webp" alt="" className="md:max-w-[180px] max-w-[140px] relative z-1" />
                            </div>
                        </div>
                    </div>
                    <div className="lg:p-15 md:p-10 p-6 rounded-xl bg-[#DFF1FF] mb-8 md:mb-10">
                        <h2 className="text-center fadeUp lg:mb-10 md:mb-8 mb-6 lg:text-4xl md:text-2xl text-xl font-bold text-black capitalize leading-tight px-2">Universities where you can study <span className="text-[#287FC4]">medicine in India:</span></h2>

                        {/* Desktop and Tablet - Show all universities */}
                        <div className="hidden md:grid grid-cols-3 lg:grid-cols-4 lg:gap-10 gap-6">
                            {universities.map((item) => (
                                <Link key={item.id} href={item.url} className="group flex flex-col items-center text-center fadeUp">
                                    <div className="w-44 h-44 rounded-full bg-white flex items-center justify-center overflow-hidden">
                                        <Image src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                    </div>
                                    <p className="mt-4 text-lg text-[#287FC4] font-semibold leading-tight px-1">
                                        {item.title}
                                    </p>
                                </Link>
                            ))}
                        </div>

                        {/* Mobile - Show limited universities with View More */}
                        <div className="md:hidden">
                            <div className="grid grid-cols-2 gap-4">
                                {(showAllUniversities ? universities : universities.slice(0, 4)).map((item) => (
                                    <Link key={item.id} href={item.url} className="group flex flex-col items-center text-center fadeUp">
                                        <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center overflow-hidden">
                                            <Image src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                        </div>
                                        <p className="mt-3 text-xs text-[#287FC4] font-semibold leading-tight px-1">
                                            {item.title}
                                        </p>
                                    </Link>
                                ))}
                            </div>
                            {!showAllUniversities && (
                                <div className="text-center mt-6">
                                    <button
                                        onClick={() => setShowAllUniversities(true)}
                                        className="font-semibold text-sm uppercase py-3 px-6 rounded-full cursor-pointer relative text-white bg-[#005A8B] hover:bg-[#005A8B] hover:shadow-lg transition-all duration-300"
                                    >
                                        VIEW MORE
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="w-full text-[#4A4A4A] text-sm fadeUp mb-10 md:mb-15">
                        <h2 className="mb-6 md:mb-8 lg:text-2xl md:text-xl text-lg font-bold text-black">Top Specialisations after BDS in India</h2>
                        <p className="mb-4 md:mb-6 text-xs md:text-sm leading-relaxed">After completing their BDS degree, they can further pursue a Master of Dental Surgery (MDS) degree in various fields of dentistry. This helps the student gain more knowledge about a particular aspect of the field, hone their skills, and gain better opportunities for their career.</p>
                        <p className="text-xs md:text-sm leading-relaxed">The specializations include Orthodontics, which is a field of dentistry that deals with the alignment of teeth and jaw. Then there is Oral and Maxillofacial Surgery, which includes surgery of the mouth, face, and jaw. The other specializations include Prosthodontics, which deals with replacing missing teeth. Periodontics is another field of dentistry that deals with the gums and their supporting structures. Then there is Endodontics, which deals with the inside of the tooth. The choice of the best specialization for oneself depends on one’s individual interests, what they want to achieve, and the scope of the particular field.</p>
                    </div>

                </div>
            </section>
        </>
    )
}