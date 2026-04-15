"use client";

import { Image } from "primereact/image";
import Link from "next/link";
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

export default function MbbsInIndiaPage() {
    return (
        <>
            <FloatingWhatsApp />
            <section className="lg:py-34 md:py-30 py-20 relative overflow-hidden z-2 bg-[url('/images/mbbs-in-indiaHero.webp')] bg-cover bg-right bg-no-repeat">
                {/* <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,126,200,1)_0%,rgba(80,166,217,1)_20%,rgba(255,255,255,0)_87%)] -z-1" /> */}
                <div className="container px-3 md:px-4 fadeUp">
                    <div className="w-full lg:w-4/10 md:8/10 text-left">
                        <h1 className="uppercase lg:text-5xl text-4xl font-bold text-white lg:mb-6 mb-4">MBBS IN INDIA</h1>
                        <p className="text-white text-lg m-0 p-0">Quality medical education at affordable costs—build your future as a doctor with confidence.</p>
                    </div>
                </div>
            </section>
            <section className="lg:py-15 py-10 overflow-hidden">
                <div className="container px-3 md:px-4">
                    <div className="flex md:flex-row flex-col md:gap-2 items-end">
                        <div className="w-full lg:w-8/12 md:6/10 text-[#4A4A4A] text-sm pb-10 fadeLeft">
                            <h2 className="mb-8 text-2xl font-bold text-black">Medical Studies in India</h2>
                            <p className="mb-6">Medical studies in India have good academic learning, practical experience, and global recognition. There are many good colleges and universities, and one can receive a quality education at a lower cost. MBBS courses cover all the basic medical aspects and provide students with a lot of practice from real-life patients.</p>
                            <p>The diversity of patients in India helps students learn about all sorts of health-related issues. With proper courses, qualified teachers, and modern facilities, studying medicine in India helps young doctors prepare for practice in local and global environments.</p>
                        </div>
                        <div className="w-full lg:w-4/12 md:4/10 fadeRight">
                            <div className="flex items-center">
                                <div>
                                    <div className="w-[290px] md:mx-0 mx-auto p-6 rounded-xl bg-[#E3F4F3] intereInfoCard translate-x-8">
                                        <h5 className="mb-3 text-[#005A8B] leading-6 font-bold text-lg max-w-[230px]">Are you interested in studying medicine in India?</h5>
                                        <button className='font-semibold text-xs uppercase py-4 px-6 rounded-full cursor-pointer relative text-white! bg-gradient-to-r! from-[#00CFB2]! to-[#005A8B]! border-[#00CFB2]!'>
                                            BOOK CONSULTATION
                                        </button>
                                    </div>
                                </div>
                                <Image src="/images/intere.webp" alt="" className="max-w-[150px] sm:max-w-[170px] md:max-w-[180px] lg:max-w-[200px] relative z-1" />
                            </div>
                        </div>
                    </div>
                    <div className="lg:p-15 p-10 rounded-xl bg-[#DFF1FF] mb-10">
                        <h2 className="text-center fadeUp lg:mb-10 md:mb-8 mb-6 lg:text-4xl md:text-2xl text-xl font-bold text-black capitalize">Universities where you can study <span className="text-[#287FC4]">medicine in India:</span></h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-10 md:gap-6 gap-6">
                            {universities.map((item) => (
                                <Link key={item.id} href={item.url} className="group flex flex-col items-center text-center fadeUp">
                                    <div className="w-34 md:w-44 md:h-44 h-34 rounded-full bg-white">
                                        <Image src={item.image} alt={item.title} className="w-full" />
                                    </div>
                                    <p className="mt-4 text-sm md:text-lg text-[#287FC4] font-semibold leading-tight">
                                        {item.title}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="w-full text-[#4A4A4A] text-sm fadeUp mb-15">
                        <h2 className="mb-8 text-2xl font-bold text-black">Why choose India as your destination to study MBBS?</h2>
                        <p className="mb-6">Russia has emerged as one of the most sought-after places for international students wishing to study MBBS by providing a highly effective structure and an inexpensive education system. The medical universities in Russia are recognized by international organizations such as the WHO and the NMC, enabling students to build a successful medical career in other countries as well. The course structure is highly effective in providing the student with the necessary knowledge and skills by including both theoretical and practical knowledge.</p>
                        <p>The most important advantage of studying MBBS in Russia is that it is highly inexpensive. The fee structure is highly affordable in comparison to other countries. The admission process is transparent and uncomplicated, and the student is not required to pay any entrance fees or donations.The universities in Russia offer English-medium courses, making it easier for international students to adapt. The cultural diversity in the universities is highly advantageous in providing students with global exposure and personality development. With highly advanced facilities and highly experienced teachers, Russia is the most effective and dependable option for students to build a successful medical career.</p>
                    </div>

                </div>
            </section>
        </>
    )
}