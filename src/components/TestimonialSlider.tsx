'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const testimonials = [
  {
    name: "Mishthi Tiwari",
    subtitle: "BAMS - Quadra Institute Of Ayurveda, Roorkee",
    content:
      "Radical Education’s counseling was amazing! They gave me the right study tips, helped with time management, and kept me motivated. I’m now in my dream medical college!",
    image: "/images/testi1.webp",
  },
  {
    name: "Astha Bhatnagar",
    subtitle: "BAMS - DY Patil, Navi Mumbai",
    content:
      "Radical Education Review is the best educational guide. With their expert advice, I secured admission to a medical college. Highly recommend them for MBBS admission and MCC counselling.",
    image: "/images/testi2.webp",
  },
  {
    name: "Aishwarya Singh",
    subtitle: "BAMS - Uttaranchal Ayurvedic College, Uttarakhand",
    content:
      "Team Radical Education provided unmatched clarity at every step. With their best counselors, I successfully got admission to a BAMS college in Uttarakhand.",
    image: "/images/testi3.webp",
  },
  {
    name: "Harsh Kumar",
    subtitle: "BAMS - Satya Ayurvedic Medical College, Haryana",
    content:
      "They helped me through every step of my NEET counseling and admission process. Clear guidance and professional support helped me save my year.",
    image: "/images/testi4.webp",
  },
  {
    name: "Praveen",
    subtitle: "BAMS - Kaya Ayurvedic College, Nainital",
    content:
      "The team handled registration, choice filling, and documentation during counseling. Their support helped me secure admission and save my academic year.",
    image: "/images/testi5.webp",
  },
  {
    name: "Zoha Azeem",
    subtitle: "BAMS - JSPS Govt Homoeopathic Medical College, Hyderabad",
    content:
      "Raj Kishore sir helped me at every step of the counseling procedure. He cleared all my doubts and ensured my admission was secured successfully.",
    image: "/images/testi6.webp",
  },
  {
    name: "Prerna",
    subtitle: "BDS - SGT Dental College, Gurugram",
    content:
      "Radical Education’s expert counselors helped me explore my career options and choose the right path. Their advice made a huge impact.",
    image: "/images/testi7.webp",
  },
  {
    name: "Sheetal Kumari",
    subtitle: "BHMS - NSS Homoeopathic Medical College, Kerala",
    content:
      "Radical Education provided me with the right resources and motivation. Because of them, I got into my preferred medical college.",
    image: "/images/testi8.webp",
  },
  {
    name: "Anshul",
    subtitle: "MBBS - Rama Medical College, Hapur",
    content:
      "With Amar sir and his team’s support, I successfully secured an MBBS seat. I highly recommend NEET students connect with Radical Education.",
    image: "/images/testi9.webp",
  },
  {
    name: "Dhruvika Aggarwal",
    subtitle: "MBBS - Rama Medical College, Hapur",
    content:
      "Their detailed counseling on career options, study strategies, and mental well-being made all the difference during NEET preparation.",
    image: "/images/testi10.webp",
  },
  {
    name: "Abhay Raj Singh",
    subtitle: "MBBS - Integral Medical College, Lucknow",
    content:
      "Thanks to Radical Education’s guidance, I successfully got admission to a medical college. Highly trusted and effective counseling team.",
    image: "/images/testi11.webp",
  },
  {
    name: "Ansh Sharma",
    subtitle: "MBBS - Venkateshwara Medical College, Amroha",
    content:
      "Radical Education Review guided me through the complex admission process. Their team is highly professional and reliable.",
    image: "/images/testi12.webp",
  },
  {
    name: "Ronit Roy",
    subtitle: "MBBS - Rama Medical College, Hapur",
    content:
      "Radical Education’s expert mentorship guided me every step of the way. I’m proud to be a medical student today.",
    image: "/images/testi13.webp",
  },
  {
    name: "Shreya Parmar",
    subtitle: "MBBS - JNU Institute of Medical Sciences, Jaipur",
    content:
      "Alok sir and the team handled all my admission procedures and queries. Their support helped me secure admission despite low marks.",
    image: "/images/testi14.webp",
  },
  {
    name: "Om Chaturvedi",
    subtitle: "MBBS - Sudha Medical College, Kota",
    content:
      "This was my first NEET attempt and I had no idea about counseling. Amar sir and Shivanshu sir supported me throughout the process.",
    image: "/images/testi15.webp",
  },
  {
    name: "Arjun Kaushal",
    subtitle: "MBBS - Raja Rajeswari Medical College",
    content:
      "Alok sir guided me through counseling, documentation, and reporting. His support was extremely helpful for me and my parents.",
    image: "/images/testi16.webp",
  },
  {
    name: "Vipin Kumar",
    subtitle: "MBBS - Pacific Medical College, Udaipur",
    content:
      "Radical Education’s counseling helped me turn my passion into a career. Their professional advice gave me clarity and confidence.",
    image: "/images/testi17.webp",
  },
  {
    name: "Mishty Gautam",
    subtitle: "MBBS - Pacific Medical College, Udaipur",
    content:
      "Radical Education’s counselors offered insightful advice that helped me choose the right career path in medicine.",
    image: "/images/testi18.webp",
  },
  {
    name: "Annie Attri",
    subtitle: "MBBS - Pacific Medical College, Udaipur",
    content:
      "Alok sir guided us with all possible options as per my NEET score. Their team handled everything from registration to reporting.",
    image: "/images/testi19.webp",
  },
  {
    name: "Tushar Arora",
    subtitle: "MBBS - Pacific Medical College, Udaipur",
    content:
      "Radical Education’s counselors provided the best advice and motivation. Their support helped me secure my place in medical college.",
    image: "/images/testi20.webp",
  },
];


export default function TestimonialSlider() {
  return (
      <div className="relative">
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: '.testimonial-next',
            prevEl: '.testimonial-prev',
          }}
          className="relative"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
                <div>
                  <p className="text-lg leading-relaxed italic mb-6">
                    “{item.content}”
                  </p>

                  <div className="flex items-center gap-4">
                    <span className="w-1 h-12 bg-emerald-400"></span>
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-gray-300">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="flex mt-6">
                    {[1, 2, 3].map((_, i) => (
                      <img
                        key={i}
                        src={item.image}
                        alt={item.name}
                        className="w-10 h-10 rounded-full border-2 border-black -ml-3 first:ml-0 object-cover"
                      />
                    ))}
                  </div>
                </div>
            </SwiperSlide>
          ))}

          {/* Navigation Arrows */}
          <div className="absolute bottom-0 right-0 flex gap-3 mt-10 z-3">
            <button className="cursor-pointer testimonial-prev w-10 h-10 border border-white/40 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition">
              ←
            </button>
            <button className="cursor-pointer testimonial-next w-10 h-10 border border-white/40 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition">
              →
            </button>
          </div>
        </Swiper>
      </div>
  );
}

