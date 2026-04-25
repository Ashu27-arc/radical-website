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
      className={`relative cursor-pointer transition
        ${isActive ? '' : ''}
      `}
    >
      {/* IMAGE WITH SKELETON */}
      <div className="relative w-full h-[400px] pl-20 rounded-xl">
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
      </div>

      {/* MONTH */}
      <div className="absolute left-2 top-2 -bottom-4 flex items-end">
        <span className="vertical-text text-[#005A8B] text-4xl uppercase font-semibold tracking-widest">
          {item.month}
        </span>
      </div>

      {/* YEAR */}
      <span className="absolute -top-6 font-semibold text-[#005A8B] text-base right-0">
        {item.year}
      </span>
    </div>
  );
}

