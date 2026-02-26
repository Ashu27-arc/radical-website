import React from 'react';
import Image from 'next/image';

const Russia = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative text-white py-15 md:py-32 lg:py-50 px-4 md:px-6 overflow-hidden"
        style={{
          backgroundImage: 'url(/images/study-abroad/uzbekistanHero.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
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
      <div className="bg-gradient-to-b from-blue-50 to-white py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 md:mb-10 lg:mb-12 px-2">
            Universities Where You Can Study <span className="text-blue-500">Medicine In Uzbekishtan</span>
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full border-2 md:border-4 border-cyan-300 bg-white flex items-center justify-center mb-2 md:mb-4">
                <Image
                  src="/images/study-abroad/logos/u.webp"
                  alt="Bukhara State Medical University"
                  width={70}
                  height={70}
                  className="object-contain w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-20 lg:h-20"
                />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-[9px] sm:text-[10px] md:text-xs lg:text-sm px-1">
                Bhukhara State Medical University Uzbekishtan
              </h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full border-2 md:border-4 border-cyan-300 bg-white flex items-center justify-center mb-2 md:mb-4">
                <Image
                  src="/images/study-abroad/logos/u-1.webp"
                  alt="Samarkand State Medical University"
                  width={70}
                  height={70}
                  className="object-contain w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-20 lg:h-20"
                />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-[9px] sm:text-[10px] md:text-xs lg:text-sm px-1">
                Samarkand State Medical University Uzbekishtan
              </h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full border-2 md:border-4 border-cyan-300 bg-white flex items-center justify-center mb-2 md:mb-4">
                <Image
                  src="/images/study-abroad/logos/u-2.webp"
                  alt="Tashkent Pediatric Medical Institute"
                  width={70}
                  height={70}
                  className="object-contain w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-20 lg:h-20"
                />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-[9px] sm:text-[10px] md:text-xs lg:text-sm px-1">
                Tashkent Pediatric Medical Institute Uzbekishtan
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Uzbekistan Section */}
      <div className="bg-white py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 md:mb-6 lg:mb-8">
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