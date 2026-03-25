'use client';

import { useEffect, useRef, useState } from 'react';

export default function StatsCounter() {
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  const stats = [
    { value: 15783, suffix: '+', label: 'STUDENTS COUNSELLED' },
    { value: 75, suffix: '+', label: 'EXPERT COUNSELLORS' },
    { value: 250, suffix: '+', label: 'COLLEGES / UNIVERSITIES\nASSOCIATION' },
    { value: 100, suffix: '%', label: 'SUCCESS RATE' },
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
        className="text-white relative z-2"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {stats.map((item, i) => (
            <div key={i} className="flex items-center gap-2 relative fadeUp bg-transparent rounded-xl px-6">
              {/* NUMBER */}
              <div className="text-2xl md:text-3xl font-bold text-white">
                {counts[i].toLocaleString()}
                {item.suffix}
              </div>

              {/* LABEL */}
              <div className="text-xs md:text-sm text-white whitespace-pre-line uppercase">
                {item.label}
              </div>

              {/* DIVIDER */}
              {i !== stats.length - 1 && (
                <span className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-16 w-[2px] bg-[#00CFB2]" />
              )}
            </div>
          ))}
        </div>
      </div>
  );
}

