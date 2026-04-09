"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Skeleton } from "primereact/skeleton";
import { Button } from "primereact/button";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

/* ------------- Types ------------- */
interface Review {
  author_name: string;
  profile_photo_url: string;
  rating: number;
  text: string;
  time: number; // Unix timestamp (seconds)
}

interface PlaceData {
  name: string;
  rating: number;
  user_ratings_total: number;
  reviews: Review[];
}

/* ------------- Fallback (shown only if API fails) ------------- */
const FALLBACK_DATA: PlaceData = {
  name: "Radical Education RDLEDU Pvt Ltd",
  rating: 4.9,
  user_ratings_total: 127,
  reviews: [
    {
      author_name: "Sonam Yadav",
      profile_photo_url: "/images/Sonam-Yadav.webp",
      rating: 5,
      text: "My experience with Radical Education is amazing. Staff is very helpful to educate the students about their future assignments of professional life. If you are looking for a professional counselling place you must go through Radical education. They are commended for managing complex counselling, documentation and choice filling procedures. Mentors are professional and approachable, provide individual attention for career options and admission strategies.",
      time: 1712121600,
    },
    {
      author_name: "Ajay Kumar",
      profile_photo_url: "/images/Ajay-Kumar.webp",
      rating: 5,
      text: "I'm Ajay, an MBBS student. Radical Education counsellors are very experienced and amazing. They helped me to get best govt MBBS college till the last round. They behaved like family members. I am thankful to all Radical Education team members. Thank you so much. I advise all of you to take help for the counselling.",
      time: 1712035200,
    },
    {
      author_name: "Sangam",
      profile_photo_url: "/images/Sangam.webp",
      rating: 5,
      text: "Too good, and the staff was very friendly 😊 The vibe was also great ❤️ Go for it, guys! ✨",
      time: 1711948800,
    },
    // {
    //   author_name: "Ajay Kumar",
    //   profile_photo_url: "/images/Ajay-Kumar.webp",
    //   rating: 5,
    //   text: "I'm Saloni, an MBBS student. Radical Education counsellors are very experienced and amazing. They helped me to get best govt MBBS college till the last round. They behaved like family members. I am thankful to all Radical Education team members. Thank you so much. I advise all of you to take help for the counselling.",
    //   time: 1712035200,
    // },
    {
      author_name: "Sahil Gautam",
      profile_photo_url: "/images/reviews/Sahil-Gautam.webp",
      rating: 5,
      text: "I had a very positive experience with this counselling consultancy. The team was extremely supportive, cooperative, and always available to clarify my doubts. Their guidance was clear, honest, and professional, which made the entire process smooth and stress-free. I truly appreciate their dedication and would confidently recommend them to others",
      time: 1712035200,
    },
    {
      author_name: "Iqra Ansari",
      profile_photo_url: "/images/reviews/Iqra-Ansari.webp",
      rating: 5,
      text: "My experience with Radical Education has been amazing! I took their help for MBBS counselling, and the entire process was smooth and transparent. Amar Sir explained every step clearly and guided me throughout the process. Shivanshu sir was also very supportive — he kept me updated and helped me with all the documentation.",
      time: 1712035200,
    },

  ],
};

