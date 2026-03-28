"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const countries = [
  { name: "Kazakhstan", flag: "/images/kazakhstan.webp", angle: 0 },
  { name: "Kyrgyzstan", flag: "/images/kyrgyzstan.webp", angle: 45 },
  { name: "Morocco", flag: "/images/nepal.webp", angle: 90 },
  { name: "Uzbekistan", flag: "/images/uzbekistan.webp", angle: 135 },
  { name: "Singapore", flag: "/images/singapore.webp", angle: 180 },
  { name: "Bangladesh", flag: "/images/bangladesh.webp", angle: 225 },
  { name: "Russia", flag: "/images/russia.webp", angle: 270 },
  { name: "Georgia", flag: "/images/georgia.webp", angle: 315 },
];

export default function Earth3D() {
  const orbitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add slow rotation animation
    let animationId: number;
    let angle = 0;
    const animate = () => {
      angle -= 0.02;
      if (orbitRef.current) {
        orbitRef.current.style.transform = `rotate(${angle}deg)`;
        // Counter-rotate each flag to keep them upright
        const flags = orbitRef.current.querySelectorAll('.orbit-flag');
        flags.forEach((flag) => {
          (flag as HTMLElement).style.transform = `rotate(${-angle}deg)`;
        });
      }
      animationId = requestAnimationFrame(animate);
    };
    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="w-full py-16 md:py-24 bg-[#f5f7fa] overflow-hidden">
      <div className="container px-4 md:px-8 lg:px-16 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-0">
          {/* Left side - Text content */}
          <div className="lg:w-5/12 w-full text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-light leading-tight text-gray-800 mb-6">
              Discover Where Your{" "}
              <span className="text-[#287FC4] font-bold block md:inline text-[40px]">
                Medical Future
              </span>{" "}
              Begins
            </h2>
            <p className="text-gray-600 text-[18px] md:text-[18px] leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
              Step into internationally recognized medical universities that shape future healthcare leaders.
            </p>
            <Link
              href="/study-abroad/"
              className="inline-block px-8 py-3 rounded-[100px] text-white font-semibold text-base
                bg-gradient-to-r from-[#27AEDC] to-[#3FE198]
                hover:from-[#2195bd] hover:to-[#34b87a]
                transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Explore Countries
            </Link>
          </div>

          {/* Right side - Passport with orbiting flags */}
          <div className="lg:w-7/12 w-full flex justify-center">
            <div className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px] lg:w-[520px] lg:h-[520px]">
              {/* Outer orbit circle (decorative) */}
              <div className="absolute inset-0 rounded-full border-[1px] border-[#0B2E3C]/30"></div>

              {/* Center passport image - size increased by reducing inset */}
              <div className="absolute inset-[10%] rounded-full overflow-hidden z-10">
                <Image
                  src="/images/passport.png"
                  alt="Indian Passport"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Orbiting flags and airplanes */}
              <div ref={orbitRef} className="absolute inset-0">
                {countries.map((country, index) => {
                  const angleRad = (country.angle * Math.PI) / 180;
                  const radius = 50; // percentage from center
                  const x = 50 + radius * Math.cos(angleRad);
                  const y = 50 + radius * Math.sin(angleRad);

                  // Airplane between flags
                  const midAngle = country.angle + 22.5;
                  const midAngleRad = (midAngle * Math.PI) / 180;
                  const planeRadius = 50;
                  const px = 50 + planeRadius * Math.cos(midAngleRad);
                  const py = 50 + planeRadius * Math.sin(midAngleRad);

                  return (
                    <div key={country.name}>
                      {/* Flag */}
                      <div
                        className="orbit-flag absolute w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 -ml-5 -mt-5 md:-ml-6 md:-mt-6 lg:-ml-7 lg:-mt-7 z-20"
                        style={{
                          left: `${x}%`,
                          top: `${y}%`,
                        }}
                      >
                        <div className="w-full h-full rounded-full bg-white shadow-md flex items-center justify-center p-1 border border-gray-100 hover:scale-110 transition-transform duration-300">
                          <div className="w-full h-full rounded-full overflow-hidden relative">
                            <Image
                              src={country.flag}
                              alt={country.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Airplane icon between flags */}
                      {index % 2 === 0 && (
                        <div
                          className="orbit-plane absolute w-5 h-5 md:w-6 md:h-6 -ml-2.5 -mt-2.5 md:-ml-3 md:-mt-3 z-20"
                          style={{
                            left: `${px}%`,
                            top: `${py}%`,
                            transform: `rotate(${midAngle}deg)`,
                          }}
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            className="w-full h-full text-[#27AEDC]"
                          >
                            <path
                              d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
