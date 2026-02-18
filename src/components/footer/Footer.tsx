'use client';
import { importantLinks, quickLinks } from '@/data/footerMenus';
import Link from 'next/link';
import { Image } from 'primereact/image';
import { Fragment, useState } from 'react';

export default function Footer() {

  const [activeTab, setActiveTab] = useState<'study-abroad' | 'mbbs' | 'bds' | 'ayush' | 'md' | 'ms'>('study-abroad');

  const tabContent: Record<'study-abroad' | 'mbbs' | 'bds' | 'ayush' | 'md' | 'ms', { label: string; url: string }[]> = {
    'study-abroad': [
      { label: 'MBBS in Nepal', url: '/nepal' },
      { label: 'MBBS in Russia', url: '/russia' },
      { label: 'MBBS in Georgia', url: '/georgia' },
      { label: 'MBBS in Singapore', url: '/singapore' },
      { label: 'MBBS in Bangladesh', url: '/bangladesh' },
      { label: 'MBBS in Uzbekistan', url: '/uzbekistan' },
      { label: 'MBBS in Kazakhstan', url: '/kazakhstan' },
      { label: 'MBBS in Kyrgyzstan', url: '/kyrgyzstan' },
    ],
    'mbbs': [
      { label: 'MBBS in Andhra Pradesh', url: '/mbbs-andhra-pradesh' },
      { label: 'MBBS in Arunachal Pradesh', url: '/mbbs-arunachal-pradesh' },
      { label: 'MBBS in Assam', url: '/mbbs-assam' },
      { label: 'MBBS in Bihar', url: '/mbbs-bihar' },
      { label: 'MBBS in Chhattisgarh', url: '/mbbs-chhattisgarh' },
      { label: 'MBBS in Goa', url: '/mbbs-goa' },
      { label: 'MBBS in Gujarat', url: '/mbbs-gujarat' },
      { label: 'MBBS in Haryana', url: '/mbbs-haryana' },
      { label: 'MBBS in Himachal Pradesh', url: '/mbbs-himachal-pradesh' },
      { label: 'MBBS in Jharkhand', url: '/mbbs-jharkhand' },
      { label: 'MBBS in Karnataka', url: '/mbbs-karnataka' },
      { label: 'MBBS in Kerala', url: '/mbbs-kerala' },
      { label: 'MBBS in Madhya Pradesh', url: '/mbbs-madhya-pradesh' },
      { label: 'MBBS in Maharashtra', url: '/mbbs-maharashtra' },
      { label: 'MBBS in Manipur', url: '/mbbs-manipur' },
      { label: 'MBBS in Meghalaya', url: '/mbbs-meghalaya' },
      { label: 'MBBS in Mizoram', url: '/mbbs-mizoram' },
      { label: 'MBBS in Nagaland', url: '/mbbs-nagaland' },
      { label: 'MBBS in Odisha', url: '/mbbs-odisha' },
      { label: 'MBBS in Punjab', url: '/mbbs-punjab' },
      { label: 'MBBS in Rajasthan', url: '/mbbs-rajasthan' },
      { label: 'MBBS in Sikkim', url: '/mbbs-sikkim' },
      { label: 'MBBS in Tamil Nadu', url: '/mbbs-tamil-nadu' },
      { label: 'MBBS in Telangana', url: '/mbbs-telangana' },
      { label: 'MBBS in Tripura', url: '/mbbs-tripura' },
      { label: 'MBBS in Uttar Pradesh', url: '/mbbs-uttar-pradesh' },
      { label: 'MBBS in Uttarakhand', url: '/mbbs-uttarakhand' },
      { label: 'MBBS in West Bengal', url: '/mbbs-west-bengal' },
      { label: 'MBBS in Delhi', url: '/mbbs-delhi' },
      { label: 'MBBS in Jammu & Kashmir', url: '/mbbs-jammu-kashmir' },
      { label: 'MBBS in Ladakh', url: '/mbbs-ladakh' },
      { label: 'MBBS in Puducherry', url: '/mbbs-puducherry' },
      { label: 'MBBS in Chandigarh', url: '/mbbs-chandigarh' },
    ],
    'bds': [
      { label: 'BDS in Andhra Pradesh', url: '/bds-andhra-pradesh' },
      { label: 'BDS in Arunachal Pradesh', url: '/bds-arunachal-pradesh' },
      { label: 'BDS in Assam', url: '/bds-assam' },
      { label: 'BDS in Bihar', url: '/bds-bihar' },
      { label: 'BDS in Chhattisgarh', url: '/bds-chhattisgarh' },
      { label: 'BDS in Goa', url: '/bds-goa' },
      { label: 'BDS in Gujarat', url: '/bds-gujarat' },
      { label: 'BDS in Haryana', url: '/bds-haryana' },
      { label: 'BDS in Himachal Pradesh', url: '/bds-himachal-pradesh' },
      { label: 'BDS in Jharkhand', url: '/bds-jharkhand' },
      { label: 'BDS in Karnataka', url: '/bds-karnataka' },
      { label: 'BDS in Kerala', url: '/bds-kerala' },
      { label: 'BDS in Madhya Pradesh', url: '/bds-madhya-pradesh' },
      { label: 'BDS in Maharashtra', url: '/bds-maharashtra' },
      { label: 'BDS in Manipur', url: '/bds-manipur' },
      { label: 'BDS in Meghalaya', url: '/bds-meghalaya' },
      { label: 'BDS in Mizoram', url: '/bds-mizoram' },
      { label: 'BDS in Nagaland', url: '/bds-nagaland' },
      { label: 'BDS in Odisha', url: '/bds-odisha' },
      { label: 'BDS in Punjab', url: '/bds-punjab' },
      { label: 'BDS in Rajasthan', url: '/bds-rajasthan' },
      { label: 'BDS in Sikkim', url: '/bds-sikkim' },
      { label: 'BDS in Tamil Nadu', url: '/bds-tamil-nadu' },
      { label: 'BDS in Telangana', url: '/bds-telangana' },
      { label: 'BDS in Tripura', url: '/bds-tripura' },
      { label: 'BDS in Uttar Pradesh', url: '/bds-uttar-pradesh' },
      { label: 'BDS in Uttarakhand', url: '/bds-uttarakhand' },
      { label: 'BDS in West Bengal', url: '/bds-west-bengal' },
      { label: 'BDS in Delhi', url: '/bds-delhi' },
      { label: 'BDS in Jammu & Kashmir', url: '/bds-jammu-kashmir' },
      { label: 'BDS in Ladakh', url: '/bds-ladakh' },
      { label: 'BDS in Puducherry', url: '/bds-puducherry' },
      { label: 'BDS in Chandigarh', url: '/bds-chandigarh' },
    ],
    'ayush': [
      { label: 'AYUSH in Andhra Pradesh', url: '/ayush-andhra-pradesh' },
      { label: 'AYUSH in Arunachal Pradesh', url: '/ayush-arunachal-pradesh' },
      { label: 'AYUSH in Assam', url: '/ayush-assam' },
      { label: 'AYUSH in Bihar', url: '/ayush-bihar' },
      { label: 'AYUSH in Chhattisgarh', url: '/ayush-chhattisgarh' },
      { label: 'AYUSH in Goa', url: '/ayush-goa' },
      { label: 'AYUSH in Gujarat', url: '/ayush-gujarat' },
      { label: 'AYUSH in Haryana', url: '/ayush-haryana' },
      { label: 'AYUSH in Himachal Pradesh', url: '/ayush-himachal-pradesh' },
      { label: 'AYUSH in Jharkhand', url: '/ayush-jharkhand' },
      { label: 'AYUSH in Karnataka', url: '/ayush-karnataka' },
      { label: 'AYUSH in Kerala', url: '/ayush-kerala' },
      { label: 'AYUSH in Madhya Pradesh', url: '/ayush-madhya-pradesh' },
      { label: 'AYUSH in Maharashtra', url: '/ayush-maharashtra' },
      { label: 'AYUSH in Manipur', url: '/ayush-manipur' },
      { label: 'AYUSH in Meghalaya', url: '/ayush-meghalaya' },
      { label: 'AYUSH in Mizoram', url: '/ayush-mizoram' },
      { label: 'AYUSH in Nagaland', url: '/ayush-nagaland' },
      { label: 'AYUSH in Odisha', url: '/ayush-odisha' },
      { label: 'AYUSH in Punjab', url: '/ayush-punjab' },
      { label: 'AYUSH in Rajasthan', url: '/ayush-rajasthan' },
      { label: 'AYUSH in Sikkim', url: '/ayush-sikkim' },
      { label: 'AYUSH in Tamil Nadu', url: '/ayush-tamil-nadu' },
      { label: 'AYUSH in Telangana', url: '/ayush-telangana' },
      { label: 'AYUSH in Tripura', url: '/ayush-tripura' },
      { label: 'AYUSH in Uttar Pradesh', url: '/ayush-uttar-pradesh' },
      { label: 'AYUSH in Uttarakhand', url: '/ayush-uttarakhand' },
      { label: 'AYUSH in West Bengal', url: '/ayush-west-bengal' },
      { label: 'AYUSH in Delhi', url: '/ayush-delhi' },
      { label: 'AYUSH in Jammu & Kashmir', url: '/ayush-jammu-kashmir' },
      { label: 'AYUSH in Ladakh', url: '/ayush-ladakh' },
      { label: 'AYUSH in Puducherry', url: '/ayush-puducherry' },
      { label: 'AYUSH in Chandigarh', url: '/ayush-chandigarh' },
    ],
    'md': [
      { label: 'MD in Andhra Pradesh', url: '/md-andhra-pradesh' },
      { label: 'MD in Arunachal Pradesh', url: '/md-arunachal-pradesh' },
      { label: 'MD in Assam', url: '/md-assam' },
      { label: 'MD in Bihar', url: '/md-bihar' },
      { label: 'MD in Chhattisgarh', url: '/md-chhattisgarh' },
      { label: 'MD in Goa', url: '/md-goa' },
      { label: 'MD in Gujarat', url: '/md-gujarat' },
      { label: 'MD in Haryana', url: '/md-haryana' },
      { label: 'MD in Himachal Pradesh', url: '/md-himachal-pradesh' },
      { label: 'MD in Jharkhand', url: '/md-jharkhand' },
      { label: 'MD in Karnataka', url: '/md-karnataka' },
      { label: 'MD in Kerala', url: '/md-kerala' },
      { label: 'MD in Madhya Pradesh', url: '/md-madhya-pradesh' },
      { label: 'MD in Maharashtra', url: '/md-maharashtra' },
      { label: 'MD in Manipur', url: '/md-manipur' },
      { label: 'MD in Meghalaya', url: '/md-meghalaya' },
      { label: 'MD in Mizoram', url: '/md-mizoram' },
      { label: 'MD in Nagaland', url: '/md-nagaland' },
      { label: 'MD in Odisha', url: '/md-odisha' },
      { label: 'MD in Punjab', url: '/md-punjab' },
      { label: 'MD in Rajasthan', url: '/md-rajasthan' },
      { label: 'MD in Sikkim', url: '/md-sikkim' },
      { label: 'MD in Tamil Nadu', url: '/md-tamil-nadu' },
      { label: 'MD in Telangana', url: '/md-telangana' },
      { label: 'MD in Tripura', url: '/md-tripura' },
      { label: 'MD in Uttar Pradesh', url: '/md-uttar-pradesh' },
      { label: 'MD in Uttarakhand', url: '/md-uttarakhand' },
      { label: 'MD in West Bengal', url: '/md-west-bengal' },
      { label: 'MD in Delhi', url: '/md-delhi' },
      { label: 'MD in Jammu & Kashmir', url: '/md-jammu-kashmir' },
      { label: 'MD in Ladakh', url: '/md-ladakh' },
      { label: 'MD in Puducherry', url: '/md-puducherry' },
      { label: 'MD in Chandigarh', url: '/md-chandigarh' },
    ],
    'ms': [
      { label: 'MS in Andhra Pradesh', url: '/ms-andhra-pradesh' },
      { label: 'MS in Arunachal Pradesh', url: '/ms-arunachal-pradesh' },
      { label: 'MS in Assam', url: '/ms-assam' },
      { label: 'MS in Bihar', url: '/ms-bihar' },
      { label: 'MS in Chhattisgarh', url: '/ms-chhattisgarh' },
      { label: 'MS in Goa', url: '/ms-goa' },
      { label: 'MS in Gujarat', url: '/ms-gujarat' },
      { label: 'MS in Haryana', url: '/ms-haryana' },
      { label: 'MS in Himachal Pradesh', url: '/ms-himachal-pradesh' },
      { label: 'MS in Jharkhand', url: '/ms-jharkhand' },
      { label: 'MS in Karnataka', url: '/ms-karnataka' },
      { label: 'MS in Kerala', url: '/ms-kerala' },
      { label: 'MS in Madhya Pradesh', url: '/ms-madhya-pradesh' },
      { label: 'MS in Maharashtra', url: '/ms-maharashtra' },
      { label: 'MS in Manipur', url: '/ms-manipur' },
      { label: 'MS in Meghalaya', url: '/ms-meghalaya' },
      { label: 'MS in Mizoram', url: '/ms-mizoram' },
      { label: 'MS in Nagaland', url: '/ms-nagaland' },
      { label: 'MS in Odisha', url: '/ms-odisha' },
      { label: 'MS in Punjab', url: '/ms-punjab' },
      { label: 'MS in Rajasthan', url: '/ms-rajasthan' },
      { label: 'MS in Sikkim', url: '/ms-sikkim' },
      { label: 'MS in Tamil Nadu', url: '/ms-tamil-nadu' },
      { label: 'MS in Telangana', url: '/ms-telangana' },
      { label: 'MS in Tripura', url: '/ms-tripura' },
      { label: 'MS in Uttar Pradesh', url: '/ms-uttar-pradesh' },
      { label: 'MS in Uttarakhand', url: '/ms-uttarakhand' },
      { label: 'MS in West Bengal', url: '/ms-west-bengal' },
      { label: 'MS in Delhi', url: '/ms-delhi' },
      { label: 'MS in Jammu & Kashmir', url: '/ms-jammu-kashmir' },
      { label: 'MS in Ladakh', url: '/ms-ladakh' },
      { label: 'MS in Puducherry', url: '/ms-puducherry' },
      { label: 'MS in Chandigarh', url: '/ms-chandigarh' },
    ],
  };

  return (
    <footer className="footer">
      <div className='py-12 sm:py-16 bg-[#DFF1FF]'>
        <div className="container px-4 sm:px-6 lg:px-3">
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-[#4A4A4A]'>

            <div className='text-center sm:text-left'>
              <div className='flex justify-center sm:justify-start'>
                <Link href="/" className="">
                  <Image src="/logo.webp" alt="Logo" width="140" height="auto" className='w-32 sm:w-40 md:w-44' />
                </Link>
              </div>
              <div className="text-xs sm:text-sm my-4 sm:my-6 pb-4 sm:pb-6 border-b border-[#0B2E3C]">
                Invite your friends and unlock exclusive benefits—earn more with every successful referral.
              </div>
              <div className='flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 mb-6 sm:mb-8'>
                <div>
                  <Image src='/images/iso.webp' alt='ISO' width='50' height='50' className='w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16' />
                </div>
                <div className='text-[10px] xs:text-xs sm:text-xs text-[#0B2E3C] leading-tight sm:leading-3 text-center sm:text-left'>
                  Radical Education<br />is an <span className='text-xs sm:text-sm font-semibold'>ISO 9001:2015</span><br />certified company
                </div>
              </div>
              <div className='flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-4 text-[#005A8B]'>
                <Link target='_blank' href="https://twitter.com/Radical_Edu_" className='text-lg sm:text-xl'><i className='pi pi-twitter'></i></Link>
                <Link target='_blank' href="https://www.facebook.com/profile.php?id=61556350017734" className='text-lg sm:text-xl'><i className='pi pi-facebook'></i></Link>
                <Link target='_blank' href="https://www.instagram.com/radicaleducationofficial/" className='text-lg sm:text-xl'><i className='pi pi-instagram'></i></Link>
                <Link target='_blank' href="https://www.linkedin.com/company/radical-education-official/about/?viewAsMember=true" className='text-lg sm:text-xl'><i className='pi pi-linkedin'></i></Link>
                <Link target='_blank' href="https://whatsapp.com/channel/0029Vajjreq0G0Xmr5ILp81P" className='text-lg sm:text-xl'><i className='pi pi-whatsapp'></i></Link>
                <Link target='_blank' href="https://t.me/radicaleducation" className='text-lg sm:text-xl'><i className='pi pi-telegram'></i></Link>
                <Link target='_blank' href="https://www.youtube.com/@radicaleducationofficial" className='text-lg sm:text-xl'><i className='pi pi-youtube'></i></Link>
              </div>
            </div>

            <div className='text-center sm:text-left'>
              <h4 className="font-semibold text-[#005A8B] text-sm sm:text-base mb-3">Important Links</h4>
              <ul className="space-y-2 sm:space-y-3 mb-6">
                {importantLinks.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.url || '#'}
                      className="flex items-center justify-center sm:justify-start gap-1 text-xs sm:text-sm transition text-nowrap hover:text-[#005A8B]"
                    >
                      <i className={`${item.icon || 'pi pi-angle-right'} text-xs`} />
                      <span className='truncate'>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className='lg:pl-20 text-center sm:text-left'>
              <h4 className="font-semibold text-[#005A8B] text-sm sm:text-base mb-3">Quick Links</h4>
              <ul className="space-y-2 sm:space-y-3 mb-6">
                {quickLinks.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.url || '#'}
                      className="flex items-center justify-center sm:justify-start gap-1 text-xs sm:text-sm transition hover:text-[#005A8B]"
                    >
                      <i className={`${item.icon || 'pi pi-angle-right'} text-xs`} />
                      <span className='truncate'>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className='lg:pl-20 text-center sm:text-left'>
              <h4 className="font-semibold text-[#005A8B] text-sm sm:text-base mb-3">Contact Us</h4>
              <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                <li className="flex items-center justify-center sm:justify-start gap-2">
                  <i className="pi pi-phone text-xs sm:text-sm" />
                  <span className='truncate'>97 97 97 24 65</span>
                </li>
                <li className="flex items-center justify-center sm:justify-start gap-2">
                  <i className="pi pi-envelope text-xs sm:text-sm" />
                  <span className='truncate'>info@radicaleducation.in</span>
                </li>
                <li className="flex items-start justify-center sm:justify-start gap-2">
                  <i className="pi pi-map-marker mt-0.5 text-xs sm:text-sm" />
                  <span className='text-center sm:text-left'>
                    C-56/30, 3rd Floor, Sector-62<br />
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
          <div className="flex flex-wrap justify-center items-center gap-x-1 sm:gap-x-2 md:gap-x-4 gap-y-1.5 sm:gap-y-2 text-white text-[10px] xs:text-xs sm:text-sm pt-3 sm:pt-4 md:pt-6">
            {tabContent[activeTab].map((item, index) => (
              <Fragment key={item.url}>
                <Link 
                  href={item.url} 
                  className="relative flex items-center gap-0.5 sm:gap-1 shrink-0 max-w-[140px] sm:max-w-none
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
        © {new Date().getFullYear()} Radical Education | BINARAMA. All rights reserved.
      </div>
    </footer>
  );
}

