import { motion } from "framer-motion";

export default function BlogSection() {
  const posts = [
    {
      title: "Electric Vehicles: The Future of Driving",
      desc: "Electric cars are changing the automotive world. Learn how EVs work and why more people are switching to electric mobility.",
      img: "/assets/blog/img3.jpg",
      date: "Mar 05, 2026",
    },
    {
      title: "5 Essential Car Maintenance Tips Every Driver Should Know",
      desc: "Proper maintenance keeps your car running smoothly and safely and helps extend your vehicle's life.",
      img: "/assets/blog/img4.jpg",
      date: "Mar 05, 2026",
    },
    {
      title: "SUV vs Sedan: Which One Should You Buy?",
      desc: "Choosing between an SUV and a sedan can be confusing. This guide compares performance and comfort.",
      img: "/assets/blog/img5.jpg",
      date: "Mar 05, 2026",
    },
    {
      title: "How to Choose the Perfect Car for Your Lifestyle",
      desc: "Buying a car is a big decision. Learn what factors you should consider before buying.",
      img: "/assets/blog/img7.jpg",
      date: "Mar 05, 2026",
    },
    {
      title: "Electric Vehicles: The Future of Driving",
      desc: "Electric cars are changing the automotive world. Learn how EVs work and their benefits.",
      img: "/assets/blog/img3.jpg",
      date: "Mar 05, 2026",
    },
    {
      title: "5 Essential Car Maintenance Tips Every Driver Should Know",
      desc: "Proper maintenance keeps your car running smoothly and safely.",
      img: "/assets/blog/img4.jpg",
      date: "Mar 05, 2026",
    },
    {
      title: "SUV vs Sedan: Which One Should You Buy?",
      desc: "Choosing between an SUV and a sedan can be confusing for many buyers.",
      img: "/assets/blog/img5.jpg",
      date: "Mar 05, 2026",
    },
    {
      title: "How to Choose the Perfect Car for Your Lifestyle",
      desc: "Learn what factors you should consider such as budget and fuel efficiency.",
      img: "/assets/blog/img7.jpg",
      date: "Mar 05, 2026",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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

  return (
    <motion.section 
      className="bg-[#1A1A1A] py-20 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1, margin: "-50px" }}
      variants={containerVariants}
      style={{ backgroundColor: '#1A1A1A' }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {posts.map((post, i) => (
            <motion.div
              key={i}
              className="bg-[#2b2b2b] border border-yellow-600/40 overflow-hidden"
              variants={itemVariants}
              custom={i}
              whileHover={{ 
                y: -8,
                boxShadow: "0 20px 30px -10px rgba(234, 179, 8, 0.25)",
                borderColor: "#eab308",
                transition: { 
                  type: "spring", 
                  damping: 15,
                  stiffness: 300
                }
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Image Container with Hover Zoom */}
              <motion.div 
                className="relative overflow-hidden h-48 w-full"
                whileHover="hover"
              >
                <motion.img
                  src={post.img}
                  alt={post.title}
                  className="h-full w-full object-cover"
                  variants={{
                    hover: { 
                      scale: 1.1,
                      transition: { duration: 0.4 }
                    }
                  }}
                />
                {/* Overlay on Hover */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-yellow-600/30 to-transparent"
                  initial={{ opacity: 0 }}
                  variants={{
                    hover: { 
                      opacity: 1,
                      transition: { duration: 0.3 }
                    }
                  }}
                />
              </motion.div>

              <div className="p-5">
                <motion.p 
                  className="text-gray-400 text-sm mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 + (i * 0.05) }}
                >
                  {post.date}
                </motion.p>

                <motion.h3 
                  className="text-white font-semibold text-lg mb-3 line-clamp-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + (i * 0.05) }}
                >
                  {post.title}
                </motion.h3>

                <motion.p 
                  className="text-gray-400 text-sm mb-4 line-clamp-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 + (i * 0.05) }}
                >
                  {post.desc}
                </motion.p>

                <motion.button 
                  className="text-yellow-400 font-medium flex items-center gap-2 group"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.25 + (i * 0.05) }}
                >
                  <span>Read More</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity,
                      repeatDelay: 2,
                      ease: "easeInOut"
                    }}
                  >
                    →
                  </motion.span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}