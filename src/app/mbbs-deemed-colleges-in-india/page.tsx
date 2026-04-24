"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function MBBSDeemedCollegesPage() {
  useEffect(() => {
    document.body.classList.add("reveal-footer-page");
    return () => {
      document.body.classList.remove("reveal-footer-page");
    };
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    course: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [consent, setConsent] = useState(false);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      window.location.href = `/blogs?search=${encodeURIComponent(searchTerm.trim())}`;
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    if (!consent) {
      setSubmitMessage({
        type: "error",
        text: "Please accept the consent to proceed",
      });
      return;
    }

    try {
      const response = await fetch("/api/deemed-college-enquiry/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitMessage({ type: "success", text: data.message });
        setFormData({
          name: "",
          email: "",
          mobile: "",
          course: "",
        });
        setTimeout(() => setSubmitMessage(null), 3000);
      } else {
        setSubmitMessage({ type: "error", text: data.message });
      }
    } catch (error) {
      setSubmitMessage({
        type: "error",
        text: "Failed to submit. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative z-10 bg-white reveal-footer-page pb-16">
      <FloatingWhatsApp />
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 pt-4 lg:pt-21 min-w-0">
          <span className="text-xs sm:text-sm md:text-base text-emerald-500 font-bold">
            Educational
          </span>

          <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-gray-900 mt-2 leading-tight break-words">
            MBBS Deemed Colleges in India 2026–2027: Fees, Cutoff & Admission
          </h1>
          {/* 
                    <p className="text-xs sm:text-sm text-gray-500 mt-1">
                        Danish Farzan • 19 Jan 2022
                    </p> */}

          {/* IMAGE */}
          <div className="mt-4 sm:mt-5 md:mt-6">
            <Image
              src="/images/deemed/bg.webp"
              alt="MBBS Deemed Colleges in India"
              width={1200}
              height={600}
              className="w-full h-[160px] sm:h-[220px] md:h-[280px] lg:h-[320px] xl:h-[350px] object-cover rounded-lg sm:rounded-xl min-h-0"
              priority
            />
          </div>

          {/* CONTENT */}
          <div className="mt-4 sm:mt-5 md:mt-6 text-gray-700 leading-relaxed text-xs sm:text-sm md:text-base space-y-3 sm:space-y-4 md:space-y-5 min-w-0">
            {/* Paragraphs with watermark background */}
            <div className="relative rounded-lg overflow-hidden">
              {/* Watermark background image */}
              <div
                className="absolute inset-0 bg-no-repeat bg-center pointer-events-none opacity-30 sm:opacity-40 md:opacity-50"
                style={{
                  backgroundImage: "url('/images/deemed/Radical-Logo.webp')",
                  backgroundSize: "clamp(120px, 18vw, 400px)",
                  zIndex: 0,
                }}
              ></div>

              {/* Content with relative positioning to appear above watermark */}
              <div className="relative font-normal z-10 space-y-3 sm:space-y-4">
                <p>
                  MBBS in India is considered the ultimate dream of many
                  candidates aspiring to be doctors. Government colleges are
                  preferable as they provide education at an affordable price,
                  although private or deemed medical colleges offer the best
                  facilities, well-equipped hospitals, and exposure to the
                  entire world. The top medical schools in India are Kasturba
                  Medical College, which charges about 17 to 20 lakhs annually,
                  Sri Ramachandra Institute of Higher Education and Research,
                  charging 22 to 25 lakhs each year, and DY Patil Medical
                  College, which costs around 25 to 30 lakhs per annum. These
                  institutions provide excellent educational and infrastructural
                  facilities.
                </p>
                <p>
                  The best part is that, in addition to offering MBBS, the top
                  medical schools in India also provide courses for higher
                  studies, including MD and MS in subjects like General
                  Medicine, Surgery, Pediatrics, Radiology, Cardiology, and
                  Neurology. If you are interested in getting admission to one
                  of the medical colleges for the upcoming academic year
                  2025–2026, then you need to know the fee structure and cut-off
                  over the last few years.
                </p>
              </div>
            </div>

            {/* WhatsApp Banner */}
            <Image
              src="/images/deemed/banner-mbbs.webp"
              alt="NEET 2025 Latest Updates"
              width={800}
              height={200}
              className="w-full h-auto object-contain my-4 sm:my-5 md:my-6 max-w-full"
            />

            <h2 className="text-base sm:text-lg md:text-xl font-medium text-gray-800 mb-3 sm:mb-4">
              NEET Exam in India: Your Gateway to a Bright Medical Career
            </h2>

            <p className="text-gray-700 font-normal text-xs sm:text-sm md:text-base mb-4 sm:mb-5 md:mb-6 leading-relaxed">
              The NEET is the primary entrance examination in India for pursuing
              courses like MBBS, BDS, and more. The exam is conducted by the NTA
              and is essential for getting admitted into government, private, or
              other recognized medical institutions in India. Thousands of
              candidates give this exam annually, and a good score in this exam
              increases their chances of admission to the best medical
              universities, where they can pursue quality medical education.
              This will help the admission process become more transparent and
              merit-based, thus paving the way for their successful careers in
              medicine.
            </p>

            <Link
              href="https://www.whatsapp.com/channel/0029Vajjreq0G0Xmr5ILp81P"
              target="_blank"
              className="block w-full hover:opacity-90 transition-opacity"
            >
              <Image
                src="/images/deemed/whatsapp-banner.jpg"
                alt="MBBS Deemed Colleges"
                width={800}
                height={200}
                className="w-full h-auto object-contain my-4 sm:my-5 md:my-6 max-w-full"
              />
            </Link>

            <h2 className="text-base sm:text-lg md:text-xl font-semibold text-[#287FC4] mt-5 sm:mt-6 md:mt-8 mb-3 sm:mb-4">
              Clinical Exposure and Internship Opportunities at Deemed Colleges
            </h2>

            <p className="text-gray-700 font-normal text-xs sm:text-sm md:text-base mb-4 sm:mb-5 md:mb-6 leading-relaxed">
              Clinical and internship training play a crucial role in an MBBS
              course in deemed universities. The majority of such institutions
              possess hospitals providing treatments in various fields of
              medical sciences. From the very beginning, students interact with
              patients, gradually learning how to react and deal with real-life
              situations. At each step of the study process, they are assigned
              to different departments of hospitals, including medicine,
              surgery, pediatrics, gynecology, etc., and work on treating the
              patients directly.
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-2 text-gray-700 font-normal text-xs sm:text-sm md:text-base">
              <li>
                <p>
                  Thus, the MBBS course in India includes CRRI internship
                  training for one year.
                </p>
              </li>
              <li>
                <p>
                  During this period of time, students under the supervision of
                  senior practitioners are taking care of patients.
                </p>
              </li>
              <li>
                <p>
                  It enables students to acquire skills of diagnosing health
                  issues, gain experience in dealing with patients, and improve
                  their diagnostic skills. Otherwise, students will not be able
                  to apply for registration as a doctor in India.
                </p>
              </li>
            </ul>

            {/* Private Medical Colleges Table */}
            <div className="relative overflow-x-auto -mx-1 sm:mx-0 max-w-full rounded-lg border border-gray-200">
              {/* Watermark background image */}
              <div
                className="absolute inset-0 bg-no-repeat bg-center pointer-events-none opacity-20 sm:opacity-30 md:opacity-40 lg:opacity-50"
                style={{
                  backgroundImage: "url('/images/deemed/Radical-Logo.webp')",
                  backgroundSize: "clamp(120px, 18vw, 400px)",
                  zIndex: 0,
                }}
              ></div>

              {/* Table with relative positioning to appear above watermark */}
              <div className="relative z-10 min-w-[320px] sm:min-w-0">
                <table className="w-full border-collapse border border-gray-300 text-[10px] sm:text-xs md:text-sm table-fixed sm:table-auto">
                  <thead>
                    <tr className="bg-[#D4ECFF]">
                      <th className="border border-gray-300 font-semibold px-1.5 sm:px-2 md:px-3 lg:px-4 py-1.5 sm:py-2 text-left">
                        S.NO
                      </th>
                      <th className="border border-gray-300 font-semibold px-1.5 sm:px-2 md:px-3 lg:px-4 py-1.5 sm:py-2 text-left">
                        NAME of the College
                      </th>
                      <th className="border border-gray-300 font-semibold px-1.5 sm:px-2 md:px-3 lg:px-4 py-1.5 sm:py-2 text-left">
                        <div className="flex items-center gap-1">
                          <svg
                            width="12"
                            height="12"
                            className="sm:w-4 sm:h-4 flex-shrink-0"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                              fill="black"
                            />
                          </svg>
                          <span className="hidden sm:inline">Location</span>
                          <span className="sm:hidden">Loc.</span>
                        </div>
                      </th>
                      <th className="border border-gray-300 font-semibold px-1.5 sm:px-2 md:px-3 lg:px-4 py-1.5 sm:py-2 text-left">
                        <span className="hidden sm:inline">
                          Detailed Overview
                        </span>
                        <span className="sm:hidden">Details</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {[
                      {
                        name: "Kasturba Medical College",
                        location: "Manipal, Karnataka",
                        logo: "/images/deemed/logos/01.webp",
                        url: "https://www.radicaleducation.in/kasturba-medical-college-manipal-2026-2027",
                      },
                      {
                        name: "Kasturba Medical College",
                        location: "Mangalore, Karnataka",
                        logo: "/images/deemed/logos/02.webp",
                        url: "https://www.radicaleducation.in/kasturba-medical-college-kmc-mangalore-2026-27",
                      },
                      {
                        name: "Sri Ramachandra Institute of Higher Education and Research",
                        location: "Chennai, Tamil Nadu",
                        logo: "/images/deemed/logos/03.webp",
                        url: "https://www.radicaleducation.in/sri-ramachandra-medical-college-chennai",
                      },
                      {
                        name: "JSS Medical College",
                        location: "Mysuru, Karnataka",
                        logo: "/images/deemed/logos/04.webp",
                        url: "https://www.radicaleducation.in/jss-medical-college-mysore-karnataka-2026-2027",
                      },
                      {
                        name: "Amrita Institute of Medical Sciences",
                        location: "Kochi, Kerala",
                        logo: "/images/deemed/logos/05.webp",
                        url: "https://www.radicaleducation.in/amrita-school-of-medicine-elamkara-kochi",
                      },
                      {
                        name: "Jawaharlal Nehru Medical College",
                        location: "Belagavi, Karnataka",
                        logo: "/images/deemed/logos/06.webp",
                        url: "https://www.radicaleducation.in/jawaharlal-nehru-medical-college-2026-27",
                      },
                      {
                        name: "Kalinga Institute of Medical Sciences",
                        location: "Bhubaneswar, Odisha",
                        logo: "/images/deemed/logos/07.webp",
                        url: "https://www.radicaleducation.in/kalinga-institute-of-medical-sciences-kims",
                      },
                      {
                        name: "Dr. D. Y. Patil Medical College",
                        location: "Kolhapur, Maharashtra",
                        logo: "/images/deemed/logos/08.webp",
                        url: "https://www.radicaleducation.in/dr-d-y-patil-medical-college-kolhapur",
                      },
                      {
                        name: "Bharati Vidyapeeth Medical College",
                        location: "Pune, Maharashtra",
                        logo: "/images/deemed/logos/09.webp",
                        url: "https://www.radicaleducation.in/bharati-vidyapeeth-university-mediclal-college",
                      },
                      {
                        name: "SBKS Medical Institute and Research Centre",
                        location: "Vadodara, Gujarat",
                        logo: "/images/deemed/logos/01.webp",
                        url: "https://www.radicaleducation.in/sbks-medical-instt-research-centre-vadodra",
                      },
                    ].map((college, index) => (
                      <tr key={index} className="hover:bg-white-50">
                        <td className="border border-gray-300 font-normal px-2 sm:px-3 lg:px-4 py-2">
                          {index + 1}
                        </td>
                        <td className="border border-gray-300 font-normal px-1.5 sm:px-2 md:px-3 lg:px-4 py-1.5 sm:py-2">
                          <div className="flex items-center gap-1 sm:gap-2 min-w-0">
                            <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full overflow-hidden flex-shrink-0">
                              <Image
                                src={college.logo}
                                alt={`${college.name} logo`}
                                width={32}
                                height={32}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <span className="text-[10px] sm:text-xs md:text-sm leading-tight truncate">
                              {college.name}
                            </span>
                          </div>
                        </td>
                        <td className="border border-gray-300 font-normal px-1.5 sm:px-2 md:px-3 lg:px-4 py-1.5 sm:py-2 whitespace-normal break-words sm:whitespace-nowrap">
                          <span className="block leading-tight">
                            {college.location}
                          </span>
                        </td>
                        <td className="border border-gray-300 font-semibold px-1.5 sm:px-2 md:px-3 lg:px-4 py-1.5 sm:py-2 text-center sm:text-left">
                          <Link
                            href={college.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-full justify-center text-blue-600 hover:underline text-[10px] sm:text-xs md:text-sm whitespace-nowrap sm:justify-start"
                          >
                            <span className="hidden sm:inline">Click Here</span>
                            <span className="sm:hidden">View</span>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="mt-5 sm:mt-6 md:mt-8 mb-4 sm:mb-6">
              <h2 className="text-base sm:text-lg md:text-xl font-semibold text-[#287FC4] mb-3 sm:mb-4">
                How to choose the right Deemed Medical College
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 font-normal leading-relaxed mb-4 sm:mb-6">
                Choosing the appropriate medical college for pursuing an
                undergraduate medical programme is an important step that
                determines how effectively you acquire knowledge, your practical
                learning through interaction with patients, and opportunities
                for future employment. Do not rely on ranking or the reputation
                of the institution while making this choice. Rather, take
                several other considerations into account. For instance, ensure
                that the selected institution is accredited by the National
                Medical Commission, as only such an institution can offer you
                accreditation for your qualification within the country. You
                should also pay attention to the affiliated hospital and the
                number of patients it accommodates, as this ensures greater
                practical exposure.
              </p>
            </div>
            {/* Government Colleges Table */}
            <div className="overflow-x-auto -mx-1 sm:mx-0 max-w-full rounded-lg border border-gray-200">
              <table className="w-full border-collapse border border-gray-300 text-[10px] sm:text-xs md:text-sm min-w-[320px] sm:min-w-0">
                <thead>
                  <tr className="bg-[#D4ECFF]">
                    <th className="border border-gray-300 px-1.5 sm:px-2 md:px-3 lg:px-4 py-1.5 sm:py-2 text-left font-semibold">
                      Factor
                    </th>
                    <th className="border border-gray-300 px-1.5 sm:px-2 md:px-3 lg:px-4 py-1.5 sm:py-2 text-left font-semibold">
                      What to Check
                    </th>
                    <th className="border border-gray-300 px-1.5 sm:px-2 md:px-3 lg:px-4 py-1.5 sm:py-2 text-left font-semibold">
                      Why It Matters
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {[
                    {
                      factor: "Recognition",
                      check: "Approved by the National Medical Commission",
                      why: "Ensures your MBBS degree is valid and recognized",
                    },
                    {
                      factor: "Admission Process",
                      check: "Through the Medical Counselling Committee",
                      why: "Confirms transparency and proper seat allocation",
                    },
                    {
                      factor: "Hospital & Patient Flow",
                      check: "Number of beds, OPD/IPD load",
                      why: "Better clinical exposure and practical learning",
                    },
                    {
                      factor: "Infrastructure",
                      check: "Labs, libraries, hostels, simulation labs",
                      why: "Enhances the overall learning environment",
                    },
                    {
                      factor: "Fee Structure",
                      check: "Tuition + hostel + miscellaneous costs",
                      why: "Helps in financial planning",
                    },
                    {
                      factor: "NEET Cutoff Trends",
                      check: "Previous years’ closing ranks",
                      why: "Helps assess admission chances",
                    },
                    {
                      factor: "Internship & Exposure",
                      check: "Hospital training, stipend",
                      why: "Important for real-world medical experience",
                    },
                  ].map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50 text-gray-700">
                      <td className="border border-gray-300 px-1.5 sm:px-2 md:px-3 lg:px-4 py-1.5 sm:py-2 font-medium">
                        {item.factor}
                      </td>
                      <td className="border border-gray-300 px-1.5 sm:px-2 md:px-3 lg:px-4 py-1.5 sm:py-2 font-medium">
                        {item.check}
                      </td>
                      <td className="border border-gray-300 px-1.5 sm:px-2 md:px-3 lg:px-4 py-1.5 sm:py-2 font-medium">
                        {item.why}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* <h3 className="text-sm sm:text-base md:text-lg font-medium text-gray-800 mb-2 sm:mb-3">
              MBBS Deemed Colleges in India: Fees, Cutoff & Admission
            </h3>

            <p className="text-xs sm:text-sm text-gray-600 font-normal mb-3 sm:mb-4">
              MBBS in India is considered the ultimate dream of many candidates
              aspiring to be doctors. Government colleges are preferable as they
              provide education at an affordable price, although private or
              deemed medical colleges offer the best facilities, well-equipped
              hospitals, and exposure to the entire world. The top medical
              schools in India are Kasturba Medical College, which charges about
              17 to 20 lakhs annually, Sri Ramachandra Institute of Higher
              Education and Research, charging 22 to 25 lakhs each year, and DY
              Patil Medical College, which costs around 25 to 30 lakhs per
              annum. These institutions provide excellent educational and
              infrastructural facilities.
            </p> */}

            {/* <div className="overflow-x-auto -mx-1 sm:mx-0 max-w-full rounded-lg border border-gray-200">
                            <table className="w-full border-collapse border border-gray-300 bg-white text-[10px] sm:text-xs md:text-sm min-w-[240px]">
                                <thead>
                                    <tr className="bg-[#D4ECFF]">
                                        <th className="border border-gray-300 px-1.5 sm:px-2 md:px-3 lg:px-4 py-1.5 sm:py-2 md:py-3 text-left font-semibold">Category</th>
                                        <th className="border border-gray-300 px-1.5 sm:px-2 md:px-3 lg:px-4 py-1.5 sm:py-2 md:py-3 text-center font-semibold">
                                            <span className="hidden sm:inline">Government Colleges Cutoff<br />(NEET Score)</span>
                                            <span className="sm:hidden">Govt. Cutoff</span>
                                        </th>
                                        <th className="border border-gray-300 px-1.5 sm:px-2 md:px-3 lg:px-4 py-1.5 sm:py-2 md:py-3 text-center font-semibold">
                                            <span className="hidden sm:inline">Private Colleges Cutoff<br />(NEET Score)</span>
                                            <span className="sm:hidden">Pvt. Cutoff</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-gray-50">
                                        <td className="border border-gray-300 px-1.5 sm:px-2 md:px-3 lg:px-4 py-1.5 sm:py-2 md:py-3 font-medium">General</td>
                                        <td className="border border-gray-300 px-1.5 sm:px-2 md:px-3 lg:px-4 py-1.5 sm:py-2 md:py-3 text-center">600+</td>
                                        <td className="border border-gray-300 px-1.5 sm:px-2 md:px-3 lg:px-4 py-1.5 sm:py-2 md:py-3 text-center">450+</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="border border-gray-300 px-1.5 sm:px-2 md:px-3 lg:px-4 py-1.5 sm:py-2 md:py-3 font-medium">OBC</td>
                                        <td className="border border-gray-300 px-1.5 sm:px-2 md:px-3 lg:px-4 py-1.5 sm:py-2 md:py-3 text-center">580+</td>
                                        <td className="border border-gray-300 px-1.5 sm:px-2 md:px-3 lg:px-4 py-1.5 sm:py-2 md:py-3 text-center">430+</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="border border-gray-300 px-1.5 sm:px-2 md:px-3 lg:px-4 py-1.5 sm:py-2 md:py-3 font-medium">SC</td>
                                        <td className="border border-gray-300 px-1.5 sm:px-2 md:px-3 lg:px-4 py-1.5 sm:py-2 md:py-3 text-center">480+</td>
                                        <td className="border border-gray-300 px-1.5 sm:px-2 md:px-3 lg:px-4 py-1.5 sm:py-2 md:py-3 text-center">350+</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="border border-gray-300 px-1.5 sm:px-2 md:px-3 lg:px-4 py-1.5 sm:py-2 md:py-3 font-medium">ST</td>
                                        <td className="border border-gray-300 px-1.5 sm:px-2 md:px-3 lg:px-4 py-1.5 sm:py-2 md:py-3 text-center">450+</td>
                                        <td className="border border-gray-300 px-1.5 sm:px-2 md:px-3 lg:px-4 py-1.5 sm:py-2 md:py-3 text-center">320+</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="border border-gray-300 px-1.5 sm:px-2 md:px-3 lg:px-4 py-1.5 sm:py-2 md:py-3 font-medium">EWS</td>
                                        <td className="border border-gray-300 px-1.5 sm:px-2 md:px-3 lg:px-4 py-1.5 sm:py-2 md:py-3 text-center">590+</td>
                                        <td className="border border-gray-300 px-1.5 sm:px-2 md:px-3 lg:px-4 py-1.5 sm:py-2 md:py-3 text-center">440+</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div> */}

            {/* <p className="text-xs sm:text-sm text-gray-600 font-normal mt-3 sm:mt-4">
              The best part is that, in addition to offering MBBS, the top
              medical schools in India also provide courses for higher studies,
              including MD and MS in subjects like General Medicine, Surgery,
              Pediatrics, Radiology, Cardiology, and Neurology. If you are
              interested in getting admission to one of the medical colleges for
              the upcoming academic year, then you need to know the fee
              structure and cut-off over the last few years.
            </p> */}

            <h3 className="text-sm sm:text-base md:text-lg font-medium text-gray-800 mt-4 sm:mt-5 md:mt-6 mb-2 sm:mb-3">
              Benefits of Deemed Universities for NEET Aspirants
            </h3>

            <p className="text-gray-700 font-normal text-xs sm:text-sm md:text-base leading-relaxed">
              Nowadays, deemed universities have proved to be one of the most
              sought-after options by students who clear the NEET UG
              examination, particularly when it comes to gaining good-quality
              education and admission into universities. Deemed universities
              offer quality education, up-to-date infrastructure, and career
              prospects.
            </p>

            <ul className="list-disc pl-5 mt-3 space-y-2 text-gray-700 font-normal text-xs sm:text-sm md:text-base">
              <li>Higher chances of admission</li>
              <li>No state domicile restrictions</li>
              <li>Advanced infrastructure & facilities</li>
              <li>Better clinical exposure</li>
              <li>Wide PG & specialization options</li>
              <li>Flexible cutoff range</li>
              <li>Global exposure opportunities</li>
              <li>
                Quality education under National Medical Commission guidelines
              </li>
              <li>Comfortable campus & hostel facilities</li>
              <li>
                Centralized counselling via the Medical Counselling Committee
              </li>
            </ul>
          </div>

          {/* FAQ's */}
          <div className="mt-5 sm:mt-6 md:mt-8">
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 md:mb-6">
              FAQ'S
            </h2>
            <FAQSection />
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="pt-4 lg:pt-21 lg:sticky lg:top-[75px] lg:self-start lg:min-h-screen">
          <div
            className="space-y-4 sm:space-y-5 md:space-y-6 bg-[#D4ECFF] rounded-lg sm:rounded-xl p-4 md:p-5 lg:p-6 animate-fadeIn"
            style={{ animationDelay: "0.2s", animationFillMode: "both" }}
          >
            {/* SEARCH */}
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Search any blog from here"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                className="w-full h-9 sm:h-10 rounded-full bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#787878] font-normal px-4 sm:px-5 text-xs sm:text-sm !placeholder-[#B3B3B3]/50"
              />
              <button
                onClick={handleSearch}
                aria-label="Search"
                title="Search"
                className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#005A8B] hover:bg-blue-700 text-white h-7 w-7 sm:h-8 sm:w-8 rounded-full transition-colors duration-200 flex items-center justify-center cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 sm:h-5 sm:w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>

            {/* GET IN TOUCH */}
            <div>
              <h3 className="text-xl md:text-2xl text-center text-[#0B2E3C] font-semibold mb-6">
                Request a free callback
              </h3>

              {submitMessage && (
                <div
                  className={`mb-4 p-3 rounded-lg text-sm ${submitMessage.type === "success"
                    ? "bg-green-100 text-green-700 border border-green-300"
                    : "bg-red-100 text-red-700 border border-red-300"
                    }`}
                >
                  {submitMessage.text}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-3">
                <div className="relative w-full">
                  <input
                    type="text"
                    name="name"
                    aria-label="name"
                    placeholder=" "
                    value={formData.name}
                    onChange={handleInputChange}
                    className="peer bg-white w-full px-3 sm:px-4 py-2.5 sm:py-2 rounded-[6px] outline-none text-xs sm:text-sm text-gray-900 min-h-[50px] touch-manipulation"
                    required
                    disabled={isSubmitting}
                  />
                  <span className="font-normal absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-xs sm:text-sm text-[#78787899] pointer-events-none transition-opacity duration-200 peer-focus:opacity-0 peer-not-placeholder-shown:opacity-0">
                    Name <span className="text-red-500">*</span>
                  </span>
                </div>
                <div className="relative w-full">
                  <input
                    type="email"
                    name="email"
                    aria-label="email"
                    placeholder=" "
                    value={formData.email}
                    onChange={handleInputChange}
                    className="peer bg-white w-full px-3 sm:px-4 py-2.5 sm:py-2 rounded-[6px] outline-none text-xs sm:text-sm text-gray-900 min-h-[50px] touch-manipulation"
                    required
                    disabled={isSubmitting}
                  />
                  <span className="font-normal absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-xs sm:text-sm text-[#78787899] pointer-events-none transition-opacity duration-200 peer-focus:opacity-0 peer-not-placeholder-shown:opacity-0">
                    Email Address <span className="text-red-500">*</span>
                  </span>
                </div>
                <div className="relative w-full">
                  <input
                    type="tel"
                    name="mobile"
                    placeholder=" "
                    value={formData.mobile}
                    onChange={handleInputChange}
                    className="peer bg-white w-full px-3 sm:px-4 py-2.5 sm:py-2 rounded-[6px] outline-none text-xs sm:text-sm text-gray-900 min-h-[50px] touch-manipulation"
                    required
                    pattern="[0-9]{10}"
                    title="Please enter a 10-digit mobile number"
                    disabled={isSubmitting}
                  />
                  <span className="font-normal absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-xs sm:text-sm text-[#78787899] pointer-events-none transition-opacity duration-200 peer-focus:opacity-0 peer-not-placeholder-shown:opacity-0">
                    Mobile Number <span className="text-red-500">*</span>
                  </span>
                </div>
                <div className="relative w-full">
                  <select
                    name="course"
                    aria-label="Select Course"
                    value={formData.course}
                    onChange={handleInputChange}
                    className="peer bg-white w-full px-3 sm:px-4 py-2.5 sm:py-2 rounded-[6px] outline-none text-xs sm:text-sm text-gray-900 font-normal min-h-[50px] touch-manipulation appearance-none"
                    required
                    disabled={isSubmitting}
                  >
                    <option value="" disabled hidden></option>
                    <option value="MBBS">MBBS</option>
                    <option value="BDS">BDS</option>
                    <option value="BAMS">BAMS</option>
                    <option value="BHMS">BHMS</option>
                    <option value="MD">MD</option>
                    <option value="MS">MS</option>
                    {/* <option value="Other">Other</option> */}
                  </select>
                  <span
                    className={`font-normal absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-xs sm:text-sm text-[#78787899] pointer-events-none transition-opacity duration-200 ${formData.course ? "opacity-0" : "opacity-100"}`}
                  >
                    Select Course <span className="text-red-500">*</span>
                  </span>
                  <div className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg
                      className="h-4 w-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>

                <div className="flex items-start gap-3 mt-2">
                  {/* checkbox */}
                  <div className="relative mt-1 min-w-5 h-5">
                    <input
                      type="checkbox"
                      id="mbbs-consent"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      required
                      className="peer w-4 h-4 appearance-none border border-gray-400 rounded-[5px] bg-transparent cursor-pointer 
      checked:bg-[#00B4B4] checked:border-[#00B4B4]"
                    />

                    {/* tick */}
                    <svg
                      className="absolute top-[2px] left-[2px] w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>

                  {/* label */}
                  <label
                    htmlFor="mbbs-consent"
                    className="text-[11px] text-[#787878] font-medium leading-[1.6] cursor-pointer"
                  >
                    I Consent To Receiving Calls, WhatsApp, Email And Google RCS
                    From Radical Education To Assist With This Enquiry.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !consent}
                  className={`cursor-pointer w-full mt-2 text-white py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base min-h-[50px] transition-all

                                ${!consent
                      ? "bg-[#ccc] text-white !cursor-not-allowed"
                      : "bg-gradient-to-r from-[#63CDB4] to-[#0077BF]"
                    }
                    `}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </form>
            </div>

            {/* RELATED */}
            <div>
              <h3 className="text-base sm:text-lg font-bold text-[#287FC4] mb-3 sm:mb-4">
                Related
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {[
                  {
                    title: "Top Deemed Medical Colleges in India 2025",
                    date: "20 Jan 2024",
                    href: "/neet-ug-india-admission",
                  },
                  {
                    title: "MBBS Admission Process & Counseling Guide",
                    date: "15 Feb 2024",
                    href: "/mbbs-in-india",
                  },
                  {
                    title: "NEET UG 2025: Syllabus and Exam Pattern",
                    date: "10 Mar 2024",
                    href: "/blogs",
                  },
                ].map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="block border-b border-[#ABABAB] pb-2 sm:pb-3 last:border-b-0 cursor-pointer group transition-colors duration-300"
                  >
                    <h4 className="font-semibold text-gray-800 text-xs sm:text-sm md:text-base leading-tight group-hover:text-[#287FC4] transition-colors">
                      {item.title}
                    </h4>
                    {/* <p className="text-xs text-gray-500 mt-1">
                                            Danish Farzan • {item.date}
                                        </p> */}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// FAQ Component with animations
function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "Can I Get Admission Without Clearing NEET UG?",
      answer:
        "No, NEET UG is mandatory for admission to MBBS courses in India. All medical colleges, whether government or private, require a valid NEET UG score for admission. This is as per the Medical Council of India (MCI) guidelines.",
    },
    {
      question:
        "What is the minimum NEET score required for deemed universities?",
      answer:
        "The minimum NEET score varies by category and college. Generally, for deemed universities, General category students need around 450+ marks, while reserved categories may have lower cutoffs. The exact cutoff depends on the specific college and competition.",
    },
    {
      question: "Are deemed medical colleges recognized by MCI/NMC?",
      answer:
        "Yes, all deemed medical colleges offering MBBS courses are recognized by the National Medical Commission (NMC), formerly known as MCI. However, it's important to verify the recognition status before taking admission.",
    },
    {
      question: "What is the fee structure for deemed medical colleges?",
      answer:
        "The fee structure for deemed medical colleges varies significantly, ranging from ₹15 lakhs to ₹1 crore for the complete MBBS course. The fees depend on the college's reputation, location, and facilities provided.",
    },
    {
      question: "Is there any management quota in deemed universities?",
      answer:
        "Yes, most deemed universities have a management quota (usually 15% of total seats) in addition to the merit-based seats. Management quota seats typically have higher fees and may have slightly relaxed admission criteria.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="space-y-3 sm:space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full p-3 sm:p-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
          >
            <div className="flex items-center">
              <span
                className={`w-6 h-6 flex items-center justify-center text-lg font-bold text-blue-600 transition-transform duration-300 ${openFAQ === index ? "rotate-45" : ""}`}
              >
                +
              </span>
              <h3 className="font-semibold text-gray-800 text-xs sm:text-sm pl-2 sm:pl-3 leading-tight">
                {index + 1}. {faq.question}
              </h3>
            </div>
            <div
              className={`transform transition-transform duration-300 flex-shrink-0 ${openFAQ === index ? "rotate-180" : ""}`}
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </button>

          <div
            className={`transition-all duration-300 ease-in-out ${openFAQ === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              } overflow-hidden`}
          >
            <div className="px-3 sm:px-4 pb-3 sm:pb-4 border-t border-gray-100">
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed pt-2 sm:pt-3 animate-fadeIn">
                {faq.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
