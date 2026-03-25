import Image from "next/image";

const data = [
  {
    title: "Too Many Decisions, Too Little Time",
    desc: "You're expected to analyse, compare, and decide quickly — often within days and at a very short notice.",
    img: "/images/decision.webp",
  },
  {
    title: "Deadlines Are Unforgiving",
    desc: "Miss 1 step— registration, choice filling, reporting and you're out of the process and there's no going back.",
    img: "/images/deadline.webp",
  },
  {
    title: "Information Is Fragmented",
    desc: "Data is spread across multiple websites, PDFs, and notices. There's no single place where everything comes together clearly.",
    img: "/images/info.webp",
  },
  {
    title: "Rank Vs College Gap",
    desc: "Your NEET rank doesn’t directly map to a college. The same rank can lead to completely different outcomes depending on state, category, and round.",
    img: "/images/rank.webp",
  },
  {
    title: "Seat Availability Is Not Fixed",
    desc: "Colleges, seats, and categories keep shifting across rounds. What’s available today may disappear — or open up — tomorrow.",
    img: "/images/seat.webp",
  },
  {
    title: "College Quality is Hard to Judge",
    desc: "On paper, most colleges look similar but factors like exposure, patient flow, and infrastructure vary widely.",
    img: "/images/quality.webp",
  },
];

export default function AdmissionReality() {
  return (


        <div className="mt-10 space-y-12">
          {data.map((item, index) => {
            const isReverse = index % 2 !== 0;

            return (
              <div
                key={index}
                className={`group flex flex-col md:flex-row items-center gap-6 md:gap-10 
                p-4 md:p-6 rounded-4xl transition-all duration-300 ease-in-out
                hover:shadow-xl bg-white hover:bg-white
                ${
                  isReverse ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className="w-full md:w-1/3">
                  <div className="rounded-4xl overflow-hidden shadow-md">
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={400}
                      height={250}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>

                {/* Text */}
                <div
                  className={`w-full md:w-2/3 text-center 
                  ${isReverse ? "md:text-right" : "md:text-left"}`}
                >
                  <h3 className="font-semibold text-gray-900 text-2xl">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-xl mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>


  );
}