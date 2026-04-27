'use client';

import Link from "next/link";
import Image from "next/image";

import FloatingWhatsApp from "@/components/FloatingWhatsApp";




export default function TermsConditionPage() {
    return (
        <>
            <FloatingWhatsApp />
            <div className="h-[60px] hidden lg:block"></div>
            <div className="py-12 lg:py-24 bg-[#F4F7F8]">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
                    <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-start">
                        <div className="w-full md:w-[60%]">
                            <div className="space-y-6 text-[#4A4A4A]">
                                <h1 className="lg:text-5xl text-4xl font-semibold text-[#0B2E3C] fadeUp mb-8">Terms & <span className="text-[#2980C4]">Conditions</span></h1>
                                <p className="text-gray-700 leading-relaxed fadeUp">
                                    Welcome to Radical Education. These terms and conditions explain how
                                    you can use our education consultancy website and services. By visiting
                                    or using our website, you hereby acknowledge that you agree with and
                                    will abide by these terms.
                                </p>

                                <p className="text-gray-700 leading-relaxed fadeUp">
                                    If you do not agree with any part of these terms, please do not use
                                    our website.
                                </p>

                                {/* SERVICE OVERVIEW */}
                                <section className="fadeUp">
                                    <h2 className="text-xl font-semibold text-[#0B2E3C] mb-2">
                                        Our Service Overview
                                    </h2>
                                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                        <li>
                                            Provides information on educational institutes, courses, and services.
                                        </li>
                                        <li>
                                            Helps connect students with institutes and education partners.
                                        </li>
                                        <li>
                                            Offers counselling services and guidance, either online or in person.
                                        </li>
                                        <li>
                                            We do not guarantee admission, placement, visa success, or academic success.
                                        </li>
                                    </ul>
                                </section>

                                {/* INSTITUTE LISTINGS */}
                                <section className="fadeUp">
                                    <h2 className="text-xl font-semibold text-[#0B2E3C] mb-2">
                                        Institute Listings
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        Institutes are responsible for presenting correct profiles, course
                                        information, fees, and any claims they make.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mt-2">
                                        We do not verify every institute unless they are marked as
                                        &quot;Verified.&quot; A listing on our website does not imply
                                        partnership or quality guarantee. We may modify, suspend, or delete
                                        any listing at any time without prior notice.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mt-2">
                                        Students are responsible for verifying institute details independently.
                                    </p>
                                </section>

                                {/* STUDENT RESPONSIBILITIES */}
                                <section className="fadeUp">
                                    <h2 className="text-xl font-semibold text-[#0B2E3C] mb-2">
                                        Students Agree on the Following
                                    </h2>
                                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                        <li>
                                            Any decisions made after obtaining information from the website
                                            are entirely their responsibility.
                                        </li>
                                        <li>
                                            Students must personally verify institute details before taking admission.
                                        </li>
                                        <li>
                                            counselling is offered purely for guidance purposes.
                                        </li>
                                    </ul>
                                </section>

                                {/* FEES */}
                                <section className="fadeUp">
                                    <h2 className="text-xl font-semibold text-[#0B2E3C] mb-2">
                                        Fees and Payments
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        Certain services or listings may involve fees.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mt-2">
                                        All fees are clearly displayed before payment. All transactions
                                        are non-refundable unless stated otherwise.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mt-2">
                                        We reserve the right to change pricing at any time.
                                    </p>
                                </section>

                                {/* THIRD PARTY LINKS */}
                                <section className="fadeUp">
                                    <h2 className="text-xl font-semibold text-[#0B2E3C] mb-2">
                                        Third Party Links
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        Our website may contain links to third-party websites.
                                        We are not responsible for the information, content, or
                                        services offered on those websites.
                                    </p>
                                </section>

                                {/* PRIVACY */}
                                <section className="fadeUp">
                                    <h2 className="text-xl font-semibold text-[#0B2E3C] mb-2">
                                        Privacy
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        Use of our website means you agree to our privacy policy,
                                        which explains how we collect and use personal information.
                                    </p>
                                </section>

                                {/* TERMS CHANGE */}
                                <section className="fadeUp">
                                    <h2 className="text-xl font-semibold text-[#0B2E3C] mb-2">
                                        Terms of Change
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        We reserve the right to modify these terms and conditions at any time
                                        without prior notice. Continued use of the website indicates acceptance
                                        of the updated terms.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mt-2">
                                        By using this website, you acknowledge that you have read, understood,
                                        and agree to comply with these terms and conditions. Please do not use
                                        our website if you do not agree with all of these terms.
                                    </p>
                                </section>
                            </div>
                        </div>
                        <div className="w-full md:w-[35%] flex justify-end">
                            <div className="hidden md:block fadePopup w-full max-w-[400px]">
                                <Image
                                    src="/images/terms-condition.png"
                                    alt="Terms and Conditions Illustration"
                                    width={450}
                                    height={450}
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}