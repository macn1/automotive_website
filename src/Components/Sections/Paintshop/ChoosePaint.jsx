import { Sparkles, Wind, Palette, PaintBucket, ScanLine, Wand2 } from "lucide-react";
import { motion } from "framer-motion";

export default function PaintSystemSection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    },
    hover: {
      scale: 1.02,
      boxShadow: "0 20px 30px -10px rgba(234, 179, 8, 0.2)",
      borderColor: "rgba(234, 179, 8, 0.6)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      backgroundColor: "#eab308",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const badgeVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.8,
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section className="bg-[#1A1A1A] text-white py-20 px-6 overflow-hidden">
      <motion.div 
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Top Feature Cards */}
        <motion.div 
          className="grid md:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
        >
          <FeatureCard
            icon={<Wind size={22} />}
            title="Dust-Free Application"
            desc="Clean Room Environment For Flawless, Contaminant-Free Results."
            variants={itemVariants}
            iconVariants={iconVariants}
          />

          <FeatureCard
            icon={<PaintBucket size={22} />}
            title="Even Coating Finish"
            desc="Perfectly Leveled Paint Layers For That Professional Factory Look."
            variants={itemVariants}
            iconVariants={iconVariants}
          />

          <FeatureCard
            icon={<Palette size={22} />}
            title="Color Consistency"
            desc="Professional Grade Matching Using Precision Digital Scanners."
            variants={itemVariants}
            iconVariants={iconVariants}
          />

          <FeatureCard
            icon={<Wand2 size={22} />}
            title="Factory Smoothness"
            desc="Mirror-Like Surface Quality That Rivals Original Manufacturer Finishes."
            variants={itemVariants}
            iconVariants={iconVariants}
          />
        </motion.div>

        {/* Heading */}
        <motion.div 
          className="text-center mb-14"
          variants={textVariants}
        >
          <motion.h2 
            className="text-3xl font-semibold mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Choose Your Paint System
          </motion.h2>

          <motion.p 
            className="text-gray-400 max-w-xl mx-auto"
            variants={textVariants}
          >
            From Budget-Friendly Refreshments To High-End Show Car Finishes,
            We Use The World's Best Brands Including Dupont Paint Bases.
          </motion.p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
        >
          {/* Card 1 */}
          <motion.div 
            className="border border-yellow-600/40 p-8 relative cursor-pointer"
            variants={cardVariants}
            whileHover="hover"
            custom={1}
          >
            <motion.span 
              className="absolute right-4 top-4 bg-gray-600 text-xs px-3 py-1"
              variants={badgeVariants}
            >
              Best Value
            </motion.span>

            <motion.h3 
              className="text-xl font-semibold mb-1"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Contrast S24 System
            </motion.h3>

            <p className="text-gray-400 mb-6 text-sm">
              Taiwanese Precision
            </p>

            <motion.p 
              className="mb-4 font-medium"
              animate={{ 
                scale: [1, 1.02, 1],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              3yr Durability Warranty
            </motion.p>

            <motion.ul 
              className="space-y-2 text-gray-300"
              variants={containerVariants}
            >
              {["Taiwanese High-Solid Clear Coat", "Standard Protection Package", "Dupont Premium Paint Base"].map((text, index) => (
                <motion.li 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 5, color: "#eab308" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  • {text}
                </motion.li>
              ))}
            </motion.ul>

            {/* Animated shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/10 to-transparent"
              animate={{
                x: ["-100%", "200%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "linear"
              }}
            />
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            className="border border-yellow-600/40 bg-[#1a1a1a] p-8 relative cursor-pointer"
            variants={cardVariants}
            whileHover="hover"
            custom={2}
          >
            <motion.span 
              className="absolute right-4 top-4 bg-yellow-500 text-black text-xs px-3 py-1 font-semibold"
              variants={badgeVariants}
              whileHover={{ 
                scale: 1.1,
                backgroundColor: "#ffffff",
                color: "#000000"
              }}
            >
              Expert Choice
            </motion.span>

            <motion.h3 
              className="text-xl font-semibold mb-1"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Premium European
            </motion.h3>

            <p className="text-gray-400 mb-6 text-sm">
              Standox / ACME / KBS
            </p>

            <motion.p 
              className="mb-4 font-medium"
              animate={{ 
                scale: [1, 1.02, 1],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 0.5
              }}
            >
              8yr+ Durability Warranty
            </motion.p>

            <motion.ul 
              className="space-y-2 text-gray-300"
              variants={containerVariants}
            >
              {[
                "European Ultra-HS Clear Coat",
                "Extreme UV & Chemical Resistance",
                "Mirror Shine Depth & Clarity",
                "Weather-Tested Resilience"
              ].map((text, index) => (
                <motion.li 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 5, color: "#eab308" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  • {text}
                </motion.li>
              ))}
            </motion.ul>

            {/* Animated shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/10 to-transparent"
              animate={{
                x: ["-100%", "200%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "linear",
                delay: 1
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* Reusable Feature Card with Motion */
function FeatureCard({ icon, title, desc, variants, iconVariants }) {
  return (
    <motion.div 
      className="border border-yellow-600/30 p-6 flex gap-4 items-start cursor-pointer"
      variants={variants}
      whileHover="hover"
    >
      <motion.div 
        className="bg-yellow-500 text-black p-2"
        variants={iconVariants}
        whileHover="hover"
      >
        {icon}
      </motion.div>

      <motion.div
        whileHover={{ x: 3 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <motion.h4 
          className="font-semibold mb-1"
          whileHover={{ color: "#eab308" }}
        >
          {title}
        </motion.h4>
        <p className="text-gray-400 text-sm">{desc}</p>
      </motion.div>
    </motion.div>
  );
}