import { motion } from "framer-motion";
import { Cog, Settings, Disc3, Laptop2 } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Engine Services",
      icon: Cog,
      items: [
        "Engine Diagnostics",
        "Performance Tuning",
        "Engine Rebuilds",
        "Fuel System Optimization",
      ],
    },
    {
      title: "Transmission",
      icon: Settings,
      items: [
        "Automatic Repair",
        "Dual Clutch System",
        "Gearbox Rebuilds",
        "Fluid Service",
      ],
    },
    {
      title: "Brake & Suspension",
      icon: Disc3,
      items: [
        "OEM Replacement",
        "Suspension Diagnostics",
        "Shock Absorber",
        "Performance Upgrades",
      ],
    },
    {
      title: "Software Programming",
      icon: Laptop2,
      items: [
        "OEM-Level Coding",
        "Firmware Updates",
        "Module Programming",
        "Performance Mapping",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
    hover: {
      scale: 1.1,
      rotate: 180,
      transition: {
        duration: 0.3,
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5 + i * 0.1,
        duration: 0.4,
      },
    }),
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 1.2,
        duration: 0.5,
        type: "spring",
        stiffness: 200,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <section
      className="relative w-full bg-cover bg-center py-24 overflow-hidden"
      style={{
        backgroundImage: "url('assets/mechanical/bg2.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headingVariants}
        >
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-white"
            variants={headingVariants}
          >
            Certified. Trained. Continuously Upgraded.
          </motion.h2>
          <motion.p
            className="text-gray-300 mt-4"
            variants={headingVariants}
          >
            Only Level 3 Certified Technicians Or Above Handle Your Vehicle
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                className="bg-[#1A1A1A] p-6 rounded-md border border-white/10"
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  borderColor: "#fbbf24",
                  transition: { duration: 0.2 },
                }}
              >
                <motion.div
                  className="w-10 h-10 bg-yellow-400 flex items-center justify-center rounded mb-4"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <Icon className="w-5 h-5 text-black" />
                </motion.div>

                <motion.h3
                  className="text-white font-semibold text-lg mb-4"
                  variants={itemVariants}
                >
                  {service.title}
                </motion.h3>

                <ul className="space-y-2">
                  {service.items.map((item, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-2 text-gray-300 text-sm"
                      variants={listItemVariants}
                      custom={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <motion.span
                        className="text-yellow-400 mt-1"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse",
                          delay: i * 0.2,
                        }}
                      >
                        ●
                      </motion.span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="flex justify-center mt-14"
          variants={buttonVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover="hover"
          whileTap="tap"
        >
          <motion.button
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-semibold"
            animate={{
              boxShadow: [
                "0 0 0 rgba(220, 38, 38, 0)",
                "0 0 20px rgba(220, 38, 38, 0.5)",
                "0 0 0 rgba(220, 38, 38, 0)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            Book Mechanical Inspection
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;