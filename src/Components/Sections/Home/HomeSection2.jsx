import { LuArrowUpRight } from "react-icons/lu";

export default function AboutSection() {
  return (
    <section className="bg-[#1A1A1A] text-white py-10 md:py-20 px-6 md:px-20">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Left Column */}
        <div className="md:space-y-10">
          <p className="text-gray-400 text-2xl  font-[Open Sans]">©2016–2024</p>
          <h2 className="text-2xl md:text-4xl font-medium font-sans leading-snug mt-6">
            Founded In England.
            <br />
            Operating globally, UK, India & Thailand
          </h2>
        </div>

        {/* Right Column - pushed down to align with heading */}
   <div className="md:mt-[72px] space-y-6 text-gray-300 max-w-xl text-sm md:text-xl font-sans">
  <p>
    We have workshops in India, UK and Thailand. Operating a niche, purposeful list of
    services restoring and repairing high end luxury cars. We started operating out of a
    back end garage in the UK and slowly over the years have grown into a 50+
    employee company across Asia and the UK.
  </p>

  <p>
    We're proud to work with amazingly renowned customers and vendors alike. Our 
    ambition is to keep pushing and see where that takes us. In an ever changing world, 
    transparency and passion is needed and will continue at AJPG.
  </p>
  
  <p className="pt-2">
    Yours's truly,<br />
    Alex Johnson<br />
    Founder & CEO
  </p>
{/* 
  <button className="inline-flex items-center gap-2 bg-[#C9A24D] text-black px-5 py-2 text-sm font-medium hover:bg-[#b8933f] transition">
    Learn More
    <LuArrowUpRight className="text-lg" />
  </button> */}
</div>

      </div>
    </section>
  )
}