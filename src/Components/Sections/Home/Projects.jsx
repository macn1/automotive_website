import { useRef } from "react"
import { ArrowUpRight } from "lucide-react"
import { motion, useInView } from "framer-motion"

const projects = [
  {
    title: "Nissan 300zx Fairlady 2J",
    description:
      "A project spanning 18 months, this vehicle came to us a rust bucket and non-starter, a flooded engine and swap-nostics galore! Our first auto to manual swap.",
    image: "/assets/projects/nis.jpg",
    tag: "Engine Swap",
  },
  {
    title: "Shelby Super Snake 5.0 S550",
    description:
      "Perhaps our most iconic muscle car build, under Shelby America mod shop license this car was originally built with a 750hp engine and converted to a SS Shelby car — official registered as the first car of its kind in India.",
    image: "/assets/projects/shlebi.jpg",
    tag: "Full Build",
  },
  {
    title: "Mercedes E W124",
    description:
      "A running car with an unusual misfire and cranking problem, a car beyond our time — this was a challenging project for parts as this was a CKD unit with many parts swapped out from OG during assembly.",
    image: "/assets/projects/benz.jpg",
    tag: "Restoration",
  },
  {
    title: "Ferrari F430 Spyder F1",
    description:
      "A standout project involving a comprehensive body restoration and a tricky roof sway and alignment, as we roll her back to an OEM supercar.",
    image: "/assets/projects/fer.jpg",
    tag: "Body Restoration",
  },
]

// Stagger container
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

// Each card fades up
const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
}

// Header line reveal
const lineVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
  },
}

const headingVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

const buttonVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function OurProjects() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" })

  return (
    <section ref={sectionRef} className="relative z-20 bg-[#1A1A1A] text-white py-20">
      <div className="mx-auto px-6 max-w-screen-xl">

        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-4">
            <motion.h2
              className="md:text-4xl text-2xl font-semibold"
              variants={headingVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              Highlights
            </motion.h2>

            {/* Animated underline */}
            <motion.div
              className="hidden md:block h-[2px] w-32 bg-[#C9A24D] origin-left"
              variants={lineVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            />
          </div>

          <motion.button
            className="flex items-center gap-2 bg-[#C9A24D] text-black px-4 py-2 text-sm font-medium hover:bg-[#b8913f] transition"
            variants={buttonVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            See All <ArrowUpRight size={16} />
          </motion.button>
        </div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((item, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden bg-black cursor-pointer"
              variants={cardVariants}
              whileHover="hover"
            >
              {/* Image with scale on hover */}
              <motion.img
                src={item.image}
                alt={item.title}
                className="w-full h-[320px] object-cover"
                variants={{
                  hover: {
                    scale: 1.07,
                    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
              />

              {/* Gradient overlay — darkens more on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"
                variants={{
                  hover: {
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.1) 100%)",
                    transition: { duration: 0.4 },
                  },
                }}
              />

              {/* Tag badge top-right */}
              <motion.span
                className="absolute top-4 right-4 text-[11px] font-semibold tracking-widest uppercase bg-[#C9A24D] text-black px-2 py-1"
                initial={{ opacity: 0, y: -8 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
                transition={{ delay: 0.3 + index * 0.15, duration: 0.4 }}
              >
                {item.tag}
              </motion.span>

              {/* Text block — description slides up on hover */}
              <div className="absolute bottom-0 p-6">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>

                <motion.p
                  className="text-sm text-gray-300 mb-4 leading-relaxed"
                  variants={{
                    hover: {
                      y: 0,
                      opacity: 1,
                      transition: { duration: 0.35, ease: "easeOut" },
                    },
                  }}
                  initial={{ y: 10, opacity: 0.6 }}
                >
                  {item.description}
                </motion.p>

                {/* Gold underline that expands on hover */}
                <motion.div
                  className="h-[2px] bg-[#C9A24D] origin-left"
                  initial={{ scaleX: 0 }}
                  variants={{
                    hover: {
                      scaleX: 1,
                      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}