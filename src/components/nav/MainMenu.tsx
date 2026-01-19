'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { MenuItem } from 'primereact/menuitem';
import { Skeleton } from 'primereact/skeleton';
import { Button } from 'primereact/button';
import { mainMenuData } from '@/data/mainMenuData';
import { Menubar } from 'primereact/menubar';

export default function MainMenu({ mainMenuData }: any) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, []);


    return (
        <>
            {loading ? (
                <div className="lg:flex-row flex-col flex gap-4 py-3">
                    <Skeleton width="97px" height="1rem" />
                    <Skeleton width="97px" height="1rem" />
                    <Skeleton width="97px" height="1rem" />
                    <Skeleton width="97px" height="1rem" />
                    <Skeleton width="97px" height="1rem" />
                    <Skeleton width="97px" height="1rem" />
                    <Skeleton width="97px" height="1rem" />
                    <Skeleton width="97px" height="1rem" />
                </div>
            ) : (
                <nav>
                    <ul className="flex gap-4 firstLVLmnu">
                        {/* FIRST LEVEL */}
                        {mainMenuData.map((level1: any, i: number) => (
                        <li key={i} className="relative group">
                            <Link
                            href={level1.url || '#'}
                            className="flex items-center gap-2 px-2 py-2 text-white"
                            >
                            {level1.label}
                            {level1.items?.length > 0 && (
                                <i className="pi pi-angle-down text-xs" />
                            )}
                            </Link>

                            {/* SECOND LEVEL */}
                            {level1.items?.length > 0 && (
                            <ul className="secondLVLmnu absolute left-0 top-full hidden min-w-[220px] bg-white shadow-lg group-hover:block">
                                {level1.items.map((level2: any, j: number) => (
                                <li key={j} className="group/item">
                                    <Link
                                    href={level2.url || '#'}
                                    className="flex items-center justify-between px-4 py-3 text-sm"
                                    >
                                    {level2.label}
                                    {level2.items?.length > 0 && (
                                        <i className="pi pi-angle-right text-xs" />
                                    )}
                                    </Link>

                                    {/* THIRD LEVEL */}
                                    {level2.items?.length > 0 && (
                                    <ul className="thirdLVLmnu absolute left-full top-0 hidden min-w-[220px] bg-[#DFF1FF] shadow-lg group-hover/item:block">
                                        {level2.items.map((level3: any, k: number) => (
                                        <li key={k}>
                                            <Link
                                            href={level3.url || '#'}
                                            className="block px-4 py-3 text-sm"
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

