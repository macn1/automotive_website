import { Cpu, Gauge, Activity, Wrench } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function TrackReadySection() {
  const sectionRef = useRef(null);

  const features = [
    {
      icon: Cpu,
      text: "Custom ECU Calibration",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: Gauge,
      text: "Boost & Fuel Optimization",
      color: "from-amber-500 to-yellow-500",
    },
    {
      icon: Activity,
      text: "Torque Curve Refinement",
      color: "from-amber-500 to-red-500",
    },
    {
      icon: Wrench,
      text: "Performance Validation Testing",
      color: "from-amber-500 to-purple-500",
    },
  ];

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1.2, 1.1]);
  const imageParallax = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.3, 0.6], [0.7, 0.8, 0.7]);

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
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -30, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    }),
    hover: {
      x: 10,
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 0.8,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 30px -10px rgba(220, 38, 38, 0.5)",
      transition: {
        type: "spring",
        stiffness: 400,
      },
    },
    tap: { scale: 0.95 },
  };

  return (
    <section ref={sectionRef} className="w-full bg-[#0f0f0f] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative overflow-hidden rounded-lg"
        >

          {/* Background Image */}
          <motion.div
            style={{
              scale: imageScale,
              y: imageParallax,
            }}
            className="relative"
          >
            <motion.img
              src="/assets/perfomance/img6.jpg"
              alt="Performance Car"
              className="w-full h-[420px] object-cover"
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />

            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-amber-500/10"
              animate={{ x: ["-100%", "100%"] }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </motion.div>

          {/* Overlay */}
          <motion.div
            style={{ opacity: overlayOpacity }}
            className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"
          />

          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="absolute inset-0 flex items-center"
          >
            <div className="max-w-xl px-10 text-white">

              <motion.h2
                variants={textVariants}
                className="text-3xl md:text-4xl font-bold mb-4 relative"
              >
                Track-Ready Power.
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-red-500 block">
                  Street-Ready Control.
                </span>

                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-amber-500 to-red-500"
                />
              </motion.h2>

              <motion.p
                variants={textVariants}
                className="text-gray-300 text-sm leading-relaxed mb-6"
              >
                From mild performance upgrades to full engine builds, our tuning
                process enhances your vehicle's responsiveness, acceleration,
                and overall driving dynamics while maintaining daily drivability.
              </motion.p>

              {/* Features */}
              <motion.div
                variants={containerVariants}
                className="grid grid-cols-2 gap-3 mb-6"
              >
                {features.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={index}
                      variants={featureVariants}
                      custom={index}
                      whileHover="hover"
                      className="flex items-center gap-2 text-sm text-gray-200"
                    >
                      <Icon className="w-4 h-4 text-amber-400" />
                      {item.text}
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Button */}
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="bg-red-600 hover:bg-red-700 px-8 py-4 text-sm font-semibold rounded-lg"
              >
                Book Your Appointment
              </motion.button>

            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}