'use client';


import Link from 'next/link';
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';
import MainMenu from '../nav/MainMenu';
import MobileMenu from '../nav/MobileMenu';
import { useState } from 'react';
import { mainMenuData } from '@/data/mainMenuData';


export default function Header() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <section className='bg-white px-3 text-center py-3 lg:hidden'>
        <div className='flex flex-wrap gap-2 justify-center text-xs'>
          <Link className='text-[#121212]' href="mailto:info@radicaleducation.in">info@radicaleducation.in</Link>|
          <Link className='text-[#121212]' href="tel:+91 9797972465">97 97 97 24 65</Link>|
          <Link href="/neet-college-predictor" className='text-[#121212] relative'>NEET COLLEGE PREDICTOR
            <div className='absolute right-[-5px] top-[-5px]'>
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF0000] opacity-75"></span>
                <span className="relative inline-flex size-2 rounded-full bg-[#FF0000]"></span>
              </span>
            </div>
          </Link>|
          <Link className='text-[#121212]' href="/neet-ug">NEET UG</Link>|
          <Link href="/neet-webinar" className='text-[#121212] relative'>NEET WEBINAR
            <div className='absolute right-[-5px] top-[-5px]'>
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF0000] opacity-75"></span>
                <span className="relative inline-flex size-2 rounded-full bg-[#FF0000]"></span>
              </span>
            </div>
          </Link>
          <div className='flex items-center justify-center gap-4 w-full'>
            <Link href="https://twitter.com/Radical_Edu_" target='_blank'>
              <Image src='/images/twitter.svg' width='16' height='16' alt="" />
            </Link>
            <Link href="https://www.facebook.com/profile.php?id=61556350017734" target='_blank'>
              <Image src='/images/facebook.svg' width='18' height='18' alt="" />
            </Link>
            <Link href="https://www.instagram.com/radicaleducationofficial/" target='_blank'>
              <Image src='/images/instagram.svg' width='16' height='16' alt="" />
            </Link>
            <Link href="https://www.linkedin.com/company/radical-education-official/about/?viewAsMember=true" target='_blank'>
              <Image src='/images/linkedin.svg' width='16' height='16' alt="" />
            </Link>
            <Link href="https://whatsapp.com/channel/0029Vajjreq0G0Xmr5ILp81P" target='_blank'>
              <Image src='/images/whatsapp.svg' width='20' height='20' alt="" />
            </Link>
            <Link href="https://t.me/radicaleducation" target='_blank'>
              <Image src='/images/teligram.svg' width='18' height='18' alt="" />
            </Link>
            <Link href="https://www.youtube.com/@radicaleducationofficial" target='_blank'>
              <Image src='/images/youtube.svg' width='20' height='20' alt="" />
            </Link>
          </div>
        </div>
      </section>
      <header className="w-full sticky top-0 left-0 z-[100]">
        <section className='hdrTop bg-white py-3 lg:bg-[#ffffff] w-full  top-0 left-0 z-[100]'>
          <div className='container px-3 flex items-center justify-between'>
            <div className='flex items-center gap-6'>
              <Link href="/" className="headerLogo">
                <Image src="/logo.webp" alt="Logo" width="145" />
              </Link>
              <div className='hidden lg:flex items-center gap-3 text-[14px] text-[#121212] topInfo'>
                <Link className='text-[#121212]' href="mailto:info@radicaleducation.in">info@radicaleducation.in</Link>|
                <Link className='text-[#121212]' href="tel:+91 9797972465">97 97 97 24 65</Link>|
                <Link href="/neet-college-predictor" className='text-[#121212] relative'>NEET COLLEGE PREDICTOR
                  <div className='absolute right-[-5px] top-[-5px]'>
                    <span className="relative flex size-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF0000] opacity-75"></span>
                      <span className="relative inline-flex size-2 rounded-full bg-[#FF0000]"></span>
                    </span>
                  </div>
                </Link>|
                <Link className='text-[#121212]' href="/neet-ug">NEET UG</Link>|
                <Link href="/neet-webinar" className='text-[#121212] relative'>NEET WEBINAR
                  <div className='absolute right-[-5px] top-[-5px]'>
                    <span className="relative flex size-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF0000] opacity-75"></span>
                      <span className="relative inline-flex size-2 rounded-full bg-[#FF0000]"></span>
                    </span>
                  </div>
                </Link>
              </div>
            </div>
            <div className='flex items-center lg:gap-6 gap-3'>
              <div className='hidden lg:flex items-center gap-4'>
                <Link href="https://twitter.com/Radical_Edu_" target='_blank'>
                  <Image src='/images/twitter.svg' width='16' height='16' alt="" />
                </Link>
                <Link href="https://www.facebook.com/profile.php?id=61556350017734" target='_blank'>
                  <Image src='/images/facebook.svg' width='18' height='18' alt="" />
                </Link>
                <Link href="https://www.instagram.com/radicaleducationofficial/" target='_blank'>
                  <Image src='/images/instagram.svg' width='16' height='16' alt="" />
                </Link>
                <Link href="https://www.linkedin.com/company/radical-education-official/about/?viewAsMember=true" target='_blank'>
                  <Image src='/images/linkedin.svg' width='16' height='16' alt="" />
                </Link>
                <Link href="https://whatsapp.com/channel/0029Vajjreq0G0Xmr5ILp81P" target='_blank'>
                  <Image src='/images/whatsapp.svg' width='20' height='20' alt="" />
                </Link>
                <Link href="https://t.me/radicaleducation" target='_blank'>
                  <Image src='/images/teligram.svg' width='18' height='18' alt="" />
                </Link>
                <Link href="https://www.youtube.com/@radicaleducationofficial" target='_blank'>
                  <Image src='/images/youtube.svg' width='20' height='20' alt="" />
                </Link>
              </div>
              <div className='lg:hidden'>
                <Button size="small" className='text-white! bg-[#CB1E17]! border-[#CB1E17]! p-0! h-10 w-10 flex justify-center items-center' rounded>
                  <i className='pi pi-youtube text-xl!'></i>
                </Button>
              </div>
              <div className='lg:hidden'>
                <Link href="/neet-update" className='text-xs py-3 pl-4 pr-10 rounded-full cursor-pointer relative text-white! bg-gradient-to-r! from-[#00CFB2]! to-[#005A8B]! border-[#00CFB2]! inline-block'>
                  <span className='text-nowrap'>NEET UPDATE</span>
                  <Image src='/images/mic.webp' width='40' height='50' alt='' className='absolute right-[-8px] top-0 animate-bounce' />
                </Link>
              </div>
              <div className='lg:hidden'>
                <button className='btnico cursor-pointer relative' onClick={() => setVisible(true)}><i className='pi pi-bars text-2xl! text-black'></i></button>
              </div>
            </div>
          </div>
        </section>
        <section className='hdrBtm hidden lg:block bg-[rgba(0,0,0,0.3)] backdrop-blur-[10px] absolute w-full left-0'>
          <div className="container px-3 py-2 flex items-center justify-between relative">
            <div className='deskMnu'><MainMenu mainMenuData={mainMenuData} /></div>
            <div className='flex gap-5 items-center'>
              <div className="flex gap-3">
                <Button size="small" icon="pi pi-youtube" label="YOUTUBE" className='text-white! bg-[#CB1E17]! border-[#CB1E17]!' rounded />
                <Link href="/neet-update" className='text-sm py-2 pl-4 pr-10 rounded-full cursor-pointer relative text-white! bg-gradient-to-r! from-[#00CFB2]! to-[#005A8B]! border-[#00CFB2]! flex items-center'>
                  <span className='text-center'>NEET UPDATE</span>
                  <Image src='/images/mic.webp' width='50' height='60' alt='' className='absolute right-[-15px] -top-1.5 animate-bounce' />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </header>
      <MobileMenu visible={visible} setVisible={setVisible} />
    </>
  );
}

