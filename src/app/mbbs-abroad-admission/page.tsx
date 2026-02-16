import Image from "next/image";
import Link from "next/link";

export default function MBBSAbroadAdmission() {
    const countries = [
        {
            id: 1,
            name: "Russia",
            slug: "russia",
            flag: "/images/russia.webp",
            image: "/images/study-abroad/russia.webp",
            likes: 45,
            comments: 1244,
            shares: 420,
            views: 22,
            users: [
                { name: "Aarav Raj", avatar: "/images/testi1.webp" },
                { name: "Navnit", avatar: "/images/testi2.webp" },
                { name: "Naman", avatar: "/images/testi3.webp" },
            ],
            description:
                "MBBS in Russia offers affordable fees, globally recognized degrees, English-medium education, modern facilities, and quality clinical exposure, making it a smart choice for Indian medical aspirants.",
        },
        {
            id: 2,
            name: "Kazakhstan",
            slug: "kazakhstan",
            flag: "/images/kazakhstan.webp",
            image: "/images/study-abroad/kazakhstan.webp",
            likes: 45,
            comments: 1244,
            shares: 420,
            views: 22,
            users: [
                { name: "Aarav Raj", avatar: "/images/testi4.webp" },
                { name: "Navnit", avatar: "/images/testi5.webp" },
                { name: "Naman", avatar: "/images/testi6.webp" },
            ],
            description:
                "MBBS in Kazakhstan offers low tuition fees, globally recognized degrees, English-medium education, modern medical universities, and strong clinical exposure, making it an affordable and reliable option for Indian students.",
        },
        {
            id: 3,
            name: "Nepal",
            slug: "nepal",
            flag: "/images/nepal.webp",
            image: "/images/study-abroad/nepal.webp",
            likes: 45,
            comments: 1244,
            shares: 420,
            views: 22,
            users: [
                { name: "Aarav Raj", avatar: "/images/testi7.webp" },
                { name: "Navnit", avatar: "/images/testi8.webp" },
                { name: "Naman", avatar: "/images/testi9.webp" },
            ],
            description:
                "MBBS in Kazakhstan offers low tuition fees, globally recognized degrees, English-medium education, modern medical universities, and strong clinical exposure, making it an affordable and reliable option for Indian students.",
        },
        {
            id: 4,
            name: "Singapore",
            slug: "singapore",
            flag: "/images/singapore.webp",
            image: "/images/study-abroad/singapore.webp",
            likes: 45,
            comments: 1244,
            shares: 420,
            views: 22,
            users: [
                { name: "Aarav Raj", avatar: "/images/testi19.webp" },
                { name: "Navnit", avatar: "/images/testi20.webp" },
                { name: "Naman", avatar: "/images/testi1.webp" },
            ],
            description:
                "MBBS in Singapore offers world-class medical education, globally prestigious universities, advanced healthcare infrastructure, strong clinical training, and excellent international exposure for aspiring doctors.",
        },

        {
            id: 5,
            name: "Georgia",
            slug: "georgia",
            flag: "/images/georgia.webp",
            image: "/images/study-abroad/georgia.webp",
            likes: 45,
            comments: 1244,
            shares: 420,
            views: 22,
            users: [
                { name: "Aarav Raj", avatar: "/images/testi13.webp" },
                { name: "Navnit", avatar: "/images/testi14.webp" },
                { name: "Naman", avatar: "/images/testi15.webp" },
            ],
            description:
                "MBBS in Georgia offers affordable tuition, globally recognized degrees, English-medium programs, modern universities, and excellent clinical exposure, making it a popular choice for international students.",
        },
        {
            id: 6,
            name: "Uzbekistan",
            slug: "uzbekistan",
            flag: "/images/uzbekistan.webp",
            image: "/images/study-abroad/uzbekistan.webp",
            likes: 45,
            comments: 1244,
            shares: 420,
            views: 22,
            users: [
                { name: "Aarav Raj", avatar: "/images/testi10.webp" },
                { name: "Navnit", avatar: "/images/testi11.webp" },
                { name: "Naman", avatar: "/images/testi12.webp" },
            ],
            description:
                "MBBS in Uzbekistan offers low tuition fees, WHO-recognized universities, English-medium education, modern infrastructure, and good clinical exposure, making it a cost-effective option for medical aspirants.",
        },

        {
            id: 7,
            name: "Bangladesh",
            slug: "bangladesh",
            flag: "/images/bangladesh.webp",
            image: "/images/study-abroad/bangladesh.webp",
            likes: 45,
            comments: 1244,
            shares: 420,
            views: 22,
            users: [
                { name: "Aarav Raj", avatar: "/images/testi19.webp" },
                { name: "Navnit", avatar: "/images/testi20.webp" },
                { name: "Naman", avatar: "/images/testi1.webp" },
            ],
            description:
                "MBBS in Bangladesh offers affordable fees, NMC-approved colleges, English-medium education, similar curriculum to India, and strong clinical exposure, making it a preferred choice for Indian students.",
        },
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-[#0B5A7D] to-[#0E7BA8] py-4 sm:py-6 md:py-8 lg:py-10 overflow-hidden">
                <div className="absolute inset-0 opacity-30 sm:opacity-40">
                    {/* Left Bottom Corner Image */}
                    <div className="absolute -bottom-2 sm:-bottom-4 md:-bottom-8 lg:-bottom-16 left-0 w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 lg:w-24 lg:h-24 xl:w-60 xl:h-60 2xl:w-48 2xl:h-48">
                        <Image
                            src="/images/study-abroad/left.webp"
                            alt="Decorative"
                            width={384}
                            height={384}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Right Top Corner Image */}
                    <div className="absolute top-1 sm:top-2 right-0 w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 lg:w-24 lg:h-24 xl:w-60 xl:h-60 2xl:w-48 2xl:h-48">
                        <Image
                            src="/images/study-abroad/right.webp"
                            alt="Decorative"
                            width={384}
                            height={384}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10 pt-6 sm:pt-8 md:pt-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 sm:mb-7 md:mb-8">
                            STUDY <span className="text-[#4FC3F7]">ABROAD</span>
                        </h1>
                        <p className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl mb-5 sm:mb-6 md:mb-7 px-1 sm:px-2 md:px-3 leading-relaxed">
                            I Designed A Web UI For An AI-Powered HR Co-Pilot That Helps Info
                            Generate Job Descriptions And Screen Resumes
                        </p>

                        {/* World Map */}
                        <div className="relative max-w-3xl mx-auto px-1 sm:px-2 md:px-3 top-10">
                            <Image
                                src="/images/study-abroad/worldMap.webp"
                                alt="World Map"
                                width={800}
                                height={400}
                                className="w-full h-auto opacity-80"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* University Logos Section */}
            <section className="bg-white py-4 sm:py-6 md:py-8">
                <div className="container mx-auto px-4 sm:px-6 md:px-8">
                    <div className="flex items-center justify-center overflow-hidden">
                        <Image
                            src="/images/study-abroad/logoImages.webp"
                            alt="Universities"
                            width={1200}
                            height={120}
                            className="w-full max-w-6xl h-auto object-contain opacity-60 grayscale"
                        />
                    </div>
                </div>
            </section>

            {/* Countries Section */}
            <section className="py-8 sm:py-12 md:py-16">
                <div className="container mx-auto px-4 sm:px-6 md:px-8">
                    <div className="mb-6 sm:mb-8 md:mb-12 flex flex-col md:flex-row items-start justify-between gap-4">
                        <div>
                            <p className="text-gray-600 text-xs sm:text-sm md:text-base uppercase tracking-wider mb-2">
                                COUNTRIES
                            </p>
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#0B2E3C]">
                                Country <span className="text-[#287FC4]">We Serve</span>
                            </h2>
                        </div>
                        <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed md:mt-8">
                            I Designed A Web UI For An AI-Powered HR Co-Pilot That Helps
                            <br className="hidden md:block" />
                            Info Generate Job Descriptions And Screen Resumes
                        </p>
                    </div>

                    {/* Country Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {countries.slice(0, 6).map((country) => (
                            <Link
                                key={country.id}
                                href={`/mbbs-abroad-admission/${country.slug}`}
                                className="block"
                            >
                                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden aspect-square flex flex-col cursor-pointer">
                                    {/* Card Header */}
                                    <div className="p-3 sm:p-4 flex items-center justify-between border-b flex-shrink-0">
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
                                        <button className="text-gray-400 hover:text-gray-600">
                                            <svg
                                                className="w-5 h-5 sm:w-6 sm:h-6"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <circle cx="10" cy="4" r="1.5" />
                                                <circle cx="10" cy="10" r="1.5" />
                                                <circle cx="10" cy="16" r="1.5" />
                                            </svg>
                                        </button>
                                    </div>

                                    {/* Card Image */}
                                    <div className="relative flex-1 overflow-hidden">
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
                                        <div className="flex items-center gap-2 sm:gap-3 mb-2 text-sm text-gray-600">
                                            <button className="flex items-center gap-1 hover:text-red-500 transition-colors">
                                                <svg
                                                    className="w-4 h-4"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                                                </svg>
                                                <span className="text-xs">{country.likes}</span>
                                            </button>
                                            <button className="flex items-center gap-1 hover:text-blue-500 transition-colors">
                                                <svg
                                                    className="w-4 h-4"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                                    />
                                                </svg>
                                                <span className="text-xs">{country.comments}</span>
                                            </button>
                                            <button className="flex items-center gap-1 hover:text-green-500 transition-colors">
                                                <svg
                                                    className="w-4 h-4"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                                                    />
                                                </svg>
                                                <span className="text-xs">{country.shares}</span>
                                            </button>
                                            <button className="flex items-center gap-1 hover:text-purple-500 transition-colors ml-auto">
                                                <svg
                                                    className="w-4 h-4"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                    />
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                    />
                                                </svg>
                                                <span className="text-xs">{country.views}</span>
                                            </button>
                                        </div>

                                        {/* User Avatars */}
                                        <div className="flex items-center gap-2 mb-2">
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

                    {/* Bangladesh Card - Centered */}
                    <div className="flex justify-center mt-4 sm:mt-6">
                        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3">
                            {countries.slice(6, 7).map((country) => (
                                <Link
                                    key={country.id}
                                    href={`/mbbs-abroad-admission/${country.slug}`}
                                    className="block"
                                >
                                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden aspect-square flex flex-col cursor-pointer">
                                        {/* Card Header */}
                                        <div className="p-3 sm:p-4 flex items-center justify-between border-b flex-shrink-0">
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
                                            <button className="text-gray-400 hover:text-gray-600">
                                                <svg
                                                    className="w-5 h-5 sm:w-6 sm:h-6"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <circle cx="10" cy="4" r="1.5" />
                                                    <circle cx="10" cy="10" r="1.5" />
                                                    <circle cx="10" cy="16" r="1.5" />
                                                </svg>
                                            </button>
                                        </div>

                                        {/* Card Image */}
                                        <div className="relative flex-1 overflow-hidden">
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
                                            <div className="flex items-center gap-2 sm:gap-3 mb-2 text-sm text-gray-600">
                                                <button className="flex items-center gap-1 hover:text-red-500 transition-colors">
                                                    <svg
                                                        className="w-4 h-4"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                                                    </svg>
                                                    <span className="text-xs">{country.likes}</span>
                                                </button>
                                                <button className="flex items-center gap-1 hover:text-blue-500 transition-colors">
                                                    <svg
                                                        className="w-4 h-4"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                                        />
                                                    </svg>
                                                    <span className="text-xs">{country.comments}</span>
                                                </button>
                                                <button className="flex items-center gap-1 hover:text-green-500 transition-colors">
                                                    <svg
                                                        className="w-4 h-4"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                                                        />
                                                    </svg>
                                                    <span className="text-xs">{country.shares}</span>
                                                </button>
                                                <button className="flex items-center gap-1 hover:text-purple-500 transition-colors ml-auto">
                                                    <svg
                                                        className="w-4 h-4"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                        />
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                        />
                                                    </svg>
                                                    <span className="text-xs">{country.views}</span>
                                                </button>
                                            </div>

                                            {/* User Avatars */}
                                            <div className="flex items-center gap-2 mb-2">
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
                    </div>
                </div>
            </section>
            {/* Why Abroad Section */}
            <section className="py-8 sm:py-12 md:py-16 bg-[#005A8B] relative overflow-hidden mx-2 sm:mx-4 md:mx-8 lg:mx-20 xl:mx-30 rounded-2xl">
                {/* Top Left Corner Image - Outside opacity div */}
                <div className="absolute -top-10 sm:-top-20 md:-top-35 left-2 sm:left-5 w-20 h-20 sm:w-40 sm:h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 xl:w-96 xl:h-96 z-10">
                    <Image
                        src="/images/study-abroad/left.webp"
                        alt="Decorative"
                        width={400}
                        height={400}
                        className="w-full h-full object-left opacity-60 sm:opacity-80 drop-shadow-lg"
                    />
                </div>

                {/* Bottom Right Corner Image - Outside opacity div */}
                <div className="absolute -bottom-10 sm:-bottom-20 md:-bottom-30 right-0 w-20 h-20 sm:w-40 sm:h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 xl:w-96 xl:h-96 z-10">
                    <Image
                        src="/images/study-abroad/right.webp"
                        alt="Decorative"
                        width={400}
                        height={400}
                        className="w-full h-full object-cover opacity-60 sm:opacity-80 drop-shadow-lg"
                    />
                </div>

                <div className="absolute inset-0 opacity-10">
                    {/* <div className="absolute top-5 left-5 md:top-10 md:left-10 text-white/20 text-5xl md:text-9xl font-bold">
                        MBBS
                    </div> */}
                </div>

                <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-6 sm:mb-8 md:mb-12">
                            Why <span className="text-[#4FC3F7]">Abroad</span>
                        </h2>

                        <div className="space-y-3 sm:space-y-4 md:space-y-6 text-sm sm:text-base md:text-lg">
                            <p className="text-white/90 leading-relaxed">
                                I Designed A Web UI For An AI-Powered HR Co-Pilot That Helps HRs Generate Job Descriptions And Screen Resumes With AI Suggestions, I Designed A Web UI For An AI-Powered HR Co-Pilot That Helps I Designed A Web UI For An AI-Powered HR Co-Pilot That Helps HRs Generate Job Descriptions And Screen Resumes With AI Suggestions, I Designed A Web UI For An AI-Powered HR Co-Pilot That Helps
                            </p>

                            <p className="text-white/90 leading-relaxed">
                                I Designed A Web UI For An AI-Powered HR Co-Pilot That Helps HRs Generate Job Descriptions And Screen Resumes With AI Suggestions, I Designed A Web UI For An AI-Powered HR Co-Pilot That Helps I Designed A Web UI For An AI-Powered HR Co-Pilot That Helps HRs Generate Job Descriptions And Screen Resumes With AI Suggestions, I Designed A Web UI For An AI-Powered HR Co-Pilot That Helps
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cost Breakdown Section */}
            <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-br from-blue-50 to-blue-100 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32">
                <div className="container mx-auto px-2 sm:px-4 md:px-6">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-6 sm:mb-8 md:mb-12">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B2E3C] mb-3 md:mb-4">
                                Cost Breakdown
                            </h2>
                            <p className="text-gray-600 text-xs sm:text-sm md:text-base px-2 sm:px-4 max-w-3xl mx-auto leading-relaxed">
                                This Section Outlines The Complete Cost Structure For MBBS Abroad. Everything
                                <br className="hidden md:block" />
                                Related To Expenses Are Explained Clearly For Easy Understanding.
                            </p>
                        </div>

                        {/* Cost Table */}
                        <div className="bg-white rounded-xl md:rounded-2xl shadow-lg overflow-x-auto">
                            <div className="min-w-[700px]">
                                {/* Table Header */}
                                <div className="grid grid-cols-4 bg-[#F5B800] text-[#0B2E3C] font-bold text-sm sm:text-base md:text-lg">
                                    <div className="p-3 sm:p-4 md:p-5 text-center border-r border-[#E5A800]">Country</div>
                                    <div className="p-3 sm:p-4 md:p-5 text-center border-r border-[#E5A800]">Academic</div>
                                    <div className="p-3 sm:p-4 md:p-5 text-center border-r border-[#E5A800]">Hostel & Mesh</div>
                                    <div className="p-3 sm:p-4 md:p-5 text-center">Total</div>
                                </div>

                                {/* Table Rows */}
                                {[
                                    {
                                        country: "GEORGIA",
                                        flag: "/images/georgia.webp",
                                        academic: { primary: "5,10,000 INR", secondary: "6,000 USD" },
                                        hostel: { primary: "2,55,000 INR", secondary: "3,000 USD" },
                                        total: { primary: "7,65,000 INR", secondary: "9,000 USD" }
                                    },
                                    {
                                        country: "KAZAKHSTAN",
                                        flag: "/images/kazakhstan.webp",
                                        academic: { primary: "3,74,000 INR", secondary: "4,800 USD" },
                                        hostel: { primary: "59,500 INR", secondary: "700 USD" },
                                        total: { primary: "28,05,000 INR", secondary: "33,000 USD" }
                                    },
                                    {
                                        country: "UZBEKISTAN",
                                        flag: "/images/uzbekistan.webp",
                                        academic: { primary: "6,16,250 INR", secondary: "7250 USD" },
                                        hostel: { primary: "51,000 INR", secondary: "600 USD" },
                                        total: { primary: "6,16,250 INR", secondary: "7250 USD" }
                                    },
                                    {
                                        country: "NEPAL",
                                        flag: "/images/nepal.webp",
                                        academic: { primary: "26,00,000 INR" },
                                        hostel: { primary: "1,44,000 INR" },
                                        total: { primary: "69,68,280 INR" }
                                    },
                                    {
                                        country: "RUSSIA",
                                        flag: "/images/russia.webp",
                                        academic: { primary: "3,60,000 RB" },
                                        hostel: { primary: "18,000 RB" },
                                        total: { primary: "3,78,000 RB" }
                                    },
                                    {
                                        country: "SINGAPORE",
                                        flag: "/images/singapore.webp",
                                        academic: { primary: "76450 USD" },
                                        hostel: { primary: "265 TO 605 USD" },
                                        total: { primary: "77055 USD" }
                                    },
                                    {
                                        country: "KRYGYSTAN",
                                        flag: "/images/kyrgyzstan.webp",
                                        academic: { primary: "2200 USD" },
                                        hostel: { primary: "600 USD" },
                                        total: { primary: "2800 USD" }
                                    },
                                    {
                                        country: "BANGLADESH",
                                        flag: "/images/bangladesh.webp",
                                        academic: { primary: "-" },
                                        hostel: { primary: "-" },
                                        total: { primary: "-" }
                                    }
                                ].map((row, idx) => (
                                    <div
                                        key={idx}
                                        className="grid grid-cols-4 border-b border-gray-100 hover:bg-gray-50 transition-colors py-2 sm:py-3 md:py-4"
                                    >
                                        <div className="px-4 sm:px-6 md:px-8 flex items-center gap-3 md:gap-4">
                                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden flex-shrink-0 shadow-sm border border-gray-100">
                                                <Image
                                                    src={row.flag}
                                                    alt={`${row.country} Flag`}
                                                    width={40}
                                                    height={40}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <span className="text-gray-500 font-semibold text-xs sm:text-sm tracking-wide">{row.country}</span>
                                        </div>
                                        <div className="p-2 text-center flex flex-col items-center justify-center">
                                            <span className="text-gray-600 font-medium text-xs sm:text-sm md:text-base">{row.academic.primary}</span>
                                            {row.academic.secondary && (
                                                <span className="text-gray-400 text-[10px] sm:text-xs">{row.academic.secondary}</span>
                                            )}
                                        </div>
                                        <div className="p-2 text-center flex flex-col items-center justify-center border-x border-gray-50">
                                            <span className="text-gray-600 font-medium text-xs sm:text-sm md:text-base">{row.hostel.primary}</span>
                                            {row.hostel.secondary && (
                                                <span className="text-gray-400 text-[10px] sm:text-xs">{row.hostel.secondary}</span>
                                            )}
                                        </div>
                                        <div className="p-2 text-center flex flex-col items-center justify-center">
                                            <span className="text-gray-700 font-bold text-xs sm:text-sm md:text-base">{row.total.primary}</span>
                                            {row.total.secondary && (
                                                <span className="text-gray-400 text-[10px] sm:text-xs font-normal">{row.total.secondary}</span>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Notes */}
            <section className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-20 mb-12 sm:mb-16 md:mb-24">
                <div className="max-w-5xl mx-auto">
                    <div className="mt-4 sm:mt-6 bg-white border-2 border-dashed border-gray-300 rounded-xl p-3 sm:p-4 md:p-6">
                        <div className="space-y-2">
                            <div className="flex items-start gap-2">
                                <span className="text-red-500 font-bold flex-shrink-0 text-sm sm:text-base md:text-lg">Note:-</span>
                                <div className="space-y-1 text-xs sm:text-sm md:text-base">
                                    <p className="text-green-600">
                                        1. This Service Charge Includes The Visa Charges But Does Not Cover The Ticket Charges.
                                    </p>
                                    <p className="text-green-600">
                                        2. Get The Offer Price 99,999 Before NEET Result
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br /> <br />
        </div>
    );
}
