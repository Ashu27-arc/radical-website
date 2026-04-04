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

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

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
      title: "Utkarshika Gupta, CSAMC, Etah",
      youtubeId: "jfq8RbTIrtI",
    },
    {
      id: 2,
      title: "Ayush Kushwaha, GSAMC, Hapur",
      youtubeId: "hwYjHX5pk9w",
    },
    {
      id: 3,
      title: "Sangam Yadav, MGAMC, Lucknow",
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
            Secure your medical seat easily <br className="block" />
            <span className="font-light">with expert assistance</span>
          </h1>
          <div className="text-base sm:text-lg lg:px-16 px-3 md:mb-8 mb-6 font-semibold fadeUp">
            Get complete guidance, accurate information, and expert counselling <br className="hidden lg:block" /> suited to you and your goals.
          </div>
          <div className="p-inputgroup bannersrch mx-auto w-full max-w-[580px] fadeUp relative">
            <span className="p-inputgroup-addon pr-0! border-r-0! bg-white! shadow-none! border-[#fff]!">
              <i className="pi pi-search !text-[#78787899]"></i>
            </span>
            <AutoComplete
              placeholder=""
              className="pl-0! border-l-0! shadow-none! border-[#fff]!"
              inputClassName="peer"
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
            <span className="absolute left-12 top-4 text-sm text-[#78787899] pointer-events-none 
                        transition-opacity duration-200 
                        peer-focus:opacity-0 peer-not-placeholder-shown:opacity-0"
            >
              Search for your college
            </span>
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
                    medical counselling needs
                  </span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-10 gap-4 sm:gap-6 w-full max-w-6xl lg:px-10 mt-4">
                  <div className="w-full max-w-[189px] mx-auto h-auto md:mx-0 md:h-[210.93px] md:w-[189px]">
                    <a
                      href="https://www.neetbhaiya.in/rank-predictor"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative block cursor-pointer no-underline rounded-[20px] overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full outline-none focus:outline-none focus-visible:outline-none"
                      aria-label="Rank Predictor"
                    >
                      <div className="relative mx-auto w-full aspect-[189/210.93] md:w-[189px] md:h-[210.93px]">
                        <Image
                          src="/images/rp.svg"
                          alt="Rank Predictor"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                    </a>
                  </div>
                  <div className="md:col-span-2 flex flex-col gap-5 md:items-start items-center">
                    <Link
                      href="/neet-ug-india-admission/"
                      className="group flex items-center w-[326px] h-[52px] justify-start gap-4 rounded-[20px] px-6 text-white 
                      bg-[linear-gradient(90deg,#27AEDC_0%,#3FE198_100%)]
                      shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-xl cursor-pointer"
                      aria-label="NEET UG India Admissions"
                    >
                      <span className="font-bold text-[18px]">
                        NEET UG India <span className="font-light">Admissions</span>
                      </span>
                      <div className="bg-white text-[#27AEDC] w-[30px] h-[30px] flex items-center justify-center rounded-full 
                         transition-all duration-300 group-hover:translate-x-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20.51"
                          height="20.51"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="7" y1="17" x2="17" y2="7" />
                          <polyline points="7 7 17 7 17 17" />
                        </svg>
                      </div>
                    </Link>
                    <Link
                      href="/neet-pg-india-admission/"
                      className="group flex items-center w-[326px] h-[52px] justify-start gap-4 rounded-[20px] px-6 text-white 
                      bg-[linear-gradient(90deg,#F6C667_0%,#F04E23_100%)]
                      shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-xl cursor-pointer"
                      aria-label="NEET PG India Admissions"
                    >
                      <span className="font-bold text-[18px]">
                        NEET PG India <span className="font-light">Admissions</span>
                      </span>
                      <div className="bg-white text-[#F04E23] w-[30px] h-[30px] flex items-center justify-center rounded-full 
                        transition-all duration-300 group-hover:translate-x-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20.51"
                          height="20.51"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="7" y1="17" x2="17" y2="7" />
                          <polyline points="7 7 17 7 17 17" />
                        </svg>
                      </div>
                    </Link>
                    <Link
                      href="/study-abroad/"
                      className="group flex items-center w-[326px] h-[52px] justify-start gap-4 rounded-[20px] px-6 text-white 
                       bg-[linear-gradient(90deg,#677CE7_0%,#754FA7_100%)]
                      shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-xl cursor-pointer"
                      aria-label="MBBS Abroad Admissions"
                    >
                      <span className="font-bold text-[18px]">
                        MBBS Abroad <span className="font-light">Admissions</span>
                      </span>
                      <div className="bg-white text-[#754FA7] w-[30px] h-[30px] flex items-center justify-center rounded-full 
                        transition-all duration-300 group-hover:translate-x-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20.51"
                          height="20.51"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="7" y1="17" x2="17" y2="7" />
                          <polyline points="7 7 17 7 17 17" />
                        </svg>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="move-x text-nowrap text-[#00CFB212] text-[100px] sm:text-[140px] md:text-[200px] lg:text-[230px] font-bold absolute -top-[30px] md:-top-[50px] left-[-10px] sm:left-[-20px] -z-1 leading-[0.8]">
                  Radical
                </div>
              </div>
            </div>
            <div className="w-full sm:w-4/5 md:w-7/20 lg:w-[30%] mx-auto md:mx-0 fadePopup px-8 sm:px-12 md:px-0 mt-6 sm:mt-8 md:mt-0 flex justify-center items-center">
              <Image
                src="/images/new-abt.webp"
                width={516}
                height={540}
                alt="Radical Education"
                className="w-full h-auto max-w-[280px] sm:max-w-[380px] md:max-w-full object-contain hover:scale-105 transition-transform duration-500"
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
      <section className="py-5 bg-white">
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
        <div className="container px-4 md:px-8 lg:px-16 mx-auto">
          <div className="mb-8 md:mb-10 fadeUp text-center px-2">
            <h3 className="text-black font-semibold lg:text-4xl text-xl sm:text-2xl mb-2">Skip our pitch.</h3>
            <h2 className="bg-gradient-to-r from-[#27AEDC] font-bold to-[#3FE198] bg-clip-text text-transparent lg:text-5xl text-2xl sm:text-3xl font-light">
              Listen to real experiences
            </h2>
          </div>
          <div className="fadeUp">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={24}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              className="w-full"
            >
              {videos.map((video) => (
                <SwiperSlide key={video.id}>
                  <button
                    type="button"
                    onClick={() => setVideoPopup(video)}
                    className="relative w-full h-[260px] rounded-xl overflow-hidden shadow-lg text-left focus:outline-none focus:ring-2 focus:ring-[#287FC4] focus:ring-offset-2 group cursor-pointer block"
                  >
                    <img
                      src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />

                    <span className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-3 py-2 text-white text-sm font-medium">
                      {video.title}
                    </span>
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>
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
        <div className="container px-4 md:px-8 lg:px-16 mx-auto">
          <div className="fadeUp"><GoogleReviews /></div>
        </div>
      </section>
      <section className="pb-20">
        <div className="container px-4 md:px-8 lg:px-10 mx-auto">
          <div className="mb-8 md:mb-10 fadeUp text-center px-2">
            <h3 className="text-black font-semibold lg:text-4xl text-xl sm:text-2xl mb-2">Complete guidance. No guesswork.</h3>
            <h2 className="bg-gradient-to-r from-[#27AEDC] font-normal to-[#3FE198] leading-[1.2] bg-clip-text text-transparent lg:text-5xl text-2xl sm:text-3xl font-light">
              Only for those who want it right.
            </h2>
          </div>
          <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 lg:grid-cols-9 mb-10 md:mb-20">
            <div className="lg:col-span-5">
              <Link href="/neet-ug-india-admission" className="block relative group overflow-hidden rounded-2xl h-[220px] sm:h-[280px] md:h-[340px] lg:h-[380px] w-full shadow-sm hover:shadow-xl transition-shadow duration-300">
                <Image
                  src="/svg/ug-card.svg"
                  alt="UG Admission"
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500"></div>
              </Link>
            </div>
            <div className="lg:col-span-4">
              <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 h-full">
                <div className="h-full w-full">
                  <Link href="/neet-pg-india-admission" className="block relative group overflow-hidden rounded-2xl h-[280px] sm:h-[280px] md:h-[340px] lg:h-[380px] w-full shadow-sm hover:shadow-xl transition-shadow duration-300">
                    <Image
                      src="/svg/neet-pg.svg"
                      alt="PG Admission"
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500"></div>
                  </Link>
                </div>
                <div className="h-full w-full">
                  <Link href="/study-abroad" className="block relative group overflow-hidden rounded-2xl h-[280px] sm:h-[280px] md:h-[340px] lg:h-[380px] w-full shadow-sm hover:shadow-xl transition-shadow duration-300">
                    <Image
                      src="/svg/abroad-c.svg"
                      alt="Abroad Admission"
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 scale-102 group-hover:scale-110"
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
