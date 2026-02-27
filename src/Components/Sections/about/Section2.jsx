import { motion } from "framer-motion";

const WhoWeAreSection = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }
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

  const statCardVariant = {
    hidden: { opacity: 0, x: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const numberVariant = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.6, 
        delay: 0.9,
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
   <section className="bg-[#1A1A1A] text-white py-20 px-4 sm:px-6 overflow-x-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        {/* LEFT CONTENT */}
        <motion.div 
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of element is visible
          className="lg:col-span-2"
        >
          <motion.p 
            variants={fadeInUp}
            className="text-sm uppercase tracking-widest text-yellow-400 mb-4"
          >
            Who We Are
          </motion.p>

          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-semibold leading-tight mb-6"
          >
            A Boutique Automotive Atelier
          </motion.h2>

          <motion.p 
            variants={fadeInUp}
            className="text-yellow-400 font-medium mb-6"
          >
            Blending Traditional Craftsmanship With Modern Engineering.
          </motion.p>

          <motion.div 
            variants={staggerContainer}
            className="space-y-5 text-gray-300 text-sm leading-relaxed max-w-2xl"
          >
            {[
              "We Combine Hand-Made Finishing With Engineering Precision To Restore, Customise And Maintain Exceptional Cars. From Heritage Restorations To Performance Upgrades, Every Project Is Overseen By Senior Engineers And Artisans In Our State-Of-The-Art Workshop.",
              
              "AJP Group Was Founded On A Single Conviction: That Great Automobiles Deserve Extraordinary Care. Our Team Of Master Craftsmen Operates With The Same Rigour As The Original Manufacturers, Sourcing Period-Correct Components And Applying Techniques Refined Over Decades.",
              
              "Each Vehicle That Enters Our Workshop Receives A Dedicated Project Team, A Bespoke Service Plan, And The Full Weight Of Our Expertise — From Initial Appraisal Through To Final Certification And Handover."
            ].map((text, index) => (
              <motion.p 
                key={index}
                variants={fadeInUp}
              >
                {text}
              </motion.p>
            ))}
          </motion.div>

          <motion.button
            variants={fadeInUp}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "#b91c1c",
            }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 bg-red-600 hover:bg-red-700 transition-all px-6 py-3 text-sm font-semibold rounded"
          >
            See Our Capabilities
          </motion.button>
        </motion.div>

        {/* RIGHT STATS */}
        <motion.div 
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-6"
        >
 
          <motion.div 
            variants={statCardVariant}
            whileHover={{ 
              scale: 1.05,
              borderColor: "#fbbf24",
              transition: { duration: 0.2 }
            }}
            className="border border-yellow-500/40 p-6 rounded cursor-default transition-all"
          >
            <motion.h3 
              variants={numberVariant}
              className="text-2xl font-bold text-yellow-400"
            >
              24+ <span className="text-sm font-medium text-white">year</span>
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-gray-300 text-sm mt-1"
            >
              Of Craft & Dedication
            </motion.p>
          </motion.div>

          {/* CARD 2 */}
          <motion.div 
            variants={statCardVariant}
            whileHover={{ 
              scale: 1.05,
              borderColor: "#fbbf24",
              transition: { duration: 0.2 }
            }}
            className="border border-yellow-500/40 p-6  cursor-default transition-all"
          >
            <motion.h3 
              variants={numberVariant}
              className="text-2xl font-bold text-yellow-400"
            >
              1,200+ <span className="text-sm font-medium text-white">Vehicles</span>
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="text-gray-300 text-sm mt-1"
            >
              Craft & Dedication
            </motion.p>
          </motion.div>

          {/* CARD 3 */}
          <motion.div 
            variants={statCardVariant}
            whileHover={{ 
              scale: 1.05,
              borderColor: "#fbbf24",
              transition: { duration: 0.2 }
            }}
            className="border border-yellow-500/40 p-6 rounded cursor-default transition-all"
          >
            <motion.h3 
              variants={numberVariant}
              className="text-2xl font-bold text-yellow-400"
            >
              98% <span className="text-sm font-medium text-white">customer</span>
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-300 text-sm mt-1"
            >
              Satisfaction Rate
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhoWeAreSection;