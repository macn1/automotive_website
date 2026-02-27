import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="w-full">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-white text-center  md:mt-20 mt-10 md:py-6 py-2 px-6"
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-2xl md:text-5xl font-semibold text-gray-900 leading-tight"
        >
          Built To Last.
          <br />
          Crafted To Be Remembered.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-6 max-w-3xl mx-auto text-gray-600 text-sm md:text-base"
        >
          AJP Group Automotive — Precision Restoration, Bespoke Builds, And
          Performance Engineering For Collectors Who Expect Excellence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-8 flex justify-center gap-4"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(220, 38, 38, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-600 text-white md:px-6 px-2 md:py-3 py-1 text-sm font-medium rounded hover:bg-red-700 transition-all"
          >
            Book a Consultation
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: "#f3f4f6",
              borderColor: "#9ca3af"
            }}
            whileTap={{ scale: 0.95 }}
            className="border border-gray-300 text-gray-900 px-6 py-3 text-sm font-medium rounded transition-all"
          >
            View Our Work
          </motion.button>
        </motion.div>
      </motion.div>

      <div className="w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="relative overflow-hidden shadow-2xl"
        >
          <img
            src="/assets/about/about2.jpg"
            alt="Luxury Car"
            className="w-full h-[220px] md:h-[450px] lg:h-[500px] object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;