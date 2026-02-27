import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Bolt, ArchiveRestore, SprayCan, Gauge } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const WhatWeDo = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const services = [
        {
            title: "Mechanical",
            desc: "We offer high levels of technical capabilities at all our stores. Training and equipment always at the height of regular renewing investment.",
            img: "/assets/about/img1.jpg",
            icon: <Bolt className="w-6 h-6" />,
            color: "from-blue-500/20",
            stats: "15+ Specialists"
        },
        {
            title: "Restorations",
            desc: "AJP HQ remains the flagship store for all our customers and franchises wanting solutions and services for rebuilding their cars.",
            img: "/assets/about/img2.jpg",
            icon: <ArchiveRestore className="w-6 h-6" />,
            color: "from-amber-500/20",
            stats: "200+ Projects"
        },
        {
            title: "Paint Shop",
            desc: "We specialise in custom paint jobs based on our clients' choices with premium clear coat options that are cost effective.",
            img: "/assets/about/img3.jpg",
            icon: <SprayCan className="w-6 h-6" />,
            color: "from-purple-500/20",
            stats: "1000+ Finishes"
        },
    ];

    const services2 = [
        {
            title: "Detailing & Ceramic",
            desc: "Whether you're restoring, repainting or perhaps just in need of pampering your car with a fresh look, this section of our workshop has nearly all the answers!",
            img: "/assets/about/img4.jpg",
            icon: <Sparkles className="w-6 h-6" />,
            color: "from-emerald-500/20",
            stats: "500+ Treatments"
        },
        {
            title: "Performance & Tuning",
            desc: "Performance being our name, we enjoy this part of the business tremendously and over the years have reworked our strategy and offerings many a time.",
            img: "/assets/about/img5.jpg",
            icon: <Gauge className="w-6 h-6" />,
            color: "from-red-500/20",
            stats: "1000+ Tunes"
        },
    ];
    const facilities = [
        {
            title: "Spectral Paint Studio",
            desc: "Climate-controlled paint studio with spectral colour analysis for exact OEM and bespoke colour matching.",
            image:
                "/assets/about/img6.jpg",
        },
        {
            title: "CNC & 3D Scanning",
            desc: "In-house CNC machining and laser 3D scanning for bespoke parts fabrication with micron-level accuracy.",
            image:
                "/assets/about/img7.jpg",
        },
        {
            title: "Dyno Certification",
            desc: "Accredited rolling-road dyno for power measurement, emissions compliance and full drive-cycle certification.",
            image:
                "/assets/about/img8.jpg",
        },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
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
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1]
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 50 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1]
            }
        },
        hover: {
            y: -10,
            scale: 1.02,
            transition: { duration: 0.3 }
        }
    };

    const glowVariants = {
        initial: { opacity: 0, scale: 0.8 },
        hover: {
            opacity: 1,
            scale: 1.2,
            transition: { duration: 0.3 }
        }
    };

    return (
        <>
            <section className="relative z-10 bg-[#1A1A1A] text-white py-20 px-6 overflow-hidden">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }}></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={containerVariants}
                        className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-14"
                    >
                        <div>
                            <motion.p
                                variants={itemVariants}
                                className="text-[#d4a64f] text-sm mb-3 tracking-widest flex items-center gap-2"
                            >
                                <span className="w-8 h-[1px] bg-[#d4a64f]"></span>
                                What We Do
                            </motion.p>
                            <motion.h2
                                variants={itemVariants}
                                className="text-2xl lg:text-4xl font-semibold font-sans mb-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
                            >
                                A Boutique Automotive Atelier
                            </motion.h2>
                            <motion.p
                                variants={itemVariants}
                                className="text-[#d4a64f] md:text-sm text-lg"
                            >
                                Blending Traditional Craftsmanship With Modern Engineering.
                            </motion.p>
                        </div>

                        {/* <motion.button
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, x: 5 }}
                            whileTap={{ scale: 0.95 }}
                            className="group flex items-center gap-2 bg-gradient-to-r from-[#C9A24D] to-[#b8913f] text-black px-6 py-3 text-sm font-medium rounded-lg relative overflow-hidden"
                        >
                            <span className="relative z-10">See All Services</span>
                            <ArrowUpRight size={18} className="relative z-10 group-hover:rotate-45 transition-transform" />
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-[#d4a64f] to-[#C9A24D]"
                                initial={{ x: "-100%" }}
                                whileHover={{ x: 0 }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.button> */}
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={containerVariants}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6"
                    >
                        {services.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                whileHover="hover"
                                onHoverStart={() => setHoveredIndex(index)}
                                onHoverEnd={() => setHoveredIndex(null)}
                                className="relative h-[450px] overflow-hidden  group cursor-pointer"
                            >
                                <motion.img
                                    src={item.img}
                                    alt={item.title}
                                    className="absolute inset-0 w-full h-full object-cover"
                                    animate={{
                                        scale: hoveredIndex === index ? 1.2 : 1.1
                                    }}
                                    transition={{ duration: 0.6 }}
                                />

                            
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                                <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                                <motion.div
                                    className={`absolute inset-0 bg-gradient-to-t ${item.color} mix-blend-overlay`}
                                    animate={{
                                        opacity: hoveredIndex === index ? 0.3 : 0.1
                                    }}
                                />

                                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                                    <motion.div
                                        className="flex items-center gap-3 mb-4"
                                        animate={{
                                            y: hoveredIndex === index ? -5 : 0
                                        }}
                                    >
                                        <motion.div
                                            className="p-3 bg-[#d4a64f]/90 rounded-xl shadow-lg"
                                            animate={{
                                                rotate: hoveredIndex === index ? 360 : 0,
                                                scale: hoveredIndex === index ? 1.1 : 1
                                            }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <div className="text-black">
                                                {item.icon}
                                            </div>
                                        </motion.div>

                                        <h3 className="text-2xl font-bold text-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.5)]">
                                            {item.title}
                                        </h3>
                                    </motion.div>

                                    <motion.p
                                        className="text-sm text-white/90 mb-4 leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] max-w-[90%]"
                                        animate={{
                                            opacity: hoveredIndex === index ? 1 : 0.9
                                        }}
                                    >
                                        {item.desc}
                                    </motion.p>

                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{
                                            opacity: 1,
                                            y: 0
                                        }}
                                        className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full border border-[#d4a64f]/40"
                                    >
                                        <span className="text-xs font-medium text-[#d4a64f]">{item.stats}</span>
                                    </motion.div>
                                </div>

                             
                                <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#d4a64f]/40 rounded-tr-2xl"></div>
                                <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-[#d4a64f]/40 rounded-bl-2xl"></div>

                               
                                <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/20 to-transparent"></div>
                            </motion.div>
                        ))}
                    </motion.div>

              
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={containerVariants}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                        {services2.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                whileHover="hover"
                                onHoverStart={() => setHoveredIndex(index + 3)}
                                onHoverEnd={() => setHoveredIndex(null)}
                                className="relative h-[450px] overflow-hidden group cursor-pointer"
                            >
                               
                                <motion.img
                                    src={item.img}
                                    alt={item.title}
                                    className="absolute inset-0 w-full h-full object-cover"
                                    animate={{
                                        scale: hoveredIndex === index + 3 ? 1.2 : 1.1
                                    }}
                                    transition={{ duration: 0.6 }}
                                />

                            
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                                <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                                <motion.div
                                    className={`absolute inset-0 bg-gradient-to-t ${item.color} mix-blend-overlay`}
                                    animate={{
                                        opacity: hoveredIndex === index + 3 ? 0.3 : 0.1
                                    }}
                                />

                                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                                    <motion.div
                                        className="flex items-center gap-3 mb-4"
                                        animate={{
                                            y: hoveredIndex === index + 3 ? -5 : 0
                                        }}
                                    >
                                        <motion.div
                                            className="p-3 bg-[#d4a64f]/90 rounded-xl shadow-lg"
                                            animate={{
                                                rotate: hoveredIndex === index + 3 ? 360 : 0,
                                                scale: hoveredIndex === index + 3 ? 1.1 : 1
                                            }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <div className="text-black">
                                                {item.icon}
                                            </div>
                                        </motion.div>

                                        <h3 className="text-2xl font-bold text-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.5)]">
                                            {item.title}
                                        </h3>
                                    </motion.div>

                                    <motion.p
                                        className="text-sm text-white/90 mb-4 leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] max-w-[90%]"
                                        animate={{
                                            opacity: hoveredIndex === index + 3 ? 1 : 0.9
                                        }}
                                    >
                                        {item.desc}
                                    </motion.p>

                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{
                                            opacity: 1,
                                            y: 0
                                        }}
                                        className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full border border-[#d4a64f]/40"
                                    >
                                        <span className="text-xs font-medium text-[#d4a64f]">{item.stats}</span>
                                    </motion.div>
                                </div>

                                <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#d4a64f]/40 rounded-tr-2xl"></div>
                                <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-[#d4a64f]/40 rounded-bl-2xl"></div>

                                <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/20 to-transparent"></div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
            <section className="bg-[#1A1A1A] text-white py-20 px-6">
                <div className="max-w-7xl mx-auto">
                  
                    <h2 className="text-2xl md:text-4xl font-sans font-semibold mb-12">
                        Technology & Facilities
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {facilities.map((item, index) => (
                            <div
                                key={index}
                                className="bg-[#1a1a1a] border border-white/10  overflow-hidden hover:border-white/80 shadow-2xl transition"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-56 w-full object-cover"
                                />

                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-gray-300 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>

    );
};

export default WhatWeDo;