import Image from 'next/image';

const Russia = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative text-white py-15 md:py-32 lg:py-50 px-4 md:px-6 overflow-hidden" style={{
        backgroundImage: 'url(/images/study-abroad/heroSection.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto py-8 md:py-16 px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
          {/* Left Content */}
          <div className="lg:w-2/3 relative">
            {/* Watermark */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10 z-0 pointer-events-none overflow-hidden">
              <Image
                src="/images/study-abroad/flags/russia.webp"
                alt="Russia Flag"
                width={500}
                height={500}
                className="object-contain w-3/4 h-3/4"
              />
            </div>

            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8">
                Medical Studies in Russia
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

          {/* Right Section - Card + Image side by side (both mobile and desktop) */}
          <div className="w-full lg:w-1/2 flex flex-row items-end lg:items-center overflow-visible mt-6 lg:mt-0">

            {/* Consultation Card - left side */}
            <div className="relative z-0 bg-[#E3F4F3] rounded-2xl shadow-lg p-4 lg:p-8 flex flex-col justify-center items-start text-left shrink-0 w-[250px] h-[170px] sm:w-[250px] sm:h-[250px] md:w-[290px] md:h-[290px] lg:w-[360px] lg:h-[250px] self-end mb-4 lg:mb-8">
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-800 mb-3 lg:mb-6 leading-snug">
                Are you interested in<br />
                studying medicine<br />
                in Russia?
              </h3>
              <button className="bg-gradient-to-r from-[#28C4B4] to-[#287FC4] text-white font-semibold py-2 px-4 lg:py-3 lg:px-6 rounded-full transition-all duration-300 text-xs lg:text-sm whitespace-nowrap">
                BOOK CONSULTATION
              </button>
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
      <div className="bg-gradient-to-b from-blue-50 to-white py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-center mb-6 md:mb-10 lg:mb-12 px-2 md:px-4">
            Universities Where You Can Study <span className="text-blue-500">Medicine In Russia</span>
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {/* All Universities */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full border-2 md:border-4 border-cyan-300 bg-white flex items-center justify-center mb-2 md:mb-4">
                <Image src="/images/study-abroad/logos/r.webp" alt="First Moscow State Medical University" width={50} height={50} className="md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain" />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-[10px] md:text-xs lg:text-sm px-1 md:px-2">
                First Moscow State Medical University
              </h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full border-2 md:border-4 border-cyan-300 bg-white flex items-center justify-center mb-2 md:mb-4">
                <Image src="/images/study-abroad/logos/r-1.webp" alt="Kazan Federal University" width={50} height={50} className="md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain" />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-[10px] md:text-xs lg:text-sm px-1 md:px-2">
                Kazan Federal University
              </h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full border-2 md:border-4 border-cyan-300 bg-white flex items-center justify-center mb-2 md:mb-4">
                <Image src="/images/study-abroad/logos/r-2.webp" alt="Bashkir State Medical University" width={50} height={50} className="md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain" />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-[10px] md:text-xs lg:text-sm px-1 md:px-2">
                Bashkir State Medical University
              </h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full border-2 md:border-4 border-cyan-300 bg-white flex items-center justify-center mb-2 md:mb-4">
                <Image src="/images/study-abroad/logos/r-3.webp" alt="Crimea Federal University" width={50} height={50} className="md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain" />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-[10px] md:text-xs lg:text-sm px-1 md:px-2">
                Crimea Federal University
              </h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full border-2 md:border-4 border-cyan-300 bg-white flex items-center justify-center mb-2 md:mb-4">
                <Image src="/images/study-abroad/logos/r-4.webp" alt="Kursk State Medical University" width={50} height={50} className="md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain" />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-[10px] md:text-xs lg:text-sm px-1 md:px-2">
                Kursk State Medical University
              </h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full border-2 md:border-4 border-cyan-300 bg-white flex items-center justify-center mb-2 md:mb-4">
                <Image src="/images/study-abroad/logos/r-5.webp" alt="Volgograd State Medical University" width={50} height={50} className="md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain" />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-[10px] md:text-xs lg:text-sm px-1 md:px-2">
                Volgograd State Medical University
              </h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full border-2 md:border-4 border-cyan-300 bg-white flex items-center justify-center mb-2 md:mb-4">
                <Image src="/images/study-abroad/logos/r-6.webp" alt="Tver State Medical University" width={50} height={50} className="md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain" />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-[10px] md:text-xs lg:text-sm px-1 md:px-2">
                Tver State Medical University
              </h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full border-2 md:border-4 border-cyan-300 bg-white flex items-center justify-center mb-2 md:mb-4">
                <Image src="/images/study-abroad/logos/r-7.webp" alt="Orenburg State Medical University" width={50} height={50} className="md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain" />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-[10px] md:text-xs lg:text-sm px-1 md:px-2">
                Orenburg State Medical University
              </h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full border-2 md:border-4 border-cyan-300 bg-white flex items-center justify-center mb-2 md:mb-4">
                <Image src="/images/study-abroad/logos/r-8.webp" alt="Kursk State Medical University" width={50} height={50} className="md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain" />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-[10px] md:text-xs lg:text-sm px-1 md:px-2">
                Kursk State Medical University
              </h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full border-2 md:border-4 border-cyan-300 bg-white flex items-center justify-center mb-2 md:mb-4">
                <Image src="/images/study-abroad/logos/r-9.webp" alt="Volgograd State Medical University" width={50} height={50} className="md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain" />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-[10px] md:text-xs lg:text-sm px-1 md:px-2">
                Volgograd State Medical University
              </h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full border-2 md:border-4 border-cyan-300 bg-white flex items-center justify-center mb-2 md:mb-4">
                <Image src="/images/study-abroad/logos/r-10.webp" alt="Tver State Medical University" width={50} height={50} className="md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain" />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-[10px] md:text-xs lg:text-sm px-1 md:px-2">
                Tver State Medical University
              </h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full border-2 md:border-4 border-cyan-300 bg-white flex items-center justify-center mb-2 md:mb-4">
                <Image src="/images/study-abroad/logos/r-11.webp" alt="Orenburg State Medical University" width={50} height={50} className="md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain" />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-[10px] md:text-xs lg:text-sm px-1 md:px-2">
                Orenburg State Medical University
              </h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full border-2 md:border-4 border-cyan-300 bg-white flex items-center justify-center mb-2 md:mb-4">
                <Image src="/images/study-abroad/logos/r-12.webp" alt="Kursk State Medical University" width={50} height={50} className="md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain" />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-[10px] md:text-xs lg:text-sm px-1 md:px-2">
                Kursk State Medical University
              </h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full border-2 md:border-4 border-cyan-300 bg-white flex items-center justify-center mb-2 md:mb-4">
                <Image src="/images/study-abroad/logos/r-13.webp" alt="Volgograd State Medical University" width={50} height={50} className="md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain" />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-[10px] md:text-xs lg:text-sm px-1 md:px-2">
                Volgograd State Medical University
              </h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full border-2 md:border-4 border-cyan-300 bg-white flex items-center justify-center mb-2 md:mb-4">
                <Image src="/images/study-abroad/logos/r-14.webp" alt="Tver State Medical University" width={50} height={50} className="md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain" />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-[10px] md:text-xs lg:text-sm px-1 md:px-2">
                Tver State Medical University
              </h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full border-2 md:border-4 border-cyan-300 bg-white flex items-center justify-center mb-2 md:mb-4">
                <Image src="/images/study-abroad/logos/r-15.webp" alt="Orenburg State Medical University" width={50} height={50} className="md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain" />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-[10px] md:text-xs lg:text-sm px-1 md:px-2">
                Orenburg State Medical University
              </h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full border-2 md:border-4 border-cyan-300 bg-white flex items-center justify-center mb-2 md:mb-4">
                <Image src="/images/study-abroad/logos/r-16.webp" alt="Kursk State Medical University" width={50} height={50} className="md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain" />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-[10px] md:text-xs lg:text-sm px-1 md:px-2">
                Kursk State Medical University
              </h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full border-2 md:border-4 border-cyan-300 bg-white flex items-center justify-center mb-2 md:mb-4">
                <Image src="/images/study-abroad/logos/r-17.webp" alt="Volgograd State Medical University" width={50} height={50} className="md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain" />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-[10px] md:text-xs lg:text-sm px-1 md:px-2">
                Volgograd State Medical University
              </h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full border-2 md:border-4 border-cyan-300 bg-white flex items-center justify-center mb-2 md:mb-4">
                <Image src="/images/study-abroad/logos/r-18.webp" alt="Tver State Medical University" width={50} height={50} className="md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain" />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-[10px] md:text-xs lg:text-sm px-1 md:px-2">
                Tver State Medical University
              </h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full border-2 md:border-4 border-cyan-300 bg-white flex items-center justify-center mb-2 md:mb-4">
                <Image src="/images/study-abroad/logos/r-19.webp" alt="Orenburg State Medical University" width={50} height={50} className="md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain" />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-[10px] md:text-xs lg:text-sm px-1 md:px-2">
                Orenburg State Medical University
              </h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full border-2 md:border-4 border-cyan-300 bg-white flex items-center justify-center mb-2 md:mb-4">
                <Image src="/images/study-abroad/logos/r-20.webp" alt="Kursk State Medical University" width={50} height={50} className="md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain" />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-[10px] md:text-xs lg:text-sm px-1 md:px-2">
                Kursk State Medical University
              </h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full border-2 md:border-4 border-cyan-300 bg-white flex items-center justify-center mb-2 md:mb-4">
                <Image src="/images/study-abroad/logos/r-21.webp" alt="Volgograd State Medical University" width={50} height={50} className="md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain" />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-[10px] md:text-xs lg:text-sm px-1 md:px-2">
                Volgograd State Medical University
              </h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full border-2 md:border-4 border-cyan-300 bg-white flex items-center justify-center mb-2 md:mb-4">
                <Image src="/images/study-abroad/logos/r-22.webp" alt="Tver State Medical University" width={50} height={50} className="md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain" />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-[10px] md:text-xs lg:text-sm px-1 md:px-2">
                Tver State Medical University
              </h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full border-2 md:border-4 border-cyan-300 bg-white flex items-center justify-center mb-2 md:mb-4">
                <Image src="/images/study-abroad/logos/r-23.webp" alt="Orenburg State Medical University" width={50} height={50} className="md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain" />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-[10px] md:text-xs lg:text-sm px-1 md:px-2">
                Orenburg State Medical University
              </h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full border-2 md:border-4 border-cyan-300 bg-white flex items-center justify-center mb-2 md:mb-4">
                <Image src="/images/study-abroad/logos/r-1.webp" alt="Moscow State Medical University" width={50} height={50} className="md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain" />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-[10px] md:text-xs lg:text-sm px-1 md:px-2">
                Moscow State Medical University
              </h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full border-2 md:border-4 border-cyan-300 bg-white flex items-center justify-center mb-2 md:mb-4">
                <Image src="/images/study-abroad/logos/r-25.webp" alt="Smolensk State Medical University" width={50} height={50} className="md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain" />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-[10px] md:text-xs lg:text-sm px-1 md:px-2">
                Smolensk State Medical University
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Russia Section */}
      <div className="bg-white py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 md:mb-6 lg:mb-8">
            Why choose Russia as your destination to study MBBS?
          </h2>

          <div className="text-gray-600 leading-relaxed space-y-3 md:space-y-4 text-sm md:text-base">
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
