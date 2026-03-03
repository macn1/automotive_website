import React from "react";
import { motion } from "framer-motion";

export default function AjhAutomotiveSection() {
  // Animation variants for consistent automotive feel
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1] // Custom easing for smooth automotive feel
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
      {/* ===== SECOND SECTION ===== */}
      <motion.section 
        className="py-20 px-6 md:px-16 bg-[#1A1A1A] text-white overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-center text-2xl md:text-3xl font-semibold mb-14 max-w-4xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Our Primary Goal Is Simple — Return Every Car To Its Original
            Factory Condition While Maintaining Authenticity And Integrity.
          </motion.h2>

          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
          >
            {[
              {
                title: "Global Parts Sourcing",
                image: "/assets/restoration/img1.jpg",
                icon: "🌍"
              },
              {
                title: "Access To Original Data & Specifications",
                image: "/assets/restoration/img2.jpg",
                icon: "📊"
              },
              {
                title: "Advanced Bodyshop Equipment",
                image: "/assets/restoration/img3.jpg",
                icon: "⚙️"
              },
              {
                title: "Skilled Restoration Technicians",
                image: "/assets/restoration/img4.jpg",
                icon: "🔧"
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="relative group overflow-hidden rounded-2xl cursor-pointer"
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
                {/* Image with cinematic zoom */}
                <motion.div
                  className="relative overflow-hidden w-full h-[280px]"
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
                  
                  {/* Dynamic overlay with automotive-inspired gradient */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </motion.div>

                {/* Content with slide-up animation */}
                <motion.div 
                  className="absolute bottom-4 left-4 right-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="flex items-center gap-2"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-yellow-500 text-xl">{item.icon}</span>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                  </motion.div>
                  
                  {/* Animated underline on hover */}
                  <motion.div 
                    className="h-0.5 bg-yellow-500 mt-2"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>

                {/* Shine effect on hover */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.8 }}
                />
              </motion.div>
            ))}
          </motion.div>
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

      {/* ===== THIRD SECTION ===== */}
      <motion.section 
        className="py-20 px-6 md:px-16 bg-[#1A1A1A] text-white overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Top Image with cinematic animation */}
          <motion.div 
            className="relative overflow-hidden group"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }
              }
            }}
          >
            <motion.div
              className="relative overflow-hidden rounded-lg"
              whileHover="hover"
            >
              <motion.img
                src="/assets/about/carr2.jpg"
                alt="Precision Execution"
                className="w-full h-[350px] md:h-[450px] object-cover"
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              />
              
              {/* Dynamic overlay with automotive-inspired animation */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80"
                initial={{ x: "-100%" }}
                whileInView={{ x: 0 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
              />
              
              {/* Content with slide and fade animation */}
              <motion.div 
                className="absolute left-8 bottom-8 max-w-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.h3 
                  className="text-xl md:text-2xl font-semibold leading-snug"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  This Ensures Every Project Is Executed With Precision And
                  Delivered On Time.
                </motion.h3>
                
                {/* Animated accent line */}
                <motion.div 
                  className="h-1 bg-yellow-500 mt-4"
                  initial={{ width: 0 }}
                  whileInView={{ width: 100 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  viewport={{ once: true }}
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Bottom Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Image with automotive animation */}
            <motion.div 
              className="overflow-hidden group"
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { 
                  opacity: 1, 
                  x: 0,
                  transition: { duration: 0.8, delay: 0.2 }
                }
              }}
            >
              <motion.div
                className="relative overflow-hidden rounded-lg"
                whileHover="hover"
              >
                <motion.img
                  src="/assets/about/carr5.jpg"
                  alt="Restoration Process"
                  className="w-full h-[350px] object-cover"
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                />
                
                {/* Speed lines effect */}
                <motion.div 
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute h-full w-20 bg=[#1A1A1A]"
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
              </motion.div>
            </motion.div>

            {/* Right Content with staggered animations */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { 
                  opacity: 1, 
                  x: 0,
                  transition: { duration: 0.8, delay: 0.4 }
                }
              }}
            >
              <motion.h3 
                className="text-xl md:text-2xl font-semibold leading-relaxed text-gray-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                Currently, We Undertake A Limited Number Of Restoration
                Projects Each Year To Maintain The Highest Standards Of
                Individuality And Attention To Detail.
              </motion.h3>

              {/* Decorative elements */}
              <motion.div 
                className="flex gap-2 mt-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-yellow-500 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Background motion elements */}
        <motion.div 
          className="absolute right-0 top-0 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.section>
    </>
  );
}