const data = [
  {
    title: "Too Many Decisions, Too Little Time",
    desc: "You're expected to analyse, compare, and decide quickly — often within days and at a very short notice.",
    img: "/img/ar/ar-1.webp",
  },
  {
    title: "Deadlines Are Unforgiving",
    desc: "Miss 1 step— registration, choice filling, reporting and you're out of the process and there's no going back.",
    img: "/img/ar/ar-2.webp",
  },
  {
    title: "Information Is Fragmented",
    desc: "Data is spread across multiple websites, PDFs, and notices. There's no single place where everything comes together clearly.",
    img: "/img/ar/ar-3.webp",
  },
  {
    title: "Rank Vs College Gap",
    desc: "Your NEET rank doesn't directly map to a college. The same rank can lead to completely different outcomes depending on state, category, and round.",
    img: "/img/ar/ar-4.webp",
  },
  {
    title: "Seat Availability Is Not Fixed",
    desc: "Colleges, seats, and categories keep shifting across rounds. What's available today may disappear — or open up — tomorrow.",
    img: "/img/ar/ar-5.webp",
  },
  {
    title: "College Quality is Hard to Judge",
    desc: "On paper, most colleges look similar but factors like exposure, patient flow, and infrastructure vary widely.",
    img: "/img/ar/ar-6.webp",
  },
];

import Image from "next/image";

export default function AdmissionReality() {
  return (
    <div className="space-y-10">
      {data.map((item, index) => {
        const isReverse = index % 2 !== 0;
        return (
          <div
            key={index}
            className={`group flex flex-col md:flex-row items-center gap-6 md:gap-8 
                px-4 md:px-6 py-0 rounded-4xl transition-all duration-300 ease-in-out
                ${isReverse ? "md:flex-row-reverse" : ""
              }`}
          >
            {/* Image */}
            <div className="flex-shrink-0">
              <div className="rounded-[20px] overflow-hidden brightness-110">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={260}
                  height={160}
                  className="block w-[260px] h-[160px] object-cover rounded-[20px]"
                />
              </div>
            </div>

            {/* Text */}
            <div
              className={`w-full md:w-2/3 text-center 
                  ${isReverse ? "md:text-right" : "md:text-left"}`}
            >
              <h3 className="font-semibold text-gray-900 text-lg">
                {item.title}
              </h3>
              <p className="text-gray-600 text-lg mt-2 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}