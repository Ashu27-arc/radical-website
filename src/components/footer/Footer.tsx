'use client';
import { importantLinks, mbbsAbroad, mbbsIndia, quickLinks } from '@/data/footerMenus';
import Link from 'next/link';
import { Image } from 'primereact/image';
import { Menu } from 'primereact/menu';
import { useState } from 'react';

export default function Footer() {

  const [showAll, setShowAll] = useState(false);

  const visibleItems = showAll ? mbbsIndia : mbbsIndia.slice(0, 14);

  return (
    <footer className="footer">
      <div className='py-16 bg-[#DFF1FF]'>
        <div className="container lg:px-3 pl-3">
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-[#4A4A4A]'>

            <div>
              <Link href="/" className="">
                <Image src="/logo.webp" alt="Logo" width="180" />
              </Link>
              <div className="text-sm my-6 pb-6 border-b border-[#0B2E3C]">
                Invite your friends and unlock exclusive benefits—earn more with every successful referral. Invite your friends and unlock exclusive benefits—earn more with every successful referral.
              </div>
              <div className='flex items-center gap-4 mb-8'>
                <div>
                  <Image src='/images/iso.webp' alt='ISO' width='60' height='60' />
                </div>
                <div className='text-xs text-[#0B2E3C] leading-3'>Radical Education<br />is an <span className='text-sm font-semibold'>ISO 9001:2015</span><br />certified company</div>
              </div>
              <div className='flex items-center gap-4 text-[#005A8B]'>
                <Link target='_blank' href="https://twitter.com/Radical_Edu_"><i className='pi pi-twitter'></i></Link>
                <Link target='_blank' href="https://www.facebook.com/profile.php?id=61556350017734"><i className='pi pi-facebook'></i></Link>
                <Link target='_blank' href="https://www.instagram.com/radicaleducationofficial/"><i className='pi pi-instagram'></i></Link>
                <Link target='_blank' href="https://www.linkedin.com/company/radical-education-official/about/?viewAsMember=true"><i className='pi pi-linkedin'></i></Link>
                <Link target='_blank' href="https://whatsapp.com/channel/0029Vajjreq0G0Xmr5ILp81P"><i className='pi pi-whatsapp'></i></Link>
                <Link target='_blank' href="https://t.me/radicaleducation"><i className='pi pi-telegram'></i></Link>
                <Link target='_blank' href="https://www.youtube.com/@radicaleducationofficial"><i className='pi pi-youtube'></i></Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-black mb-3">Quick Links</h4>
              <ul className="space-y-3 mb-6">
                {importantLinks.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.url || '#'}
                      className="flex items-center gap-1 text-sm transition text-nowrap"
                    >
                      <i className={item.icon || 'pi pi-angle-right'} />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <h4 className="font-semibold text-black mb-3">Contact Us</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <i className="pi pi-phone" />
                  97 97 97 24 65
                </li>
                <li className="flex items-center gap-2">
                  <i className="pi pi-envelope" />
                  info@radicaleducation.in
                </li>
                <li className="flex items-start gap-2">
                  <i className="pi pi-map-marker mt-1" />
                  <span>
                    C-56/30, 3rd Floor, Sector-62<br />
                    Noida, Uttar Pradesh
                  </span>
                </li>
              </ul>
            </div>

            <div className='lg:pl-20'>
              <h4 className="font-semibold text-black mb-3">Quick Links</h4>
              <ul className="space-y-3 mb-6">
                {quickLinks.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.url || '#'}
                      className="flex items-center gap-1 text-sm transition"
                    >
                      <i className={item.icon || 'pi pi-angle-right'} />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <h4 className="font-semibold text-black mb-3">MBBS Abroad</h4>
              <ul className="space-y-3">
                {mbbsAbroad.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.url || '#'}
                      className="flex items-center gap-1 text-sm transition"
                    >
                      <i className={item.icon || 'pi pi-angle-right'} />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className='lg:pl-20'>
              <h4 className="font-semibold text-black mb-3">MBBS India</h4>
              <ul className="space-y-3">
                {visibleItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.url || "#"}
                      className="flex items-center gap-1 text-sm transition"
                    >
                      <i className={item.icon || "pi pi-angle-right"} />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {mbbsIndia.length > 15 && (
                <div className='mt-4'>
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="mt-3 flex items-center gap-2 text-sm font-medium text-black cursor-pointer"
                >
                  <span>{showAll ? "View Less" : "View More"}</span>

                  <i
                    className={`pi text-sm! ${
                      showAll ? "pi-arrow-up-right" : "pi-arrow-down-right"
                    }`}
                  />
                </button>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
      
      <div className="bg-[#005A8B] py-6 sm:py-8">
        <div className="container px-4 sm:px-6 lg:px-3">
          <div className="mb-4 sm:mb-6">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-2 sm:mb-3">
              <Link href="/mbbs-india" className="relative z-2 overflow-hidden px-3 py-1.5 sm:px-6 sm:py-2 
             rounded-full border border-white text-white 
             text-xs sm:text-sm whitespace-nowrap
             transition-colors duration-300
             hover:text-[#005A8B]
             before:absolute before:inset-0
             before:bg-white
             before:translate-y-[100%]
             before:transition-transform before:duration-300
             hover:before:-translate-y-0
             before:z-[-1]">
                MBBS India
              </Link>
              <Link href="/study-abroad" className="relative z-2 overflow-hidden px-3 py-1.5 sm:px-6 sm:py-2 
             rounded-full border border-white text-[#005A8B] 
             text-xs sm:text-sm whitespace-nowrap
             transition-colors duration-300
             hover:text-[#005A8B]
             before:absolute before:inset-0
             before:bg-white
             before:translate-y-0
             before:transition-transform before:duration-300
             hover:before:translate-y-0
             before:z-[-1]">
                Study Abroad
              </Link>
              <Link href="/mbbs" className="relative z-2 overflow-hidden px-3 py-1.5 sm:px-6 sm:py-2 
             rounded-full border border-white text-white 
             text-xs sm:text-sm whitespace-nowrap
             transition-colors duration-300
             hover:text-[#005A8B]
             before:absolute before:inset-0
             before:bg-white
             before:translate-y-[100%]
             before:transition-transform before:duration-300
             hover:before:-translate-y-0
             before:z-[-1]">
                MBBS
              </Link>
              <Link href="/bds" className="relative z-2 overflow-hidden px-3 py-1.5 sm:px-6 sm:py-2 
             rounded-full border border-white text-white 
             text-xs sm:text-sm whitespace-nowrap
             transition-colors duration-300
             hover:text-[#005A8B]
             before:absolute before:inset-0
             before:bg-white
             before:translate-y-[100%]
             before:transition-transform before:duration-300
             hover:before:-translate-y-0
             before:z-[-1]">
                BDS
              </Link>
              <Link href="/bams" className="relative z-2 overflow-hidden px-3 py-1.5 sm:px-6 sm:py-2 
             rounded-full border border-white text-white 
             text-xs sm:text-sm whitespace-nowrap
             transition-colors duration-300
             hover:text-[#005A8B]
             before:absolute before:inset-0
             before:bg-white
             before:translate-y-[100%]
             before:transition-transform before:duration-300
             hover:before:-translate-y-0
             before:z-[-1]">
                BAMS
              </Link>
              <Link href="/bnys" className="relative z-2 overflow-hidden px-3 py-1.5 sm:px-6 sm:py-2 
             rounded-full border border-white text-white 
             text-xs sm:text-sm whitespace-nowrap
             transition-colors duration-300
             hover:text-[#005A8B]
             before:absolute before:inset-0
             before:bg-white
             before:translate-y-[100%]
             before:transition-transform before:duration-300
             hover:before:-translate-y-0
             before:z-[-1]">
                BNYS
              </Link>
              <Link href="/bsms" className="relative z-2 overflow-hidden px-3 py-1.5 sm:px-6 sm:py-2 
             rounded-full border border-white text-white 
             text-xs sm:text-sm whitespace-nowrap
             transition-colors duration-300
             hover:text-[#005A8B]
             before:absolute before:inset-0
             before:bg-white
             before:translate-y-[100%]
             before:transition-transform before:duration-300
             hover:before:-translate-y-0
             before:z-[-1]">
                BSMS
              </Link>
              <Link href="/bums" className="relative z-2 overflow-hidden px-3 py-1.5 sm:px-6 sm:py-2 
             rounded-full border border-white text-white 
             text-xs sm:text-sm whitespace-nowrap
             transition-colors duration-300
             hover:text-[#005A8B]
             before:absolute before:inset-0
             before:bg-white
             before:translate-y-[100%]
             before:transition-transform before:duration-300
             hover:before:-translate-y-0
             before:z-[-1]">
                BUMS
              </Link>
              <Link href="/bhms" className="relative z-2 overflow-hidden px-3 py-1.5 sm:px-6 sm:py-2 
             rounded-full border border-white text-white 
             text-xs sm:text-sm whitespace-nowrap
             transition-colors duration-300
             hover:text-[#005A8B]
             before:absolute before:inset-0
             before:bg-white
             before:translate-y-[100%]
             before:transition-transform before:duration-300
             hover:before:-translate-y-0
             before:z-[-1]">
                BHMS
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              <Link href="/md" className="relative z-2 overflow-hidden px-3 py-1.5 sm:px-6 sm:py-2 
             rounded-full border border-white text-white 
             text-xs sm:text-sm whitespace-nowrap
             transition-colors duration-300
             hover:text-[#005A8B]
             before:absolute before:inset-0
             before:bg-white
             before:translate-y-[100%]
             before:transition-transform before:duration-300
             hover:before:-translate-y-0
             before:z-[-1]">
                MD
              </Link>
              <Link href="/ms" className="relative z-2 overflow-hidden px-3 py-1.5 sm:px-6 sm:py-2 
             rounded-full border border-white text-white 
             text-xs sm:text-sm whitespace-nowrap
             transition-colors duration-300
             hover:text-[#005A8B]
             before:absolute before:inset-0
             before:bg-white
             before:translate-y-[100%]
             before:transition-transform before:duration-300
             hover:before:-translate-y-0
             before:z-[-1]">
                MS
              </Link>
              <Link href="/dnb" className="relative z-2 overflow-hidden px-3 py-1.5 sm:px-6 sm:py-2 
             rounded-full border border-white text-white 
             text-xs sm:text-sm whitespace-nowrap
             transition-colors duration-300
             hover:text-[#005A8B]
             before:absolute before:inset-0
             before:bg-white
             before:translate-y-[100%]
             before:transition-transform before:duration-300
             hover:before:-translate-y-0
             before:z-[-1]">
                DNB
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-x-2 sm:gap-x-4 gap-y-2 text-white text-xs sm:text-sm pt-4 sm:pt-6">
            <Link href="/nepal" className="relative flex items-center gap-0.5 sm:gap-1 shrink-0
             after:absolute after:left-5 after:bottom-0
             after:h-[1px] after:w-0
             after:bg-white
             after:transition-all after:duration-300
             hover:after:w-[80%]">
              <i className="pi pi-angle-right text-[10px] sm:text-xs" />
              Nepal
            </Link>
            <span className="text-white/50 hidden sm:inline">|</span>
            <Link href="/russia" className="relative flex items-center gap-0.5 sm:gap-1 shrink-0
             after:absolute after:left-5 after:bottom-0
             after:h-[1px] after:w-0
             after:bg-white
             after:transition-all after:duration-300
             hover:after:w-[80%]">
              <i className="pi pi-angle-right text-[10px] sm:text-xs" />
              Russia
            </Link>
            <span className="text-white/50 hidden sm:inline">|</span>
            <Link href="/georgia" className="relative flex items-center gap-0.5 sm:gap-1 shrink-0
             after:absolute after:left-5 after:bottom-0
             after:h-[1px] after:w-0
             after:bg-white
             after:transition-all after:duration-300
             hover:after:w-[80%]">
              <i className="pi pi-angle-right text-[10px] sm:text-xs" />
              Georgia
            </Link>
            <span className="text-white/50 hidden sm:inline">|</span>
            <Link href="/singapore" className="relative flex items-center gap-0.5 sm:gap-1 shrink-0
             after:absolute after:left-5 after:bottom-0
             after:h-[1px] after:w-0
             after:bg-white
             after:transition-all after:duration-300
             hover:after:w-[80%]">
              <i className="pi pi-angle-right text-[10px] sm:text-xs" />
              Singapore
            </Link>
            <span className="text-white/50 hidden sm:inline">|</span>
            <Link href="/bangladesh" className="relative flex items-center gap-0.5 sm:gap-1 shrink-0
             after:absolute after:left-5 after:bottom-0
             after:h-[1px] after:w-0
             after:bg-white
             after:transition-all after:duration-300
             hover:after:w-[80%]">
              <i className="pi pi-angle-right text-[10px] sm:text-xs" />
              Bangladesh
            </Link>
            <span className="text-white/50 hidden sm:inline">|</span>
            <Link href="/uzbekistan" className="relative flex items-center gap-0.5 sm:gap-1 shrink-0
             after:absolute after:left-5 after:bottom-0
             after:h-[1px] after:w-0
             after:bg-white
             after:transition-all after:duration-300
             hover:after:w-[80%]">
              <i className="pi pi-angle-right text-[10px] sm:text-xs" />
              Uzbekistan
            </Link>
            <span className="text-white/50 hidden sm:inline">|</span>
            <Link href="/kazakhstan" className="relative flex items-center gap-0.5 sm:gap-1 shrink-0
             after:absolute after:left-5 after:bottom-0
             after:h-[1px] after:w-0
             after:bg-white
             after:transition-all after:duration-300
             hover:after:w-[80%]">
              <i className="pi pi-angle-right text-[10px] sm:text-xs" />
              Kazakhstan
            </Link>
            <span className="text-white/50 hidden sm:inline">|</span>
            <Link href="/kyrgyzstan" className="relative flex items-center gap-0.5 sm:gap-1 shrink-0
             after:absolute after:left-5 after:bottom-0
             after:h-[1px] after:w-0
             after:bg-white
             after:transition-all after:duration-300
             hover:after:w-[80%]">
              <i className="pi pi-angle-right text-[10px] sm:text-xs" />
              Kyrgyzstan
            </Link>
          </div>
        </div>
      </div>
      <div className="text-white text-center py-6 text-sm bg-[#00446A]">
        © {new Date().getFullYear()} Radical Education | BINARAMA. All rights reserved.
      </div>
    </footer>
  );
}

