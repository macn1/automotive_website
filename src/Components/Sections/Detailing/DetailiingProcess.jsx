import React from "react";
import { motion } from "framer-motion";
import { 
  Droplet, 
  Hand, 
  Cog, 
  Sparkles, 
  Shield, 
  CheckCircle,
  Zap,
  Gauge
} from "lucide-react";

const steps = [
  {
    icon: Droplet,
    title: "Deep Exterior Wash",
    desc: "Multi‑Stage Foam Wash To Remove Loose Dirt And Contaminants Safely Without Scratching.",
    color: "from-blue-500 to-cyan-400",
    glow: "blue-500",
  },
  {
    icon: Hand,
    title: "Clay Bar Treatment",
    desc: "Mechanical Decontamination To Lift Embedded Industrial Fallout And Rail Dust.",
    color: "from-purple-500 to-pink-500",
    glow: "purple-500",
  },
  {
    icon: Cog,
    title: "Machine Polishing",
    desc: "Restoring Clarity And High‑Gloss Levels By Removing Surface Oxidation And Dullness.",
    color: "from-orange-500 to-red-500",
    glow: "orange-500",
  },
  {
    icon: Sparkles,
    title: "Paint Correction",
    desc: "Precision Leveling To Eliminate Swirl Marks And Deeper Clear Coat Scratches.",
    color: "from-yellow-400 to-amber-500",
    glow: "yellow-400",
  },
  {
    icon: Shield,
    title: "Ceramic Application",
    desc: "Bonding A High‑Grade Nanotech Layer To Provide Permanent Paint Protection.",
    color: "from-green-500 to-emerald-500",
    glow: "green-500",
  },
  {
    icon: CheckCircle,
    title: "Final Inspection",
    desc: "A Rigorous Quality Check Under Professional Lighting For A Flawless Finish.",
    color: "from-indigo-500 to-purple-500",
    glow: "indigo-500",
  },
];

export default function DetailingProcessSection() {
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

  const headerVariants = {
    hidden: { y: -30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        delay: i * 0.1,
      },
    }),
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const iconVariants = {
    hidden: { rotate: -180, scale: 0 },
    visible: {
      rotate: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
    hover: {
      rotate: 360,
      scale: 1.1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const lineVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="w-full bg-[#0b0b0b] py-20 relative overflow-hidden">
      {/* Futuristic background elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Grid pattern */}
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
        
        {/* Animated lines */}
        <motion.div
          className="absolute top-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent"
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        <motion.div
          className="absolute bottom-40 right-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/20 to-transparent"
          animate={{
            x: ["100%", "-100%"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>

      {/* Glowing orbs */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <motion.div className="relative inline-block">
            <h2 className="text-white text-3xl font-semibold relative">
              Our Professional Detailing Process
              <motion.div
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
                variants={lineVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              />
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 text-sm mt-3 max-w-xl mx-auto"
          >
            We Follow A Meticulous 6 Step Workflow To Ensure Your Vehicle
            Leaves Our Workshop In Showroom Condition.
          </motion.p>

          {/* Step indicator */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center mt-4 gap-1"
          >
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <motion.div
                key={num}
                className="w-8 h-1 bg-yellow-400/30 rounded-full overflow-hidden"
              >
                <motion.div
                  className="h-full bg-yellow-400"
                  initial={{ x: "-100%" }}
                  whileInView={{ x: 0 }}
                  transition={{ delay: 0.6 + num * 0.1, duration: 0.5 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {steps.map((step, i) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                whileHover="hover"
                className="group relative"
              >
                {/* Glow effect on hover */}
                <motion.div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${step.color} rounded-lg opacity-0 group-hover:opacity-20 blur transition duration-500`}
                  animate={{
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                {/* Card content */}
                <div className="relative bg-[#1a1a1a] border border-yellow-500/20 p-6 rounded-lg overflow-hidden">
                  {/* Background shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12"
                    initial={{ x: "-150%" }}
                    whileHover={{ x: "150%" }}
                    transition={{ duration: 0.8 }}
                  />

                  {/* Icon container */}
                  <motion.div
                    variants={iconVariants}
                    whileHover="hover"
                    className={`w-12 h-12 bg-gradient-to-r ${step.color} flex items-center justify-center mb-4 rounded-lg relative overflow-hidden`}
                  >
                    <Icon className="w-6 h-6 text-black relative z-10" />
                    
                    {/* Icon pulse effect */}
                    <motion.div
                      className={`absolute inset-0 bg-${step.glow}`}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>

                  {/* Step number */}
                  <motion.div
                    className="absolute top-4 right-4 text-4xl font-bold text-white/5"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                  >
                    {(i + 1).toString().padStart(2, '0')}
                  </motion.div>

                  <h3 className="text-white font-semibold mb-2 relative">
                    {step.title}
                    
                    {/* Underline on hover */}
                    <motion.div
                      className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r ${step.color}`}
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed relative">
                    {step.desc}
                  </p>

                  {/* Hover indicator */}
                  <motion.div
                    className="absolute bottom-2 right-2 w-2 h-2 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    style={{
                      background: `linear-gradient(to right, ${step.color})`,
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-3 gap-8 mt-12 p-6 bg-white/5 rounded-lg border border-white/10"
        >
          {[
            { icon: Zap, label: "Process Time", value: "2-3 Hours" },
            { icon: Gauge, label: "Paint Thickness", value: "150-200μ" },
            { icon: Shield, label: "Warranty", value: "5 Years" },
          ].map((stat, i) => {
            const StatIcon = stat.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <StatIcon className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                <div className="text-white font-semibold">{stat.value}</div>
                <div className="text-gray-500 text-xs">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Bottom Image with parallax effect */}
      <motion.div
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-16 relative overflow-hidden"
      >
        <div className="relative h-[420px]">
          <motion.img
            src="/assets/detail/img4.jpg"
            alt="car polishing"
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
          />
          
          {/* Overlay with text */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-center pb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center"
            >
              <h3 className="text-white text-2xl font-semibold mb-2">
                Precision Meets Perfection
              </h3>
              <p className="text-gray-300 text-sm max-w-2xl mx-auto">
                Every Vehicle Receives The Same Attention To Detail, Regardless Of Make Or Model
              </p>
              
              {/* Progress rings */}
              <div className="flex justify-center gap-4 mt-4">
                {[85, 92, 78, 96].map((value, i) => (
                  <motion.div
                    key={i}
                    className="w-12 h-12 rounded-full border-2 border-yellow-400/30 flex items-center justify-center relative"
                  >
                    <motion.div
                      className="absolute inset-0 rounded-full border-t-2 border-yellow-400"
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                        delay: i * 0.2,
                      }}
                    />
                    <span className="text-white text-xs font-bold">{value}%</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          {/* Shine overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
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
      </motion.div>
    </section>
  );
}