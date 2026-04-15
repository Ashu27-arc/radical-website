import React from 'react';
import Image from 'next/image';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Link from 'next/link';

const Uzbekistan = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <FloatingWhatsApp />
      {/* Hero Section */}
      <div className="relative text-white py-15 md:py-32 lg:py-50 px-4 md:px-6 overflow-hidden flex items-center" style={{
        backgroundImage: 'url(/images/study-abroad/uzbekistanHero.webp)',
        backgroundSize: '110% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="absolute inset-0 bg-gradient-to-r from-[#007AB9] via-[#007AB9]/80 to-transparent z-10"></div>
        <div className="container mx-auto relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl lg:text-[48px] font-bold mb-4 leading-tight uppercase tracking-wider">
              MBBS IN UZBEKISTAN
            </h1>
            <p className="text-sm md:text-lg lg:text-[16px] text-white/90 font-medium max-w-2xl leading-relaxed">
              Explore top medical universities in Uzbekistan offering advanced facilities, English-medium courses, and strong academic foundations.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto py-8 md:py-12 lg:py-16 px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
          {/* Left Content */}
          <div className="w-full lg:w-2/3 relative">
            {/* Watermark */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10 z-0 pointer-events-none overflow-hidden">
              <Image
                src="/images/study-abroad/flags/uzbekistan.webp"
                alt="Uzbekistan Flag"
                width={500}
                height={500}
                className="object-contain w-3/4 h-3/4"
              />
            </div>

            <div className="relative z-10">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6 lg:mb-8">
                Medical Studies in Uzbekishtan
              </h2>

              <div className="space-y-4 md:space-y-6 text-gray-600 leading-relaxed text-sm md:text-base">
                <p>
                  Medical Studies in Uzbekistan have become one of the best options for Indian students who wish to pursue their dream of becoming medical professionals. The top medical universities in Uzbekistan offer the MBBS course in the English language with a duration of 6 years. The cost is not very high either. The quality of education is the same as in developed countries like the USA, UK, and Canada. After pursuing the MBBS course in Uzbekistan, the students can appear in the medical licensing test and obtain the license to practice as medical professionals anywhere in the world.
                </p>

                <p>
                  In the first 5 years, the students study the theory part of the course along with practicals. The students can also work in the hospital associated with the university. This will help them become better medical professionals and face the real-life challenges in the medical field. The sixth year is the internship year in which the students will be placed in the hospital under the supervision of experienced medical professionals.
                </p>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Consultation Card */}
          <div className="w-full lg:w-1/2 flex flex-row items-end lg:items-center overflow-visible mt-6 lg:mt-0">

            {/* Consultation Card - left side */}
            <div className="relative z-0 bg-[#E3F4F3] rounded-2xl shadow-lg p-4 lg:p-8 flex flex-col justify-center items-start text-left shrink-0 w-[250px] h-[170px] sm:w-[250px] sm:h-[250px] md:w-[290px] md:h-[290px] lg:w-[360px] lg:h-[250px] self-end mb-4 lg:mb-8">
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-800 mb-3 lg:mb-6 leading-snug">
                Are you interested in<br />
                studying medicine<br />
                in Uzbekistan?
              </h3>
              <Link href="https://www.neetbhaiya.in/dedicated-counsellor" target='_blank'>
                <button className="cursor-pointer bg-gradient-to-r from-[#28C4B4] to-[#287FC4] text-white font-semibold py-2 px-4 lg:py-3 lg:px-6 rounded-full transition-all duration-300 text-xs lg:text-sm whitespace-nowrap">
                  BOOK CONSULTATION
                </button>
              </Link>
            </div>

            {/* Doctor Image - right side, taller, overflowing upward */}
            <div className="relative z-10 -ml-12 sm:-ml-16 md:-ml-20 lg:-ml-28 flex-1 h-[290px] sm:h-[340px] md:h-[390px] lg:h-[480px] self-end pointer-events-none">
              <Image
                src="/images/study-abroad/main-content.webp"
                alt="Medical consultant"
                fill
                className="object-contain object-bottom pointer-events-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Universities Section */}
      <div className="relative z-20 -mt-16 bg-gradient-to-b from-blue-50 to-white py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 md:mb-10 lg:mb-12 px-2">
            Universities where you can study <span className="text-blue-500">medicine in Uzbekistan</span>
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-[152px] h-[152px] md:w-[190px] md:h-[190px] flex items-center justify-center mb-2 md:mb-4">
                <Image
                  src="/images/study-abroad/logos/u.webp"
                  alt="Bukhara State Medical University"
                  width={190}
                  height={190}
                  className="object-contain"
                />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-[9px] sm:text-[10px] md:text-xs lg:text-sm px-1">
                Bhukhara State Medical University, Uzbekishtan
              </h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-[152px] h-[152px] md:w-[190px] md:h-[190px] flex items-center justify-center mb-2 md:mb-4">
                <Image
                  src="/images/study-abroad/logos/u-1.webp"
                  alt="Samarkand State Medical University"
                  width={190}
                  height={190}
                  className="object-contain"
                />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-[9px] sm:text-[10px] md:text-xs lg:text-sm px-1">
                Samarkand State Medical University, Uzbekistan
              </h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-[152px] h-[152px] md:w-[190px] md:h-[190px] flex items-center justify-center mb-2 md:mb-4">
                <Image
                  src="/images/study-abroad/logos/u-2.webp"
                  alt="Tashkent Pediatric Medical Institute"
                  width={190}
                  height={190}
                  className="object-contain"
                />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-[9px] sm:text-[10px] md:text-xs lg:text-sm px-1">
                Tashkent Pediatric Medical Institute, Uzbekistan
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Uzbekistan Section */}
      <div className="bg-white py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 md:mb-6 lg:mb-8">
            Why choose Uzbekistan as your destination to study MBBS?
          </h2>

          <div className="text-gray-600 leading-relaxed space-y-4 text-sm md:text-base">
            <p>
              Pursuing MBBS in Uzbekistan will be a life-changing decision for Indian students. It offers various opportunities in front of them, such as in the final year, internships at their associated hospital, practical life lessons, and so on. Let's take a look at some of the reasons to choose Uzbekistan as your destination to study MBBS:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Affordable tuition fees and cost of living</li>
              <li>Degrees are accepted all over the world</li>
              <li>Courses conducted in the English language for international students</li>
              <li>Well-equipped facilities and labs</li>
              <li>Teachers with experience and qualifications</li>
              <li>Easy and simple admission process</li>
              <li>No donations and capitation fees to be paid</li>
              <li>Good clinical experience with hands-on training</li>
              <li>Safe and friendly environment for students to study and stay</li>
              <li>An increasing number of Indian students are opting for this option</li>
              <li>Good student-teacher ratio for effective learning</li>
              <li>Opportunities to pursue careers and studies around the world</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Uzbekistan;