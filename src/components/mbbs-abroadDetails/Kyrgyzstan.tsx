import Image from 'next/image';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Link from 'next/link';

const Kyrgyzstan = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <FloatingWhatsApp />
      {/* Hero Section */}
      <div className="relative text-white py-15 md:py-32 lg:py-50 px-4 md:px-6 overflow-hidden flex items-center" style={{
        backgroundImage: 'url(/images/study-abroad/kyrgyzstanHero.webp)',
        backgroundSize: '110% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="absolute inset-0 bg-gradient-to-r from-[#007AB9] via-[#007AB9]/80 to-transparent z-10"></div>
        <div className="container mx-auto relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl lg:text-[48px] font-bold mb-4 leading-tight uppercase tracking-wider">
              MBBS in KYRGYZSTAN
            </h1>
            <p className="text-sm md:text-lg lg:text-[16px] text-white/90 font-medium max-w-2xl leading-relaxed">
              Turn your dream into reality with an MBBS in Kyrgyzstan, where quality education meets affordability and global recognition.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto py-8 md:py-16 px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
          {/* Left Content */}
          <div className="w-full lg:w-2/3 relative">
            {/* Watermark */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10 z-0 pointer-events-none overflow-hidden">
              <Image
                src="/images/study-abroad/flags/kyrgyzstan.webp"
                alt="Kyrgyzstan Flag"
                width={500}
                height={500}
                className="object-contain w-3/4 h-3/4"
              />
            </div>

            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8">
                Medical Studies in KYRGYZSTAN
              </h2>

              <div className="space-y-4 md:space-y-6 text-gray-600 leading-relaxed text-sm md:text-base">
                <p>
                  Studying medicine in Kyrgyzstan is becoming increasingly popular among foreign students seeking an affordable but quality education. There are many renowned medical institutions where students can learn medical courses in English. With reasonable tuition fees, lower cost of living, and state-of-the-art infrastructure, the academic environment in Kyrgyzstan is very conducive for foreign students wishing to practice medicine without any financial constraints.
                </p>

                <p>
                  Students will have access to experienced faculty members, modernized laboratories, and ample opportunities for hands-on learning, enabling them to hone their skills as physicians. The admission procedure is not that complicated, campus life is secure for all students, and degrees acquired from medical schools in Kyrgyzstan are globally accepted.
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
                in Kyrgyzstan?
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
      <div className=" relative z-20 -mt-16 bg-gradient-to-b from-blue-50 to-white py-8 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 px-4">
            Universities Where You Can Study <span className="text-blue-500">Medicine In Kyrgyzstan</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
            {/* Kyrgyzstan Universities */}
            <div className="flex flex-col items-center">
              <div className="w-[152px] h-[152px] md:w-[190px] md:h-[190px] flex items-center justify-center mb-2 md:mb-4 bg-white rounded-xl shadow-sm">
                <p className="text-gray-400 text-xs italic">Logo Placeholder</p>
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-sm">
                Kyrgyz State Medical Academy
              </h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-[152px] h-[152px] md:w-[190px] md:h-[190px] flex items-center justify-center mb-2 md:mb-4 bg-white rounded-xl shadow-sm">
                <p className="text-gray-400 text-xs italic">Logo Placeholder</p>
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-sm">
                International School of Medicine
              </h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-[152px] h-[152px] md:w-[190px] md:h-[190px] flex items-center justify-center mb-2 md:mb-4 bg-white rounded-xl shadow-sm">
                <p className="text-gray-400 text-xs italic">Logo Placeholder</p>
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-sm">
                Osh State University
              </h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-[152px] h-[152px] md:w-[190px] md:h-[190px] flex items-center justify-center mb-2 md:mb-4 bg-white rounded-xl shadow-sm">
                <p className="text-gray-400 text-xs italic">Logo Placeholder</p>
              </div>
              <h3 className="text-blue-600 font-semibold text-center text-sm">
                Jalal-Abad State University
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Kyrgyzstan Section */}
      <div className="bg-white py-8 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8">
            Why choose Kyrgyzstan as your destination to study MBBS?
          </h2>

          <div className="text-gray-600 leading-relaxed space-y-4 text-sm md:text-base">
            <p>
              One of the major advantages of studying MBBS in Kyrgyzstan is that the mode of communication is English. This eliminates the communication barrier for Indian students. Lets take a look at some of the other reasons that one can consider before choosing medical studies in Kyrgyzstan:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>No Donation/Capitation Fees – A transparent and inexpensive admission process.</li>
              <li>Recognised Universities – The universities are internationally certified by NMC, WHO, and other international organizations.</li>
              <li>Simplified Admission Process – Simple admission process with easy documentation..</li>
              <li>Low Cost of Living – Low costs related to housing, meals, and living expenses.</li>
              <li>Quality Education – Well-equipped facilities, modern curriculum, and competent faculty members.</li>
              <li>Hands-On Experience in Early Years – Students gain clinical skills right from their first year.</li>
              <li>Safe and Student-Friendly Atmosphere – A comfortable environment for foreigners.</li>
              <li>Helpful in FMGE/NExT Preparation – Universities help in preparing for licensing exams in India.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kyrgyzstan;
