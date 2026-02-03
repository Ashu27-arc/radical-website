'use client';

import Link from "next/link";
import { Image } from "primereact/image";




export default function TermsConditionPage() {
    return (
        <>
            <div className="h-[60px] hidden lg:block"></div>
            <div className="py-10 lg:py-20 bg-[#F4F7F8]">
                <div className="container px-3 md:px-4">
                    <div className="flex md:flex-row flex-col gap-6">
                        <div className="w-full md:w-4/10">
                            <h1 className="lg:text-5xl text-4xl font-bold text-[#0B2E3C] fadeUp text-center">Terms & <span className="text-[#2980C4]">Condition</span></h1>
                            <div className="hidden md:block mt-10 lg:w-[250px] md:w-[200px] fadePopup"><Image src="/images/squreTexcher.webp" alt="" width="" height="" /></div>
                        </div>
                        <div className="w-full md:w-6/10">
                            <div className="space-y-6 text-[#4A4A4A]">
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
                                            Offers counseling services and guidance, either online or in person.
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
                                            Counseling is offered purely for guidance purposes.
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
                    </div>
                </div>
            </div>
        </>
    );
}