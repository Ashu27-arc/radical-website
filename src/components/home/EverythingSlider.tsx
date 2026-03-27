"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import Image from "next/image";

export default function EverythingSlider() {
  const redirectUrl = "https://www.neetbhaiya.in/";

  const handleRedirect = () => {
    window.open(redirectUrl, "_blank", "noopener,noreferrer");
  };

  const slides = [
    "/images/mock1.webp",
    "/images/mock2.webp",
    "/images/mock3.webp",
    "/images/mock4.webp",
    "/images/mock5.webp",
    "/images/mock1.webp",
    "/images/mock2.webp",
    "/images/mock3.webp",
    "/images/mock4.webp",
    "/images/mock5.webp",
  ];

  return (
      <div
        className="bg-[#dbeafe] rounded-4xl p-10 text-center relative cursor-pointer"
        onClick={handleRedirect}
      >
        <div className="flex justify-center mb-6">
          <div className="inline-flex">
            <img src={'/images/mat-logo.webp'} alt="" className="w-[160px] h-[auto]" height={160} width={58}/>
          </div>
        </div>
        <h2 className="text-3xl lg:text-4xl font-normal mb-8">
          From <span className="text-[#3569C0]">Rank</span> to{" "}
          <span className="text-[#3569C0]">Seat</span> → Everything in one app
        </h2>
        <Swiper
        modules={[EffectCoverflow, Autoplay]}
        effect="coverflow"
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        autoplay={{ delay: 2500 }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 2.5,
          slideShadows: false,
        }}
        className="w-full max-w-6xl"
      >
        {slides.map((src, i) => (
          <SwiperSlide
            key={i}
            className="!w-auto flex justify-center items-center"
          >
            <Image
              src={src}
              alt={`img-${i}`}
              width={260}
              height={520}
              className="object-contain"
              priority
            />
          </SwiperSlide>
        ))}
      </Swiper>
        <div className="flex justify-between items-center mt-10 flex-wrap gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <span>Powered by:</span>
            <Image
              src="/logo.webp"
              alt="logo"
              width={95}
              height={31}
              className="w-[95px] h-[auto]"
            />
          </div>
          <div className="flex items-center gap-3">
            <span>Download now:</span>
            <Image
              src="/images/g-pay-logo.webp"
              alt="Google Play"
              width={120}
              height={40}
              className="w-[120px] h-[auto]"
            />
            <Image
              src="/images/apple-pay-logo.webp"
              alt="App Store"
              width={120}
              height={40}
              className="w-[120px] h-[auto]"
            />
          </div>
        </div>
      </div>
  );
}