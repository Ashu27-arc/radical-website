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
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';


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
    email: '',
    mobile: '',
    course: '',
  });

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

  const handleSubmit = () => {
    if (!form.name.trim()) return showError('Name is required');
    if (!form.email.trim()) return showError('Email is required');
    if (!form.mobile.trim()) return showError('Mobile number is required');

    if (!/^\d{10}$/.test(form.mobile)) {
      return showError('Mobile number must be exactly 10 digits');
    }

    if (!form.course) {
      return showError('Please select a course');
    }

    toast.current?.show({
      severity: 'success',
      summary: 'Enquiry Submitted',
      detail: 'We will contact you shortly',
      life: 3000,
    });

    setForm({
      name: '',
      email: '',
      mobile: '',
      course: '',
    });

    setVisible(false);
  };

  return (
    <>
      <Toast ref={toast} />

      {/* Floating Vertical Button */}
      <button
        onClick={() => setVisible(true)}
        className="
          fixed right-[-70px] top-1/2 z-50
          bg-[#CB1E17] text-white tracking-widest
          px-6 py-3 rounded-t-2xl shadow-xl
          hover:bg-red-600 transition
          flex items-center gap-2 text-xs cursor-pointer
        "
        style={{
          transform: 'translateY(-50%) rotate(-90deg)',
          transformOrigin: 'center',
        }}
      >
        ENQUIRE NOW
        <i className="pi pi-envelope text-xs!"></i>
      </button>

      {/* Modal */}
      <Dialog
        header={false}
        visible={visible}
        onHide={() => setVisible(false)}
        modal
        className="w-[95vw] max-w-[900px] noDialogHeader DialogBodyNoPadding transparentDialog rounded-lg"
      >
        <div className="grid lg:grid-cols-2 grid-cols-1 rounded-lg overflow-hidden relative">
          <button onClick={() => setVisible(false)} className='btnico absolute right-[10px] top-[10px] cursor-pointer'>
            <i className='pi pi-times-circle text-xl!'></i>
          </button>
          <div className="md:px-6 px-4 lg:py-8 md:py-6 py-4 bg-[#e7fffc]">
            <div className="space-y-5">
              <div>
                <div className="text-3xl font-bold text-black mb-1">
                  Request a <span className="text-[#00CFB2]">Callback</span>
                </div>
                <div className="text-black">
                  Stay Ahead for NEET 2025! Get Expert Guidance & Latest Update.
                </div>
              </div>

              {/* Name */}
              <div className="p-inputgroup">
                <span className="p-inputgroup-addon bg-white!">
                  <i className="pi pi-user"></i>
                </span>
                <span className="p-float-label">
                  <InputText
                    id="name"
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    className="w-full border-l-0! pl-0!"
                  />
                  <label htmlFor="name" className="text-sm">
                    Full Name*
                  </label>
                </span>
              </div>

              {/* Email */}
              <div className="p-inputgroup">
                <span className="p-inputgroup-addon bg-white!">
                  <i className="pi pi-envelope"></i>
                </span>
                <span className="p-float-label">
                  <InputText
                    id="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="w-full border-l-0! pl-0!"
                  />
                  <label htmlFor="email" className="text-sm">
                    Email Address*
                  </label>
                </span>
              </div>

              {/* Mobile */}
              <div className="p-inputgroup">
                <span className="p-inputgroup-addon bg-white!">
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
                    className="w-full border-l-0!"
                    style={{ paddingLeft: 0 }}
                  />
                  <label htmlFor="mobile" className="text-sm">
                    Mobile Number*
                  </label>
                </span>
              </div>

              {/* Course (Required) */}
              <div className="p-inputgroup">
                <span className="p-inputgroup-addon bg-white!">
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
                    className="w-full border-l-0!"
                  />
                  <label htmlFor="course" className="text-sm">
                    Select Course*
                  </label>
                </span>
              </div>
              <div>    
                <Button
                  label="SUBMIT"
                  icon="pi pi-arrow-right"
                  iconPos="right"
                  className="w-full bg-gradient-to-l! from-[#00CFB2]! to-[#005A8B]! border-[#00CFB2]!"
                  onClick={handleSubmit}
                />
              </div> 
              <div className='grid grid-cols-2 gap-2'>
                <div>
                  <Link href="tel:+919797972465" className='rounded-lg flex items-center gap-2 p-2 w-full bg-gradient-to-r! from-[#00CFB2]! to-[#005A8B]! border-[#00CFB2]!'>
                    <div>
                      <div className='h-9 w-9 flex items-center justify-center rounded-full border-2 border-[#fff]'>
                        <i className='pi pi-phone text-white text-[14px]!'></i>
                      </div>
                    </div>
                    <div>
                      <div className='text-white font-bold text-sm'>+919797972465</div>
                      <div className='text-black text-[10px] text-nowrap'>Call for a Consultation!</div>
                    </div>
                  </Link>
                </div>
                <div>
                  <Link href="#" className='rounded-lg flex items-center gap-2 px-2 py-1 w-full bg-gradient-to-l! from-[#00CFB2]! to-[#005A8B]! border-[#00CFB2]!'>
                    <div>
                      <div className='h-9 w-9 flex items-center justify-center rounded-full border-2 border-[#fff]'>
                        <i className='pi pi-whatsapp text-white text-[18px]!'></i>
                      </div>
                    </div>
                    <div>
                      <div className='text-white font-bold text-xs'>NEET 2026 LATEST UPDATES</div>
                      <div className='text-black text-[8px] text-nowrap'>Join Our WhatsApp Channel Now</div>
                    </div>
                  </Link>
                </div>
              </div> 
            </div>
          </div>

          <div className="md:px-6 px-4 lg:py-8 md:py-6 py-4 bg-white">
            <div className='space-y-4'>
              <div className='w-full'>
                <Swiper
                  modules={[Navigation, Autoplay]}
                  navigation
                  autoplay={{ delay: 3000, disableOnInteraction: false, }}
                  loop
                  className="px-2! flotingFormSlider"
                >
                  {sliderData.map((item) => (
                    <SwiperSlide key={item.id}>
                      <Link className='' href={item.link}>
                        <div className="flex items-center gap-4 cursor-pointer">
                          <div className="w-20 h-14 relative shrink-0 flex items-center">
                            <Image
                              src={item.image}
                              alt={item.title}
                              className="object-cover rounded-md"
                            />
                          </div>

                          <div>
                            <h3 className="font-semibold text-gray-800 mb-1 text-sm md:text-base line-clamp-1">
                              {item.title}
                            </h3>
                            <p className="text-xs text-gray-500">{item.date}</p>
                          </div>
                        </div>
                      </Link>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              {/* ================= TITLE ================= */}
              <h2 className="font-medium text-gray-900">
                How Radical Education Supports <br className="hidden sm:block" />
                You in Securing Admissions
              </h2>

              {/* ================= CARDS ================= */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cardsData.map((card) => (
                  <div
                    key={card.id}
                    className="border border-[#00CFB2] rounded-xl px-2 py-3 space-y-2 text-center"
                  >
                    <div className="w-[56px] relative inline-flex items-center">
                      <Image
                        src={card.image}
                        alt={card.title}
                        className="object-contain"
                      />
                    </div>

                    <p className="font-medium text-gray-800 text-sm">
                      {card.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </Dialog>
    </>
  );
}

