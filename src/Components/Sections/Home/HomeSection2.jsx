import { LuArrowUpRight } from "react-icons/lu";

export default function AboutSection() {
  return (
    <section className="bg-[#1A1A1A] text-white py-10 md:py-20 px-6 md:px-20">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Left Column */}
        <div className="md:space-y-10">
          <p className="text-gray-400 text-2xl  font-[Open Sans]">©2016–2024</p>
          <h2 className="text-2xl md:text-4xl font-medium font-sans leading-snug mt-6">
            Founded in Los Angeles.
            <br />
            Operating globally.
          </h2>
        </div>

        {/* Right Column - pushed down to align with heading */}
        <div className="md:mt-[72px]  space-y-6 text-gray-300 max-w-xl text-sm md:text-xl font-sans">
          <p>
            Idol is an independent brand & product agency that accelerates
            impact for the world's most interesting companies.
          </p>

          <p>
            Since 2016, we have provided strategy, design & development to
            innovative organizations around the world — from major consumer
            brands to early-stage startups. Through our collaboration and
            design-driven leadership we've helped launch and grow digital-first
            brands, products and businesses.
          </p>

          <button className="inline-flex items-center gap-2 bg-[#C9A24D] text-black px-5 py-2 text-sm font-medium hover:bg-[#b8933f] transition">
            Learn More
                       <LuArrowUpRight className="text-lg" />

          </button>
        </div>

      </div>
    </section>
  )
}