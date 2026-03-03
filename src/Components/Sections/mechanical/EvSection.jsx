import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";

const EVHybridSection = () => {
    const featureItems = [
        "Advanced Battery Health Diagnostics",
        "High Voltage System Safety Checks",
        "EV Thermal Management & Cooling",
        "Fast Charger Infrastructure Setup",
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    const imageVariants = {
        hidden: { opacity: 0, x: 50, scale: 0.95 },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                duration: 0.7,
                ease: "easeOut",
            },
        },
        hover: {
            scale: 1.02,
            boxShadow: "0 20px 40px rgba(234, 179, 8, 0.15)",
            transition: {
                duration: 0.3,
            },
        },
    };

    const badgeVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.5 + i * 0.1,
                duration: 0.4,
                type: "spring",
                stiffness: 200,
            },
        }),
        hover: {
            scale: 1.05,
            borderColor: "#fbbf24",
            backgroundColor: "rgba(234, 179, 8, 0.1)",
            transition: {
                duration: 0.2,
            },
        },
    };

    const featureItemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: 0.8 + i * 0.15,
                duration: 0.4,
            },
        }),
        hover: {
            x: 10,
            backgroundColor: "#2c2c2c",
            transition: {
                duration: 0.2,
            },
        },
    };

    return (
        <>
            <section className="relative z-20 w-full bg-[#1A1A1A] py-24 overflow-hidden">
                <motion.div
                    className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.div variants={containerVariants}>
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold text-white leading-snug mb-6"
                            variants={itemVariants}
                        >
                            Future-Ready EV & Hybrid Mechanical Expertise
                        </motion.h2>

                        <motion.p
                            className="text-gray-400 text-sm leading-relaxed max-w-xl mb-8"
                            variants={itemVariants}
                            transition={{ delay: 0.2 }}
                        >
                            Officially Recognized Workshop Infrastructure With High-Voltage
                            Safety Compliance. We Don't Just Fix Cars; We Engineer The Future Of
                            Mobility.
                        </motion.p>

                        <motion.div
                            className="flex flex-wrap gap-4 mb-8"
                            variants={containerVariants}
                        >
                            {[
                                { text: "Tesla Recognised Capability", icon: Zap },
                                { text: "EV Certified", icon: Zap },
                            ].map((badge, index) => {
                                const Icon = badge.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        className="flex items-center gap-2 px-5 py-3 border border-yellow-500/50 text-white text-sm cursor-default"
                                        variants={badgeVariants}
                                        custom={index}
                                        whileHover="hover"
                                    >
                                        <Icon className="w-4 h-4 text-yellow-400" />
                                        {badge.text}
                                    </motion.div>
                                );
                            })}
                        </motion.div>

                        <motion.div
                            className="space-y-3 max-w-md"
                            variants={containerVariants}
                        >
                            {featureItems.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-center gap-3 bg-[#1c1c1c] px-5 py-4 text-gray-300 text-sm cursor-default"
                                    variants={featureItemVariants}
                                    custom={index}
                                    whileHover="hover"
                                >
                                    <Check className="w-4 h-4 text-yellow-400" />
                                    {item}
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="w-full"
                        variants={imageVariants}
                        whileHover="hover"
                    >
                        <div className="relative overflow-hidden">
                            <img
                                src="assets/mechanical/tesla.jpg"
                                alt="EV Workshop"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            <section className="relative z-20 bg-white py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl md:text-4xl font-bold text-black mb-6">
                        See Your Vehicle.
                        Anytime. Anywhere.
                    </h2>


                    <p className="text-gray-700 max-w-3xl leading-relaxed mb-10">
                        We believe cars are living legacies to be preserved, evolved and passed on. Our mission is to deliver enduring craftsmanship that respects history without compromising modern performance and safety.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <button className="bg-red-600 text-white px-6 py-3 font-semibold hover:bg-red-700 transition">
                            Book a Consultation
                        </button>


                    </div>
                </div>
            </section>

            <section className="min-h-[60vh] md:h-screen w-full relative">
                <img
                    src="/assets/mechanical/lambo.jpg"
                    alt="Automobile Vision"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60" />
            </section>
        </>
    );
};

export default EVHybridSection;