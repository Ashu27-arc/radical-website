'use client';

import { useRef, useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import Link from 'next/link';
import { Image } from 'primereact/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const sliderData = [
  {
    id: 1,
    title: 'Himalaya Medical College and Hospital',
    date: 'December 19, 2025',
    image: '/images/college-1.webp',
    link: '/college/himalaya-medical',
  },
  {
    id: 2,
    title: 'Radical Institute of Medical Sciences',
    date: 'January 10, 2026',
    image: '/images/college-1.webp',
    link: '/college/radical-medical',
  },
];

const cardsData = [
  {
    id: 1,
    title: 'College Health Report',
    image: '/images/health-report.webp',
  },
  {
    id: 2,
    title: 'Documentation Reinforcement',
    image: '/images/documentation.webp',
  },
  {
    id: 3,
    title: 'Cut-off Anatomy',
    image: '/images/cutoff.webp',
  },
  {
    id: 4,
    title: 'Admission and Counselling Strategy',
    image: '/images/counselling.webp',
  },
  {
    id: 5,
    title: 'Cyclic Alerts',
    image: '/images/alerts.webp',
  },
  {
    id: 6,
    title: 'Dedicated Counsellor',
    image: '/images/counsellor.webp',
  },
];

export default function EnquireButton() {
  const [visible, setVisible] = useState(false);
  const toast = useRef<Toast>(null);

  const [form, setForm] = useState({
    name: '',
    mobile: '',
    email: '',
    course: '',
  });

  const [loading, setLoading] = useState(false);

  const courseOptions = [
    { label: 'MBBS INDIA', value: 'MBBS INDIA' },
    { label: 'MBBS ABROAD', value: 'MBBS ABROAD' },
    { label: 'BDS INDIA', value: 'BDS INDIA' },
    { label: 'AYUSH INDIA', value: 'AYUSH INDIA' },
    { label: 'MD/MS/DNB', value: 'MD/MS/DNB' },
    { label: 'MBA', value: 'MBA' },
    { label: 'PGDM', value: 'PGDM' },
    { label: 'B.TECH', value: 'B.TECH' },
    { label: 'M.TECH', value: 'M.TECH' },
    { label: 'OTHERS', value: 'OTHERS' },
  ];

  const showError = (msg: string) => {
    toast.current?.show({
      severity: 'error',
      summary: 'Validation Error',
      detail: msg,
      life: 3000,
    });
  };

  const handleSubmit = async () => {
    if (!form.name.trim()) return showError('Name is required');
    if (!form.mobile.trim()) return showError('Mobile number is required');

    if (!/^\d{10}$/.test(form.mobile)) {
      return showError('Mobile number must be exactly 10 digits');
    }

    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      return showError('Invalid email address');
    }

    if (!form.course) {
      return showError('Please select a course');
    }

    setLoading(true);
    try {
      const response = await fetch('/api/counselor-enquiry/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...form,
          state: 'Floating Form' // Providing a default state for the backend
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.current?.show({
          severity: 'success',
          summary: 'Enquiry Submitted',
          detail: 'We will contact you shortly',
          life: 3000,
        });

        setForm({
          name: '',
          mobile: '',
          email: '',
          course: '',
        });

        setVisible(false);
      } else {
        showError(result.message || 'Submission failed');
      }
    } catch (error) {
      showError('Network error. Please try again.');
      console.error('Submission error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toast ref={toast} />

      {/* Floating Vertical Button */}
      <button
        onClick={() => setVisible(true)}
        className="
          fixed right-[-65px] md:right-[-70px] top-1/2 z-50
          bg-[#CB1E17] text-white tracking-widest
          px-4 md:px-6 py-2.5 md:py-3 rounded-t-2xl shadow-xl
          hover:bg-red-600 transition-all duration-300
          flex items-center gap-2 text-[10px] md:text-xs cursor-pointer
        "
        style={{
          transform: 'translateY(-50%) rotate(-90deg)',
          transformOrigin: 'center',
        }}
      >
        ENQUIRE NOW
        <i className="pi pi-envelope text-[10px] md:text-xs!"></i>
      </button>

      {/* Modal */}
      <Dialog
        header={false}
        visible={visible}
        onHide={() => setVisible(false)}
        modal
        className="w-[95vw] max-w-[900px] noDialogHeader DialogBodyNoPadding transparentDialog rounded-lg"
      >
        <div className="rounded-lg overflow-hidden relative">
          <button onClick={() => setVisible(false)} className='btnico absolute right-[10px] top-[10px] cursor-pointer z-50'>
            <i className='pi pi-times-circle text-xl!'></i>
          </button>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={0}
            breakpoints={{
              1024: {
                slidesPerView: 2,
                enabled: false,
              },
              0: {
                slidesPerView: 1,
                enabled: true,
              }
            }}
            className="enquiryModalSlider lg:h-[600px]"
          >
            <SwiperSlide className="!h-auto lg:!h-full">
              <div className="px-4 py-10 md:px-6 md:py-12 lg:p-8 bg-[#e7fffc] h-full flex flex-col">
                <div className="space-y-4 md:space-y-5 lg:space-y-6 flex-grow flex flex-col justify-between lg:justify-start">
                  <div className="space-y-4 md:space-y-5">
                    <div>
                      <div className="text-2xl md:text-3xl font-bold text-black mb-1">
                        Request a <span className="text-[#00CFB2]">Callback</span>
                      </div>
                      <div className="text-sm md:text-base text-black opacity-80">
                        Stay Ahead for NEET 2025! Get Expert Guidance & Latest Update.
                      </div>
                    </div>

                    {/* Form Fields */}
                    <div className="space-y-5 md:space-y-6 lg:space-y-5">
                      {/* Name */}
                      <div className="p-inputgroup">
                        <span className="p-inputgroup-addon bg-white! border-gray-300!">
                          <i className="pi pi-user"></i>
                        </span>
                        <span className="p-float-label">
                          <InputText
                            id="name"
                            value={form.name}
                            onChange={(e) =>
                              setForm({ ...form, name: e.target.value })
                            }
                            className="w-full border-l-0! pl-0! py-3.5! lg:py-3.5!"
                          />
                          <label htmlFor="name" className="text-sm">
                            Full Name*
                          </label>
                        </span>
                      </div>

                      {/* Email */}
                      <div className="p-inputgroup">
                        <span className="p-inputgroup-addon bg-white! border-gray-300!">
                          <i className="pi pi-envelope"></i>
                        </span>
                        <span className="p-float-label">
                          <InputText
                            id="email"
                            value={form.email}
                            onChange={(e) =>
                              setForm({ ...form, email: e.target.value })
                            }
                            className="w-full border-l-0! pl-0! py-3.5! lg:py-3.5!"
                          />
                          <label htmlFor="email" className="text-sm">
                            Email Address
                          </label>
                        </span>
                      </div>

                      {/* Mobile */}
                      <div className="p-inputgroup">
                        <span className="p-inputgroup-addon bg-white! border-gray-300!">
                          <i className="pi pi-phone"></i>
                        </span>
                        <span className="p-float-label">
                          <InputText
                            id="mobile"
                            value={form.mobile}
                            keyfilter="int"
                            maxLength={10}
                            onChange={(e) =>
                              setForm({
                                ...form,
                                mobile: e.target.value.replace(/\D/g, ''),
                              })
                            }
                            className="w-full border-l-0! pl-0! py-3.5! lg:py-3.5!"
                          />
                          <label htmlFor="mobile" className="text-sm">
                            Mobile Number*
                          </label>
                        </span>
                      </div>

                      {/* Course */}
                      <div className="p-inputgroup">
                        <span className="p-inputgroup-addon bg-white! border-gray-300!">
                          <i className="pi pi-book"></i>
                        </span>
                        <span className="p-float-label w-full">
                          <Dropdown
                            id="course"
                            value={form.course}
                            options={courseOptions}
                            onChange={(e) =>
                              setForm({ ...form, course: e.value })
                            }
                            className="w-full border-l-0! h-[52px] lg:h-[54px] flex items-center"
                          />
                          <label htmlFor="course" className="text-sm">
                            Select Course*
                          </label>
                        </span>
                      </div>
                    </div>

                    <div>
                      <Button
                        label="SUBMIT"
                        icon="pi pi-arrow-right"
                        iconPos="right"
                        className="w-full py-4 lg:py-4 bg-gradient-to-l! from-[#00CFB2]! to-[#007EC8]! border-[#00CFB2]! text-base lg:text-lg font-bold shadow-lg"
                        onClick={handleSubmit}
                        loading={loading}
                      />
                    </div>
                  </div>

                  <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-auto lg:-mt-2'>
                    <Link href="tel:+919797972465" className='rounded-xl flex items-center gap-3 p-2.5 w-full bg-gradient-to-r! from-[#00CFB2]! to-[#287FC4]! border-[#00CFB2]! transition-transform hover:scale-[1.02]'>
                      <div className='h-9 w-9 flex items-center justify-center rounded-full border border-white/40 bg-white/10 shrink-0'>
                        <i className='pi pi-phone text-white text-sm'></i>
                      </div>
                      <div className="min-w-0">
                        <div className='text-white font-bold text-[13px] truncate'>+919797972465</div>
                        <div className='text-white/80 text-[9px] whitespace-nowrap'>Call for Consultation!</div>
                      </div>
                    </Link>

                    <Link href="#" className='rounded-xl flex items-center gap-3 p-2.5 w-full bg-gradient-to-l! from-[#00CFB2]! to-[#287FC4]! border-[#00CFB2]! transition-transform hover:scale-[1.02]'>
                      <div className='flex items-center justify-center shrink-0'>
                        <i className='pi pi-whatsapp text-green-500 text-3xl!'></i>
                      </div>
                      <div className="min-w-0">
                        <div className='text-white font-bold text-[13px] md:text-[12px] lg:text-[10px] truncate'>NEET 2026 LATEST <br /> UPDATES</div>
                        <div className='text-white/80 text-[9px] whitespace-nowrap'>Join Our Channel Now</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="!h-auto lg:!h-full">
              <div className="px-4 py-10 md:px-6 md:py-12 lg:p-10 bg-white h-full flex flex-col">
                <div className='space-y-6 md:space-y-4 flex-grow flex flex-col justify-between'>
                  <div className='w-full relative group'>
                    {/* Custom Navigation Icons (Desktop Only) */}
                    <div className="hidden lg:flex absolute -left-6 top-1/2 -translate-y-1/2 z-10 cursor-pointer swiper-prev-btn">
                      <i className="pi pi-chevron-left text-[#00CFB2] text-lg font-bold"></i>
                    </div>
                    <div className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10 cursor-pointer swiper-next-btn">
                      <i className="pi pi-chevron-right text-[#00CFB2] text-lg font-bold"></i>
                    </div>

                    <Swiper
                      modules={[Navigation, Autoplay]}
                      navigation={{
                        prevEl: '.swiper-prev-btn',
                        nextEl: '.swiper-next-btn',
                      }}
                      autoplay={{ delay: 3000, disableOnInteraction: false, }}
                      loop
                      className="px-2! flotingFormSlider"
                    >
                      {sliderData.map((item) => (
                        <SwiperSlide key={item.id}>
                          <Link className='' href={item.link}>
                            <div className="flex items-center gap-4 cursor-pointer">
                              <div className="w-20 md:w-24 h-14 md:h-16 relative shrink-0 flex items-center">
                                <Image
                                  src={item.image}
                                  alt={item.title}
                                  className="object-cover rounded-md shadow-sm"
                                />
                              </div>

                              <div className="min-w-0">
                                <h3 className="font-semibold text-gray-800 mb-1 text-sm md:text-base line-clamp-1">
                                  {item.title}
                                </h3>
                                <p className="text-[10px] md:text-xs text-gray-500 font-medium">{item.date}</p>
                              </div>
                            </div>
                          </Link>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>

                  {/* ================= TITLE ================= */}
                  <h2 className="font-bold text-gray-900 text-xl md:text-xl leading-tight">
                    How Radical Education Supports <br className="hidden sm:block" />
                    You in Securing Admissions
                  </h2>

                  {/* ================= CARDS ================= */}
                  <div className="grid grid-cols-2 lg:grid-cols-2 gap-3 md:gap-4 mt-auto">
                    {cardsData.map((card) => (
                      <div
                        key={card.id}
                        className="border border-[#00CFB2]/30 bg-gray-50/30 rounded-xl p-3 md:py-4 flex flex-col items-center justify-center space-y-2 text-center transition-all hover:border-[#00CFB2] hover:bg-white hover:shadow-md group"
                      >
                        <div className="w-10 md:w-14 relative inline-flex items-center transition-transform group-hover:scale-110">
                          <Image
                            src={card.image}
                            alt={card.title}
                            className="object-contain"
                          />
                        </div>

                        <p className="font-medium text-gray-700 text-[11px] md:text-sm leading-tight">
                          {card.title}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </Dialog>
    </>
  );
}

