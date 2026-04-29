import React from 'react';
import Image from 'next/image';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Link from 'next/link';

const Nepal = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <FloatingWhatsApp />
      {/* Hero Section */}
      <div className="relative text-white py-15 md:py-32 lg:py-50 px-4 md:px-6 overflow-hidden flex items-center" style={{
        backgroundImage: 'url(/images/study-abroad/nepalHero.webp)',
        backgroundSize: '110% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="absolute inset-0 bg-gradient-to-r from-[#007AB9] via-[#007AB9]/80 to-transparent z-10"></div>
        <div className="container mx-auto relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl lg:text-[48px] font-bold mb-4 leading-tight uppercase tracking-wider">
              MBBS IN NEPAL
            </h1>
            <p className="text-sm md:text-lg lg:text-[16px] text-white/90 font-medium max-w-2xl leading-relaxed">
              Pursue your dream of becoming a doctor in Nepal’s reputed medical colleges with excellent academic support.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto py-8 md:py-16 px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-12">

          {/* Left Content */}
          <div className="lg:w-2/3 relative">
            {/* Watermark */}
            <div className="absolute inset-0 flex items-center justify-center opacity-70 z-0 pointer-events-none overflow-hidden">
              <Image
                src="/images/study-abroad/flags/bg-nepal.png"
                alt="Nepal Flag"
                width={183}
                height={183}
                className="object-contain w-[183px] h-[183px]"
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
          <div className="w-full lg:w-1/2 flex flex-row items-end lg:items-center overflow-visible mt-6 lg:mt-0">

            {/* Consultation Card - left side */}
            <div className="relative z-0 rounded-2xl shadow-lg p-4 lg:p-8 flex flex-col justify-center items-start text-left shrink-0 w-[250px] h-[170px] sm:w-[250px] sm:h-[250px] md:w-[290px] md:h-[290px] lg:w-[360px] lg:h-[250px] self-end mb-4 lg:mb-8">
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-800 mb-3 lg:mb-6 leading-snug">
                Are you interested in<br />
                studying medicine<br />
                in Nepal?
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
      <section className="relative z-20 -mt-16 bg-gradient-to-b from-blue-50 to-white py-8 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 px-4">
            Universities where you can study <span className="text-blue-500">medicine in Nepal</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Birat Medical College",
                url: "https://www.radicaleducation.in/birat-medical-college-bmc-nepal-2025-26",
                logo: "/images/study-abroad/logos/1.webp"
              },
              {
                name: "College of Medical Sciences",
                url: "https://www.radicaleducation.in/college-of-medical-sciences-cmc-nepal",
                logo: "/images/study-abroad/logos/2.webp"
              },
              {
                name: "Devdaha Medical College",
                url: "https://www.radicaleducation.in/devdaha-medical-college-dmc-nepal",
                logo: "/images/study-abroad/logos/3.webp"
              },
              {
                name: "Kathmandu Medical College",
                url: "https://www.radicaleducation.in/kathmandu-medical-college-kmc-nepal",
                logo: "/images/study-abroad/logos/4.webp"
              },
              {
                name: "Kathmandu National Medical College",
                url: "https://www.radicaleducation.in/national-medical-college-private-limited-nepal",
                logo: "/images/study-abroad/logos/nepal.png"
              },
              {
                name: "Nepal Medical College",
                url: "https://www.radicaleducation.in/nepal-medical-college-nmc-nepal-2025-26-update",
                logo: "/images/study-abroad/logos/6.webp"
              },
              {
                name: "Nepalgunj Medical College",
                url: "https://www.radicaleducation.in/nepalgunj-medical-college-nepal-2025-26-update",
                logo: "/images/study-abroad/logos/7.webp"
              },
              {
                name: "Manipal College of Medical Sciences",
                url: "https://www.radicaleducation.in/manipal-college-of-medical-science-nepal-2025",
                logo: "/images/study-abroad/logos/8.webp"
              },
              {
                name: "Lumbini Medical College",
                url: "https://www.radicaleducation.in/lumbini-medical-college-nepal-2025-26",
                logo: "/images/study-abroad/logos/9.webp"
              },
              {
                name: "B & C Medical College, Jhapa",
                url: "https://www.radicaleducation.in/bc-medical-college-teaching-hospital",
                logo: "/images/study-abroad/logos/10.webp"
              },
              {
                name: "Chitwan Medical College, Bharatpur",
                url: "https://www.radicaleducation.in/chitwan-medical-college-cmc-nepal-2025-2026",
                logo: "/images/study-abroad/logos/11.webp"
              },
              {
                name: "Gandaki Medical College, Pokhara",
                url: "https://www.radicaleducation.in/gandaki-medical-college-teaching-hospital-gmc",
                logo: "/images/study-abroad/logos/12.webp"
              },
              {
                name: "Janaki Medical College, Janakpur",
                url: "https://www.radicaleducation.in/janaki-medical-college-and-teaching-hospital",
                logo: "/images/study-abroad/logos/13.webp"
              },
              {
                name: "Karnali Academy of Health Science, Jumla",
                url: "https://www.radicaleducation.in/karnali-academy-of-health-science-nepal",
                logo: "/images/study-abroad/logos/14.webp"
              },
              {
                name: "Kathmandu University School of Medical Sciences, Dhulikhel",
                url: "https://www.radicaleducation.in/kathmandu-university-school-of-medical",
                logo: "/images/study-abroad/logos/15.webp"
              },
              {
                name: "KIST Medical College, Lalitpur",
                url: "https://www.radicaleducation.in/kist-medical-college-nepal",
                logo: "/images/study-abroad/logos/16.webp"
              },
              {
                name: "National Medical College, Birgunj",
                url: "https://www.radicaleducation.in/national-medical-college-private-limited-nepal",
                logo: "/images/study-abroad/logos/17.webp"
              },
              {
                name: "Nepalese Army Institute of Health Science, Kathmandu",
                url: "https://www.radicaleducation.in/nepalese-army-institute-of-health-science",
                logo: "/images/study-abroad/logos/18.webp"
              },
              {
                name: "Nobel Medical College, Biratnagar",
                url: "https://www.radicaleducation.in/nobel-medical-college-nepal",
                logo: "/images/study-abroad/logos/19.webp"
              },
              {
                name: "Patan Academy of Health Sciences, Lalitpur",
                url: "https://www.radicaleducation.in/patan-academy-of-health-sciences-nepal",
                logo: "/images/study-abroad/logos/20.webp"
              },
              {
                name: "Pokhara Academy of Health Sciences, Pokhara",
                url: "https://www.radicaleducation.in/pokhara-academy-of-health-sciences-nepal",
                logo: "/images/study-abroad/logos/21.webp"
              },
              {
                name: "Universal College of Medical Sciences, Bhairahawa",
                url: "https://www.radicaleducation.in/universal-college-of-medical-sciences-ucms",
                logo: "/images/study-abroad/logos/22.webp"
              }
            ].map((college, index) => (
              <Link key={index} href={college.url} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
                <div className="w-[152px] h-[152px] md:w-[190px] md:h-[190px] flex items-center justify-center mb-2 md:mb-4">
                  <Image src={college.logo} alt={college.name} width={190} height={190} className="object-contain" />
                </div>
                <h3 className="text-blue-600 font-semibold text-center text-xs md:text-sm px-2">
                  {college.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Nepal Section */}
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

      {/* Banner Section */}
      <section>
        <div className="container px-4 md:px-6">
          <div className="relative w-full aspect-[1240/350] rounded-2xl overflow-hidden shadow-lg cursor-pointer">
            {/* Base Banner Link */}
            <Link
              href="https://neetbhaiya.in"
              target="_blank"
              className="block w-full h-full"
            >
              <Image
                src="/images/nb-abroad-banner.webp"
                alt="NEET UG Banner"
                fill
                className="object-cover"
              />
            </Link>

            <div className="flex gap-2 absolute left-[7.3%] -bottom-2 md:bottom-1 lg:bottom-4 xl:bottom-8 w-[135px] md:w-[200px] lg:w-[250px] xl:w-[300px]">
              <div className="hover:scale-105 transition-transform w-full">
                <Link
                  href="https://play.google.com/store/apps/details?id=com.kaveka.NeetBhaiya"
                  target="_blank"
                  className="block w-full h-full"
                >
                  <Image
                    src="/svg/play-store.svg"
                    alt="Google Play Store"
                    width={131}
                    height={37}
                    className="object-contain w-full h-full"
                  />
                </Link>
              </div>
              <div className="hover:scale-105 transition-transform w-full mt-0.5">
                <Link
                  href="https://apps.apple.com/in/app/neet-bhaiya/id6737535565"
                  target="_blank"
                  className="block w-full h-full"
                >
                  <Image
                    src="/svg/app-store.svg"
                    alt="App Store"
                    width={131}
                    height={37}
                    className="object-contain w-full h-full"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nepal;