const Banner = () => {
    return (
        <section className="relative h-full md:h-screen text-white overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source
                        src="https://autobe.ajpgroup.com/api/video/auto.mp4/"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60"></div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 h-full flex flex-col justify-center items-start px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 pt-16 md:pt-0 mt-12 ">
                <div className="max-w-3xl w-full">
                    {/* Badge */}
                    {/* <div className="hidden sm:inline-block bg-gradient-to-r from-red-600 to-yellow-500 text-white px-4 py-2 rounded-full mb-6">
                        <span className="flex items-center gap-2 text-xs sm:text-sm font-semibold">
                            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            Premium Automotive Care
                        </span>
                    </div> */}


                    {/* Main Heading */}
                    <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-bold mb-4 sm:mb-6 leading-tight sm:leading-tight">
                        Bespoke Luxury Car
                        <span className="block text-red-500 mt-1 sm:mt-2">Restorations & Upgrades</span>
                    </h1>

                    {/* Description */}
                    <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 text-gray-200 leading-relaxed">
                        <span className="block mb-3 font-medium text-white">
                            Specialising In Rolls Royce & Bentley Maintenance.
                        </span>
                        <span className="block mb-3">
                            With over 16 years' experience maintaining India's elite and most challenging classic car
                            restorations, we aim to offer our consumer's a niche experience that's transparent and enjoyable
                            from the regular run of mill. We're a result based business that thrives on achieving happy customers.
                        </span>

                        {/* Highlighted Car Names */}
                        <span className="block mt-4 text-sm sm:text-base">
                            <span className="inline-block bg-gradient-to-r from-red-600/20 to-red-600/10 px-3 py-1.5 rounded-md mr-2 mb-2 border border-red-500/30 font-medium">
                                Nissan 300zx Fairlady 2JZ
                            </span>
                            <span className="inline-block bg-gradient-to-r from-red-600/20 to-red-600/10 px-3 py-1.5 rounded-md mr-2 mb-2 border border-red-500/30 font-medium">
                                Rolls Royce Phantom N78
                            </span>
                            <span className="inline-block bg-gradient-to-r from-red-600/20 to-red-600/10 px-3 py-1.5 rounded-md mb-2 border border-red-500/30 font-medium">
                                Mercedes E W124
                            </span>
                        </span>
                    </p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-10">
                        <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm  p-3">
                            <div className="bg-red-500/20 p-2 rounded-lg shrink-0">
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                                </svg>
                            </div>
                            <span className="text-sm font-medium">Restored Cars</span>
                        </div>

                        <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm  p-3">
                            <div className="bg-red-500/20 p-2 rounded-lg shrink-0">
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <span className="text-sm font-medium">Tuning Cars</span>
                        </div>

                        <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm  p-3">
                            <div className="bg-red-500/20 p-2 rounded-lg shrink-0">
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                </svg>
                            </div>
                            <span className="text-sm font-medium">Paint Jobs</span>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-6 sm:mb-8">
                        <button className="group bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 sm:px-5 sm:py-2.5 font-semibold text-sm sm:text-base hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-1.5">
                            <span>Book Service Appointment</span>
                            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </button>

                        {/* <button className="group bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 sm:px-5 sm:py-2.5 font-semibold text-sm sm:text-base hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-1.5">
                            <span>Explore Services</span>
                            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button> */}
                    </div>
                    {/* Stats */}
                    {/* Stats */}
                    <div className="pt-4 sm:pt-6 border-t border-white/20 mb-5">
                        <p className="text-xs sm:text-sm text-gray-300">
                            Trusted by <span className="font-bold text-white">65+ Families</span> In India, United Kingdom & Thailand
                        </p>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="hidden sm:block absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
                <div className="flex flex-col items-center">
                    <span className="text-xs sm:text-sm mb-1 sm:mb-2 text-gray-300">
                        Scroll to explore
                    </span>
                    <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                    </svg>
                </div>
            </div>

        </section>
    );
};

export default Banner;