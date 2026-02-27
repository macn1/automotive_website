import { motion } from "framer-motion";

const centers = [
  {
    id: 1,
    title: "Pune, India",
    image: "/assets/centers/pune.png",
    contact: "Mrs Sharon Fernandes",
    phone: "+91 8605 888 000",
    email: "info@ajpgroup.com",
    address:
      "Gat No. 257/258, Bhairavnath Industrial Estate, Kondhwa Budruk, Pune, Maharashtra 411048",
  },
  {
    id: 2,
    title: "Bengaluru, India",
    image: "/assets/centers/bengaluru.jpg",
    contact: "Mr. M N Praveen / Mr. M R Praveen",
    phone: "+91 97409 70007",
    email: "bangalore@ajpgroup.com",
    address:
      "Sy No. 38/1, 38/2, 38/3, Mysore Road, near Subramanya Service Center, Nelamangala Village, Bangalore – 562123",
  },
  {
    id: 3,
    title: "Phuket, Thailand",
    image: "/assets/centers/phuket.png",
    contact: "Mr Kelly Cherkowski",
    phone: "+66 76 390 400",
    email: "thailand@ajpgroup.com",
    address:
      "Cherngtalay, Si Sunthon, Thalang District, Phuket 83110 (Launching 2025)",
  },
];

export default function PerformanceCenters() {
  return (
    <>
      <section className="bg-white py-16 px-4 md:px-10">
        <div className="max-w-7xl mx-auto mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold font-sans text-gray-900"
          >
            Our Performance Centers
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-gray-500 mt-2"
          >
            Strategically Located To Serve You Better.
          </motion.p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
  {centers.map((center, index) => (
    <motion.div
      key={center.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
      className="bg-[#1A1A1A] overflow-hidden shadow-lg group"
    >
      <div className="h-48 w-full overflow-hidden p-2">
        <img
          src={center.image}
          alt={center.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-5 text-gray-300 text-sm space-y-2">
        <h3 className="text-white text-lg font-semibold transition-colors duration-300 group-hover:text-blue-400">
          {center.title}
        </h3>

        <p>
          <span className="font-medium text-gray-400">Contact: </span>
          {center.contact}
        </p>

        <p>{center.phone}</p>
        <p>{center.email}</p>

        <p className="text-gray-400 text-xs leading-relaxed transition-colors duration-300 group-hover:text-blue-400">
          {center.address}
        </p>
      </div>
    </motion.div>
  ))}
</div>
      </section>
      
      <section className="bg-[#1a1a1a] py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold text-white"
          >
            Get In Touch
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-md text-sm md:text-base"
          >
            You are welcome to contact us with general inquiry through the form.
          </motion.p>
        </div>
      </section>
    </>
  );
}