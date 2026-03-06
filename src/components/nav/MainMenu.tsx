'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { Skeleton } from 'primereact/skeleton';

export default function MainMenu({ mainMenuData }: any) {
    const [loading, setLoading] = useState(true);
    const [openLevel1, setOpenLevel1] = useState<number | null>(null);
    const [openLevel2, setOpenLevel2] = useState<string | null>(null); // "level1Index-level2Index"
    const [selectedLevel3, setSelectedLevel3] = useState<string | null>(null); // "level1Index-level2Index-level3Index"
    const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 500);
        return () => clearTimeout(timer);
    }, []);

    const clearCloseTimer = () => {
        if (closeTimerRef.current) {
            clearTimeout(closeTimerRef.current);
            closeTimerRef.current = null;
        }
    };

    const handleLevel1Enter = (i: number) => {
        clearCloseTimer();
        setOpenLevel1(i);
        // Automatically select first submenu item if it has children
        const firstItemWithChildren = mainMenuData[i]?.items?.findIndex((item: any) => item.items && item.items.length > 0);
        if (firstItemWithChildren !== -1) {
            setOpenLevel2(`${i}-${firstItemWithChildren}`);
            // Auto-select first item in level 3 submenu
            setSelectedLevel3(`${i}-${firstItemWithChildren}-0`);
        } else {
            setOpenLevel2(null);
            setSelectedLevel3(null);
        }
    };

    const handleLevel1Leave = () => {
        closeTimerRef.current = setTimeout(() => {
            setOpenLevel1(null);
            setOpenLevel2(null);
            setSelectedLevel3(null);
        }, 500);
    };

    return (
        <>
            {loading ? (
                <div className="lg:flex-row flex-col flex gap-4 py-3">
                    {[...Array(8)].map((_, i) => (
                        <Skeleton key={i} width="97px" height="1rem" />
                    ))}
                </div>
            ) : (
                <nav>
                    <ul className="flex gap-4 firstLVLmnu">
                        {mainMenuData.map((level1: any, i: number) => (
                            <li
                                key={i}
                                className="relative group"
                                onMouseEnter={() => level1.items && level1.items.length > 0 && handleLevel1Enter(i)}
                                onMouseLeave={handleLevel1Leave}
                            >
                                <Link
                                    href={level1.url || '#'}
                                    className="flex items-center gap-2 px-2 py-2 text-white"
                                >
                                    {level1.label}
                                    {level1.items && level1.items.length > 0 && (
                                        <i className="pi pi-angle-down text-xs" />
                                    )}
                                </Link>

                                {level1.items && level1.items.length > 0 && (
                                    <ul
                                        className={`secondLVLmnu absolute left-0 top-full z-50 min-w-[220px] bg-white pt-2 px-2 pb-0 shadow-lg ${openLevel1 === i ? 'block' : 'hidden'}`}
                                        style={{ borderRadius: '16px' }}
                                    >
                                        {level1.items.map((level2: any, j: number) => (
                                            <li
                                                key={j}
                                                className="group/item"
                                                onMouseEnter={() => {
                                                    const id = `${i}-${j}`;
                                                    if (level2.items && level2.items.length > 0) {
                                                        setOpenLevel2(id);
                                                        // Auto-select first item in level 3 submenu
                                                        setSelectedLevel3(`${id}-0`);
                                                    } else {
                                                        // Close any open submenu when hovering over item without children
                                                        setOpenLevel2(null);
                                                        setSelectedLevel3(null);
                                                    }
                                                }}
                                            >
                                                <Link
                                                    href={level2.url || '#'}
                                                    className={`flex items-center justify-between gap-2 px-4 py-3 text-sm transition-colors overflow-hidden ${openLevel2 === `${i}-${j}` ? 'bg-gray-100' : 'hover:bg-gray-100'}`}
                                                    style={{ 
                                                        borderTopLeftRadius: '12px',
                                                        borderTopRightRadius: '12px',
                                                        borderBottomLeftRadius: '12px',
                                                        borderBottomRightRadius: '12px'
                                                    }}
                                                    onClick={(e) => {
                                                        if (level2.items && level2.items.length > 0) {
                                                            e.preventDefault();
                                                            const id = `${i}-${j}`;
                                                            setOpenLevel2((prev) => (prev === id ? null : id));
                                                        }
                                                    }}
                                                >
                                                    <span>{level2.label}</span>
                                                    {level2.items && level2.items.length > 0 && (
                                                        <span className="w-7 h-7 rounded-full bg-transparent flex items-center justify-center shrink-0 border border-white">
                                                            <i className="pi pi-arrow-right text-white text-xs flex items-center justify-center" />
                                                        </span>
                                                    )}
                                                </Link>

                                                {level2.items && level2.items.length > 0 && (
                                                    <ul
                                                        className={`thirdLVLmnu absolute left-full top-0 z-50 min-w-[220px] bg-[#DFF1FF] pt-2 px-2 pb-0 shadow-lg ${openLevel2 === `${i}-${j}` ? 'block' : 'hidden'}`}
                                                        style={{ borderRadius: '16px' }}
                                                    >
                                                        {level2.items.map((level3: any, k: number) => (
                                                            <li 
                                                                key={k}
                                                                onMouseEnter={() => setSelectedLevel3(`${i}-${j}-${k}`)}
                                                            >
                                                                <Link
                                                                    href={level3.url || '#'}
                                                                    className={`block px-4 py-3 text-sm transition-colors overflow-hidden ${selectedLevel3 === `${i}-${j}-${k}` ? 'bg-white/70' : 'hover:bg-white/70'}`}
                                                                    style={{ 
                                                                        borderTopLeftRadius: '12px',
                                                                        borderTopRightRadius: '12px',
                                                                        borderBottomLeftRadius: '12px',
                                                                        borderBottomRightRadius: '12px'
                                                                    }}
                                                                >
                                                                    {level3.label}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </>
    );
}
