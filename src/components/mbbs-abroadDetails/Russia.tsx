import Image from 'next/image';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Link from 'next/link';

const universities = [
  {
    name: "Altai State Medica University Russia",
    logo: "/images/study-abroad/logos/r.webp",
    link: "https://www.radicaleducation.in/altai-state-medical-university-russia"
  },
  {
    name: "Bashkir State Medical University Russia",
    logo: "/images/study-abroad/logos/r-1.webp",
    link: "https://www.radicaleducation.in/bashkir-state-medical-university-russia"
  },
  {
    name: "Chuvas State Medical University Russia",
    logo: "/images/study-abroad/logos/r-2.webp",
    link: "https://www.radicaleducation.in/chuvash-state-medical-university-russia"
  },
  {
    name: "Kazan Federal University Russia",
    logo: "/images/study-abroad/logos/r-3.webp",
    link: "https://www.radicaleducation.in/kazan-federal-university-russia"
  },
  {
    name: "First State Moscow Russia",
    logo: "/images/study-abroad/logos/r-4.webp",
    link: "https://www.radicaleducation.in/first-moscow-state-medical-university"
  },
  {
    name: "Imanuel Kant Baltic Federal University, Russia",
    logo: "/images/study-abroad/logos/r-5.webp",
    link: "https://www.radicaleducation.in/immanuel-kant-baltic-federal-university"
  },
  {
    name: "Kabardino Balkarian State University Russia",
    logo: "/images/study-abroad/logos/r-6.webp",
    link: "https://www.radicaleducation.in/kabardino-balkarian-state-university-russia"
  },
  {
    name: "Far Eastern Federal University Russia",
    logo: "/images/study-abroad/logos/r-7.webp",
    link: "https://www.radicaleducation.in/far-eastern-federal-university-russia"
  },
  {
    name: "Kazan state medical University Russia",
    logo: "/images/study-abroad/logos/r-8.webp",
    link: "https://www.radicaleducation.in/kazan-state-medical-university-russia"
  },
  {
    name: "Kirov State Medical University Russia",
    logo: "/images/study-abroad/logos/r-10.webp",
    link: "https://www.radicaleducation.in/kirov-state-medical-university"
  },
  {
    name: "Northern State Medical University Russia",
    logo: "/images/study-abroad/logos/r-9.webp",
    link: "https://www.radicaleducation.in/northern-state-medical-university"
  },
  {
    name: "Krasnoyarsk State Medical University Russia",
    logo: "/images/study-abroad/logos/r-11.webp",
    link: "https://www.radicaleducation.in/krasnoyarsk-state-medical-university"
  },
  {
    name: "Kursk State Medical University Russia",
    logo: "/images/study-abroad/logos/r-12.webp",
    link: "https://www.radicaleducation.in/kursk-state-medical-university"
  },
  {
    name: "Kemerovo State Medical University Russia",
    logo: "/images/study-abroad/logos/r-13.webp",
    link: "https://www.radicaleducation.in/kemerovo-state-medical-university"
  },
  {
    name: "Omsk State Medical University Russia",
    logo: "/images/study-abroad/logos/r-14.png",
    link: "https://www.radicaleducation.in/omsk-state-medical-university-russia"
  },
  {
    name: "Orenburg State Medical University Russia",
    logo: "/images/study-abroad/logos/r-15.png",
    link: "https://www.radicaleducation.in/orenburg-state-medical-university-russia"
  },
  {
    name: "Ulyanovsk State Medical University Russia",
    logo: "/images/study-abroad/logos/r-16.webp",
    link: "https://www.radicaleducation.in/ulyanovsk-state-medical-university-usmu"
  },
  {
    name: "Orel State Medical University Russia",
    logo: "/images/study-abroad/logos/r-17.webp",
    link: "https://www.radicaleducation.in/orel-state-medical-university"
  },
  {
    name: "Kalinga Institute of Medical science",
    logo: "/images/study-abroad/logos/r-18.webp",
    link: ""
  },
  {
    name: "Samara State Medical University Russia",
    logo: "/images/study-abroad/logos/r-19.webp",
    link: "https://www.radicaleducation.in/samara-state-medical-university-russia"
  },
  {
    name: "South Ural State University Russia",
    logo: "/images/study-abroad/logos/r-20.webp",
    link: "https://www.radicaleducation.in/south-ural-state-medical-university"
  },
  {
    name: "Volgograd State Medical University Russia",
    logo: "/images/study-abroad/logos/r-21.webp",
    link: "https://www.radicaleducation.in/volgograd-state-medical-university-russia"
  },
  {
    name: "Ural State Medical University Russia",
    logo: "/images/study-abroad/logos/r-22.png",
    link: "https://www.radicaleducation.in/ural-state-medical-university-russia"
  },
  {
    name: "Yaroslavl State Medical University Russia",
    logo: "/images/study-abroad/logos/r-23.webp",
    link: ""
  },
  {
    name: "Tver State Medical University",
    logo: "/images/study-abroad/logos/r-24.png",
    link: "https://www.radicaleducation.in/tver-state-medical-unviersity"
  },
  {
    name: "Synergy University Russia",
    logo: "/images/study-abroad/logos/r-25.webp",
    link: ""
  }
];

