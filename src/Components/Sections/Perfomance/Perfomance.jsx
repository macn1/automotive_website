import { Wrench, Shield, Gauge, CarFront } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    title: "Drivability",
    desc: "Maintaining an OEM feel for daily use without sacrificing performance.",
    icon: Wrench,
    color: "from-amber-500 to-orange-500",
  },
  {
    title: "Safety First",
    desc: "Reinforced components and fail‑safes for complete peace of mind.",
    icon: Shield,
    color: "from-amber-500 to-yellow-500",
  },
  {
    title: "Intelligent Power",
    desc: "Precision delivery across the full rev range for maximum control.",
    icon: Gauge,
    color: "from-amber-500 to-red-500",
  },
  {
    title: "Track Reliability",
    desc: "Tested under extreme thermal stress to ensure durability on track days.",
    icon: CarFront,
    color: "from-amber-500 to-purple-500",
  },
];

// Animation variants
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

const itemVariants = {
  hidden: { opacity: 0, x: -30, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      duration: 0.6,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function PerformanceEngineeringSection() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.1, 0.95]);
  const imageRotate = useTransform(scrollYProgress, [0, 0.5, 1], [0, 2, 0]);
  const imageX = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50]);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-neutral-950 text-white py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          <motion.div variants={textVariants} className="relative">
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="absolute -top-4 left-0 h-1 bg-gradient-to-r from-amber-500 to-transparent"
            />
            
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Performance Is Not Just Power.{" "}
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600"
              >
                It's Engineering.
              </motion.span>
            </h2>
          </motion.div>

          <motion.p
            variants={textVariants}
            className="text-neutral-400 mt-4 max-w-xl leading-relaxed"
          >
            Our philosophy centers on mechanical balance—ensuring every
            modification enhances the synergy between airflow, fuel and torque.
            We don't just chase numbers. We build machines that perform
            predictably at the limit.
          </motion.p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-5 mt-10"
          >
            {features.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  whileHover="hover"
                  className="group relative"
                >
                  {/* Background glow effect */}
                  <motion.div
                    className={`absolute -inset-0.5 bg-gradient-to-r ${item.color} rounded-xl opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-50`}
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  />
                  
                  <motion.div
                    className="relative bg-neutral-900 border border-amber-500/20 rounded-xl p-5 overflow-hidden"
                    whileHover={{
                      y: -3,
                      scale: 1.02,
                      transition: { type: "spring", stiffness: 400 },
                    }}
                  >
                    {/* Icon container with animations */}
                    <motion.div
                      className="relative w-10 h-10 flex items-center justify-center bg-amber-500/10 rounded-lg mb-3 overflow-hidden"
                      whileHover={{ scale: 1.1 }}
                    >
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-30`}
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                      <Icon className="w-5 h-5 text-amber-400 relative z-10" />
                    </motion.div>

                    <motion.h3
                      className="font-semibold mb-1"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {item.title}
                    </motion.h3>
                    
                    <p className="text-sm text-neutral-400">{item.desc}</p>

                    {/* Animated corner accent */}
                    <motion.div
                      className="absolute bottom-0 right-0 w-8 h-8"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <div className={`absolute bottom-0 right-0 w-4 h-4 bg-gradient-to-tl ${item.color} rounded-tl-lg`} />
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Right Image with Advanced Animations */}
        <motion.div
          ref={imageRef}
          style={{
            scale: imageScale,
            rotate: imageRotate,
            x: imageX,
          }}
          className="relative"
        >
          {/* Image container with multiple layers */}
          <div className="relative overflow-hidden rounded-2xl">
            {/* Animated gradient overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 via-transparent to-amber-500/20 z-10"
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

            {/* Main image */}
            <motion.img
              src="/assets/perfomance/img2.jpg"
              alt="Performance engine work"
              className="w-full h-[460px] object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
            />

            {/* Animated border effect */}
            <motion.div
              className="absolute inset-0 border-2 border-amber-500/0 rounded-2xl"
              whileHover={{ borderColor: "rgba(245, 158, 11, 0.5)" }}
              transition={{ duration: 0.3 }}
            />

            {/* Top-right corner accent */}
            <motion.div
              className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-amber-500 z-20"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            />

            {/* Bottom-left corner accent */}
            <motion.div
              className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-amber-500 z-20"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
            />
          </div>

          {/* Floating stats cards */}
          
        </motion.div>
      </div>
    </section>
  );
}