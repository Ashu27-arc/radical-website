"use client";

import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function AboutUsPage() {
  const heroData = {
    tagline: "About Us Radical Education",
    headingLeft: "Empowering",
    headingHighlight: "Next Generation",
    headingRight: "Students",
    paragraph: (
      <>
        Presenting a platform that offers varied courses across different
        institutions
        <br />
        for students. Whether you want to pursue your education in India
        or abroad, Radical
        <br />
        Education is well-informed about every detail and simplifies the
        admission
        <br />
        process. We have the necessary linkages to outstanding
        educational resources. We
        <br />
        take pride in providing all of our students with individual
        attention and professional
        <br />
        assistance as they take big steps towards their future goals.
      </>
    ),
    stats: [
      { value: "100%", label: "Rate of Success" },
      { value: "15783+", label: "Students Counselled" },
      { value: "12+", label: "Years of Experience" },
      { value: "55+", label: "Team Strength" },
    ]
  };

  const whoWeAreData = {
    title: "Who We Are",
    paragraph: "Radical Education is your go-to option for understanding the complexities associated with higher education. On our website, you can find in-depth information regarding top universities around the world, making the process easier for you.",
    expertiseTitle: "Our expertise:",
    expertiseList: [
      {
        title: "Smooth admissions:",
        desc: "Relieve the stress of difficult applications with our specialized help."
      },
      {
        title: "Top-notch education advisors:",
        desc: "Take advantage of the best education consultants in Delhi who specialize in engineering, management, and medical streams."
      },
      {
        title: "Understanding at every step:",
        desc: "Gain clear explanations regarding details of the courses, the process of enrolling, and straightforward tuition fees."
      }
    ]
  };

  const steps = [
    {
      id: 1,
      title: "Comprehensive Career Support",
      desc: `Upon Completing the Course, we continue To provide support to ensure students move towards a more promising future.`,
    },
    {
      id: 2,
      title: "Stay Informed",
      desc: `Receive prompt alerts and updates regarding admissions, assignments, and fee deadlines, along with other essential information.`,
    },
    {
      id: 3,
      title: "Impartial Advice",
      desc: `We are dedicated to assisting students on their paths to career progression and personal development, free from any prejudice.`,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <FloatingWhatsApp />

      {/* Hero Section */}
      <section className="relative min-h-[500px] md:h-[90vh] md:min-h-[400px] md:max-h-[600px] bg-gradient-to-br from-[#0B5A8E] to-[#1B7AB8] text-white overflow-hidden flex items-center py-8 md:py-0">
        <div className="container mx-auto px-4 md:px-8 w-full">
          {/* Mobile Layout */}
          <div className="block md:hidden">
            <div className="mb-8">
              <p className="text-sm mb-3 opacity-90 text-center">
                {heroData.tagline}
              </p>
              <h1 className="normal-case text-xl sm:text-2xl md:text-3xl font-bold mb-4 leading-tight text-center">
                {heroData.headingLeft} <span className="lowercase">the</span>{" "}
                <span className="text-[#00D9A3]">{heroData.headingHighlight}</span>{" "}
                <span className="lowercase">of</span> {heroData.headingRight}
              </h1>
            </div>

            <div className="mb-6 relative z-10">
              <img
                src="/images/about/hero.webp"
                alt="About Radical Education"
                className="w-full sm:w-80 h-48 sm:h-56 object-cover rounded-lg mx-auto"
              />
            </div>

            <div className="mb-8">
              <div className="border-l-4 border-[#00CFB2] pl-4">
                <p className="text-base leading-relaxed opacity-90 text-left">
                  {heroData.paragraph}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 relative z-10">
              {heroData.stats.map((stat, idx) => (
                <div key={`stat-mobile-${idx}`} className="text-center rounded-lg p-3 sm:p-4">
                  <h3 className="text-3xl sm:text-4xl font-bold mb-1">{stat.value}</h3>
                  <p className="text-xs sm:text-sm opacity-90">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:grid md:grid-cols-2 gap-8 md:gap-6 items-center">
            <div>
              <p className="text-sm md:text-sm mb-3 md:mb-2 opacity-90">
                {heroData.tagline}
              </p>
              <h1 className="normal-case text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-3 leading-tight">
                {heroData.headingLeft} <span className="lowercase">the</span>{" "}
                <span className="text-[#00D9A3]">{heroData.headingHighlight}</span>{" "}
                <span className="lowercase">of</span> {heroData.headingRight}
              </h1>
              <div className="border-l-4 border-[#00CFB2] pl-4 md:pl-3 md:pl-4">
                <p className="text-base md:text-xs md:text-sm leading-relaxed opacity-90">
                  {heroData.paragraph}
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="mb-6 relative z-10">
                <img
                  src="/images/about/hero.webp"
                  alt="About Radical Education"
                  className="w-full sm:w-80 md:w-64 h-48 sm:h-56 md:h-48 object-cover rounded-lg mx-auto"
                />
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 relative z-10">
                {heroData.stats.map((stat, idx) => (
                  <div key={`stat-desktop-${idx}`} className="text-center rounded-lg p-3 sm:p-4">
                    <h3 className="text-3xl sm:text-4xl md:text-2xl md:text-3xl font-bold mb-1">
                      {stat.value}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-xs opacity-90">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Full Width */}
      <section className="py-12 md:py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-8 md:mb-12">
            <div className="md:w-1/3 flex flex-col items-center md:items-start">
              <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-gray-900 text-center md:text-left">
                Why choose us?
              </h2>
              <div className="w-80 sm:w-88 h-1 mt-4 bg-[#00CFB2] md:hidden rounded"></div>
            </div>
            <div className="md:w-2/3">
              <div className="md:border-l-4 md:border-[#00CFB2] md:pl-6 mb-6 md:mb-8">
                <p className="text-sm sm:text-base md:text-base text-gray-600 leading-relaxed">
                  Choosing the right college is a crucial decision that can shape your
                  future career
                  <br />
                  journey. At Radical Education, we understand the importance of this
                  decision
                  <br />
                  and aim to make the process as seamless and effortless as possible
                  for you.
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid - Replaced with Steps layout */}
          <div className="relative mt-8 md:mt-16 pb-12 w-full max-w-6xl mx-auto px-4 md:px-0">
            <div className="grid md:grid-cols-3 gap-8 md:gap-10 relative z-10">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className="relative flex flex-col items-center pt-5 h-full"
                >
                  {/* Umbrella Line */}
                  <div className="block absolute top-[36px] left-0 right-0 h-[65%] rounded-t-[2.5rem] border-t-[1.5px] border-l-[1.5px] border-r-[1.5px] border-[#287FC4] pointer-events-none z-0">
                    <div className="absolute -left-[5.5px] -bottom-[5px] w-[10px] h-[10px] bg-[#287FC4] rounded-full"></div>
                    <div className="absolute -right-[5.5px] -bottom-[5px] w-[10px] h-[10px] bg-[#287FC4] rounded-full"></div>
                  </div>

                  {/* Top Badge */}
                  <div
                    className="bg-[#287FC4] text-white flex items-center justify-center w-[120px] h-[34px] font-semibold text-[17px] relative z-10 mb-6"
                    style={{
                      clipPath:
                        "polygon(16px 0%, calc(100% - 16px) 0%, 100% 50%, calc(100% - 16px) 100%, 16px 100%, 0% 50%)",
                    }}
                  >
                    {step.id}
                  </div>

                  {/* Card */}
                  <div className="bg-[#fbfcff] shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 w-[calc(100%-2rem)] md:w-[calc(100%-2.5rem)] rounded-2xl p-6 sm:p-8 text-center relative z-10 flex-1 flex flex-col items-center justify-start min-h-[260px]">
                    <h3 className="text-blue-700 font-bold text-[17px] mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-[14px] leading-relaxed font-medium">
                      {step.desc}
                    </p>

                    {/* Bottom Triangle */}
                    <div className="absolute -bottom-[20px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-[#287FC4] border-r-[20px] border-r-transparent"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Across Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12 text-[#00CFB240]">
            Featured across
          </h2>

          <style dangerouslySetInnerHTML={{
            __html: `
            @keyframes marqueeLeft {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            @keyframes marqueeRight {
              0% { transform: translateX(-50%); }
              100% { transform: translateX(0); }
            }
            .animate-marquee-left {
              display: flex;
              width: max-content;
              animation: marqueeLeft 35s linear infinite;
            }
            .animate-marquee-right {
              display: flex;
              width: max-content;
              animation: marqueeRight 35s linear infinite;
            }
            .animate-marquee-left:hover, .animate-marquee-right:hover {
              animation-play-state: paused;
            }
            .mask-image-fade {
              -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
              mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
            }
          `}} />

          <div className="w-full overflow-hidden flex flex-col gap-6 relative mask-image-fade py-4">
            {/* Row 1 - Left */}
            <div className="animate-marquee-left gap-4 sm:gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={`row1-${i}`} className="flex gap-4 sm:gap-6">
                  <div className="w-48 sm:w-56 md:w-64 bg-white rounded-xl sm:rounded-2xl shadow-md p-4 sm:p-6 md:p-8 flex items-center justify-center h-24 sm:h-28 md:h-32 shrink-0">
                    <img src="/images/about/feature-1.webp" alt="APN News" className="max-h-8 sm:max-h-10 md:max-h-12 max-w-full object-contain" />
                  </div>
                  <div className="w-48 sm:w-56 md:w-64 bg-white rounded-xl sm:rounded-2xl shadow-md p-4 sm:p-6 md:p-8 flex items-center justify-center h-24 sm:h-28 md:h-32 shrink-0">
                    <img src="/images/about/feature-2.webp" alt="Hindustan" className="max-h-8 sm:max-h-10 md:max-h-12 max-w-full object-contain" />
                  </div>
                  <div className="w-48 sm:w-56 md:w-64 bg-white rounded-xl sm:rounded-2xl shadow-md p-4 sm:p-6 md:p-8 flex items-center justify-center h-24 sm:h-28 md:h-32 shrink-0">
                    <img src="/images/about/feature-3.webp" alt="BIS Infotech" className="max-h-8 sm:max-h-10 md:max-h-12 max-w-full object-contain" />
                  </div>
                </div>
              ))}
            </div>

            {/* Row 2 - Right */}
            <div className="animate-marquee-right gap-4 sm:gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={`row2-${i}`} className="flex gap-4 sm:gap-6">
                  <div className="w-48 sm:w-56 md:w-64 bg-white rounded-xl sm:rounded-2xl shadow-md p-4 sm:p-6 md:p-8 flex items-center justify-center h-24 sm:h-28 md:h-32 shrink-0">
                    <img src="/images/about/feature-4.webp" alt="Dainik Bhaskar" className="max-h-8 sm:max-h-10 md:max-h-12 max-w-full object-contain" />
                  </div>
                  <div className="w-48 sm:w-56 md:w-64 bg-white rounded-xl sm:rounded-2xl shadow-md p-4 sm:p-6 md:p-8 flex items-center justify-center h-24 sm:h-28 md:h-32 shrink-0">
                    <img src="/images/about/feature-5.webp" alt="Hindustan Times" className="max-h-8 sm:max-h-10 md:max-h-12 max-w-full object-contain" />
                  </div>
                  <div className="w-48 sm:w-56 md:w-64 bg-white rounded-xl sm:rounded-2xl shadow-md p-4 sm:p-6 md:p-8 flex items-center justify-center h-24 sm:h-28 md:h-32 shrink-0">
                    <img src="/images/about/feature-6.webp" alt="Dainik Jagran" className="max-h-8 sm:max-h-10 md:max-h-12 max-w-full object-contain" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-stretch">
            {/* Mission Card */}
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden border border-gray-100 p-6 sm:p-8 relative">
              <div className="absolute -top-1 right-0 w-20 h-20 sm:w-24 sm:h-24">
                <img
                  src="/images/about/ellipse.webp"
                  alt="Mission Icon"
                  className="w-full h-full object-contain"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="/images/about/mission.webp"
                    alt="Mission"
                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                  />
                </div>
              </div>
              <div className="mt-12 sm:mt-16">
                <h3 className="text-xl sm:text-2xl font-bold text-[#0B2E3C] mb-3 sm:mb-4">
                  Mission
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Radical Education welcomes students from all over India seeking
                  guidance on management, engineering, and medical streams of study
                  in India and across the world. We understand how complex the
                  research process may be for you, irrespective of the phase you
                  are in. We aim to ensure that all students in India possess the
                  knowledge to make the right decision about their lives.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden border border-gray-100 p-6 sm:p-8 relative">
              <div className="absolute -top-1 right-0 w-20 h-20 sm:w-24 sm:h-24">
                <img
                  src="/images/about/ellipse.webp"
                  alt="Vision Icon"
                  className="w-full h-full object-contain"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="/images/about/vission.webp"
                    alt="Vision"
                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                  />
                </div>
              </div>
              <div className="mt-12 sm:mt-16">
                <h3 className="text-xl sm:text-2xl font-bold text-[#0B2E3C] mb-3 sm:mb-4">
                  Vision
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Imagine an India where every child succeeds. They have
                  the wisdom, resources, and facilities to fully navigate their
                  academic endeavors and across the world. We envision the benefits of advanced technology, which help them make informed choices about their lives. This unlocks their true potential so they
                  can achieve something substantial for themselves as well as for
                  the nation. We envision a learning culture with adaptable, empowered youngsters who ensure their aspirations take flight.
                </p>
              </div>
            </div>

            {/* Image Card */}
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden border border-gray-100 h-64 sm:h-auto">
              <img
                src="/images/about/core.webp"
                alt="NEET Counselling"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-12 md:py-16 bg-[#005A8B] text-white">
        <div className="container mx-auto px-4 md:px-8">
          {/* Mobile Layout */}
          <div className="block md:hidden">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
              {whoWeAreData.title}
            </h2>

            <div className="relative mb-8 -mx-4 px-4">
              <img
                src="/images/about/wave.webp"
                alt="Who We Are"
                className="w-full h-[200px] sm:h-[250px] object-cover object-center rounded-xl"
              />
            </div>

            <div>
              <p className="text-sm sm:text-base leading-relaxed mb-6 opacity-90">
                {whoWeAreData.paragraph}
              </p>

              <h3 className="text-lg sm:text-xl font-bold mb-4">
                {whoWeAreData.expertiseTitle}
              </h3>
              <ul className="space-y-3 text-sm sm:text-base">
                {whoWeAreData.expertiseList.map((item, idx) => (
                  <li key={`expertise-mobile-${idx}`} className="flex items-start">
                    <span className="text-[#00D9A3] mr-2 text-lg">•</span>
                    <span>
                      {item.title} {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-center">
                {whoWeAreData.title}
              </h2>
              <img
                src="/images/about/wave.webp"
                alt="Who We Are"
                className="w-full h-[200px] sm:h-[250px] object-cover rounded-xl sm:rounded-2xl"
              />
            </div>

            <div>
              <p className="text-sm sm:text-base leading-relaxed mb-6 md:mb-8 opacity-90">
                {whoWeAreData.paragraph}
              </p>

              <h3 className="text-lg sm:text-xl font-bold mb-3 md:mb-4">
                {whoWeAreData.expertiseTitle}
              </h3>
              <ul className="space-y-3 text-sm sm:text-base">
                {whoWeAreData.expertiseList.map((item, idx) => (
                  <li key={`expertise-desktop-${idx}`} className="flex items-start">
                    <span className="text-[#00D9A3] mr-2 text-lg">•</span>
                    <span>
                      {item.title} {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
