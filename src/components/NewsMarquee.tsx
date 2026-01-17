'use client';

import Link from 'next/link';
import { Button } from 'primereact/button';
import { useEffect, useRef } from 'react';

type NewsItem = {
  title: string;
  date: string;
  url: string;
};

const newsData: NewsItem[] = [
  {
    title: 'MCC Notice: NRI Category Conversion for NEET PG Counselling 2025 (Round 2)',
    date: '01/12/2025',
    url: 'https://radicaleducation.in/nri-category-conversion-for-neet-pg-counselling/',
  },
  {
    title: 'Uttarakhand NEET PG revised schedule released',
    date: '18/11/2025',
    url: 'https://radicaleducation.in/uttarakhand-neet-pg-revised-schedule/',
  },
  {
    title: 'NMC Announces Updated MBBS Seat Matrix for 2025–26',
    date: '30/10/2025',
    url: 'https://radicaleducation.in/nmc-announces-updated-mbbs-seat-matrix-for-2025-26/',
  },
  {
    title: 'Uttarakhand AYUSH Round 1 Allotment List 2025 Released',
    date: '01/10/2025',
    url: 'https://radicaleducation.in/uttarakhand-ayush-round-1-allotment-list/',
  },
  {
    title: 'Uttar Pradesh MBBS/BDS Round 3 Counselling 2025',
    date: '30/09/2025',
    url: 'https://radicaleducation.in/uttar-pradesh-mbbs-bds-round-3-counselling/',
  },
];

export default function NewsMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;

    let animationId: number;
    let scrollSpeed = 0.6;

    const animate = () => {
      el.scrollLeft += scrollSpeed;
      if (el.scrollLeft >= el.scrollWidth / 2) {
        el.scrollLeft = 0;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    el.addEventListener('mouseenter', () => (scrollSpeed = 0));
    el.addEventListener('mouseleave', () => (scrollSpeed = 0.6));

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="bg-[#053B59] text-white flex items-center gap-4 pr-4 py-6 overflow-hidden">
      <div
        ref={marqueeRef}
        className="flex-1 overflow-hidden whitespace-nowrap"
      >
        <div className="flex gap-8 w-max">
          {[...newsData, ...newsData].map((item, index) => (
            <Link
              key={index}
              href={item.url}
              target="_blank"
              className="min-w-[320px] rounded-lg transition"
            >
              <div className="flex items-center gap-2 text-sm mb-1 text-[#829dac]">
                <i className="pi pi-calendar text-xs text-[#829dac]!" />
                <small>{item.date}</small>
              </div>
              <div className="font-medium leading-snug flex items-center gap-2 text-sm">
                <div><div className='h-2 w-2 rounded-full bg-[#FF7A00]'></div></div>
                <div>{item.title}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Link
        href="https://radicaleducation.in/counselling-updates/"
      >
          <Button className='bg-[#005A8B]! border-[#005A8B]! py-2.5! pr-3! gap-2' rounded>
            <span>View More</span>
            <i>                       
              <svg width="26" height="26" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.2441 10.8496C17.3278 10.8493 17.4111 10.8659 17.4883 10.8975H17.4893C17.5664 10.9292 17.6368 10.976 17.6963 11.0352L21.6055 14.9219L21.6855 15.0186C21.7088 15.0531 21.728 15.0902 21.7441 15.1289C21.7766 15.2063 21.7937 15.2894 21.7939 15.373C21.7942 15.4568 21.778 15.5399 21.7461 15.6172C21.7143 15.6945 21.6674 15.7649 21.6084 15.8242L17.7217 19.7334C17.6026 19.8532 17.4405 19.9212 17.2715 19.9219C17.1023 19.9224 16.9392 19.8556 16.8193 19.7363C16.6995 19.6172 16.6314 19.4552 16.6309 19.2861C16.6303 19.117 16.6971 18.954 16.8164 18.834L19.6191 16.0166L8.48926 16.0488C8.32037 16.0492 8.15798 15.9825 8.03809 15.8633C7.91829 15.7441 7.85011 15.5822 7.84961 15.4131C7.84918 15.2442 7.91603 15.0817 8.03516 14.9619C8.15428 14.8421 8.31637 14.7748 8.48535 14.7744L19.6143 14.7412L16.7969 11.9404C16.677 11.8212 16.609 11.6592 16.6084 11.4902C16.6079 11.321 16.6748 11.158 16.7939 11.0381C16.9131 10.9183 17.0751 10.8502 17.2441 10.8496Z" fill="white" stroke="white" strokeWidth="0.3"/>
              <path d="M15.5 1C23.5081 1 30 7.49187 30 15.5C30 23.5081 23.5081 30 15.5 30C7.49187 30 1 23.5081 1 15.5C1 7.49187 7.49187 1 15.5 1Z" stroke="white" strokeWidth="2"/>
              </svg>
            </i>
          </Button>
      </Link>
    </div>
  );
}
