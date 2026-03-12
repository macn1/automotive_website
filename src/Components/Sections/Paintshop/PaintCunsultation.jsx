import { Thermometer, Filter, Flame, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function PaintConsultationSection() {
  const features = [
    { icon: Thermometer, label: "Climate Controlled" },
    { icon: Filter, label: "Multi-Stage Filtration" },
    { icon: Flame, label: "Rapid Heat Curing" },
    { icon: Sparkles, label: "Zero Dust Zone" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.8,
      },
    },
  };

  const featureItemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10,
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#b91c1c",
      boxShadow: "0 10px 25px -5px rgba(220, 38, 38, 0.5)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const imageVariants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      className="relative w-full min-h-[420px] md:h-[420px] flex items-center overflow-hidden py-12 md:py-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Background Image */}
      <motion.img
        src="/assets/about/carr2.jpg"
        alt="car"
        className="absolute inset-0 w-full h-full object-cover"
        variants={imageVariants}
      />

      {/* Gradient Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"
        variants={overlayVariants}
      />

      {/* Content */}
      <motion.div
        className="relative max-w-xl px-6 md:px-0 md:ml-16 text-white text-center md:text-left"
        variants={containerVariants}
      >
        <motion.h2
          className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug mb-4"
          variants={textVariants}
        >
          This Ensures Every Project Is Executed <br />
          With Precision And Delivered On Time.
        </motion.h2>

        <motion.p
          className="text-gray-300 text-sm mb-6"
          variants={textVariants}
        >
          Our temperature-controlled, zero-dust environment ensures even curing
          and a factory-quality finish every time. We've invested in advanced
          ventilation to ensure a flawless mirror-like shine.
        </motion.p>

        {/* Features */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 mb-6 text-sm"
          variants={containerVariants}
        >
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className="flex items-center justify-center md:justify-start gap-2 group"
                variants={featureItemVariants}
                whileHover="hover"
              >
                <motion.div variants={iconVariants} whileHover="hover">
                  <Icon className="text-yellow-400 w-4 h-4" />
                </motion.div>

                <motion.span
                  whileHover={{ x: 3, color: "#eab308" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item.label}
                </motion.span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Button */}
        <motion.button
          className="bg-red-600 px-5 py-2 text-sm rounded relative overflow-hidden"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <span className="relative z-10">Request Paint Consultation</span>

          {/* Shine animation */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{
              x: ["-100%", "200%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "linear",
            }}
          />
        </motion.button>
      </motion.div>

      {/* Decorative line */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 via-red-500 to-transparent mb-10"
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
      />
    </motion.section>
  );
}