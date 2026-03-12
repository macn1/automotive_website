import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Droplets,
  Sun,
  Sparkles,
  Check,
  Wrench,
  Zap,
  Award,
  Gauge
} from "lucide-react";

export default function ProductsAndDentingSection() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    }
  };

  const imageVariants = {
    hidden: { scale: 1.1, opacity: 0, x: -50 },
    visible: {
      scale: 1,
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  const bulletVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: { delay: 0.4 + i * 0.1 }
    })
  };

  const benefitVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: { delay: 0.6 + i * 0.1 }
    }),
    hover: { scale: 1.05, y: -5 }
  };

  const bannerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.4 }
    }
  };

  return (
    <section className="w-full bg-[#0f0f0f] py-16 relative overflow-hidden">

      {/* background glow */}
      <motion.div
        className="absolute top-40 right-20 w-80 h-80 bg-yellow-400/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-40 left-20 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.03, 0.08, 0.03] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-[1200px] mx-auto px-6 space-y-14 relative z-10">

        {/* TOP GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >

          {/* IMAGE */}
          <motion.div
            variants={imageVariants}
            whileHover={{ scale: 1.02 }}
            className="w-full h-[320px] overflow-hidden rounded-lg relative"
          >
            <motion.img
              src="/assets/detail/img7.jpg"
              alt="car polishing"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            />
          </motion.div>

          {/* CONTENT */}
          <motion.div variants={containerVariants} className="text-white">

            <motion.h2 variants={itemVariants} className="text-2xl font-semibold mb-3">
              Professional-Grade Products
            </motion.h2>

            <motion.p variants={itemVariants} className="text-gray-400 text-sm mb-6">
              We Invest In The Best Technology And Chemicals Globally To Ensure
              Your Vehicle Receives The Safest And Highest Quality Treatment.
            </motion.p>

            {/* BULLETS */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-sm text-gray-300 mb-6"
            >
              {[
                "Premium Cutting Compounds",
                "Advanced Polishing Systems",
                "High-Performance Coatings",
                "Professional Machine Tools",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={bulletVariants}
                  className="flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                  {item}
                </motion.div>
              ))}
            </motion.div>

            {/* BENEFITS */}
            <motion.div variants={itemVariants}>

              <h3 className="text-sm font-semibold text-gray-200 mb-4">
                Key Benefits
              </h3>

              <motion.div
                variants={containerVariants}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3"
              >
                {[
                  { icon: ShieldCheck, text: "1 Year Guarantee" },
                  { icon: Droplets, text: "Hydrophobic Effect" },
                  { icon: Sun, text: "UV & Chemical Shield" },
                  { icon: Sparkles, text: "Deep Gloss Finish" },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={i}
                      custom={i}
                      variants={benefitVariants}
                      whileHover="hover"
                      className="flex items-center gap-2 border border-yellow-500/40 px-3 py-2 text-sm rounded-lg"
                    >
                      <Icon className="w-4 h-4 text-yellow-400" />
                      <span>{item.text}</span>
                    </motion.div>
                  );
                })}
              </motion.div>

            </motion.div>

            {/* SMALL STATS */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mt-6">
              {[
                { icon: Award, value: "ISO", label: "Certified" },
                { icon: Gauge, value: "5 Star", label: "Rating" },
                { icon: Zap, value: "24/7", label: "Support" },
              ].map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={i} className="flex items-center gap-2 text-xs">
                    <Icon className="w-4 h-4 text-yellow-400" />
                    <div>
                      <span className="text-white font-semibold">{stat.value}</span>
                      <span className="text-gray-500 ml-1">{stat.label}</span>
                    </div>
                  </div>
                );
              })}
            </motion.div>

          </motion.div>
        </motion.div>


        {/* BANNER */}
        <motion.div
          variants={bannerVariants}
          initial="hidden"
          whileInView="visible"
          className="relative h-auto md:h-[360px] overflow-hidden rounded-lg"
        >

          <motion.img
            src="/assets/detail/img5.jpg"
            alt="car"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/20" />

          <div className="relative z-10 h-full flex items-center px-6 md:px-10 py-10 md:py-0">

            <motion.div variants={containerVariants} className="text-white max-w-lg">

              <motion.h2 variants={itemVariants} className="text-2xl font-semibold mb-3">
                Precision Denting. Factory-Level Finish.
              </motion.h2>

              <motion.p variants={itemVariants} className="text-gray-300 text-sm mb-6">
                From Minor Door Dings To Major Accident Repairs, Our Expert
                Denting Process Restores Your Vehicle's Original Structure.
              </motion.p>

              <motion.div
                variants={containerVariants}
                className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-sm text-gray-200 mb-6"
              >
                {[
                  { icon: Check, text: "Paint-Safe Dent Removal" },
                  { icon: Wrench, text: "Advanced Body Alignment" },
                  { icon: Check, text: "Zero Surface Distortion" },
                  { icon: Sparkles, text: "Factory Finish Matching" },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={i}
                      variants={itemVariants}
                      className="flex items-center gap-2"
                    >
                      <Icon className="w-4 h-4 text-yellow-400" />
                      {item.text}
                    </motion.div>
                  );
                })}
              </motion.div>

              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-red-600 hover:bg-red-700 text-white text-sm px-5 py-2 rounded"
              >
                Request Dent Inspection
              </motion.button>

            </motion.div>
          </div>

          {/* floating indicators hidden on mobile */}
          <div className="hidden md:flex absolute top-1/2 right-10 -translate-y-1/2 flex-col gap-3">
            {["Laser Scan", "3D Align", "Paint Match"].map((t, i) => (
              <div
                key={i}
                className="bg-black/60 border border-yellow-400/30 px-3 py-1 rounded-full text-xs text-yellow-400"
              >
                {t}
              </div>
            ))}
          </div>

        </motion.div>


        {/* STATS BAR */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-yellow-400/20"
        >
          {[
            { label: "Dents Repaired", value: "15,000+" },
            { label: "Paint Match Rate", value: "99.9%" },
            { label: "Avg. Repair Time", value: "2.5 hrs" },
            { label: "Warranty", value: "Lifetime" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-yellow-400 font-bold text-xl">{stat.value}</div>
              <div className="text-gray-500 text-xs">{stat.label}</div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}