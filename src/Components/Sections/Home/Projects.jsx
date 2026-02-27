import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Lamborghini Gallardo SE",
    description:
      "Lamborghini Gallardo SE, a Limited Edition of 250 Units Introduced in 2004. This 5.0L V10 Engine Produces 520 BHP with a 6-Speed E-Gear Automated Manual Gearbox.",
    image: "/assets/projects/lambo.jpg",
  },
  {
    title: "Ferrari F430 Scuderia",
    description:
      "The Ferrari F430 Scuderia, launched in 2007, is a track-focused version of the F430. It features a 4.3L V8 producing 503 HP and a weight reduction of 100 kg.",
    image: "/assets/projects/ferr.jpg",
  },
  {
    title: "Koenigsegg Agera RS",
    description:
      "The Koenigsegg Agera RS, introduced in 2015, holds the title of the world's fastest production car with a 5.0L Twin-Turbo V8 generating 1341 HP.",
    image: "/assets/projects/koi.jpg",
  },
  {
    title: "Bugatti Chiron",
    description:
      "Launched in 2016, the Bugatti Chiron boasts a massive 8.0L Quad-Turbo W16 engine delivering 1479 HP and a top speed of 261 mph.",
    image: "/assets/projects/bugatti.jpg",
  },
]

export default function OurProjects() {
  return (
    <>
    <section className="relative z-20 bg-[#1A1A1A] text-white py-20">
      <div className="mx-auto px-6 max-w-screen-xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="md:text-4xl text-2xl font-semibold">
            Our Projects
          </h2>
          <button className="flex items-center gap-2 bg-[#C9A24D] text-black px-4 py-2 text-sm font-medium hover:bg-[#b8913f] transition">
            See All <ArrowUpRight size={16} />
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((item, index) => (
            <div
              key={index}
              className="relative group overflow-hidden bg-black"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[320px] object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

              <div className="absolute bottom-0 p-6">
                <h3 className="text-lg font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-300 mb-4">
                  {item.description}
                </p>
                <button className="inline-flex items-center gap-2 bg-[#ba1e1e] text-black px-4 py-2 text-sm font-mediumtransition">
                  Read More <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>

  )
}