const Russia = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <FloatingWhatsApp />
      {/* Hero Section */}
      <div className="relative text-white py-15 md:py-32 lg:py-50 px-4 md:px-6 overflow-hidden flex items-center" style={{
        backgroundImage: 'url(/images/study-abroad/russiaHero.webp)',
        backgroundSize: '110% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="absolute inset-0 bg-gradient-to-r from-[#007AB9] via-[#007AB9]/80 to-transparent z-10"></div>
        <div className="container mx-auto relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl lg:text-[48px] font-bold mb-4 leading-tight uppercase tracking-wider">
              MBBS IN RUSSIA
            </h1>
            <p className="text-sm md:text-lg lg:text-[16px] text-white/90 font-medium max-w-2xl leading-relaxed">
              Begin your medical journey in Russia with trusted guidance, modern facilities, and opportunities that open doors to global careers.
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
            <div className="absolute bottom-14 inset-0 flex items-center justify-center opacity-100 z-0 pointer-events-none overflow-hidden">
              <Image
                src="/images/study-abroad/flags/bg-russia.png"
                alt="Russia Flag"
                width={183}
                height={183}
                className="object-contain w-[183px] h-[183px]"
              />
            </div>

            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8">
                Medical Studies in Russia
              </h2>

              <div className="space-y-4 md:space-y-6 text-gray-600 leading-relaxed text-sm md:text-base">
                <p>
                  With modern facilities, experienced teachers, and an academic curriculum according to international norms, federal medical universities in Russia are known for their strong history of quality education in the past. Russian universities are known worldwide for offering affordable and quality medical education, which has a huge impact on Indian students, not only in the sense of achieving high results but also going far beyond.
                </p>

                <p>
                  There are several reasons why most Indian students prefer to study MBBS in Russia, which include a safe environment, affordable costs, world-class universities, and a strong healthcare system, among others. Some of the top medical colleges in Russia to study MBBS include Pavlov University, Sechenov University, Lomonosov Moscow State University, Kazan State Medical University, etc., which are approved by NMC, WHO, WFME, ECFMG, FAIMER, etc.
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
      <section className="relative z-20 -mt-16 bg-gradient-to-b from-blue-50 to-white py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-center mb-6 md:mb-10 lg:mb-12 px-2 md:px-4">
            Universities where you can study <span className="text-blue-500">medicine in Russia</span>
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {universities.map((uni, index) => (
              uni.link ? (
                <Link key={index} href={uni.link} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
                  <div className="w-[152px] h-[152px] md:w-[190px] md:h-[190px] flex items-center justify-center mb-2 md:mb-4 transition-transform duration-300 group-hover:scale-105">
                    <Image src={uni.logo} alt={uni.name} width={190} height={190} className="object-contain" />
                  </div>
                  <h3 className="text-blue-600 font-semibold text-center text-[10px] md:text-xs lg:text-sm px-1 md:px-2 group-hover:text-blue-800 transition-colors">
                    {uni.name}
                  </h3>
                </Link>
              ) : (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-[152px] h-[152px] md:w-[190px] md:h-[190px] flex items-center justify-center mb-2 md:mb-4">
                    <Image src={uni.logo} alt={uni.name} width={190} height={190} className="object-contain" />
                  </div>
                  <h3 className="text-blue-600 font-semibold text-center text-[10px] md:text-xs lg:text-sm px-1 md:px-2">
                    {uni.name}
                  </h3>
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Russia Section */}
      <div className="bg-white py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 md:mb-6 lg:mb-8">
            Why choose Russia as your destination to study MBBS?
          </h2>

          <div className="text-gray-600 leading-relaxed space-y-3 md:space-y-4 text-sm md:text-base">
            <p>
              Here are some of the major factors that encourage more than 20,000 Indian students to opt for MBBS in Russia:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Advanced Education System:</strong> The education system in Russia, particularly in MBBS, is one of the most advanced and developed education systems in the world.
              </li>
              <li>
                <strong>English is the Medium of Teaching:</strong> All universities in Russia offer education in English, making it easier for Indian students to cope with the education system from the very first day.
              </li>
              <li>
                <strong>Easy Admission:</strong> It is extremely easy for Indian students to get admission into one of the top universities in Russia for MBBS. Students can apply after completing their 12th standard with Physics, Chemistry, and Biology as major subjects, along with a minimum passing percentage of more than 50%.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Russia;
