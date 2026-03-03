import { motion } from "framer-motion";

const ProactiveCareSection = () => {
  const items = [
    "Engine Oil & Filter",
    "Air & Cabin Filters",
    "Break Fluid",
    "Transmission Fluid",
    "Safety Infection",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        type: "spring",
        stiffness: 200,
      },
    }),
    hover: {
      scale: 1.05,
      backgroundColor: "rgba(234, 179, 8, 0.15)",
      borderColor: "#fbbf24",
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const resultVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 1,
        duration: 0.6,
        type: "spring",
        stiffness: 150,
      },
    },
  };

  return (
    <section className="w-full bg-gradient-to-b from-[#1a1a1a] to-[#111111] py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-white mb-6"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          Proactive Care. Zero Compromise.
        </motion.h2>

        <motion.p
          className="text-gray-400 max-w-4xl mx-auto text-sm md:text-base leading-relaxed mb-12"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Regular Maintenance Is The Foundation Of Vehicle Longevity And
          Performance. At AJH Automotive India & Thailand, We Follow
          Manufacturer-Specific Service Intervals Using OEM-Grade Tools.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {items.map((item, index) => (
            <motion.button
              key={index}
              className="px-6 py-3 border border-yellow-500/40 text-white text-sm font-medium relative overflow-hidden"
              variants={buttonVariants}
              custom={index}
              whileHover="hover"
              whileTap="tap"
            >
              <motion.span
                className="absolute inset-0 bg-[#1A1A1A]"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.4 }}
              />
              {item}
            </motion.button>
          ))}
        </motion.div>

        <motion.p
          className="text-yellow-400 text-sm font-medium"
          variants={resultVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          animate={{
            scale: [1, 1.02, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          Result: Lower Lifetime Ownership Cost. Higher Reliability.
        </motion.p>
      </div>
    </section>
  );
};

export default ProactiveCareSection;