"use client";

import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function AboutUsPage() {
  const heroData = {
    tagline: "About Us Radical Education",
    headingLeft: "Empowering",
    headingHighlight: "Next Generation",
    headingRight: "Students Empowering",
    paragraph: (
      <>
        Radical Education serves as the strategic bridge between ambitious
        students and the world’s leading academic institutions. More than just a
        directory of colleges, we are a dedicated career consultancy
        specialising in navigating the complex landscape of domestic and
        international admissions. Our role is to strip away the "hustle" of the
        application process, replacing it with expert advocacy and direct
        linkages to premier educational resources. At Radical, we don’t just
        offer advice; we provide the professional scaffolding necessary for you
        to secure your seat at a dream institution.
      </>
    ),
    stats: [
      { value: "100%", label: "Rate of Success" },
      { value: "50,000+", label: "Students Counselled" },
      { value: "13+", label: "Years of Experience" },
      { value: "90+", label: "Team Strength" },
    ],
  };

  const whoWeAreData = {
    title: "Who We Are",
    paragraph:
      "Radical Education is your go-to option for understanding the complexities associated with higher education. On our website, you can find in-depth information about top universities around the world, making the process easier for you.",
    expertiseTitle: "Our expertise:",
    expertiseList: [
      {
        title: "Smooth admissions:",
        desc: "Relieve the stress of difficult applications with our specialized help.",
      },
      {
        title: "Top-notch education advisors:",
        desc: "Take advantage of the best education consultants in Delhi who specialize in engineering, management, and medical streams.",
      },
      {
        title: "Understanding at every step:",
        desc: "Gain clear explanations about course details, the enrollment process, and straightforward tuition fees.",
      },
    ],
  };

  const steps = [
    {
      id: 1,
      title: "Comprehensive Career Support",
      desc: `We don’t just place you in a college; we support our growth as a medical professional even after you complete your studies.`,
      img: "/images/about/tile1.png",
    },
    {
      id: 2,
      title: "Stay Informed",
      desc: `Real-time updates on admissions, fees, and documentation. 
We handle the timeline; you handle the dream.`,
      img: "/images/about/tile2.png",
    },
    {
      id: 3,
      title: "Impartial Advice",
      desc: `We provide objective advice tailored strictly to your career goals, ensuring your future is never compromised by institutional bias.`,
      img: "/images/about/tile3.png",
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
              <h1 className="normal-case text-xl sm:text-2xl md:text-3xl font-bold mb-4 leading-tight text-center">
                {heroData.headingLeft} <span className="">The</span>{" "}
                <span className="text-[#00D9A3]">
                  {heroData.headingHighlight}
                </span>{" "}
                <span className="">Of</span> {heroData.headingRight}
              </h1>
            </div>

            <div className="mb-5 flex justify-center">
              <img
                src="/images/about/hero.webp"
                alt="About Radical Education"
                className="w-[220px] h-[260px] object-contain rounded-xl"
              />
            </div>

            <div className="mb-6 px-3">
              <div className="border-l-2 border-[#00CFB2] pl-3 pr-2 max-w-full">
                <p className="text-[14px] font-normal leading-[1.6] opacity-90 text-justify">
                  {heroData.paragraph}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 relative z-10">
              {heroData.stats.map((stat, idx) => (
                <div
                  key={`stat-mobile-${idx}`}
                  className="flex flex-col items-start rounded-lg p-3 sm:p-4"
                >
                  <h3 className="text-3xl sm:text-4xl font-bold mb-1">
                    {stat.value}
                  </h3>
                  <p className="text-xs font-medium sm:text-sm opacity-90">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:grid md:grid-cols-2 gap-8 md:gap-6 items-center">
            <div>
              <h1 className="normal-case text-2xl sm:text-3xl md:text-4xl lg:text-[42px] lg:ml-5 font-bold mb-4 md:mb-3 leading-tight">
                {heroData.headingLeft} <span className="">The</span>{" "}
                <span className="text-[#00D9A3]">
                  {heroData.headingHighlight}
                </span>{" "}
                <span className="">Of</span> {heroData.headingRight}
              </h1>
              <div className="border-l-4 border-[#00CFB2] pl-4 md:pl-4s">
                <p className="text-base font-normal md:text-xs md:text-sm leading-relaxed opacity-90 text-justify">
                  {heroData.paragraph}
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="mb-6 relative z-10">
                <img
                  src="/images/about/hero.webp"
                  alt="About Radical Education"
                  className="w-full sm:w-80 md:w-54 h-48 sm:h-56 md:h-42 object-cover rounded-lg mx-auto"
                />
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 relative z-10 justify-items-center">
                {heroData.stats.map((stat, idx) => (
                  <div
                    key={`stat-desktop-${idx}`}
                    className="w-[170px] flex flex-col items-start rounded-lg p-3 sm:p-4"
                  >
                    <h3 className="text-3xl sm:text-4xl md:text-2xl md:text-3xl font-bold mb-1">
                      {stat.value}
                    </h3>
                    <p className="text-xs font-medium sm:text-sm md:text-xs opacity-90">
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
            <div className="md:w-[37%] flex flex-col items-center md:items-center">
              <h2 className="text-3xl sm:text-4xl md:text-4xl font-semibold text-[#0B2E3C] text-center md:text-left">
                Why Choose Us
              </h2>
              <div className="w-80 sm:w-88 h-1 mt-4 bg-[#00CFB2] md:hidden rounded"></div>
            </div>
            <div className="md:w-2/3">
              <div className="md:border-l-4 md:border-[#00CFB2] md:pl-6 mb-6 md:mb-8">
                <p className="text-sm sm:text-base md:text-base text-[#4A4A4A] font-medium leading-relaxed">
                  Choosing the right college is a crucial decision that can
                  shape your future career
                  <br />
                  journey. At Radical Education, we understand the importance of
                  this decision
                  <br />
                  and aim to make the process as seamless and effortless as
                  possible for you.
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid - Replaced with Steps layout */}
          <div className="relative mt-8 md:mt-16 pb-12 w-full max-w-6xl mx-auto px-4 md:px-0">
            <div className="grid md:grid-cols-3 gap-21 md:gap-10 relative z-10">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className="relative flex flex-col items-center pt-5 h-full"
                >
                  <div className="absolute -top-10 left-16">
                    <img
                      src={step.img}
                      alt={step.title}
                      className="w-13 h-13 object-contain"
                    />
                  </div>

                  {/* Card */}
                  <div className="bg-[#F9FEFF] shadow-[0_3px_5px_rgb(0,0,0,0.12)] border border-[#E6E4E4] w-[calc(100%-2rem)] md:w-[calc(100%-5rem)] rounded-2xl p-6 sm:p-8 relative z-10 flex-1 flex flex-col items-start justify-start min-h-[260px]">
                    <h3 className="text-[#287FC4] font-bold text-[15px] mb-4">
                      {step.title}
                    </h3>
                    <p className="text-[#4A4A4A] text-[13px] leading-relaxed font-medium text-left">
                      {step.desc}
                    </p>
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
          <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-8 md:mb-12">
            <span className="text-[#005A8B]">FEATURED</span>{" "}
            <span className="text-[#00CFB2]">ACROSS</span>
          </p>

          <style
            dangerouslySetInnerHTML={{
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
          `,
            }}
          />

          <div className="w-full overflow-hidden flex flex-col gap-6 relative mask-image-fade py-4">
            {/* Row 1 - Left */}
            <div className="animate-marquee-left gap-4 sm:gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={`row1-${i}`} className="flex gap-4 sm:gap-6">
                  <div className="w-[263.88px] h-[78.19px] bg-white rounded-xl sm:rounded-[10px] p-3 flex items-center justify-center shrink-0">
                    <img
                      src="/images/about/feature-1.webp"
                      alt="APN News"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div className="w-[263.88px] h-[78.19px] bg-white rounded-xl sm:rounded-[10px] p-3 flex items-center justify-center shrink-0">
                    <img
                      src="/images/about/feature-2.webp"
                      alt="Hindustan"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div className="w-[263.88px] h-[78.19px] bg-white rounded-xl sm:rounded-[10px] p-3 flex items-center justify-center shrink-0">
                    <img
                      src="/images/about/feature-3.webp"
                      alt="BIS Infotech"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Row 2 - Right */}
            <div className="animate-marquee-right gap-4 sm:gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={`row2-${i}`} className="flex gap-4 sm:gap-6">
                  <div className="w-[263.88px] h-[78.19px] bg-white rounded-xl sm:rounded-[10px] p-3 flex items-center justify-center shrink-0">
                    <img
                      src="/images/about/feature-4.webp"
                      alt="Dainik Bhaskar"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div className="w-[263.88px] h-[78.19px] bg-white rounded-xl sm:rounded-[10px] p-3 flex items-center justify-center shrink-0">
                    <img
                      src="/images/about/feature-5.webp"
                      alt="Hindustan Times"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div className="w-[263.88px] h-[78.19px] bg-white rounded-xl sm:rounded-[10px] p-3 flex items-center justify-center shrink-0">
                    <img
                      src="/images/about/feature-6.webp"
                      alt="Dainik Jagran"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-12 md:py-16 bg-[#005A8B] text-white">
        <div className="container mx-auto px-4 md:px-8">
          {/* Mobile Layout */}
          <div className="block md:hidden">
            {/* IMAGE FIRST */}
            <div className="flex justify-center mb-6">
              <img
                src="/images/about/wwr-left.png"
                alt="Who We Are"
                className="w-[260px] h-[320px] object-cover rounded-2xl"
              />
            </div>

            {/* CONTENT */}
            <div className="relative px-2">
              {/* BG SHAPE */}
              <img
                src="/images/about/wwr-bg.png"
                alt="bg"
                className="absolute right-[50%] top-13 w-[120px] opacity-100 pointer-events-none"
              />

              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-4">
                  {whoWeAreData.title}
                </h2>

                <p className="text-sm leading-relaxed mb-4 opacity-90 text-justify">
                  Radical Education is built to simplify one of the most complex
                  and high-stakes decisions in a student’s life—
                  <span className="font-semibold"> NEET counselling.</span>
                </p>

                <p className="text-sm leading-relaxed opacity-80 text-justify">
                  In a system filled with scattered information, unclear
                  processes, and overwhelming choices, we bring clarity through
                  data, structure, and expert guidance.
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:grid md:grid-cols-2 items-center">
            {/* LEFT IMAGE */}
            <div className="flex justify-center">
              <img
                src="/images/about/wwr-left.png"
                alt="Who We Are"
                className="w-[320px] h-[420px] object-cover rounded-2xl"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className="relative max-w-xl">
              {/* BACKGROUND SHAPE */}
              <img
                src="/images/about/wwr-bg.png"
                alt="bg-shape"
                className="absolute right-50 top-21 w-[250px] opacity-100 pointer-events-none"
              />

              {/* CONTENT */}
              <div className="relative z-10">
                <h2 className="text-4xl font-bold mb-6">
                  {whoWeAreData.title}
                </h2>

                <p className="text-base font-normal leading-relaxed mb-6 opacity-90 text-justify">
                  Radical Education is built to simplify one of the most complex
                  and high-stakes decisions in a student’s life—
                  <span className="font-bold"> NEET counselling.</span>
                </p>

                <p className="text-sm font-normal leading-relaxed opacity-80 mb-4 text-justify">
                  In a system filled with scattered information, unclear
                  processes, and overwhelming choices, we bring clarity through
                  data, structure, and expert guidance. From understanding
                  cut-offs and predicting possibilities to evaluating colleges
                  and making the right choices, we ensure that students and
                  parents never have to rely on guesswork.
                </p>

                <p className="text-sm font-normal leading-relaxed opacity-80 text-justify">
                  Radical Education transforms the NEET counselling process into
                  a structured, data-driven decision-making journey. By
                  combining predictive insights, expert guidance, and simplified
                  information, we help students and parents navigate complexity
                  with clarity and confidence—ensuring every choice is informed,
                  intentional, and future-ready.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-24">
          <div className="grid md:grid-cols-3 gap-6 md:gap-6 items-stretch">
            {/* Mission Card */}
            <div
              className="bg-white rounded-[12px] p-6 sm:p-8 border border-gray-100 
shadow-[0_11px_21px_rgba(102,187,229,0.1)]"
            >
              <div className="mt-0">
                <h3 className="text-xl sm:text-2xl font-medium text-[#0B2E3C] mb-4">
                  Mission
                </h3>

                <p className="text-[#4A4A4A] font-normal text-[12px] leading-relaxed mb-4 text-justify">
                  At Radical Education, our mission is to eliminate the
                  confusion, anxiety and misinformation that define the NEET
                  counselling journey.
                </p>

                <p className="text-[#4A4A4A] text-[12px] leading-relaxed font-semibold mb-4 text-justify">
                  Every year, millions of students and parents are forced to
                  make life-altering decisions with incomplete knowledge,
                  unreliable advice, and overwhelming data. We exist to change
                  that.
                </p>

                <p className="text-[#4A4A4A] font-normal text-[12px] leading-relaxed mb-4 text-justify">
                  By transforming complex counselling data into clear,
                  personalized, and actionable insights, we enable students and
                  families to navigate the process with confidence. Through a
                  combination of technology, predictive intelligence, and human
                  guidance, we simplify decision-making at every step—ensuring
                  that no opportunity is missed due to lack of clarity.
                </p>

                <p className="text-[#4A4A4A] text-[12px] font-semibold text-justify">
                  “Because the right decision, at the right time, can change the
                  trajectory of a life.”
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div
              className="bg-white rounded-[12px] p-6 sm:p-8 border border-gray-100 
shadow-[0_11px_21px_rgba(102,187,229,0.1)]"
            >
              <div className="mt-0">
                <h3 className="text-xl sm:text-2xl font-medium text-[#0B2E3C] mb-4">
                  Vision
                </h3>

                <p className="text-[#4A4A4A] text-[12px] font-semibold leading-relaxed font-weight-600 mb-4 text-justify">
                  We envision a future where every medical aspirant in India,
                  regardless of their background, has equal access to
                  transparent, trustworthy, and intelligent decision-making
                  support.
                </p>

                <p className="text-[#4A4A4A] font-normal text-[12px] font-weight-400 leading-relaxed mb-4 text-justify">
                  Radical Education aims to become India’s most trusted
                  ecosystem for medical admissions—where data replaces
                  guesswork, guidance replaces confusion, and every student is
                  empowered to make the best possible choice for their future.
                </p>

                <p className="text-[#4A4A4A] font-normal text-[12px] font-weight-400 leading-relaxed text-justify">
                  In the long run, we aspire to redefine how high-stakes
                  educational decisions are made in India—not just for NEET, but
                  across all career pathways—by building systems that are
                  transparent, student-centric, and deeply reliable.
                </p>
              </div>
            </div>

            {/* Image Card */}
            <div className="bg-white rounded-2xl sm:rounded-[15px] shadow-lg overflow-hidden border border-gray-100 h-64 sm:h-auto">
              <img
                src="/images/about/core.webp"
                alt="NEET Counselling"
                className="w-full h-auto md:h-full object-contain md:object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
