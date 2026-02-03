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
            <section className="relative w-full h-[350px] sm:h-[450px] md:h-[600px] overflow-hidden bg-[#0a5b87]">

                {/* Background images */}
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1523050854058-8df90110c9f"
                        className="w-full h-full object-cover"
                        alt="Background"
                    />
                </div>

                {/* Blue overlay */}
                <div className="absolute inset-0 bg-[#0a5b87]/80"></div>

                {/* Left Image */}
                <img
                    src={images[leftImageIndex]}
                    onClick={handleLeftImageClick}
                    className="absolute -left-18 sm:left-1 xl:-left-30 top-[66%] -translate-y-1/2 w-[120px] sm:w-[180px] md:w-[220px] lg:w-[280px] xl:w-[400px] h-[100px] sm:h-[100px] md:h-[130px] lg:h-[160px] xl:h-[220px] object-cover rounded-lg opacity-40 z-20 cursor-pointer transition-all duration-500 ease-in-out hover:opacity-60 hover:scale-105"
                    alt="Review"
                />

                {/* Right Image */}
                <img
                    src={images[rightImageIndex]}
                    onClick={handleRightImageClick}
                    className="absolute -right-18 sm:right-2 xl:-right-30 top-[66%] -translate-y-1/2 w-[120px] sm:w-[180px] md:w-[220px] lg:w-[280px] xl:w-[400px] h-[100px] sm:h-[100px] md:h-[130px] lg:h-[160px] xl:h-[220px] object-cover rounded-lg opacity-40 z-20 cursor-pointer transition-all duration-500 ease-in-out hover:opacity-60 hover:scale-105"
                    alt="Review"
                />

                {/* Content */}
                <div className="relative z-10 max-w-6xl mx-auto px-3 sm:px-4 h-full flex flex-col justify-center items-center text-center text-white">

                    <h1 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-extrabold leading-tight uppercase px-2">
                        What Students Says About <br className="hidden sm:block" />
                        <span className="text-white">Radical Education</span>
                    </h1>

                    <p className="mt-2 sm:mt-3 md:mt-4 max-w-3xl text-xs sm:text-sm md:text-base text-[#d2ebff] px-2 leading-relaxed">
                        I Designed A Web UI For An AI-Powered HR Co-Pilot That Helps HRs <br className="hidden md:block" />
                        Generate Job Descriptions And Screen Resumes
                    </p>

                    {/* Video Card */}
                    <div className="mt-4 sm:mt-6 md:mt-10 relative flex items-center justify-center w-full px-2 sm:px-4">
                        {/* Main Video Card */}
                        <div className="relative rounded-lg sm:rounded-xl overflow-hidden shadow-2xl w-full max-w-[75%] sm:max-w-[90%] md:max-w-[420px] h-[120px] sm:h-[50px] md:h-[260px] l] z-10">
                            <img
                                src="/images/reviews/review-3.webp"
                                className="w-120 h-full object-cover object-center"
                                alt="Video thumbnail"
                            />

                            {/* Play Button */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-12 h-12 sm:w-16 sm:h-12 md:w-20 md:h-14 bg-red-600 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
                                    <img
                                        src="/images/reviews/you-tube.webp"
                                        className="w-full h-full object-cover"
                                        alt="Play button"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =================== OUR SUCCESSFUL STUDENTS =================== */}
            <section className="bg-[#DFF1FF] py-6 sm:py-8 md:py-12 lg:py-16 mt-6 sm:mt-8 md:mt-12 lg:mt-15">
                <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 text-center">
                    <p className="text-xs uppercase text-gray-500 tracking-wide">Our Student's</p>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#0c5d87] mt-2">
                        Our Successful Student's
                    </h3>

                    {/* Student Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 mt-6 sm:mt-8 md:mt-10 lg:mt-12">
                        {[...Array(8)].map((_, i) => (
                            <div key={i} className="flex flex-col items-center">
                                <div className="w-20 h-20 sm:w-24 sm:h-32 md:w-28 md:h-36 lg:w-32 lg:h-40 bg-[#005A8B] rounded-md shadow-sm"></div>
                                <p className="mt-2 sm:mt-3 font-semibold text-xs sm:text-sm text-gray-800 leading-tight">
                                    Farzan Danish
                                </p>
                                <p className="text-[10px] sm:text-xs text-gray-500 px-1 text-center leading-tight">
                                    Jamia Hamdard, New Delhi
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* =================== GOOGLE REVIEW =================== */}
            <section className='pb-6 sm:pb-8 md:pb-12 lg:pb-16 bg-white mt-4 sm:mt-6 md:mt-8 lg:mt-10'>
                <div className='container px-3 sm:px-4 md:px-4'>
                    <GoogleReviews />
                </div>
            </section>
            <section className='bg-white mb-4 sm:mb-6 md:mb-8 lg:mb-10'>
                <div className='container px-3 sm:px-4 md:px-4'>
                    <div className="relative z-2 w-full rounded-lg bg-cover bg-center px-3 sm:px-4 md:px-6 lg:px-10 py-8 sm:py-12 md:py-16 lg:py-20 bg-black" style={{ backgroundImage: "url('/images/testimonialsBg.webp')" }}>
                        <div className="absolute inset-0 bg-black/70 -z-1 rounded-lg" />
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center text-white'>
                            <div className="text-center lg:text-left">
                                <p className="uppercase text-xs sm:text-sm tracking-widest text-gray-300 mb-2 sm:mb-3 md:mb-4">
                                    Testimonial
                                </p>
                                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                                    Feedback <br className="hidden sm:block" /> From Students
                                </h2>
                            </div>
                            <div className="mt-4 lg:mt-0">
                                <TestimonialSlider />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
