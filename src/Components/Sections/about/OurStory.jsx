import { motion } from "framer-motion"

const OurStorySection = () => {
  return (
    <section className="bg-[#0f0f0f] text-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our Story
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A Lifelong Passion That Evolved Into A Vision For Automotive Excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex justify-center md:justify-start overflow-hidden"
          >
            <img
              src="/assets/about/main.jpg"
              alt="Our Story"
              className="w-full max-w-md h-[350px] object-cover "
              loading="lazy"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          >
            <h3 className="text-2xl font-semibold mb-4">
              Where It All Began
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Automobiles and steam locomotives have been my passion for as long
              as I can remember. From my first push bike at five years old to my
              first powered rides, a love for mechanical engineering was sparked.
              <br /><br />
              That fascination and love remain just as strong today.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default OurStorySection