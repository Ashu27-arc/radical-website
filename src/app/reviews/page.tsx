"use client";

import { useState } from 'react';
import GoogleReviews from '@/components/GoogleReviews';
import TestimonialSlider from '@/components/TestimonialSlider';

export default function TestimonialsPage() {
    const [leftImageIndex, setLeftImageIndex] = useState(0);
    const [rightImageIndex, setRightImageIndex] = useState(1);

    const images = [
        '/images/reviews/review.webp',
        '/images/reviews/review-2.webp',
    ];

    const handleLeftImageClick = () => {
        setLeftImageIndex((prev) => (prev === 0 ? 1 : 0));
        setRightImageIndex((prev) => (prev === 0 ? 1 : 0));
    };

    const handleRightImageClick = () => {
        setLeftImageIndex((prev) => (prev === 0 ? 1 : 0));
        setRightImageIndex((prev) => (prev === 0 ? 1 : 0));
    };
    return (
        <div className="w-full bg-white">

            {/* =================== TOP TESTIMONIAL SECTION =================== */}
            <section className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden bg-[#0a5b87]">

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

                {/* Left Image */}
                <img
                    src={images[leftImageIndex]}
                    onClick={handleLeftImageClick}
                    className="hidden md:block absolute left-0 top-[66%] -translate-y-1/2 w-[90%] md:w-[350px] h-[200px] object-left rounded-lg opacity-40 z-20 cursor-pointer transition-all duration-500 ease-in-out hover:opacity-60 hover:scale-105"
                />

                {/* Right Image */}
                <img
                    src={images[rightImageIndex]}
                    onClick={handleRightImageClick}
                    className="hidden md:block absolute right-0 top-[66%] -translate-y-1/2 w-[90%] md:w-[350px] h-[200px] object-left rounded-lg opacity-40 z-20 cursor-pointer transition-all duration-500 ease-in-out hover:opacity-60 hover:scale-105"
                />

                {/* Content */}
                {/* Content */}
                <div className="relative z-10 max-w-6xl mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">

                    <h1 className="text-xl sm:text-2xl md:text-4xl font-extrabold leading-tight uppercase px-2">
                        What Students Says About <br className="hidden sm:block" />
                        <span className="text-white">Radical Education</span>
                    </h1>

                    <p className="mt-3 md:mt-4 max-w-3xl text-xs sm:text-sm md:text-base text-[#d2ebff] px-2">
                        I Designed A Web UI For An AI-Powered HR Co-Pilot That Helps HRs <br className="hidden sm:block" />
                        Generate Job Descriptions And Screen Resumes
                    </p>

                    {/* Video Card */}
                    <div className="mt-6 md:mt-10 relative flex items-center justify-center w-full px-2 sm:px-4">
                        {/* Main Video Card */}
                        <div className="relative rounded-xl overflow-hidden shadow-2xl w-full max-w-[90%] md:w-[520px] h-[180px] sm:h-[220px] md:h-[260px] z-10">
                            <img
                                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
                                className="w-full h-full object-cover"
                            />

                            {/* Play Button */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-14 h-10 sm:w-16 sm:h-12 md:w-20 md:h-14 bg-red-600 rounded-full flex items-center justify-center shadow-lg cursor-pointer">
                                    <img
                                        src="/images/reviews/you-tube.webp"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =================== OUR SUCCESSFUL STUDENTS =================== */}
            <section className="bg-[#DFF1FF] py-8 sm:py-12 md:py-16 mt-8 sm:mt-12 md:mt-15">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
                    <p className="text-xs uppercase text-gray-500">Our Student's</p>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0c5d87] mt-2">
                        Our Successful Student's
                    </h3>

                    {/* Student Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-10 md:mt-12">
                        {[...Array(8)].map((_, i) => (
                            <div key={i} className="flex flex-col items-center">
                                <div className="w-24 h-32 sm:w-28 sm:h-36 md:w-32 md:h-40 bg-[#005A8B] rounded-md"></div>
                                <p className="mt-2 sm:mt-3 font-semibold text-xs sm:text-sm text-gray-800">
                                    Farzan Danish
                                </p>
                                <p className="text-[10px] sm:text-xs text-gray-500 px-1">
                                    Jamia Hamdard, New Delhi
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* =================== GOOGLE REVIEW =================== */}
            <section className='pb-8 sm:pb-12 md:pb-16 bg-white mt-6 sm:mt-8 md:mt-10'>
                <div className='container px-3 sm:px-4 md:px-4'>
                    <GoogleReviews />
                </div>
            </section>
            <section className='bg-white mb-6 sm:mb-8 md:mb-10'>
                <div className='container px-3 sm:px-4 md:px-4'>
                    <div className="relative z-2 w-full rounded-lg bg-cover bg-center px-4 sm:px-6 md:px-10 py-12 sm:py-16 md:py-20 bg-black" style={{ backgroundImage: "url('/images/testimonialsBg.webp')" }}>
                        <div className="absolute inset-0 bg-black/70 -z-1 rounded-lg" />
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center text-white'>
                            <div>
                                <p className="uppercase text-xs sm:text-sm tracking-widest text-gray-300 mb-3 sm:mb-4">
                                    Testimonial
                                </p>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                                    Feedback <br className="hidden sm:block" /> From Students
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
