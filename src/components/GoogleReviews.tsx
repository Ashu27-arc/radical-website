"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Skeleton } from "primereact/skeleton";
import { Button } from "primereact/button";

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
  name: "Radical Education | RDLEDU Pvt Ltd",
  rating: 4.9,
  user_ratings_total: 127,
  reviews: [
    {
      author_name: "Sonam Yadav",
      profile_photo_url: "/images/Sonam-Yadav.webp",
      rating: 5,
      text: "My experience with Radical education is amazing. Staff is very helpful to educate the students about their future assignments of professional life. If you are looking for a professional counseling place you must go through Radical education. They are commended for managing complex counseling, documentation and choice filling procedures. Mentors are professional and approachable, provides individual attention for career options and admission strategies.",
      time: 1712121600,
    },
    {
      author_name: "Ajay Kumar",
      profile_photo_url: "/images/Ajay-Kumar.webp",
      rating: 5,
      text: "I m Saloni a mbbs student Radical education counselors are very expert and experienced n amazing. They helped me to get best govt mbbs college till last round.they behaved like a family members. I m thankful of  all radical education team members.thanku so much. I advice all of you to take helping for the counselling.",
      time: 1712035200,
    },
    {
      author_name: "Sangam",
      profile_photo_url: "/images/Sangam.webp",
      rating: 5,
      text: "Too good and staff was very friendly 😊 Vibe was also too good ❤️Go for it guyzzz ✨",
      time: 1711948800,
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
          setData(FALLBACK_DATA); // graceful fallback
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchReviews();
    return () => { cancelled = true; };
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

      {/* LEFT PANEL */}
      <div>
        {loading ? (
          <>
            <Skeleton height="1.8rem" width="90%" />
            <Skeleton height="1rem" width="70%" className="mt-2" />
            <Skeleton height="2.5rem" width="150px" className="mt-5 rounded-full" />
          </>
        ) : (
          <>
            <div className="flex items-center gap-3">
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
                {data?.name}
              </h2>
            </div>

            <div className="flex items-center gap-2 mt-2 mb-4">
              <div className="text-orange-400">
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

      {/* REVIEW CARDS */}
      <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {(loading ? Array(3).fill(null) : data?.reviews)?.map(
          (review: Review | null, i) => (
            <div key={i} className="border rounded-xl p-5 shadow-sm bg-white">
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
                    {/* Use <img> for external Google profile photos to avoid next/image domain restrictions */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={review!.profile_photo_url}
                      alt={review!.author_name}
                      width={40}
                      height={40}
                      className="rounded-full object-cover w-10 h-10"
                      onError={(e) => {
                        // Fallback avatar if Google photo 403s
                        (e.currentTarget as HTMLImageElement).src =
                          `https://ui-avatars.com/api/?name=${encodeURIComponent(review!.author_name)}&background=005A8B&color=fff&size=40`;
                      }}
                    />
                    <div>
                      <p className="text-sm font-medium">{review!.author_name}</p>
                      <p className="text-xs text-gray-500">
                        {new Date(review!.time * 1000).toLocaleDateString("en-IN", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                  </div>

                  <div className="text-orange-400 mb-2">
                    {"★★★★★".slice(0, review!.rating)}
                    {"☆☆☆☆☆".slice(0, 5 - review!.rating)}
                  </div>

                  <p className="text-sm text-gray-600 line-clamp-4">
                    {review!.text}
                  </p>
                </>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
}
