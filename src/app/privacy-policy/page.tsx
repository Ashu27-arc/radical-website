'use client';

import Link from "next/link";
import { Image } from "primereact/image";




export default function PrivacyPolicyPage() {
    return (
        <>
            <div className="h-[60px] hidden lg:block"></div>
            <div className="py-10 lg:py-20 bg-[#F4F7F8]">
                <div className="container px-3 md:px-4">
                    <div className="flex md:flex-row flex-col gap-6">
                        <div className="w-full md:w-4/10">
                            <h1 className="lg:text-5xl text-4xl font-bold text-[#0B2E3C] fadeUp">Privacy <span className="text-[#2980C4]">Policy</span></h1>
                            <div className="hidden md:block mt-10 lg:w-[250px] md:w-[200px] fadePopup"><Image src="/images/squreTexcher.webp" alt="" width="" height="" /></div>
                        </div>
                        <div className="w-full md:w-6/10">
                            <div className="space-y-6 text-[#4A4A4A]">
                                <p className="text-gray-700 leading-relaxed fadeUp">
                                    Welcome to the Privacy Policy of Radical Education Consultancy.
                                    At Radical Education Consultancy, the privacy of your details is of
                                    utmost concern to us when you are visiting the website.
                                </p>

                                <p className="text-gray-700 leading-relaxed fadeUp">
                                    This privacy policy describes what kind of information is collected
                                    and how it is processed.
                                </p>

                                {/* CONSENT */}
                                <section className="fadeUp">
                                    <h2 className="text-xl font-semibold text-[#0B2E3C] mb-2">
                                        Consent
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        In visiting the website, you consent to the terms of the privacy policy.
                                    </p>
                                </section>

                                {/* INFORMATION WE COLLECT */}
                                <section className="fadeUp">
                                    <h2 className="text-xl font-semibold text-[#0B2E3C] mb-2">
                                        Information We Collect
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        As mentioned, we collect information such as your name, e-mail
                                        address, and phone number which you provide to us.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mt-2">
                                        We may also ask for additional information if you contact us
                                        or if you choose to register.
                                    </p>
                                </section>

                                {/* HOW WE USE INFORMATION */}
                                <section className="fadeUp">
                                    <h2 className="text-xl font-semibold text-[#0B2E3C] mb-2">
                                        How We Use Your Information
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        We use information about how visitors access our website in order
                                        to operate our website and make it more functional.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mt-2">
                                        We also use the information you provide for sending messages and
                                        presenting fraud logs, files, or other websites. We use log files
                                        to evaluate website traffic patterns.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mt-2">
                                        These files contain information such as IP addresses, browser type,
                                        ISP, date and time stamp, referring/exit pages, and number of clicks.
                                        None of this information is linked to any personal identifiers.
                                    </p>
                                </section>

                                {/* COOKIES */}
                                <section className="fadeUp">
                                    <h2 className="text-xl font-semibold text-[#0B2E3C] mb-2">
                                        Cookies & Web Beacons
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        We use cookies to improve your experience on our website based
                                        on your preferences.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mt-2">
                                        Cookies record your visit and help us enhance our website content.
                                    </p>
                                </section>

                                {/* THIRD PARTY ADS */}
                                <section className="fadeUp">
                                    <h2 className="text-xl font-semibold text-[#0B2E3C] mb-2">
                                        Third-Party Advertising
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        Occasionally, we partner with external advertising firms. For example,
                                        Google. These companies can use cookies to display ads to you based
                                        on your visits to our website or other websites on the internet.
                                    </p>
                                </section>

                                {/* THIRD PARTY PRIVACY */}
                                <section className="fadeUp">
                                    <h2 className="text-xl font-semibold text-[#0B2E3C] mb-2">
                                        Third Party Privacy Policies
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        Our privacy policy does not extend to third-party advertisers or
                                        websites. We encourage you to refer to their respective privacy
                                        policies for further information about how they treat personally
                                        identifiable data.
                                    </p>
                                </section>

                                {/* CCPA & GDPR */}
                                <section className="fadeUp">
                                    <h2 className="text-xl font-semibold text-[#0B2E3C] mb-2">
                                        CCPA Privacy Rights & GDPR Data Protection Rights
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        You have a number of rights regarding your personal information
                                        which apply in California and in the EU. These rights include the
                                        right to access, correct, delete, or restrict the use of your data.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mt-2">
                                        If you wish to exercise any of these rights or have questions
                                        regarding this privacy policy, please do not hesitate to contact us.
                                    </p>
                                </section>

                                {/* CHANGES */}
                                <section className="fadeUp">
                                    <h2 className="text-xl font-semibold text-[#0B2E3C] mb-2">
                                        Changes to Privacy Policy
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        We are free to modify or update this privacy policy at any time.
                                        By continuing to use our website, you agree to the revised terms.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mt-2">
                                        If you disagree with any portion of this policy, please do not
                                        use our website. We are responsible for creating and maintaining
                                        your account.
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