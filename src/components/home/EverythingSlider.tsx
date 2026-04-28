"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";


export default function EverythingSlider() {
  const redirectUrl = "https://www.neetbhaiya.in/";

  const handleRedirect = () => {
    window.open(redirectUrl, "_blank", "noopener,noreferrer");
  };

  const slides = [
    "/images/everythings-banners/mock-1.png",
    "/images/everythings-banners/mock-2.png",
    "/images/everythings-banners/mock-3.png",
    "/images/everythings-banners/mock-4.png",
    "/images/everythings-banners/mock-5.png",
  ];

  const extendedSlides = [...slides, ...slides, ...slides];

  return (
    <div
      className="rounded-4xl p-6 md:p-10 text-center relative cursor-pointer bg-[linear-gradient(135deg,_#FFFFFF_0%,_#DFF1FF_48%,_#FFFFFF_100%),linear-gradient(45deg,_rgba(255,255,255,0)_30%,_rgba(255,255,255,0.8)_50%,_rgba(255,255,255,0)_70%)]"
      onClick={handleRedirect}
    >
      <div className="flex justify-center mb-6">
        <div className="inline-flex">
          <img src={'/images/logo-neetbhaiya.webp'} alt="" className="w-[160px] h-[auto]" height={160} width={58} />
        </div>
      </div>
      <h2 className="text-center cursor-pointer text-3xl lg:text-4xl font-normal mb-8">
        From <span className="text-[#3569C0]">Rank</span> to{" "}
        <span className="text-[#3569C0]">Seat</span> → All Data in <span className="text-[#3569C0]">one app</span>
        <span className="block text-[16px] md:text-[20px] font-poppins mt-2 md:mt-0">Smart packages that keep it simple and affordable.</span>
      </h2>

        <Swiper
          modules={[EffectCoverflow, Autoplay]}
          effect="coverflow"
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 2.5,
            slideShadows: false,
          }}
          allowSlidePrev={true}
          allowSlideNext={true}
          className="w-full max-w-6xl relative z-10"
        >
          {extendedSlides.map((src, i) => (
            <SwiperSlide
              key={`slide-${i}`}
              className="!w-auto flex justify-center items-center"
            >
              <Image
                src={src}
                alt={`img-${i % slides.length}`}
                width={260}
                height={520}
                className="object-contain"
                priority={i < 5}
              />
            </SwiperSlide>
          ))}
        </Swiper>
  
      <div className="flex justify-center md:justify-between items-center mt-7 md:mt-10 flex-wrap gap-y-6 md:gap-y-4 gap-4 text-sm text-gray-600">
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
          <a
            href="https://play.google.com/store/apps/details?id=com.kaveka.NeetBhaiya"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src="/svg/play-store.svg"
              alt="Google Play"
              width={120}
              height={40}
              className="w-[120px] h-[auto]"
            />
          </a>
          <a
            href="https://apps.apple.com/in/app/neetbhaiya/id6737452892"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src="/svg/app-store.svg"
              alt="App Store"
              width={120}
              height={40}
              className="w-[120px] h-[auto]"
            />
          </a>
        </div>
      </div>
    </div>
  );
}