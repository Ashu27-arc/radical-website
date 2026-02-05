import React from 'react';
import Image from 'next/image';

const Russia = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative text-white py-20 sm:py-24 md:py-32 lg:py-50 px-4 sm:px-5 md:px-6 overflow-hidden min-h-[100px] sm:min-h-[250px] md:min-h-[300px] lg:min-h-[400px]" style={{
        backgroundImage: 'url(/images/study-abroad/singaporeHero.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
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
                  Invite Your Friends And Unlock Exclusive Benefits—Earn More With Every Successful Referral. Invite Your Friends
                  And Unlock Exclusive Benefits Invite Your Friends And Unlock Exclusive Invite Your Friends And Unlock Exclusive
                  Benefits—Earn More With Every Successful Referral. Invite Your Friends And Unlock Exclusive Benefits Invite Your
                  Friends And Unlock Exclusive Invite Your Friends And Unlock Exclusive Benefits—Earn More With Every
                  Successful Referral. Invite Your Friends And Unlock Exclusive Benefits
                </p>

                <p>
                  Invite Your Friends And Unlock Exclusive Benefits—Earn More With Every Successful Referral. Invite Your Friends
                  And Unlock Exclusive Benefits Invite Your Friends And Unlock Exclusive Invite Your Friends And Unlock Exclusive
                  Benefits—Earn More With Every Successful Referral. Invite Your Friends And Unlock
                </p>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Consultation Card */}
          <div className="lg:w-1/2 relative flex flex-col items-center lg:justify-center mt-8 lg:mt-16">
            <div className="bg-[#E3F4F3] rounded-lg shadow-lg p-6 md:p-8 relative overflow-hidden w-full max-w-md lg:w-90 h-auto lg:h-60 flex flex-col justify-center items-center text-center">

              <div className="relative z-10 flex flex-col justify-center items-center h-full">
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4 md:mb-6 leading-tight text-center lg:text-left lg:text-justify">
                  Are you interested in<br />
                  studying medicine<br />
                  in Russia?
                </h3>

                <div className="mt-4 md:mt-6">
                  <button className="bg-gradient-to-r from-[#28C4B4] to-[#287FC4] hover:from-[#28C4B4] hover:to-[#287FC4] text-white font-semibold py-3 md:py-4 px-6 md:px-8 rounded-full transition-all duration-300 text-sm md:text-base whitespace-nowrap">
                    BOOK CONSULTATION
                  </button>
                </div>
              </div>
            </div>

            {/* Image positioned outside card on the right for desktop, below for mobile */}
            <div className="relative lg:absolute lg:-right-28 lg:top-1/2 lg:transform lg:-translate-y-1/2 z-20 mt-4 lg:mt-0">
              <Image
                src="/images/study-abroad/main-content.webp"
                alt="Medical consultant"
                width={300}
                height={300}
                className="object-contain w-48 md:w-64 lg:w-[300px] mx-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Universities Section */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 px-4">
            Universities Where You Can Study <span className="text-blue-500">Medicine In Singapore</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
            {/* Row 1 */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-cyan-300 bg-white flex items-center justify-center mb-3 md:mb-4">
                <Image src="/images/study-abroad/logos/s.webp" alt="First Moscow State Medical University" width={80} height={80} className="object-contain w-16 h-16 md:w-20 md:h-20" />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-xs md:text-sm px-2">
                Lee Kong Chian University of Medical Sciences Singapore
              </h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-cyan-300 bg-white flex items-center justify-center mb-3 md:mb-4">
                <Image src="/images/study-abroad/logos/s-1.webp" alt="Kazan Federal University" width={80} height={80} className="object-contain w-16 h-16 md:w-20 md:h-20" />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-xs md:text-sm px-2">
                National University of Singapore
              </h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-cyan-300 bg-white flex items-center justify-center mb-3 md:mb-4">
                <Image src="/images/study-abroad/logos/s-2.webp" alt="Bashkir State Medical University" width={80} height={80} className="object-contain w-16 h-16 md:w-20 md:h-20" />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-xs md:text-sm px-2">
                Yong Loo Lin School of Medicine Singapore
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

      {/* Why Choose Russia Section */}
      <div className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8">
            Why choose Russia as your destination to study MBBS?
          </h2>

          <div className="text-gray-600 leading-relaxed space-y-4 text-sm md:text-base">
            <p>
              Invite Your Friends And Unlock Exclusive Benefits – Earn More With Every Successful Referral. Invite Your Friends And Unlock Exclusive Benefits
              Invite Your Friends And Unlock Exclusive Invite Your Friends And Unlock Exclusive Benefits – Earn More With Every Successful Referral. Invite Your
              Friends And Unlock Exclusive Benefits Invite Your Friends And Unlock Exclusive Invite Your Friends And Unlock Exclusive Benefits – Earn More With
              Every Successful Referral. Invite Your Friends And Unlock Exclusive Benefits Invite Your Friends And Unlock Exclusive
            </p>

            <p>
              Invite Your Friends And Unlock Exclusive Benefits – Earn More With Every Successful Referral. Invite Your Friends And Unlock Exclusive Benefits
              Invite Your Friends And Unlock Exclusive Invite Your Friends And Unlock Exclusive Benefits – Earn More With Every Successful Referral. Invite Your
              Friends And Unlock Exclusive Benefits Invite Your Friends And Unlock Exclusive Invite Your Friends And Unlock Exclusive Benefits – Earn More With
              Every Successful Referral. Invite Your Friends And Unlock Exclusive Benefits Invite Your Friends And Unlock Exclusive
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Russia;