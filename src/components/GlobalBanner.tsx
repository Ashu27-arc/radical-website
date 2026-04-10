'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { BannerItem } from '@/lib/api';

import 'swiper/css';
import 'swiper/css/pagination';

interface GlobalBannerProps {
  banners: BannerItem[];
}

const GlobalBanner: React.FC<GlobalBannerProps> = ({ banners }) => {
  if (!banners || banners.length === 0) return null;

  return (
    <div className="w-full mb-8 rounded-xl overflow-hidden shadow-sm border border-gray-100 bg-white">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={banners.length > 1}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        className="w-full aspect-[16/6] md:aspect-[16/4.5] lg:aspect-[1024/420]"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <a 
              href={banner.link && banner.link !== '#' ? banner.link : undefined} 
              target={banner.link && banner.link !== '#' ? "_blank" : undefined}
              rel={banner.link && banner.link !== '#' ? "noopener noreferrer" : undefined}
              className={`block relative w-full h-full ${banner.link && banner.link !== '#' ? 'cursor-pointer' : 'cursor-default'}`}
            >
              <Image
                src={banner.image}
                alt={`Banner ${index + 1}`}
                fill
                unoptimized
                className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                priority={index === 0}
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
      
      <style jsx global>{`
        .swiper-pagination-bullet-active {
          background: #005A8B !important;
        }
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          opacity: 0.6;
        }
      `}</style>
    </div>
  );
};

export default GlobalBanner;
