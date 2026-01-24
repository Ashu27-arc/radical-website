'use client';

import { useEffect, useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';

const WHATSAPP_ITEMS = [
  {
    id: 1,
    title: 'Join NEET 2025 Updates Channel',
    icon: '/images/wp-ico1.svg',
    experts: [
      { name: 'Amit Sharma', experience: '5+ Years', phone: '919111111111' },
      { name: 'Neha Verma', experience: '6+ Years', phone: '919111111112' },
      { name: 'Rohit Gupta', experience: '4+ Years', phone: '919111111113' }
    ]
  },
  {
    id: 2,
    title: 'NEET UG Counselling',
    icon: '/images/wp-ico3.svg',
    experts: [
      { name: 'Dr. Kunal Jain', experience: '8+ Years', phone: '919222222221' },
      { name: 'Pooja Singh', experience: '7+ Years', phone: '919222222222' },
      { name: 'Aakash Mehta', experience: '5+ Years', phone: '919222222223' }
    ]
  },
  {
    id: 3,
    title: 'NEET PG Counselling',
    icon: '/images/wp-ico3.svg',
    experts: [
      { name: 'Dr. Rakesh Kumar', experience: '10+ Years', phone: '919333333331' },
      { name: 'Simran Kaur', experience: '6+ Years', phone: '919333333332' },
      { name: 'Nitin Joshi', experience: '5+ Years', phone: '919333333333' }
    ]
  },
  {
    id: 4,
    title: 'MBBS Abroad Counselling',
    icon: '/images/wp-ico4.svg',
    experts: [
      { name: 'Rahul Malhotra', experience: '9+ Years', phone: '919444444441' },
      { name: 'Anjali Arora', experience: '7+ Years', phone: '919444444442' },
      { name: 'Suresh Patel', experience: '6+ Years', phone: '919444444443' }
    ]
  },
  {
    id: 5,
    title: 'Support (24/7)',
    icon: '/images/wp-ico5.svg',
    experts: [
      { name: 'Support Team 1', experience: '24/7 Available', phone: '919555555551' },
      { name: 'Support Team 2', experience: '24/7 Available', phone: '919555555552' },
      { name: 'Support Team 3', experience: '24/7 Available', phone: '919555555553' }
    ]
  }
];

type View = 'none' | 'menu' | 'detail';

export default function FloatingWhatsApp() {
  const [view, setView] = useState<View>('none');
  const [nextView, setNextView] = useState<View>('none');
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    if (view !== 'none') {
      requestAnimationFrame(() => {
        setIsVisible(true);
      });
    }
  }, [view]);

  const startTransition = (target: View) => {
    setIsVisible(false);
    setTimeout(() => {
      setView(target);
    }, 200);
  };

  const animationClass = isVisible
    ? 'opacity-100 translate-x-0'
    : 'opacity-0 -translate-x-4';

  const openWhatsApp = (phone: string) => {
    window.open(`https://wa.me/${phone}`, '_blank');
  };

  return (
    <>
      <button
        onClick={() =>
          view === 'menu' || view === 'detail'
            ? startTransition('none')
            : startTransition('menu')
        }
        className="cursor-pointer fixed bottom-6 left-6 z-50 w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center shadow-lg hover:scale-105 transition"
      >
        <i className="pi pi-whatsapp text-white text-4xl!" />
      </button>
      {view !== 'none' && (
        <div
          className={`
            fixed bottom-6 z-[102] left-17 z-40 flex items-end
            transform transition-all duration-300 ease-out
            ${animationClass}
          `}
        >
          <div className='md:min-w-[90px] md:max-w-[90px] min-w-[60px] max-w-[60px]'>
            <Image src='/images/wpLady.webp' alt='' />
          </div>
          {view === 'menu' && (
            <div className="rounded-[10px_10px_10px_0] shadow-xl overflow-hidden bg-white w-[300px]">
              <div className="bg-[linear-gradient(90deg,rgba(0,117,148,1)_0%,rgba(99,205,180,1)_100%)] text-white p-4">
                <h3 className="font-semibold md:text-base text-xs">
                  Welcome To RADICAL EDUCATION
                </h3>
                <p className="md:text-sm text-xs">Chat Support</p>
              </div>

              <div className="p-3 space-y-2">
                {WHATSAPP_ITEMS.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => {
                      setSelectedItem(item);
                      startTransition('detail');
                    }}
                    className="flex gap-2 items-center justify-between p-2 rounded-lg cursor-pointer hover:bg-green-50"
                  >
                    <div className="flex items-center gap-3">
                      <Image src={item.icon} alt='' width='18' />
                      <span className="md:text-sm text-xs text-[#005A8B] font-medium">{item.title}</span>
                    </div>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M0.997298 7.8388C0.997675 7.96803 1.04937 8.09182 1.14102 8.18293C1.23266 8.27404 1.35675 8.32501 1.48597 8.32463L12.9783 8.29108L9.92048 11.3658C9.82926 11.4576 9.77822 11.5818 9.7786 11.7112C9.77898 11.8406 9.83074 11.9645 9.9225 12.0558C10.0143 12.147 10.1385 12.198 10.2679 12.1977C10.3973 12.1973 10.5212 12.1455 10.6124 12.0538L14.4991 8.14436C14.5443 8.09897 14.5802 8.04509 14.6046 7.98582C14.629 7.92656 14.6414 7.86306 14.6412 7.79897C14.641 7.73488 14.6282 7.67145 14.6035 7.61233C14.5787 7.5532 14.5426 7.49954 14.4971 7.45441L10.5877 3.56778C10.5422 3.52261 10.4883 3.48683 10.4291 3.46248C10.3698 3.43814 10.3063 3.4257 10.2423 3.42589C10.1129 3.42627 9.98895 3.47803 9.89772 3.56979C9.8065 3.66155 9.75546 3.78579 9.75584 3.91518C9.75621 4.04457 9.80798 4.16851 9.89974 4.25974L12.9755 7.31658L1.48313 7.35013C1.3539 7.35051 1.23011 7.4022 1.139 7.49385C1.04789 7.58549 0.99692 7.70958 0.997298 7.8388Z" fill="#005A8B" />
                    </svg>
                  </div>
                ))}
              </div>
            </div>
          )}
          {view === 'detail' && selectedItem && (
            <div className="rounded-[10px_10px_10px_0] shadow-xl overflow-hidden bg-white w-[300px]">
              <div className="bg-gradient-to-r from-teal-600 to-green-500 text-white p-4 flex items-center gap-3">
                <div>
                  <button className='btnico' onClick={() => startTransition('menu')}>
                    <i className='pi pi-arrow-left text-lg! text-white'></i>
                  </button>
                </div>
                <div>
                    <h3 className="font-semibold md:text-base text-xs">
                      Welcome To RADICAL EDUCATION
                    </h3>
                    <p className="md:text-sm text-xs">Chat Support</p>
                </div>
              </div>

              <div className="p-4">
                <div className='text-[#0B2E3C] font-semibold mb-4 text-xs'>{selectedItem.title}</div>
                <div className="space-y-3">
                  {selectedItem.experts.map((expert: any, idx: number) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between cursor-pointer"
                      onClick={() => openWhatsApp(expert.phone)}
                    >
                      <div className='flex items-center gap-3'>
                        <div>
                          <svg width="32" height="28" viewBox="0 0 36 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M33.7778 16.3911C33.7778 6.63111 26.2044 0 17.7778 0C9.44 0 1.77778 6.48889 1.77778 16.4978C0.711111 17.1022 0 18.24 0 19.5556V23.1111C0 25.0667 1.6 26.6667 3.55556 26.6667H5.33333V15.8222C5.33333 8.94222 10.8978 3.37778 17.7778 3.37778C24.6578 3.37778 30.2222 8.94222 30.2222 15.8222V28.4444H16V32H30.2222C32.1778 32 33.7778 30.4 33.7778 28.4444V26.2756C34.8267 25.7244 35.5556 24.64 35.5556 23.36V19.2711C35.5556 18.0267 34.8267 16.9422 33.7778 16.3911Z" fill="#1491FF"/>
                          <path d="M12.4418 19.5556C13.4237 19.5556 14.2196 18.7596 14.2196 17.7778C14.2196 16.7959 13.4237 16 12.4418 16C11.46 16 10.6641 16.7959 10.6641 17.7778C10.6641 18.7596 11.46 19.5556 12.4418 19.5556Z" fill="#1491FF"/>
                          <path d="M23.1137 19.5556C24.0956 19.5556 24.8915 18.7596 24.8915 17.7778C24.8915 16.7959 24.0956 16 23.1137 16C22.1319 16 21.3359 16.7959 21.3359 17.7778C21.3359 18.7596 22.1319 19.5556 23.1137 19.5556Z" fill="#1491FF"/>
                          <path d="M28.4487 14.2782C28.0248 11.7788 26.7303 9.5101 24.7944 7.8735C22.8585 6.23691 20.406 5.33802 17.871 5.33594C12.4843 5.33594 6.68873 9.79816 7.15095 16.8026C9.34363 15.9062 11.2802 14.4808 12.7878 12.6536C14.2955 10.8265 15.3272 8.65449 15.791 6.33149C18.1198 11.007 22.9021 14.2248 28.4487 14.2782Z" fill="#1491FF"/>
                          </svg>
                        </div>
                        <div>
                          <p className="font-semibold md:text-sm text-xs text-[#0B2E3C]">
                            {expert.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            Experience: {expert.experience}
                          </p>
                        </div>
                      </div>
                      <i className='pi pi-whatsapp text-2xl! text-[#2CBF0F]'></i>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

