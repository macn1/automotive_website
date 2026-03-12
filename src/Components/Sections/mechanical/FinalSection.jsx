import { motion } from "framer-motion";

const GlobalHeroSection = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.6,
        duration: 0.5,
        type: "spring",
        stiffness: 200,
      },
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#b91c1c",
      boxShadow: "0 10px 25px -5px rgba(220, 38, 38, 0.5)",
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const imageVariants = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.3,
      },
    },
  };

  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.8,
      },
    },
  };

  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
      <motion.img
        src="/assets/about/carr2.jpg"
        alt="Luxury Performance Car"
        className="absolute inset-0 w-full h-full object-cover"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      />

      <motion.div
        className="absolute inset-0 bg-black/50"
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
      />

      <motion.div
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-2xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          variants={textVariants}
        >
          Redefining Mechanical Excellence
          <br />
          Across India & Thailand
        </motion.h1>

        <motion.button
          className="bg-red-600 text-white px-6 py-3 text-xs md:text-base font-semibold"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          Schedule Your Mechanical Inspection Today
        </motion.button>
      </motion.div>

      <motion.div
        className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent"
        variants={fadeVariants}
        initial="hidden"
        animate="visible"
      />
    </section>
  );
};

export default GlobalHeroSection;