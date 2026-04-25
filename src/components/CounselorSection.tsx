'use client';
import Image from 'next/image';
import CounselorForm from './CounselorForm';

export default function CounselorSection() {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <section className="relative bg-gradient-to-r from-[#DEFFFA] to-[#AAE1FF] overflow-hidden p-6 md:p-10 lg:p-16 rounded-[24px] md:rounded-[30px] lg:rounded-[40px] font-poppins shadow-sm">
                <div className="relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">

                        {/* Left Content */}
                        <div className="max-w-2xl">
                            <h2 className="text-[32px] md:text-[36px] font-semibold text-gray-900 mb-6 leading-tight">
                                Request a free callback <br />
                                <span className="bg-gradient-to-r from-[#005A8B] to-[#00CFB2] bg-clip-text text-transparent">from our Counsellor</span>
                            </h2>
                            <p className="text-base md:text-lg font-normal text-gray-700 mb-10 lg:mb-16">
                                We will call you back to give you personalised advice and clarity for your next steps.
                            </p>

                            <div className="space-y-6 md:space-y-8">
                                {/* Visit Us */}
                                <div className="flex items-start gap-4 md:gap-5">
                                    <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                                        <Image src="/icons/location.png" alt="Location Icon" width={28} height={28} className="object-contain w-6 h-6 md:w-8 md:h-8" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-[#0A1A2F]">Visit us</h4>
                                        <p className="text-[#089241] mt-1 text-sm md:text-base">
                                            C-56/30, C Block, Sector 62, Noida, Uttar Pradesh 201309
                                        </p>
                                    </div>
                                </div>

                                {/* Call & Write Row */}
                                <div className="flex flex-col sm:flex-row gap-6 md:gap-10">
                                    <div className="flex items-start gap-4 md:gap-5">
                                        <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                                            <Image src="/icons/phone.png" alt="Phone Icon" width={28} height={28} className="object-contain w-6 h-6 md:w-8 md:h-8" />
                                        </div>
                                        <div className="flex flex-wrap items-center gap-x-2">
                                            <h4 className="text-lg font-semibold text-[#0A1A2F]">Call us</h4>
                                            <a href="tel:+919797972465" className="text-[#089241] text-sm md:text-base hover:underline">+91 97 97 97 2465</a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 md:gap-5">
                                        <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                                            <Image src="/icons/mail.png" alt="Mail Icon" width={28} height={28} className="object-contain w-6 h-6 md:w-8 md:h-8" />
                                        </div>
                                        <div className="flex flex-wrap items-center gap-x-2">
                                            <h4 className="text-lg font-semibold text-[#0A1A2F]">Write to us</h4>
                                            <a href="mailto:Info@Radicaleducation.in" className="text-[#089241] text-sm md:text-base hover:underline">info@radicaleducation.in</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Form Card */}
                        <div className="flex justify-center lg:justify-end">
                            <div className="w-full max-w-[450px] bg-white p-6 md:p-8 lg:p-10 rounded-[24px] shadow-xl">
                                <CounselorForm />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
