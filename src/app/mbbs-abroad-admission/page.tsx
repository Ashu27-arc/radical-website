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
            <section className="relative bg-gradient-to-r from-[#0B5A7D] to-[#0E7BA8] py-6 sm:py-8 md:py-12 lg:py-20 overflow-hidden">
                <div className="absolute inset-0 opacity-40">
                    {/* Left Bottom Corner Image */}
                    <div className="absolute -bottom-10 sm:-bottom-20 md:-bottom-30 left-0 w-16 h-16 sm:w-24 sm:h-24 md:w-40 md:h-40 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
                        <Image
                            src="/images/study-abroad/left.webp"
                            alt="Decorative"
                            width={384}
                            height={384}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    
                    {/* Right Top Corner Image */}
                    <div className="absolute top-0 right-0 w-16 h-16 sm:w-24 sm:h-24 md:w-40 md:h-40 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
                        <Image
                            src="/images/study-abroad/right.webp"
                            alt="Decorative"
                            width={384}
                            height={384}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <div className="container mx-auto px-3 sm:px-4 md:px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2 sm:mb-3 md:mb-4 lg:mb-6">
                            STUDY <span className="text-[#4FC3F7]">ABROAD</span>
                        </h1>
                        <p className="text-white/90 text-xs sm:text-sm md:text-base lg:text-lg mb-3 sm:mb-4 md:mb-6 lg:mb-8 px-1 sm:px-2 md:px-4 leading-relaxed">
                            I Designed A Web UI For An AI-Powered HR Co-Pilot That Helps Info
                            Generate Job Descriptions And Screen Resumes
                        </p>

                        {/* World Map */}
                        <div className="relative max-w-3xl mx-auto px-1 sm:px-2 md:px-4">
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
            <section className="bg-white py-3 sm:py-4 md:py-6 lg:py-8">
                <div className="container mx-auto px-3 sm:px-4 md:px-6">
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
            <section className="py-12 md:py-16">
                <div className="container mx-auto px-4">
                    <div className="mb-8 md:mb-12 flex flex-col md:flex-row items-start justify-between gap-4">
                        <div>
                            <p className="text-gray-600 text-xs md:text-sm uppercase tracking-wider mb-2">
                                COUNTRIES
                            </p>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0B2E3C]">
                                Country <span className="text-[#287FC4]">We Serve</span>
                            </h2>
                        </div>
                        <p className="text-gray-600 text-sm md:text-base max-w-2xl leading-relaxed md:mt-8">
                            I Designed A Web UI For An AI-Powered HR Co-Pilot That Helps
                            <br className="hidden md:block" />
                            Info Generate Job Descriptions And Screen Resumes
                        </p>
                    </div>

                    {/* Country Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {countries.slice(0, 6).map((country) => (
                            <Link
                                key={country.id}
                                href={`/mbbs-abroad-admission/${country.slug}`}
                                className="block"
                            >
                                <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden aspect-square flex flex-col cursor-pointer">
                                    {/* Card Header */}
                                    <div className="p-3 flex items-center justify-between border-b flex-shrink-0">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-gray-200">
                                                <Image
                                                    src={country.flag}
                                                    alt={country.name}
                                                    width={32}
                                                    height={32}
                                                    className="w-full h-full object-conttain"
                                                />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-900 text-sm">
                                                    {country.name}
                                                </h3>
                                                <p className="text-xs text-gray-500">Just now</p>
                                            </div>
                                        </div>
                                        <button className="text-gray-400 hover:text-gray-600">
                                            <svg
                                                className="w-5 h-5"
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
                                    <div className="p-3 flex-shrink-0">
                                        {/* Engagement Stats */}
                                        <div className="flex items-center gap-3 mb-2 text-sm text-gray-600">
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
                                                        className="w-6 h-6 rounded-full overflow-hidden border-2 border-white"
                                                    >
                                                        <Image
                                                            src={user.avatar}
                                                            alt={user.name}
                                                            width={24}
                                                            height={24}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                            <p className="text-xs text-gray-600 line-clamp-1">
                                                Liked By{" "}
                                                <span className="font-semibold">
                                                    {country.users[0].name}
                                                </span>{" "}
                                                and others
                                            </p>
                                        </div>

                                        {/* Description */}
                                        <p className="text-xs text-gray-600 line-clamp-4">
                                            {country.description}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Bangladesh Card - Centered */}
                    <div className="flex justify-center mt-6">
                        <div className="w-full md:w-1/2 lg:w-1/3">
                            {countries.slice(6, 7).map((country) => (
                                <Link
                                    key={country.id}
                                    href={`/mbbs-abroad-admission/${country.slug}`}
                                    className="block"
                                >
                                    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden aspect-square flex flex-col cursor-pointer">
                                        {/* Card Header */}
                                        <div className="p-3 flex items-center justify-between border-b flex-shrink-0">
                                            <div className="flex items-center gap-2">
                                                <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-gray-200">
                                                    <Image
                                                        src={country.flag}
                                                        alt={country.name}
                                                        width={32}
                                                        height={32}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-gray-900 text-sm">
                                                        {country.name}
                                                    </h3>
                                                    <p className="text-xs text-gray-500">Just now</p>
                                                </div>
                                            </div>
                                            <button className="text-gray-400 hover:text-gray-600">
                                                <svg
                                                    className="w-5 h-5"
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
                                        <div className="p-3 flex-shrink-0">
                                            {/* Engagement Stats */}
                                            <div className="flex items-center gap-3 mb-2 text-sm text-gray-600">
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
                                                            className="w-6 h-6 rounded-full overflow-hidden border-2 border-white"
                                                        >
                                                            <Image
                                                                src={user.avatar}
                                                                alt={user.name}
                                                                width={24}
                                                                height={24}
                                                                className="w-full h-full object-cover"
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                                <p className="text-xs text-gray-600 line-clamp-1">
                                                    Liked By{" "}
                                                    <span className="font-semibold">
                                                        {country.users[0].name}
                                                    </span>{" "}
                                                    and others
                                                </p>
                                            </div>

                                            {/* Description */}
                                            <p className="text-xs text-gray-600 line-clamp-4">
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
            <section className="py-12 md:py-16 bg-[#005A8B] relative overflow-hidden mx-4 md:mx-8 lg:mx-30 rounded-2xl">
                {/* Top Left Corner Image - Outside opacity div */}
                <div className="absolute -top-35 left-5 w-80 h-80 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] lg:w-[25rem] lg:h-[25rem] z-10">
                    <Image
                        src="/images/study-abroad/left.webp"
                        alt="Decorative"
                        width={400}
                        height={400}
                        className="w-full h-full object-left opacity-80 drop-shadow-lg"
                    />
                </div>
                
                {/* Bottom Right Corner Image - Outside opacity div */}
                <div className="absolute -bottom-30 right-0 w-80 h-80 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] lg:w-[25rem] lg:h-[25rem] z-10">
                    <Image
                        src="/images/study-abroad/right.webp"
                        alt="Decorative"
                        width={400}
                        height={400}
                        className="w-full h-full object-cover opacity-80 drop-shadow-lg"
                    />
                </div>

                <div className="absolute inset-0 opacity-10">
                    {/* <div className="absolute top-5 left-5 md:top-10 md:left-10 text-white/20 text-5xl md:text-9xl font-bold">
                        MBBS
                    </div> */}
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-8 md:mb-12">
                            Why <span className="text-[#4FC3F7]">Abroad</span>
                        </h2>

                        <div className="space-y-4 md:space-y-6 text-sm md:text-base">
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
            <section className="py-12 md:py-16 bg-gradient-to-br from-blue-50 to-blue-100 px-4 sm:px-6 md:px-8 lg:px-20">
                <div className="container mx-auto px-2 md:px-6">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-8 md:mb-12">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B2E3C] mb-3 md:mb-4">
                                Cost Breakdown
                            </h2>
                            <p className="text-gray-600 text-sm md:text-base px-4">
                                I Designed A Web UI For An AI-Powered HR Co-Pilot That Helps HRs
                                <br className="hidden md:block" />
                                Generate Job Descriptions And Screen Resumes
                            </p>
                        </div>

                        {/* Cost Table */}
                        <div className="bg-white rounded-xl md:rounded-2xl shadow-lg overflow-x-auto">
                            <div className="min-w-[600px]">
                                {/* Table Header */}
                                <div className="grid grid-cols-4 bg-[#F5B800] text-[#0B2E3C] font-bold text-xs md:text-base">
                                    <div className="p-2 md:p-4 text-center border-r border-[#E5A800]">Country</div>
                                    <div className="p-2 md:p-4 text-center border-r border-[#E5A800]">Academic</div>
                                    <div className="p-2 md:p-4 text-center border-r border-[#E5A800]">Hostel & Mesh</div>
                                    <div className="p-2 md:p-4 text-center">Total</div>
                                </div>

                                {/* Table Rows */}
                                {[1, 2, 3, 4].map((row) => (
                                    <div
                                        key={row}
                                        className="grid grid-cols-4 border-b border-gray-200 hover:bg-gray-50 transition-colors text-xs md:text-base"
                                    >
                                        <div className="p-2 md:p-4 flex items-center gap-2 md:gap-3">
                                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden flex-shrink-0">
                                                <Image
                                                    src="/images/georgia.webp"
                                                    alt="Germany Flag"
                                                    width={40}
                                                    height={40}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <span className="text-gray-600 font-medium">GERMANY</span>
                                        </div>
                                        <div className="p-2 md:p-4 text-center text-gray-700 flex items-center justify-center">
                                            ₹ 24,999
                                        </div>
                                        <div className="p-2 md:p-4 text-center text-gray-700 flex items-center justify-center">
                                            ₹ 24,999
                                        </div>
                                        <div className="p-2 md:p-4 text-center text-gray-700 font-semibold flex items-center justify-center">
                                            ₹ 24,999
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Notes */}
            <section className="container mx-auto px-4 md:px-6 lg:px-20 mb-12 md:mb-20">
                <div className="max-w-5xl mx-auto">
                    <div className="mt-6 bg-white border-2 border-dashed border-gray-300 rounded-xl p-4 md:p-6">
                        <div className="space-y-2">
                            <div className="flex items-start gap-2">
                                <span className="text-red-500 font-bold flex-shrink-0 text-sm md:text-base">Note:-</span>
                                <div className="space-y-1 text-sm md:text-base">
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
        </div>
    );
}
