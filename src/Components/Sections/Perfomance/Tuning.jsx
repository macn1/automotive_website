import { Zap, Gauge, Thermometer, ShieldCheck } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Animation variants
const fadeInUp = {
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

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
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
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 17,
    },
  },
};

const benefitItemVariants = {
  hidden: { opacity: 0, x: -20 },

  hover: {
    scale: 1.05,
    x: 5,
    transition: {
      type: "spring",
      stiffness: 400,
    },
  },
};

export default function SpecializedTuningServices() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.1, 0.95]);
  const imageRotate = useTransform(scrollYProgress, [0, 0.5], [0, 2]);
  const imageY = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50]);

  return (
    <section ref={sectionRef} className="bg-[#0f0f0f] text-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading with animated underline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold relative inline-block">
            Specialized Tuning Services
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-amber-500 to-transparent"
            />
          </motion.h2>
          
          <motion.p
            variants={fadeInUp}
            className="text-gray-400 mt-3 max-w-2xl mx-auto text-sm"
          >
            From surgical ECU adjustments to full mechanical overhauls,
            our services are tailored to your driving goals.
          </motion.p>
        </motion.div>

        {/* Top Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-6 mb-20"
        >
          {/* Card 1 */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="group relative"
          >
            {/* Glow effect */}
            <motion.div
              className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-50"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            
            <div className="relative border border-gray-700 bg-[#151515] rounded-lg overflow-hidden">
              <motion.div
                className="overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src="/assets/perfomance/img3.jpg"
                  className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-110"
                  alt="Performance Mapping"
                />
              </motion.div>
              
              {/* Overlay on image hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ top: 0, height: "176px" }}
              />
              
              <div className="p-5 relative">
                <motion.h3
                  className="font-semibold text-lg mb-2"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Performance Mapping
                </motion.h3>
                <p className="text-sm text-gray-400">
                  Modern performance starts with intelligent calibration.
                  Our in-house ECU remapping services unlock hidden potential
                  while maintaining mechanical safety.
                </p>
                
                {/* Animated corner accent */}
                <motion.div
                  className="absolute bottom-2 right-2 w-8 h-8"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="absolute bottom-0 right-0 w-4 h-4 bg-gradient-to-tl from-amber-500 to-orange-500 rounded-tl-lg" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="group relative"
          >
            <motion.div
              className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-lg opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-50"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 0.2,
              }}
            />
            
            <div className="relative border border-gray-700 bg-[#151515] rounded-lg overflow-hidden">
              <motion.div
                className="overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src="/assets/perfomance/img4.jpg"
                  className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-110"
                  alt="Powertrain Upgrades"
                />
              </motion.div>
              
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ top: 0, height: "176px" }}
              />
              
              <div className="p-5 relative">
                <motion.h3
                  className="font-semibold text-lg mb-2"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Powertrain Upgrades
                </motion.h3>
                <p className="text-sm text-gray-400">
                  For drivers seeking serious performance gains, we provide
                  complete engine and transmission upgrades including turbo
                  and supercharger kits.
                </p>
                
                <motion.div
                  className="absolute bottom-2 right-2 w-8 h-8"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="absolute bottom-0 right-0 w-4 h-4 bg-gradient-to-tl from-amber-500 to-yellow-500 rounded-tl-lg" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="group relative"
          >
            <motion.div
              className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-red-500 rounded-lg opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-50"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 0.4,
              }}
            />
            
            <div className="relative border border-gray-700 bg-[#151515] rounded-lg overflow-hidden">
              <motion.div
                className="overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src="/assets/perfomance/img5.jpg"
                  className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-110"
                  alt="Performance Validation"
                />
              </motion.div>
              
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ top: 0, height: "176px" }}
              />
              
              <div className="p-5 relative">
                <motion.h3
                  className="font-semibold text-lg mb-2"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Performance Validation
                </motion.h3>
                <p className="text-sm text-gray-400">
                  True performance must be measured, not guessed. Our rolling
                  road dyno testing provides accurate horsepower and torque
                  data under controlled conditions.
                </p>
                
                <motion.div
                  className="absolute bottom-2 right-2 w-8 h-8"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="absolute bottom-0 right-0 w-4 h-4 bg-gradient-to-tl from-amber-500 to-red-500 rounded-tl-lg" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.h3 variants={fadeInUp} className="text-2xl font-bold mb-4">
              Precision-Engineered Performance Parts
            </motion.h3>

            <motion.p variants={fadeInUp} className="text-gray-400 text-sm mb-6">
              We invest in high-performance components and industry-leading
              technology to ensure your vehicle delivers maximum power
              without compromising reliability.
            </motion.p>

            {/* Bullet List with staggered animation */}
            <motion.ul
              variants={staggerContainer}
              className="grid grid-cols-2 gap-3 text-sm text-gray-300 mb-10"
            >
              {[
                "High-Flow Intake Systems",
                "Performance Turbo & Supercharger Kits",
                "Upgraded Intercoolers & Cooling Systems",
                "Precision ECU Tuning Software",
              ].map((item, i) => (
                <motion.li
                  key={item}
                  variants={fadeInUp}
                  custom={i}
                  className="flex items-center gap-2"
                  whileHover={{ x: 5, color: "#f59e0b" }}
                >
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="text-amber-500"
                  >
                    •
                  </motion.span>
                  {item}
                </motion.li>
              ))}
            </motion.ul>

            {/* Key Benefits */}
            <motion.h4 variants={fadeInUp} className="font-semibold mb-4">
              Key Benefits
            </motion.h4>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Zap, text: "Optimized Power Delivery", color: "from-amber-500 to-orange-500" },
                { icon: Gauge, text: "Improved Throttle Response", color: "from-amber-500 to-yellow-500" },
                { icon: Thermometer, text: "Enhanced Thermal Management", color: "from-amber-500 to-red-500" },
                { icon: ShieldCheck, text: "Long-Term Mechanical Reliability", color: "from-amber-500 to-purple-500" },
              ].map((item, i) => {
                const Icon = item.icon;
                
                return (
                  <motion.div
                    key={item.text}
                    variants={benefitItemVariants}
                    custom={i}
                    whileHover="hover"
                    className="group relative"
                  >
                    <motion.div
                      className={`absolute -inset-0.5 bg-gradient-to-r ${item.color} rounded-lg opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-50`}
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: i * 0.2,
                      }}
                    />
                    
                    <div className="relative flex items-center gap-3 border border-gray-700 p-4 bg-[#151515] rounded-lg overflow-hidden">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon size={18} className="text-amber-400" />
                      </motion.div>
                      
                      <span className="text-sm">{item.text}</span>
                      
                      {/* Animated background on hover */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10`}
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.8 }}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Image with Parallax */}
          <motion.div
            ref={imageRef}
            style={{
              scale: imageScale,
              rotate: imageRotate,
              y: imageY,
            }}
            className="relative"
          >
            {/* Image container with multiple layers */}
            <div className="relative overflow-hidden rounded-2xl">
              {/* Animated gradient sweep */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-amber-500/30 via-transparent to-amber-500/30 z-10"
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

              <motion.img
                src="/assets/perfomance/img4.jpg"
                alt="Performance parts"
                className="w-full h-[420px] object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />

              {/* Corner accents */}
              <motion.div
                className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-amber-500 z-20"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              />
              
              <motion.div
                className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-amber-500 z-20"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              />
            </div>

         
           
          </motion.div>
        </div>
      </div>
    </section>
  );
}