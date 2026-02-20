"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import NeetDetails from "@/components/neet-update-details/neet-details";
import { useWebSocket } from "@/hooks/useWebSocket";
import { getNeetUpdates, type NeetUpdate as ApiNeetUpdate } from "@/lib/api";

// Define types for NEET updates (using the imported type)
interface NeetUpdate extends ApiNeetUpdate {
    date: string; // Override to ensure string type for display
}

// Fetch NEET updates using the API service
async function fetchNeetUpdates(): Promise<NeetUpdate[]> {
    return await getNeetUpdates();
}

// Mock Data for the articles (using fetched data or fallback)
const NeetUpdateContent = () => {
    const [articles, setArticles] = useState<NeetUpdate[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    
    // Calculate pagination values
    const totalPages = Math.ceil(articles.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentArticles = articles.slice(startIndex, endIndex);
    const [isCourseOpen, setIsCourseOpen] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState("MBBS");
    const [newUpdateCount, setNewUpdateCount] = useState(0);
    const { addMessageHandler } = useWebSocket();

    const searchParams = useSearchParams();
    const showDetails = searchParams.get("details") === "true";

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
                console.error('Error loading articles:', error);
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

                {/* Hero Content */}
                <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex flex-col md:flex-row items-start md:items-end justify-between pb-8 md:pb-20 text-white">
                    <div className="max-w-2xl pt-10 md:pt-0 top-20">
                        <span className="text-[#38b6ff] font-medium text-xs sm:text-sm md:text-base mb-1 sm:mb-2 block">
                            {articles[0]?.date || "19 Jan 2022"}
                        </span>
                        <Link href="?details=true" target="_blank">
                            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight mb-3 sm:mb-1 hover:text-[#38b6ff] transition-colors cursor-pointer">
                                {articles[0]?.title || "NEET Exam in India: Your Gateway to a Bright Medical Career"}
                            </h1>
                        </Link>
                        <p className="text-gray-200 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mb-6 md:-mb-1 line-clamp-3 md:line-clamp-none">
                            {articles[0]?.description || "Invite Your Friends And Unlock Exclusive Benefits—Earn More With Every Successful Referral. Invite Your Friends And Unlock Exclusive Benefits Invite Your Friends And Unlock Exclusive"}
                        </p>
                    </div>

                    {/* Slider Arrows (Visual Only) - Hidden on smallest phones for better layout */}
                    <div className="flex justify-center md:justify-start w-full md:w-auto gap-4 mt-4 md:mt-0 md:mb-8 shrink-0">
                        <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition">
                            <i className="pi pi-arrow-left text-xs sm:text-sm"></i>
                        </button>
                        <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition">
                            <i className="pi pi-arrow-right text-xs sm:text-sm"></i>
                        </button>
                    </div>
                </div>
            </section>

            {/* New Updates Indicator */}
            {newUpdateCount > 0 && (
                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-2">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg p-3 text-center animate-pulse">
                        <div className="flex items-center justify-center gap-2">
                            <i className="pi pi-bell text-lg"></i>
                            <span className="font-semibold">
                                {newUpdateCount} New Update{newUpdateCount > 1 ? 's' : ''} Received!
                            </span>
                            <i className="pi pi-bell text-lg"></i>
                        </div>
                    </div>
                </div>
            )}

            {/* Search & Filter Section */}
            <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-6 md:py-12">
                <div className="flex flex-col xl:flex-row items-center justify-between gap-6">
                    {/* Search Bar */}
                    <div className="flex flex-col sm:flex-row items-center gap-3 w-full xl:w-auto">
                        <div className="relative w-full sm:w-[320px]">
                            <input
                                type="text"
                                placeholder="search here"
                                className="w-full h-11 sm:h-12 rounded-full pl-6 pr-4 bg-white border border-gray-100 shadow-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-100 text-sm"
                            />
                        </div>
                        <button className="h-11 sm:h-12 w-full sm:w-auto px-8 rounded-full bg-[#005A8B] text-white font-medium hover:bg-[#024d7a] transition shadow-md text-sm">
                            Search
                        </button>
                    </div>

                    {/* Filters */}
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 w-full xl:w-auto justify-center xl:justify-end">
                        <button className="h-9 sm:h-10 px-4 sm:px-6 rounded-full bg-[#2CBF0F] text-white font-medium hover:bg-[#34a834] transition shadow-sm text-sm">
                            All
                        </button>

                        <div className="relative">
                            <button
                                onClick={() => setIsCourseOpen(!isCourseOpen)}
                                className="h-9 sm:h-10 px-4 sm:px-6 rounded-full bg-[#E0F4FF] text-[#035f94] font-medium flex items-center gap-2 hover:bg-[#d1e9fc] transition shadow-sm text-sm"
                            >
                                Course
                                <i className={`pi pi-chevron-down text-[10px] sm:text-xs transition-transform ${isCourseOpen ? 'rotate-180' : ''}`}></i>
                            </button>

                            {/* Dropdown Menu - Responsive width */}
                            {isCourseOpen && (
                                <div className="absolute top-12 left-1/2 -translate-x-1/2 sm:left-0 sm:translate-x-0 z-50 w-[280px] sm:w-[340px] bg-[#E0F4FF] border border-blue-100 rounded-2xl shadow-xl p-4 sm:p-5 animate-in fade-in zoom-in duration-200">
                                    <div className="grid grid-cols-2 gap-2 sm:gap-3">
                                        {[
                                            "MBBS",
                                            "BDS",
                                            "MS",
                                            "BNB",
                                            "MD",
                                            "AYUSH"
                                        ].map((course) => (
                                            <button
                                                key={course}
                                                onClick={() => {
                                                    setSelectedCourse(course);
                                                    setIsCourseOpen(false);
                                                }}
                                                className={`
                                                    h-10 sm:h-12 rounded-lg font-semibold text-xs sm:text-sm transition-all shadow-sm border
                                                    ${selectedCourse === course
                                                        ? "bg-gradient-to-r from-[#3facb1] to-[#0d6ea6] text-white border-transparent shadow-md"
                                                        : "bg-transparent border-[#0B6096] text-[#0B6096] hover:bg-white hover:border-[#3facb1]"
                                                    }
                                                `}
                                            >
                                                {course}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {["Year", "Months", "State"].map((filter) => (
                            <div key={filter} className="relative">
                                <button
                                    className="h-9 sm:h-10 px-4 sm:px-6 rounded-full bg-[#E0F4FF] text-[#035f94] font-medium flex items-center gap-2 hover:bg-[#d1e9fc] transition shadow-sm text-sm"
                                >
                                    {filter}
                                    <i className="pi pi-chevron-down text-[10px] sm:text-xs"></i>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Articles Grid */}
            <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pb-10 sm:pb-16">
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
                                    src={article.imageUrl || "/images/neet-update/card.webp"}
                                    alt="Article Thumbnail"
                                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="flex-1 py-1 sm:pr-2">
                                <span className="text-[#38b6ff] text-[10px] sm:text-xs font-semibold block mb-1 sm:mb-2">
                                    {article.date}
                                </span>
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
            </section>

            {/* Pagination */}
            <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 pb-8 sm:pb-12">
                <div className="bg-white rounded-full py-1.5 sm:py-2 px-3 sm:px-4 inline-flex items-center justify-center gap-1 mx-auto relative left-1/2 -translate-x-1/2 shadow-sm border border-gray-100 overflow-x-auto max-w-[90vw] no-scrollbar">
                    <button 
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className={`whitespace-now600 px-2 h-8 sm:h-10 flex items-center justify-center transition text-xs sm:text-sm ${currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-400 hover:text-gray-600'}`}>
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