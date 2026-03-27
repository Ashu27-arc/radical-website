'use client';
import CounselorForm from './CounselorForm';

export default function CounselorSection() {
    return (
        <section className="relative bg-gradient-to-r from-[#ffffff] to-[#AAE1FF] overflow-hidden p-4 lg:p-10 md:p-6 rounded-[30px]">
            <div className="relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-30 md:gap-20 gap-10 items-center">
                    
                    {/* Left Content */}
                    <div className="">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Connect With <span className="bg-gradient-to-r from-[#005A8B] to-[#00CFB2] bg-clip-text text-transparent">Our Counselor</span>
                        </h2>
                        <p className="text-lg text-gray-700 lg:mb-24 mb-10 max-w-xl">
                            Connect with our expert counselors to get personalized advice and clarity for your next step.
                        </p>

                        <div className="space-y-8">
                            {/* Visit Us */}
                            <div className="flex items-start gap-5">
                                <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                                    <i className="pi pi-map-marker text-[#00B4B4] !text-xl"></i>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900">Visit Us</h4>
                                    <p className="text-[#089241] mt-1">
                                        C-56/30, C Block, Sector 62, Noida, Uttar Pradesh 201309
                                    </p>
                                </div>
                            </div>

                            {/* Call Us & Write to Us Row */}
                            <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
                                <div className="flex items-start gap-5">
                                    <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                                        <i className="pi pi-phone text-[#00B4B4] !text-xl"></i>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900">Call Us</h4>
                                        <p className="text-[#089241] mt-1">+91 97 97 97 2465</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5">
                                    <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                                        <i className="pi pi-envelope text-[#00B4B4] !text-xl"></i>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900">Write to Us</h4>
                                        <p className="text-[#089241] mt-1">Info@Radicaleducation.in</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Form Card */}
                    <div className="">
                        <div className="bg-white p-8 md:p-10 rounded-[30px] shadow-2xl">
                            <CounselorForm />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
