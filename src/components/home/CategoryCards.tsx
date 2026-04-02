"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

const cards = [
  {
    title: "Top MBBS Colleges",
    subtitle: "India",
    img: "/svg/everything-1.svg",
  },
  {
    title: "Top MBBS Colleges",
    subtitle: "Abroad",
    img: "/svg/everything-2.svg",
  },
  {
    title: "NEET Counselling",
    subtitle: "Updates",
    img: "/svg/everything-3.svg",
  },
  {
    title: "Blogs &",
    subtitle: "News",
    img: "/svg/everything-4.svg",
  },
];

const data = [
  {
    title: "Personal Counsellor",
    img: "/svg/everything-5.svg",
  },
  {
    title: "Videos and Webinars",
    img: "/svg/everything-6.svg",
  },
];

export default function CategoryCards() {
  return (
    <>
      <div className="lg:px-20 mb-10">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {cards.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="group lg:w-[241.56px] w-full h-[249.64px] rounded-[30px] overflow-hidden relative cursor-pointer mx-auto
              transition-all duration-300 hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative w-full h-full brightness-110">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t to-transparent"></div>

                {/* Text */}
                <div className="absolute bottom-0 left-0 right-0 text-center px-2 py-3 bg-white/70">
                  <h3 className="text-black text-[21px] font-medium leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-black text-[21px] font-light">{item.subtitle}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-11 gap-6 lg:px-23">

        {data.map((item, index) => (
          <div
            key={index}
            className="group relative w-full h-[130px] rounded-[30px] overflow-hidden cursor-pointer mx-auto md:mx-0 brightness-110"
          >

            {/* Background Image */}
            <Image
              src={item.img}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/20"></div>

            {/* Center Pill */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="
                  px-6 md:px-8 py-2 md:py-3
                  rounded-[25px]
                  bg-white/70
                  text-[#000000]
                  font-medium
                  text-[16px] sm:text-[21px]
                  shadow-md
                ">
                {item.title}
              </div>
            </div>

          </div>
        ))}

      </div>
    </>
  );
}