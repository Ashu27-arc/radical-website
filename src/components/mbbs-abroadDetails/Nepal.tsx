import React from 'react';
import Image from 'next/image';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Link from 'next/link';

const Russia = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <FloatingWhatsApp />
      {/* Hero Section */}
      <div className="relative text-white py-15 md:py-50 px-10 md:px-6 overflow-hidden" style={{
        backgroundImage: 'url(/images/study-abroad/nepalHero.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto py-8 md:py-16 px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-12">
          {/* Left Content */}
          {/* Left Content */}
          <div className="lg:w-2/3 relative">
            {/* Watermark */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10 z-0 pointer-events-none overflow-hidden">
              <Image
                src="/images/study-abroad/flags/nepal.webp"
                alt="Nepal Flag"
                width={500}
                height={500}
                className="object-contain w-3/4 h-3/4"
              />
            </div>

            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8">
                Medical Studies in Nepal
              </h2>

              <div className="space-y-4 md:space-y-6 text-gray-600 leading-relaxed text-sm md:text-base">
                <p>
                  MBBS in Nepal offers numerous opportunities for medical students across the world. Indian students prefer to choose MBBS courses in Nepal because of the easy admission procedure and feasibility. The cordial relationship between Nepal and India makes the decision more suitable. The educational system is highly developed and offers a highly supportive environment for both national and international students. The top medical institutes in Nepal offer a concise course curriculum that covers all aspects of the MBBS courses.
                </p>

                <p>
                  If you want to pursue a career in the medical field from a recognised university, then Nepal would be the best option. These institutes are recognised by top organisations such as NMC and WHO. Nepal, being a developing nation, offers students exposure to various medical branches and horizons.
                </p>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Consultation Card */}
          <div className="lg:w-1/2 relative flex justify-center mt-8 lg:mt-16">
            <div className="bg-[#E3F4F3] rounded-lg shadow-lg p-4 md:p-6 lg:p-8 relative overflow-visible w-full max-w-[280px] sm:max-w-xs lg:max-w-md lg:w-90 h-auto lg:h-60 flex flex-col justify-center items-center text-center">

              <div className="relative z-10 flex flex-col justify-center items-center h-full">
                <h3 className="text-sm md:text-base lg:text-xl font-bold text-gray-800 mb-2 md:mb-3 lg:mb-6 leading-tight">
                  Are you interested in<br />
                  studying medicine<br />
                  in Nepal?
                </h3>

                <div className="mt-2 md:mt-3 lg:mt-6">
                  <Link href="https://www.neetbhaiya.in/dedicated-counsellor" target='_blank'>
                    <button className="cursor-pointer bg-gradient-to-r from-[#28C4B4] to-[#287FC4] hover:from-[#28C4B4] hover:to-[#287FC4] text-white font-semibold py-2 md:py-2.5 lg:py-4 px-4 md:px-5 lg:px-8 rounded-full transition-all duration-300 text-[10px] md:text-xs lg:text-base">
                      BOOK CONSULTATION
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Image positioned outside card on the right */}
            <div className="absolute -right-2 sm:-right-4 md:-right-8 lg:-right-28 top-1/2 transform -translate-y-1/2 z-20">
              <Image
                src="/images/study-abroad/main-content.webp"
                alt="Medical consultant"
                width={300}
                height={300}
                className="object-contain w-28 sm:w-40 md:w-52 lg:w-[300px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Universities Section */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-8 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 px-4">
            Universities where you can study <span className="text-blue-500">medicine in Nepal</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-6xl mx-auto">
            {/* Row 1 */}
            <div className="flex flex-col items-center">
              <div className="w-[152px] h-[152px] md:w-[190px] md:h-[190px] flex items-center justify-center mb-2 md:mb-4">
                <Image src="/images/study-abroad/logos/1.webp" alt="First Moscow State Medical University" width={190} height={190} className="object-contain" />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-xs md:text-sm px-2">
                Birat Medical College
              </h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-[152px] h-[152px] md:w-[190px] md:h-[190px] flex items-center justify-center mb-2 md:mb-4">
                <Image src="/images/study-abroad/logos/2.webp" alt="Kazan Federal University" width={190} height={190} className="object-contain" />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-xs md:text-sm px-2">
                College of Medical Sciences
              </h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-[152px] h-[152px] md:w-[190px] md:h-[190px] flex items-center justify-center mb-2 md:mb-4">
                <Image src="/images/study-abroad/logos/3.webp" alt="Bashkir State Medical University" width={190} height={190} className="object-contain" />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-xs md:text-sm px-2">
                Devdaha Medical College
              </h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-[152px] h-[152px] md:w-[190px] md:h-[190px] flex items-center justify-center mb-2 md:mb-4">
                <Image src="/images/study-abroad/logos/4.webp" alt="Crimea Federal University" width={190} height={190} className="object-contain" />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-xs md:text-sm px-2">
                Kathmandu Medical College
              </h3>
            </div>

            {/* Row 2 */}
            <div className="flex flex-col items-center">
              <div className="w-[152px] h-[152px] md:w-[190px] md:h-[190px] flex items-center justify-center mb-2 md:mb-4">
                <Image src="/images/study-abroad/logos/5.webp" alt="Kursk State Medical University" width={190} height={190} className="object-contain" />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-xs md:text-sm px-2">
                Kathmandu National Medical College
              </h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-[152px] h-[152px] md:w-[190px] md:h-[190px] flex items-center justify-center mb-2 md:mb-4">
                <Image src="/images/study-abroad/logos/6.webp" alt="Volgograd State Medical University" width={190} height={190} className="object-contain" />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-xs md:text-sm px-2">
                Nepal Medical College
              </h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-[152px] h-[152px] md:w-[190px] md:h-[190px] flex items-center justify-center mb-2 md:mb-4">
                <Image src="/images/study-abroad/logos/7.webp" alt="Tver State Medical University" width={190} height={190} className="object-contain" />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-xs md:text-sm px-2">
                Nepalgunj Medical College
              </h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-[152px] h-[152px] md:w-[190px] md:h-[190px] flex items-center justify-center mb-2 md:mb-4">
                <Image src="/images/study-abroad/logos/8.webp" alt="Orenburg State Medical University" width={190} height={190} className="object-contain" />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-xs md:text-sm px-2">
                Manipal College of Medical Sciences
              </h3>
            </div>

            {/* Row 3 - Single centered item */}
            <div className="flex flex-col items-center col-span-2 md:col-span-4 md:col-start-2 md:col-end-3">
              <div className="w-[152px] h-[152px] md:w-[190px] md:h-[190px] flex items-center justify-center mb-2 md:mb-4">
                <Image src="/images/study-abroad/logos/9.webp" alt="Smolensk State Medical University" width={190} height={190} className="object-contain" />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-xs md:text-sm px-2">
                Lumbini Medical College
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Russia Section */}
      <div className="bg-white py-8 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8">
            Why choose Nepal as your destination to study MBBS?
          </h2>

          <div className="text-gray-600 leading-relaxed space-y-3 md:space-y-4 text-sm md:text-base">
            <p>
              Nepal is one of the most desirable countries for Indian students to study medicine there due to many reasons. Some of the reasons are listed below:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>The fields in which you can study include General Medicine, Dentistry, Surgery, Paediatrics, and so on. For Indian students, it is easy to travel to Nepal because it is a neighboring country.</li>
              <li>Nepal has a no-visa policy for Indian students, which makes it easy for them.</li>
              <li>The admission procedure for medical universities in Nepal is not too complicated.</li>
              <li>The religions and cultures of the people in Nepal are similar to those in India.</li>
              <li>The government has its own security policies for international students.</li>
              <li>Indian students will not face much difficulty in communicating with the people because they will be able to talk in Hindi.</li>
              <li>The National Medical Commission has provided 1000 seats in Nepal for Indian students.</li>
              <li>The medical students in Nepal are not required to give entrance exams like TOEFL and IELTS for admission into medical universities.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Russia;