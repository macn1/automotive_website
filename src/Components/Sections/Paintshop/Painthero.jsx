import { motion } from "framer-motion";

export default function PaintHero() {
  // Professional, minimalist animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const imageVariants = {
    hidden: { 
      scale: 1.05,
      opacity: 0.8
    },
    visible: { 
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.8,
        ease: "easeOut"
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  const titleVariants = {
    hidden: { 
      y: 20,
      opacity: 0 
    },
    visible: { 
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const subtitleVariants = {
    hidden: { 
      y: 20,
      opacity: 0 
    },
    visible: { 
      y: 0,
      opacity: 0.9,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const buttonVariants = {
    hidden: { 
      y: 20,
      opacity: 0 
    },
    visible: { 
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.4,
        ease: [0.25, 0.1, 0.25, 1]
      }
    },
    hover: {
      scale: 1.02,
      backgroundColor: "#b91c1c", // Darker red on hover
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.98
    }
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1,
        delay: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      className="relative w-full h-[220px] md:h-[260px] overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Background Image */}
      <motion.img
        src="/assets/paint/hero.jpg"
        alt="Car paint service"
        className="absolute inset-0 w-full h-full object-cover"
        variants={imageVariants}
      />

      {/* Dark Professional Overlay */}
      <motion.div 
        className="absolute inset-0 bg-black/60"
        variants={overlayVariants}
      />

      {/* Simple Top Border Line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent"
        variants={lineVariants}
      />

      {/* Simple Bottom Border Line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent"
        variants={lineVariants}
      />

      {/* Content */}
      <motion.div 
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
        variants={containerVariants}
      >
        <motion.h1 
          className="text-white text-xl md:text-3xl font-light tracking-wide"
          variants={titleVariants}
        >
          Give Your Car The Finish It Deserves.
        </motion.h1>

        <motion.p 
          className="text-gray-300 text-sm md:text-base mt-2 max-w-xl font-light"
          variants={subtitleVariants}
        >
          Book Your Paint Consultation Today And Experience Showroom-Level
          Perfection.
        </motion.p>

        {/* Professional Red Button */}
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          className="mt-3 bg-red-600 text-white text-xs md:text-sm font-medium px-6 py-2.5 rounded-sm tracking-wide transition-colors duration-200"
        >
          Request a Quote
        </motion.button>
      </motion.div>
    </motion.section>
  );
}