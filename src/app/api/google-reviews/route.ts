import { NextResponse } from "next/server";

// Google Places API – server-side only (API key browser mein nahi jayegi)
// Required env vars (in .env.local):
//   GOOGLE_PLACES_API_KEY  – your Google Cloud API key (Places API enabled)
//   GOOGLE_PLACE_ID        – your business Place ID

const PLACE_ID = process.env.GOOGLE_PLACE_ID;
const API_KEY = process.env.GOOGLE_PLACES_API_KEY;

// Cache response for 1 hour to avoid quota burn
export const revalidate = 3600;

export async function GET() {
  if (!API_KEY || !PLACE_ID) {
    return NextResponse.json(
      { error: "Google Places API key or Place ID not configured." },
      { status: 500 }
    );
  }

  const fields = "name,rating,user_ratings_total,reviews";
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=${fields}&key=${API_KEY}&reviews_sort=newest`;

  try {
    const res = await fetch(url, { next: { revalidate: 3600 } });

    if (!res.ok) {
      return NextResponse.json(
        { error: `Google API responded with status ${res.status}` },
        { status: 502 }
      );
    }

    const json = await res.json();

    if (json.status !== "OK") {
      return NextResponse.json(
        { error: `Google Places error: ${json.status} – ${json.error_message ?? ""}` },
        { status: 502 }
      );
    }

    const place = json.result;

    return NextResponse.json({
      name: place.name ?? "",
      rating: place.rating ?? 0,
      user_ratings_total: place.user_ratings_total ?? 0,
      reviews: (place.reviews ?? []).map((r: any) => ({
        author_name: r.author_name,
        profile_photo_url: r.profile_photo_url,
        rating: r.rating,
        text: r.text,
        time: r.time, // Unix timestamp (seconds)
      })),
    });
  } catch (err: any) {
    console.error("[google-reviews] fetch error:", err);
    return NextResponse.json(
      { error: "Failed to fetch Google Reviews." },
      { status: 500 }
    );
  }
}
