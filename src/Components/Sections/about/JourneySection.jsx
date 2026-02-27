import { motion } from "framer-motion"

const imageAnimLeft = {
  initial: { opacity: 0, x: -25 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: "easeOut" }
}

const imageAnimRight = {
  initial: { opacity: 0, x: 25 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: "easeOut" }
}

const textAnimLeft = {
  initial: { opacity: 0, x: -15 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: "easeOut", delay: 0.1 }
}

const textAnimRight = {
  initial: { opacity: 0, x: 15 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: "easeOut", delay: 0.1 }
}

const JourneySection = () => {
  return (
    <section className="bg-[#0f0f0f] text-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div className="space-y-16">

          {/* Card 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <motion.div
              {...imageAnimLeft}
              className="w-full h-[260px] overflow-hidden "
            >
              <img
                src="/assets/about/sec1.jpg"
                alt="Turning Passion Into Profession"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div {...textAnimRight}>
              <h3 className="text-lg font-semibold">
                Turning Passion Into Profession
              </h3>
              <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                I consider myself fortunate to be among the few who can truly say
                “Do what you love every single day.” Success comes from knowledge,
                experience, and building a motivated team.
              </p>
            </motion.div>
          </div>

          {/* Card 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <motion.div
              {...imageAnimRight}
              className="w-full h-[260px] overflow-hidden  md:order-2"
            >
              <img
                src="/assets/about/sec2.jpg"
                alt="Ferrari & Aston Martin"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              {...textAnimLeft}
              className="md:order-1"
            >
              <h3 className="text-lg font-semibold">
                Ferrari & Aston Martin (2008–2010)
              </h3>
              <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                Working with Ferrari dealerships in the UK and Aston Martin in
                Mumbai refined my understanding of luxury, precision, and leadership.
              </p>
            </motion.div>
          </div>

          {/* Card 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <motion.div
              {...imageAnimLeft}
              className="w-full h-[260px] overflow-hidden "
            >
              <img
                src="/assets/about/sec3.jpg"
                alt="Learning on the Ground"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div {...textAnimRight}>
              <h3 className="text-lg font-semibold">
                Learning On The Ground (2011)
              </h3>
              <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                Working closely with independent garage owners in Pune and Mumbai
                shaped my belief in India’s automotive potential.
              </p>
            </motion.div>
          </div>

          {/* Card 4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <motion.div
              {...imageAnimRight}
              className="w-full h-[260px] overflow-hidden md:order-2"
            >
              <img
                src="/assets/about/sec4.jpg"
                alt="Foundation & First Steps"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              {...textAnimLeft}
              className="md:order-1"
            >
              <h3 className="text-lg font-semibold">
                Foundation & First Steps (2014–2015)
              </h3>
              <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                This phase marked the beginning of a new chapter built on honesty,
                quality, and relentless passion.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default JourneySection