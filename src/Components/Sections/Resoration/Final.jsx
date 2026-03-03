import React from "react";
import { motion } from "framer-motion";
import { 
  Globe, 
  Target, 
  Cpu, 
  Wrench,
  Sparkles,
  Gauge,
  Timer,
  Shield
} from "lucide-react";

export default function WhyChooseAndCTA() {
  // Animation variants for automotive feel
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1] // Custom easing for smooth motion
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardHoverEffect = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { 
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <>
      {/* ================= WHY CHOOSE SECTION ================= */}
      <motion.section 
        className="py-20 px-6 md:px-16 bg-[#111111] text-white overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto">
          
          {/* Heading with animation */}
          <motion.h2 
            className="text-center text-2xl md:text-3xl font-semibold mb-12"
            variants={fadeInUp}
          >
            Why Choose AJP HQ For Restoration?
          </motion.h2>

          {/* Cards with staggered animations */}
          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
          >
            {[
              {
                title: "Global Parts Sourcing",
                image: "/assets/restoration/img1.jpg",
                icon: Globe,
                description: "Premium components worldwide",
                color: "text-blue-400"
              },
              {
                title: "Limited Projects For Maximum Focus",
                image: "/assets/restoration/img3.jpg",
                icon: Target,
                description: "Quality over quantity",
                color: "text-green-400"
              },
              {
                title: "Advanced Equipment & Technology",
                image: "/assets/restoration/img1.jpg",
                icon: Cpu,
                description: "State-of-the-art facilities",
                color: "text-purple-400"
              },
              {
                title: "Experienced Restoration Specialists",
                image: "/assets/restoration/img4.jpg",
                icon: Wrench,
                description: "Master craftsmen at work",
                color: "text-orange-400"
              },
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  className="relative group overflow-hidden rounded-xl cursor-pointer"
                  variants={{
                    hidden: { opacity: 0, y: 30, scale: 0.95 },
                    visible: { 
                      opacity: 1, 
                      y: 0, 
                      scale: 1,
                      transition: { 
                        duration: 0.6,
                        delay: index * 0.1,
                        ease: [0.25, 0.1, 0.25, 1]
                      }
                    }
                  }}
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                >
                  {/* Image container with cinematic effects */}
                  <motion.div
                    className="relative overflow-hidden w-full h-[260px]"
                    variants={cardHoverEffect}
                  >
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1.1 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 1.2 }}
                      viewport={{ once: true }}
                    />
                    
                    {/* Dynamic gradient overlay */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                      viewport={{ once: true }}
                    />

                    {/* Shine effect on hover */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.8 }}
                    />
                  </motion.div>

                  {/* Content with animations */}
                  <motion.div 
                    className="absolute inset-0 flex flex-col justify-end p-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {/* Icon and title row */}
                    <motion.div 
                      className="flex items-center gap-3 mb-1"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div
                        animate={{
                          rotate: [0, 5, -5, 0],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          repeatDelay: 2,
                          ease: "easeInOut"
                        }}
                        className={`${item.color} bg-black/30 p-2 rounded-lg backdrop-blur-sm`}
                      >
                        <IconComponent size={20} />
                      </motion.div>
                      <h3 className="text-sm md:text-base font-semibold">
                        {item.title}
                      </h3>
                    </motion.div>

                    {/* Description that appears on hover */}
                    <motion.p 
                      className="text-xs text-gray-300 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1"
                      initial={{ y: 10 }}
                      whileHover={{ y: 0 }}
                    >
                      <Sparkles size={12} className="text-yellow-500" />
                      {item.description}
                    </motion.p>

                    {/* Animated underline */}
                    <motion.div 
                      className="h-0.5 bg-yellow-500 mt-2"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>

                  {/* Speed lines effect on hover */}
                  <motion.div 
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute h-full w-20 bg-gradient-to-r from-transparent via-yellow-500/10 to-transparent"
                        style={{ left: `${i * 30}%` }}
                        animate={{
                          x: ["-100%", "200%"],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                          ease: "linear"
                        }}
                      />
                    ))}
                  </motion.div>

                  {/* Additional automotive icons on extreme hover */}
                  <motion.div 
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                  >
                    <div className="flex gap-1">
                      <Gauge size={14} className="text-yellow-500" />
                      <Timer size={14} className="text-blue-500" />
                      <Shield size={14} className="text-green-500" />
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Bottom Text with animation */}
          <motion.p 
            className="text-center mt-12 text-lg md:text-xl font-semibold text-gray-200 flex items-center justify-center gap-2"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Sparkles size={24} className="text-yellow-500" />
            We Don't Rush Builds. We Perfect Them.
            <Sparkles size={24} className="text-yellow-500" />
          </motion.p>
        </div>

        {/* Background automotive motion elements */}
        <motion.div 
          className="absolute left-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl -z-10"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.section>

      {/* ================= CTA SECTION ================= */}
      <motion.section 
        className="relative w-full h-[500px] flex items-center justify-center text-center text-white overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        {/* Background Image with cinematic zoom */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
        >
          <motion.img
            src="/assets/restoration/bently.jpg"
            alt="Restore Your Classic"
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 6 }}
          />
        </motion.div>

        {/* Overlay with fade animation */}
        <motion.div 
          className="absolute inset-0 bg-black/60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />

        {/* Content with staggered animations */}
        <motion.div 
          className="relative z-10 max-w-3xl px-6"
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-6 flex items-center justify-center gap-3"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.8, delay: 0.2 }
              }
            }}
          >
        
            Ready To Restore Your Classic?
      
          </motion.h2>

          <motion.p 
            className="text-gray-200 mb-8 flex items-center justify-center gap-2 flex-wrap"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.8, delay: 0.4 }
              }
            }}
          >
            
            Whether Your Vehicle Needs A Full Rebuild Or A Detailed Restoration,
            Our Team Is Ready To Bring It Back To Life.
            
          </motion.p>

          {/* Button with automotive-themed animations */}
          <motion.button 
            className="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-md font-semibold relative overflow-hidden group"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { 
                opacity: 1, 
                scale: 1,
                transition: { 
                  duration: 0.6, 
                  delay: 0.6,
                  type: "spring",
                  stiffness: 200
                }
              }
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Button text with icon */}
            <span className="relative z-10 flex items-center gap-2">
              <Gauge size={18} />
              Schedule Your Restoration Today
             
            </span>
            
            {/* Animated background effect */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.4 }}
            />
            
            {/* Sparkle effects on hover */}
            {/* <motion.div 
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-yellow-300 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.div> */}
          </motion.button>

          
        </motion.div>

        {/* Speed lines effect on scroll */}
        <motion.div 
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent"
              style={{
                top: `${20 + i * 15}%`,
                left: 0,
                right: 0,
              }}
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "linear"
              }}
            />
          ))}
        </motion.div>
      </motion.section>
    </>
  );
}