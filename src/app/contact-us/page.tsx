'use client';

import CounselorForm from "@/components/CounselorForm";
import Link from "next/link";
import { Image } from "primereact/image";




export default function ContactPage() {
    return (
        <>
            <div className="bg-[#F4F7F8]">
                <section className="lg:py-40 md:py-30 py-20 relative overflow-hidden z-2 bg-[url('/images/contactHero.webp')] bg-cover bg-center bg-no-repeat">
                    <div className="absolute inset-0 bg-black/50 -z-1" />
                    <div className="mx-auto px-4 w-full lg:w-4/10 md:8/10 text-center fadeUp">
                        <h1 className="uppercase lg:text-5xl text-4xl font-bold text-white lg:mb-6 mb-4">CONTACT US</h1>
                        <p className="text-white text-lg m-0 p-0">Our team of experts is just a call or a message away. If you are having any trouble in your medical studies, come join us.</p>
                    </div>
                </section>
                <section className='py-15 overflow-hidden'>
                    <div className="container px-3 md:px-4">
                        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 lg:gap-8 mb-8">
                            <div className="fadeLeft p-8 rounded-xl shadow-[0px_6px_14px_0px_rgba(41,128,196,0.10),0px_25px_25px_0px_rgba(41,128,196,0.09),0px_57px_34px_0px_rgba(41,128,196,0.05),0px_101px_40px_0px_rgba(41,128,196,0.02),0px_157px_44px_0px_rgba(41,128,196,0)]">
                                <div className="-ml-2"><Image src="/images/visitUs.webp" className="" alt="" width="110" height="110"/></div>
                                <h4 className="my-3 text-xl font-semibold text-[#0A1A2F] -mt-2">Visit Us</h4>
                                <div className="text-sm text-[#555555] mb-6">Meet our counseling experts in person for valuable discussions, profile evaluation and resolving of any query in a comfortable, student-friendly environment.</div>
                                <Link href="https://maps.app.goo.gl/NbWqaZNNHtJqE5Br9" target="_blank">
                                    <div className="flex items-center gap-2 justify-between text-[#089241] font-semibold">
                                        <div className="">C-56/30, C Block, Sector 62, Noida, Uttar Pradesh 201309</div>
                                        <i className="pi pi-arrow-right"></i>
                                    </div>
                                </Link>
                            </div>
                            <div className="fadeUp p-8 rounded-xl shadow-[0px_6px_14px_0px_rgba(41,128,196,0.10),0px_25px_25px_0px_rgba(41,128,196,0.09),0px_57px_34px_0px_rgba(41,128,196,0.05),0px_101px_40px_0px_rgba(41,128,196,0.02),0px_157px_44px_0px_rgba(41,128,196,0)]">
                                <div className="-ml-2"><Image src="/images/callUs.webp" className="" alt="" width="110" height="110"/></div>
                                <h4 className="my-3 text-xl font-semibold text-[#0A1A2F] -mt-2">Call Us</h4>
                                <div className="text-sm text-[#555555] mb-6">Speak to us directly with experienced counselors at your disposal to resolve doubts, understanding counseling procedures and receiving total guidance for NEET and medical admissions.</div>
                                <Link href="tel:9797972465">
                                    <div className="flex items-center gap-2 justify-between text-[#089241] font-semibold">
                                        <div className="">+91 97 97 97 2465</div>
                                        <i className="pi pi-arrow-right"></i>
                                    </div>
                                </Link>
                            </div>
                            <div className="fadeRight p-8 rounded-xl shadow-[0px_6px_14px_0px_rgba(41,128,196,0.10),0px_25px_25px_0px_rgba(41,128,196,0.09),0px_57px_34px_0px_rgba(41,128,196,0.05),0px_101px_40px_0px_rgba(41,128,196,0.02),0px_157px_44px_0px_rgba(41,128,196,0)]">
                                <div className="-ml-2"><Image src="/images/writeToUs.webp" className="" alt="" width="110" height="110"/></div>
                                <h4 className="my-3 text-xl font-semibold text-[#0A1A2F] -mt-2">Write To Us</h4>
                                <div className="text-sm text-[#555555] mb-6">Email us your doubts, documents or concerns and receive clear, well-researched responses from our counseling team, ensuring you're confident and educated before making important decisions.</div>
                                <Link href="mailto:info@radicaleducation.in">
                                    <div className="flex items-center gap-2 justify-between text-[#089241] font-semibold">
                                        <div className="">info@radicaleducation.in</div>
                                        <i className="pi pi-arrow-right"></i>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="flex items-center justify-center text-[#0B2E3C] gap-4 fadeUp">
                            <span className="font-semibold">Follow Us On</span>
                            <Link target='_blank' href="https://twitter.com/Radical_Edu_"><i className='pi pi-twitter'></i></Link>
                            <Link target='_blank' href="https://www.facebook.com/profile.php?id=61556350017734"><i className='pi pi-facebook'></i></Link>
                            <Link target='_blank' href="https://www.instagram.com/radicaleducationofficial/"><i className='pi pi-instagram'></i></Link>
                            <Link target='_blank' href="https://www.linkedin.com/company/radical-education-official/about/?viewAsMember=true"><i className='pi pi-linkedin'></i></Link>
                            <Link target='_blank' href="https://whatsapp.com/channel/0029Vajjreq0G0Xmr5ILp81P"><i className='pi pi-whatsapp'></i></Link>
                            <Link target='_blank' href="https://t.me/radicaleducation"><i className='pi pi-telegram'></i></Link>
                            <Link target='_blank' href="https://www.youtube.com/@radicaleducationofficial"><i className='pi pi-youtube'></i></Link>
                        </div>
                    </div>
                </section>

                <section className='pb-60 bg-[#F4F7F8]'>
                    <div className='container px-3 md:px-4'>
                        <div className="counselorForm">
                            <div className='mb-10 fadeUp text-center'>
                                <h2 className='text-black text-4xl font-bold'>Connect with <span className='text-[#287FC4]'>Our Counselor</span></h2>
                            </div>
                            <div className='relative'>
                                <div className='rounded-xl overflow-hidden'>
                                    <Image src="/images/counselorImg.webp" alt='' className='w-full h-[435px] object-cover object-center' />
                                </div>
                                <div className='absolute left-0 top-[105px] w-full'>
                                    <div className='p-6 md:p-10 rounded-xl bg-[#005A8B] mx-auto lg:w-4/10 md:w-5/10 w-[90%] fadePopup'>
                                        <CounselorForm />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-2 bg-white">
                    <div className="w-full">
                        {/* <h2 className="text-3xl font-bold text-center mb-8 text-[#0A1A2F]">Find Us On Map</h2> */}
                        <div className="w-full">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16362.70161406333!2d77.34890896424375!3d28.618242396946375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb5e08fd7f7fce5f%3A0x8e575b0a42691cba!2sRadical%20Education%20%7C%20RDLEDU%20Pvt%20Ltd!5e1!3m2!1sen!2sin!4v1771237199124!5m2!1sen!2sin" 
                                width="100%" 
                                height="450" 
                                style={{ border: 0 }} 
                                allowFullScreen={true} 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Radical Education Location Map"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}