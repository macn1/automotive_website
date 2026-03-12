import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyDetailing() {
  const points = [
    "Removes swirl marks & minor scratches for a mirror finish.",
    "Restores original paint gloss and depth.",
    "Protects against dust, UV rays & urban pollution.",
    "Significantly increases resale value of your vehicle.",
    "Makes routine cleaning effortless with hydrophobic surfaces.",
  ];

  // Animation variants
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
    hidden: { y: 20, opacity: 0 },
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

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0, x: 50 },
    visible: {
      scale: 1,
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.4,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const textRevealVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="bg-gradient-to-r from-[#0f0f0f] to-[#1a1a1a] py-16 px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12 relative z-10">
        {/* Left Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-white"
        >
          {/* Animated heading with underline */}
          <div className="relative mb-4">
            <motion.h2 
              variants={itemVariants}
              className="text-2xl md:text-3xl font-semibold relative inline-block"
            >
              Why Regular Detailing Matters
              <motion.div
                variants={textRevealVariants}
                className="absolute bottom-0 left-0 h-0.5 bg-yellow-400"
                style={{ originX: 0 }}
              />
            </motion.h2>
          </div>

          <motion.p 
            variants={itemVariants}
            className="text-gray-400 text-sm leading-relaxed mb-6 max-w-md"
          >
            In Indian Conditions, Daily Dust, Extreme UV Rays, And Monsoon-Related
            Pollution Quickly Degrade Your Vehicle's Exterior. Regular Detailing
            Is Essential To Counteract This Aggressive Wear And Tear.
          </motion.p>

          <motion.ul 
            variants={containerVariants}
            className="space-y-4"
          >
            {points.map((item, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                whileHover={{ x: 10 }}
                className="flex items-start gap-3 text-gray-300 group cursor-default relative overflow-hidden"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <CheckCircle className="text-yellow-400 w-5 h-5 mt-1 group-hover:text-yellow-300 transition-colors" />
                </motion.div>
                <span className="text-sm">{item}</span>
                
                {/* Animated shine effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "200%" }}
                  transition={{ duration: 0.8 }}
                />
              </motion.li>
            ))}
          </motion.ul>

          {/* Animated stats or decorative elements */}
          <motion.div 
            variants={itemVariants}
            className="mt-8 flex gap-6"
          >
            {[
              { label: "Cars Detailed", value: "5000+" },
              { label: "Happy Clients", value: "98%" },
              { label: "Years Exp", value: "15+" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="text-yellow-400 font-bold text-xl"
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-500 text-xs">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageVariants}
          whileHover="hover"
          className="w-full max-w-md md:ml-auto relative"
        >
          {/* Decorative rings */}
          <motion.div
            className="absolute -inset-4 border-2 border-yellow-400/20 rounded-lg"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <div className="aspect-square rounded-lg overflow-hidden shadow-2xl relative">
            <motion.img
              src="/assets/detail/img1.jpg"
              alt="Car detailing"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            />
            
            {/* Overlay with shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"
              animate={{
                x: ["-100%", "200%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 2,
              }}
            />
          </div>

          {/* Floating badges - FIXED: Combined transitions */}
          <motion.div
            className="absolute -bottom-4 -left-4 bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold text-sm shadow-xl"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              // Combined transition for both whileInView and animate
              delay: 1,
              y: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            Premium Finish
          </motion.div>

          <motion.div
            className="absolute -top-4 -right-4 bg-black/80 text-yellow-400 px-4 py-2 rounded-lg font-semibold text-sm border border-yellow-400/30 shadow-xl backdrop-blur-sm"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            animate={{
              rotate: [0, 2, 0, -2, 0],
            }}
            transition={{
              // Combined transition for both whileInView and animate
              delay: 1.2,
              rotate: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            Ceramic Coating
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}