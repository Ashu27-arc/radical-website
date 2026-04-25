'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Skeleton } from 'primereact/skeleton';

interface Props {
  item: any;
  onClick: () => void;
  isActive?: boolean;
}

export default function GalleryCard({ item, onClick, isActive }: Props) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      onClick={onClick}
      className={`relative cursor-pointer transition flex items-end gap-4 ${isActive ? '' : ''}`}
    >
      {/* MONTH - Now Outside the Image Card */}
      <div className="flex items-end pb-4">
        <span className="vertical-text text-[#005A8B] text-4xl md:text-5xl uppercase font-semibold tracking-widest leading-none">
          {item.month}
        </span>
      </div>

      {/* IMAGE CONTAINER */}
      <div className="relative flex-1 h-[400px] rounded-xl">
        {!loaded && (
          <Skeleton
            width="100%"
            height="100%"
            className="absolute inset-0 rounded-xl"
          />
        )}
        <Image
          src={item.mainImage}
          alt={item.month}
          fill
          onLoad={() => setLoaded(true)}
          className={`object-cover rounded-xl shadow-lg transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        {/* YEAR - Kept as absolute to overlay top-right of image */}
        <span className="absolute -top-8 right-0 font-semibold text-[#005A8B] text-base">
          {item.year}
        </span>
      </div>
    </div>
  );
}

