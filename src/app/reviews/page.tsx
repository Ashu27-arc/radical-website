"use client";

import GoogleReviews from '@/components/GoogleReviews';
import TestimonialSlider from '@/components/TestimonialSlider';
export default function TestimonialsPage() {
    return (
        <div className="w-full bg-white">

            {/* =================== TOP TESTIMONIAL SECTION =================== */}
            <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden bg-[#0a5b87]">

                {/* Background images */}
                <div className="absolute inset-0 flex">
                    <img
                        src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1"
                        className="w-1/2 h-full object-cover opacity-20"
                    />
                    <img
                        src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655"
                        className="w-1/2 h-full object-cover opacity-20"
                    />
                </div>

                {/* Blue overlay */}
                <div className="absolute inset-0 bg-[#0a5b87]/80"></div>

                {/* Content */}
                {/* Content */}
                <div className="relative z-10 max-w-6xl mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">

                    <h1 className="text-2xl md:text-4xl font-extrabold leading-tight uppercase">
                        What Students Says About <br />
                        <span className="text-white">Radical Education</span>
                    </h1>

                    <p className="mt-4 max-w-3xl text-sm md:text-base text-[#d2ebff]">
                        I Designed A Web UI For An AI-Powered HR Co-Pilot That Helps HRs <br />
                        Generate Job Descriptions And Screen Resumes
                    </p>

                    {/* Video Card with side images */}
                    <div className="mt-10 relative flex items-center justify-center gap-4 md:gap-8 w-full px-4">
                        {/* Left Image */}
                        <img
                            src="/images/reviews/review.webp"
                            className="hidden md:block w-82 h-32 md:w-90 md:h-40 object-left rounded-lg opacity-40"
                        />

                        {/* Main Video Card */}
                        <div className="relative rounded-xl overflow-hidden shadow-2xl w-[90%] md:w-[520px] h-[260px]">
                            <img
                                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
                                className="w-full h-full object-cover"
                            />

                            {/* Play Button */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-lg cursor-pointer">
                                    <img
                                        src="/images/reviews/you-tube.webp"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right Image */}
                        <img
                            src="/images/reviews/review-2.webp"
                            className="hidden md:block w-32 h-32 md:w-90 md:h-40 object-right rounded-lg opacity-40"
                        />
                    </div>
                </div>
            </section>

            {/* =================== OUR SUCCESSFUL STUDENTS =================== */}
            <section className="bg-[#DFF1FF] py-16 mt-15">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <p className="text-xs uppercase text-gray-500">Our Student's</p>
                    <h3 className="text-2xl font-bold text-[#0c5d87] mt-2">
                        Our Successful Student's
                    </h3>

                    {/* Student Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
                        {[...Array(8)].map((_, i) => (
                            <div key={i} className="flex flex-col items-center">
                                <div className="w-32 h-40 bg-[#005A8B] rounded-md"></div>
                                <p className="mt-3 font-semibold text-sm text-gray-800">
                                    Farzan Danish
                                </p>
                                <p className="text-xs text-gray-500">
                                    Jamia Hamdard, New Delhi
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* =================== GOOGLE REVIEW =================== */}
            <section className='pb-16 bg-white mt-10'>
                <div className='container px-3 md:px-4'>
                    <GoogleReviews />
                </div>
            </section>
            <section className='bg-white mb-10'>
                <div className='container px-3 md:px-4'>
                    <div className="relative z-2 w-full rounded-lg bg-cover bg-center px-10 py-20 bg-black" style={{ backgroundImage: "url('/images/testimonialsBg.webp')" }}>
                        <div className="absolute inset-0 bg-black/70 -z-1 rounded-lg" />
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-white'>
                            <div>
                                <p className="uppercase text-sm tracking-widest text-gray-300 mb-4">
                                    Testimonial
                                </p>
                                <h2 className="text-4xl font-bold leading-tight">
                                    Feedback <br /> From Students
                                </h2>
                            </div>
                            <TestimonialSlider />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
