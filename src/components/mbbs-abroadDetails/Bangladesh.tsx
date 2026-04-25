import React from 'react';
import Image from 'next/image';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Link from 'next/link';

const Bangladesh = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <FloatingWhatsApp />
      {/* Hero Section */}
      <div className="relative text-white py-15 md:py-32 lg:py-50 px-4 md:px-6 overflow-hidden flex items-center" style={{
        backgroundImage: 'url(/images/study-abroad/bangladeshHero.webp)',
        backgroundSize: '110% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="absolute inset-0 bg-gradient-to-r from-[#007AB9] via-[#007AB9]/80 to-transparent z-10"></div>
        <div className="container mx-auto relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl lg:text-[48px] font-bold mb-4 leading-tight uppercase tracking-wider">
              MBBS IN BANGLADESH
            </h1>
            <p className="text-sm md:text-lg lg:text-[16px] text-white/90 font-medium max-w-2xl leading-relaxed">
              Achieve your dream of becoming a doctor with Bangladesh’s affordable and academically excellent MBBS programmes.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto py-10 lg:py-16 px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Content */}
          {/* Left Content */}
          <div className="lg:w-2/3 relative">
            {/* Watermark */}
            <div className="absolute inset-0 flex items-center justify-center opacity-70 z-0 pointer-events-none overflow-hidden">
              <Image
                src="/images/study-abroad/flags/bg-bangladesh.png"
                alt="Bangladesh Flag"
                width={183}
                height={183}
                className="object-contain w-[183px] h-[183px]"
              />
            </div>

            <div className="relative z-10">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-8">
                Medical Studies in BANGLADESH
              </h2>

              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  MBBS in Bangladesh is a popular choice for students who wish to pursue a career in medicine. There are 50 private and 25 public universities in Bangladesh where international students can pursue MBBS. This is because MBBS in Bangladesh is cost-effective. Indian students also find it easy to get admission to MBBS in Bangladesh. This is because the top universities in Bangladesh reserve 25% seats for Indian students.
                </p>

                <p>
                  Additionally, students from SAARC countries are exempted from paying fees. Since the medium of teaching in MBBS in Bangladesh is English, students do not have to attend language classes. One advantage of MBBS in Bangladesh is that the top universities in the country are approved by the NMC and WHO. This ensures the quality of education. Additionally, students do not have to pay any fees to get admission to MBBS in Bangladesh
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
                in Bangladesh?
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
      <div className=" relative z-20 -mt-16 bg-gradient-to-b from-blue-50 to-white py-10 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl lg:text-4xl font-bold text-center mb-12">
            Universities where you can study <span className="text-blue-500">medicine in Bangladesh</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8 max-w-6xl mx-auto">
            {/* Row 1 */}
            <Link href="https://www.radicaleducation.in/popular-medical-collegebangladesh" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
              <div className="w-[152px] h-[152px] md:w-[190px] md:h-[190px] flex items-center justify-center mb-2 md:mb-4">
                <Image src="/images/study-abroad/logos/b.webp" alt="Popular Medical College, Bangladesh" width={190} height={190} className="object-contain" />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-xs lg:text-sm">
                Popular Medical College, Bangladesh
              </h3>
            </Link>

            <Link href="https://www.radicaleducation.in/dhaka-national-medical-college-bangladesh" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
              <div className="w-[152px] h-[152px] md:w-[190px] md:h-[190px] flex items-center justify-center mb-2 md:mb-4">
                <Image src="/images/study-abroad/logos/b-1.webp" alt="Dhaka National Medical College, Bangladesh" width={190} height={190} className="object-contain" />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-xs lg:text-sm">
                Dhaka National Medical College, Bangladesh
              </h3>
            </Link>

            <Link href="https://www.radicaleducation.in/tairnunnessa-memorial-medical-college" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
              <div className="w-[152px] h-[152px] md:w-[190px] md:h-[190px] flex items-center justify-center mb-2 md:mb-4">
                <Image src="/images/study-abroad/logos/b-2.webp" alt="Tairunnessa Memorial Medical College, Bangladesh" width={190} height={190} className="object-contain" />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-xs lg:text-sm">
                Tairunnessa Memorial Medical College, Bangladesh
              </h3>
            </Link>

            <Link href="https://www.radicaleducation.in/holy-family-red-crescent-medical-college" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
              <div className="w-[152px] h-[152px] md:w-[190px] md:h-[190px] flex items-center justify-center mb-2 md:mb-4">
                <Image src="/images/study-abroad/logos/b-3.webp" alt="Holy Family Red Crescent Medical College, Bangladesh" width={190} height={190} className="object-contain" />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-xs lg:text-sm">
                Holy Family Red Crescent Medical College, Bangladesh
              </h3>
            </Link>

            {/* Row 2 */}
            <Link href="https://www.radicaleducation.in/bangladesh-university-of-professional-studies" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
              <div className="w-[152px] h-[152px] md:w-[190px] md:h-[190px] flex items-center justify-center mb-2 md:mb-4">
                <Image src="/images/study-abroad/logos/b-4.webp" alt="Bangladesh University of Professionals, Bangladesh" width={190} height={190} className="object-contain" />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-xs lg:text-sm">
                Bangladesh University of Professionals, Bangladesh
              </h3>
            </Link>
          </div>
        </div>
      </div>

      {/* Why Choose Bangladesh Section */}
      <div className="bg-white py-10 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-8">
            Why choose Bangladesh as your destination to study MBBS?
          </h2>

          <div className="text-gray-600 leading-relaxed space-y-4">
            <p>
              MBBS in Bangladesh has turned out to be the most sought-after option for Indian students. Here's why:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>NMC recognised Universities, which means validation of your degree all across the world.</li>
              <li>Around 25% of the seats in the top private medical colleges in Bangladesh are reserved for Indian students.</li>
              <li>The cost of doing an MBBS course in Bangladesh is relatively low compared to India.</li>
              <li>Indian students do not need to give any entrance exams to get admission into medical colleges in Bangladesh. They just need to clear the NEET UG exam.</li>
              <li>Not a single medical college in Bangladesh asks for donations to get direct admission into MBBS courses.</li>
              <li>The medium of instruction for the MBBS course in Bangladesh is English.</li>
              <li>The lifestyle in Bangladesh is almost the same as in India. So, Indian students would not face any problems in adapting to the lifestyle in Bangladesh.</li>
              <li>The cost of living in Bangladesh is relatively low for Indian students.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bangladesh;