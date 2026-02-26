'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { Skeleton } from 'primereact/skeleton';

export default function MainMenu({ mainMenuData }: any) {
    const [loading, setLoading] = useState(true);
    const [openLevel1, setOpenLevel1] = useState<number | null>(null);
    const [openLevel2, setOpenLevel2] = useState<string | null>(null); // "level1Index-level2Index"
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
        setOpenLevel2(null);
    };

    const handleLevel1Leave = () => {
        closeTimerRef.current = setTimeout(() => {
            setOpenLevel1(null);
            setOpenLevel2(null);
        }, 500);
    };

    const handleLevel2Leave = () => {
        closeTimerRef.current = setTimeout(() => setOpenLevel2(null), 500);
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
                                        className={`secondLVLmnu absolute left-0 top-full z-50 min-w-[220px] bg-white rounded-2xl px-1 shadow-lg ${openLevel1 === i ? 'block' : 'hidden'}`}
                                    >
                                        {level1.items.map((level2: any, j: number) => (
                                            <li
                                                key={j}
                                                className="group/item"
                                                onMouseEnter={() => {
                                                    clearCloseTimer();
                                                    if (level2.items && level2.items.length > 0) setOpenLevel2(`${i}-${j}`);
                                                }}
                                                onMouseLeave={() =>
                                                    level2.items && level2.items.length > 0 ? handleLevel2Leave() : undefined
                                                }
                                            >
                                                <Link
                                                    href={level2.url || '#'}
                                                    className="flex items-center justify-between gap-2 px-4 py-3 text-sm hover:bg-gray-50"
                                                >
                                                    <span>{level2.label}</span>
                                                    {level2.items && level2.items.length > 0 ? (
                                                        <span className="w-7 h-7 rounded-full bg-transparent flex items-center justify-center shrink-0 border border-white">
                                                            <i className="pi pi-arrow-right text-white text-xs flex items-center justify-center" />
                                                        </span>
                                                    ) : (
                                                        <span className="w-7 h-7 rounded-full bg-transparent flex items-center justify-center shrink-0 border border-white">
                                                            <i className="pi pi-arrow-right text-white text-xs flex items-center justify-center" />
                                                        </span>
                                                    )}
                                                </Link>

                                                {level2.items && level2.items.length > 0 && (
                                                    <ul
                                                        className={`thirdLVLmnu absolute left-full top-0 z-50 min-w-[220px] bg-[#DFF1FF] rounded-2xl px-1 shadow-lg ${openLevel2 === `${i}-${j}` ? 'block' : 'hidden'}`}
                                                    >
                                                        {level2.items.map((level3: any, k: number) => (
                                                            <li key={k}>
                                                                <Link
                                                                    href={level3.url || '#'}
                                                                    className="block px-4 py-3 text-sm hover:bg-white/60"
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
