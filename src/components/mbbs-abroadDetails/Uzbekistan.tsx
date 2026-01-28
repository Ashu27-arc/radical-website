import React from 'react';
import Image from 'next/image';

const Russia = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative text-white py-50 px-6 overflow-hidden" style={{
        backgroundImage: 'url(/images/study-abroad/uzbekistanHero.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
    </div>

      {/* Main Content Section */}
      <div className="container mx-auto py-16 px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Content */}
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Medical Studies in Uzbekishtan
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

          {/* Right Sidebar - Consultation Card */}
          <div className="lg:w-1/2 relative flex justify-center mt-16">
            <div className="bg-[#E3F4F3] rounded-lg shadow-lg p-8 relative overflow-hidden w-90 h-60 flex flex-col justify-center items-center text-center">
              {/* Background decoration */}
              {/* <div className="absolute top-0 right-0 w-32 h-32 bg-red-100 rounded-full -translate-y-16 translate-x-16"></div> */}
              
              <div className="relative z-10 flex flex-col justify-center items-center h-full">
                <h3 className="text-xl font-bold text-gray-800 mb-6 leading-tight text-left text-justify">
                  Are you interested in<br />
                  studying medicine<br />
                  in Russia?
                </h3>
                
                <div className="mt-6">
                  <button className="bg-gradient-to-r from-[#28C4B4] to-[#287FC4] hover:from-[#28C4B4] hover:to-[#287FC4] text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 text-base">
                    BOOK CONSULTATION
                  </button>
                </div>
              </div>
            </div>
            
            {/* Image positioned outside card on the right */}
            <div className="absolute -right-28 top-1/2 transform -translate-y-1/2 z-20">
              <Image
                src="/images/study-abroad/main-content.webp"
                alt="Medical consultant"
                width={300}
                height={300}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Universities Section */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Universities Where You Can Study <span className="text-blue-500">Medicine In Uzbekishtan</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Row 1 */}
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full border-4 border-cyan-300 bg-white flex items-center justify-center mb-4">
                <Image src="/images/study-abroad/logos/u.webp" alt="First Moscow State Medical University" width={80} height={80} className="object-contain" />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-sm">
                Bhukhara State Medical University Uzbekishtan
              </h3>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full border-4 border-cyan-300 bg-white flex items-center justify-center mb-4">
                <Image src="/images/study-abroad/logos/u-1.webp" alt="Kazan Federal University" width={80} height={80} className="object-contain" />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-sm">
                Samarkand State Medical University Uzbekishtan
              </h3>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full border-4 border-cyan-300 bg-white flex items-center justify-center mb-4">
                <Image src="/images/study-abroad/logos/u-2.webp" alt="Bashkir State Medical University" width={80} height={80} className="object-contain" />
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-sm">
                Tashkent Pediatric Medical Institute Uzbekishtan
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
            </div>
             */}
            {/* <div className="flex flex-col items-center">
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
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
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