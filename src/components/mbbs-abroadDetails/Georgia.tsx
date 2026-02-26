import React from 'react';
import Image from 'next/image';

const Russia = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative text-white py-15 md:py-50 px-10 md:px-6 overflow-hidden" style={{
        backgroundImage: 'url(/images/study-abroad/georgiaHero.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto py-10 lg:py-16 px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Content */}
          {/* Left Content */}
          <div className="lg:w-2/3 relative">
            {/* Watermark */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10 z-0 pointer-events-none overflow-hidden">
              <Image
                src="/images/study-abroad/flags/georgia.webp"
                alt="Georgia Flag"
                width={500}
                height={500}
                className="object-contain w-3/4 h-3/4"
              />
            </div>

            <div className="relative z-10">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-8">
                Medical Studies in Georgia
              </h2>

              <div className="space-y-6 text-gray-600 leading-relaxed">
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
          <div className="lg:w-1/2 relative flex justify-center mt-8 lg:mt-16">
            <div className="bg-[#E3F4F3] rounded-lg shadow-lg p-4 md:p-6 lg:p-8 relative overflow-visible w-full max-w-[280px] sm:max-w-xs lg:max-w-md lg:w-90 h-auto lg:h-60 flex flex-col justify-center items-center text-center">

              <div className="relative z-10 flex flex-col justify-center items-center h-full">
                <h3 className="text-sm md:text-base lg:text-xl font-bold text-gray-800 mb-2 md:mb-3 lg:mb-6 leading-tight">
                  Are you interested in<br />
                  studying medicine<br />
                  in Russia?
                </h3>

                <div className="mt-2 md:mt-3 lg:mt-6">
                  <button className="bg-gradient-to-r from-[#28C4B4] to-[#287FC4] hover:from-[#28C4B4] hover:to-[#287FC4] text-white font-semibold py-2 md:py-2.5 lg:py-4 px-4 md:px-5 lg:px-8 rounded-full transition-all duration-300 text-[10px] md:text-xs lg:text-base">
                    BOOK CONSULTATION
                  </button>
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
      <div className="bg-gradient-to-b from-blue-50 to-white py-10 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl lg:text-4xl font-bold text-center mb-12">
            Universities Where You Can Study <span className="text-blue-500">Medicine In Georgia</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8 max-w-6xl mx-auto">
            {/* Row 1 */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full border-4 border-cyan-300 bg-white flex items-center justify-center mb-4">
                <Image src="/images/study-abroad/logos/g.webp" alt="First Moscow State Medical University" width={80} height={80} className="object-contain w-14 h-14 lg:w-20 lg:h-20" />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-xs lg:text-sm">
                Batumi Shota Rustaveli State Medical University Georgia
              </h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full border-4 border-cyan-300 bg-white flex items-center justify-center mb-4">
                <Image src="/images/study-abroad/logos/g-1.webp" alt="Kazan Federal University" width={80} height={80} className="object-contain w-14 h-14 lg:w-20 lg:h-20" />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-xs lg:text-sm">
                Caucasus International University Georgia
              </h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full border-4 border-cyan-300 bg-white flex items-center justify-center mb-4">
                <Image src="/images/study-abroad/logos/g-2.webp" alt="Bashkir State Medical University" width={80} height={80} className="object-contain w-14 h-14 lg:w-20 lg:h-20" />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-xs lg:text-sm">
                European University Georgia
              </h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full border-4 border-cyan-300 bg-white flex items-center justify-center mb-4">
                <Image src="/images/study-abroad/logos/g-3.webp" alt="Crimea Federal University" width={80} height={80} className="object-contain w-14 h-14 lg:w-20 lg:h-20" />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-xs lg:text-sm">
                Georgian National University SEU Georgia
              </h3>
            </div>

            {/* Row 2 */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full border-4 border-cyan-300 bg-white flex items-center justify-center mb-4">
                <Image src="/images/study-abroad/logos/g-4.webp" alt="Kursk State Medical University" width={80} height={80} className="object-contain w-14 h-14 lg:w-20 lg:h-20" />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-xs lg:text-sm">
                Gruni Grigol Robakide University Georgia
              </h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full border-4 border-cyan-300 bg-white flex items-center justify-center mb-4">
                <Image src="/images/study-abroad/logos/g-5.webp" alt="Volgograd State Medical University" width={80} height={80} className="object-contain w-14 h-14 lg:w-20 lg:h-20" />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-xs lg:text-sm">
                Tbilisi Medical Academy Georgia
              </h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full border-4 border-cyan-300 bg-white flex items-center justify-center mb-4">
                <Image src="/images/study-abroad/logos/g-6.webp" alt="Tver State Medical University" width={80} height={80} className="object-contain w-14 h-14 lg:w-20 lg:h-20" />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-xs lg:text-sm">
                Tbilisi State Medical University Georgia
              </h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full border-4 border-cyan-300 bg-white flex items-center justify-center mb-4">
                <Image src="/images/study-abroad/logos/g-7.webp" alt="Orenburg State Medical University" width={80} height={80} className="object-contain w-14 h-14 lg:w-20 lg:h-20" />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-xs lg:text-sm">
                University of Georgia
              </h3>
            </div>

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

      {/* Why Choose Russia Section */}
      <div className="bg-white py-10 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-8">
            Why choose Russia as your destination to study MBBS?
          </h2>

          <div className="text-gray-600 leading-relaxed space-y-4">
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