import React from "react";
import { motion } from "framer-motion";

export default function AjhAutomotiveSection() {
  return (
    <section className="w-full bg-[#1A1A1A] text-white py-20 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p 
            className="text-yellow-500 text-sm mb-4 inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Restoration
          </motion.p>

          <motion.h2 
            className="text-3xl md:text-4xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            At AJH Automotive,{" "}
            <motion.span 
              className="inline-block text-yellow-500"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.6,
                type: "spring",
                stiffness: 200 
              }}
              viewport={{ once: true }}
            >
              We Don't Just Fix Cars
            </motion.span>{" "}
            – We Build Trust
          </motion.h2>

          <motion.p 
            className="text-gray-400 text-sm md:text-base max-w-md"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
          >
            AJH IP Remains The Flagship Destination For Customers And
            Franchise Partners Seeking Expert Vehicle Rebuilding Solutions.
          </motion.p>

          {/* Subtle accent line */}
          <motion.div 
            className="w-16 h-0.5 bg-yellow-500 mt-8"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Right Image with automotive-themed animation */}
        <motion.div 
          className="w-full h-full relative group"
          initial={{ opacity: 0, x: 50, rotateY: 10 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ 
            duration: 1, 
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.2
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Image container with speed lines effect */}
          <div className="relative overflow-hidden rounded-lg">
            <motion.img
              src="/assets/restoration/sec1.jpg"
              alt="Car Restoration"
              className="w-full h-[350px] md:h-[450px] object-cover"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.4 }
              }}
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
            />
            
            {/* Overlay with motion effect */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            />
          </div>

          {/* Animated border accent */}
          <motion.div 
            className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500/20 to-transparent rounded-lg -z-10"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          />

          {/* Speed lines effect (automotive touch) */}
          <motion.div 
            className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-16 h-32 opacity-0 group-hover:opacity-100"
            initial={{ x: 20 }}
            whileHover={{ 
              x: 0,
              transition: { duration: 0.3 }
            }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute right-0 w-1 h-8 bg-yellow-500/30"
                style={{ top: `${i * 12}px` }}
                animate={{
                  x: [0, 10, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "linear"
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Background automotive-inspired motion elements */}
      <div className="relative -mt-20">
        <motion.div 
          className="absolute left-0 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute right-0 bottom-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
    </section>
  );
}