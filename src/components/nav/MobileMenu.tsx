'use client';

import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';
import Link from 'next/link';
import { MenuItem } from 'primereact/menuitem';
import { mainMenuData } from '@/data/mainMenuData';

interface MobileMenuProps {
    visible: boolean;
    setVisible: (value: boolean) => void;
}

export default function MobileMenu({ visible, setVisible }: MobileMenuProps) {

    /* ================= MENU STATE ================= */
    const [menuStack, setMenuStack] = useState<MenuItem[][]>([
        mainMenuData,
    ]);

    const [titleStack, setTitleStack] = useState<string[]>(['Menu']);

    const currentMenu: MenuItem[] =
        menuStack[menuStack.length - 1];

    const currentTitle =
        titleStack[titleStack.length - 1];

    const openSubMenu = (item: MenuItem) => {
        if (item.items) {
            setMenuStack(prev => [...prev, item.items as MenuItem[]]);
            setTitleStack(prev => [...prev, item.label as string]);
        }
    };

    const goBack = () => {
        setMenuStack(prev => prev.slice(0, -1));
        setTitleStack(prev => prev.slice(0, -1));
    };

    /* ================= HEADER ================= */
    const headerTemplate = () => (
        <div className="flex items-center justify-between bg-[#f1f1f1] w-full py-2">
            <Link href="/" className="text-xl font-bold text-blue-600">
                <Image src="/logo.webp" alt="Logo" width="100" />
            </Link>
            <button className="btnico" onClick={() => setVisible(false)}>
                <i className="pi pi-times text-xl text-black"></i>
            </button>
        </div>
    );

    return (
        <Sidebar
            visible={visible}
            onHide={() => setVisible(false)}
            position="left"
            className="w-[280px] mobile-sidebar"
            header={headerTemplate}
            showCloseIcon={false}
        >
            <div className="flex flex-col h-full">

                {/* ================= CONTENT ================= */}
                <div className="flex-1 overflow-auto">



                    {/* ===================== MENU ===================== */}
                    <div className="relative overflow-hidden">
                        <div
                            className="mobile-menu-wrapper"
                            style={{
                                transform: `translateX(-${(menuStack.length - 1) * 100}%)`,
                            }}
                        >
                            {menuStack.map((menuLevel, levelIndex) => (
                                <div key={levelIndex} className="mobile-menu-level">
                                    {/* LEVEL HEADER */}
                                    <div className="flex items-center gap-3 px-4 py-3 bg-[#005A8B]">
                                        {levelIndex > 0 && (
                                            <button onClick={goBack}>
                                                <i className="pi pi-arrow-left text-lg text-white"></i>
                                            </button>
                                        )}
                                        <span className="text-sm font-semibold text-white">
                                            {titleStack[levelIndex]}
                                        </span>
                                    </div>

                                    {/* LEVEL ITEMS */}
                                    <ul className="divide-y divide-[#eee]">
                                        {menuLevel.map((item, index) => (
                                            <li
                                                key={index}
                                                className="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-gray-100"
                                            >
                                                {item.url ? (
                                                    <Link
                                                        href={item.url}
                                                        onClick={() => setVisible(false)}
                                                        className="flex-1 text-[14px]"
                                                    >
                                                        {item.label}
                                                    </Link>
                                                ) : (
                                                    <span className="flex-1 text-[14px]">
                                                        {item.label}
                                                    </span>
                                                )}

                                                {item.items && (
                                                    <button
                                                        onClick={() => openSubMenu(item)}
                                                    >
                                                        <i className="pi pi-angle-right"></i>
                                                    </button>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ================= FOOTER ================= */}
                <div className="p-3 bg-[#f1f1f1] flex flex-col gap-2">
                    <Button
                        size="small"
                        icon="pi pi-youtube"
                        label="YOUTUBE"
                        className="text-white! bg-[#CB1E17]! border-[#CB1E17]!"
                        rounded
                    />

                    <button className="pl-4 h-[43px] pr-12 rounded-full cursor-pointer relative text-white! bg-gradient-to-r! from-[#00CFB2]! to-[#005A8B]! border-[#00CFB2]!">
                        <span>NEET UPDATE</span>
                        <Image
                            src="/images/mic.webp"
                            width="40"
                            height="50"
                            alt=""
                            className="absolute right-[-5px] top-[2px] animate-bounce"
                        />
                    </button>
                </div>
            </div>
        </Sidebar>
    );
}

