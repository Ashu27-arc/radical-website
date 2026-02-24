"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface JobDetails {
  title: string;
  experience: string;
  location: string;
  employmentType: string;
  overview: string;
  responsibilities: string[];
  description: string;
}

const jobsData: JobDetails[] = [
  {
    title: "PROJECT MANAGER",
    experience: "2-4 years",
    location: "On-Site",
    employmentType: "Full-Time",
    description: "Ancient Indian Medicine System Focusing On Natural Healing Through Herbs, Lifestyle, And Holistic Treatments For Complete Wellness.",
    overview: "we are looking for a proactive and detail-oriented project manager with 2–4 years of experience to lead cross-functional teams, manage project timelines, and ensure successful delivery of projects. the ideal candidate should be skilled in planning, execution, stakeholder communication, and risk management.",
    responsibilities: [
      "plan, execute, and deliver projects within defined scope, timeline, and budget",
      "coordinate with internal teams (design, development, marketing, qa, etc.)",
      "define project goals, milestones, and deliverables",
      "track project progress using tools like jira, trello, asana, or clickup",
      "identify risks and implement mitigation strategies",
      "conduct regular status meetings and provide progress reports"
    ]
  },
  {
    title: "SENIOR DEVELOPER",
    experience: "3-5 years",
    location: "On-Site",
    employmentType: "Full-Time",
    description: "Join our development team to build scalable applications using modern technologies and best practices.",
    overview: "we are seeking an experienced senior developer with 3–5 years of hands-on experience in full-stack development. the ideal candidate should have strong problem-solving skills and expertise in modern web technologies.",
    responsibilities: [
      "develop and maintain web applications using React, Node.js, and TypeScript",
      "write clean, maintainable, and well-documented code",
      "collaborate with designers and product managers",
      "mentor junior developers and conduct code reviews",
      "optimize application performance and scalability",
      "participate in architectural decisions and technical planning"
    ]
  },
  {
    title: "UI/UX DESIGNER",
    experience: "2-3 years",
    location: "On-Site",
    employmentType: "Full-Time",
    description: "Create beautiful and intuitive user experiences that delight our customers and drive business growth.",
    overview: "we are looking for a creative UI/UX designer with 2–3 years of experience to design user-centered digital experiences. the ideal candidate should have a strong portfolio and expertise in design tools.",
    responsibilities: [
      "design user interfaces for web and mobile applications",
      "create wireframes, prototypes, and high-fidelity mockups",
      "conduct user research and usability testing",
      "collaborate with developers to ensure design implementation",
      "maintain design systems and component libraries",
      "stay updated with latest design trends and best practices"
    ]
  }
];

