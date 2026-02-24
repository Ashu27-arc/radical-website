'use client';

import { useState } from 'react';
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
    const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
    const [studyIndiaDropdownOpen, setStudyIndiaDropdownOpen] = useState(false);
    const [studyAbroadDropdownOpen, setStudyAbroadDropdownOpen] = useState(false);

    const openSubMenu = (item: MenuItem) => {
        if (item.label === 'Services') {
            // Toggle services dropdown instead of navigating to submenu
            setServicesDropdownOpen(!servicesDropdownOpen);
            return;
        }

        if (item.label === 'Study India') {
            // Toggle study india dropdown instead of navigating to submenu
            setStudyIndiaDropdownOpen(!studyIndiaDropdownOpen);
            return;
        }

        if (item.label === 'Study Abroad') {
            // Toggle study abroad dropdown instead of navigating to submenu
            setStudyAbroadDropdownOpen(!studyAbroadDropdownOpen);
            return;
        }

        // Close dropdowns when opening other submenus
        setServicesDropdownOpen(false);
        setStudyIndiaDropdownOpen(false);
        setStudyAbroadDropdownOpen(false);

        if (item.items) {
            setMenuStack(prev => [...prev, item.items as MenuItem[]]);
            setTitleStack(prev => [...prev, item.label as string]);
        }
    };

    const goBack = () => {
        setMenuStack(prev => prev.slice(0, -1));
        setTitleStack(prev => prev.slice(0, -1));
        setServicesDropdownOpen(false); // Close services dropdown when going back
        setStudyIndiaDropdownOpen(false); // Close study india dropdown when going back
        setStudyAbroadDropdownOpen(false); // Close study abroad dropdown when going back
    };

    /* ================= HEADER ================= */
    const headerTemplate = () => (
        <div className="flex items-center justify-between bg-[#f1f1f1] w-full py-2">
            <Link href="/" className="text-xl font-bold text-blue-600">
                <Image src="/logo.webp" alt="Logo" width="100" />
            </Link>
            <button className="btnico" onClick={() => {
                setVisible(false);
                setServicesDropdownOpen(false); // Reset dropdown state when closing
                setStudyIndiaDropdownOpen(false); // Reset study india dropdown state when closing
                setStudyAbroadDropdownOpen(false); // Reset study abroad dropdown state when closing
            }}>
                <i className="pi pi-times text-xl text-black"></i>
            </button>
        </div>
    );

    const handleSidebarHide = () => {
        setVisible(false);
        setServicesDropdownOpen(false); // Reset dropdown state when hiding
        setStudyIndiaDropdownOpen(false); // Reset study india dropdown state when hiding
        setStudyAbroadDropdownOpen(false); // Reset study abroad dropdown state when hiding
    };

    return (
        <>
            <Sidebar
                visible={visible}
                onHide={handleSidebarHide}
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
                                                <li key={index}>
                                                    <div
                                                        className="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200"
                                                        onClick={() => item.items ? openSubMenu(item) : null}
                                                    >
                                                        {item.url ? (
                                                            <Link
                                                                href={item.url}
                                                                onClick={() => {
                                                                    setVisible(false);
                                                                    setServicesDropdownOpen(false);
                                                                    setStudyIndiaDropdownOpen(false);
                                                                    setStudyAbroadDropdownOpen(false);
                                                                }}
                                                                className="flex-1 text-[14px] hover:text-blue-600 active:text-blue-700 transition-colors duration-200"
                                                            >
                                                                {item.label}
                                                            </Link>
                                                        ) : (
                                                            <span className="flex-1 text-[14px]">
                                                                {item.label}
                                                            </span>
                                                        )}

                                                        {item.items && (
                                                            <i className={`pi transition-all duration-200 hover:scale-110 hover:text-[#005A8B] ${item.label === 'Services' && servicesDropdownOpen
                                                                ? 'pi-chevron-up'
                                                                : item.label === 'Services'
                                                                    ? 'pi-chevron-down'
                                                                    : item.label === 'Study India' && studyIndiaDropdownOpen
                                                                        ? 'pi-chevron-up'
                                                                        : item.label === 'Study India'
                                                                            ? 'pi-chevron-down'
                                                                            : item.label === 'Study Abroad' && studyAbroadDropdownOpen
                                                                                ? 'pi-chevron-up'
                                                                                : item.label === 'Study Abroad'
                                                                                    ? 'pi-chevron-down'
                                                                                    : 'pi-angle-right'
                                                                }`}></i>
                                                        )}
                                                    </div>

                                                    {/* Services Dropdown */}
                                                    {item.label === 'Services' && item.items && (
                                                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${servicesDropdownOpen
                                                            ? 'max-h-[500px] opacity-100 my-2'
                                                            : 'max-h-0 opacity-0'
                                                            }`}>
                                                            <div className="bg-white rounded-2xl shadow-[0_4px_20px_-5px_rgba(0,0,0,0.15)] border border-gray-100 mx-3 ml-6 overflow-hidden">
                                                                {(item.items as MenuItem[]).map((subItem, subIndex) => (
                                                                    <div key={subIndex} className="border-b border-gray-100 last:border-b-0">
                                                                        {subItem.items ? (
                                                                            <div
                                                                                className="flex items-center justify-between px-6 py-3 cursor-pointer hover:bg-white active:bg-gray-100 transition-colors duration-200"
                                                                                onClick={() => openSubMenu(subItem)}
                                                                            >
                                                                                <span className="flex-1 text-[13px] text-gray-700">
                                                                                    {subItem.label}
                                                                                </span>
                                                                                <i className="pi pi-arrow-circle-right text-lg text-[#005A8B]"></i>
                                                                            </div>
                                                                        ) : subItem.url ? (
                                                                            <Link
                                                                                href={subItem.url}
                                                                                onClick={() => {
                                                                                    setVisible(false);
                                                                                    setServicesDropdownOpen(false);
                                                                                    setStudyIndiaDropdownOpen(false);
                                                                                    setStudyAbroadDropdownOpen(false);
                                                                                }}
                                                                                className="flex items-center justify-between px-6 py-3 text-[13px] text-gray-700 hover:text-[#005A8B] hover:bg-white active:bg-gray-100 transition-all duration-200"
                                                                            >
                                                                                <span>{subItem.label}</span>
                                                                                <i className="pi pi-arrow-circle-right text-[#005A8B] text-lg"></i>
                                                                            </Link>
                                                                        ) : (
                                                                            <div className="px-6 py-3 text-[13px] text-gray-700">
                                                                                {subItem.label}
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )}

                                                    {/* Study India Dropdown */}
                                                    {item.label === 'Study India' && item.items && (
                                                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${studyIndiaDropdownOpen
                                                            ? 'max-h-[600px] opacity-100 my-2'
                                                            : 'max-h-0 opacity-0'
                                                            }`}>
                                                            <div className="bg-white rounded-2xl shadow-[0_4px_20px_-5px_rgba(0,0,0,0.15)] border border-gray-100 mx-3 ml-6 overflow-hidden">
                                                                {(item.items as MenuItem[]).map((subItem, subIndex) => (
                                                                    <div key={subIndex} className="border-b border-gray-100 last:border-b-0">
                                                                        {subItem.items ? (
                                                                            <div
                                                                                className="flex items-center justify-between px-6 py-3 cursor-pointer hover:bg-white active:bg-gray-100 transition-colors duration-200"
                                                                                onClick={() => openSubMenu(subItem)}
                                                                            >
                                                                                <span className="flex-1 text-[13px] text-gray-700">
                                                                                    {subItem.label}
                                                                                </span>
                                                                                <i className="pi pi-arrow-circle-right text-lg text-[#005A8B]"></i>
                                                                            </div>
                                                                        ) : subItem.url ? (
                                                                            <Link
                                                                                href={subItem.url}
                                                                                onClick={() => {
                                                                                    setVisible(false);
                                                                                    setStudyIndiaDropdownOpen(false);
                                                                                    setServicesDropdownOpen(false);
                                                                                    setStudyAbroadDropdownOpen(false);
                                                                                }}
                                                                                className="flex items-center justify-between px-6 py-3 text-[13px] text-gray-700 hover:text-[#005A8B] hover:bg-white active:bg-gray-100 transition-all duration-200"
                                                                            >
                                                                                <span>{subItem.label}</span>
                                                                                <i className="pi pi-arrow-circle-right text-[#005A8B] text-lg"></i>
                                                                            </Link>
                                                                        ) : (
                                                                            <div className="px-6 py-3 text-[13px] text-gray-700">
                                                                                {subItem.label}
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )}

                                                    {/* Study Abroad Dropdown */}
                                                    {item.label === 'Study Abroad' && item.items && (
                                                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${studyAbroadDropdownOpen
                                                            ? 'max-h-[800px] opacity-100 my-2'
                                                            : 'max-h-0 opacity-0'
                                                            }`}>
                                                            <div className="bg-white rounded-2xl shadow-[0_4px_20px_-5px_rgba(0,0,0,0.15)] border border-gray-100 mx-3 ml-6 overflow-hidden">
                                                                {(item.items as MenuItem[]).map((subItem, subIndex) => (
                                                                    <div key={subIndex} className="border-b border-gray-100 last:border-b-0">
                                                                        {subItem.items ? (
                                                                            <div
                                                                                className="flex items-center justify-between px-6 py-3 cursor-pointer hover:bg-white active:bg-gray-100 transition-colors duration-200"
                                                                                onClick={() => openSubMenu(subItem)}
                                                                            >
                                                                                <span className="flex-1 text-[13px] text-gray-700">
                                                                                    {subItem.label}
                                                                                </span>
                                                                                <i className="pi pi-arrow-circle-right text-lg text-[#005A8B]"></i>
                                                                            </div>
                                                                        ) : subItem.url ? (
                                                                            <Link
                                                                                href={subItem.url}
                                                                                onClick={() => {
                                                                                    setVisible(false);
                                                                                    setStudyAbroadDropdownOpen(false);
                                                                                    setServicesDropdownOpen(false);
                                                                                    setStudyIndiaDropdownOpen(false);
                                                                                }}
                                                                                className="flex items-center justify-between px-6 py-3 text-[13px] text-gray-700 hover:text-[#005A8B] hover:bg-white active:bg-gray-100 transition-all duration-200"
                                                                            >
                                                                                <span>{subItem.label}</span>
                                                                                <i className="pi pi-arrow-circle-right text-[#005A8B] text-lg"></i>
                                                                            </Link>
                                                                        ) : (
                                                                            <div className="px-6 py-3 text-[13px] text-gray-700">
                                                                                {subItem.label}
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
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
        </>
    );
}

