import { NextResponse } from "next/server";
import reviewsData from "@/data/reviews.json";

export async function GET() {
  try {
    if (!reviewsData || reviewsData.length === 0) {
      return NextResponse.json({ error: "No reviews found in JSON." }, { status: 404 });
    }

    const first = (reviewsData as any)[0];
    
    return NextResponse.json({
      name: first.name,
      rating: first.rating,
      user_ratings_total: first.reviews,
      reviews: (reviewsData as any[]).slice(0, 15).map((r: any) => ({
        author_name: r.author_title,
        profile_photo_url: r.author_image,
        rating: r.review_rating,
        text: r.review_text,
        time: r.review_timestamp,
      })),
    });
  } catch (err: any) {
    console.error("[google-reviews] error:", err);
    return NextResponse.json(
      { error: "Failed to load Google Reviews from JSON." },
      { status: 500 }
    );
  }
}
