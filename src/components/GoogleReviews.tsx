"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Skeleton } from "primereact/skeleton";
import { Button } from "primereact/button";

/* ---------------- DEMO DATA ---------------- */
const DEMO_DATA = {
  name: "Radical Education | RDLEDU Pvt Ltd",
  rating: 4.9,
  user_ratings_total: 69,
  reviews: [
    {
      author_name: "Farzan Danish",
      profile_photo_url: "https://i.pravatar.cc/150?img=3",
      rating: 5,
      text:
        "Krystal Covington is a business growth strategist with 15 years of experience in marketing and public relations.",
      time: 1712121600,
    },
    {
      author_name: "Aman Sharma",
      profile_photo_url: "https://i.pravatar.cc/150?img=5",
      rating: 5,
      text:
        "Excellent guidance and transparent counselling process. Highly recommended for MBBS abroad.",
      time: 1712035200,
    },
    {
      author_name: "Neha Verma",
      profile_photo_url: "https://i.pravatar.cc/150?img=8",
      rating: 4,
      text:
        "Professional team with great support throughout the admission process.",
      time: 1711948800,
    },
  ],
};

export default function GoogleReviews() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<typeof DEMO_DATA | null>(null);

  useEffect(() => {
    // ⏳ simulate API delay (Skeleton guaranteed)
    const timer = setTimeout(() => {
      setData(DEMO_DATA);
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
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
                            <Image src="/images/favicon.webp" width={60} height={65} className="w-full h-full" alt=""/>
                        </div>
                    </div>
                    <h2 className="text-2xl font-semibold text-[#005A8B] m-0">{data?.name}</h2>
                </div>
              

              <div className="flex items-center gap-2 mt-2 mb-4">
                <div className="text-orange-400">
                  {"★★★★★".slice(0, Math.round(data!.rating))}
                </div>
                <span className="text-sm text-gray-600">
                  {data?.user_ratings_total} Google Reviews
                </span>
              </div>

              <Button rounded size="small" className="bg-[#005A8B]! border-[#005A8B]!">
                Write a Review
              </Button>
            </>
          )}
        </div>

        {/* REVIEW CARDS */}
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(loading ? Array(3).fill(null) : data?.reviews)?.map((review: any, i) => (
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
                    <Image
                      src={review.profile_photo_url}
                      alt={review.author_name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <p className="text-sm font-medium">{review.author_name}</p>
                      <p className="text-xs text-gray-500">
                        {new Date(review.time * 1000).toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  <div className="text-orange-400 mb-2">
                    {"★★★★★".slice(0, review.rating)}
                  </div>

                  <p className="text-sm text-gray-600 line-clamp-4">
                    {review.text}
                  </p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
  );
}

