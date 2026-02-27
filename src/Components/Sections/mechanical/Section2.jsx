import { motion } from "framer-motion"
import {
  Activity,
  Cpu,
  Settings,
  AlertTriangle,
} from "lucide-react"

const DVISection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  }

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    },
    hover: {
      scale: 1.05,
      borderColor: "#eab308",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  }

  const imageVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.5
      }
    }
  }

  return (
    <section className="bg-[#1A1A1A] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p 
            variants={itemVariants}
            className="text-sm text-yellow-500 mb-3 tracking-wide"
          >
            Real-Time Transparency
          </motion.p>

          <motion.h2 
            variants={itemVariants}
            className="text-2xl md:text-3xl font-bold mb-6 leading-tight"
          >
            Digital Vehicle Information (DVI)
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-gray-400 max-w-xl mb-10 leading-relaxed"
          >
            Experience full transparency with our cloud-based tracking system.
            Receive real-time reports, photo evidence, and OEM-level scan results
            directly to your mobile device. No surprises — just data-driven
            mechanical precision.
          </motion.p>

          {/* FEATURE CARDS */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            variants={containerVariants}
          >
            {/* Engine Diagnostics */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="border border-yellow-500/30 rounded-lg p-6 cursor-pointer flex gap-4"
            >
              <motion.div 
                className="text-yellow-500"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Activity size={28} />
              </motion.div>
              <div>
                <h4 className="font-semibold mb-1">Engine Diagnostics</h4>
                <p className="text-sm text-gray-400">
                  Real-time health monitoring
                </p>
              </div>
            </motion.div>

            {/* ECU Coding */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="border border-yellow-500/30 rounded-lg p-6 cursor-pointer flex gap-4"
            >
              <motion.div 
                className="text-yellow-500"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Cpu size={28} />
              </motion.div>
              <div>
                <h4 className="font-semibold mb-1">ECU Coding</h4>
                <p className="text-sm text-gray-400">
                  Factory parameter updates
                </p>
              </div>
            </motion.div>

            {/* Transmission Analysis */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="border border-yellow-500/30 rounded-lg p-6 cursor-pointer flex gap-4"
            >
              <motion.div 
                className="text-yellow-500"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Settings size={28} />
              </motion.div>
              <div>
                <h4 className="font-semibold mb-1">Transmission Analysis</h4>
                <p className="text-sm text-gray-400">
                  Gearbox optimization
                </p>
              </div>
            </motion.div>

            {/* Warning Resolution */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="border border-yellow-500/30 rounded-lg p-6 cursor-pointer flex gap-4"
            >
              <motion.div 
                className="text-yellow-500"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <AlertTriangle size={28} />
              </motion.div>
              <div>
                <h4 className="font-semibold mb-1">Warning Resolution</h4>
                <p className="text-sm text-gray-400">
                  Clear fault codes permanently
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div 
          className="h-full flex items-stretch"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div 
            className="relative w-full h-full max-h-[420px]"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <img
              src="/assets/mechanical/sec.jpg"
              alt="Vehicle Diagnostics"
              className="w-full h-full object-cover "
            />
            
       
            <motion.div 
              className="absolute inset-0 bg-yellow-500/10 rounded-xl"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}

export default DVISection