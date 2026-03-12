import React from "react";
import { motion } from "framer-motion";

export default function AjhAutomotiveSection() {

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardHoverEffect = {
    rest: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const cards = [
    {
      title: "Global Parts Sourcing",
      image: "/assets/restoration/img1.jpg",
      icon: "🌍",
    },
    {
      title: "Access To Original Data & Specifications",
      image: "/assets/restoration/img2.jpg",
      icon: "📊",
    },
    {
      title: "Advanced Bodyshop Equipment",
      image: "/assets/restoration/img3.jpg",
      icon: "⚙️",
    },
    {
      title: "Skilled Restoration Technicians",
      image: "/assets/restoration/img4.jpg",
      icon: "🔧",
    },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* ===== SECOND SECTION ===== */}

      <motion.section
        className="relative py-20 px-4 md:px-16 bg-[#1A1A1A] text-white overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-center text-xl md:text-3xl font-semibold mb-14 max-w-4xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Our Primary Goal Is Simple — Return Every Car To Its Original
            Factory Condition While Maintaining Authenticity And Integrity.
          </motion.h2>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
          >
            {cards.map((item, index) => (
              <motion.div
                key={index}
                className="relative group overflow-hidden rounded-2xl cursor-pointer"
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.95 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.6,
                      delay: index * 0.1,
                    },
                  },
                }}
                whileHover="hover"
                initial="rest"
                animate="rest"
              >
                <motion.div
                  className="relative overflow-hidden w-full h-[220px] md:h-[280px]"
                  variants={cardHoverEffect}
                >
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full max-w-full h-full object-cover"
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 1.2 }}
                    viewport={{ once: true }}
                  />

                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </motion.div>

                <motion.div
                  className="absolute bottom-4 left-4 right-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-500 text-xl">
                      {item.icon}
                    </span>
                    <h3 className="text-lg font-semibold">
                      {item.title}
                    </h3>
                  </div>

                  <motion.div
                    className="h-[2px] bg-yellow-500 mt-2"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>

                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.8 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* background glow */}

        <motion.div
          className="absolute left-0 w-48 md:w-96 h-48 md:h-96 bg-yellow-500/5 rounded-full blur-3xl -z-10"
          animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </motion.section>

      {/* ===== THIRD SECTION ===== */}

      <motion.section
        className="relative py-20 px-4 md:px-16 bg-[#1A1A1A] text-white overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto space-y-16">
          {/* top image */}

          <motion.div
            className="relative overflow-hidden group"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.9 },
              },
            }}
          >
            <div className="relative overflow-hidden rounded-lg">
              <motion.img
                src="/assets/about/carr2.jpg"
                alt="Precision Execution"
                className="w-full h-[300px] md:h-[450px] object-cover"
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              />

              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80"
                initial={{ x: "-100%" }}
                whileInView={{ x: 0 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
              />

              <div className="absolute left-6 bottom-6 max-w-xl">
                <h3 className="text-lg md:text-2xl font-semibold leading-snug">
                  This Ensures Every Project Is Executed With Precision And
                  Delivered On Time.
                </h3>

                <motion.div
                  className="h-1 bg-yellow-500 mt-4"
                  initial={{ width: 0 }}
                  whileInView={{ width: 100 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                />
              </div>
            </div>
          </motion.div>

          {/* bottom grid */}

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="overflow-hidden rounded-lg">
              <motion.img
                src="/assets/about/carr5.jpg"
                alt="Restoration Process"
                className="w-full h-[300px] md:h-[350px] object-cover"
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              />
            </div>

            <div>
              <h3 className="text-lg md:text-2xl font-semibold leading-relaxed text-gray-200">
                Currently, We Undertake A Limited Number Of Restoration
                Projects Each Year To Maintain The Highest Standards Of
                Individuality And Attention To Detail.
              </h3>

              <div className="flex gap-2 mt-8">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-yellow-500 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <motion.div
          className="absolute right-0 top-0 w-32 md:w-64 h-32 md:h-64 bg-yellow-500/5 rounded-full blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
      </motion.section>
    </div>
  );
}