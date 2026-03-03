import { motion } from "framer-motion";

const BuyWithConfidenceSection = () => {
  const bulletPoints = [
    "Engine Compression Testing",
    "ECU Scan Report",
    "Structural Integrity Check",
    "Accident History Indicators",
    "Suspension & Brake Health",
    "Battery Health Report",
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(234, 179, 8, 0.2)",
      transition: {
        duration: 0.3,
      },
    },
  };

  const eyebrowVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const bulletVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.6 + i * 0.1,
        duration: 0.4,
      },
    }),
    hover: {
      x: 8,
      color: "#ffffff",
      transition: {
        duration: 0.2,
      },
    },
  };

  const dotVariants = {
    animate: (i) => ({
      scale: [1, 1.5, 1],
      opacity: [1, 0.8, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        delay: i * 0.2,
        repeatType: "reverse",
      },
    }),
  };

  return (
    <section className="w-full bg-[#141414] py-24 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={containerVariants}>
          <motion.p
            className="text-yellow-400 text-sm mb-4"
            variants={eyebrowVariants}
          >
            Pre-Purchase & Comprehensive Inspection
          </motion.p>

          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            variants={itemVariants}
          >
            Buy With Confidence.
          </motion.h2>

          <motion.p
            className="text-gray-400 text-sm leading-relaxed max-w-xl mb-8"
            variants={itemVariants}
            transition={{ delay: 0.2 }}
          >
            Whether You're Purchasing A Luxury Import Or Performance Vehicle,
            Our Inspection Services Protect Your Investment. You Receive A Full
            Digital Report With Repair Cost Projections.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 text-sm text-gray-300"
            variants={containerVariants}
          >
            {bulletPoints.map((point, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-3 cursor-default"
                variants={bulletVariants}
                custom={index}
                whileHover="hover"
              >
                <motion.span
                  className="text-yellow-400 mt-1"
                  variants={dotVariants}
                  animate="animate"
                  custom={index}
                >
                  ●
                </motion.span>
                {point}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full"
          variants={imageVariants}
          whileHover="hover"
        >
          <motion.div
            className="relative overflow-hidden rounded-lg"
            animate={{
              boxShadow: [
                "0 0 0 rgba(234, 179, 8, 0)",
                "0 0 30px rgba(234, 179, 8, 0.2)",
                "0 0 0 rgba(234, 179, 8, 0)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <motion.img
              src="assets/mechanical/tesla.jpg"
              alt="Vehicle Inspection"
              className="w-full h-full object-cover"
              whileHover={{
                scale: 1.1,
                transition: { duration: 5 },
              }}
            />
            
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-transparent"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default BuyWithConfidenceSection;