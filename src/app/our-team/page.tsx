import Image from "next/image";
import CounselorForm from "@/components/CounselorForm";

export default function OurTeam() {
    const teamMembers = [
        {
            name: "Hitashi Agrawal",
            role: "NEET UG/PG COUNSELOR",
            image: "/images/01.webp",
        },
        {
            name: "Pooja",
            role: "NNEET UG/PG COUNSELOR",
            image: "/images/02.webp",
        },
        {
            name: "Raj Kishore",
            role: "NEET UG/PG COUNSELOR",
            image: "/images/03.webp",
        },
        {
            name: "Sudakshina Singh",
            role: "NEET UG/PG COUNSELOR",
            image: "/images/04.webp",
        },
        {
            name: "Anupama Chauhan",
            role: "NEET UG/PG COUNSELOR",
            image: "/images/05.webp",
        },
        {
            name: "Rangnath Jha",
            role: "NEET UG/PG COUNSELOR",
            image: "/images/06.webp",
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
            <section className="container mx-auto px-4 -mt-20 md:-mt-96">
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
            <section className="container mx-auto px-4 py-8 md:py-12">
                <h2 className="text-black text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">
                    Our Expert <span className="text-blue-600">Counselors</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="relative h-56 md:h-64">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-4 text-center">
                                <h3 className="text-lg md:text-xl font-bold mb-2">{member.name}</h3>
                                <p className="text-xs md:text-sm text-[#1078CB]">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Connect With Counselor Section */}
            <section className="py-8 md:py-12 mb-16 md:mb-32 lg:mb-48">
                <div className="mx-auto px-4 md:px-12 lg:px-24">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-[#1a2332] mb-8 md:mb-12">
                        Connect With <span className="text-[#3b82f6]">Our Counselor</span>
                    </h2>
                    <div className="relative w-full h-[600px] md:h-[450px]">
                        <Image
                            src="/images/counselorImg.webp"
                            alt="Contact Background"
                            fill
                            className="object-cover rounded-2xl md:rounded-3xl"
                            quality={85}
                            sizes="100vw"
                            priority={false}
                        />
                        <div className="absolute inset-0 flex items-center justify-center p-4">
                            <div className="w-full max-w-lg bg-[#0B5F8C] rounded-2xl md:rounded-3xl p-5 md:p-6 lg:p-8 shadow-2xl mt-10 md:mt-80">
                                <CounselorForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

