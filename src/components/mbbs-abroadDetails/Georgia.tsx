import React from 'react';
import Image from 'next/image';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Link from 'next/link';

const Georgia = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <FloatingWhatsApp />
      {/* Hero Section */}
      <div className="relative text-white py-15 md:py-32 lg:py-50 px-4 md:px-6 overflow-hidden flex items-center" style={{
        backgroundImage: 'url(/images/study-abroad/georgiaHero.webp)',
        backgroundSize: '110% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="absolute inset-0 bg-gradient-to-r from-[#007AB9] via-[#007AB9]/80 to-transparent z-10"></div>
        <div className="container mx-auto relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl lg:text-[48px] font-bold mb-4 leading-tight uppercase tracking-wider">
              MBBS IN GEORGIA
            </h1>
            <p className="text-sm md:text-lg lg:text-[16px] text-white/90 font-medium max-w-2xl leading-relaxed">
              Begin your medical journey in Georgia with modern facilities, hands-on clinical training, and expert guidance throughout the admission process.
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
                src="/images/study-abroad/flags/bg-georgia.png"
                alt="Georgia Flag"
                width={500}
                height={500}
                className="object-contain w-[53%] h-[53%]"
              />
            </div>

            <div className="relative z-10">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-8">
                Medical Studies in Georgia
              </h2>

              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Medical Studies in Georgia are an attractive career option for many aspiring students from India. The country offers advanced medical facilities and experienced faculty, making it one of the most sought-after destinations for medical students. Georgia, an Eastern European country, is known for its world-class standards in medical education. Out of the top 5 universities offering MBBS in Georgia, 3 universities are located in Tbilisi, 1 in Batumi, 1 in Kutaisi, and several other private universities are recognized by NMC, WHO, WFME, ECFMG, and FAIMER
                </p>

                <p>
                  The medium of teaching is English, making it easy for international students to grasp the subjects. The country offers an excellent employability rate for students pursuing MBBS in Georgia. The course provides lucrative career opportunities for students in the field of medicine. The universities offer several advantages to students, providing them with the best career opportunities post-graduation.
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
                in Georgia?
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
      <div className="relative z-20 -mt-16 bg-gradient-to-b from-blue-50 to-white py-10 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl lg:text-4xl font-bold text-center mb-12">
            Universities where you can study <span className="text-blue-500">medicine in Georgia</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8 max-w-6xl mx-auto">
            {/* Row 1 */}
            <Link href="https://www.radicaleducation.in/batumi-shota-rustaveli-state-university" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
              <div className="w-[152px] h-[152px] md:w-[190px] md:h-[190px] flex items-center justify-center mb-2 md:mb-4">
                <Image src="/images/study-abroad/logos/g.webp" alt="Batumi Shota Rustaveli State Medical University Georgia" width={190} height={190} className="object-contain" />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-xs lg:text-sm">
                Batumi Shota Rustaveli State Medical University, Georgia
              </h3>
            </Link>

            <Link href="https://www.radicaleducation.in/caucasus-international-university" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
              <div className="w-[152px] h-[152px] md:w-[190px] md:h-[190px] flex items-center justify-center mb-2 md:mb-4">
                <Image src="/images/study-abroad/logos/g-1.webp" alt="Caucasus International University, Georgia" width={190} height={190} className="object-contain" />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-xs lg:text-sm">
                Caucasus International University, Georgia
              </h3>
            </Link>

            <Link href="https://www.radicaleducation.in/east-european-university-georgia-2" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
              <div className="w-[152px] h-[152px] md:w-[190px] md:h-[190px] flex items-center justify-center mb-2 md:mb-4">
                <Image src="/images/study-abroad/logos/g-2.webp" alt="European University, Georgia" width={190} height={190} className="object-contain" />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-xs lg:text-sm">
                European University, Georgia
              </h3>
            </Link>

            <Link href="https://www.radicaleducation.in/georgian-national-university-seu" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
              <div className="w-[152px] h-[152px] md:w-[190px] md:h-[190px] flex items-center justify-center mb-2 md:mb-4">
                <Image src="/images/study-abroad/logos/g-3.webp" alt="Georgian National University SEU, Georgia" width={190} height={190} className="object-contain" />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-xs lg:text-sm">
                Georgian National University SEU, Georgia
              </h3>
            </Link>

            {/* Row 2 */}
            <Link href="https://www.radicaleducation.in/grigol-robakidze-university" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
              <div className="w-[152px] h-[152px] md:w-[190px] md:h-[190px] flex items-center justify-center mb-2 md:mb-4">
                <Image src="/images/study-abroad/logos/g-4.webp" alt="Gruni Grigol Robakide University, Georgia" width={190} height={190} className="object-contain" />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-xs lg:text-sm">
                Gruni Grigol Robakide University, Georgia
              </h3>
            </Link>

            <Link href="https://www.radicaleducation.in/tbilisi-medical-academy" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
              <div className="w-[152px] h-[152px] md:w-[190px] md:h-[190px] flex items-center justify-center mb-2 md:mb-4">
                <Image src="/images/study-abroad/logos/g-5.webp" alt="Tbilisi Medical Academy, Georgia" width={190} height={190} className="object-contain" />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-xs lg:text-sm">
                Tbilisi Medical Academy, Georgia
              </h3>
            </Link>

            <Link href="https://www.radicaleducation.in/tbilisi-state-medical-university-georgia" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
              <div className="w-[152px] h-[152px] md:w-[190px] md:h-[190px] flex items-center justify-center mb-2 md:mb-4">
                <Image src="/images/study-abroad/logos/g-6.webp" alt="Tbilisi State Medical University, Georgia" width={190} height={190} className="object-contain" />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-xs lg:text-sm">
                Tbilisi State Medical University, Georgia
              </h3>
            </Link>

            <Link href="https://www.radicaleducation.in/university-of-georgia-2" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
              <div className="w-[152px] h-[152px] md:w-[190px] md:h-[190px] flex items-center justify-center mb-2 md:mb-4">
                <Image src="/images/study-abroad/logos/g-7.webp" alt="University of Georgia" width={190} height={190} className="object-contain" />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-xs lg:text-sm">
                University of Georgia, Georgia
              </h3>
            </Link>

            {/* Row 3 - Single centered item */}
            {/* <div className="flex flex-col items-center col-span-2 md:col-span-4 md:col-start-2 md:col-end-3">
              <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full border-4 border-cyan-300 bg-white flex items-center justify-center mb-4">
                <Image src="/images/russia-uni-9.webp" alt="Smolensk State Medical University" width={80} height={80} className="object-contain w-14 h-14 lg:w-20 lg:h-20" />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-xs lg:text-sm">
                Smolensk State Medical University
              </h3>
            </div> */}
          </div>
        </div>
      </div>

      {/* Why Choose Georgia Section */}
      <div className="bg-white py-10 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-8">
            Why choose Georgia as your destination to study MBBS?
          </h2>

          <div className="text-gray-600 leading-relaxed space-y-4">
            <p>
              If you are looking to study MBBS in Georgia and are still doubtful about it, then let's take a look at some of the reasons that you can consider Georgia a perfect destination to fulfil your medical career:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Low cost for studying and living</li>
              <li>Recognised Degrees that are respected all over the world</li>
              <li>Courses taught in English</li>
              <li>State-of-the-art facilities and modern laboratories</li>
              <li>Teachers with skill and experience</li>
              <li>Clear and easy ways to become a part of the university</li>
              <li>No extra charges like donations and capitation fees</li>
              <li>Plenty of practical experience and real-life learning situations</li>
              <li>A safe and welcoming place to be a student</li>
              <li>Opportunities to work and study overseas</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Georgia;