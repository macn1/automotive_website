const VisionSection = () => {
  return (
    <>
      {/* Vision Content */}
     <section className="relative z-20 bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          
          <h2 className="text-2xl md:text-5xl font-bold text-black mb-6">
            Our Vision
          </h2>

          <h3 className="text-2xl md:text-3xl font-semibold text-black max-w-3xl leading-snug mb-6">
            To Preserve The Poetry Of The Automobile While Advancing Its Performance.
          </h3>

          <p className="text-gray-700 max-w-3xl leading-relaxed mb-10">
            We Believe Cars Are Living Legacies To Be Preserved, Evolved And
            Passed On. Our Mission Is To Deliver Enduring Craftsmanship That
            Respects History Without Compromising Modern Performance And Safety.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-red-600 text-white px-6 py-3 font-semibold hover:bg-red-700 transition">
              Book a Consultation
            </button>

            <button className="border border-black px-6 py-3 font-semibold hover:bg-black hover:text-white transition">
              View Our Work
            </button>
          </div>

        </div>
      </section>

     
     <section className="min-h-[60vh] md:h-screen w-full relative">
        <img
          src="/assets/bg4.jpg"   
          alt="Automobile Vision"
          className="absolute inset-0 w-full h-full object-cover"
        />

    
        <div className="absolute inset-0 bg-black/20" />
      </section>
    </>
  )
}

export default VisionSection