"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "primereact/button";
import {
  AutoComplete,
  AutoCompleteCompleteEvent,
} from "primereact/autocomplete";
import { useState } from "react";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import NewsMarquee from "@/components/NewsMarquee";
import StatsCounter from "@/components/home/StatsCounter";
import ServicesDropdown from "@/components/home/ServicesDropdown";
import { services } from "@/data/services";
import CourseCard from "@/components/home/CourseCard";
import { courses } from "@/data/courses";
import GoogleReviews from "@/components/GoogleReviews";
import TestimonialSlider from "@/components/TestimonialSlider";
import CounselorForm from "@/components/CounselorForm";
import Earth3D from "@/components/Earth3D";

export default function Home() {
  const [value, setValue] = useState<string>("");
  const [items, setItems] = useState<string[]>([]);

  const search = (event: AutoCompleteCompleteEvent) => {
    setItems([...Array(10).keys()].map((item) => event.query + "-" + item));
  };

  const videos = [
    {
      id: 1,
      title: "Successful Admission",
      youtubeId: "dQw4w9WgXcQ",
    },
    {
      id: 2,
      title: "Ishika's Govt. MBBS Seat Journey",
      youtubeId: "9bZkp7q19f0",
    },
    {
      id: 3,
      title: "Successful Admission",
      youtubeId: "3JZ_D3ELwOQ",
    },
  ];

  const [videoPopup, setVideoPopup] = useState<{
    id: number;
    title: string;
    youtubeId: string;
  } | null>(null);

  return (
    <>
      <section className="pt-[80px] md:pt-[150px] pb-20 md:pb-30 relative z-2 overflow-hidden">
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.3)] -z-[1]"></div>
        <video
          className="w-full absolute inset-0 -z-[2] h-full object-cover object-center"
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
          <h1 className="text-white font-bold text-4xl md:text-[50px] leading-10 md:leading-15 md:mb-5 mb-3 fadeUp">
            Secure Your Medical Seat With <br className="hidden lg:block" />
            Expert Assistance
          </h1>
          <div className="text-lg lg:px-16 px-3 md:mb-8 mb-6 fadeUp">
            Get complete guidance, accurate information, and counseling{" "}
            <br className="hidden lg:block" />
            suited to you and your dreams.
          </div>
          <div className="p-inputgroup bannersrch mx-auto lg:max-w-[580px] fadeUp">
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
            />
            <Button
              label="Search"
              className="bannersrchBtn bg-[#005A8B]! border-[#005A8B]! shadow-none!"
            />
          </div>
        </div>
      </section>
      <FloatingWhatsApp />
      <NewsMarquee />
      <section className="py-16 bg-[#F4F7F8] overflow-hidden">
        <div className="container px-3 md:px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-13/20 w-full fadeLeft text-center md:text-left">
              <div className="lg:pr-60 md:pr-10 lg:pl-6 pl-3 relative z-2">
                <div className="text-[#0B2E3C] uppercase text-sm font-semibold tracking-widest mb-4 lg:mb-6">
                  ABOUT US
                </div>
                <h2 className="text-black text-4xl md:text-5xl font-bold mb-4 lg:mb-6">
                  About <span className="text-[#287FC4]">Radical</span>
                </h2>
                <div className="text-[#4A4A4A] mb-4 lg:mb-6 leading-7 relative">
                  <span className="absolute left-[-20px] top-0 bottom-0 w-[2px] bg-[#00CFB2]" />
                  <div>
                    Presenting you a platform that presents different
                    Institutions that offer varied courses for the students.
                    Whether you want to pursue your education in India or
                    abroad, Radical Education..
                  </div>
                </div>
                <Link href="/about-us">
                  <Button
                    className="bg-[#005A8B]! border-[#005A8B]! py-2.5! pr-3! gap-2"
                    rounded
                  >
                    <span>Read more</span>
                    <i>
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 31 31"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.2441 10.8496C17.3278 10.8493 17.4111 10.8659 17.4883 10.8975H17.4893C17.5664 10.9292 17.6368 10.976 17.6963 11.0352L21.6055 14.9219L21.6855 15.0186C21.7088 15.0531 21.728 15.0902 21.7441 15.1289C21.7766 15.2063 21.7937 15.2894 21.7939 15.373C21.7942 15.4568 21.778 15.5399 21.7461 15.6172C21.7143 15.6945 21.6674 15.7649 21.6084 15.8242L17.7217 19.7334C17.6026 19.8532 17.4405 19.9212 17.2715 19.9219C17.1023 19.9224 16.9392 19.8556 16.8193 19.7363C16.6995 19.6172 16.6314 19.4552 16.6309 19.2861C16.6303 19.117 16.6971 18.954 16.8164 18.834L19.6191 16.0166L8.48926 16.0488C8.32037 16.0492 8.15798 15.9825 8.03809 15.8633C7.91829 15.7441 7.85011 15.5822 7.84961 15.4131C7.84918 15.2442 7.91603 15.0817 8.03516 14.9619C8.15428 14.8421 8.31637 14.7748 8.48535 14.7744L19.6143 14.7412L16.7969 11.9404C16.677 11.8212 16.609 11.6592 16.6084 11.4902C16.6079 11.321 16.6748 11.158 16.7939 11.0381C16.9131 10.9183 17.0751 10.8502 17.2441 10.8496Z"
                          fill="white"
                          stroke="white"
                          strokeWidth="0.3"
                        />
                        <path
                          d="M15.5 1C23.5081 1 30 7.49187 30 15.5C30 23.5081 23.5081 30 15.5 30C7.49187 30 1 23.5081 1 15.5C1 7.49187 7.49187 1 15.5 1Z"
                          stroke="white"
                          strokeWidth="2"
                        />
                      </svg>
                    </i>
                  </Button>
                </Link>
                <div className="move-x text-nowrap text-[#00CFB212] text-[180px] md:text-[200px] lg:text-[230px] font-bold absolute left-[1px] top-[55%] left-[-20px] -z-1">
                  Radical
                </div>
              </div>
            </div>
            <div className="md:w-7/20 w-full fadePopup px-10 md:px-0">
              <Image
                src="/images/about-redical.webp"
                width={516}
                height={540}
                alt=""
                className="w-full"
              />
            </div>
          </div>
          <div className="mb-20">
            <StatsCounter />
          </div>
          <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-20 xl:gap-30 md:items-center mb-16 sm:mb-20 md:mb-24 lg:mb-30">
            <div className="md:w-13/20 w-full lg:pr-10 xl:pr-40 fadeLeft text-center md:text-left">
              <div className="text-[#0B2E3C] uppercase text-xs sm:text-sm font-semibold tracking-widest mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                OUR SERVICES
              </div>
              <h2 className="text-black text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-bold leading-tight">
                From <span className="text-[#287FC4]">Rank to Admission,</span>{" "}
                We Handle It All
              </h2>
            </div>
            <div className="md:w-7/20 w-full fadeRight px-4 sm:px-6 md:px-0 text-center md:text-left">
              <div className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                With trusted experts and real-time updates, we help you navigate
                NEET counselling easily
              </div>
            </div>
          </div>
          <ServicesDropdown services={services} />
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 fadeUp">
            {courses.map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>
        </div>
      </section>
      <section className="pt-16 bg-white">
        <div className="container px-3 md:px-4">
          <div className="fadeUp text-center">
            <div className="md:w-5/10 w-full mx-auto">
              <div className="text-black uppercase text-sm font-semibold tracking-widest mb-4 lg:mb-6">
                Countries We Offer 
              </div>
              <h2 className="text-black md:text-5xl text-4xl font-bold">
                Discover Where Your{" "}
                <span className="text-[#287FC4]">Medical Future</span> Begins
              </h2>
            </div>
          </div>
        </div>
        <div className="overflow-hidden">
          <Earth3D />
        </div>
      </section>
      <section className="md:-mt-70 -mt-45 md:py-30 py-10 bg-cover bg-center bg-no-repeat bg-[#005A8B] overflow-hidden relative z-2 whyChoUs">
        <div className="container lg:px-30 px-3 md:px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-2 items-center">
            <div className="fadeLeft lg:pr-10 text-center md:text-left rounded-xl overflow-hidden">
              <Image
                src="/images/sdfghfddsfdgh.webp"
                className="rounded-xl overflow-hidden"
                width="475"
                height="360"
                alt=""
              />
            </div>
            <div className="fadeRight text-center md:text-left text-white">
              <div className="text-white font-semibold text-sm uppercase">
                Why Choose Us? 
              </div>
              <h2 className="text-6xl font-bold my-6">
                Secure. <span className="text-[#00CFB2]">Support. Success</span>
              </h2>
              <div>
                Our commitment to providing students with extensive support and
                requisite resources is the driving force here at Radical
                Education. Rooted in creativity and quality, we offer a clear,
                reliable path to achieving goals. 
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container px-3 md:px-4">
          <div className="mb-10 fadeUp text-center">
            <h2 className="text-black text-4xl font-bold mb-4">
              OUR <span className="text-[#287FC4]">SUCESSFUL STORIES</span>
            </h2>
            <div className="uppercase text-[#00CFB240] leading-12 text-[42px] md:text-5xl lg:text-7xl font-black">
              HEAR FORM OUR STUDENT
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3 grid-cols-1">
            {videos.map((video) => (
              <button
                key={video.id}
                type="button"
                onClick={() => setVideoPopup(video)}
                className="fadeUp relative min-w-[340px] h-[240px] rounded-xl overflow-hidden shadow-lg w-full text-left focus:outline-none focus:ring-2 focus:ring-[#287FC4] focus:ring-offset-2 group cursor-pointer block"
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
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
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
      <section
        className="relative bg-cover bg-black bg-left md:bg-center z-2"
        style={{ backgroundImage: "url('/images/testibg.webp')" }}
      >
        <div className="absolute left-0 right-0 top-0 bottom-0 bg-black/70 -z-1 rounded-lg" />
        <div className="container px-3 md:px-4">
          <div className="relative z-2 w-full rounded-lg py-10 px-4 md:px-10 md:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-white">
              <div>
                <p className="uppercase font-semibold text-sm tracking-widest text-gray-300 mb-10">
                  Testimonial
                </p>
                <h2 className="text-4xl font-bold leading-tight">
                  Feedback <br /> From Students
                </h2>
              </div>
              <TestimonialSlider />
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
                Our Counselor
              </span>
            </h2>
          </div>
          <div className="relative">
            <div className="md:rounded-xl overflow-hidden">
              <Image
                src="/images/counselorImg.webp"
                alt=""
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
      </section>
    </>
  );
}
