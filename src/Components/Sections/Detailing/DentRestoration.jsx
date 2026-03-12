import React from "react";
import { motion } from "framer-motion";

export default function DentRestorationSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const featureVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.5 + i * 0.1,
        type: "spring",
        stiffness: 100,
      },
    }),
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0, x: 50 },
    visible: {
      scale: 1,
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.6,
      },
    },
  };

  const barVariants = {
    hidden: { width: 0 },
    visible: (width) => ({
      width: width,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.8,
      },
    }),
  };

  return (
    <section className="w-full bg-white py-10 md:p-10 flex justify-center relative overflow-hidden">

      {/* Background animation blobs */}
      <motion.div
        className="absolute top-40 right-20 w-72 h-72 bg-yellow-400/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.03, 0.08, 0.03] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="w-full max-w-[1400px] relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="relative h-auto md:h-[360px] overflow-hidden rounded-sm"
        >
          {/* Background image */}
          <motion.img
            src="/assets/detail/img2.jpg"
            alt="car"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />

          {/* Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          />

          {/* Content */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 h-full px-6 md:px-16 py-10 md:py-0 items-center gap-10 md:gap-0">

            {/* LEFT SIDE */}
            <motion.div
              variants={containerVariants}
              className="text-white max-w-lg text-center md:text-left"
            >
              <motion.h2
                variants={itemVariants}
                className="text-2xl md:text-3xl font-semibold leading-snug relative inline-block"
              >
                Engineered Dent Restoration With <br /> Absolute Precision
                <motion.div
                  className="absolute -bottom-2 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 h-0.5 bg-yellow-400"
                  initial={{ width: 0 }}
                  whileInView={{ width: "30%" }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-sm text-gray-300 mt-4 leading-relaxed"
              >
                Our Denting Specialists Bring Your Vehicle Back To Its Original
                Form Using Precision Tools, Heat Control Methods, And Structural
                Calibration — Ensuring Flawless Body Lines And Perfect Symmetry.
              </motion.p>

              {/* Features */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mt-6 text-sm"
              >
                {[
                  "Computerized Panel Alignment",
                  "Structural Frame Correction",
                  "Seamless Surface Refinishing",
                  "Rapid Turnaround Time",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={featureVariants}
                    className="flex items-center gap-2 justify-center md:justify-start"
                  >
                    <span className="w-2 h-2 bg-yellow-400"></span>
                    <span className="text-gray-200">{item}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 bg-red-600 hover:bg-red-700 text-white text-sm px-6 py-2 rounded"
              >
                Request Dent Inspection
              </motion.button>
            </motion.div>

            {/* RIGHT SIDE CARD */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="flex justify-center md:justify-end"
            >
              <motion.div
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 w-full max-w-[340px] md:w-[420px] text-white shadow-2xl"
              >
                <h3 className="text-center text-sm text-gray-200 mb-6">
                  Durability Comparison
                </h3>

                {/* BAR 1 */}
                <div className="mb-6">
                  <div className="flex justify-between text-xs mb-2 text-gray-300">
                    <span>Traditional Wax</span>
                    <span>2-3 Months</span>
                  </div>

                  <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                    <motion.div
                      className="bg-yellow-400 h-full"
                      custom="45%"
                      variants={barVariants}
                      initial="hidden"
                      whileInView="visible"
                    />
                  </div>
                </div>

                {/* BAR 2 */}
                <div>
                  <div className="flex justify-between text-xs mb-2 text-gray-300">
                    <span>Elite Ceramic Coating</span>
                    <span>12+ Months</span>
                  </div>

                  <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                    <motion.div
                      className="bg-yellow-400 h-full"
                      custom="90%"
                      variants={barVariants}
                      initial="hidden"
                      whileInView="visible"
                    />
                  </div>
                </div>

                <p className="text-[11px] text-gray-300 text-center mt-5 leading-relaxed">
                  Ceramic Coating Lasts Up To 6x Longer Than Traditional Car Wax
                  And Provides Superior Resistance.
                </p>
              </motion.div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}