import Image from "next/image";

const cards = [
  {
    title: "Top MBBS colleges",
    subtitle: "India",
    img: "/images/cat-india.webp",
  },
  {
    title: "Top MBBS colleges",
    subtitle: "Abroad",
    img: "/images/cat-abroad.webp",
  },
  {
    title: "NEET Counselling",
    subtitle: "Updates",
    img: "/images/cat-neet.webp",
  },
  {
    title: "Blogs &",
    subtitle: "News",
    img: "/images/cat-news.webp",
  },
];

const data = [
  {
    title: "Personal Counsellor",
    img: "/images/p-counsellor.webp",
  },
  {
    title: "Videos and Webinars",
    img: "/images/v-webinar.webp",
  },
];

export default function CategoryCards() {
  return (
    <>

      <div className="flex gap-4 md:gap-6 overflow-x-auto md:overflow-visible scrollbar-hide lg:px-20 mb-10">

        {cards.map((item, index) => (
          <div
            key={index}
            className="group w-[242px] h-[249.93px] rounded-3xl overflow-hidden relative cursor-pointer
              transition-all duration-300 hover:shadow-xl flex-shrink-0"
          >

            {/* Image */}
            <div className="relative w-full h-full">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

            {/* Text */}
            <div className="absolute bottom-0 left-0 right-0 text-center px-2 py-3 bg-white/70">
              <h3 className="text-black text-lg font-semibold leading-tight">
                {item.title}
              </h3>
              <p className="text-black">
                {item.subtitle}
              </p>
            </div>

          </div>
        ))}

      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:px-20">

        {data.map((item, index) => (
          <div
            key={index}
            className="group relative w-[519.04px] h-[122.13px] rounded-3xl overflow-hidden cursor-pointer mx-auto md:mx-0"
          >

            {/* Background Image */}
            <Image
              src={item.img}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/20"></div>

            {/* Center Pill */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="
                  px-6 md:px-8 py-2 md:py-3
                  rounded-[15px]
                  bg-white/70
                  backdrop-blur-md
                  text-gray-800
                  font-medium
                  text-sm md:text-base
                  shadow-md
                ">
                {item.title}
              </div>
            </div>

          </div>
        ))}

      </div>
    </>
  );
}