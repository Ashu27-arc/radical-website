'use client';
import CounselorForm from './CounselorForm';

export default function CounselorSection() {
    return (
        <section className="relative bg-[#EBFAFF] py-16 md:py-24 overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-10 right-10 opacity-10">
                <i className="pi pi-star-fill text-[80px] text-cyan-400"></i>
            </div>
            <div className="absolute bottom-20 left-10 opacity-10">
                <i className="pi pi-star text-[60px] text-cyan-400"></i>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    
                    {/* Left Content */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Connect With <span className="text-[#00B4B4]">Our Counselor</span>
                        </h2>
                        <p className="text-lg text-gray-700 mb-12 max-w-xl">
                            Connect with our expert counselors to get personalized advice and clarity for your next step.
                        </p>

                        <div className="space-y-8">
                            {/* Visit Us */}
                            <div className="flex items-start gap-5">
                                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                                    <i className="pi pi-map-marker text-[#00B4B4] text-xl"></i>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900">Visit Us</h4>
                                    <p className="text-[#00A69C] mt-1">
                                        C-56/30, C Block, Sector 62, Noida, Uttar Pradesh 201309
                                    </p>
                                </div>
                            </div>

                            {/* Call Us & Write to Us Row */}
                            <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
                                <div className="flex items-start gap-5">
                                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                                        <i className="pi pi-phone text-[#00B4B4] text-xl"></i>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900">Call Us</h4>
                                        <p className="text-[#00A69C] mt-1">+91 97 97 97 2465</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5">
                                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                                        <i className="pi pi-envelope text-[#00B4B4] text-xl"></i>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900">Write to Us</h4>
                                        <p className="text-[#00A69C] mt-1">Info@Radicaleducation.in</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Form Card */}
                    <div className="w-full lg:w-[480px]">
                        <div className="bg-white p-8 md:p-10 rounded-[30px] shadow-2xl">
                            <CounselorForm />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
