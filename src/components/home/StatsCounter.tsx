'use client';

import { useEffect, useRef, useState } from 'react';

export default function StatsCounter() {
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  const stats = [
    { value: 15783, suffix: '+', label: 'Students\nCounselled' },
    { value: 75, suffix: '+', label: 'Expert\nCounsellors' },
    { value: 250, suffix: '+', label: 'College/University\nAssociations' },
    { value: 100, suffix: '%', label: 'Success\nRate' },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!start) return;

    const duration = 1500;
    const stepTime = 16;

    const timers = stats.map((stat, i) => {
      let current = 0;
      const increment = stat.value / (duration / stepTime);

      return setInterval(() => {
        current += increment;

        setCounts(prev => {
          const updated = [...prev];
          updated[i] =
            current >= stat.value ? stat.value : Math.floor(current);
          return updated;
        });

        if (current >= stat.value) clearInterval(timers[i]);
      }, stepTime);
    });

    return () => timers.forEach(clearInterval);
  }, [start]);

  return (
    <div
      ref={ref}
      className="w-full max-w-[1240px] mx-auto relative z-2"
    >
      <div className="bg-[#262626] rounded-[30px] py-10 md:py-12 border border-white/5 shadow-2xl">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-2">
          {stats.map((item, i) => (
            <div key={i} className="flex items-center justify-center gap-4 h-full relative py-2 fadeUp">
              <div className="space-y-3 text-center">
                <div className="text-4xl lg:text-[40px] font-bold text-white tracking-tighter leading-none whitespace-nowrap min-w-[100px] lg:min-w-[115px]">
                  {counts[i].toLocaleString()}
                  {item.suffix}
                </div>
                <div className="text-white text-[14px] lg:text-[14px] leading-tight font-light">
                  {item.label}
                </div>
              </div>

              {/* DIVIDER */}
              {i !== stats.length - 1 && (
                <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 h-full w-1 z-10 rounde-[80px]">
                  <span className={`block w-full h-full ${i === 0 ? 'bg-gradient-to-b from-[#27AEDC] to-[#3FE198] rounded-[80px]' :
                    i === 1 ? 'bg-gradient-to-b from-[#27AEDC] to-[#3FE198] rounded-[80px]' :
                      'bg-gradient-to-b from-[#27AEDC] to-[#3FE198] rounded-[80px]'
                    }`} />
                </div>
              )}
              {i % 2 === 0 && i !== stats.length - 1 && (
                <div className="hidden sm:block lg:hidden absolute right-2 top-1/2 -translate-y-1/2 h-full w-1 z-10 rounded-[80px]">
                  <span className={`block w-full h-full ${i === 0 ? 'bg-gradient-to-b from-[#27AEDC] to-[#3FE198] rounded-[80px]' :
                    'bg-gradient-to-b from-[#27AEDC] to-[#3FE198] rounded-[80px]'
                    }`} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

