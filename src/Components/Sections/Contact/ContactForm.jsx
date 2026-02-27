import { motion } from "framer-motion";

const ContactSection = () => {
    return (
        <section
            className="relative text-white py-20 px-6 bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: "url('/assets/contact.jpg')",
            }}
        >
            {/* Optional: Add a subtle overlay to make text more readable */}
            <div className="absolute inset-0 bg-black/50" />

            <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-50px" }}
                >
                    <motion.h2 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="text-4xl lg:text-5xl font-bold font-sans leading-tight mb-6"
                    >
                        Let's Connect <br /> With AJP Group
                    </motion.h2>

                    <motion.p 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="text-gray-300 max-w-xl text-lg"
                    >
                        Whether you're looking for partnership, store information, or
                        business inquiries — our team is ready to assist you.
                    </motion.p>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="rounded-2xl p-10"
                >
                    <motion.h3 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="text-2xl mb-8 font-[Space_Grotesk]"
                    >
                        Lets Get Started
                    </motion.h3>

                    <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {/* Form fields with staggered animation */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.5 }}
                            viewport={{ once: true }}
                            className="flex flex-col gap-1"
                        >
                            <label htmlFor="fullName" className="text-sm font-medium">
                                Full Name *
                            </label>
                            <input
                                id="fullName"
                                type="text"
                                placeholder="Full Name"
                                className="input-style rounded-[5px] py-1 text-sm px-2 bg-white/10 border border-white/20 focus:border-red-500 transition-colors"
                            />
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.6 }}
                            viewport={{ once: true }}
                            className="flex flex-col gap-1"
                        >
                            <label htmlFor="need" className="text-sm font-medium">
                                What You Need? *
                            </label>
                            <select
                                id="need"
                                className="input-style rounded-[5px] py-1 text-black px-2 bg-white/90 focus:ring-2 focus:ring-red-500"
                            >
                                <option value="">Select an option</option>
                                <option>Partnership</option>
                                <option>Store Info</option>
                                <option>Business Enquiry</option>
                            </select>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.7 }}
                            viewport={{ once: true }}
                            className="flex flex-col gap-1"
                        >
                            <label htmlFor="state" className="text-sm font-medium">
                                State *
                            </label>
                            <input
                                id="state"
                                type="text"
                                placeholder="State"
                                className="input-style rounded-[5px] py-1 text-sm px-2 bg-white/10 border border-white/20 focus:border-red-500 transition-colors"
                            />
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.8 }}
                            viewport={{ once: true }}
                            className="flex flex-col gap-1"
                        >
                            <label htmlFor="city" className="text-sm font-medium">
                                City *
                            </label>
                            <input
                                id="city"
                                type="text"
                                placeholder="City"
                                className="input-style rounded-[5px] py-1 text-sm px-2 bg-white/10 border border-white/20 focus:border-red-500 transition-colors"
                            />
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.9 }}
                            viewport={{ once: true }}
                            className="flex flex-col gap-1"
                        >
                            <label htmlFor="phone" className="text-sm font-medium">
                                Phone Number *
                            </label>
                            <input
                                id="phone"
                                type="text"
                                placeholder="Phone"
                                className="input-style rounded-[5px] py-1 text-sm px-2 bg-white/10 border border-white/20 focus:border-red-500 transition-colors"
                            />
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 1.0 }}
                            viewport={{ once: true }}
                            className="flex flex-col gap-1"
                        >
                            <label htmlFor="email" className="text-sm font-medium">
                                Email *
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Email"
                                className="input-style rounded-[5px] py-1 text-sm px-2 bg-white/10 border border-white/20 focus:border-red-500 transition-colors"
                            />
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 1.1 }}
                            viewport={{ once: true }}
                            className="md:col-span-2 flex flex-col gap-1"
                        >
                            <label htmlFor="message" className="text-sm font-medium">
                                Message *
                            </label>
                            <textarea
                                id="message"
                                rows="4"
                                placeholder="What You Need ?"
                                className="input-style resize-none h-32 rounded-sm px-2 bg-white/10 border border-white/20 focus:border-red-500 transition-colors"
                            />
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 1.2 }}
                            viewport={{ once: true }}
                            className="md:col-span-2 pt-2"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                type="submit"
                                className="px-8 bg-red-600 hover:bg-red-700 transition-all py-2  font-semibold text-lg"
                            >
                                Submit Now
                            </motion.button>
                        </motion.div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSection;