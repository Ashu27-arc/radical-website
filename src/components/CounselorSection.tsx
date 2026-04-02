'use client';
import Image from 'next/image';
import CounselorForm from './CounselorForm';

export default function CounselorSection() {
    return (
        <section className="relative bg-gradient-to-r from-[#DEFFFA] to-[#AAE1FF] overflow-hidden p-4 lg:p-10 md:p-6 rounded-[30px] font-poppins">
            <div className="relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-30 md:gap-20 gap-10 items-center">

                    {/* Left Content */}
                    <div className="">
                        <h2 className="text-4xl md:text-[36px] font-semibold text-gray-900 mb-6">
                            Request a free callback <br /> from
                            <span className="bg-gradient-to-r from-[#005A8B] to-[#00CFB2] bg-clip-text text-transparent"> Our Counsellor</span>
                        </h2>
                        <p className="text-[18px] font-light text-black lg:mb-24 mb-10 max-w-xl">
                            We will call you back to give you personalised advice and clarity for your next steps
                        </p>

                        <div className="space-y-8">
                            {/* Visit Us */}
                            <div className="flex items-start gap-5">
                                <div className="flex-shrink-0 w-16 h-16 bg-white rounded-[34px] flex items-center justify-center shadow-md">
                                    <Image src="/icons/location.png" alt="Location Icon" width={28} height={28} className="object-contain" />
                                </div>
                                <div>
                                    <h4 className="text-[18px] font-bold font-poppins text-[#0A1A2F]">Visit Us</h4>
                                    <p className="text-[#089241] mt-1 text-[14px] font-poppins">
                                        C-56/30, C Block, Sector 62, Noida, Uttar Pradesh 201309
                                    </p>
                                </div>
                            </div>

                            {/* Call Us & Write to Us Row */}
                            <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
                                <div className="flex items-start gap-5">
                                    <div className="flex-shrink-0 w-16 h-16 bg-white rounded-[34px] flex items-center justify-center shadow-md">
                                        <Image src="/icons/phone.png" alt="Phone Icon" width={28} height={28} className="object-contain" />
                                    </div>
                                    <div>
                                        <h4 className="text-[18px] font-bold font-poppins text-[#0A1A2F]">Call Us</h4>
                                        <a href="tel:+919797972465" className="text-[#089241] mt-1 text-[14px] font-poppins whitespace-nowrap hover:underline">+91 97 97 97 2465</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5">
                                    <div className="flex-shrink-0 w-16 h-16 bg-white rounded-[34px] flex items-center justify-center shadow-md">
                                        <Image src="/icons/mail.png" alt="Mail Icon" width={28} height={28} className="object-contain" />
                                    </div>
                                    <div>
                                        <h4 className="text-[18px] font-bold font-poppins text-[#0A1A2F]">Write to Us</h4>
                                        <a href="mailto:Info@Radicaleducation.in" className="text-[#089241] mt-1 text-[14px] font-poppins hover:underline">Info@Radicaleducation.in</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Form Card */}
                    <div className="">
                        <div className="bg-white p-8 md:p-10 rounded-[18px] shadow-[0_2px_10px_rgba(0,90,139,0),0_5px_20px_rgba(0,90,139,0.01),0_10px_40px_rgba(0,90,139,0.05),0_20px_80px_rgba(0,90,139,0.09),0_40px_100px_rgba(0,90,139,0.1)]">
                            <CounselorForm />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
