import React from 'react'

function Nissan() {
    return (
        <>
            <section className="relative z-20 bg-white py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl md:text-4xl font-bold text-black mb-6">
                        About Our Paint Shop
                    </h2>

                    <p className="text-gray-700 max-w-3xl leading-relaxed mb-6">
                        At our professional paint facility, we specialise in custom paint jobs tailored to your vision. From complete body resprays to alloy wheel refinishing, every project is handled inside a controlled paint booth environment to ensure dust-free, high-gloss results.                    </p>

                    <div className="flex flex-wrap gap-4 py-4">
                        <button className="bg-red-600 text-white px-6 py-3 font-semibold hover:bg-red-700 transition">
                            View Full Project Case Study                        </button>


                    </div>
                </div >
            </section >

            <section className="min-h-[60vh] md:h-screen w-full relative">
                <img
                    src="/assets/bg5.jpg"
                    alt="Automobile Vision"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/60" />
            </section>
        </>
    )
}

export default Nissan