export default function GoogleReviews() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<PlaceData | null>(null);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    let cancelled = false;

    async function fetchReviews() {
      try {
        const res = await fetch("/api/google-reviews");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json: PlaceData = await res.json();
        if (!cancelled) {
          setData(json);
        }
      } catch (err: any) {
        console.warn("[GoogleReviews] API failed, using fallback:", err.message);
        if (!cancelled) {
          setError(err.message);
          setData(FALLBACK_DATA);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchReviews();
    return () => { cancelled = true; };
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-10">

      <div className="text-center">
        {loading ? (
          <>
            <Skeleton height="1.8rem" width="90%" />
            <Skeleton height="1rem" width="70%" className="mt-2" />
            <Skeleton height="2.5rem" width="150px" className="mt-5 rounded-full" />
          </>
        ) : (
          <>
            <div className="flex flex-col text-center justify-center md:justify-start items-center gap-3">
              <div>
                <div className="h-[60px] w-[65px]">
                  <Image
                    src="/images/favicon.webp"
                    width={60}
                    height={65}
                    className="w-full h-full"
                    alt=""
                  />
                </div>
              </div>
              <h2 className="text-2xl font-semibold text-[#005A8B] m-0">
                {/* {data?.name} */}
                Radical Education<br />RDLEDU Pvt Ltd
              </h2>
            </div>

            <div className="flex flex-col items-center gap-2 mt-2 mb-4">
              <div className="text-orange-400 text-4xl">
                {"★★★★★".slice(0, Math.round(data!.rating))}
              </div>
              <span className="text-sm text-gray-600">
                {data?.user_ratings_total} Google Reviews
              </span>
            </div>

            <Button
              rounded
              size="small"
              className="bg-[#005A8B]! border-[#005A8B]!"
              onClick={() =>
                window.open("https://share.google/qEFvxixqABZThuidJ", "_blank")
              }
            >
              Write a Review
            </Button>
          </>
        )}
      </div>

      <div className="lg:col-span-3">
        <div className="relative px-10">
          <div className="swiper-button-prev-custom absolute -left-2 top-1/2 -translate-y-1/2 z-20 cursor-pointer">
            <svg width="22" height="22" viewBox="0 0 22 22" className="rotate-180">
              <circle cx="11" cy="11" r="11" fill="#005A8B" />
              <path d="M8.91579 16.7895L7.29474 15.1476L11.4307 11L7.29474 6.85242L8.92737 5.21053L14.7168 11L8.91579 16.7895Z" fill="#FFFFFF" />
            </svg>
          </div>
          <div className="swiper-button-next-custom absolute -right-2 top-1/2 -translate-y-1/2 z-20 cursor-pointer">
            <svg width="22" height="22" viewBox="0 0 22 22">
              <circle cx="11" cy="11" r="11" fill="#005A8B" />
              <path d="M8.91579 16.7895L7.29474 15.1476L11.4307 11L7.29474 6.85242L8.92737 5.21053L14.7168 11L8.91579 16.7895Z" fill="#FFFFFF" />
            </svg>
          </div>
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            spaceBetween={24}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="px-7"
          >
            {(loading ? Array(3).fill(null) : data?.reviews)?.map(
              (review: Review | null, i) => (
                <SwiperSlide key={i}>
                  <div className="flex-shrink-0 h-[280px] snap-start border border-[#005A8B] rounded-xl px-6 py-8 shadow-sm bg-white transition-all duration-300 hover:border-b-4">

                    {loading ? (
                      <>
                        <div className="flex items-center gap-3 mb-3">
                          <Skeleton shape="circle" size="40px" />
                          <div className="flex-1">
                            <Skeleton width="70%" height="0.9rem" />
                            <Skeleton width="40%" height="0.7rem" className="mt-1" />
                          </div>
                        </div>
                        <Skeleton width="60%" height="0.8rem" className="mb-2" />
                        <Skeleton height="3rem" />
                      </>
                    ) : (
                      <>
                        <div className="flex items-center gap-3 mb-2">
                          <img
                            src={review!.profile_photo_url}
                            alt={review!.author_name}
                            className="rounded-full object-cover w-10 h-10"
                          />
                          <div>
                            <p className="text-sm font-medium">{review!.author_name}</p>
                            <p className="text-xs text-gray-500">
                              {new Date(review!.time * 1000).toLocaleDateString("en-IN")}
                            </p>
                          </div>
                        </div>

                        <div className="text-orange-400 mb-6">
                          {"★★★★★".slice(0, review!.rating)}
                          {"☆☆☆☆☆".slice(0, 5 - review!.rating)}
                        </div>

                        <p className="text-sm text-gray-600 line-clamp-4">
                          {review!.text}
                        </p>
                      </>
                    )}
                  </div>
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>

        <div className="text-center mt-8">
          <Link href="/reviews">
            <div className="group font-semibold flex items-center justify-center gap-2 text-black text-lg tracking-wide transition-all duration-300 cursor-pointer">
              <span className="transition-all duration-300 group-hover:tracking-wider">
                View all testimonials
              </span>
              <i className="transition-transform duration-300 group-hover:translate-x-1">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-all duration-300 group-hover:scale-110"
                >
                  <path
                    d="M11 0C8.08262 0 5.28473 1.15893 3.22183 3.22183C1.15893 5.28473 0 8.08262 0 11C0 13.9174 1.15893 16.7153 3.22183 18.7782C5.28473 20.8411 8.08262 22 11 22C12.4445 22 13.8749 21.7155 15.2095 21.1627C16.5441 20.6099 17.7567 19.7996 18.7782 18.7782C19.7996 17.7567 20.6099 16.5441 21.1627 15.2095C21.7155 13.8749 22 12.4445 22 11C22 9.55546 21.7155 8.12506 21.1627 6.79048C20.6099 5.4559 19.7996 4.24327 18.7782 3.22183C17.7567 2.20038 16.5441 1.39013 15.2095 0.837325C13.8749 0.284523 12.4445 0 11 0ZM8.91579 16.7895L7.29474 15.1476L11.4307 11L7.29474 6.85242L8.92737 5.21053L14.7168 11L8.91579 16.7895Z"
                    fill="#005A8B"
                  />
                </svg>
              </i>
            </div>
          </Link>
        </div>
      </div>

    </div>
  );
}




