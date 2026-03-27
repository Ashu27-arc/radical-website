'use client';

import { FC, useMemo } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

type Course = {
    id: number;
    title: string;
    image: string;
    href?: string;
};

const CourseSlider: FC = () => {
    const courses = useMemo<Course[]>(
        () => [
            {
                id: 1,
                title: 'MBBS',
                image: '/images/c-mbbs.webp',
                href: '/mbbs-in-india',
            },
            {
                id: 2,
                title: 'BDS',
                image: '/images/c-bds.webp',
                href: '/bds-in-india',
            },
            {
                id: 3,
                title: 'AYUSH',
                image: '/images/c-ayush.webp',
                href: '/ayush-counselling-2025',
            },
            {
                id: 4,
                title: 'MD/MS/DNB',
                image: '/images/c-md.webp',
            },
            {
                id: 5,
                title: 'MBBS Abroad',
                image: '/images/c-abroad.webp',
                href: '/mbbs-abroad-admission',
            },
        ],
        []
    );

    return (

        <Swiper
          spaceBetween={18}
          breakpoints={{
            0: { slidesPerView: 1.5 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {courses.map((course) => (
            <SwiperSlide key={course.id}>
              {course.href ? (
                <Link href={course.href} className="group relative block w-[171px] h-[193.05px] rounded-2xl overflow-hidden cursor-pointer mx-auto">

                {/* Image */}
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                />

                {/* Dark overlay (hover fade) */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-500" />

                {/* Bottom Glass Blur Title */}
                <div className="
                  absolute bottom-0 left-0 w-full
                  px-4 py-3 flex items-center justify-between
                  bg-black/30 backdrop-blur-[10px]
                  border-t border-white/10
                ">
                  <span className="text-white font-medium tracking-wide">
                    {course.title}
                  </span>

                  {/* Arrow Button */}
                  <div className="
                    w-9 h-9 rounded-full bg-white/90
                    flex items-center justify-center
                    transition duration-300
                    group-hover:translate-x-1 group-hover:bg-white
                  ">
                    <span className="w-9 h-9 rounded-full bg-white/90
                    flex items-center justify-center text-black text-sm transition group-hover:translate-x-0.5">
                      <i className='pi pi-arrow-right'></i>
                    </span>
                  </div>
                </div>

                {/* Glow border effect */}
                <div className="
                  pointer-events-none absolute inset-0 rounded-2xl
                  ring-1 ring-transparent
                  group-hover:ring-white/20
                  transition duration-500
                " />
                </Link>
              ) : (
                <div className="group relative w-[171px] h-[193.05px] rounded-2xl overflow-hidden cursor-pointer mx-auto">

                  {/* Image */}
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                  />

                  {/* Dark overlay (hover fade) */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-500" />

                  {/* Bottom Glass Blur Title */}
                  <div className="
                    absolute bottom-0 left-0 w-full
                    px-4 py-3 flex items-center justify-between
                    bg-black/30 backdrop-blur-[10px]
                    border-t border-white/10
                  ">
                    <span className="text-white font-medium tracking-wide">
                      {course.title}
                    </span>

                    {/* Arrow Button */}
                    <div className="
                      w-9 h-9 rounded-full bg-white/90
                      flex items-center justify-center
                      transition duration-300
                      group-hover:translate-x-1 group-hover:bg-white
                    ">
                      <span className="w-9 h-9 rounded-full bg-white/90
                      flex items-center justify-center text-black text-sm transition group-hover:translate-x-0.5">
                        <i className='pi pi-arrow-right'></i>
                      </span>
                    </div>
                  </div>

                  {/* Glow border effect */}
                  <div className="
                    pointer-events-none absolute inset-0 rounded-2xl
                    ring-1 ring-transparent
                    group-hover:ring-white/20
                    transition duration-500
                  " />
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
    );
};

export default CourseSlider;