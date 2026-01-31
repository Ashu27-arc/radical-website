"use client";

interface BlogSidebarProps {
    className?: string;
}

const BlogSidebar = ({ className = "" }: BlogSidebarProps) => {
    return (
        <div className={`bg-[#E1F2FF] lg:col-span-1 mt-8 lg:mt-8 lg:ml-auto lg:mr-0 ${className}`}>
            {/* Get In Touch Form */}
            <div className="bg-[#E1F2FF] p-4 md:p-6 rounded-lg mb-8">
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4 text-center">Get In Touch</h3>
                <div className="space-y-4">
                    <input
                        type="text"
                        placeholder="name"
                        className="w-full bg-white p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                    />
                    <input
                        type="email"
                        placeholder="email address"
                        className="w-full bg-white p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                    />
                    <input
                        type="tel"
                        placeholder="mobile no"
                        className="w-full bg-white p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                    />
                    <select className="w-full bg-white p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-500 text-sm md:text-base">
                        <option>select course</option>
                        <option>MBBS</option>
                        <option>BDS</option>
                        <option>NEET PG</option>
                    </select>
                    <button className="w-full bg-gradient-to-r from-[#63CDB4] to-[#0077BF] hover:from-[#0077BF] hover:to-[#63CDB4] text-white py-3 rounded-lg font-medium hover:from-teal-500 hover:to-blue-600 transition-all duration-200 text-sm md:text-base">
                        Submit
                    </button>
                </div>
            </div>

            {/* Related Section */}
            <div>
                <h3 className="text-lg md:text-xl font-bold text-[#287FC4] mb-6 ml-4 md:ml-10">Related</h3>
                <div className="space-y-6">
                    {/* Related Post 1 */}
                    <div className="p-4 mx-4 rounded-lg border-[#ABABAB] border-b-1">
                        <h4 className="font-semibold text-gray-800 mb-2 leading-tight text-sm md:text-base">
                            NEET Exam in India: Your Gateway to a Bright Medical
                        </h4>
                        <div className="text-gray-500 text-xs md:text-sm">
                            <span>Garima Pareek</span>
                            <span className="mx-2">•</span>
                            <span>15 Jan 2025</span>
                        </div>
                    </div>

                    {/* Related Post 2 */}
                    <div className="p-4 mx-4 rounded-lg border-[#ABABAB] border-b-1">
                        <h4 className="font-semibold text-[#000000] mb-2 leading-tight text-sm md:text-base">
                            NEET Exam in India: Your Gateway to a Bright Medical
                        </h4>
                        <div className="text-gray-500 text-xs md:text-sm">
                            <span>Garima Pareek</span>
                            <span className="mx-2">•</span>
                            <span>15 Jan 2025</span>
                        </div>
                    </div>

                    {/* Related Post 3 */}
                    <div className="p-4 mx-4 rounded-lg border-[#ABABAB] border-b-1">
                        <h4 className="font-semibold text-[#000000] mb-2 leading-tight text-sm md:text-base">
                            NEET Exam in India: Your Gateway to a Bright Medical
                        </h4>
                        <div className="text-gray-500 text-xs md:text-sm">
                            <span>Garima Pareek</span>
                            <span className="mx-2">•</span>
                            <span>15 Jan 2025</span>
                        </div>
                    </div>
                </div>

                {/* Advertisement Banners */}
                <div className="mt-8 mx-4 space-y-4">
                    <div className="bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg overflow-hidden">
                        <img
                            src="/images/blogs/ad-1.webp"
                            alt="Study MBBS in Kyrgyzstan"
                            className="w-full h-auto"
                        />
                    </div>
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg overflow-hidden">
                        <img
                            src="/images/blogs/ad.webp"
                            alt="NEET PG Admission"
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogSidebar;