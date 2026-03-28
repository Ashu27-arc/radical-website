"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "primereact/button";
import {
  AutoComplete,
  AutoCompleteCompleteEvent,
} from "primereact/autocomplete";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import NewsMarquee from "@/components/NewsMarquee";
import StatsCounter from "@/components/home/StatsCounter";
import ServicesDropdown from "@/components/home/ServicesDropdown";
import { services } from "@/data/services";
import CourseCard from "@/components/home/CourseCard";
import { courses } from "@/data/courses";
import GoogleReviews from "@/components/GoogleReviews";
import TestimonialSlider from "@/components/TestimonialSlider";
import CounselorSection from "@/components/CounselorSection";
import Earth3D from "@/components/Earth3D";
import AdmissionReality from "@/components/home/AdmissionReality";
import CategoryCards from "@/components/home/CategoryCards";
import CourseSlider from "@/components/home/CourseSlider";
import ContactOptions from "@/components/home/ContactOptions";
import EverythingSlider from "@/components/home/EverythingSlider";

export default function Home() {
  const [value, setValue] = useState<string>("");
  const [items, setItems] = useState<string[]>([]);

  const collegeOptions = useMemo(
    () => [
      "AIIMS Delhi",
      "Maulana Azad Medical College",
      "King George's Medical University",
      "Grant Medical College",
      "Christian Medical College Vellore",
      "Madras Medical College",
      "Seth GS Medical College",
      "BJ Medical College Ahmedabad",
      "Government Medical College Nagpur",
      "Kasturba Medical College Manipal",
      "JIPMER Puducherry",
      "Armed Forces Medical College Pune",
    ],
    []
  );

  const search = (event: AutoCompleteCompleteEvent) => {
    const query = event.query.trim().toLowerCase();

    if (!query) {
      setItems(collegeOptions);
      return;
    }

    setItems(
      collegeOptions.filter((college) =>
        college.toLowerCase().includes(query)
      )
    );
  };

  const handleCollegeSearch = () => {
    const query = value.trim();
    if (!query) return;

    const collegePredictorUrl = `https://www.neetbhaiya.in/college-predictor?search=${encodeURIComponent(
      query
    )}`;
    window.open(collegePredictorUrl, "_blank", "noopener,noreferrer");
  };

  const videos = [
    {
      id: 1,
      title: "Successful Admission",
      youtubeId: "jfq8RbTIrtI",
    },
    {
      id: 2,
      title: "Ishika's Govt. MBBS Seat Journey",
      youtubeId: "hwYjHX5pk9w",
    },
    {
      id: 3,
      title: "Successful Admission",
      youtubeId: "CxDL_T4CWs8",
    },
  ];

  const [videoPopup, setVideoPopup] = useState<{
    id: number;
    title: string;
    youtubeId: string;
  } | null>(null);

  return (
    <>
      <section className="pt-[80px] md:pt-[150px] pb-20 md:pb-30 relative z-2 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.3)] -z-[1]"></div>
        <video
          className="w-full absolute -inset-1 -z-[2] h-[calc(100%+8px)] object-cover object-center scale-110 bg-white"
          autoPlay
          muted
          loop
          playsInline
          suppressHydrationWarning
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="container px-3 md:px-4 lg:px-40 text-center text-white">
          <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-[50px] leading-tight md:leading-[60px] md:mb-5 mb-3 fadeUp">
            Secure your Medical seat easily <br className="block" />
            <span className="font-light">with expert assistance</span>
          </h1>
          <div className="text-base sm:text-lg lg:px-16 px-3 md:mb-8 mb-6 font-semibold fadeUp">
            Get complete guidance, accurate information and expert counselling <br className="hidden lg:block" />suited to you and your dreams.
          </div>
          <div className="p-inputgroup bannersrch mx-auto w-full max-w-[580px] fadeUp">
            <span className="p-inputgroup-addon pr-0! border-r-0! bg-white! shadow-none! border-[#fff]!">
              <i className="pi pi-search"></i>
            </span>
            <AutoComplete
              placeholder="Search your college"
              className="pl-0! border-l-0! shadow-none! border-[#fff]!"
              value={value}
              suggestions={items}
              completeMethod={search}
              onChange={(e) => setValue(e.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleCollegeSearch();
                }
              }}
            />
            <Button
              label="Search"
              className="bannersrchBtn bg-[#005A8B]! border-[#005A8B]! shadow-none!"
              onClick={handleCollegeSearch}
            />
          </div>
        </div>
      </section>
      <FloatingWhatsApp />
      <NewsMarquee />
      <section className="lg:pt-24 pt-16 overflow-hidden">
        <div className="container px-3 md:px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-13/20 w-full fadeLeft text-center md:text-left">
              <div className="lg:pr-30 md:pr-10 lg:pl-6 pl-0 sm:pl-3 relative z-2">
                <h2 className="text-3xl md:text-[46px] font-light leading-tight text-gray-800 text-center mb-6 md:mb-8">
                  A complete guide for your <br />
                  <span className="text-3xl md:text-[46px] bg-gradient-to-r from-[#1ec8a5] font-bold to-[#0d8f9e] bg-clip-text text-transparent">
                    Medical Counselling needs
                  </span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-10 gap-4 sm:gap-6 w-full max-w-6xl lg:px-10 mt-4">
                  <div>
                    <a
                      href="https://www.neetbhaiya.in/rank-predictor"
                      className="group relative block cursor-pointer rounded-[20px] p-6 text-white overflow-hidden shadow-lg transition-all duration-300 
                        bg-[linear-gradient(#0271AD_0%,#149CE5_50%,#149CE5_100%)]
                        hover:scale-105 hover:shadow-2xl"
                      aria-label="Rank Predictor"
                    >
                      <div className="flex justify-center mb-4 relative">
                        <img src={'/images/rp.webp'} width={80} height={106} alt="" />
                      </div>
                      <div className="flex items-center gap-2 justify-between">
                        <div className="text-xl font-bold leading-tight">
                          Rank <br /> Predictor
                        </div>
                        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4.95788 5.98717C-2.03613 13.5495 -1.57512 25.3484 5.98689 32.3421C13.5489 39.3358 25.3481 38.8751 32.3418 31.3131C39.3355 23.7511 38.8748 11.9519 31.3128 4.95817C23.7508 -2.03553 11.9516 -1.57483 4.95788 5.98717ZM26.2679 23.1113L22.6846 23.2512L22.4478 17.1845L13.6982 26.645L11.0652 24.2099L19.8147 14.7493L13.748 14.9862L13.6081 11.403L25.792 10.9273L26.2679 23.1113Z" fill="white" />
                        </svg>
                      </div>
                    </a>
                  </div>
                  <div className="md:col-span-2 flex flex-col gap-5">
                    <Link
                      href="/neet-ug-india-admission/"
                      className="group flex items-center justify-between rounded-[20px] px-6 py-3 text-white 
                      bg-[linear-gradient(90deg,#27AEDC_0%,#3FE198_100%)]
                      shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-xl cursor-pointer"
                      aria-label="NEET UG India Admissions"
                    >
                      <span className="font-semibold text-[18px]">
                        NEET UG India Admissions
                      </span>
                      <div className="bg-white text-black w-[20.5px] h-[20.51px] flex items-center justify-center rounded-full 
                         transition-all duration-300 group-hover:translate-x-1">
                        <i className="pi pi-arrow-up-right text-sm"></i>
                      </div>
                    </Link>
                    <Link
                      href="/neet-pg-india-admission/"
                      className="group flex items-center justify-between rounded-[20px] px-6 py-3 text-white 
                      bg-[linear-gradient(90deg,#F6C667_0%,#F04E23_100%)]
                      shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-xl cursor-pointer"
                      aria-label="NEET PG India Admissions"
                    >
                      <span className="font-semibold text-[18px]">
                        NEET PG India Admissions
                      </span>
                      <div className="bg-white text-black w-[20.5px] h-[20.51px] flex items-center justify-center rounded-full 
                        transition-all duration-300 group-hover:translate-x-1">
                        <i className="pi pi-arrow-up-right text-sm"></i>
                      </div>
                    </Link>
                    <Link
                      href="/study-abroad/"
                      className="group flex items-center justify-between rounded-[20px] px-6 py-3 text-white 
                       bg-[linear-gradient(90deg,#677CE7_0%,#754FA7_100%)]
                      shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-xl cursor-pointer"
                      aria-label="MBBS Abroad Admissions"
                    >
                      <span className="font-semibold text-[18px]">
                        MBBS Abroad Admissions
                      </span>
                      <div className="bg-white text-black w-[20.5px] h-[20.51px] flex items-center justify-center rounded-full 
                        transition-all duration-300 group-hover:translate-x-1">
                        <i className="pi pi-arrow-up-right text-sm"></i>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="move-x text-nowrap text-[#00CFB212] text-[100px] sm:text-[140px] md:text-[200px] lg:text-[230px] font-bold absolute -top-[30px] md:-top-[50px] left-[-10px] sm:left-[-20px] -z-1 leading-[0.8]">
                  Radical
                </div>
              </div>
            </div>
            <div className="md:w-7/20 w-full fadePopup px-10 md:px-0">
              <Image
                src="/images/new-abt.webp"
                width={516}
                height={540}
                alt=""
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-0 bg-white overflow-hidden">
        <div className="container px-3 md:px-4">
          <StatsCounter />
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="container px-3 md:px-4">
          <div className="text-center mb-10 md:mb-16 px-2">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-gray-800">
              Welcome to the{" "}
              <span className="text-red-500 font-bold block sm:inline">
                Admission Reality
              </span>
            </h2>
            <p className="mt-2 text-gray-700 text-lg sm:text-xl">
              <span className="font-semibold text-black">
                To secure the right medical seat,
              </span>{" "}
              here’s what you’re actually dealing with:
            </p>
          </div>

          <AdmissionReality />
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container px-3 md:px-4">
          <div className="text-center mb-10 md:mb-16 px-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight text-gray-800 mb-4 md:mb-8">Say hello to 👋🏻 <span className="font-bold bg-gradient-to-r from-[#1ec8a5] to-[#0d8f9e] bg-clip-text text-transparent block sm:inline">Radical Education</span><br className="hidden md:block" /> Built for smarter medical admissions</h2>
            <div className="text-lg sm:text-xl md:text-2xl">Everything you need to know for medical counselling — in one place</div>
          </div>
          <CategoryCards />
        </div>
      </section>
      {/* <section className="lg:py-24 py-16 overflow-hidden">
        <div className="container px-3 md:px-4">
          <div className="lg:px-16 xl:px-32">
            <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-20 xl:gap-30 md:items-center mb-16 sm:mb-20 md:mb-24 lg:mb-30">
              <div className="md:w-3/5 w-full lg:pr-10 xl:pr-20 fadeLeft text-center md:text-left">
                <div className="text-[#0B2E3C] uppercase text-xs sm:text-sm font-semibold tracking-widest mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                  OUR SERVICES
                </div>
                <h2 className="text-black text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-4xl font-bold leading-tight lg:whitespace-nowrap">
                  From <span className="text-[#287FC4]">Rank to Admission </span>
                  <br /> We Handle It All
                </h2>
              </div>
              <div className="md:w-2/5 w-full fadeRight px-4 sm:px-6 md:px-0 text-center md:text-left">
                <div className="text-sm sm:text-base md:text-lg lg:text-[16px] text-gray-700 leading-relaxed">
                  <span className="md:block lg:whitespace-nowrap">
                    With trusted experts and real-time updates, we help you
                  </span>
                  <span className="md:block lg:whitespace-nowrap">
                    navigate NEET counselling easily
                  </span>
                </div>
              </div>
            </div>
            <ServicesDropdown services={services} />
          </div>
        </div>
      </section> 
      <section
        className="py-16 bg-cover bg-center bg-no-repeat bg-[#005A8B] overflow-hidden"
        style={{ backgroundImage: "url('/images/courseBg.webp')" }}
      >
        <div className="container px-3 md:px-4">
          <div className="mb-10 fadeUp md:w-5/10 w-full mx-auto text-center">
            <div className="text-white uppercase text-sm font-semibold tracking-widest mb-4 lg:mb-6">
              OUR COURSES
            </div>
            <h2 className="text-white md:text-5xl text-4xl font-bold">
              Your One Place For{" "}
              <span className="text-[#00CFB2]">All Medical Courses</span>
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-6 fadeUp">
            {courses.map((course) => (
              <div
                key={course.slug}
                className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
              >
                <CourseCard course={course} />
              </div>
            ))}
          </div>
        </div>
      </section>
      */}




      <section className="bg-white overflow-hidden">
        <Earth3D />
      </section>

      <section className="pb-16 bg-white">
        <div className="container lg:px-4">
          <h2 className="text-center text-2xl md:text-3xl font-light mb-8 px-4">
            Courses we offer guidance for
          </h2>
          <div className="lg:px-20 pl-3">
            <CourseSlider />
          </div>
        </div>
      </section>
      <section className="pb-16 bg-white">
        <div className="container lg:px-4 px-3">
          <div className="text-center mb-8 md:mb-10 px-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
              Do you have a personal question?
            </h1>
            <p className="mt-2 text-gray-600 text-lg sm:text-xl">
              Sometimes clarity comes from a real conversation.
            </p>
            <p className="mt-2 md:mt-4 text-gray-700 text-lg sm:text-xl">
              We’re here to listen, understand, and help you figure it out.
            </p>
          </div>
          <div className="lg:px-50">
            <ContactOptions />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container px-3 md:px-4">
          <div className="mb-8 md:mb-10 fadeUp text-center px-2">
            <h3 className="text-black font-semibold lg:text-4xl text-xl sm:text-2xl mb-2">Skip our pitch.</h3>
            <h2 className="bg-gradient-to-r from-[#27AEDC] font-bold to-[#3FE198] bg-clip-text text-transparent lg:text-5xl text-2xl sm:text-3xl font-light">
              Listen to real experiences
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
            {videos.map((video) => (
              <button
                key={video.id}
                type="button"
                onClick={() => setVideoPopup(video)}
                className="fadeUp relative w-full h-[200px] sm:h-[240px] rounded-xl overflow-hidden shadow-lg text-left focus:outline-none focus:ring-2 focus:ring-[#287FC4] focus:ring-offset-2 group cursor-pointer block"
              >
                {/* Only image - no play icon; click opens popup where YouTube play button shows */}
                <img
                  src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-3 py-2 text-white text-sm font-medium">
                  {video.title}
                </span>
              </button>
            ))}
          </div>

          {/* Video popup modal - design with blue header & light background */}
          {videoPopup && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 z-100"
              onClick={() => setVideoPopup(null)}
              role="dialog"
              aria-modal="true"
              aria-label="Video player"
            >
              <div
                className="relative w-full max-w-4xl rounded-2xl overflow-hidden bg-white shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-3 bg-[#F4F7F8]">
                  <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black">
                    <button
                      type="button"
                      onClick={() => setVideoPopup(null)}
                      className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors"
                      aria-label="Close"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${videoPopup.youtubeId}`}
                      title={videoPopup.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      <section className="pb-16 bg-white">
        <div className="container px-3 md:px-4">
          <GoogleReviews />
        </div>
      </section>
      <section className="pb-20">
        <div className="container md:px-4 px-3">
          <div className="mb-8 md:mb-10 fadeUp text-center px-2">
            <h3 className="text-black font-semibold lg:text-4xl text-xl sm:text-2xl mb-2">Complete guidance. No guesswork.</h3>
            <h2 className="bg-gradient-to-r from-[#27AEDC] font-normal to-[#3FE198] leading-[1.2] bg-clip-text text-transparent lg:text-5xl text-2xl sm:text-3xl font-light">
              Only for those who want it right.
            </h2>
          </div>
          <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 lg:grid-cols-9 mb-10 md:mb-20">
            <div className="lg:col-span-5">
              <Link href="#" className="block relative group overflow-hidden rounded-2xl h-[220px] sm:h-[280px] md:h-[340px] lg:h-[380px] xl:h-[420px] w-full shadow-sm hover:shadow-xl transition-shadow duration-300">
                <Image
                  src="/images/ug-card.webp"
                  alt="UG Admission"
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500"></div>
              </Link>
            </div>
            <div className="lg:col-span-4">
              <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 h-full">
                <div className="h-full w-full">
                  <Link href="#" className="block relative group overflow-hidden rounded-2xl h-[220px] sm:h-[280px] md:h-[340px] lg:h-[380px] xl:h-[420px] w-full shadow-sm hover:shadow-xl transition-shadow duration-300">
                    <Image
                      src="/images/pg-card.webp"
                      alt="PG Admission"
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500"></div>
                  </Link>
                </div>
                <div className="h-full w-full">
                  <Link href="#" className="block relative group overflow-hidden rounded-2xl h-[220px] sm:h-[280px] md:h-[340px] lg:h-[380px] xl:h-[420px] w-full shadow-sm hover:shadow-xl transition-shadow duration-300">
                    <Image
                      src="/images/ab-card.webp"
                      alt="Abroad Admission"
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500"></div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="my-20">
            <CounselorSection />
          </div>
          <EverythingSlider />
        </div>
      </section>

      {/* <section
        className="relative bg-cover bg-black bg-left md:bg-center z-2"
        style={{ backgroundImage: "url('/images/testibg.webp')" }}
      >
        <div className="absolute left-0 right-0 top-0 bottom-0 bg-black/70 -z-1 rounded-lg" />
        <div className="container px-3 md:px-4">
          <div className="relative z-2 w-full rounded-lg py-10 px-4 md:px-10 md:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-white">
              <div>
                <p className="uppercase font-semibold text-sm tracking-widest text-gray-300 mb-10">
                  Testimonial
                </p>
                <h2 className="text-4xl font-bold leading-tight">
                  Feedback <br /> From Students
                </h2>
              </div>
              <div className="pt-4 md:pt-10 lg:pt-14">
                <TestimonialSlider />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-16 md:pb-60 pb-50 bg-white">
        <div className="container md:px-4">
          <div className="mb-10 fadeUp text-center">
            <h2 className="text-black text-4xl font-bold">
              Connect with{" "}
              <span className="text-[#287FC4] md:inline-flex block">
                Our Counsellor
              </span>
            </h2>
          </div>
          <div className="relative">
            <div className="md:rounded-xl overflow-hidden">
              <Image
                src="/images/counselorImg.webp"
                alt="Counsellor"
                height={435}
                width={1239}
                className="w-full h-[435px] object-cover object-center"
              />
            </div>
            <div className="absolute left-0 top-[80px] md:top-[105px] w-full">
              <div className="p-6 md:p-10 rounded-xl bg-[#005A8B] mx-auto lg:w-4/10 md:w-5/10 w-[90%] fadePopup">
                <CounselorForm />
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
