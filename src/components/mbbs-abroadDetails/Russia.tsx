import Image from 'next/image';

const Russia = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative text-white py-12 md:py-32 lg:py-50 px-4 md:px-6 overflow-hidden" style={{
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
          <div className="lg:w-2/3">
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
