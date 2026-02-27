const AutomotiveShowcase = () => {
    return (
        <section className="bg-black py-20">
            <div className="max-w-7xl mx-auto px-4 space-y-6">

                {/* Top Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Card 1 */}
                    <div className="relative h-[300px]  overflow-hidden">
                        <img
                            src="/assets/about/carr1.jpg"
                            alt="Automotive Excellence"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/60" />
                        <div className="absolute top-6 left-6 text-white">
                            <h3 className="text-xl font-semibold">
                                The Future Of Automotive Excellence
                            </h3>
                            <p className="text-sm text-gray-300 mt-2 max-w-sm">
                                To redefine automotive care through technology and craftsmanship.
                            </p>
                        </div>
                    </div>


                    <div className="relative h-[300px]  overflow-hidden">
                        <img
                            src="/assets/about/carr3.jpg"
                            alt="Service Facility"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40" />
                        <div className="absolute bottom-6 left-6 text-white max-w-sm">
                            <h3 className="text-xl font-semibold">
                                Where Expertise Meets Reliability
                            </h3>
                            <p className="text-sm text-gray-300 mt-2">
                                A facility built to ensure transparency, safety, and long-term performance.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="relative h-[420px] overflow-hidden">
                    <img
                        src="/assets/about/carr2.jpg"
                        alt="Luxury Car"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                    <div className="absolute bottom-8 left-8 text-white max-w-xl">
                        <h3 className="text-2xl md:text-3xl font-semibold">
                            Crafting The Next Generation Of Automotive Care
                        </h3>
                        <p className="text-gray-300 mt-3 text-sm md:text-base">
                            Provide innovative and transparent solutions that exceed customer expectations.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AutomotiveShowcase;