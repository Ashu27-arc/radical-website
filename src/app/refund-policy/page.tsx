'use client';

import Link from "next/link";
import { Image } from "primereact/image";




export default function RefundPolicyPage() {
    return (
        <>
            <div className="h-[60px] hidden lg:block"></div>
            <div className="py-10 lg:py-20 bg-[#F4F7F8]">
                <div className="container px-3 md:px-4">
                    <div className="flex md:flex-row flex-col gap-6">
                        <div className="w-full md:w-4/10">
                            <h1 className="lg:text-5xl text-4xl font-bold text-[#0B2E3C] fadeUp">Refund <span className="text-[#2980C4]">Policy</span></h1>
                            <div className="hidden md:block mt-10 lg:w-[250px] md:w-[200px] fadePopup"><Image src="/images/squreTexcher.webp" alt="" width="" height="" /></div>
                        </div>
                        <div className="w-full md:w-6/10">
                            <div className="space-y-6 text-[#4A4A4A]">
                                <p className="text-gray-700 leading-relaxed fadeUp">
                                    Radical Education provides educational advice and support to students
                                    looking to learn more about how to study medicine. We provide information
                                    regarding medical colleges, universities, and foreign countries offering
                                    MBBS or any medical courses.
                                </p>

                                <p className="text-gray-700 leading-relaxed fadeUp">
                                    It is a personal choice for an individual to join Radical Education
                                    with the intention of getting assistance with medical courses.
                                </p>

                                {/* INFORMATION ACCURACY */}
                                <section className="fadeUp">
                                    <h2 className="text-xl font-semibold text-[#0B2E3C] mb-2">
                                        Information Accuracy
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        We do our best to provide you with current and accurate information.
                                        Despite this, information regarding universities, colleges, and
                                        countries is prone to sudden changes.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mt-2">
                                        Radical Education is not responsible for any error that may occur.
                                        This information is particularly true with respect to guidelines
                                        from the National Medical Council.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mt-2">
                                        As we have already told you, guidelines are very stringent, and
                                        it is essential to adhere to them to be granted a license to
                                        practice medicine.
                                    </p>
                                </section>

                                {/* RESPONSIBILITY */}
                                <section className="fadeUp">
                                    <h2 className="text-xl font-semibold text-[#0B2E3C] mb-2">
                                        Responsibility of the Students and Parents
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        It is your responsibility to ensure that any information you provide
                                        is truthful and accurate. If one lies or provides fake information,
                                        we reserve the right to cancel such services without refunding
                                        any money.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mt-2">
                                        You agree to undertake full responsibility for the information
                                        you provide. The final call regarding the choice of college,
                                        university, or country rests with you.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mt-2">
                                        Radical Education makes recommendations based on what we believe
                                        to be in your best interests.
                                    </p>
                                </section>

                                {/* CONSULTATION FEES */}
                                <section className="fadeUp">
                                    <h2 className="text-xl font-semibold text-[#0B2E3C] mb-2">
                                        Consultation Fees
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        We value our time and expertise for which money is charged. The cost
                                        is discussed prior to engagement.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mt-2">
                                        You agree to pay the full amount decided upon. In case of
                                        non-payment or dispute, we may call upon all available legal
                                        options to recover the due amount.
                                    </p>
                                </section>

                                {/* LIMITATION */}
                                <section className="fadeUp">
                                    <h2 className="text-xl font-semibold text-[#0B2E3C] mb-2">
                                        Limitation of Liability
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        Any decisions taken by a student regarding school, country, or
                                        program of study are not the responsibility of Radical Education.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mt-2">
                                        Our role is to support, guide, and assist you, but the final
                                        decision always remains yours.
                                    </p>
                                </section>

                                {/* MISCONDUCT */}
                                <section className="fadeUp">
                                    <h2 className="text-xl font-semibold text-[#0B2E3C] mb-2">
                                        Consequences for Misconduct
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        In the event of any illegal activity, trouble, or behavior that
                                        results in a student losing their position in a school or program,
                                        such liability shall not be borne by Radical Education.
                                    </p>
                                </section>

                                {/* INSTITUTIONAL REFUNDS */}
                                <section className="fadeUp">
                                    <h2 className="text-xl font-semibold text-[#0B2E3C] mb-2">
                                        Institutional Refunds
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        Radical Education does not facilitate or process refund requests
                                        from any college, university, or authority.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mt-2">
                                        You are solely responsible for handling any refund process on
                                        your own with the respective institution.
                                    </p>
                                </section>

                                {/* REFUND POLICY */}
                                <section className="fadeUp">
                                    <h2 className="text-xl font-semibold text-[#0B2E3C] mb-2">
                                        Refund Policy
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        All registration and counseling fees paid to Radical Education
                                        are non-refundable. This includes situations where you decide
                                        not to go through the admission process or do not get admitted.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mt-2">
                                        If you register before an exam like NEET and fail to clear it,
                                        the fee is not returned. However, if you apply again the next year,
                                        the previously paid fee will be adjusted towards that year’s fee.
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