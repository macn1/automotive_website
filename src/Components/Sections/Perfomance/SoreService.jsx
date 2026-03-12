import { Wrench, Car, Cog, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    title: "ECU Remapping",
    desc: "In-house dyno-tested remapping for optimized power, torque & throttle response.",
    icon: Wrench,
    accent: "from-amber-500 to-orange-500",
  },
  {
    title: "Custom Exhaust Systems",
    desc: "Performance exhaust upgrades for better airflow and aggressive sound.",
    icon: Car,
    accent: "from-amber-500 to-yellow-500",
  },
  {
    title: "Engine & Gearbox Builds",
    desc: "Complete powertrain upgrades including turbo kits, transmission tuning & reinforcement.",
    icon: Cog,
    accent: "from-amber-500 to-red-500",
  },
  {
    title: "Performance Paint & Finish",
    desc: "Custom paint jobs, racing stripes, caliper paint and body refinishing.",
    icon: Sparkles,
    accent: "from-amber-500 to-purple-500",
  },
];

// Animation variants
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
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
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

export default function CoreServicesSection() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.1, 1]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.3, 0.8], [0.4, 1, 0.6]);

  return (
    <section ref={sectionRef} className="w-full bg-neutral-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20">
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
          className="text-center mb-14"
        >
          <motion.h2
            variants={textVariants}
            className="text-3xl md:text-4xl font-bold relative inline-block"
          >
            Our Core Services
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-amber-500 to-transparent"
            />
          </motion.h2>
          
          <motion.p
            variants={textVariants}
            className="text-neutral-400 mt-4 max-w-2xl mx-auto"
          >
            We follow a meticulous 6-step workflow to ensure your vehicle leaves
            our workshop in showroom condition.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, i) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover="hover"
                className="group relative"
              >
                {/* Background glow effect */}
                <motion.div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${service.accent} rounded-2xl opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-50`}
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
                  className="relative bg-neutral-900 border border-amber-500/20 rounded-2xl p-6 overflow-hidden"
                  whileHover={{
                    y: -5,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                >
                  {/* Animated corner accent */}
                  <motion.div
                    className="absolute top-0 right-0 w-16 h-16"
                    initial={{ opacity: 0, rotate: 45 }}
                    whileHover={{ opacity: 1, rotate: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`absolute top-0 right-0 w-8 h-8 bg-gradient-to-br ${service.accent} rounded-bl-2xl`} />
                  </motion.div>

                  {/* Icon container with animation */}
                  <motion.div
                    className="w-12 h-12 flex items-center justify-center rounded-lg bg-amber-500/10 mb-4 relative overflow-hidden"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${service.accent} opacity-0 group-hover:opacity-20`}
                      animate={{
                        scale: [1, 1.5, 1],
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "loop",
                      }}
                    />
                    <Icon className="w-6 h-6 text-amber-400 relative z-10" />
                  </motion.div>

                  <motion.h3
                    className="font-semibold text-lg mb-2"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {service.title}
                  </motion.h3>
                  
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {service.desc}
                  </p>

                  {/* Animated bottom line */}
                  <motion.div
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${service.accent}`}
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Image Section with Parallax Effect */}
      <motion.div
        ref={imageRef}
        style={{
          scale: imageScale,
          opacity: imageOpacity,
        }}
        className="w-full h-[420px] overflow-hidden relative"
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-amber-500/20 to-transparent"
          animate={{
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        
        <motion.img
          src="/assets/perfomance/img1.jpg"
          alt="Mechanic working on engine"
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
        />

        {/* Overlay text that appears on hover */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-500"
          whileHover={{ opacity: 1 }}
        >
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-white text-xl font-bold text-center px-4"
          >
            Precision Engineering • Performance Driven
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}