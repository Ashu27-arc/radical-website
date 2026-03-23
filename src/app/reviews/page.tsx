"use client";

import { useState, useRef } from 'react';
import GoogleReviews from '@/components/GoogleReviews';
import TestimonialSlider from '@/components/TestimonialSlider';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import NewsMarquee from '@/components/NewsMarquee';

export default function TestimonialsPage() {
    const [leftImageIndex, setLeftImageIndex] = useState(0);
    const [rightImageIndex, setRightImageIndex] = useState(1);
    const [selectedYear, setSelectedYear] = useState(2025);
    const [videoPopup, setVideoPopup] = useState<{ id: number; title: string; youtubeId: string } | null>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    // Video data for testimonials
    const videos = [
        { id: 1, title: 'Student Success Story 1', youtubeId: 'jfq8RbTIrtI' },
        { id: 2, title: 'Student Success Story 2', youtubeId: 'hwYjHX5pk9w' },
        { id: 3, title: 'Main Testimonial Video', youtubeId: 'CxDL_T4CWs8' },
    ];

    // Student data organized by year
    const studentsByYear = {
        2025: [
            { name: 'Etshamul Haque', college: 'NCRIMS, Meerut', image: '/2025/std1.jpg' },
            { name: 'Anant Deep Singhal', college: 'MFMC, Muzaffarnagar', image: '/2025/std2.jpg' },
            { name: 'Yashvi Agarwal', college: 'MRMCW, Hyderabad', image: '/2025/std3.jpg' },
            { name: 'Kumar Amlendu', college: 'GMC, Ariyalur Tamil Nadu', image: '/2025/std4.jpg' },
            { name: 'Shreya Jain', college: 'TMMCRC, Moradabad', image: '/2025/std5.jpg' },
            { name: 'Piyush Bisht', college: 'GMC, Haldwani', image: '/2025/std6.jpg' },
            { name: 'Kshiraj Luthra', college: 'GMC, Alwar', image: '/2025/std7.jpg' },
            { name: 'Sangam Yadav', college: 'MGAMCRC, Lucknow', image: '/2025/std8.jpg' },
            { name: 'Aamra Khan', college: 'IAMS, Lucknow', image: '/2025/std9.jpg' },
            { name: 'Aayush Adwani', college: 'JSSMCHM, Mysuru', image: '/2025/std10.jpg' },
            { name: 'Abhishek Sharma', college: 'NIIMS, Noida', image: '/2025/std11.jpg' },
            { name: 'Aditi Arya', college: 'JHMCRI, West Bengal', image: '/2025/std12.jpg' },
            { name: 'Aditya Maan', college: 'GMC, Sirohi', image: '/2025/std13.jpg' },
            { name: 'Aditya Verrma', college: 'MMCDSR, Mullana', image: '/2025/std14.jpg' },
            { name: 'Alok Ranjan', college: 'VRIMS, Champaran', image: '/2025/std15.jpg' },
            { name: 'Angel', college: 'SDCH, Meerut', image: '/2025/std16.jpg' },
            { name: 'Anhad Kaur', college: 'SGRDIMSR, Amritsar', image: '/2025/std17.jpg' },
            { name: 'Altamash Raza Khan', college: 'URMCAS, Dehradun', image: '/2025/std18.jpg' },
            { name: 'Ankur Maan', college: 'BPSGMCW, Sonepat', image: '/2025/std19.jpg' },
            { name: 'Ananya Pathak Ojha', college: 'GBCMV, Dehradun', image: '/2025/std20.jpg' },
        ],
        2024: [
            { name: 'Mishthi Tiwari', college: 'QIAR, Roorkee', image: '' },
            { name: 'Ashta Bhatnagar', college: 'DY Patil, Navi Mumbai', image: '' },
            { name: 'Aishwarya Singh', college: 'UACHR, Uttarakhand', image: '' },
            { name: 'Harsh Kumar', college: 'SAMCR, Haryana', image: '' },
            { name: 'Praveen', college: 'KAC, Nainital', image: '' },
            { name: 'Zoha Azeem', college: 'JSPSGHMC, Telangana', image: '' },
            { name: 'Prena', college: 'SGTU, Gurugram', image: '' },
            { name: 'Sheetal Kumari', college: 'ANSSHMC, Kerala', image: '' },
        ],
    };

    const years = Object.keys(studentsByYear).map(Number).sort((a, b) => b - a);

    const handleLeftVideoClick = () => {
        setVideoPopup(videos[0]);
    };

    const handleRightVideoClick = () => {
        setVideoPopup(videos[1]);
    };

    const handleCenterVideoClick = () => {
        setVideoPopup(videos[2]);
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!scrollContainerRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
        setScrollLeft(scrollContainerRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !scrollContainerRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Scroll-fast
        scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <div className="w-full bg-white">
            <FloatingWhatsApp />

            {/* =================== TOP TESTIMONIAL SECTION =================== */}
            <section className="relative w-full h-[350px] sm:h-[450px] md:h-[600px] overflow-hidden bg-[#0a5b87]">

                {/* Background images */}
                <div className="absolute inset-0">
                    <img
                        src="/images/reviews/review-bg.webp"
                        className="w-full h-full object-cover"
                        alt="Background"
                    />
                </div>

                {/* Decorative background elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
                </div>

                {/* Blue overlay */}
                <div className="absolute inset-0 bg-[#0a5b87]/40"></div>

                {/* Left Video Thumbnail */}
                <button
                    type="button"
                    onClick={handleLeftVideoClick}
                    className="absolute -left-18 sm:left-1 xl:-left-30 top-[66%] -translate-y-1/2 w-[120px] sm:w-[180px] md:w-[220px] lg:w-[280px] xl:w-[400px] h-[100px] sm:h-[100px] md:h-[130px] lg:h-[160px] xl:h-[220px] rounded-lg opacity-40 z-20 cursor-pointer transition-all duration-500 ease-in-out hover:opacity-60 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 group"
                >
                    <img
                        src={`https://img.youtube.com/vi/${videos[0].youtubeId}/hqdefault.jpg`}
                        alt={videos[0].title}
                        className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 transition-transform duration-300 group-hover:scale-110">
                            <img
                                src="/images/reviews/you-tube.webp"
                                className="w-full h-full object-contain"
                                alt="Play button"
                            />
                        </div>
                    </div>
                </button>

                {/* Right Video Thumbnail */}
                <button
                    type="button"
                    onClick={handleRightVideoClick}
                    className="absolute -right-18 sm:right-2 xl:-right-30 top-[66%] -translate-y-1/2 w-[120px] sm:w-[180px] md:w-[220px] lg:w-[280px] xl:w-[400px] h-[100px] sm:h-[100px] md:h-[130px] lg:h-[160px] xl:h-[220px] rounded-lg opacity-40 z-20 cursor-pointer transition-all duration-500 ease-in-out hover:opacity-60 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 group"
                >
                    <img
                        src={`https://img.youtube.com/vi/${videos[1].youtubeId}/hqdefault.jpg`}
                        alt={videos[1].title}
                        className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 transition-transform duration-300 group-hover:scale-110">
                            <img
                                src="/images/reviews/you-tube.webp"
                                className="w-full h-full object-contain"
                                alt="Play button"
                            />
                        </div>
                    </div>
                </button>

                {/* Content */}
                <div className="relative z-10 max-w-6xl mx-auto px-3 sm:px-4 h-full flex flex-col justify-center items-center text-center text-white pt-2 sm:pt-3 md:pt-4">

                    <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight uppercase px-2 max-w-3xl">
                        What Students Says About <br className="hidden sm:block" />
                        <span className="text-white">Radical Education</span>
                    </h1>

                    <p className="mt-3 sm:mt-4 md:mt-5 max-w-2xl text-xs sm:text-sm md:text-base text-[#d2ebff] px-2 leading-relaxed">
                        Helping Thousands of Medical Students Achieve Their Dreams <br className="hidden md:block" />
                        With Expert Guidance and Personalised Counselling
                    </p>

                    {/* Video Card */}
                    <div className="mt-4 sm:mt-6 md:mt-10 relative flex items-center justify-center w-full px-2 sm:px-4">
                        {/* Main Video Card */}
                        <button
                            type="button"
                            className="relative rounded-lg sm:rounded-xl overflow-hidden shadow-2xl w-full max-w-[80%] sm:max-w-[85%] md:max-w-[400px] lg:max-w-[480px] h-[150px] sm:h-[170px] md:h-[210px] lg:h-[260px] z-10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 group"
                            onClick={handleCenterVideoClick}
                        >
                            <img
                                src={`https://img.youtube.com/vi/${videos[2].youtubeId}/hqdefault.jpg`}
                                className="w-full h-full object-cover object-center"
                                alt={videos[2].title}
                            />

                            {/* Play Button */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 transition-transform duration-300 group-hover:scale-110">
                                    <img
                                        src="/images/reviews/you-tube.webp"
                                        className="w-full h-full object-contain"
                                        alt="Play button"
                                    />
                                </div>
                            </div>

                            {/* Video Title Overlay */}
                            <span className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-3 py-2 text-white text-sm font-medium">
                                {videos[2].title}
                            </span>
                        </button>
                    </div>
                </div>
            </section>
            <NewsMarquee />
            {/* =================== OUR SUCCESSFUL STUDENTS =================== */}
            <section className="bg-[#DFF1FF] py-6 sm:py-8 md:py-12 lg:py-16 -mt-1 sm:mt-8 md:mt-12 lg:mt-16">
                <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 text-center">
                    <p className="text-xs font-bold uppercase text-[#000000] tracking-wide">Our Student's</p>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold uppercase text-[#000000] mt-2">
                        Our <span className="text-[#0c5d87]">Successful <br className="md:hidden" /> Student's</span>
                    </h3>

                    <div
                        ref={scrollContainerRef}
                        onMouseDown={handleMouseDown}
                        onMouseLeave={handleMouseLeave}
                        onMouseUp={handleMouseUp}
                        onMouseMove={handleMouseMove}
                        className={`flex justify-start md:justify-center overflow-x-auto whitespace-nowrap scrollbar-hide py-2 gap-2 sm:gap-3 md:gap-4 mt-4 sm:mt-6 md:mt-8 px-2 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'} select-none`}
                    >
                        {years.map((year) => (
                            <button
                                key={year}
                                onClick={() => setSelectedYear(year)}
                                className={`shrink-0 px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-lg font-semibold text-xs sm:text-sm md:text-base transition-all duration-300 ${selectedYear === year
                                    ? 'bg-[#0c5d87] text-white shadow-lg scale-105'
                                    : 'bg-white text-[#0c5d87] hover:bg-[#0c5d87]/10'
                                    }`}
                            >
                                {year}
                            </button>
                        ))}
                    </div>

                    {/* Student Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 mt-6 sm:mt-8 md:mt-10 lg:mt-12">
                        {studentsByYear[selectedYear as keyof typeof studentsByYear]?.map((student: { name: string; college: string; image: string }, i: number) => (
                            <div key={i} className="flex flex-col items-center group">
                                <div className="relative mb-2">

                                    <div className="w-20 h-20 sm:w-24 sm:h-32 md:w-28 md:h-36 lg:w-32 lg:h-40 bg-[#005A8B] rounded-xl shadow-sm overflow-hidden transition-transform duration-300 group-hover:scale-105">
                                        <img
                                            src={student.image || `/images/testi${(i % 20) + 1}.webp`}
                                            className="w-full h-full object-cover"
                                            alt={student.name}
                                        />
                                    </div>
                                </div>
                                <p className="mt-2 sm:mt-3 font-semibold text-xs sm:text-sm text-[#000000] leading-tight">
                                    {student.name}
                                </p>
                                <p className="text-[10px] sm:text-xs text-[#287FC4] px-1 text-center leading-tight">
                                    {student.college}
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
            <section
                className="relative bg-cover bg-black bg-left md:bg-center z-2"
                style={{ backgroundImage: "url('/images/testibg.webp')" }}
            >
                <div className="absolute left-0 right-0 top-0 bottom-0 bg-black/70 -z-1 rounded-lg" />
                <div className="container px-3 md:px-4">
                    <div className="relative z-2 w-full rounded-lg py-10 px-4 md:px-10 md:py-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-white">
                            <div>
                                <p className="uppercase font-semibold text-sm tracking-widest text-gray-300 mb-10">
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

            {/* Video popup modal - same design as home page */}
            {videoPopup && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
                    onClick={() => setVideoPopup(null)}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Video player"
                >
                    <div
                        className="relative w-full max-w-4xl rounded-2xl overflow-hidden bg-white shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="p-3 bg-[#F4F7F8]">
                            <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black">
                                <button
                                    type="button"
                                    onClick={() => setVideoPopup(null)}
                                    className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors"
                                    aria-label="Close"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                                <iframe
                                    className="absolute inset-0 w-full h-full"
                                    src={`https://www.youtube.com/embed/${videoPopup.youtubeId}`}
                                    title={videoPopup.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
