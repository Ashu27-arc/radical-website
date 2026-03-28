import Image from "next/image";
import CounselorSection from "@/components/CounselorSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function OurTeam() {
    const teamMembers = [
        {
            name: "Hitashi Aggarwal",
            role: "NEET UG/PG COUNSELLOR",
            image: "/images/011.webp",
            experience: "Experience: 7+ Years",
            available: true,
        },
        {
            name: "Shivanshu shakya",
            role: "NEET UG/PG COUNSELLOR",
            image: "/images/022.webp",
            experience: "Experience: 3+ Years",
            available: true,
        },
        {
            name: "Pooja Kumari",
            role: "NEET UG/PG COUNSELLOR",
            image: "/images/033.webp",
            experience: "Experience: 4+ Years",
            available: true,
        },
        {
            name: "Raj Kishore",
            role: "NEET UG/PG COUNSELLOR",
            image: "/images/044.webp",
            experience: "Experience: 3+ Years",
            available: true,
        },
        {
            name: "Sudakshina Singh",
            role: "NEET UG/PG COUNSELLOR",
            image: "/images/055.webp",
            experience: "Experience: 4+ Years",
            available: true,
        },
        {
            name: "Manish Jha",
            role: "NEET UG/PG COUNSELLOR",
            image: "/images/066.webp",
            experience: "Experience: 5+ Years",
            available: true,
        },
        {
            name: "Rangnath Jha",
            role: "NEET UG/PG COUNSELLOR",
            image: "/images/077.webp",
            experience: "Experience: 6+ Years",
            available: true,
        },
        {
            name: "Shashwat Pandey",
            role: "NEET UG/PG COUNSELLOR",
            image: "/images/088.webp",
            experience: "Experience: 4+ Years",
            available: true,
        },
    ];

    return (
        <div className="min-h-screen">
            <FloatingWhatsApp />
            {/* Hero Section */}
            <section className="relative h-[300px] md:h-[600px] flex items-center justify-center overflow-hidden">
                <Image
                    src="/images/team-banner.webp"
                    alt="Team Hero"
                    fill
                    className="object-cover w-full h-full"
                    priority
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 text-center text-white">
                    <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold mb-3">
                        The faces changing your
                        <br />
                        future career
                    </h1>
                    <p className="text-base">
                        Our team of “Professional Medical Counsellor you can trust” works to <br className="md:block hidden" /> secure academic journey.
                    </p>
                </div>
            </section>

            {/* <section className="overflow-hidden bg-[#F4F7F8]">
                <div className="container mx-auto px-3 md:px-4">
                    {/* Founder 
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
                        <div className="space-y-4 md:space-y-8 md:order-1 self-end">
                            <p className="text-sm font-bold text-[#0B2E3C] pl-4 md:pl-6">Name Of Founder</p>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 pl-4 md:pl-6">Founder</h2>
                            <div className="border-l-4 border-[#00CFB2] pl-4 md:pl-6">
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
                        <div className="space-y-4 md:space-y-8 md:order-1 self-end">
                            <p className="text-sm font-bold text-[#0B2E3C] pl-4 md:pl-6">Name Of Co-Founder</p>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 pl-4 md:pl-6">Co-Founder</h2>
                            <div className="border-l-4 border-[#00CFB2] pl-4 md:pl-6">
                                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                                    Write Your Friends And Collabs Exclusive Benefits. Earn More With
                                    Every Successful Referral. Invite Your Friends And Unlock Exclusive
                                    Benefits. Earn More With Every Successful Referral.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <section className="bg-[#F4F7F8] py-10 md:py-16 lg:py-20">
                <div className="container mx-auto px-3 md:px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-6xl mx-auto">
                        {teamMembers.map((member, index) => (
                            <div
                                key={index}
                                className="bg-white p-4 rounded-2xl overflow-hidden hover:shadow-md transition-shadow grid grid-cols-2 gap-2"
                            >
                                <div className="relative rounded-xl overflow-hidden h-[230px]">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        width={400}
                                        height={300}
                                        className="object-cover h-[230px] w-full"
                                    />
                                </div>
                                <div className="p-3 md:p-4 flex flex-col flex-1 text-left">
                                    <div className="flex items-center gap-1.5 mb-2">
                                        <h3 className="text-sm md:text-base font-bold text-gray-900 truncate">{member.name}</h3>
                                        <span className="shrink-0 w-4 h-4 rounded-full flex items-center justify-center" aria-hidden>
                                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4449 0.59161C10.3059 0.369463 10.101 0.196189 9.85894 0.0959077C9.61684 -0.00437349 9.3495 -0.0266726 9.09412 0.0321152L7.28168 0.44846C7.09594 0.491154 6.90293 0.491154 6.71718 0.44846L4.90474 0.0321152C4.64937 -0.0266726 4.38203 -0.00437349 4.13992 0.0959077C3.89782 0.196189 3.693 0.369463 3.55398 0.59161L2.56611 2.16827C2.4653 2.32957 2.32922 2.46566 2.16793 2.56748L0.591369 3.55542C0.36962 3.69432 0.196611 3.89882 0.096358 4.14053C-0.00389508 4.38224 -0.0264197 4.64916 0.0319106 4.90425L0.448228 6.71883C0.490766 6.90426 0.490766 7.09692 0.448228 7.28235L0.0319106 9.09592C-0.0266464 9.35116 -0.00423514 9.61831 0.0960288 9.86022C0.196293 10.1021 0.369428 10.3068 0.591369 10.4458L2.16793 11.4337C2.32922 11.5345 2.4653 11.6706 2.56711 11.8319L3.55499 13.4086C3.83925 13.8632 4.38157 14.088 4.90474 13.9681L6.71718 13.5517C6.90293 13.509 7.09594 13.509 7.28168 13.5517L9.09513 13.9681C9.35036 14.0266 9.61748 14.0042 9.85938 13.9039C10.1013 13.8037 10.3059 13.6305 10.4449 13.4086L11.4328 11.8319C11.5336 11.6706 11.6696 11.5345 11.8309 11.4337L13.4085 10.4458C13.6305 10.3066 13.8035 10.1017 13.9036 9.8596C14.0037 9.61749 14.0258 9.3502 13.967 9.09492L13.5516 7.28235C13.509 7.0966 13.509 6.90358 13.5516 6.71782L13.968 4.90425C14.0266 4.64912 14.0044 4.38205 13.9043 4.14015C13.8042 3.89824 13.6313 3.69352 13.4095 3.55441L11.8319 2.56647C11.6709 2.46548 11.5348 2.32935 11.4338 2.16827L10.4449 0.59161ZM9.93785 4.75203C10.0002 4.63737 10.0156 4.503 9.98094 4.37719C9.94624 4.25138 9.86409 4.14393 9.75179 4.07745C9.63948 4.01098 9.50576 3.99066 9.37878 4.02077C9.2518 4.05089 9.14145 4.12908 9.07094 4.23891L6.43493 8.70075L4.84325 7.17651C4.79603 7.12802 4.73953 7.08954 4.67712 7.06336C4.61471 7.03718 4.54766 7.02384 4.47998 7.02414C4.4123 7.02443 4.34538 7.03835 4.28319 7.06508C4.22101 7.0918 4.16485 7.13077 4.11805 7.17967C4.07126 7.22857 4.03479 7.28639 4.01082 7.34969C3.98686 7.41298 3.97588 7.48046 3.97856 7.54809C3.98123 7.61572 3.99749 7.68212 4.02638 7.74333C4.05527 7.80454 4.09619 7.8593 4.1467 7.90435L6.19704 9.86913C6.25191 9.92161 6.31794 9.96101 6.39017 9.98439C6.46241 10.0078 6.53899 10.0145 6.61421 10.0041C6.68942 9.99378 6.76132 9.96655 6.82453 9.92449C6.88775 9.88243 6.94064 9.82664 6.97927 9.76127L9.93785 4.75203Z" fill="#2663EE" />
                                            </svg>
                                        </span>
                                    </div>
                                    <p className="text-xs font-medium text-[#4A4A4A] mb-3">{member.role}</p>
                                    <div className="flex items-center gap-1 text-gray-500 text-xs mb-3">
                                        <svg width="16" height="16" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.47917 10.3602L9.99167 11.2906C10.1243 11.3743 10.26 11.3676 10.3987 11.2704C10.5374 11.1739 10.59 11.0437 10.5563 10.8799L10.1503 9.15109L11.4978 7.99242C11.6261 7.87876 11.6628 7.74706 11.6078 7.59734C11.5528 7.44701 11.4418 7.36451 11.275 7.34984L9.51776 7.18851L8.82109 5.57426C8.75631 5.42637 8.64234 5.35242 8.47917 5.35242C8.31601 5.35242 8.20204 5.42637 8.13726 5.57426L7.44059 7.18851L5.68334 7.34893C5.51651 7.3642 5.40559 7.4467 5.35059 7.59642C5.29559 7.74615 5.33226 7.87815 5.46059 7.99242L6.80809 9.15109L6.40293 10.8799C6.3687 11.0437 6.42065 11.1739 6.55876 11.2704C6.69809 11.3676 6.83406 11.3743 6.96668 11.2906L8.47917 10.3602ZM5.79609 14.8958H3.54384C3.13317 14.8958 2.78362 14.7516 2.49517 14.4632C2.20673 14.1747 2.06251 13.8255 2.06251 13.4154V11.1623L0.421675 9.51592C0.276841 9.36742 0.170203 9.20304 0.101758 9.02276C0.0333137 8.84248 -0.000602999 8.66129 8.11208e-06 8.47917C0.000619223 8.29706 0.0348414 8.11587 0.102675 7.93559C0.170508 7.75531 0.276536 7.59093 0.420758 7.44243L2.06251 5.79609V3.54384C2.06251 3.13317 2.20673 2.78362 2.49517 2.49517C2.78362 2.20673 3.13317 2.06251 3.54384 2.06251H5.79609L7.44243 0.421675C7.59093 0.276841 7.75531 0.170203 7.93559 0.101758C8.11587 0.0333137 8.29706 -0.000602999 8.47917 8.11208e-06C8.66129 0.000619223 8.84248 0.0348414 9.02276 0.102675C9.20304 0.170508 9.36742 0.276536 9.51592 0.420758L11.1623 2.06251H13.4154C13.8249 2.06251 14.1741 2.20673 14.4632 2.49517C14.7516 2.78362 14.8958 3.13317 14.8958 3.54384V5.79609L16.5367 7.44243C16.6815 7.59093 16.7881 7.75531 16.8566 7.93559C16.925 8.11587 16.959 8.29706 16.9583 8.47917C16.9577 8.66129 16.9238 8.84248 16.8566 9.02276C16.7894 9.20304 16.683 9.36742 16.5376 9.51592L14.8958 11.1623V13.4154C14.8958 13.8249 14.7516 14.1741 14.4632 14.4632C14.1747 14.7516 13.8255 14.8958 13.4154 14.8958H11.1623L9.51592 16.5367C9.36742 16.6815 9.20304 16.7881 9.02276 16.8566C8.84248 16.925 8.66129 16.959 8.47917 16.9583C8.29706 16.9577 8.11587 16.9238 7.93559 16.8566C7.75531 16.7894 7.59093 16.683 7.44243 16.5376L5.79609 14.8958ZM6.18751 13.9792L8.07401 15.8657C8.17973 15.9714 8.31479 16.0243 8.47917 16.0243C8.64356 16.0243 8.77862 15.9714 8.88434 15.8657L10.7708 13.9792H13.4154C13.5798 13.9792 13.7149 13.9263 13.8206 13.8206C13.9263 13.7149 13.9792 13.5798 13.9792 13.4154V10.7708L15.8657 8.88434C15.9714 8.77862 16.0243 8.64356 16.0243 8.47917C16.0243 8.31479 15.9714 8.17973 15.8657 8.07401L13.9792 6.18751V3.54384C13.9792 3.37884 13.9263 3.24348 13.8206 3.13776C13.7149 3.03204 13.5798 2.97917 13.4154 2.97917H10.7708L8.88434 1.09267C8.77923 0.987564 8.64417 0.935008 8.47917 0.935008C8.31417 0.935008 8.17912 0.987869 8.07401 1.09359L6.18751 2.97917H3.54384C3.37884 2.97917 3.24348 3.03204 3.13776 3.13776C3.03204 3.24348 2.97917 3.37884 2.97917 3.54384V6.18751L1.09267 8.07401C0.986952 8.17973 0.934092 8.31479 0.934092 8.47917C0.934092 8.64356 0.986952 8.77862 1.09267 8.88434L2.97917 10.7708V13.4154C2.97917 13.5798 3.03204 13.7149 3.13776 13.8206C3.24348 13.9263 3.37884 13.9792 3.54384 13.9792H6.18751Z" fill="#4A4A4A" />
                                        </svg>
                                        <span className="truncate">{member.experience}</span>
                                    </div>
                                    <div className="flex items-center gap-1 mb-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" aria-hidden />
                                        <span className="text-xs text-green-600">{member.available ? "Available" : "Unavailable"}</span>
                                    </div>
                                    <a
                                        href="https://www.neetbhaiya.in/dedicated-counsellor"
                                        className="mt-auto w-full py-3 px-3 rounded-[100px] bg-[#005A8B] text-[#FFFFFF] font-semibold text-center text-xs hover:bg-[#DFF1FF] transition-colors"
                                    >
                                        Book A Call
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="connect-counselor" className="pb-16">
                <div className="container mx-auto px-3 md:px-4">
                     <CounselorSection />
                </div>
            </section>
        </div>
    );
}

