import { motion } from "framer-motion"
import { Cog, Clock, Construction, AlertCircle } from "lucide-react"

export default function WorkInProgress() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4 mt-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl w-full bg-white rounded-2xl shadow-xl overflow-hidden"
      >
        {/* Header with icon */}
        <div className="bg-blue-600 p-8 text-center">
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="inline-block"
          >
            <Cog size={64} className="text-white" />
          </motion.div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-4">
            Under Construction
          </h1>
        </div>

        {/* Content */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="p-8 md:p-12"
        >
          {/* Main message */}
          <motion.div variants={fadeInUp} className="text-center mb-8">
            <p className="text-xl text-gray-600">
              We're working hard to bring you something amazing.
            </p>
            <p className="text-gray-500 mt-2">
              This page is currently under development.
            </p>
          </motion.div>

          {/* Info cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <motion.div
              variants={fadeInUp}
              className="bg-gray-50 p-4 rounded-lg text-center"
            >
              <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-800">Coming Soon</h3>
              <p className="text-sm text-gray-500"></p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-gray-50 p-4 rounded-lg text-center"
            >
              <Construction className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-800">In Progress</h3>
              

            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-gray-50 p-4 rounded-lg text-center"
            >
              <AlertCircle className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-800">Stay Tuned</h3>
           
            </motion.div>
          </div>

          {/* Progress bar */}
          <motion.div
            variants={fadeInUp}
            className="mb-8"
          >
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Development Progress</span>
              <span>45%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "45%" }}
                transition={{ duration: 1, delay: 0.5 }}
                className="bg-blue-600 h-2.5 rounded-full"
              />
            </div>
          </motion.div>

          {/* Contact section */}
         
        </motion.div>

      
      </motion.div>
    </div>
  )
}