//\radical\src\components\home\ServicesDropdown.tsx

'use client';

import { useState } from 'react';
import Link from "next/link";
import { Image } from "primereact/image";
import { Button } from "primereact/button";

type Service = {
  title: string;
  slug: string;
  color: string;
  text: string;
  icon: string;
  description: string;
};

interface ServicesDropdownProps {
  services: Service[];
}

export default function ServicesDropdown({ services }: ServicesDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(8); // Show 8 services initially

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setVisibleCount(services.length); // Show all services when opening
    } else {
      setVisibleCount(4); // Show only 4 when closing
    }
  };

  return (
    <div className="fadeUp">
      {/* Desktop Services Grid */}
      <div className="hidden md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-26 md:gap-x-10 gap-x-5 transition-all duration-500 ease-in-out">
        {services.slice(0, visibleCount).map((service, index) => (
          <div
            key={service.slug}
            className={`transform transition-all duration-300 ${index >= 8 && isOpen
              ? 'opacity-100 translate-y-0'
              : index >= 8
                ? 'opacity-0 translate-y-4'
                : 'opacity-100 translate-y-0'
              }`}
          >
            <Link href={`/services/${service.slug}`}>
              <div
                style={{ backgroundColor: service.color.includes('[') ? service.color.match(/\[(.*?)\]/)?.[1] : undefined }}
                className={`relative rounded-2xl md:p-8 py-8 px-2 md:h-[200px] h-[130px] cursor-pointer 
                ${!service.color.includes('[') ? service.color : ''} shadow-lg hover:shadow-xl transition-all duration-300 
                md:hover:transform-none hover:scale-105 active:scale-95`}
              >
                {/* Diamond Icon */}
                <div className="absolute -top-15 left-1/2 -translate-x-1/2">
                  <div className="md:w-30 md:h-30 w-26 h-26 bg-white rotate-45 rounded-xl shadow-lg flex items-center justify-center">
                    <span className="-rotate-45 text-2xl" style={{ color: service.text.includes('[') ? service.text.match(/\[(.*?)\]/)?.[1] : undefined }}>
                      <Image src={service.icon} alt={service.title} width="60" />
                    </span>
                  </div>
                </div>

                {/* Title */}
                <div className="md:mt-16 mt-10 text-center">
                  <h3 className="font-semibold md:text-lg text-sm lg:px-8" style={{ color: service.text.includes('[') ? service.text.match(/\[(.*?)\]/)?.[1] : undefined }}>
                    {service.title}
                  </h3>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Mobile Services Grid */}
      <div className="md:hidden grid grid-cols-2 gap-x-4 gap-y-16 px-2 pt-12 pb-10">
        {services.slice(0, visibleCount).map((service, index) => (
          <Link key={service.slug} href={`/services/${service.slug}`} className="relative">
            <div className="flex flex-col items-center">
              {/* Diamond Icon */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-20">
                <div className="w-18 h-18 bg-white rotate-45 rounded-xl shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] flex items-center justify-center border border-gray-50">
                  <div className="-rotate-45 w-11 h-11 flex items-center justify-center">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Colored Card with Notch Effect */}
              <div
                className={`w-full pt-14 pb-6 px-3 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-center min-h-[130px] flex items-center justify-center relative overflow-hidden`}
                style={{ backgroundColor: service.color.includes('[') ? service.color.match(/\[(.*?)\]/)?.[1] : undefined }}
              >
                {/* Notch effect using a rotated square matching section background */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-[#F4F7F8] rotate-45 rounded-xl"></div>

                <h3 className="font-bold text-xs sm:text-sm leading-tight relative z-10" style={{ color: service.text.includes('[') ? service.text.match(/\[(.*?)\]/)?.[1] : undefined }}>
                  {service.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Show More/Less Button */}
      {services.length > 8 && (
        <div className="text-center mt-8">
          <Button
            onClick={toggleDropdown}
            className="bg-[#005A8B]! border-[#005A8B]! py-2.5! px-6! gap-2 transition-all duration-300 hover:bg-[#004A7B]!"
            rounded
          >
            <span>{isOpen ? 'Show Less' : 'Show More'}</span>
            <i className={`pi ${isOpen ? 'pi-chevron-up' : 'pi-chevron-down'} transition-transform duration-300`}></i>
          </Button>
        </div>
      )}
    </div>
  );
}