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
            <section className="relative h-[300px] md:h-[600px] flex items-center justify-center overflow-hidden">
                <Image
                    src="/images/OurTeam.webp"
                    alt="Team Hero"
                    fill
                    className="object-cover w-full h-full"
                    priority
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 text-center text-white">
                    <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold mb-3">
                        THE FACES CHANGING
                        <br />
                        FUTURE CAREER
                    </h1>
                    <p className="text-base">
                        Our team of “professional medical counselor you can trust” works to <br className="md:block hidden" /> secure academic journey.
                    </p>
                </div>
            </section>

            <section className="overflow-hidden bg-[#F4F7F8]">
                <div className="container mx-auto px-3 md:px-4">
                    {/* Founder */}
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-8 md:gap-12 mb-12">
                        <div className="md:order-2">
                            <Image
                                src="/images/founderimg.webp"
                                alt="Background"
                                width={663}
                                height={418}
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="space-y-4 md:space-y-6 md:order-1 self-end">
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
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-8 md:gap-12 items-center">
                        <div className="md:order-2">
                            <Image
                                src="/images/co-founderimg.webp"
                                alt="Background"
                                width={663}
                                height={418}
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="space-y-4 md:space-y-6 md:order-1 self-end">
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
                </div>
            </section>
            <section className="bg-[#F4F7F8] py-10 md:py-16 lg:py-20">
                <div className="container mx-auto px-3 md:px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 gap-4 md:gap-6 max-w-6xl lg:pr-6">
                        {teamMembers.map((member, index) => (
                            <div
                                key={index}
                                className="bg-white p-4 rounded-2xl overflow-hidden hover:shadow-md transition-shadow flex flex-row"
                            >
                                <div className="relative w-40 h-40 md:w-50 md:h-50 shrink-0 rounded-xl overflow-hidden">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-3 md:p-4 flex flex-col flex-1 text-left min-w-0">
                                    <div className="flex items-center gap-1.5 mb-1">
                                        <h3 className="text-sm md:text-base font-bold text-gray-900 truncate">{member.name}</h3>
                                        <span className="shrink-0 w-4 h-4 rounded-full bg-[#1078CB] flex items-center justify-center" aria-hidden>
                                            <svg width="10" height="8" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 5L4.5 8.5L11 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </span>
                                    </div>
                                    <p className="text-xs text-gray-700 mb-2">{member.role}</p>
                                    <div className="flex items-center gap-1 text-gray-500 text-xs mb-2">
                                        <svg width="16" height="16" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.47917 10.3602L9.99167 11.2906C10.1243 11.3743 10.26 11.3676 10.3987 11.2704C10.5374 11.1739 10.59 11.0437 10.5563 10.8799L10.1503 9.15109L11.4978 7.99242C11.6261 7.87876 11.6628 7.74706 11.6078 7.59734C11.5528 7.44701 11.4418 7.36451 11.275 7.34984L9.51776 7.18851L8.82109 5.57426C8.75631 5.42637 8.64234 5.35242 8.47917 5.35242C8.31601 5.35242 8.20204 5.42637 8.13726 5.57426L7.44059 7.18851L5.68334 7.34893C5.51651 7.3642 5.40559 7.4467 5.35059 7.59642C5.29559 7.74615 5.33226 7.87815 5.46059 7.99242L6.80809 9.15109L6.40293 10.8799C6.3687 11.0437 6.42065 11.1739 6.55876 11.2704C6.69809 11.3676 6.83406 11.3743 6.96668 11.2906L8.47917 10.3602ZM5.79609 14.8958H3.54384C3.13317 14.8958 2.78362 14.7516 2.49517 14.4632C2.20673 14.1747 2.06251 13.8255 2.06251 13.4154V11.1623L0.421675 9.51592C0.276841 9.36742 0.170203 9.20304 0.101758 9.02276C0.0333137 8.84248 -0.000602999 8.66129 8.11208e-06 8.47917C0.000619223 8.29706 0.0348414 8.11587 0.102675 7.93559C0.170508 7.75531 0.276536 7.59093 0.420758 7.44243L2.06251 5.79609V3.54384C2.06251 3.13317 2.20673 2.78362 2.49517 2.49517C2.78362 2.20673 3.13317 2.06251 3.54384 2.06251H5.79609L7.44243 0.421675C7.59093 0.276841 7.75531 0.170203 7.93559 0.101758C8.11587 0.0333137 8.29706 -0.000602999 8.47917 8.11208e-06C8.66129 0.000619223 8.84248 0.0348414 9.02276 0.102675C9.20304 0.170508 9.36742 0.276536 9.51592 0.420758L11.1623 2.06251H13.4154C13.8249 2.06251 14.1741 2.20673 14.4632 2.49517C14.7516 2.78362 14.8958 3.13317 14.8958 3.54384V5.79609L16.5367 7.44243C16.6815 7.59093 16.7881 7.75531 16.8566 7.93559C16.925 8.11587 16.959 8.29706 16.9583 8.47917C16.9577 8.66129 16.9238 8.84248 16.8566 9.02276C16.7894 9.20304 16.683 9.36742 16.5376 9.51592L14.8958 11.1623V13.4154C14.8958 13.8249 14.7516 14.1741 14.4632 14.4632C14.1747 14.7516 13.8255 14.8958 13.4154 14.8958H11.1623L9.51592 16.5367C9.36742 16.6815 9.20304 16.7881 9.02276 16.8566C8.84248 16.925 8.66129 16.959 8.47917 16.9583C8.29706 16.9577 8.11587 16.9238 7.93559 16.8566C7.75531 16.7894 7.59093 16.683 7.44243 16.5376L5.79609 14.8958ZM6.18751 13.9792L8.07401 15.8657C8.17973 15.9714 8.31479 16.0243 8.47917 16.0243C8.64356 16.0243 8.77862 15.9714 8.88434 15.8657L10.7708 13.9792H13.4154C13.5798 13.9792 13.7149 13.9263 13.8206 13.8206C13.9263 13.7149 13.9792 13.5798 13.9792 13.4154V10.7708L15.8657 8.88434C15.9714 8.77862 16.0243 8.64356 16.0243 8.47917C16.0243 8.31479 15.9714 8.17973 15.8657 8.07401L13.9792 6.18751V3.54384C13.9792 3.37884 13.9263 3.24348 13.8206 3.13776C13.7149 3.03204 13.5798 2.97917 13.4154 2.97917H10.7708L8.88434 1.09267C8.77923 0.987564 8.64417 0.935008 8.47917 0.935008C8.31417 0.935008 8.17912 0.987869 8.07401 1.09359L6.18751 2.97917H3.54384C3.37884 2.97917 3.24348 3.03204 3.13776 3.13776C3.03204 3.24348 2.97917 3.37884 2.97917 3.54384V6.18751L1.09267 8.07401C0.986952 8.17973 0.934092 8.31479 0.934092 8.47917C0.934092 8.64356 0.986952 8.77862 1.09267 8.88434L2.97917 10.7708V13.4154C2.97917 13.5798 3.03204 13.7149 3.13776 13.8206C3.24348 13.9263 3.37884 13.9792 3.54384 13.9792H6.18751Z" fill="#4A4A4A"/>
                                        </svg>
                                        <span className="truncate">{member.experience}</span>
                                    </div>
                                    <div className="flex items-center gap-1 mb-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" aria-hidden />
                                        <span className="text-xs text-green-600">{member.available ? "Available" : "Unavailable"}</span>
                                    </div>
                                    <a
                                        href="#connect-counselor"
                                        className="mt-auto w-full py-3 px-3 rounded-full bg-[#DFF1FF] text-[#005A8B] font-semibold text-center text-xs hover:bg-[#DFF1FF] transition-colors"
                                    >
                                        Book A Call
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            

            {/* Connect With Counselor Section - Book Free Counselling Banner */}
            <section id="connect-counselor" className="pb-8 md:pb-16 bg-[#F4F7F8]">
                <div className="container mx-auto px-3 md:px-4">
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
                            className="absolute left-6 md:left-12 lg:left-16 bottom-0 md:bottom-10 -translate-y-1/2 z-10 inline-flex items-center justify-center px-6 py-1 md:px-8 md:py-2.5 rounded-[60px] bg-[#FF3D6B] text-white font-semibold text-sm md:text-base hover:bg-[#FF3D6B] transition-colors shadow-lg hover:shadow-xl"
                        >
                            Book Now
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

