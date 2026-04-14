import React from 'react';
import Image from 'next/image';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Link from 'next/link';

const Singapore = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <FloatingWhatsApp />
      {/* Hero Section */}
      <div className="relative text-white py-15 md:py-32 lg:py-50 px-4 md:px-6 overflow-hidden flex items-center" style={{
        backgroundImage: 'url(/images/study-abroad/singaporeHero.webp)',
        backgroundSize: '110% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="absolute inset-0 bg-gradient-to-r from-[#007AB9] via-[#007AB9]/80 to-transparent z-10"></div>
        <div className="container mx-auto relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl lg:text-[48px] font-bold mb-4 leading-tight uppercase tracking-wider">
              MBBS IN SINGAPORE
            </h1>
            <p className="text-sm md:text-lg lg:text-[16px] text-white/90 font-medium max-w-2xl leading-relaxed">
              Study medicine in Singapore with a perfect blend of high-quality education, innovation, and global exposure
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto py-8 md:py-16 px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
          {/* Left Content */}
          {/* Left Content */}
          <div className="lg:w-2/3 relative">
            {/* Watermark */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10 z-0 pointer-events-none overflow-hidden">
              <Image
                src="/images/study-abroad/singapore.webp"
                alt="Singapore Flag"
                width={500}
                height={500}
                className="object-contain w-3/4 h-3/4"
              />
            </div>

            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8">
                Medical Studies in Singapore
              </h2>

              <div className="space-y-4 md:space-y-6 text-gray-600 leading-relaxed text-sm md:text-base">
                <p>
                  Singapore is well known for providing top medical facilities worldwide. Singapore can be a great option for studying MBBS abroad. It has the world's most active economy and focuses on various areas, such as education and business. The top medical universities in Singapore are providing top-class medical education to their students and equipping them for practice on a global scale. The healthcare facilities are highly appreciated by many countries across the world.
                </p>

                <p>
                  Medical colleges are contributing greatly to strengthening the healthcare sector in Singapore. Studying MBBS in Singapore will equip you with a globally recognized degree and a solid foundation for a successful medical career. The curriculum is taught in English, which makes it easier for International students to understand the culture.
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
                in Singapore?
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
      <div className=" relative z-20 -mt-16 bg-gradient-to-b from-blue-50 to-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 px-4">
            Universities where you can study <span className="text-blue-500">medicine in Singapore</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
            {/* Row 1 */}
            <div className="flex flex-col items-center">
              <div className="w-[152px] h-[152px] md:w-[190px] md:h-[190px] flex items-center justify-center mb-2 md:mb-4">
                <Image src="/images/study-abroad/logos/s.webp" alt="Lee Kong Chian School of Medicine, Singapore" width={190} height={190} className="object-contain" />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-xs md:text-sm px-2">
                Lee Kong Chian School of Medicine, Singapore
              </h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-[152px] h-[152px] md:w-[190px] md:h-[190px] flex items-center justify-center mb-2 md:mb-4">
                <Image src="/images/study-abroad/logos/s-1.webp" alt="National University of Singapore" width={190} height={190} className="object-contain" />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-xs md:text-sm px-2">
                National University of Singapore
              </h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-[152px] h-[152px] md:w-[190px] md:h-[190px] flex items-center justify-center mb-2 md:mb-4">
                <Image src="/images/study-abroad/logos/s-2.webp" alt="Yong Loo Lin School of Medicine, Singapore" width={190} height={190} className="object-contain" />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-xs md:text-sm px-2">
                Yong Loo Lin School of Medicine, Singapore
              </h3>
            </div>

            {/* <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full border-4 border-cyan-300 bg-white flex items-center justify-center mb-4">
                <Image src="/images/russia-uni-4.webp" alt="Crimea Federal University" width={80} height={80} className="object-contain" />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-sm">
                Crimea Federal University
              </h3>
            </div> */}

            {/* Row 2 */}
            {/* <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full border-4 border-cyan-300 bg-white flex items-center justify-center mb-4">
                <Image src="/images/russia-uni-5.webp" alt="Kursk State Medical University" width={80} height={80} className="object-contain" />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-sm">
                Kursk State Medical University
              </h3>
            </div> */}
            {/*             
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full border-4 border-cyan-300 bg-white flex items-center justify-center mb-4">
                <Image src="/images/russia-uni-6.webp" alt="Volgograd State Medical University" width={80} height={80} className="object-contain" />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-sm">
                Volgograd State Medical University
              </h3>
            </div> */}

            {/* <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full border-4 border-cyan-300 bg-white flex items-center justify-center mb-4">
                <Image src="/images/russia-uni-7.webp" alt="Tver State Medical University" width={80} height={80} className="object-contain" />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-sm">
                Tver State Medical University
              </h3>
            </div> */}

            {/* <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full border-4 border-cyan-300 bg-white flex items-center justify-center mb-4">
                <Image src="/images/russia-uni-8.webp" alt="Orenburg State Medical University" width={80} height={80} className="object-contain" />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-sm">
                Orenburg State Medical University
              </h3>
            </div> */}

            {/* Row 3 - Single centered item */}
            {/* <div className="flex flex-col items-center col-span-2 md:col-span-4 md:col-start-2 md:col-end-3">
              <div className="w-32 h-32 rounded-full border-4 border-cyan-300 bg-white flex items-center justify-center mb-4">
                <Image src="/images/russia-uni-9.webp" alt="Smolensk State Medical University" width={80} height={80} className="object-contain" />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-sm">
                Smolensk State Medical University
              </h3>
            </div> */}
          </div>
        </div>
      </div>

      {/* Why Choose Singapore Section */}
      <div className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8">
            Why choose Singapore as your destination to study MBBS?
          </h2>

          <div className="text-gray-600 leading-relaxed space-y-4 text-sm md:text-base">
            <p>
              Some of the reasons include the cost of studying MBBS in Singapore and the availability of jobs. One of the major advantages of studying MBBS in Singapore is that the mode of communication is English. This eliminates the communication barrier for Indian students.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Standard education system</li>
              <li>English medium education with no communication problems</li>
              <li>Expert teachers</li>
              <li>Good infrastructure</li>
              <li>The country's revenue comes from tourism, so people are friendly towards foreigners</li>
              <li>Safe place for international students</li>
              <li>The top medical colleges in Singapore are approved by the NMC</li>
              <li>Indian cuisine is available in the university hostels</li>
              <li>High success rate in FMGE</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singapore;