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
  const [visibleCount, setVisibleCount] = useState(4); // Show 4 services initially

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
            className={`transform transition-all duration-300 ${
              index >= 4 && isOpen 
                ? 'opacity-100 translate-y-0' 
                : index >= 4 
                ? 'opacity-0 translate-y-4' 
                : 'opacity-100 translate-y-0'
            }`}
          >
            <Link href={`/services/${service.slug}`}>
              <div
                className={`relative rounded-2xl md:p-8 py-8 px-2 md:h-[200px] h-[130px] cursor-pointer 
                ${service.color} shadow-lg hover:shadow-xl transition-all duration-300 
                md:hover:transform-none hover:scale-105 active:scale-95`}
              >
                {/* Diamond Icon */}
                <div className="absolute -top-15 left-1/2 -translate-x-1/2">
                  <div className="md:w-30 md:h-30 w-26 h-26 bg-white rotate-45 rounded-xl shadow-lg flex items-center justify-center">
                    <span className={`-rotate-45 text-2xl ${service.text}`}>
                      <Image src={service.icon} alt={service.title} width="60"/>
                    </span>
                  </div>
                </div>

                {/* Title */}
                <div className="md:mt-16 mt-10 text-center">
                  <h3 className={`font-semibold md:text-lg text-sm lg:px-8 ${service.text}`}>
                    {service.title}
                  </h3>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Mobile Services List */}
      <div className="md:hidden bg-white rounded-2xl shadow-lg overflow-hidden">
        {services.slice(0, visibleCount).map((service, index) => (
          <Link key={service.slug} href={`/services/${service.slug}`}>
            <div
              className={`flex items-center justify-between p-4 border-b border-gray-100 last:border-b-0 transition-all duration-200 active:bg-gray-50 ${
                index === 0 
                  ? 'bg-[#005A8B] text-white' 
                  : 'bg-white text-gray-800 hover:bg-gray-50'
              }`}
            >
              <span className={`font-medium text-base ${index === 0 ? 'text-white' : 'text-gray-800'}`}>
                {service.title}
              </span>
              {index === 0 && (
                <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center">
                  <i className="pi pi-arrow-right text-white text-sm"></i>
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>

      {/* Show More/Less Button */}
      {services.length > 4 && (
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