export default function CareersPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<JobDetails | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    opening: ''
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const workEnvironmentData = [
    {
      image: "/images/careers/work-06.webp",
      title: "supportive & helping culture",
      dotColor: "bg-[#005A8B]",
      titleColor: "text-[#10B65C]"
    },
    {
      image: "/images/careers/work-07.webp",
      title: "learning-driven & environment",
      dotColor: "bg-[#005A8B]",
      titleColor: "text-[#005A8B]"
    },
    {
      image: "/images/careers/work-03.webp",
      title: "ethical & responsible work practices",
      dotColor: "bg-[#005A8B]",
      titleColor: "text-[#00CFB2]"
    },
    {
      image: "/images/careers/work-04.webp",
      title: "growth-oriented & inclusive space",
      dotColor: "bg-[#005A8B]",
      titleColor: "text-[#F48126]"
    },
    {
      image: "/images/careers/work-05.webp",
      title: "supportive & helping culture",
      dotColor: "bg-[#005A8B]",
      titleColor: "text-[#9B59B6]"
    }
  ];

  // Check if mobile and setup auto-slide
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-slide effect - only for mobile
  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % workEnvironmentData.length);
      }, 3000); // Change slide every 3 seconds

      return () => clearInterval(interval);
    }
  }, [isMobile, workEnvironmentData.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const openModal = (job: JobDetails) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const scrollToResumeSection = () => {
    const resumeSection = document.getElementById('submit-resume-section');
    if (resumeSection) {
      resumeSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      closeModal();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('firstName', formData.firstName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('opening', formData.opening);
      if (resumeFile) {
        formDataToSend.append('resume', resumeFile);
      }

      const response = await fetch('/api/submit-resume/', {
        method: 'POST',
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        setShowSuccessPopup(true);
        setFormData({ firstName: '', email: '', opening: '' });
        setResumeFile(null);
        // Reset file input
        const fileInput = document.getElementById('resume-upload') as HTMLInputElement;
        if (fileInput) fileInput.value = '';
      } else {
        setSubmitMessage({ type: 'error', text: data.message });
      }
    } catch (error) {
      setSubmitMessage({ type: 'error', text: 'Something went wrong. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-16 md:py-34">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/careers/hero-bg.webp"
            alt="Career Hero Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-6 pt-8 md:pt-15">
            <h1 className="text-3xl md:text-5xl font-bold text-black mb-4">
              JOIN US
            </h1>
            <p className="text-black max-w-3xl mx-auto text-sm md:text-base px-4">
              I Designed A Web UI For An AI-Powered HR Co-Pilot That Helps HRs<br className="hidden md:block" />
              Generate Job Descriptions And Screen Resumes
            </p>
          </div>
          <div className="flex justify-center mt-8 -mb-16 md:-mb-35">
            <Image
              src="/images/careers/cuate.webp"
              alt="Work Team"
              width={700}
              height={350}
              className="w-full max-w-xs md:max-w-md"
            />
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-12 md:py-20 bg-white relative overflow-hidden">
        {/* Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <img
            src="/logo.webp"
            alt="Radical"
            className="w-[300px] md:w-[500px] lg:w-[400px] h-auto select-none opacity-10 transform rotate-[-5deg]"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-12">
            Why Work With <span className="text-[#287FC4]">Us?</span>
          </h2>
          <div className="max-w-5xl mx-auto text-gray-600 space-y-4 md:space-y-6 leading-relaxed text-sm md:text-base">
            <p>
              Invite Your Friends And Unlock Exclusive Benefits—Earn More With Every Successful Referral. Invite Your Friends And Unlock
              Exclusive Benefits—Earn More With Every Successful Referral. Invite Your Friends And Unlock Exclusive Benefits—Earn More
              With Every Successful Referral. Invite Your Friends And Unlock Exclusive Benefits—Earn More With Every Successful Referral.
            </p>
            <p>
              Invite Your Friends And Unlock Exclusive Benefits—Earn More With Every Successful Referral. Invite Your Friends And Unlock
              Exclusive Benefits—Earn More With Every Successful Referral. Invite Your Friends And Unlock Exclusive Benefits—Earn More
              With Every Successful Referral. Invite Your Friends And Unlock Exclusive Benefits—Earn More With Every Successful Referral.
            </p>
          </div>
        </div>
      </section>

      {/* Work Environment Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <p className="text-gray-500 font-bold text-xs md:text-sm text-left mb-2">About Us Radical Education</p>
          <h2 className="text-2xl md:text-4xl font-bold text-left mb-8 md:mb-12">
            Our <span className="text-[#287FC4]">Work Environment</span>
          </h2>
        </div>

        <div className="relative pb-8">
          {/* Horizontal shadow line */}
          <div className="absolute left-0 right-0 top-[280px] md:top-[328px] h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent shadow-sm"></div>

          {/* Mobile: Slide Animation with Original Layout */}
          <div className="md:hidden relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-4 min-w-max pl-4"
              style={{ transform: `translateX(-${currentSlide * 240}px)` }}
            >
              {workEnvironmentData.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="overflow-visible w-56 flex-shrink-0 relative h-[280px] flex flex-col">
                    <div className={`relative rounded-t-lg overflow-hidden ${index === 1 || index === 3 ? 'h-32 mt-6' : 'h-44'}`}>
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                    <div className="flex-1"></div>
                    {/* Dot positioned at bottom center on shadow line - fully visible */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex justify-center z-10">
                      <div className={`w-4 h-4 rounded-full ${item.dotColor} shadow-xl ring-2 ring-white`}></div>
                    </div>
                  </div>
                  {/* Title below the card and dot */}
                  <div className="pt-5 pb-4 text-center">
                    <h3 className={`text-xs font-medium ${item.titleColor} lowercase`}>
                      {item.title.includes(' & ') ? (
                        <>
                          {item.title.split(' & ')[0]} {item.title === "learning-driven & environment" ? "" : "&"}
                          <br />
                          {item.title.split(' & ')[1]}
                        </>
                      ) : (
                        item.title
                      )}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Dots - Mobile Only */}
            <div className="flex justify-center mt-6 space-x-2">
              {workEnvironmentData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${currentSlide === index ? 'bg-[#287FC4]' : 'bg-gray-300'
                    }`}
                />
              ))}
            </div>
          </div>

          {/* Desktop: Horizontal Scrolling */}
          <div className="hidden md:block overflow-x-auto pb-4 scrollbar-hide">
            <div className="flex gap-4 md:gap-6 min-w-max pl-4 lg:pl-[calc((100vw-1280px)/2+1rem)]">
              {workEnvironmentData.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="overflow-visible w-56 md:w-72 flex-shrink-0 relative h-[280px] md:h-[328px] flex flex-col">
                    <div className={`relative rounded-t-lg overflow-hidden ${index === 1 || index === 3 ? 'h-32 md:h-40 mt-6 md:mt-8' : 'h-44 md:h-56'}`}>
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                    <div className="flex-1"></div>
                    {/* Dot positioned at bottom center on shadow line - fully visible */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex justify-center z-10">
                      <div className={`w-4 h-4 md:w-5 md:h-5 rounded-full ${item.dotColor} shadow-xl ring-2 md:ring-4 ring-white`}></div>
                    </div>
                  </div>
                  {/* Title below the card and dot */}
                  <div className="pt-5 md:pt-6 pb-4 text-center">
                    <h3 className={`text-xs md:text-sm font-medium ${item.titleColor} lowercase`}>
                      {item.title.includes(' & ') ? (
                        <>
                          {item.title.split(' & ')[0]} {item.title === "learning-driven & environment" ? "" : "&"}
                          <br />
                          {item.title.split(' & ')[1]}
                        </>
                      ) : (
                        item.title
                      )}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </section>

      {/* Latest Openings Section */}
      <section className="py-8 md:py-12 bg-[#DFF1FF] px-4 md:px-10 lg:px-20">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">
            Latest <span className="text-[#287FC4]">Openings</span>
          </h2>

          {jobsData.length === 0 ? (
            // No Openings Message
            <div className="max-w-4xl mx-auto py-6 md:py-8">
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                <div className="flex-shrink-0">
                  <Image
                    src="/images/careers/cuate-1.webp"
                    alt="No Opening Yet"
                    width={300}
                    height={225}
                    className="w-full max-w-[200px] md:max-w-[300px]"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                    No Opening Yet
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed line-clamp-3">
                    I Designed A Web UI For An AI-Powered HR Co-<br />
                    Pilot That Helps HRs Generate Job Descriptions<br />
                    And Screen Resumes
                  </p>
                </div>
              </div>
            </div>
          ) : (
            // Job Cards Grid
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
              {jobsData.map((job, index) => (
                <div key={index} className="bg-white rounded-lg p-5 md:p-6 shadow-md">
                  <div className="flex justify-left mb-4">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-100 flex items-center justify-center overflow-hidden">
                      <Image
                        src="/images/careers/job-icon.webp"
                        alt="Job Icon"
                        width={56}
                        height={55}
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-gray-800 mb-2">{job.title}</h3>
                  <p className="text-red-500 text-xs md:text-sm mb-3">experience:- {job.experience}</p>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-4">
                    {job.description}
                  </p>
                  <div>
                    <button
                      onClick={() => openModal(job)}
                      className="text-green-500 text-sm md:text-base font-semibold hover:text-green-600 inline-flex items-center gap-2"
                    >
                      APPLY NOW
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Submit Resume Section */}
      <section id="submit-resume-section" className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-800">
            Submit Your <span className="text-[#287FC4]">Resume</span>
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden shadow-xl">
              {/* Left Side - Image */}
              <div className="relative h-64 md:h-96 lg:h-auto min-h-[250px] lg:min-h-[400px]">
                <Image
                  src="/images/careers/resume-image.webp"
                  alt="Resume"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Right Side - Form */}
              <div className="relative p-6 md:p-12 flex items-center overflow-hidden">
                <Image
                  src="/images/careers/resume-image.webp"
                  alt="Background"
                  fill
                  className="object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#005A8B]/80 to-[#63CDB4]/80"></div>
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5 w-full relative z-10">
                  {submitMessage && (
                    <div className={`p-3 rounded-lg text-sm ${submitMessage.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {submitMessage.text}
                    </div>
                  )}
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    required
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg bg-white border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    required
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg bg-white border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  />
                  <select
                    name="opening"
                    value={formData.opening}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg bg-white border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-500"
                  >
                    <option value="">Select Opening</option>
                    {jobsData.map((job, index) => (
                      <option key={index} value={job.title}>{job.title}</option>
                    ))}
                  </select>
                  <div className="relative">
                    <input
                      type="file"
                      className="hidden"
                      id="resume-upload"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                    />
                    <label
                      htmlFor="resume-upload"
                      className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg bg-black/15 backdrop-blur-md text-white cursor-pointer flex items-center justify-center border-2 border-dashed border-white border-opacity-50 transition-all"
                    >
                      <span>{resumeFile ? resumeFile.name : 'Upload Your Resume'}</span>
                    </label>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-br from-[#0077BF] to-[#63CDB4] hover:bg-blue-700 text-white font-semibold py-2.5 md:py-3 text-sm md:text-base rounded-lg transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          {/* Blue Background Overlay - Full Screen */}
          <div
            className="fixed inset-0 bg-[#287FC478]"
            onClick={closeModal}
          ></div>

          {/* Modal Content */}
          <div className="relative bg-white rounded-lg shadow-2xl max-w-2xl w-full overflow-hidden max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 md:top-4 md:right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Body */}
            <div className="p-5 md:p-6">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 pr-8">
                Job Title: {selectedJob?.title}
              </h2>

              <div className="space-y-1 mb-3 md:mb-4 text-gray-700 text-xs md:text-sm">
                <p><span className="font-semibold">Experience:</span> {selectedJob?.experience}</p>
                <p><span className="font-semibold">Location:</span> {selectedJob?.location}</p>
                <p><span className="font-semibold">Employment Type:</span> {selectedJob?.employmentType}</p>
              </div>

              <div className="mb-3 md:mb-4">
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">Job Overview:</h3>
                <p className="text-gray-600 leading-relaxed text-xs md:text-sm">
                  {selectedJob?.overview}
                </p>
              </div>

              <div className="mb-5 md:mb-6">
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">Key Responsibilities:</h3>
                <ul className="space-y-1 text-gray-600 text-xs md:text-sm">
                  {selectedJob?.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-left">
                <button
                  onClick={scrollToResumeSection}
                  className="bg-[#005A8B] hover:bg-[#005A8B] text-white font-semibold px-8 md:px-10 py-2 md:py-2.5 text-sm md:text-base rounded-[100px] transition-colors shadow-lg"
                >
                  Apply On Web
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Success Popup Modal */}
      {showSuccessPopup && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          {/* Blue Background Overlay - Same as Job Modal */}
          <div
            className="fixed inset-0 bg-[#287FC478]"
            onClick={() => setShowSuccessPopup(false)}
          ></div>

          {/* Popup Content - Reduced Size */}
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6 md:p-8 text-center">
            {/* Decorative Elements - Scaled Down */}
            <div className="absolute top-6 left-6 w-2 h-2 rounded-full bg-pink-500"></div>
            <div className="absolute top-8 left-12 w-1.5 h-1.5 rounded-full bg-purple-400"></div>
            <div className="absolute top-6 right-12 w-1.5 h-1.5 bg-orange-400" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}></div>
            <div className="absolute top-6 right-6 w-3 h-3 rounded-full bg-orange-500"></div>
            <div className="absolute top-12 right-3 w-1.5 h-1.5 rounded-full bg-blue-400"></div>

            <div className="absolute top-14 left-3 w-6 h-0.5 rounded-full bg-pink-400 transform -rotate-12"></div>
            <div className="absolute top-16 right-8 w-6 h-0.5 rounded-full bg-blue-500 transform rotate-12"></div>

            <div className="absolute bottom-24 left-4 w-1.5 h-1.5 rounded-full bg-blue-300"></div>
            <div className="absolute bottom-20 right-6 w-1.5 h-1.5 bg-pink-400" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}></div>
            <div className="absolute bottom-18 right-3 w-1.5 h-1.5 bg-orange-400" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}></div>
            <div className="absolute bottom-16 left-8 w-2 h-2 rounded-full bg-purple-400"></div>

            {/* Success Icon - Reduced Size */}
            <div className="relative mx-auto w-24 h-24 mb-4">
              {/* Light green background circle */}
              <div className="absolute inset-0 bg-green-100 rounded-full opacity-50"></div>
              {/* Green badge with checkmark */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-20 h-20 bg-green-500 flex items-center justify-center" style={{ clipPath: 'polygon(93.3% 50%, 89.8% 62.2%, 78.5% 74.5%, 66.3% 78%, 54.1% 74.5%, 42.8% 62.2%, 39.3% 50%, 42.8% 37.8%, 54.1% 25.5%, 66.3% 22%, 78.5% 25.5%, 89.8% 37.8%)' }}>
                  {/* White circle in center */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content - Reduced Size */}
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
              Thank You For Applying!
            </h2>
            <p className="text-gray-600 mb-1.5 text-xs md:text-sm">
              We've Received Your Application And Resume Successfully.
            </p>
            <p className="text-gray-600 mb-6 text-xs md:text-sm">
              You're One Step Closer To Your Next Opportunity
            </p>

            {/* OK Button - Reduced Size */}
            <button
              onClick={() => setShowSuccessPopup(false)}
              className="bg-[#005A8B] hover:bg-[#004A6F] text-white font-semibold px-12 py-2.5 rounded-full transition-colors shadow-lg text-sm"
            >
              Ok
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

