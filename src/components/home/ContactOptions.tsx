"use client";

export default function ContactOptions() {
    const phoneNumber = "+919797972465";
    const emailAddress = "info@radicaleducation.in";

    const handleCallClick = () => {
        window.location.href = `tel:${phoneNumber}`;
    };

    const handleEmailClick = () => {
        window.location.href = `mailto:${emailAddress}`;
    };

    return (
        <>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-25">


                <div
                    className="group relative overflow-hidden rounded-[20px] bg-[#bcdbae] p-6 lg:p-10 w-full max-w-[420px] h-[280px] md:h-[320px] mx-auto flex flex-col justify-between transition-all duration-500 ease-in-out md:hover:-translate-y-2 md:hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] cursor-pointer"
                    onClick={handleCallClick}
                >

                    <div className="z-10">
                        <h3 className="text-xl lg:text-2xl font-medium lg:font-semibold text-gray-900">
                            Talk to an expert
                        </h3>
                        <p className="text-lg font-normal text-gray-800 mt-2 leading-relaxed max-w-[75%] md:max-w-none">
                            No AI. No Bots.<br />
                            Real Human Assistance
                        </p>
                        <button className="cursor-pointer mt-4 md:mt-6 bg-[#8cb37a] text-white px-4 py-1 md:px-8 md:py-3 rounded-[10px] font-semibold text-sm tracking-wide transition-all duration-300">
                            Free Call
                        </button>
                    </div>

                    <div className="absolute bottom-2 right-2 w-48 h-48 md:w-56 md:h-56 bg-[#8cb37a] rounded-full translate-x-12 md:translate-x-16 translate-y-12 md:translate-y-16 transition-all duration-500 ease-in-out md:group-hover:scale-125 md:group-hover:rotate-6"></div>

                    <i className="absolute bottom-6 right-6 z-10 transition-all duration-500 md:group-hover:scale-110 md:group-hover:-rotate-6">
                        <svg className="w-[60px] h-[60px] md:w-[80px] md:h-[80px]" viewBox="0 0 109 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M107.658 98.7551L104.703 103.316C102.437 106.813 98.5701 108.936 94.403 108.993C81.5027 109.162 52.8171 106.326 27.7444 81.2547C2.6717 56.1812 -0.161637 27.4946 0.00670533 14.5914C0.061093 10.4241 2.18221 6.55985 5.68374 4.29362L10.2445 1.33587C13.5285 -0.795679 17.851 -0.337255 20.6196 2.43143L38.4147 20.2246C41.6521 23.462 41.6521 28.7145 38.4147 31.952L31.5774 38.7895C31.5774 38.7895 33.0822 50.2139 45.9332 63.0653C58.7842 75.9168 70.2108 77.4215 70.2108 77.4215L77.0481 70.5866C80.2855 67.3491 85.5378 67.3491 88.7751 70.5866L106.57 88.3797C109.339 91.1484 109.795 95.4736 107.663 98.7577L107.658 98.7551Z" fill="white" />
                        </svg>
                    </i>
                </div>

                <div
                    className="group relative overflow-hidden rounded-[20px] bg-[#a6cbfc] lg:p-10 p-6 w-full max-w-[420px] h-[280px] md:h-[320px] mx-auto flex flex-col justify-between transition-all duration-500 ease-in-out md:hover:-translate-y-2 md:hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] cursor-pointer"
                    onClick={handleEmailClick}
                >

                    <div className="z-10 text-right">
                        <h3 className="text-xl lg:text-2xl font-medium lg:font-semibold text-gray-900">
                            Email us
                        </h3>
                        <p className="text-lg font-normal text-gray-800 mt-2 leading-relaxed ml-auto max-w-[80%] md:max-w-none">
                            Prefer writing it out?<br />
                            Email us. We’ve got you.
                        </p>
                        <button className="cursor-pointer mt-4 md:mt-6 bg-[#74a8ee] text-white px-4 py-1 md:px-8 md:py-3 rounded-[10px] font-semibold text-sm tracking-wide transition-all duration-300">
                            Instant Help
                        </button>
                    </div>

                    <div className="absolute bottom-2 left-2 w-48 h-48 md:w-56 md:h-56 bg-[#75a9ee] rounded-full -translate-x-16 translate-y-16 transition-all duration-500 ease-in-out md:group-hover:scale-125 md:group-hover:rotate-6"></div>

                    <i className="absolute bottom-6 left-6 z-10 transition-all duration-500 md:group-hover:scale-110 md:group-hover:-rotate-6">
                        <svg className="w-[70px] h-[70px] md:w-[90px] md:h-[90px]" viewBox="0 0 131 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M129.084 51.3111L64.7775 61.4226L43.2194 -0.000176556L129.084 51.3111ZM96.9245 116.686C95.8347 118.902 93.1576 119.805 90.922 118.704C90.7107 118.578 90.4994 118.451 90.2881 118.325L2.57994 65.9119C0.394561 64.9448 -0.596297 62.3715 0.370764 60.1861C0.466343 59.9825 0.561918 59.779 0.707398 59.5792L34.892 2.37481L39.7441 16.0668L57.6803 67.1918C58.1872 69.528 60.4963 70.9861 62.8326 70.4792C62.9246 70.456 63.0052 70.452 63.0781 70.4174L128.949 60.0422L130.914 59.8084L96.9245 116.686Z" fill="white" />
                        </svg>
                    </i>
                </div>

            </div>
        </>
    );
}