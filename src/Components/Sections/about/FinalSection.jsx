import { motion } from "framer-motion"

const imageAnim = {
  initial: { opacity: 0, x: -25 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: "easeOut" }
}

const textAnim = {
  initial: { opacity: 0, x: 25 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: "easeOut", delay: 0.1 }
}

const FinalPart = () => {
  return (
    <section className="bg-[#0f0f0f] text-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <motion.div
            {...imageAnim}
            className="flex justify-center md:justify-start"
          >
            <img
              src="/assets/about/final.jpg"
              alt="Founder"
              className=" w-full max-w-md h-[350px] object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div {...textAnim}>
            <h3 className="text-2xl font-semibold mb-4">
              Growing People, Not Just Business
            </h3>

            <p className="text-gray-400 leading-relaxed mb-8">
              Today, I take pride in mentoring others. Some may call it an
              “old-fashioned approach,” but honesty, kindness, patience, and respect
              have always been my guiding principles. I’ve had the privilege to work
              with incredible people — some I’ve taught, and many I’ve learned from.
              My customers, like me, value quality and integrity. I remain grateful
              to continue this journey with those who wish to learn and grow
              alongside me.
            </p>

            <div className="space-y-1">
              <p className="text-white font-semibold text-lg">
                Alexander Johnson
              </p>
              <p className="text-gray-400">
                CEO & Founder
              </p>
              <p className="text-gray-400">
                AJP Group
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default FinalPart