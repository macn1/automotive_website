import React from "react";
import { motion } from "framer-motion";
import { Variants } from "framer-motion";

const articles = [
  {
    date: "Mar 05,2026",
    title: "5 Essential Car Maintenance Tips Every Driver Should Know",
    desc: "Proper maintenance keeps your car running smoothly and safely. Here are simple tips that can help extend your vehicle's life and avoid costly repairs."
  },
  {
    date: "Mar 05,2026",
    title: "5 Essential Car Maintenance Tips Every Driver Should Know",
    desc: "Proper maintenance keeps your car running smoothly and safely. Here are simple tips that can help extend your vehicle's life and avoid costly repairs."
  },
  {
    date: "Mar 05,2026",
    title: "5 Essential Car Maintenance Tips Every Driver Should Know",
    desc: "Proper maintenance keeps your car running smoothly and safely. Here are simple tips that can help extend your vehicle's life and avoid costly repairs."
  }
];

export default function LatestArticles() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 1 }, // Changed from 0 to 1 to show background immediately
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100
      }
    }
  };

  const featuredVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    }
  };

  const listItemVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: (custom: any) => ({
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100
      },
    }),
  };

  return (
    <motion.section 
      className="w-full bg-[#1A1A1A] py-16 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2, margin: "-50px" }}
      variants={containerVariants}
      // Ensure background color is visible immediately
      style={{ backgroundColor: '#1A1A1A' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.h2 
          className="text-white text-2xl md:text-3xl font-semibold text-center mb-12"
          variants={itemVariants}
        >
          Latest Articles
        </motion.h2>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Featured Article */}
          <motion.div 
            className="border border-yellow-600/40 p-4 bg-[#161616] group"
            variants={featuredVariants}
            whileHover={{ 
              y: -5,
              boxShadow: "0 20px 30px -10px rgba(234, 179, 8, 0.2)",
              borderColor: "rgba(234, 179, 8, 0.6)"
            }}
            transition={{ type: "spring", damping: 15 }}
          >
            {/* Image with Hover Scale */}
            <motion.div className="relative overflow-hidden mb-4">
              <motion.img
                src="/assets/blog/img2.jpg"
                alt="Featured car"
                className="w-full h-[320px] object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
              <motion.div 
                className="absolute inset-0 bg-yellow-600/10"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            <motion.p 
              className="text-gray-400 text-sm mb-2"
              variants={itemVariants}
            >
              Mar 05,2026
            </motion.p>

            <motion.h3 
              className="text-white text-xl font-semibold mb-3"
              variants={itemVariants}
            >
              Top 10 Cars to Watch in 2026
            </motion.h3>

            <motion.p 
              className="text-gray-400 text-sm leading-relaxed"
              variants={itemVariants}
            >
              Discover the most anticipated cars launching in 2026 and explore how the
              automotive industry is evolving with new technology and innovation.
              From powerful performance SUVs to smart and efficient electric
              vehicles, manufacturers are introducing models that combine
              advanced safety features, modern design, and improved
              sustainability.
            </motion.p>
          </motion.div>

          {/* Article List */}
          <motion.div 
            className="flex flex-col gap-6"
            variants={containerVariants}
          >
            {articles.map((article, index) => (
              <motion.div
                key={index}
                className="border border-yellow-600/40 p-6 bg-[#161616] group"
                custom={index}
                variants={listItemVariants}
                whileHover={{ 
                  y: -3,
                  boxShadow: "0 10px 25px -8px rgba(234, 179, 8, 0.15)",
                  borderColor: "#eab308",
                  transition: { duration: 0.2 }
                }}
              >
                <motion.p 
                  className="text-gray-400 text-sm mb-2"
                  variants={itemVariants}
                >
                  {article.date}
                </motion.p>

                <motion.h3 
                  className="text-white font-semibold mb-2 text-lg leading-snug"
                  variants={itemVariants}
                >
                  {article.title}
                </motion.h3>

                <motion.p 
                  className="text-gray-400 text-sm mb-4"
                  variants={itemVariants}
                >
                  {article.desc}
                </motion.p>

                <motion.button 
                  className="text-yellow-500 text-sm font-semibold flex items-center gap-2 group"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  variants={itemVariants}
                >
                  <span>Read More</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity,
                      repeatDelay: 2
                    }}
                  >
                    →
                  </motion.span>
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}