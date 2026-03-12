import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative h-[420px] w-full overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.img
        src="/assets/blog/img1.jpg"
        alt="Sports car"
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      {/* Dark Overlay with Fade In */}
      <motion.div 
        className="absolute inset-0 bg-black/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
        <div className="max-w-3xl">
          {/* Heading with Stagger Animation */}
          <motion.h1 
            className="text-3xl font-bold text-white md:text-5xl"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.3
                }
              }
            }}
          >
            {"Latest Automotive News & Insights".split(" ").map((word, index) => (
              <motion.span
                key={index}
                className="inline-block mr-2"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      type: "spring",
                      damping: 12,
                      stiffness: 100
                    }
                  }
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Buttons with Hover Animations */}
          <motion.div 
            className="mt-6 flex justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <motion.button
              className="rounded-xl bg-yellow-500 px-6 py-3 font-semibold text-black transition hover:bg-yellow-400"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(234, 179, 8, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              Explore Articles
            </motion.button>

            <motion.button
              className="rounded-xl border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-black"
              whileHover={{ 
                scale: 1.05,
                borderColor: "#ffffff",
                boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.3 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Optional: Animated Speed Lines Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.5, 0] }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-y-12" />
      </motion.div>
    </section>
  );
}