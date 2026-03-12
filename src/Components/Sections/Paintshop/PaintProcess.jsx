import { motion } from "framer-motion";

export default function PaintProcess() {
  const processes = [
    {
      title: "Surface Preparation",
      desc: "Complete stripping, sanding, dent correction, and panel alignment for a flawless base.",
      img: "/assets/paint/ss.jpg",
      position: "object-center",
    },
    {
      title: "Primer & Sealing",
      desc: "High-grade primer application inside a dust-controlled booth to ensure smooth adhesion.",
      img: "/assets/paint/img2.jpg",
      position: "object-center",
    },
    {
      title: "Base Coat Application",
      desc: "Precision spray techniques for uniform colour distribution and depth.",
      img: "/assets/paint/img3.jpg",
      position: "object-[center_70%]",
    },
    {
      title: "Clear Coat Protection",
      desc: "Application of selected clear coat system for durability and gloss retention.",
      img: "/assets/paint/img4.jpg",
      position: "object-center",
    },
    {
      title: "Baking & Curing",
      desc: "Controlled heat curing process inside professional paint booth.",
      img: "/assets/paint/img5.jpg",
      position: "object-center",
    },
    {
      title: "Final Polishing & Inspection",
      desc: "Machine polishing, detailing and multi-point inspection before delivery.",
      img: "/assets/paint/img6.jpg",
      position: "object-center",
    },
  ];

  // Animation variants matching previous sections
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        delay: index * 0.1
      }
    }),
    hover: {
      y: -5,
      boxShadow: "0 20px 30px -10px rgba(234, 179, 8, 0.3)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.15,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    hover: {
      background: "linear-gradient(to top, rgba(0,0,0,0.9), rgba(234,179,8,0.3), transparent)",
      transition: {
        duration: 0.3
      }
    }
  };

  const textContentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.5
      }
    },
    hover: {
      y: -5,
      transition: {
        type: "spring",
        stiffness: 300
      }
    }
  };

  const titleVariants = {
    hover: {
      color: "#eab308",
      x: 5,
      transition: {
        type: "spring",
        stiffness: 300
      }
    }
  };

  return (
    <motion.section 
      className="bg-[#111] py-20 px-6 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.div 
        className="max-w-7xl mx-auto"
        variants={containerVariants}
      >
        {/* Heading */}
        <motion.div 
          className="text-center mb-12"
          variants={textVariants}
        >
          <motion.h2 
            className="text-white text-3xl font-semibold mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Our Paint Process
          </motion.h2>

          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto text-sm"
            variants={textVariants}
          >
            At AP Performance, every paint project follows a carefully controlled
            multi-stage process designed to ensure durability, depth and a flawless finish.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div 
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {processes.map((item, index) => (
            <motion.div
              key={index}
              className="relative h-[200px] rounded-lg overflow-hidden group shadow-lg cursor-pointer"
              variants={cardVariants}
              custom={index}
              whileHover="hover"
              initial="hidden"
              animate="visible"
            >
              {/* Image */}
              <motion.img
                src={item.img}
                alt={item.title}
                className={`w-full h-full object-cover ${item.position}`}
                variants={imageVariants}
              />

              {/* Overlay */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"
                variants={overlayVariants}
              />

              {/* Text */}
              <motion.div 
                className="absolute bottom-4 left-4 right-4"
                variants={textContentVariants}
              >
                <motion.h3 
                  className="text-white font-semibold text-sm mb-1"
                  variants={titleVariants}
                >
                  {item.title}
                </motion.h3>

                <motion.p 
                  className="text-gray-300 text-xs"
                  variants={textContentVariants}
                >
                  {item.desc}
                </motion.p>
              </motion.div>

              {/* Animated border on hover */}
              <motion.div
                className="absolute inset-0 border-2 border-yellow-500 rounded-lg opacity-0 group-hover:opacity-100"
                initial={{ scale: 0.8, opacity: 0 }}
                whileHover={{ 
                  scale: 1, 
                  opacity: 1,
                  transition: { duration: 0.3 }
                }}
              />

              {/* Shine effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ 
                  x: "200%",
                  transition: { duration: 0.8, ease: "easeInOut" }
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative progress line */}
        <motion.div
          className="mt-12 h-1 bg-gradient-to-r from-yellow-500/20 via-yellow-500 to-yellow-500/20 rounded-full mx-auto max-w-3xl"
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
        />
      </motion.div>
    </motion.section>
  );
}