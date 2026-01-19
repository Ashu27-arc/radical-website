'use client';

import { useState } from 'react';
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
      className={`relative cursor-pointer rounded-lg overflow-hidden transition
        ${isActive ? 'ring-2 ring-blue-600' : 'shadow hover:shadow-lg'}
      `}
    >
      {/* IMAGE WITH SKELETON */}
      <div className="relative w-full h-56">
        {!loaded && (
          <Skeleton
            width="100%"
            height="100%"
            className="absolute inset-0"
          />
        )}

        <img
          src={item.mainImage}
          alt={item.month}
          onLoad={() => setLoaded(true)}
          className={`w-full h-56 object-cover ${loaded ? 'block' : 'hidden'}`}
        />
      </div>

      {/* MONTH */}
      <div className="absolute left-2 top-2 bottom-2 flex items-center">
        <span className="vertical-text text-blue-700 font-semibold tracking-widest">
          {item.month}
        </span>
      </div>

      {/* YEAR */}
      <span className="absolute top-2 right-2 bg-white px-2 py-1 text-xs rounded shadow">
        {item.year}
      </span>
    </div>
  );
}

