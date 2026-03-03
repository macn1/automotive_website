import React from 'react'

function Nissan() {
    return (
        <>
            <section className="relative z-20 bg-white py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl md:text-4xl font-bold text-black mb-6">
                        Nissan 300ZX Fairlady – From Ruins to Revival
                    </h2>

                    <p className="text-gray-700 max-w-3xl leading-relaxed mb-6">
                        Our current highlight project is a Nissan 300ZX Fairlady that arrived at our workshop in extremely poor condition. What once seemed beyond repair is now undergoing a complete transformation.
                    </p>

                    <p className="text-gray-700 max-w-3xl leading-relaxed mb-6">
                        Through months of meticulous restoration work, careful sourcing of authentic parts, and dedicated craftsmanship, this iconic machine is being brought back to its original factory glory.
                    </p>

                    <p className="text-gray-700 max-w-3xl leading-relaxed">
                        This project reflects our unwavering commitment to precision, patience, and passion for automotive excellence.
                    </p>
                    <div className="flex flex-wrap gap-4 py-4">
                        <button className="bg-red-600 text-white px-6 py-3 font-semibold hover:bg-red-700 transition">
                            Book a Consultation
                        </button>


                    </div>
                </div >
            </section >

            <section className="min-h-[60vh] md:h-screen w-full relative">
                <img
                    src="/assets/about/img3.jpg"
                    alt="Automobile Vision"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/60" />
            </section>
        </>
    )
}

export default Nissan
