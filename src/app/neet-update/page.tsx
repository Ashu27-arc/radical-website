"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import NeetDetails from "@/components/neet-update-details/neet-details";
import { useWebSocket } from "@/hooks/useWebSocket";
import { getNeetUpdates, type NeetUpdate as ApiNeetUpdate } from "@/lib/api";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

// Define types for NEET updates (using the imported type)
interface NeetUpdate extends ApiNeetUpdate {
    date: string; // Override to ensure string type for display
}

// Fetch NEET updates using the API service
async function fetchNeetUpdates(): Promise<NeetUpdate[]> {
    return await getNeetUpdates();
}

// Static hero section data (not fetched from CRM)
const HERO_SECTION_DATA = {
    // date: "15 Apr 2026",
    title: "NEET Exam in India: Your gateway to a bright medical career",
    description: "Find all the important NEET updates, including exam dates, syllabus, result, and so much more. Stay ahead with the latest news related to NEET in one place."
};

const categoryColors: Record<string, string> = {
    'Counselling Update': 'bg-[#FFEBEE] text-[#D32F2F]',
    'Updates': 'bg-[#E1F5FE] text-[#0288D1]',
    'Entrance Exam': 'bg-[#FFE0B2] text-[#C77700]',
    'NTA': 'bg-[#FFF9C4] text-[#F9A825]',
};

const defaultCategoryColor = 'bg-[#E3F2FD] text-[#005A8B]';
const getCategoryColor = (cat: string) => categoryColors[cat] || defaultCategoryColor;

const PLACEHOLDER_IMAGE = "/images/neet-update/card.webp";
const CRM_API_BASE = process.env.NEXT_PUBLIC_CRM_API_URL || "https://backend-radical.onrender.com";

function getArticleImageSrc(imageUrl: string | undefined): string {
    if (!imageUrl) return PLACEHOLDER_IMAGE;
    if (imageUrl.startsWith("http://") || imageUrl.startsWith("https://")) return imageUrl;
    const path = imageUrl.startsWith("/") ? imageUrl : `/uploads/${imageUrl}`;
    return `${CRM_API_BASE.replace(/\/$/, "")}${path}`;
}

// Articles fetched from CRM (excluding hero section)
const NeetUpdateContent = () => {
    const [articles, setArticles] = useState<NeetUpdate[]>([]);
    const [loading, setLoading] = useState(true);
    // Calculate pagination values (initially empty, will be updated by filteredArticles)
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    // Filter states
    const [selectedFilters, setSelectedFilters] = useState<{ [key: string]: string[] }>({
        courses: [],
        categories: [],
        years: [],
        months: [],
        states: []
    });
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState("");

    // Calculate filtered articles
    const filteredArticles = articles.filter(article => {
        // Search query filter
        const matchesSearch = searchQuery === "" ||
            article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.description.toLowerCase().includes(searchQuery.toLowerCase());

        if (!matchesSearch) return false;

        // Courses filter
        if (selectedFilters.courses.length > 0 && (!article.course || !selectedFilters.courses.includes(article.course))) {
            return false;
        }

        // Categories filter
        if (selectedFilters.categories.length > 0 && (!article.category || !selectedFilters.categories.includes(article.category))) {
            return false;
        }

        // Years filter
        if (selectedFilters.years.length > 0 && (!article.year || !selectedFilters.years.includes(article.year.toString()))) {
            return false;
        }

        // Months filter
        if (selectedFilters.months.length > 0 && (!article.month || !selectedFilters.months.includes(article.month))) {
            return false;
        }

        // States filter
        if (selectedFilters.states.length > 0 && (!article.state || !selectedFilters.states.includes(article.state))) {
            return false;
        }

        return true;
    });

    const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentArticles = filteredArticles.slice(startIndex, endIndex);

    const [newUpdateCount, setNewUpdateCount] = useState(0);
    const wsUrl = process.env.NEXT_PUBLIC_WS_URL || 'wss://backend-radical.onrender.com';
    const { addMessageHandler } = useWebSocket(wsUrl);

    // Filter options
    const FILTER_OPTIONS = {
        courses: ["MBBS", "BDS", "MS", "BNB", "MD", "AYUSH"],
        categories: ["Counselling Update", "Updates", "Entrance Exam", "NTA"],
        years: ["2024", "2025", "2026"],
        months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        states: ["Maharashtra", "Delhi", "Karnataka", "Tamil Nadu", "Uttar Pradesh", "West Bengal", "Gujarat"]
    };

    const toggleFilter = (category: string, value: string) => {
        setSelectedFilters(prev => {
            const current = prev[category];
            const updated = current.includes(value)
                ? current.filter(v => v !== value)
                : [...current, value];
            return { ...prev, [category]: updated };
        });
    };

    const removeTag = (category: string, value: string) => {
        setSelectedFilters(prev => ({
            ...prev,
            [category]: prev[category].filter(v => v !== value)
        }));
    };

    const clearAllFilters = () => {
        setSelectedFilters({
            courses: [],
            categories: [],
            years: [],
            months: [],
            states: []
        });
    };

    const hasFilters = Object.values(selectedFilters).some(arr => arr.length > 0);

    const searchParams = useSearchParams();
    const showDetails = searchParams.get("details") === "true";

    // Fetch articles from CRM (for grid section only, hero section is static)
    useEffect(() => {
        const loadArticles = async () => {
            setLoading(true);
            try {
                const data = await fetchNeetUpdates();
                // Convert date format for display
                const formattedData = data.map(article => ({
                    ...article,
                    date: new Date(article.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                    })
                }));
                setArticles(formattedData);
            } catch (error) {
                console.error('Error loading articles from CRM:', error);
                // Set empty array on error to show no results
                setArticles([]);
            } finally {
                setLoading(false);
            }
        };

        loadArticles();
    }, []);

    // Handle real-time WebSocket updates
    useEffect(() => {
        const removeHandler = addMessageHandler((data) => {
            console.log('Received NEET update message:', data);

            switch (data.type) {
                case 'NEW_NEET_UPDATE':
                    if (data.update) {
                        const newArticle = {
                            ...data.update,
                            date: new Date(data.update.date).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric'
                            })
                        };

                        // Add to the beginning of the list
                        setArticles(prev => [newArticle, ...prev]);
                        // Increment new update counter
                        setNewUpdateCount(prev => prev + 1);

                        // Auto-reset counter after 10 seconds
                        setTimeout(() => {
                            setNewUpdateCount(0);
                        }, 10000);
                    }
                    break;

                case 'UPDATE_NEET_UPDATE':
                    if (data.update) {
                        const updatedArticle = {
                            ...data.update,
                            date: new Date(data.update.date).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric'
                            })
                        };

                        // Update existing article
                        setArticles(prev =>
                            prev.map(article =>
                                article.id === data.update.id ? updatedArticle : article
                            )
                        );
                    }
                    break;

                case 'DELETE_NEET_UPDATE':
                    if (data.updateId) {
                        // Remove deleted article
                        setArticles(prev => {
                            const filtered = prev.filter(article => article.id !== data.updateId);
                            console.log(`Removed article with ID: ${data.updateId}. Remaining: ${filtered.length}`);
                            return filtered;
                        });
                    } else {
                        console.warn('DELETE_NEET_UPDATE received without updateId');
                    }
                    break;
            }
        });

        return () => {
            removeHandler();
        };
    }, [addMessageHandler]);

    if (showDetails) {
        return <NeetDetails />;
    }

    if (loading) {
        return (
            <div className="bg-[#Fdfdfd] min-h-screen py-10 flex items-center justify-center">
                <div className="text-center">
                    <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
                        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
                    </div>
                    <p className="mt-4 text-gray-500">Loading NEET updates...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-[#Fdfdfd] min-h-screen pb-10 md:pb-20 py-1">
            <FloatingWhatsApp />
            {/* Hero Section */}
            <section className="relative w-full h-[350px] sm:h-[400px] md:h-[500px]">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('/images/neet-update/hero-section.webp')",
                    }}
                >
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>

                {/* Hero Content - Static (not fetched from CRM) */}
                <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex flex-col md:flex-row items-start md:items-end justify-between pb-8 md:pb-20 text-white">
                    <div className="max-w-2xl pt-10 md:pt-0 top-20">
                        {/* <span className="text-[#38b6ff] font-medium text-xs sm:text-sm md:text-base mb-1 sm:mb-2 block">
                            {HERO_SECTION_DATA.date}
                        </span> */}
                        <Link href="?details=true" target="_blank">
                            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold font-weight-700 leading-tight mb-3 sm:mb-1 hover:text-[#38b6ff] transition-colors cursor-pointer">
                                {HERO_SECTION_DATA.title}
                            </h1>
                        </Link>
                        <p className="text-gray-200 text-xs sm:text-sm md:text-base font-normal font-weight-500 leading-relaxed max-w-2xl mb-6 md:-mb-1 line-clamp-3 md:line-clamp-none">
                            {HERO_SECTION_DATA.description}
                        </p>
                    </div>


                </div>
            </section>

            {/* Search & Filter Section */}
            <section className="sticky top-[80px] md:top-[130px] z-40 w-full bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100 transition-all duration-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-4 sm:py-6">
                    <div className="flex flex-col xl:flex-row items-center justify-between gap-4">
                        <div className="relative w-full sm:w-[400px]">
                            <input
                                type="text"
                                placeholder="search updates..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full h-10 sm:h-12 rounded-full pl-6 pr-12 bg-white border border-gray-200 shadow-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-100 text-sm sm:text-base"
                            />
                            <button className="absolute right-1.5 top-1/2 -translate-y-1/2 h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-[#005A8B] text-white flex items-center justify-center hover:bg-[#024d7a] transition shadow-md">
                                <i className="pi pi-search text-xs sm:text-sm"></i>
                            </button>
                        </div>

                        {/* Filters */}
                        <div className="flex flex-wrap items-center gap-2 sm:gap-3 w-full xl:w-auto justify-center xl:justify-end">
                            <button
                                onClick={clearAllFilters}
                                className={`h-9 sm:h-10 px-4 sm:px-6 rounded-full font-medium transition shadow-sm text-sm ${!hasFilters ? 'bg-[#2CBF0F] text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
                            >
                                All
                            </button>

                            {/* Dropdowns */}
                            {Object.entries(FILTER_OPTIONS).map(([category, options]) => (
                                <div key={category} className="relative">
                                    <button
                                        onClick={() => setOpenDropdown(openDropdown === category ? null : category)}
                                        className={`h-8 sm:h-9 px-3 sm:px-4 rounded-full font-medium flex items-center gap-2 transition shadow-sm text-sm
                                            ${selectedFilters[category].length > 0
                                                ? "bg-[#035f94] text-white"
                                                : "bg-[#E0F4FF] text-[#035f94] hover:bg-[#d1e9fc]"
                                            }`}
                                    >
                                        {selectedFilters[category].length === 0
                                            ? category.charAt(0).toUpperCase() + category.slice(1)
                                            : selectedFilters[category].length === 1
                                                ? selectedFilters[category][0]
                                                : `${category.charAt(0).toUpperCase() + category.slice(1)} (${selectedFilters[category].length})`
                                        }
                                        <i className={`pi pi-chevron-down text-[10px] sm:text-xs transition-transform ${openDropdown === category ? 'rotate-180' : ''}`}></i>
                                    </button>

                                    {openDropdown === category && (
                                        <div className="absolute top-10 right-0 z-50 w-[280px] sm:w-[350px] bg-white border border-gray-100 rounded-2xl shadow-xl p-4 animate-in fade-in zoom-in duration-200">
                                            <div className="grid grid-cols-2 gap-2">
                                                {options.map((option) => (
                                                    <button
                                                        key={option}
                                                        onClick={() => {
                                                            toggleFilter(category, option);
                                                        }}
                                                        className={`
                                                            h-10 sm:h-12 rounded-lg font-semibold text-xs sm:text-sm transition-all shadow-sm border
                                                            ${selectedFilters[category].includes(option)
                                                                ? "bg-gradient-to-r from-[#3facb1] to-[#0d6ea6] text-white border-transparent shadow-md"
                                                                : "bg-transparent border-[#0B6096] text-[#0B6096] hover:bg-white hover:border-[#3facb1]"
                                                            }
                                                        `}
                                                    >
                                                        {option}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tags Section */}
                    {hasFilters && (
                        <div className="mt-4 flex flex-wrap items-center gap-2 animate-in fade-in slide-in-from-top-2 duration-300">
                            {Object.entries(selectedFilters).map(([category, values]) =>
                                values.map(value => (
                                    <div
                                        key={`${category}-${value}`}
                                        className="flex items-center gap-1.5 px-3 py-1 bg-white border border-[#E0F4FF] text-[#035f94] rounded-full text-xs font-medium shadow-sm group hover:border-[#035f94] transition-all"
                                    >
                                        <span>{value}</span>
                                        <button
                                            onClick={() => removeTag(category, value)}
                                            className="text-gray-400 group-hover:text-red-500 transition-colors"
                                        >
                                            <i className="pi pi-times text-[10px]"></i>
                                        </button>
                                    </div>
                                ))
                            )}
                            <button
                                onClick={clearAllFilters}
                                className="ml-2 text-[#035f94] font-bold text-xs sm:text-sm hover:text-[#024d7a] transition-colors flex items-center gap-1"
                            >
                                <i className="pi pi-trash text-[10px]"></i>
                                Clear All
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Articles Grid - Fetched from CRM */}
            <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pb-10 sm:pb-16">
                {filteredArticles.length === 0 && !loading ? (
                    <div className="text-center py-12">
                        <p className="text-gray-500">No NEET updates available for the selected filters.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-8">
                        {currentArticles.map((article, index) => (
                            <Link
                                key={`${article.id}-${startIndex + index}`}
                                href="?details=true"
                                target="_blank"
                                className="bg-white rounded-2xl p-3 sm:p-4 transition border border-gray-50 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start hover:shadow-md transition-shadow cursor-pointer block"
                            >
                                <div className="w-full sm:w-[180px] md:w-[200px] h-[180px] sm:h-[160px] flex-shrink-0 rounded-xl overflow-hidden relative block">
                                    <img
                                        src={getArticleImageSrc(article.imageUrl)}
                                        alt="Article Thumbnail"
                                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                                        onError={(e) => {
                                            const target = e.currentTarget;
                                            if (target.src !== PLACEHOLDER_IMAGE) {
                                                target.src = PLACEHOLDER_IMAGE;
                                            }
                                        }}
                                    />
                                </div>
                                <div className="flex-1 py-1 sm:pr-2">
                                    <div className="flex items-center justify-between mb-1 sm:mb-2">
                                        <span className="text-[#38b6ff] text-[10px] sm:text-xs font-semibold">
                                            {article.date}
                                        </span>
                                        {article.category && (
                                            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${getCategoryColor(article.category)}`}>
                                                {article.category}
                                            </span>
                                        )}
                                    </div>
                                    <div>
                                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight mb-2 sm:mb-3 hover:text-[#035f94] transition-colors line-clamp-2">
                                            {article.title}
                                        </h3>
                                    </div>
                                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-1 line-clamp-2 sm:line-clamp-3">
                                        {article.description}
                                    </p>
                                    <div className="mt-2 text-gray-500 text-xs sm:text-sm">
                                        <span className="text-gray-400 hover:text-[#035f94] transition block">Read More...</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </section>

            {/* Pagination - For CRM fetched articles */}
            {filteredArticles.length > 0 && (
                <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 pb-8 sm:pb-12">
                    <div className="bg-white rounded-full py-1.5 sm:py-2 px-3 sm:px-4 inline-flex items-center justify-center gap-1 mx-auto relative left-1/2 -translate-x-1/2 shadow-sm border border-gray-100 overflow-x-auto max-w-[90vw] no-scrollbar">
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className={`whitespace-nowrap px-2 h-8 sm:h-10 flex items-center justify-center transition text-xs sm:text-sm ${currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-400 hover:text-gray-600'}`}>
                            <i className="pi pi-chevron-left text-[10px] sm:text-xs mr-1"></i> Prev
                        </button>

                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                            <button
                                key={pageNum}
                                onClick={() => setCurrentPage(pageNum)}
                                className={`w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0 flex items-center justify-center rounded-full text-xs sm:text-sm font-medium transition-all ${pageNum === currentPage
                                    ? "bg-[#2980b9] text-white shadow-md"
                                    : "text-gray-500 hover:bg-gray-50"
                                    }`}
                            >
                                {pageNum}
                            </button>
                        ))}

                        <button
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className={`whitespace-nowrap px-2 h-8 sm:h-10 flex items-center justify-center transition text-xs sm:text-sm ${currentPage === totalPages ? 'text-gray-300 cursor-not-allowed' : 'text-gray-400 hover:text-gray-600'}`}>
                            Next <i className="pi pi-chevron-right text-[10px] sm:text-xs ml-1"></i>
                        </button>
                    </div>
                </section>
            )}
        </div>
    );
}

export default function NeetUpdatePage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <NeetUpdateContent />
        </Suspense>
    );
}