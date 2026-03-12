import React from "react";
import { motion } from "framer-motion";
import { 
  Globe, 
  Target, 
  Cpu, 
  Wrench,
  Sparkles
} from "lucide-react";

export default function WhyChooseAndCTA() {
  // Professional, minimalist animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <>
      {/* ================= WHY CHOOSE SECTION ================= */}
      <motion.section 
        className="py-20 px-6 md:px-16 bg-[#111111] text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto">
          
          {/* Heading */}
          <motion.h2 
            className="text-center text-2xl md:text-3xl font-light tracking-wide mb-12"
            variants={fadeInUp}
          >
            Why Choose AJP HQ For Restoration?
          </motion.h2>

          {/* Cards Grid */}
          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
          >
            {[
              {
                title: "Global Parts Sourcing",
                image: "/assets/restoration/img1.jpg",
                icon: Globe,
                description: "Premium components sourced worldwide"
              },
              {
                title: "Limited Projects For Maximum Focus",
                image: "/assets/restoration/img3.jpg",
                icon: Target,
                description: "Quality over quantity, always"
              },
              {
                title: "Advanced Equipment & Technology",
                image: "/assets/restoration/img1.jpg",
                icon: Cpu,
                description: "State-of-the-art facilities"
              },
              {
                title: "Experienced Restoration Specialists",
                image: "/assets/restoration/img4.jpg",
                icon: Wrench,
                description: "Master craftsmen at work"
              },
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  className="relative group overflow-hidden rounded-sm"
                  variants={cardVariants}
                  custom={index}
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden w-full h-[260px]">
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-5">
                    {/* Icon and Title */}
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-black/50 p-2 rounded-sm backdrop-blur-sm">
                        <IconComponent size={18} className="text-white" />
                      </div>
                      <h3 className="text-sm md:text-base font-medium tracking-wide">
                        {item.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-gray-300 font-light">
                      {item.description}
                    </p>

                    {/* Simple underline on hover */}
                    <motion.div 
                      className="h-px bg-white/50 mt-3"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Bottom Text */}
          <motion.p 
            className="text-center mt-12 text-lg md:text-xl font-light text-gray-200 flex items-center justify-center gap-2"
            variants={fadeInUp}
          >
            <Sparkles size={20} className="text-white/70" />
            We Don't Rush Builds. We Perfect Them.
            <Sparkles size={20} className="text-white/70" />
          </motion.p>
        </div>
      </motion.section>

      {/* ================= CTA SECTION ================= */}
      <motion.section 
        className="relative w-full h-[400px] flex items-center justify-center text-center text-white overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Background Image */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <img
            src="/assets/restoration/bently.jpg"
            alt="Restore Your Classic"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Simple Overlay */}
        <motion.div 
          className="absolute inset-0 bg-black/70"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Content */}
        <motion.div 
          className="relative z-10 max-w-3xl px-6"
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-3xl md:text-5xl font-light tracking-wide mb-4"
            variants={fadeInUp}
          >
            Ready To Restore Your Classic?
          </motion.h2>

          <motion.p 
            className="text-gray-300 mb-8 font-light max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Whether Your Vehicle Needs A Full Rebuild Or A Detailed Restoration,
            Our Team Is Ready To Bring It Back To Life.
          </motion.p>

          {/* Simple Button */}
          <motion.button 
            className="bg-red-600 hover:bg-red-700 transition-colors duration-300 px-8 py-3 rounded-sm text-sm md:text-xs font-medium tracking-wide inline-flex items-center gap-2"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Schedule Your Restoration Today
          </motion.button>
        </motion.div>

        {/* Simple top and bottom lines */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </motion.section>
    </>
  );
}