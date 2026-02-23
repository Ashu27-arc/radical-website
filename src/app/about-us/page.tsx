"use client";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[500px] md:h-[90vh] md:min-h-[400px] md:max-h-[600px] bg-gradient-to-br from-[#0B5A8E] to-[#1B7AB8] text-white overflow-hidden flex items-center py-8 md:py-0">
        <div className="container mx-auto px-4 md:px-8 w-full">
          {/* Mobile Layout - Heading above image, paragraph below */}
          <div className="block md:hidden">
            {/* Heading Only - Mobile */}
            <div className="mb-8">
              <p className="text-sm mb-3 opacity-90 text-center">
                About Us Radical Education
              </p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight text-center">
                Empowering The <br />
                <span className="text-[#00D9A3]">Next Generation</span> Of
                Students Empowering
              </h1>
            </div>

            {/* Image - Mobile */}
            <div className="mb-6 relative z-10">
              <img
                src="/images/about/hero.webp"
                alt="About Radical Education"
                className="w-full sm:w-80 h-48 sm:h-56 object-cover rounded-lg mx-auto"
              />
            </div>

            {/* Paragraph Below Image - Mobile */}
            <div className="mb-8">
              <div className="border-l-4 border-[#00CFB2] pl-4">
                <p className="text-base leading-relaxed opacity-90 text-left">
                  Presenting You A Platform That Presents Different Institutions
                  That Offer Varied Courses
                  <br />
                  For The Students. Whether You Want To Pursue Your Education In
                  India Or Abroad, Radical
                  <br />
                  Education Is Well-Informed About Every Detail And Eases The
                  Hustle Of The Admission
                  <br />
                  Process. And We Have The Necessary Linkages To Outstanding
                  Educational Resources. We
                  <br />
                  Take Pride In Providing All Of Our Students With Individual
                  Attention And Professional
                  <br />
                  Assistance As They Take Big Steps Towards Their Goals In The
                  Future. Whether you want to
                  <br />
                  pursue your education in India or abroad, we are well-informed
                  about every detail.
                </p>
              </div>
            </div>

            {/* Stats Grid - Mobile */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 relative z-10">
              <div className="text-center rounded-lg p-3 sm:p-4">
                <h3 className="text-3xl sm:text-4xl font-bold mb-1">100%</h3>
                <p className="text-xs sm:text-sm opacity-90">Rate of Success</p>
              </div>
              <div className="text-center rounded-lg p-3 sm:p-4">
                <h3 className="text-3xl sm:text-4xl font-bold mb-1">15783+</h3>
                <p className="text-xs sm:text-sm opacity-90">
                  Student Counselled
                </p>
              </div>
              <div className="text-center rounded-lg p-3 sm:p-4">
                <h3 className="text-3xl sm:text-4xl font-bold mb-1">12+</h3>
                <p className="text-xs sm:text-sm opacity-90">
                  Year of Experiences
                </p>
              </div>
              <div className="text-center rounded-lg p-3 sm:p-4">
                <h3 className="text-3xl sm:text-4xl font-bold mb-1">55+</h3>
                <p className="text-xs sm:text-sm opacity-90">Team Strength</p>
              </div>
            </div>
          </div>

          {/* Desktop Layout - Original grid */}
          <div className="hidden md:grid md:grid-cols-2 gap-8 md:gap-6 items-center">
            {/* Left Content */}
            <div>
              <p className="text-sm md:text-sm mb-3 md:mb-2 opacity-90">
                About Us Radical Education
              </p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-3 leading-tight">
                Empowering The{" "}
                <span className="text-[#00D9A3]">Next Generation</span> Of
                Students
              </h1>
              <div className="border-l-4 border-[#00CFB2] pl-4 md:pl-3 md:pl-4">
                <p className="text-base md:text-xs md:text-sm leading-relaxed opacity-90">
                  Presenting You A Platform That Presents Different Institutions
                  That Offer Varied Courses
                  <br />
                  For The Students. Whether You Want To Pursue Your Education In
                  India Or Abroad, Radical
                  <br />
                  Education Is Well-Informed About Every Detail And Eases The
                  Hustle Of The Admission
                  <br />
                  Process. And We Have The Necessary Linkages To Outstanding
                  Educational Resources. We
                  <br />
                  Take Pride In Providing All Of Our Students With Individual
                  Attention And Professional
                  <br />
                  Assistance As They Take Big Steps Towards Their Goals In The
                  Future. Whether you want to
                  <br />
                  pursue your education in India or abroad, we are well-informed
                  about every detail.
                </p>
              </div>
            </div>

            {/* Right Stats */}
            <div className="relative">
              {/* Image Above Stats */}
              <div className="mb-6 relative z-10">
                <img
                  src="/images/about/hero.webp"
                  alt="About Radical Education"
                  className="w-full sm:w-80 md:w-64 h-48 sm:h-56 md:h-48 object-cover rounded-lg mx-auto"
                />
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 relative z-10">
                <div className="text-center rounded-lg p-3 sm:p-4">
                  <h3 className="text-3xl sm:text-4xl md:text-2xl md:text-3xl font-bold mb-1">
                    100%
                  </h3>
                  <p className="text-xs sm:text-sm md:text-xs opacity-90">
                    Rate of Success
                  </p>
                </div>
                <div className="text-center rounded-lg p-3 sm:p-4">
                  <h3 className="text-3xl sm:text-4xl md:text-2xl md:text-3xl font-bold mb-1">
                    15783+
                  </h3>
                  <p className="text-xs sm:text-sm md:text-xs opacity-90">
                    Student Counselled
                  </p>
                </div>
                <div className="text-center rounded-lg p-3 sm:p-4">
                  <h3 className="text-3xl sm:text-4xl md:text-2xl md:text-3xl font-bold mb-1">
                    12+
                  </h3>
                  <p className="text-xs sm:text-sm md:text-xs opacity-90">
                    Year of Experiences
                  </p>
                </div>
                <div className="text-center rounded-lg p-3 sm:p-4">
                  <h3 className="text-3xl sm:text-4xl md:text-2xl md:text-3xl font-bold mb-1">
                    55+
                  </h3>
                  <p className="text-xs sm:text-sm md:text-xs opacity-90">
                    Team Strength
                  </p>
                </div>
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
            <div className="md:w-1/3">
              <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-gray-900">
                Why Choose Us
              </h2>
            </div>
            <div className="md:w-2/3">
              <div className="border-l-4 border-[#00CFB2] pl-4 md:pl-6 mb-6 md:mb-8">
                <p className="text-sm sm:text-base md:text-base text-gray-600 leading-relaxed">
                  Choosing The Right College Is A Crucial Decision That Can
                  Shape Your Future Career
                  <br />
                  Journey. At Radical Education, We Understand The Importance Of
                  This Decision
                  <br />
                  And Aim To Make The Process As Seamless And Effortless As
                  Possible For You.
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid - Full Width */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 mt-16">
            {/* Card 1 */}
            <div className="relative group pt-4">
              {/* Decorative Frame */}
              <div className="absolute -inset-2 md:-inset-3 border-2 border-[#1B7AB8] rounded-[2.5rem] pointer-events-none">
                {/* Hexagon Top */}
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-8 bg-[#1B7AB8] flex items-center justify-center text-white font-bold"
                  style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 50%, 80% 100%, 20% 100%, 0% 50%)' }}
                >
                  1
                </div>
                {/* Side Dots */}
                <div className="absolute top-[45%] -left-[9px] w-4 h-4 bg-[#1B7AB8] rounded-full border-2 border-white" />
                <div className="absolute top-[45%] -right-[9px] w-4 h-4 bg-[#1B7AB8] rounded-full border-2 border-white" />
                {/* Bottom Triangle */}
                <div
                  className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-10 h-6 bg-[#1B7AB8]"
                  style={{ clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)' }}
                />
              </div>

              {/* Inner Card */}
              <div className="relative bg-[#F4F9FF] rounded-[2rem] p-8 md:p-10 text-center h-full min-h-[300px] flex flex-col justify-center shadow-sm">
                <h3 className="text-xl font-bold text-[#1B7AB8] mb-6">
                  Comprehensive <br /> Career Support
                </h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  Upon Completing The Course, We Continue To Provide
                  Support To Ensure Students Move Towards A
                  More Promising Future.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative group pt-4">
              <div className="absolute -inset-2 md:-inset-3 border-2 border-[#1B7AB8] rounded-[2.5rem] pointer-events-none">
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-8 bg-[#1B7AB8] flex items-center justify-center text-white font-bold"
                  style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 50%, 80% 100%, 20% 100%, 0% 50%)' }}
                >
                  2
                </div>
                <div className="absolute top-[45%] -left-[9px] w-4 h-4 bg-[#1B7AB8] rounded-full border-2 border-white" />
                <div className="absolute top-[45%] -right-[9px] w-4 h-4 bg-[#1B7AB8] rounded-full border-2 border-white" />
                {/* Bottom Triangle */}
                <div
                  className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-10 h-6 bg-[#1B7AB8]"
                  style={{ clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)' }}
                />
              </div>

              <div className="relative bg-[#F4F9FF] rounded-[2rem] p-8 md:p-10 text-center h-full min-h-[300px] flex flex-col justify-center shadow-sm">
                <h3 className="text-xl font-bold text-[#1B7AB8] mb-6 leading-tight">
                  Stay Informed
                </h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  Receive Prompt Alerts And Updates Regarding Admissions,
                  Assignments, And Fee Deadlines, Along With Other Essential
                  Information.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative group pt-4">
              <div className="absolute -inset-2 md:-inset-3 border-2 border-[#1B7AB8] rounded-[2.5rem] pointer-events-none">
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-8 bg-[#1B7AB8] flex items-center justify-center text-white font-bold"
                  style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 50%, 80% 100%, 20% 100%, 0% 50%)' }}
                >
                  3
                </div>
                <div className="absolute top-[45%] -left-[9px] w-4 h-4 bg-[#1B7AB8] rounded-full border-2 border-white" />
                <div className="absolute top-[45%] -right-[9px] w-4 h-4 bg-[#1B7AB8] rounded-full border-2 border-white" />
                {/* Bottom Triangle */}
                <div
                  className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-10 h-6 bg-[#1B7AB8]"
                  style={{ clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)' }}
                />
              </div>

              <div className="relative bg-[#F4F9FF] rounded-[2rem] p-8 md:p-10 text-center h-full min-h-[300px] flex flex-col justify-center shadow-sm">
                <h3 className="text-xl font-bold text-[#1B7AB8] mb-6">
                  Impartial Advice
                </h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  We Are Dedicated To Assisting Students On Their Paths To
                  Career Progression And Personal Development, Free From
                  Any Prejudices
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Across Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12 text-[#00CFB240]">
            FEATURED ACROSS
          </h2>

          {/* Media Logos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {/* Row 1 */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-md p-4 sm:p-6 md:p-8 flex items-center justify-center h-24 sm:h-28 md:h-32">
              <img
                src="/images/about/feature-1.webp"
                alt="APN News"
                className="max-h-8 sm:max-h-10 md:max-h-12 max-w-full object-contain"
              />
            </div>
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-md p-4 sm:p-6 md:p-8 flex items-center justify-center h-24 sm:h-28 md:h-32">
              <img
                src="/images/about/feature-2.webp"
                alt="Hindustan"
                className="max-h-8 sm:max-h-10 md:max-h-12 max-w-full object-contain"
              />
            </div>
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-md p-4 sm:p-6 md:p-8 flex items-center justify-center h-24 sm:h-28 md:h-32">
              <img
                src="/images/about/feature-3.webp"
                alt="BIS Infotech"
                className="max-h-8 sm:max-h-10 md:max-h-12 max-w-full object-contain"
              />
            </div>

            {/* Row 2 */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-md p-4 sm:p-6 md:p-8 flex items-center justify-center h-24 sm:h-28 md:h-32">
              <img
                src="/images/about/feature-4.webp"
                alt="Dainik Bhaskar"
                className="max-h-8 sm:max-h-10 md:max-h-12 max-w-full object-contain"
              />
            </div>
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-md p-4 sm:p-6 md:p-8 flex items-center justify-center h-24 sm:h-28 md:h-32">
              <img
                src="/images/about/feature-5.webp"
                alt="Hindustan Times"
                className="max-h-8 sm:max-h-10 md:max-h-12 max-w-full object-contain"
              />
            </div>
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-md p-4 sm:p-6 md:p-8 flex items-center justify-center h-24 sm:h-28 md:h-32">
              <img
                src="/images/about/feature-6.webp"
                alt="Dainik Jagran"
                className="max-h-8 sm:max-h-10 md:max-h-12 max-w-full object-contain"
              />
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
              <div className="absolute top-4 right-4 w-20 h-20 sm:w-24 sm:h-24">
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
                  Radical Education Welcomes Students From All Over India
                  Seeking Guidance On Management, Engineering, And Medical
                  Streams Of Study In India And Across The World. We Understand
                  How Complex The Research Process May Be For You, Irrespective
                  Of Which Phase You Are In. We Aim To Ensure That All Students
                  In India Possess The Knowledge To Make The Right Decision
                  About Their Lives.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden border border-gray-100 p-6 sm:p-8 relative">
              <div className="absolute top-4 right-4 w-20 h-20 sm:w-24 sm:h-24">
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
                  Imagine An India Where Every Single Child Succeeds. They
                  Exhibit The Wisdom, Resources, And Facilities To Wholly
                  Navigate Their Academic Endeavors And Across The World. We
                  Envision The Benefits Of Advanced Technology, Which Helps Them
                  Make Informed Choices About Their Lives. This Unlocks Their
                  True Potential So That They Can Achieve Something Substantial
                  For Themselves As Well As For The Nation. We Envision A
                  Learning Culture With Adaptable, Empowered Youngsters Who
                  Ensure That Their Aspirations Take Flight.
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
            {/* Title */}
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
              Who We Are
            </h2>

            {/* Image - Mobile: positioned at top with left/right sides visible */}
            <div className="relative mb-8 -mx-4 px-4">
              <img
                src="/images/about/wave.webp"
                alt="Who We Are"
                className="w-full h-[200px] sm:h-[250px] object-cover object-center rounded-xl"
              />
            </div>

            {/* Content Below Image - Mobile */}
            <div>
              <p className="text-sm sm:text-base leading-relaxed mb-6 opacity-90">
                Radical Education Is Your Go-To Option For Understanding The
                Complexities Associated With Higher Education. On Our Website,
                You Can Find In-Depth Information Regarding Top Universities
                Around The World, Making The Process Easier For You.
              </p>

              <h3 className="text-lg sm:text-xl font-bold mb-4">
                Our Expertise:
              </h3>
              <ul className="space-y-3 text-sm sm:text-base">
                <li className="flex items-start">
                  <span className="text-[#00D9A3] mr-2 text-lg">•</span>
                  <span>
                    Smooth Admissions: Relieve The Stress Of Difficult
                    Applications With Our Specialized Help.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00D9A3] mr-2 text-lg">•</span>
                  <span>
                    Top-Notch Education Advisors: Take Advantage Of The Best
                    Education Consultants In Delhi Who Specialize In
                    Engineering, Management, And Medical Streams.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00D9A3] mr-2 text-lg">•</span>
                  <span>
                    Understanding At Every Step: Gain Clear Explanations
                    Regarding Details Of The Courses, The Process Of Enrolling,
                    And Straightforward Tuition Fees.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Desktop Layout - Original grid */}
          <div className="hidden md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Side - Title with Image */}
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-center">
                Who We Are
              </h2>
              <img
                src="/images/about/wave.webp"
                alt="Who We Are"
                className="w-full h-[200px] sm:h-[250px] object-cover rounded-xl sm:rounded-2xl"
              />
            </div>

            {/* Right Side - Content */}
            <div>
              <p className="text-sm sm:text-base leading-relaxed mb-6 md:mb-8 opacity-90">
                Radical Education Is Your Go-To Option For Understanding The
                Complexities Associated With Higher Education. On Our Website,
                You Can Find In-Depth Information Regarding Top Universities
                Around The World, Making The Process Easier For You.
              </p>

              <h3 className="text-lg sm:text-xl font-bold mb-3 md:mb-4">
                Our Expertise:
              </h3>
              <ul className="space-y-3 text-sm sm:text-base">
                <li className="flex items-start">
                  <span className="text-[#00D9A3] mr-2 text-lg">•</span>
                  <span>
                    Smooth Admissions: Relieve The Stress Of Difficult
                    Applications With Our Specialized Help.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00D9A3] mr-2 text-lg">•</span>
                  <span>
                    Top-Notch Education Advisors: Take Advantage Of The Best
                    Education Consultants In Delhi Who Specialize In
                    Engineering, Management, And Medical Streams.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00D9A3] mr-2 text-lg">•</span>
                  <span>
                    Understanding At Every Step: Gain Clear Explanations
                    Regarding Details Of The Courses, The Process Of Enrolling,
                    And Straightforward Tuition Fees.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
