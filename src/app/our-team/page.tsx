import Image from "next/image";
import CounselorForm from "@/components/CounselorForm";

export default function OurTeam() {
    const teamMembers = [
        {
            name: "Hitashi Aggarwal",
            role: "NEET UG/PG COUNSELOR",
            image: "/images/01.webp",
            experience: "12 years of experience",
            available: true,
        },
        {
            name: "Pooja",
            role: "NEET UG/PG COUNSELOR",
            image: "/images/02.webp",
            experience: "12 years of experience",
            available: true,
        },
        {
            name: "Raj Kishore",
            role: "NEET UG/PG COUNSELOR",
            image: "/images/03.webp",
            experience: "12 years of experience",
            available: true,
        },
        {
            name: "Sudakshina Singh",
            role: "NEET UG/PG COUNSELOR",
            image: "/images/04.webp",
            experience: "12 years of experience",
            available: true,
        },
        {
            name: "Anupama Chauhan",
            role: "NEET UG/PG COUNSELOR",
            image: "/images/05.webp",
            experience: "12 years of experience",
            available: true,
        },
        {
            name: "Rangnath Jha",
            role: "NEET UG/PG COUNSELOR",
            image: "/images/06.webp",
            experience: "12 years of experience",
            available: true,
        },
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
                <Image
                    src="/images/OurTeam.webp"
                    alt="Team Hero"
                    fill
                    className="object-cover w-full h-full"
                    priority
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 text-center text-white">
                    <h1 className="text-5xl md:text-4xl font-bold mb-3">
                        THE FACES CHANGING
                        <br />
                        FUTURE CAREER
                    </h1>
                    <p className="text-base">
                        Our team of “professional medical counselor you can trust” works to <br /> secure academic journey.
                    </p>
                </div>
            </section>

            {/* Founder Section */}
            <section className="container mx-auto px-3 md:px-4 -mt-20 md:-mt-96 py-16 bg-gray-50">
                {/* Founder */}
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:-mb-[120px]">
                    <div className="relative h-[350px] md:h-[500px] flex items-center justify-center md:order-2">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative w-[280px] h-[230px] md:w-[400px] md:h-[330px]">
                                <Image
                                    src="/images/Rectangle.webp"
                                    alt="Background"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                        
                        {/* Left side image */}
                        <Image
                            src="/images/groups/Group-1.webp"
                            alt="Team Member"
                            width={200}
                            height={350}
                            className="absolute left-0 md:left-15 z-10 object-contain mb-20 mt-28 md:mb-30 md:mt-40 w-[120px] md:w-[200px] h-auto"
                        />
                        
                        {/* Center main founder image */}
                        <Image
                            src="/images/founder.webp"
                            alt="Founder"
                            width={250}
                            height={400}
                            className="relative z-10 object-contain mt-5 md:mt-7 mr-0 md:mr-60 w-[150px] md:w-[250px] h-auto"
                        />
                        
                        {/* Right side image */}
                        <Image
                            src="/images/groups/Group-2.webp"
                            alt="Team Member"
                            width={200}
                            height={350}
                            className="absolute right-0 md:right-20 z-10 object-contain mt-20 md:mt-30 mr-0 md:mr-10 w-[120px] md:w-[200px] h-auto"
                        />
                    </div>
                    <div className="space-y-4 md:space-y-6 md:order-1">
                        <p className="text-sm text-gray-500 uppercase tracking-wide">Name Of Founder</p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">Founder</h2>
                        <div className="border-l-4 border-teal-500 pl-4 md:pl-6">
                            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                                Write Your Friends And Collabs Exclusive Benefits. Earn More With
                                Every Successful Referral. Invite Your Friends And Unlock Exclusive
                                Benefits. Earn More With Every Successful Referral.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Co-Founder */}
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                    <div className="relative h-[350px] md:h-[500px] flex items-center justify-center md:order-2">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative w-[280px] h-[230px] md:w-[400px] md:h-[330px]">
                                <Image
                                    src="/images/Rectangle-2.webp"
                                    alt="Background"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                        
                        {/* Left side image */}
                        <Image
                            src="/images/groups/Group-4.webp"
                            alt="Team Member"
                            width={180}
                            height={300}
                            className="absolute left-0 md:left-[-10px] top-28 md:top-40 z-10 object-contain w-[110px] md:w-[180px] h-auto"
                        />
                        
                        {/* Right side image */}
                        <Image
                            src="/images/groups/Group-3.webp"
                            alt="Team Member"
                            width={180}
                            height={300}
                            className="absolute right-0 md:left-40 bottom-4 md:bottom-8 z-10 object-contain w-[110px] md:w-[180px] h-auto"
                        />
                        
                        {/* Center main co-founder image */}
                        <Image
                            src="/images/founder-2.webp"
                            alt="Co-Founder"
                            width={250}
                            height={500}
                            className="relative z-10 object-contain mt-4 md:mt-6 ml-0 md:ml-60 w-[150px] md:w-[250px] h-auto"
                        />
                    </div>
                    <div className="space-y-4 md:space-y-6 md:order-1">
                        <p className="text-sm text-gray-500 uppercase tracking-wide">Name Of Co-Founder</p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">Co-Founder</h2>
                        <div className="border-l-4 border-teal-500 pl-4 md:pl-6">
                            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                                Write Your Friends And Collabs Exclusive Benefits. Earn More With
                                Every Successful Referral. Invite Your Friends And Unlock Exclusive
                                Benefits. Earn More With Every Successful Referral.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Members Section */}
            <section className="container mx-auto px-1 md:px-2 py-16 bg-gray-50">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-20 max-w-4xl mx-auto">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-row"
                        >
                            <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-50 md:h-50 shrink-0 rounded-l-lg overflow-hidden">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-3 md:p-4 flex flex-col flex-1 text-left min-w-0">
                                <div className="flex items-center gap-1.5 mb-0.5">
                                    <h3 className="text-sm md:text-base font-bold text-gray-900 truncate">{member.name}</h3>
                                    <span className="shrink-0 w-4 h-4 rounded-full bg-[#1078CB] flex items-center justify-center" aria-hidden>
                                        <svg width="10" height="8" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 5L4.5 8.5L11 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </span>
                                </div>
                                <p className="text-xs text-gray-700 mb-1">{member.role}</p>
                                <div className="flex items-center gap-1 text-gray-500 text-xs mb-1">
                                    <svg className="w-3.5 h-3.5 shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="truncate">{member.experience}</span>
                                </div>
                                <div className="flex items-center gap-1 mb-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" aria-hidden />
                                    <span className="text-xs text-green-600">{member.available ? "Available" : "Unavailable"}</span>
                                </div>
                                <a
                                    href="#connect-counselor"
                                    className="mt-auto w-full py-2 px-3 rounded-lg bg-[#DFF1FF] text-[#005A8B] font-medium text-center text-xs hover:bg-[#DFF1FF] transition-colors"
                                >
                                    Book A Call
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Connect With Counselor Section - Book Free Counselling Banner */}
            <section id="connect-counselor" className="py-8 md:py-16 mb-2 md:mb-4 lg:mb-6 bg-gray-50">
                <div className="mx-auto px-2 md:px-6 lg:px-8 max-w-6xl">
                    <div className="relative rounded-2xl md:rounded-3xl overflow-hidden">
                        <Image
                            src="/images/fulbgteam.webp"
                            alt="Book Your 20 MIN Free Counselling Session - NEET UG Counselling"
                            width={1200}
                            height={480}
                            className="w-full h-auto object-cover"
                        />
                        <a
                            href="#connect-counselor"
                            className="absolute left-8 md:left-12 lg:left-16 bottom-10 -translate-y-1/2 z-10 inline-flex items-center justify-center px-6 py-2 md:px-8 md:py-2.5 rounded-[60px] bg-[#FF3D6B] text-white font-semibold text-sm md:text-base hover:bg-[#FF3D6B] transition-colors shadow-lg hover:shadow-xl"
                        >
                            Book Now
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

