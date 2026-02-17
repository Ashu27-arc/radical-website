"use client";

export default function Earth3D() {
  return (
    <div className="w-full h-[50vh] md:h-[100vh] relative">
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/earth2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
