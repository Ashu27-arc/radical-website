"use client";

import Image from "next/image";
import Link from "next/link";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";


import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";



const logos = [
    "/images/c-logo1.webp",
    "/images/c-logo2.webp",
    "/images/c-logo3.webp",
    "/images/c-logo4.webp",
    "/images/c-logo5.webp",
    "/images/c-logo6.webp",
    "/images/c-logo7.webp",
];

export default function MBBSAbroadAdmission() {
    const countries = [
        {
            id: 1,
            name: "Bangladesh",
            slug: "bangladesh",
            flag: "/images/bangladesh.webp",
            image: "/images/study-abroad/bangladesh.webp",
            likes: "2K",
            comments: "123",
            shares: "40",
            views: "160",
            users: [
                { name: "Aarav Raj", avatar: "/images/testi19.webp" },
                { name: "Navnit", avatar: "/images/testi20.webp" },
                { name: "Naman", avatar: "/images/testi1.webp" },
            ],
            description:
                "MBBS in Bangladesh offers affordable fees, NMC-approved colleges, English-medium education, similar curriculum to India, and strong clinical exposure, making it a preferred choice for Indian students.",
        },
        {
            id: 2,
            name: "Georgia",
            slug: "georgia",
            flag: "/images/georgia.webp",
            image: "/images/study-abroad/georgia.webp",
            likes: "1K",
            comments: "60",
            shares: "25",
            views: "80",
            users: [
                { name: "Aarav Raj", avatar: "/images/testi13.webp" },
                { name: "Navnit", avatar: "/images/testi14.webp" },
                { name: "Naman", avatar: "/images/testi15.webp" },
            ],
            description:
                "MBBS in Georgia offers affordable tuition, globally recognized degrees, English-medium programs, modern universities, and excellent clinical exposure, making it a popular choice for international students.",
        },
        {
            id: 3,
            name: "Kazakhstan",
            slug: "kazakhstan",
            flag: "/images/kazakhstan.webp",
            image: "/images/study-abroad/kazakhstan.webp",
            likes: "1K",
            comments: "143",
            shares: "8",
            views: "257",
            users: [
                { name: "Aarav Raj", avatar: "/images/testi4.webp" },
                { name: "Navnit", avatar: "/images/testi5.webp" },
                { name: "Naman", avatar: "/images/testi6.webp" },
            ],
            description:
                "MBBS in Kazakhstan offers low tuition fees, globally recognized degrees, English-medium education, modern medical universities, and strong clinical exposure, making it an affordable and reliable option for Indian students.",
        },
        {
            id: 4,
            name: "Kyrgyzstan",
            slug: "kyrgyzstan",
            flag: "/images/study-abroad/flags/kyrgistan.webp",
            image: "/images/study-abroad/kyrgistan.webp",
            likes: "4K",
            comments: "23",
            shares: "40",
            views: "10",
            users: [
                { name: "Aarav Raj", avatar: "/images/study-abroad/testimonials/testi1.webp" },
                { name: "Navnit", avatar: "/images/study-abroad/testimonials/testi2.webp" },
                { name: "Naman", avatar: "/images/study-abroad/testimonials/testi3.webp" },
            ],
            description:
                "MBBS in Kyrgyzstan is an excellent alternative as the course fee is comparatively low while maintaining global recognition. The facilities are up to date, and the admission procedure is quite simple",
        },

        {
            id: 5,
            name: "Nepal",
            slug: "nepal",
            flag: "/images/nepal.webp",
            image: "/images/study-abroad/nepal.webp",
            likes: "24K",
            comments: "230",
            shares: "9",
            views: "12",
            users: [
                { name: "Aarav Raj", avatar: "/images/testi7.webp" },
                { name: "Navnit", avatar: "/images/testi8.webp" },
                { name: "Naman", avatar: "/images/testi9.webp" },
            ],
            description:
                "MBBS in Nepal offers affordable fees, recognized degrees, English-medium education, and strong clinical exposure, making it an affordable and reliable option for Indian students.",
        },
        {
            id: 6,
            name: "Russia",
            slug: "russia",
            flag: "/images/russia.webp",
            image: "/images/study-abroad/russia.webp",
            likes: "5K",
            comments: "120",
            shares: "12",
            views: "27",
            users: [
                { name: "Aarav Raj", avatar: "/images/testi1.webp" },
                { name: "Navnit", avatar: "/images/testi2.webp" },
                { name: "Naman", avatar: "/images/testi3.webp" },
            ],
            description:
                "MBBS in Russia offers affordable fees, globally recognized degrees, English-medium education, modern facilities, and quality clinical exposure, making it a smart choice for Indian medical aspirants.",
        },
        {
            id: 7,
            name: "Singapore",
            slug: "singapore",
            flag: "/images/singapore.webp",
            image: "/images/study-abroad/singapore.webp",
            likes: "8K",
            comments: "100",
            shares: "7",
            views: "182",
            users: [
                { name: "Aarav Raj", avatar: "/images/testi19.webp" },
                { name: "Navnit", avatar: "/images/testi20.webp" },
                { name: "Naman", avatar: "/images/testi1.webp" },
            ],
            description:
                "MBBS in Singapore offers world-class medical education, globally prestigious universities, advanced healthcare infrastructure, strong clinical training, and excellent international exposure for aspiring doctors.",
        },
        {
            id: 8,
            name: "Uzbekistan",
            slug: "uzbekistan",
            flag: "/images/uzbekistan.webp",
            image: "/images/study-abroad/uzbekistan.webp",
            likes: "1K",
            comments: "136",
            shares: "12",
            views: "80",
            users: [
                { name: "Aarav Raj", avatar: "/images/testi10.webp" },
                { name: "Navnit", avatar: "/images/testi11.webp" },
                { name: "Naman", avatar: "/images/testi12.webp" },
            ],
            description:
                "MBBS in Uzbekistan offers low tuition fees, WHO-recognized universities, English-medium education, modern infrastructure, and good clinical exposure, making it a cost-effective option for medical aspirants.",
        },
    ];




    const data = [
        {
            country: "Bangladesh",
            flag: "/images/bangladesh.webp",
            academic: { inr: "USD 36,000", usd: "" },
            hostel: { inr: "Included in academic charges", usd: "" },
            total: { inr: "USD 36,000", usd: "" },
        },
        {
            country: "Georgia",
            flag: "/images/georgia.webp",
            academic: { inr: "USD 30,000", usd: "" },
            hostel: { inr: "USD 18,000", usd: "" },
            total: { inr: "USD 48,000", usd: "" },
        },
        {
            country: "Kazakhstan",
            flag: "/images/kazakhstan.webp",
            academic: { inr: "USD 22,200", usd: "" },
            hostel: { inr: "USD 9,600", usd: "" },
            total: { inr: "USD 31,800", usd: "" },
        },
        {
            country: "Kyrgyzstan",
            flag: "/images/study-abroad/flags/kyrgistan.webp",
            academic: { inr: "INR 21,90,000", usd: "" },
            hostel: { inr: "Included in academic charges", usd: "" },
            total: { inr: "INR 21,90,000", usd: "" },
        },
        {
            country: "Nepal",
            flag: "/images/nepal.webp",
            academic: { inr: "INR 50,00,000", usd: "" },
            hostel: { inr: "INR 6,34,500", usd: "" },
            total: { inr: "INR 56,34,500", usd: "" },
        },
        {
            country: "Russia",
            flag: "/images/russia.webp",
            academic: { inr: "RB 12,00,000", usd: "" },
            hostel: { inr: "RB 9,69,024", usd: "" },
            total: { inr: "RB 21,69,024", usd: "" },
        },
        {
            country: "Singapore",
            flag: "/images/singapore.webp",
            academic: { inr: "S$ 373,750", usd: "" },
            hostel: { inr: "S$ 50,100", usd: "" },
            total: { inr: "S$ 423,850", usd: "" },
        },
        {
            country: "Uzbekistan",
            flag: "/images/uzbekistan.webp",
            academic: { inr: "USD 22,000", usd: "" },
            hostel: { inr: "USD 8,000", usd: "" },
            total: { inr: "USD 30,000", usd: "" },
        },
    ];

    return (
        <div className="min-h-screen">
            <FloatingWhatsApp />

            <section className="w-full min-h-[500px] md:min-h-[550px] 
                bg-[url('/images/study-abroad-banner.webp')] 
                bg-cover bg-center bg-no-repeat 
                py-20 md:py-40 overflow-hidden">
                <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">

                    <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 text-center lg:text-left">
                        Study <span className="text-[#F9F500]">abroad</span>
                    </h1>
                    <p className="text-white/80 mt-4 max-w-xl text-lg mb-8 text-center lg:text-left">
                        Your gateway to world-class education and global medical careers. From application to admission—we guide your medical journey
                    </p>

                    <div className="relative max-w-xl">

                        <Swiper
                            modules={[Autoplay]}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            spaceBetween={20}
                            slidesPerView={3}
                            breakpoints={{
                                768: { slidesPerView: 4 },
                                1024: { slidesPerView: 6 },
                            }}
                        >
                            {countries.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div className="flex flex-col items-center relative">
                                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
                                            <Image
                                                src={item.flag}
                                                alt={item.name}
                                                width={48}
                                                height={48}
                                            />
                                        </div>
                                        <div className="mt-2">

                                            <svg width="15" height="20" viewBox="0 0 7 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.125 0C1.3998 0 0 1.25996 0 2.8125C0 5.3125 3.125 8.75 3.125 8.75C3.125 8.75 6.25 5.3125 6.25 2.8125C6.25 1.25996 4.8502 0 3.125 0ZM3.125 4.375C2.87777 4.375 2.6361 4.30169 2.43054 4.16434C2.22498 4.02699 2.06476 3.83176 1.97015 3.60335C1.87554 3.37495 1.85079 3.12361 1.89902 2.88114C1.94725 2.63866 2.0663 2.41593 2.24112 2.24112C2.41593 2.0663 2.63866 1.94725 2.88114 1.89902C3.12361 1.85079 3.37495 1.87554 3.60335 1.97015C3.83176 2.06476 4.02699 2.22498 4.16434 2.43054C4.30169 2.6361 4.375 2.87777 4.375 3.125C4.37464 3.45641 4.24283 3.77414 4.00848 4.00848C3.77414 4.24283 3.45641 4.37464 3.125 4.375Z" fill="white" />
                                            </svg>

                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <svg className="w-full h-auto mt-6" width="386" height="18" viewBox="0 0 386 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.00190401 12.6855L4.33203 17.0157L8.66216 12.6855L4.33203 8.35542L0.00190401 12.6855ZM385.662 12.6855L381.332 8.35542L377.002 12.6855L381.332 17.0157L385.662 12.6855ZM345.354 10.8052L344.895 11.3985L345.354 10.8052ZM311.757 11.0867L312.184 11.7035L311.757 11.0867ZM324.265 2.43294L324.691 3.04971L324.265 2.43294ZM334.891 2.71448L335.35 2.12118L334.891 2.71448ZM263.033 2.21656L263.452 1.59468L263.033 2.21656ZM252.694 2.4111L252.252 1.80543L252.694 2.4111ZM179.22 1.873L178.822 1.23728L179.22 1.873ZM189.209 2.16516L188.775 2.77653L189.209 2.16516ZM164.139 11.3141L164.537 11.9498L164.139 11.3141ZM108.037 1.80377L107.636 1.17021L108.037 1.80377ZM131.868 11.1921L132.281 10.5666L131.868 11.1921ZM57.7818 10.7246L57.3144 11.3112L57.7818 10.7246ZM28.4724 10.5837L28.9542 11.1586L28.4724 10.5837ZM37.0342 3.40911L36.5525 2.83426L37.0342 3.40911ZM276.282 11.1481L276.701 10.5262L276.282 11.1481ZM201.673 11.022L202.108 10.4106L201.673 11.022ZM6.62701 13.4355C7.04123 13.4355 7.37701 13.0998 7.37701 12.6855C7.37701 12.2713 7.04123 11.9355 6.62701 11.9355V12.6855V13.4355ZM11.217 11.9355C10.8028 11.9355 10.467 12.2713 10.467 12.6855C10.467 13.0998 10.8028 13.4355 11.217 13.4355V12.6855V11.9355ZM15.8069 13.4355C16.2211 13.4355 16.5569 13.0998 16.5569 12.6855C16.5569 12.2713 16.2211 11.9355 15.8069 11.9355V12.6855V13.4355ZM20.3969 11.9355C19.9827 11.9355 19.6469 12.2713 19.6469 12.6855C19.6469 13.0998 19.9827 13.4355 20.3969 13.4355V12.6855V11.9355ZM24.3834 13.2877C24.7913 13.2159 25.0638 12.8269 24.9919 12.419C24.92 12.011 24.5311 11.7386 24.1231 11.8105L24.2533 12.5491L24.3834 13.2877ZM26.8134 10.8323C26.4546 11.0392 26.3314 11.4979 26.5383 11.8567C26.7453 12.2155 27.2039 12.3386 27.5627 12.1317L27.1881 11.482L26.8134 10.8323ZM31.0946 9.36493C31.4121 9.09888 31.4538 8.62584 31.1877 8.30836C30.9217 7.99088 30.4487 7.94918 30.1312 8.21523L30.6129 8.79008L31.0946 9.36493ZM34.412 4.62792C34.0946 4.89396 34.0529 5.367 34.3189 5.68448C34.585 6.00196 35.058 6.04366 35.3755 5.77762L34.8938 5.20277L34.412 4.62792ZM39.9473 2.57057C40.3357 2.4267 40.534 1.99519 40.3901 1.60677C40.2462 1.21834 39.8147 1.02008 39.4263 1.16395L39.6868 1.86726L39.9473 2.57057ZM45.976 1.08292C45.5842 0.948711 45.1577 1.15758 45.0235 1.54945C44.8893 1.94131 45.0982 2.36779 45.49 2.502L45.733 1.79246L45.976 1.08292ZM50.2953 5.71891C50.6193 5.97702 51.0911 5.92364 51.3492 5.59967C51.6074 5.27571 51.554 4.80384 51.23 4.54574L50.7627 5.13232L50.2953 5.71891ZM55.9094 8.27393C55.5855 8.01582 55.1136 8.0692 54.8555 8.39317C54.5974 8.71713 54.6508 9.189 54.9747 9.4471L55.4421 8.86052L55.9094 8.27393ZM58.6766 12.2206C59.0392 12.4209 59.4955 12.2892 59.6958 11.9266C59.896 11.564 59.7644 11.1078 59.4018 10.9075L59.0392 11.5641L58.6766 12.2206ZM62.009 11.8192C61.6006 11.7498 61.2133 12.0247 61.144 12.433C61.0747 12.8414 61.3495 13.2287 61.7579 13.298L61.8834 12.5586L62.009 11.8192ZM66.4975 13.4355C66.9117 13.4355 67.2475 13.0998 67.2475 12.6855C67.2475 12.2713 66.9117 11.9355 66.4975 11.9355V12.6855V13.4355ZM72.7125 11.9355C72.2983 11.9355 71.9625 12.2713 71.9625 12.6855C71.9625 13.0998 72.2983 13.4355 72.7125 13.4355V12.6855V11.9355ZM78.9275 13.4355C79.3417 13.4355 79.6775 13.0998 79.6775 12.6855C79.6775 12.2713 79.3417 11.9355 78.9275 11.9355V12.6855V13.4355ZM85.1425 11.9355C84.7283 11.9355 84.3925 12.2713 84.3925 12.6855C84.3925 13.0998 84.7283 13.4355 85.1425 13.4355V12.6855V11.9355ZM97.2106 9.55066C97.5605 9.32899 97.6645 8.86563 97.4428 8.51573C97.2211 8.16582 96.7578 8.06187 96.4079 8.28355L96.8092 8.91711L97.2106 9.55066ZM103.893 3.54132C103.543 3.763 103.439 4.22636 103.661 4.57626C103.883 4.92616 104.346 5.03011 104.696 4.80844L104.295 4.17488L103.893 3.54132ZM110.594 1.4716C110.992 1.35818 111.223 0.943285 111.11 0.544902C110.997 0.146518 110.582 -0.0844928 110.183 0.028924L110.389 0.750261L110.594 1.4716ZM115.708 0.083214C115.312 -0.0380098 114.893 0.184804 114.771 0.580881C114.65 0.976959 114.873 1.39632 115.269 1.51754L115.489 0.800376L115.708 0.083214ZM120.917 4.84848C121.263 5.077 121.728 4.98217 121.957 4.63669C122.185 4.29121 122.09 3.8259 121.745 3.59739L121.331 4.22294L120.917 4.84848ZM128.769 8.2435C128.424 8.01499 127.958 8.10981 127.73 8.45529C127.501 8.80077 127.596 9.26608 127.942 9.49459L128.355 8.86904L128.769 8.2435ZM139.649 13.4355C140.063 13.4355 140.399 13.0998 140.399 12.6855C140.399 12.2713 140.063 11.9355 139.649 11.9355V12.6855V13.4355ZM145.282 11.9355C144.867 11.9355 144.532 12.2713 144.532 12.6855C144.532 13.0998 144.867 13.4355 145.282 13.4355V12.6855V11.9355ZM150.914 13.4355C151.328 13.4355 151.664 13.0998 151.664 12.6855C151.664 12.2713 151.328 11.9355 150.914 11.9355V12.6855V13.4355ZM156.547 11.9355C156.133 11.9355 155.797 12.2713 155.797 12.6855C155.797 13.0998 156.133 13.4355 156.547 13.4355V12.6855V11.9355ZM168.307 9.58955C168.658 9.36977 168.765 8.90698 168.545 8.55588C168.325 8.20479 167.862 8.09834 167.511 8.31812L167.909 8.95384L168.307 9.58955ZM175.052 3.59756C174.701 3.81735 174.594 4.28014 174.814 4.63123C175.034 4.98233 175.497 5.08878 175.848 4.86899L175.45 4.23328L175.052 3.59756ZM181.835 1.53925C182.234 1.43079 182.471 1.01879 182.362 0.61903C182.254 0.219269 181.842 -0.0168769 181.442 0.091584L181.638 0.815416L181.835 1.53925ZM187.096 0.256948C186.703 0.125307 186.278 0.336968 186.146 0.729707C186.014 1.12244 186.226 1.54754 186.619 1.67918L186.857 0.968064L187.096 0.256948ZM191.891 4.99072C192.228 5.23065 192.697 5.15144 192.936 4.81379C193.176 4.47614 193.097 4.00792 192.76 3.76799L192.325 4.37936L191.891 4.99072ZM198.992 8.19639C198.654 7.95646 198.186 8.03568 197.946 8.37332C197.706 8.71097 197.785 9.17919 198.123 9.41912L198.557 8.80775L198.992 8.19639ZM210.487 13.4355C210.901 13.4355 211.237 13.0998 211.237 12.6855C211.237 12.2713 210.901 11.9355 210.487 11.9355V12.6855V13.4355ZM217.687 11.9355C217.273 11.9355 216.937 12.2713 216.937 12.6855C216.937 13.0998 217.273 13.4355 217.687 13.4355V12.6855V11.9355ZM224.888 13.4355C225.302 13.4355 225.638 13.0998 225.638 12.6855C225.638 12.2713 225.302 11.9355 224.888 11.9355V12.6855V13.4355ZM232.089 11.9355C231.675 11.9355 231.339 12.2713 231.339 12.6855C231.339 13.0998 231.675 13.4355 232.089 13.4355V12.6855V11.9355ZM244.364 9.42364C244.698 9.17935 244.771 8.71014 244.527 8.37563C244.283 8.04113 243.814 7.968 243.479 8.2123L243.922 8.81797L244.364 9.42364ZM249.328 3.94105C248.993 4.18535 248.92 4.65456 249.164 4.98906C249.409 5.32356 249.878 5.39669 250.212 5.15239L249.77 4.54672L249.328 3.94105ZM255.369 1.86003C255.762 1.72789 255.973 1.30253 255.841 0.909962C255.709 0.51739 255.283 0.306265 254.891 0.438402L255.13 1.14922L255.369 1.86003ZM260.764 0.327892C260.367 0.210616 259.949 0.437593 259.832 0.834858C259.715 1.23212 259.942 1.64924 260.339 1.76652L260.551 1.0472L260.764 0.327892ZM265.926 5.07133C266.269 5.30287 266.736 5.21215 266.967 4.86869C267.199 4.52524 267.108 4.05911 266.764 3.82757L266.345 4.44945L265.926 5.07133ZM273.389 8.29336C273.045 8.06182 272.579 8.15254 272.348 8.496C272.116 8.83945 272.207 9.30558 272.55 9.53712L272.97 8.91524L273.389 8.29336ZM284.478 13.4355C284.892 13.4355 285.228 13.0998 285.228 12.6855C285.228 12.2713 284.892 11.9355 284.478 11.9355V12.6855V13.4355ZM290.809 11.9355C290.395 11.9355 290.059 12.2713 290.059 12.6855C290.059 13.0998 290.395 13.4355 290.809 13.4355V12.6855V11.9355ZM297.14 13.4355C297.554 13.4355 297.89 13.0998 297.89 12.6855C297.89 12.2713 297.554 11.9355 297.14 11.9355V12.6855V13.4355ZM303.471 11.9355C303.057 11.9355 302.721 12.2713 302.721 12.6855C302.721 13.0998 303.057 13.4355 303.471 13.4355V12.6855V11.9355ZM315.311 9.54005C315.651 9.30437 315.737 8.83718 315.501 8.49655C315.265 8.15592 314.798 8.07084 314.457 8.30652L314.884 8.92328L315.311 9.54005ZM320.711 3.97962C320.371 4.2153 320.285 4.68249 320.521 5.02312C320.757 5.36375 321.224 5.44883 321.565 5.21315L321.138 4.59639L320.711 3.97962ZM327.031 1.92658C327.428 1.80843 327.654 1.39082 327.536 0.993812C327.418 0.596805 327 0.370743 326.603 0.488889L326.817 1.20773L327.031 1.92658ZM332.659 0.64933C332.269 0.510328 331.84 0.713959 331.701 1.10415C331.562 1.49435 331.765 1.92335 332.155 2.06235L332.407 1.35584L332.659 0.64933ZM337.048 5.33046C337.376 5.58385 337.847 5.52362 338.1 5.19595C338.353 4.86828 338.293 4.39724 337.966 4.14386L337.507 4.73716L337.048 5.33046ZM343.197 8.18921C342.869 7.93582 342.398 7.99604 342.145 8.32371C341.891 8.65139 341.952 9.12243 342.279 9.37581L342.738 8.78251L343.197 8.18921ZM353.399 13.4355C353.813 13.4355 354.149 13.0998 354.149 12.6855C354.149 12.2713 353.813 11.9355 353.399 11.9355V12.6855V13.4355ZM358.478 11.9355C358.063 11.9355 357.728 12.2713 357.728 12.6855C357.728 13.0998 358.063 13.4355 358.478 13.4355V12.6855V11.9355ZM363.556 13.4355C363.97 13.4355 364.306 13.0998 364.306 12.6855C364.306 12.2713 363.97 11.9355 363.556 11.9355V12.6855V13.4355ZM368.635 11.9355C368.221 11.9355 367.885 12.2713 367.885 12.6855C367.885 13.0998 368.221 13.4355 368.635 13.4355V12.6855V11.9355ZM373.714 13.4355C374.128 13.4355 374.464 13.0998 374.464 12.6855C374.464 12.2713 374.128 11.9355 373.714 11.9355V12.6855V13.4355ZM378.793 11.9355C378.378 11.9355 378.043 12.2713 378.043 12.6855C378.043 13.0998 378.378 13.4355 378.793 13.4355V12.6855V11.9355ZM4.33203 12.6855V13.4355H6.62701V12.6855V11.9355H4.33203V12.6855ZM11.217 12.6855V13.4355H15.8069V12.6855V11.9355H11.217V12.6855ZM20.3969 12.6855V13.4355H22.6919V12.6855V11.9355H20.3969V12.6855ZM22.6919 12.6855V13.4355C23.2622 13.4355 23.8281 13.3855 24.3834 13.2877L24.2533 12.5491L24.1231 11.8105C23.6533 11.8932 23.1745 11.9355 22.6919 11.9355V12.6855ZM27.1881 11.482L27.5627 12.1317C28.0512 11.85 28.517 11.5249 28.9542 11.1586L28.4724 10.5837L27.9907 10.0089C27.6208 10.3189 27.2267 10.594 26.8134 10.8323L27.1881 11.482ZM28.4724 10.5837L28.9542 11.1586L31.0946 9.36493L30.6129 8.79008L30.1312 8.21523L27.9907 10.0089L28.4724 10.5837ZM34.8938 5.20277L35.3755 5.77762L37.5159 3.98396L37.0342 3.40911L36.5525 2.83426L34.412 4.62792L34.8938 5.20277ZM37.0342 3.40911L37.5159 3.98396C38.2577 3.36238 39.0813 2.89132 39.9473 2.57057L39.6868 1.86726L39.4263 1.16395C38.4017 1.54345 37.4279 2.10065 36.5525 2.83426L37.0342 3.40911ZM45.733 1.79246L45.49 2.502C46.3637 2.80123 47.1987 3.25178 47.9556 3.85482L48.4229 3.26823L48.8903 2.68164C47.997 1.96991 47.0098 1.43696 45.976 1.08292L45.733 1.79246ZM48.4229 3.26823L47.9556 3.85482L50.2953 5.71891L50.7627 5.13232L51.23 4.54574L48.8903 2.68164L48.4229 3.26823ZM55.4421 8.86052L54.9747 9.4471L57.3144 11.3112L57.7818 10.7246L58.2491 10.138L55.9094 8.27393L55.4421 8.86052ZM57.7818 10.7246L57.3144 11.3112C57.7445 11.6538 58.2004 11.9576 58.6766 12.2206L59.0392 11.5641L59.4018 10.9075C58.9988 10.685 58.6131 10.428 58.2491 10.138L57.7818 10.7246ZM61.8834 12.5586L61.7579 13.298C62.2943 13.3891 62.8401 13.4355 63.39 13.4355V12.6855V11.9355C62.9247 11.9355 62.4628 11.8962 62.009 11.8192L61.8834 12.5586ZM63.39 12.6855V13.4355H66.4975V12.6855V11.9355H63.39V12.6855ZM72.7125 12.6855V13.4355H78.9275V12.6855V11.9355H72.7125V12.6855ZM85.1425 12.6855V13.4355H88.25V12.6855V11.9355H85.1425V12.6855ZM88.25 12.6855V13.4355C90.0976 13.4355 91.9072 12.9106 93.468 11.9218L93.0666 11.2882L92.6652 10.6547C91.3446 11.4913 89.8134 11.9355 88.25 11.9355V12.6855ZM93.0666 11.2882L93.468 11.9218L97.2106 9.55066L96.8092 8.91711L96.4079 8.28355L92.6652 10.6547L93.0666 11.2882ZM104.295 4.17488L104.696 4.80844L108.439 2.43732L108.037 1.80377L107.636 1.17021L103.893 3.54132L104.295 4.17488ZM108.037 1.80377L108.439 2.43732C109.118 2.00667 109.845 1.68492 110.594 1.4716L110.389 0.750261L110.183 0.028924C109.297 0.281178 108.439 0.661599 107.636 1.17021L108.037 1.80377ZM115.489 0.800376L115.269 1.51754C116.014 1.74555 116.734 2.08151 117.405 2.52543L117.819 1.89989L118.233 1.27434C117.44 0.750051 116.589 0.352832 115.708 0.083214L115.489 0.800376ZM117.819 1.89989L117.405 2.52543L120.917 4.84848L121.331 4.22294L121.745 3.59739L118.233 1.27434L117.819 1.89989ZM128.355 8.86904L127.942 9.49459L131.454 11.8176L131.868 11.1921L132.281 10.5666L128.769 8.2435L128.355 8.86904ZM131.868 11.1921L131.454 11.8176C133.049 12.8729 134.92 13.4355 136.833 13.4355V12.6855V11.9355C135.214 11.9355 133.631 11.4595 132.281 10.5666L131.868 11.1921ZM136.833 12.6855V13.4355H139.649V12.6855V11.9355H136.833V12.6855ZM145.282 12.6855V13.4355H150.914V12.6855V11.9355H145.282V12.6855ZM156.547 12.6855V13.4355H159.363V12.6855V11.9355H156.547V12.6855ZM159.363 12.6855V13.4355C161.193 13.4355 162.986 12.9207 164.537 11.9498L164.139 11.3141L163.741 10.6784C162.428 11.4999 160.911 11.9355 159.363 11.9355V12.6855ZM164.139 11.3141L164.537 11.9498L168.307 9.58955L167.909 8.95384L167.511 8.31812L163.741 10.6784L164.139 11.3141ZM175.45 4.23328L175.848 4.86899L179.618 2.50871L179.22 1.873L178.822 1.23728L175.052 3.59756L175.45 4.23328ZM179.22 1.873L179.618 2.50871C180.318 2.07089 181.065 1.74808 181.835 1.53925L181.638 0.815416L181.442 0.091584C180.532 0.338542 179.648 0.720243 178.822 1.23728L179.22 1.873ZM186.857 0.968064L186.619 1.67918C187.375 1.93265 188.102 2.29858 188.775 2.77653L189.209 2.16516L189.643 1.55379C188.849 0.989359 187.99 0.556686 187.096 0.256948L186.857 0.968064ZM189.209 2.16516L188.775 2.77653L191.891 4.99072L192.325 4.37936L192.76 3.76799L189.643 1.55379L189.209 2.16516ZM198.557 8.80775L198.123 9.41912L201.239 11.6333L201.673 11.022L202.108 10.4106L198.992 8.19639L198.557 8.80775ZM201.673 11.022L201.239 11.6333C202.889 12.8057 204.862 13.4355 206.886 13.4355V12.6855V11.9355C205.174 11.9355 203.504 11.4026 202.108 10.4106L201.673 11.022ZM206.886 12.6855V13.4355H210.487V12.6855V11.9355H206.886V12.6855ZM217.687 12.6855V13.4355H224.888V12.6855V11.9355H217.687V12.6855ZM232.089 12.6855V13.4355H235.689V12.6855V11.9355H232.089V12.6855ZM235.689 12.6855V13.4355C237.756 13.4355 239.77 12.7785 241.44 11.5593L240.997 10.9536L240.555 10.3479C239.142 11.3796 237.438 11.9355 235.689 11.9355V12.6855ZM240.997 10.9536L241.44 11.5593L244.364 9.42364L243.922 8.81797L243.479 8.2123L240.555 10.3479L240.997 10.9536ZM249.77 4.54672L250.212 5.15239L253.136 3.01677L252.694 2.4111L252.252 1.80543L249.328 3.94105L249.77 4.54672ZM252.694 2.4111L253.136 3.01677C253.83 2.5099 254.584 2.12426 255.369 1.86003L255.13 1.14922L254.891 0.438402C253.962 0.7509 253.071 1.20691 252.252 1.80543L252.694 2.4111ZM260.551 1.0472L260.339 1.76652C261.134 2.00103 261.901 2.35804 262.614 2.83844L263.033 2.21656L263.452 1.59468C262.611 1.02741 261.703 0.605242 260.764 0.327892L260.551 1.0472ZM263.033 2.21656L262.614 2.83844L265.926 5.07133L266.345 4.44945L266.764 3.82757L263.452 1.59468L263.033 2.21656ZM272.97 8.91524L272.55 9.53712L275.862 11.77L276.282 11.1481L276.701 10.5262L273.389 8.29336L272.97 8.91524ZM276.282 11.1481L275.862 11.77C277.473 12.8556 279.371 13.4355 281.313 13.4355V12.6855V11.9355C279.669 11.9355 278.064 11.4448 276.701 10.5262L276.282 11.1481ZM281.313 12.6855V13.4355H284.478V12.6855V11.9355H281.313V12.6855ZM290.809 12.6855V13.4355H297.14V12.6855V11.9355H290.809V12.6855ZM303.471 12.6855V13.4355H306.636V12.6855V11.9355H303.471V12.6855ZM306.636 12.6855V13.4355C308.619 13.4355 310.554 12.8313 312.184 11.7035L311.757 11.0867L311.331 10.47C309.951 11.4243 308.314 11.9355 306.636 11.9355V12.6855ZM311.757 11.0867L312.184 11.7035L315.311 9.54005L314.884 8.92328L314.457 8.30652L311.331 10.47L311.757 11.0867ZM321.138 4.59639L321.565 5.21315L324.691 3.04971L324.265 2.43294L323.838 1.81618L320.711 3.97962L321.138 4.59639ZM324.265 2.43294L324.691 3.04971C325.422 2.54416 326.212 2.17021 327.031 1.92658L326.817 1.20773L326.603 0.488889C325.635 0.777051 324.701 1.2193 323.838 1.81618L324.265 2.43294ZM332.407 1.35584L332.155 2.06235C332.96 2.34898 333.729 2.76426 334.432 3.30779L334.891 2.71448L335.35 2.12118C334.52 1.47945 333.611 0.988362 332.659 0.64933L332.407 1.35584ZM334.891 2.71448L334.432 3.30779L337.048 5.33046L337.507 4.73716L337.966 4.14386L335.35 2.12118L334.891 2.71448ZM342.738 8.78251L342.279 9.37581L344.895 11.3985L345.354 10.8052L345.813 10.2119L343.197 8.18921L342.738 8.78251ZM345.354 10.8052L344.895 11.3985C346.603 12.7191 348.701 13.4355 350.859 13.4355V12.6855V11.9355C349.033 11.9355 347.258 11.3293 345.813 10.2119L345.354 10.8052ZM350.859 12.6855V13.4355H353.399V12.6855V11.9355H350.859V12.6855ZM358.478 12.6855V13.4355H363.556V12.6855V11.9355H358.478V12.6855ZM368.635 12.6855V13.4355H373.714V12.6855V11.9355H368.635V12.6855ZM378.793 12.6855V13.4355H381.332V12.6855V11.9355H378.793V12.6855Z" fill="white" />
                        </svg>
                    </div>
                </div>
            </section>



            <section className="bg-white py-6 md:py-8 overflow-hidden">
                <Swiper
                    modules={[Autoplay]}
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={20}
                    breakpoints={{
                        0: {
                            slidesPerView: 2.5,
                        },
                        640: {
                            slidesPerView: 3.5,
                        },
                        768: {
                            slidesPerView: 4.5,
                        },
                        1024: {
                            slidesPerView: 6.5, // 👈 desktop
                        },
                    }}
                >
                    {logos.map((logo, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white px-4 flex items-center justify-center h-[80px]">
                                <img
                                    src={logo}
                                    alt="logo"
                                    className="max-h-full object-contain transition"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            <section className="py-8 sm:py-12 md:py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-6 sm:mb-8 md:mb-12 flex flex-col md:flex-row items-start justify-between gap-4">
                        <div>
                            <p className="text-black font-semibold text-xs sm:text-sm md:text-base uppercase tracking-wider mb-4">

                            </p>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-black">
                                Countries  <span className="text-[#287FC4]">we serve</span>
                            </h2>
                        </div>
                        <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed md:mt-8 lg:pl-20">
                            Discover a world where you can experience a life, that You have
                            never experienced, and become what you have never imagined.
                        </p>
                    </div>

                    {/* Country Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
                        {countries.slice(0, 6).map((country) => (
                            <Link
                                key={country.id}
                                href={`/mbbs-abroad-admission/${country.slug}`}
                                className="block"
                            >
                                <div className="p-3 lg:p-4 bg-white rounded-2xl shadow-[0px_8px_18px_0px_#0000001A,0px_32px_32px_0px_#00000017,0px_73px_44px_0px_#0000000D,0px_130px_52px_0px_#00000003,0px_203px_57px_0px_#00000000] hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col cursor-pointer">
                                    <div className="py-4 flex items-center justify-between border-b flex-shrink-0">
                                        <div className="flex items-center gap-2 sm:gap-3">
                                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-gray-200">
                                                <Image
                                                    src={country.flag}
                                                    alt={country.name}
                                                    width={40}
                                                    height={40}
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-900 text-sm sm:text-base">
                                                    {country.name}
                                                </h3>
                                                <p className="text-xs sm:text-sm text-gray-500">Just now</p>
                                            </div>
                                        </div>
                                        <div className="text-black">
                                            <svg
                                                className="w-5 h-5 sm:w-6 sm:h-6"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <circle cx="10" cy="4" r="1.5" />
                                                <circle cx="10" cy="10" r="1.5" />
                                                <circle cx="10" cy="16" r="1.5" />
                                            </svg>
                                        </div>
                                    </div>

                                    <div className="relative h-[220px] overflow-hidden">
                                        <Image
                                            src={country.image}
                                            alt={country.name}
                                            fill
                                            className="object-cover hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>

                                    {/* Card Footer */}
                                    <div className="p-3 sm:p-4 flex-shrink-0">
                                        {/* Engagement Stats */}
                                        <div className="flex items-center gap-2 sm:gap-3 mb-4 text-sm text-gray-600">
                                            <div className="flex items-center gap-1 text-[#F12424] transition-all">
                                                <svg
                                                    className="w-5 h-5"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                                                </svg>
                                                <span className="text-sm">{country.likes}</span>
                                            </div>
                                            <div className="flex items-center gap-1 hover:text-blue-500 transition-colors">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7.77941 14.8627C9.21914 14.8627 10.6265 14.4416 11.8236 13.6525C13.0207 12.8634 13.9537 11.7418 14.5047 10.4296C15.0557 9.11734 15.1998 7.67341 14.9189 6.28036C14.6381 4.88731 13.9448 3.60771 12.9267 2.60338C11.9087 1.59905 10.6116 0.915086 9.19955 0.637991C7.78748 0.360896 6.32384 0.503112 4.9937 1.04665C3.66356 1.59019 2.52667 2.51065 1.7268 3.69162C0.92693 4.87259 0.5 6.26103 0.5 7.68137C0.5 8.86869 0.791176 9.98739 1.30882 10.9744L0.5 14.8627L4.4414 14.0648C5.4411 14.5747 6.57669 14.8627 7.77941 14.8627Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                                <span className="text-sm">{country.comments}</span>
                                            </div>
                                            <div className="flex items-center gap-1 hover:text-blue-500 transition-colors">
                                                <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M13.6145 13.3626C12.5394 14.4198 11.1711 15.1394 9.68211 15.4305C8.19312 15.7217 6.65009 15.5715 5.24753 14.9988C3.84496 14.4261 2.64565 13.4566 1.80078 12.2125C0.955907 10.9683 0.503295 9.50532 0.5 8.00781" stroke="black" stroke-miterlimit="10" stroke-linecap="round" />
                                                    <path d="M12.995 17.257L13.7589 14.2028C13.7941 14.0697 13.8015 13.931 13.7808 13.7949C13.7601 13.6589 13.7116 13.5285 13.6383 13.4114C13.565 13.2944 13.4684 13.1933 13.3544 13.1142C13.2403 13.035 13.1112 12.9796 12.9748 12.9511L9.87891 12.1875" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M2.55469 4.3932C3.62973 3.33571 4.99809 2.61591 6.48723 2.32457C7.97636 2.03322 9.5196 2.18338 10.9224 2.75611C12.3251 3.32883 13.5246 4.29848 14.3695 5.54279C15.2144 6.78709 15.6669 8.25034 15.6701 9.74803" stroke="black" stroke-miterlimit="10" stroke-linecap="round" />
                                                    <path d="M3.17198 0.5L2.4081 3.55421C2.37307 3.68737 2.36575 3.82615 2.38659 3.96217C2.40744 4.0982 2.45601 4.22864 2.52937 4.34563C2.60274 4.46262 2.69938 4.56373 2.81345 4.64285C2.92753 4.72197 3.05668 4.77746 3.1931 4.80597L6.28809 5.56952" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                                <span className="text-sm">{country.views}</span>
                                            </div>



                                            <div className="flex items-center gap-1 hover:text-green-500 transition-colors">
                                                <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.86323 1.253C7.0287 1.253 7.1874 1.31896 7.30441 1.43636C7.42142 1.55377 7.48716 1.713 7.48716 1.87903C7.48716 2.04507 7.42142 2.2043 7.30441 2.32171C7.1874 2.43911 7.0287 2.50507 6.86323 2.50507H3.11965C2.62322 2.50507 2.14712 2.70294 1.79609 3.05515C1.44507 3.40736 1.24786 3.88506 1.24786 4.38316V13.1476C1.24786 13.6457 1.44507 14.1234 1.79609 14.4756C2.14712 14.8278 2.62322 15.0257 3.11965 15.0257H11.8547C12.3511 15.0257 12.8272 14.8278 13.1782 14.4756C13.5292 14.1234 13.7265 13.6457 13.7265 13.1476V10.6435C13.7265 10.4775 13.7922 10.3182 13.9092 10.2008C14.0262 10.0834 14.1849 10.0175 14.3504 10.0175C14.5159 10.0175 14.6746 10.0834 14.7916 10.2008C14.9086 10.3182 14.9743 10.4775 14.9743 10.6435V13.1476C14.9743 13.9778 14.6456 14.774 14.0606 15.361C13.4755 15.948 12.682 16.2778 11.8547 16.2778H3.11965C2.29227 16.2778 1.49877 15.948 0.913724 15.361C0.328676 14.774 0 13.9778 0 13.1476V4.38316C0 3.55299 0.328676 2.75682 0.913724 2.16981C1.49877 1.58279 2.29227 1.253 3.11965 1.253H6.86323ZM10.9562 0.063541C11.0612 0.0120516 11.1786 -0.00879336 11.2949 0.00338208C11.4111 0.0155575 11.5216 0.0602636 11.6138 0.132405L17.2292 4.51463C17.3043 4.57315 17.3652 4.64813 17.407 4.73385C17.4488 4.81957 17.4706 4.91375 17.4706 5.0092C17.4706 5.10464 17.4488 5.19882 17.407 5.28454C17.3652 5.37026 17.3043 5.44524 17.2292 5.50376L11.6138 9.88599C11.5216 9.95797 11.4111 10.0025 11.2949 10.0146C11.1786 10.0266 11.0614 10.0057 10.9564 9.95415C10.8515 9.90261 10.7631 9.82253 10.7013 9.72305C10.6395 9.62356 10.6067 9.50866 10.6068 9.39142V7.54463C7.82158 7.8326 6.08456 10.015 5.12121 11.8004L4.9253 12.176C4.86235 12.302 4.75885 12.4031 4.63155 12.4627C4.50425 12.5224 4.36061 12.5372 4.22389 12.5047C4.08716 12.4723 3.96536 12.3945 3.87819 12.2839C3.79102 12.1734 3.74359 12.0365 3.74358 11.8956C3.74358 9.29627 4.38997 6.96117 5.66154 5.25961C6.83203 3.69453 8.51414 2.69663 10.6068 2.53136V0.62697C10.6066 0.509639 10.6392 0.394604 10.701 0.294983C10.7628 0.195362 10.8512 0.115166 10.9562 0.063541ZM11.8547 3.1311C11.8547 3.29713 11.7889 3.45637 11.6719 3.57377C11.5549 3.69118 11.3962 3.75713 11.2307 3.75713C9.24664 3.75713 7.71551 4.59977 6.66107 6.01085C5.99097 6.90733 5.50306 8.04671 5.23352 9.36638C6.51632 7.76123 8.45425 6.26126 11.2307 6.26126C11.3962 6.26126 11.5549 6.32722 11.6719 6.44462C11.7889 6.56203 11.8547 6.72126 11.8547 6.88729V8.11181L15.8291 5.0092L11.8547 1.90533V3.1311Z" fill="black" />
                                                </svg>
                                                <span className="text-sm">{country.shares}</span>
                                            </div>
                                            <div className="flex items-center gap-1 hover:text-purple-500 transition-colors ml-auto">
                                                <svg width="13" height="19" viewBox="0 0 13 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.2059 0.5H2.44118C1.92634 0.5 1.4326 0.701762 1.06856 1.0609C0.704516 1.42004 0.5 1.90713 0.5 2.41503V17.7353L6.32353 14.8627L12.1471 17.7353V2.41503C12.1471 1.90713 11.9425 1.42004 11.5785 1.0609C11.2145 0.701762 10.7207 0.5 10.2059 0.5Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </div>
                                        </div>

                                        {/* User Avatars */}
                                        <div className="flex items-center gap-2 mb-4">
                                            <div className="flex -space-x-2">
                                                {country.users.map((user, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="w-6 h-6 sm:w-7 sm:h-7 rounded-full overflow-hidden border-2 border-white"
                                                    >
                                                        <Image
                                                            src={user.avatar}
                                                            alt={user.name}
                                                            width={28}
                                                            height={28}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                            <p className="text-xs sm:text-sm text-gray-600 line-clamp-1">
                                                Liked By{" "}
                                                <span className="font-semibold">
                                                    {country.users[0].name}
                                                </span>{" "}
                                                and others
                                            </p>
                                        </div>

                                        {/* Description */}
                                        <p className="text-xs sm:text-sm text-gray-600 line-clamp-3 sm:line-clamp-4">
                                            {country.description}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="flex flex-wrap justify-center mt-4 sm:mt-6 gap-4 lg:gap-8">
                        {countries.slice(6, 8).map((country) => (
                            <div
                                key={country.id}
                                className="w-full sm:w-[calc(50%-1rem)] lg:w-1/3 lg:px-3"
                            >
                                <Link
                                    href={`/mbbs-abroad-admission/${country.slug}`}
                                    className="block"
                                >
                                    <div className="p-3 lg:p-4 bg-white rounded-2xl shadow-[0px_8px_18px_0px_#0000001A,0px_32px_32px_0px_#00000017,0px_73px_44px_0px_#0000000D,0px_130px_52px_0px_#00000003,0px_203px_57px_0px_#00000000] hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col cursor-pointer">
                                        {/* Card Header */}
                                        <div className="py-4 flex items-center justify-between border-b flex-shrink-0">
                                            <div className="flex items-center gap-2 sm:gap-3">
                                                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-gray-200">
                                                    <Image
                                                        src={country.flag}
                                                        alt={country.name}
                                                        width={40}
                                                        height={40}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-gray-900 text-sm sm:text-base">
                                                        {country.name}
                                                    </h3>
                                                    <p className="text-xs sm:text-sm text-gray-500">Just now</p>
                                                </div>
                                            </div>
                                            <div className="text-black">
                                                <svg
                                                    className="w-5 h-5 sm:w-6 sm:h-6"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <circle cx="10" cy="4" r="1.5" />
                                                    <circle cx="10" cy="10" r="1.5" />
                                                    <circle cx="10" cy="16" r="1.5" />
                                                </svg>
                                            </div>
                                        </div>

                                        <div className="relative h-[220px] overflow-hidden">
                                            <Image
                                                src={country.image}
                                                alt={country.name}
                                                fill
                                                className="object-cover hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>

                                        {/* Card Footer */}
                                        <div className="p-3 sm:p-4 flex-shrink-0">
                                            {/* Engagement Stats */}
                                            <div className="flex items-center gap-2 sm:gap-3 mb-4 text-sm text-gray-600">
                                                <div className="flex items-center gap-1 text-[#F12424] transition-all">
                                                    <svg
                                                        className="w-5 h-5"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                                                    </svg>
                                                    <span className="text-sm">{country.likes}</span>
                                                </div>
                                                <div className="flex items-center gap-1 hover:text-blue-500 transition-colors">
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.77941 14.8627C9.21914 14.8627 10.6265 14.4416 11.8236 13.6525C13.0207 12.8634 13.9537 11.7418 14.5047 10.4296C15.0557 9.11734 15.1998 7.67341 14.9189 6.28036C14.6381 4.88731 13.9448 3.60771 12.9267 2.60338C11.9087 1.59905 10.6116 0.915086 9.19955 0.637991C7.78748 0.360896 6.32384 0.503112 4.9937 1.04665C3.66356 1.59019 2.52667 2.51065 1.7268 3.69162C0.92693 4.87259 0.5 6.26103 0.5 7.68137C0.5 8.86869 0.791176 9.98739 1.30882 10.9744L0.5 14.8627L4.4414 14.0648C5.4411 14.5747 6.57669 14.8627 7.77941 14.8627Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                    <span className="text-sm">{country.comments}</span>
                                                </div>
                                                <div className="flex items-center gap-1 hover:text-blue-500 transition-colors">
                                                    <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M13.6145 13.3626C12.5394 14.4198 11.1711 15.1394 9.68211 15.4305C8.19312 15.7217 6.65009 15.5715 5.24753 14.9988C3.84496 14.4261 2.64565 13.4566 1.80078 12.2125C0.955907 10.9683 0.503295 9.50532 0.5 8.00781" stroke="black" stroke-miterlimit="10" stroke-linecap="round" />
                                                        <path d="M12.995 17.257L13.7589 14.2028C13.7941 14.0697 13.8015 13.931 13.7808 13.7949C13.7601 13.6589 13.7116 13.5285 13.6383 13.4114C13.565 13.2944 13.4684 13.1933 13.3544 13.1142C13.2403 13.035 13.1112 12.9796 12.9748 12.9511L9.87891 12.1875" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M2.55469 4.3932C3.62973 3.33571 4.99809 2.61591 6.48723 2.32457C7.97636 2.03322 9.5196 2.18338 10.9224 2.75611C12.3251 3.32883 13.5246 4.29848 14.3695 5.54279C15.2144 6.78709 15.6669 8.25034 15.6701 9.74803" stroke="black" stroke-miterlimit="10" stroke-linecap="round" />
                                                        <path d="M3.17198 0.5L2.4081 3.55421C2.37307 3.68737 2.36575 3.82615 2.38659 3.96217C2.40744 4.0982 2.45601 4.22864 2.52937 4.34563C2.60274 4.46262 2.69938 4.56373 2.81345 4.64285C2.92753 4.72197 3.05668 4.77746 3.1931 4.80597L6.28809 5.56952" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                    <span className="text-sm">{country.views}</span>
                                                </div>
                                                <div className="flex items-center gap-1 hover:text-green-500 transition-colors">
                                                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6.86323 1.253C7.0287 1.253 7.1874 1.31896 7.30441 1.43636C7.42142 1.55377 7.48716 1.713 7.48716 1.87903C7.48716 2.04507 7.42142 2.2043 7.30441 2.32171C7.1874 2.43911 7.0287 2.50507 6.86323 2.50507H3.11965C2.62322 2.50507 2.14712 2.70294 1.79609 3.05515C1.44507 3.40736 1.24786 3.88506 1.24786 4.38316V13.1476C1.24786 13.6457 1.44507 14.1234 1.79609 14.4756C2.14712 14.8278 2.62322 15.0257 3.11965 15.0257H11.8547C12.3511 15.0257 12.8272 14.8278 13.1782 14.4756C13.5292 14.1234 13.7265 13.6457 13.7265 13.1476V10.6435C13.7265 10.4775 13.7922 10.3182 13.9092 10.2008C14.0262 10.0834 14.1849 10.0175 14.3504 10.0175C14.5159 10.0175 14.6746 10.0834 14.7916 10.2008C14.9086 10.3182 14.9743 10.4775 14.9743 10.6435V13.1476C14.9743 13.9778 14.6456 14.774 14.0606 15.361C13.4755 15.948 12.682 16.2778 11.8547 16.2778H3.11965C2.29227 16.2778 1.49877 15.948 0.913724 15.361C0.328676 14.774 0 13.9778 0 13.1476V4.38316C0 3.55299 0.328676 2.75682 0.913724 2.16981C1.49877 1.58279 2.29227 1.253 3.11965 1.253H6.86323ZM10.9562 0.063541C11.0612 0.0120516 11.1786 -0.00879336 11.2949 0.00338208C11.4111 0.0155575 11.5216 0.0602636 11.6138 0.132405L17.2292 4.51463C17.3043 4.57315 17.3652 4.64813 17.407 4.73385C17.4488 4.81957 17.4706 4.91375 17.4706 5.0092C17.4706 5.10464 17.4488 5.19882 17.407 5.28454C17.3652 5.37026 17.3043 5.44524 17.2292 5.50376L11.6138 9.88599C11.5216 9.95797 11.4111 10.0025 11.2949 10.0146C11.1786 10.0266 11.0614 10.0057 10.9564 9.95415C10.8515 9.90261 10.7631 9.82253 10.7013 9.72305C10.6395 9.62356 10.6067 9.50866 10.6068 9.39142V7.54463C7.82158 7.8326 6.08456 10.015 5.12121 11.8004L4.9253 12.176C4.86235 12.302 4.75885 12.4031 4.63155 12.4627C4.50425 12.5224 4.36061 12.5372 4.36061 12.5372V12.5372C4.22389 12.5224 4.08716 12.4723 3.96536 12.3945C3.87819 12.2839C3.79102 12.1734 3.74359 12.0365 3.74358 11.8956C3.74358 9.29627 4.38997 6.96117 5.66154 5.25961C6.83203 3.69453 8.51414 2.69663 10.6068 2.53136V0.62697C10.6066 0.509639 10.6392 0.394604 10.701 0.294983C10.7628 0.195362 10.8512 0.115166 10.9562 0.063541ZM11.8547 3.1311C11.8547 3.29713 11.7889 3.45637 11.6719 3.57377C11.5549 3.69118 11.3962 3.75713 11.2307 3.75713C9.24664 3.75713 7.71551 4.59977 6.66107 6.01085C5.99097 6.90733 5.50306 8.04671 5.23352 9.36638C6.51632 7.76123 8.45425 6.26126 11.2307 6.26126C11.3962 6.26126 11.5549 6.32722 11.6719 6.44462C11.7889 6.56203 11.8547 6.72126 11.8547 6.88729V8.11181L15.8291 5.0092L11.8547 1.90533V3.1311Z" fill="black" />
                                                    </svg>
                                                    <span className="text-sm">{country.shares}</span>
                                                </div>
                                                <div className="flex items-center gap-1 hover:text-purple-500 transition-colors ml-auto">
                                                    <svg width="13" height="19" viewBox="0 0 13 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10.2059 0.5H2.44118C1.92634 0.5 1.4326 0.701762 1.06856 1.0609C0.704516 1.42004 0.5 1.90713 0.5 2.41503V17.7353L6.32353 14.8627L12.1471 17.7353V2.41503C12.1471 1.90713 11.9425 1.42004 11.5785 1.0609C11.2145 0.701762 10.7207 0.5 10.2059 0.5Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </div>
                                            </div>

                                            {/* User Avatars */}
                                            <div className="flex items-center gap-2 mb-4">
                                                <div className="flex -space-x-2">
                                                    {country.users.map((user, idx) => (
                                                        <div
                                                            key={idx}
                                                            className="w-6 h-6 sm:w-7 sm:h-7 rounded-full overflow-hidden border-2 border-white"
                                                        >
                                                            <Image
                                                                src={user.avatar}
                                                                alt={user.name}
                                                                width={28}
                                                                height={28}
                                                                className="w-full h-full object-cover"
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                                <p className="text-xs sm:text-sm text-gray-600 line-clamp-1">
                                                    Liked By{" "}
                                                    <span className="font-semibold">
                                                        {country.users[0].name}
                                                    </span>{" "}
                                                    and others
                                                </p>
                                            </div>

                                            {/* Description */}
                                            <p className="text-xs sm:text-sm text-gray-600 line-clamp-3 sm:line-clamp-4">
                                                {country.description}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Why Abroad Section */}
            <section className="pb-20">

                <div className="max-w-7xl mx-auto px-6">
                    <div className="bg-[url('/images/study-abroad-cta.webp')] bg-cover bg-center bg-no-repeat p-20 lg:p-30 rounded-2xl">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-white text-center mb-6 sm:mb-8 md:mb-12">
                            Why Study <span className="text-[#FCC623]">Abroad</span>
                        </h2>

                        <div className="space-y-3 sm:space-y-4 md:space-y-6 text-sm sm:text-base md:text-lg">
                            <p className="text-white/90 leading-relaxed">
                                Students choose to pursue an MBBS degree abroad because it is cost-effective, offers quality education, and is a unique learning experience. Several international institutions offer modern facilities, experienced faculty, and lower costs than India’s top institutes. Admissions are also easy, and there are no entrance exams or donation requirements.
                            </p>

                            <p className="text-white/90 leading-relaxed">
                                The experience gained while studying abroad is also varied, and students get to work with patients of different cultural and healthcare backgrounds, which is a huge advantage for students, as it helps them become confident and adaptable individuals. With new and better opportunities and career prospects, pursuing an MBBS degree abroad is a safe and preferred choice for future medical professionals.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cost Breakdown Section */}
            <section className="pb-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="bg-[#DFF1FF] px-10 pt-16 pb-10 rounded-2xl">
                        <div className="text-center mb-6 sm:mb-8 md:mb-12">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-[#0B2E3C] mb-3 md:mb-4">
                                Cost Breakdown
                            </h2>
                            <p className="text-gray-600 text-xs sm:text-sm md:text-base px-2 sm:px-4 max-w-3xl mx-auto leading-relaxed">
                                This Section Outlines The Complete Cost Structure For MBBS Abroad. Everything
                                <br className="hidden md:block" />
                                related to expenses is explained clearly for easy understanding.
                            </p>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[800px] text-left border-collapse">
                                <thead>
                                    <tr className="bg-[#FCC623] text-black">
                                        <th className="p-4 text-lg font-medium text-center">Countries</th>
                                        <th className="p-4 text-lg font-medium text-center">
                                            Academic
                                            <div className="text-xs font-normal">(Starting From)</div>
                                        </th>
                                        <th className="p-4 text-lg font-medium text-center">
                                            Hostel & Mess
                                            <div className="text-xs font-normal">(Starting From)</div>
                                        </th>
                                        <th className="p-4 text-lg font-medium text-center">Total</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white">
                                    {data.map((item, index) => (
                                        <tr
                                            key={index}
                                            className="hover:bg-gray-200 transition"
                                        >
                                            <td className="p-4">
                                                <div className="flex items-center gap-3 font-medium text-gray-700">
                                                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden flex-shrink-0 shadow-sm border border-gray-100">
                                                        <Image
                                                            src={item.flag}
                                                            alt={`${item.country} Flag`}
                                                            width={40}
                                                            height={40}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                    <span>{item.country.toUpperCase()}</span>
                                                </div>
                                            </td>
                                            <td className="p-4 text-gray-700 text-center">
                                                <div>{item.academic.inr}</div>
                                                {item.academic.usd && (
                                                    <div className="text-sm text-gray-500">
                                                        {item.academic.usd}
                                                    </div>
                                                )}
                                            </td>
                                            <td className="p-4 text-gray-700 text-center">
                                                <div>{item.hostel.inr}</div>
                                                {item.hostel.usd && (
                                                    <div className="text-sm text-gray-500">
                                                        {item.hostel.usd}
                                                    </div>
                                                )}
                                            </td>
                                            <td className="p-4 text-gray-700 text-center">
                                                <div>{item.total.inr}</div>
                                                {item.total.usd && (
                                                    <div className="text-sm text-gray-500">
                                                        {item.total.usd}
                                                    </div>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>

                            </table>
                        </div>


                        <div className="px-4 lg:px-20 bg-white py-10">
                            <div className="bg-white border-1 border-dashed border-[#2CBF0F] rounded-xl p-3 sm:p-4 md:p-6">
                                <div className="space-y-2">
                                    <div className="flex items-start gap-2">
                                        <span className="text-[#FF0000] font-semibold flex-shrink-0 text-sm sm:text-base md:text-lg">Note:</span>
                                        <div className="space-y-1 text-[#2CBF0F] text-xs sm:text-sm md:text-base">
                                            <p className="text-green-600">
                                                1. This service charge includes visa charges but does not cover ticket charges.
                                            </p>
                                            <p className="text-green-600">
                                                2. Get the offer price of ₹99,999 before the NEET result.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
