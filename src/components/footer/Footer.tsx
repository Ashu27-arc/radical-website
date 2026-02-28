'use client';
import { importantLinks, quickLinks } from '@/data/footerMenus';
import Link from 'next/link';
import { Image } from 'primereact/image';
import { Fragment, useState } from 'react';

export default function Footer() {

  const [activeTab, setActiveTab] = useState<'study-abroad' | 'mbbs' | 'bds' | 'ayush' | 'md' | 'ms'>('study-abroad');

  const tabContent: Record<'study-abroad' | 'mbbs' | 'bds' | 'ayush' | 'md' | 'ms', { label: string; url: string }[]> = {
    'study-abroad': [
      { label: 'Nepal', url: '/mbbs-abroad-admission/nepal/' },
      { label: 'Russia', url: '/mbbs-abroad-admission/russia/' },
      { label: 'Georgia', url: '/mbbs-abroad-admission/georgia/' },
      { label: 'Singapore', url: '/mbbs-abroad-admission/singapore/' },
      { label: 'Bangladesh', url: '/mbbs-abroad-admission/bangladesh/' },
      { label: 'Uzbekistan', url: '/mbbs-abroad-admission/uzbekistan/' },
      { label: 'Kazakhstan', url: '/mbbs-abroad-admission/kazakhstan/' },
      { label: 'Kyrgyzstan', url: '/mbbs-abroad-admission/kyrgyzstan/' },
    ],
    'mbbs': [
      { label: 'Andhra Pradesh', url: '/mbbs-andhra-pradesh' },
      { label: 'Arunachal Pradesh', url: '/mbbs-arunachal-pradesh' },
      { label: 'Assam', url: '/mbbs-assam' },
      { label: 'Bihar', url: '/mbbs-bihar' },
      { label: 'Chhattisgarh', url: '/mbbs-chhattisgarh' },
      { label: 'Gujarat', url: '/mbbs-gujarat' },
      { label: 'Haryana', url: '/mbbs-haryana' },
      { label: 'Himachal Pradesh', url: '/mbbs-himachal-pradesh' },
      { label: 'Jharkhand', url: '/mbbs-jharkhand' },
      { label: 'Karnataka', url: '/mbbs-karnataka' },
      { label: 'Kerala', url: '/mbbs-kerala' },
      { label: 'Madhya Pradesh', url: '/mbbs-madhya-pradesh' },
      { label: 'Maharashtra', url: '/mbbs-maharashtra' },
      { label: 'Manipur', url: '/mbbs-manipur' },
      { label: 'Meghalaya', url: '/mbbs-meghalaya' },
      { label: 'Mizoram', url: '/mbbs-mizoram' },
      { label: 'Nagaland', url: '/mbbs-nagaland' },
      { label: 'Odisha', url: '/mbbs-odisha' },
      { label: 'Punjab', url: '/mbbs-punjab' },
      { label: 'Rajasthan', url: '/mbbs-rajasthan' },
      { label: 'Sikkim', url: '/mbbs-sikkim' },
      { label: 'Tamil Nadu', url: '/mbbs-tamil-nadu' },
      { label: 'Telangana', url: '/mbbs-telangana' },
      { label: 'Tripura', url: '/mbbs-tripura' },
      { label: 'Uttar Pradesh', url: '/mbbs-uttar-pradesh' },
      { label: 'Uttarakhand', url: '/mbbs-uttarakhand' },
      { label: 'West Bengal', url: '/mbbs-west-bengal' },
      { label: 'Delhi', url: '/mbbs-delhi' },
      { label: 'Jammu & Kashmir', url: '/mbbs-jammu-kashmir' },
      { label: 'Ladakh', url: '/mbbs-ladakh' },
      { label: 'Puducherry', url: '/mbbs-puducherry' },
      { label: 'Chandigarh', url: '/mbbs-chandigarh' },
    ],
    'bds': [
      { label: 'Andhra Pradesh', url: '/bds-andhra-pradesh' },
      { label: 'BDS in Arunachal Pradesh', url: '/bds-arunachal-pradesh' },
      { label: 'Assam', url: '/bds-assam' },
      { label: 'Bihar', url: '/bds-bihar' },
      { label: 'Chhattisgarh', url: '/bds-chhattisgarh' },
      { label: 'Gujarat', url: '/bds-gujarat' },
      { label: 'Haryana', url: '/bds-haryana' },
      { label: 'Himachal Pradesh', url: '/bds-himachal-pradesh' },
      { label: 'Jharkhand', url: '/bds-jharkhand' },
      { label: 'Karnataka', url: '/bds-karnataka' },
      { label: 'Kerala', url: '/bds-kerala' },
      { label: 'Madhya Pradesh', url: '/bds-madhya-pradesh' },
      { label: 'Maharashtra', url: '/bds-maharashtra' },
      { label: 'Manipur', url: '/bds-manipur' },
      { label: 'Meghalaya', url: '/bds-meghalaya' },
      { label: 'Mizoram', url: '/bds-mizoram' },
      { label: 'Nagaland', url: '/bds-nagaland' },
      { label: 'Odisha', url: '/bds-odisha' },
      { label: 'Punjab', url: '/bds-punjab' },
      { label: 'Rajasthan', url: '/bds-rajasthan' },
      { label: 'Sikkim', url: '/bds-sikkim' },
      { label: 'Tamil Nadu', url: '/bds-tamil-nadu' },
      { label: 'Telangana', url: '/bds-telangana' },
      { label: 'Tripura', url: '/bds-tripura' },
      { label: 'Uttar Pradesh', url: '/bds-uttar-pradesh' },
      { label: 'Uttarakhand', url: '/bds-uttarakhand' },
      { label: 'West Bengal', url: '/bds-west-bengal' },
      { label: 'Delhi', url: '/bds-delhi' },
      { label: 'Jammu & Kashmir', url: '/bds-jammu-kashmir' },
      { label: 'Ladakh', url: '/bds-ladakh' },
      { label: 'Puducherry', url: '/bds-puducherry' },
      { label: 'Chandigarh', url: '/bds-chandigarh' },
    ],
    'ayush': [
      { label: 'Andhra Pradesh', url: '/ayush-andhra-pradesh' },
      { label: 'Arunachal Pradesh', url: '/ayush-arunachal-pradesh' },
      { label: 'Assam', url: '/ayush-assam' },
      { label: 'Bihar', url: '/ayush-bihar' },
      { label: 'Chhattisgarh', url: '/ayush-chhattisgarh' },
      { label: 'Goa', url: '/ayush-goa' },
      { label: 'Gujarat', url: '/ayush-gujarat' },
      { label: 'Haryana', url: '/ayush-haryana' },
      { label: 'Himachal Pradesh', url: '/ayush-himachal-pradesh' },
      { label: 'Jharkhand', url: '/ayush-jharkhand' },
      { label: 'Karnataka', url: '/ayush-karnataka' },
      { label: 'Kerala', url: '/ayush-kerala' },
      { label: 'Madhya Pradesh', url: '/ayush-madhya-pradesh' },
      { label: 'Maharashtra', url: '/ayush-maharashtra' },
      { label: 'Manipur', url: '/ayush-manipur' },
      { label: 'Meghalaya', url: '/ayush-meghalaya' },
      { label: 'Mizoram', url: '/ayush-mizoram' },
      { label: 'Nagaland', url: '/ayush-nagaland' },
      { label: 'Odisha', url: '/ayush-odisha' },
      { label: 'Punjab', url: '/ayush-punjab' },
      { label: 'Rajasthan', url: '/ayush-rajasthan' },
      { label: 'Sikkim', url: '/ayush-sikkim' },
      { label: 'Tamil Nadu', url: '/ayush-tamil-nadu' },
      { label: 'Telangana', url: '/ayush-telangana' },
      { label: 'Tripura', url: '/ayush-tripura' },
      { label: 'Uttar Pradesh', url: '/ayush-uttar-pradesh' },
      { label: 'Uttarakhand', url: '/ayush-uttarakhand' },
      { label: 'West Bengal', url: '/ayush-west-bengal' },
      { label: 'Delhi', url: '/ayush-delhi' },
      { label: 'Jammu & Kashmir', url: '/ayush-jammu-kashmir' },
      { label: 'Ladakh', url: '/ayush-ladakh' },
      { label: 'Puducherry', url: '/ayush-puducherry' },
      { label: 'Chandigarh', url: '/ayush-chandigarh' },
    ],
    'md': [
      { label: 'Andhra Pradesh', url: '/md-andhra-pradesh' },
      { label: 'Arunachal Pradesh', url: '/md-arunachal-pradesh' },
      { label: 'Assam', url: '/md-assam' },
      { label: 'Bihar', url: '/md-bihar' },
      { label: 'Chhattisgarh', url: '/md-chhattisgarh' },
      { label: 'Gujarat', url: '/md-gujarat' },
      { label: 'Haryana', url: '/md-haryana' },
      { label: 'Himachal Pradesh', url: '/md-himachal-pradesh' },
      { label: 'Jharkhand', url: '/md-jharkhand' },
      { label: 'Karnataka', url: '/md-karnataka' },
      { label: 'Kerala', url: '/md-kerala' },
      { label: 'Madhya Pradesh', url: '/md-madhya-pradesh' },
      { label: 'Maharashtra', url: '/md-maharashtra' },
      { label: 'Manipur', url: '/md-manipur' },
      { label: 'Meghalaya', url: '/md-meghalaya' },
      { label: 'Mizoram', url: '/md-mizoram' },
      { label: 'Nagaland', url: '/md-nagaland' },
      { label: 'Odisha', url: '/md-odisha' },
      { label: 'Punjab', url: '/md-punjab' },
      { label: 'Rajasthan', url: '/md-rajasthan' },
      { label: 'Sikkim', url: '/md-sikkim' },
      { label: 'Tamil Nadu', url: '/md-tamil-nadu' },
      { label: 'Telangana', url: '/md-telangana' },
      { label: 'Tripura', url: '/md-tripura' },
      { label: 'Uttar Pradesh', url: '/md-uttar-pradesh' },
      { label: 'Uttarakhand', url: '/md-uttarakhand' },
      { label: 'West Bengal', url: '/md-west-bengal' },
      { label: 'Delhi', url: '/md-delhi' },
      { label: 'Jammu & Kashmir', url: '/md-jammu-kashmir' },
      { label: 'Ladakh', url: '/md-ladakh' },
      { label: 'Puducherry', url: '/md-puducherry' },
      { label: 'Chandigarh', url: '/md-chandigarh' },
    ],
    'ms': [
      { label: 'Andhra Pradesh', url: '/ms-andhra-pradesh' },
      { label: 'Arunachal Pradesh', url: '/ms-arunachal-pradesh' },
      { label: 'Assam', url: '/ms-assam' },
      { label: 'Bihar', url: '/ms-bihar' },
      { label: 'Chhattisgarh', url: '/ms-chhattisgarh' },
      { label: 'Gujarat', url: '/ms-gujarat' },
      { label: 'Haryana', url: '/ms-haryana' },
      { label: 'Himachal Pradesh', url: '/ms-himachal-pradesh' },
      { label: 'Jharkhand', url: '/ms-jharkhand' },
      { label: 'Karnataka', url: '/ms-karnataka' },
      { label: 'Kerala', url: '/ms-kerala' },
      { label: 'Madhya Pradesh', url: '/ms-madhya-pradesh' },
      { label: 'Maharashtra', url: '/ms-maharashtra' },
      { label: 'Manipur', url: '/ms-manipur' },
      { label: 'Meghalaya', url: '/ms-meghalaya' },
      { label: 'Mizoram', url: '/ms-mizoram' },
      { label: 'Nagaland', url: '/ms-nagaland' },
      { label: 'Odisha', url: '/ms-odisha' },
      { label: 'Punjab', url: '/ms-punjab' },
      { label: 'Rajasthan', url: '/ms-rajasthan' },
      { label: 'Sikkim', url: '/ms-sikkim' },
      { label: 'Tamil Nadu', url: '/ms-tamil-nadu' },
      { label: 'Telangana', url: '/ms-telangana' },
      { label: 'Tripura', url: '/ms-tripura' },
      { label: 'Uttar Pradesh', url: '/ms-uttar-pradesh' },
      { label: 'Uttarakhand', url: '/ms-uttarakhand' },
      { label: 'West Bengal', url: '/ms-west-bengal' },
      { label: 'Delhi', url: '/ms-delhi' },
      { label: 'Jammu & Kashmir', url: '/ms-jammu-kashmir' },
      { label: 'Ladakh', url: '/ms-ladakh' },
      { label: 'Puducherry', url: '/ms-puducherry' },
      { label: 'Chandigarh', url: '/ms-chandigarh' },
    ],
  };

  return (
    <footer className="footer">
      <div className='py-12 sm:py-16 bg-[#DFF1FF]'>
        <div className="container px-4 sm:px-6 lg:px-3">
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-[#4A4A4A]'>

            <div className=''>
              <div className='flex'>
                <Link href="/" className="">
                  <Image src="/logo.webp" alt="Logo" width="140" height="auto" className='w-32 sm:w-40 md:w-44' />
                </Link>
              </div>
              <div className="text-xs sm:text-sm my-4 sm:my-6 pb-6 sm:pb-8 border-b border-[#0B2E3C]">
                We offer personalised sessions specially for your NEET rank, academic profile, budget, and career goals. This approach helps you understand your best options and make informed decisions for your medical future.
              </div>
              <div className='flex items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-8'>
                <div>
                  <Image src='/images/iso.webp' alt='ISO' width='50' height='50' className='w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16' />
                </div>
                <div className=''>
                  <Image src='/images/meme.webp' alt='MeMe' width='72' height='72' className='' />
                </div>
                <div className='text-[10px] xs:text-xs sm:text-xs text-[#0B2E3C] leading-tight sm:leading-3 text-center sm:text-left'>
                  Radical Education<br />is an <span className='text-xs sm:text-sm font-semibold'>ISO 9001:2015</span><br />certified company
                </div>
              </div>
              <div className='flex items-center gap-4'>
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

            <div className='text-left'>
              <h4 className="font-semibold text-[#005A8B] text-sm sm:text-base mb-3">Important Links</h4>
              <ul className="space-y-2 sm:space-y-3 mb-6">
                {importantLinks.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.url || '#'}
                      className="flex items-center gap-1 text-xs sm:text-sm transition text-nowrap hover:text-[#005A8B]"
                    >
                      <i className={`${item.icon || 'pi pi-angle-right'} text-xs`} />
                      <span className='truncate'>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className='lg:pl-20 text-left'>
              <h4 className="font-semibold text-[#005A8B] text-sm sm:text-base mb-3">Quick Links</h4>
              <ul className="space-y-2 sm:space-y-3 mb-6">
                {quickLinks.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.url || '#'}
                      className="flex items-center gap-1 text-xs sm:text-sm transition hover:text-[#005A8B]"
                    >
                      <i className={`${item.icon || 'pi pi-angle-right'} text-xs`} />
                      <span className='truncate'>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className='lg:pl-20 text-left'>
              <h4 className="font-semibold text-[#005A8B] text-sm sm:text-base mb-3">Contact Us</h4>
              <ul className="space-y-4 text-xs sm:text-sm">
                <li className="flex items-center gap-2">
                  <i className="pi pi-phone text-xs sm:text-sm" />
                  <span className='truncate'>97 97 97 24 65</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="pi pi-envelope text-xs sm:text-sm" />
                  <span className='truncate'>info@radicaleducation.in</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="pi pi-map-marker md:mt-0.5 -mt-0.5 text-xs sm:text-sm" />
                  <span className='text-center sm:text-left'>
                    C-56/30, 3rd Floor, Sector-62<br className='hidden md:block' />
                    Noida, Uttar Pradesh
                  </span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      <div className="bg-[#005A8B] py-6 sm:py-8">
        <div className="container px-4 sm:px-6 lg:px-3">
          <div className="mb-4 sm:mb-6">
            <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 md:gap-3">
              <button
                onClick={() => setActiveTab('study-abroad')}
                className={`relative z-2 overflow-hidden px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 
                rounded-full border border-white
                text-[10px] xs:text-xs sm:text-sm whitespace-nowrap
                transition-colors duration-300
                before:absolute before:inset-0
                before:bg-white
                before:transition-transform before:duration-300
                before:z-[-1]
                ${activeTab === 'study-abroad'
                    ? 'text-[#005A8B] before:translate-y-0'
                    : 'text-white before:translate-y-[100%] hover:text-[#005A8B] hover:before:-translate-y-0'
                  }`}>
                Study Abroad
              </button>
              <button
                onClick={() => setActiveTab('mbbs')}
                className={`relative z-2 overflow-hidden px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 
                rounded-full border border-white
                text-[10px] xs:text-xs sm:text-sm whitespace-nowrap
                transition-colors duration-300
                before:absolute before:inset-0
                before:bg-white
                before:transition-transform before:duration-300
                before:z-[-1]
                ${activeTab === 'mbbs'
                    ? 'text-[#005A8B] before:translate-y-0'
                    : 'text-white before:translate-y-[100%] hover:text-[#005A8B] hover:before:-translate-y-0'
                  }`}>
                MBBS
              </button>
              <button
                onClick={() => setActiveTab('bds')}
                className={`relative z-2 overflow-hidden px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 
                rounded-full border border-white
                text-[10px] xs:text-xs sm:text-sm whitespace-nowrap
                transition-colors duration-300
                before:absolute before:inset-0
                before:bg-white
                before:transition-transform before:duration-300
                before:z-[-1]
                ${activeTab === 'bds'
                    ? 'text-[#005A8B] before:translate-y-0'
                    : 'text-white before:translate-y-[100%] hover:text-[#005A8B] hover:before:-translate-y-0'
                  }`}>
                BDS
              </button>
              <button
                onClick={() => setActiveTab('ayush')}
                className={`relative z-2 overflow-hidden px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 
                rounded-full border border-white
                text-[10px] xs:text-xs sm:text-sm whitespace-nowrap
                transition-colors duration-300
                before:absolute before:inset-0
                before:bg-white
                before:transition-transform before:duration-300
                before:z-[-1]
                ${activeTab === 'ayush'
                    ? 'text-[#005A8B] before:translate-y-0'
                    : 'text-white before:translate-y-[100%] hover:text-[#005A8B] hover:before:-translate-y-0'
                  }`}>
                AYUSH
              </button>
              <button
                onClick={() => setActiveTab('md')}
                className={`relative z-2 overflow-hidden px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 
                rounded-full border border-white
                text-[10px] xs:text-xs sm:text-sm whitespace-nowrap
                transition-colors duration-300
                before:absolute before:inset-0
                before:bg-white
                before:transition-transform before:duration-300
                before:z-[-1]
                ${activeTab === 'md'
                    ? 'text-[#005A8B] before:translate-y-0'
                    : 'text-white before:translate-y-[100%] hover:text-[#005A8B] hover:before:-translate-y-0'
                  }`}>
                MD
              </button>
              <button
                onClick={() => setActiveTab('ms')}
                className={`relative z-2 overflow-hidden px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 
                rounded-full border border-white
                text-[10px] xs:text-xs sm:text-sm whitespace-nowrap
                transition-colors duration-300
                before:absolute before:inset-0
                before:bg-white
                before:transition-transform before:duration-300
                before:z-[-1]
                ${activeTab === 'ms'
                    ? 'text-[#005A8B] before:translate-y-0'
                    : 'text-white before:translate-y-[100%] hover:text-[#005A8B] hover:before:-translate-y-0'
                  }`}>
                MS
              </button>
            </div>
          </div>
          <div className="md:px-0 px-8  w-full flex flex-wrap justify-between md:justify-center md:items-center gap-x-1 sm:gap-x-2 md:gap-x-4 gap-y-1.5 sm:gap-y-2 text-white text-[10px] xs:text-xs sm:text-sm pt-3 sm:pt-4 md:pt-6">
            {tabContent[activeTab].map((item, index) => (
              <Fragment key={item.url}>
                <Link
                  href={item.url}
                  className="w-[50%] md:w-auto relative flex items-center gap-0.5 sm:gap-1 shrink-0 max-w-[140px] sm:max-w-none
                  after:absolute after:left-3 after:bottom-0 sm:after:left-5
                  after:h-[1px] after:w-0
                  after:bg-white
                  after:transition-all after:duration-300
                  hover:after:w-[80%] truncate">
                  <i className="pi pi-angle-right text-[8px] xs:text-[10px] sm:text-xs" />
                  <span className='truncate'>{item.label}</span>
                </Link>
                {index < tabContent[activeTab].length - 1 && (
                  <span className="text-white/50 hidden xs:inline">|</span>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
      <div className="text-white text-center py-4 sm:py-6 text-xs sm:text-sm bg-[#00446A] px-4">
        Radical Education 2025 | All rights reserved | BINARAMA | <Link href="/privacy-policy" className="hover:text-[#fff]">Privacy Policy</Link> | <Link href="/refund-policy" className="hover:text-[#fff]">Refund Policy</Link> | <Link href="/terms-condition" className="hover:text-[#fff]">Terms & Conditions</Link>
      </div>
    </footer>
  );
}

