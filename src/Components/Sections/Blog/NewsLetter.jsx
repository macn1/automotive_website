import { useState } from "react";
import { motion } from "framer-motion";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [hovering, setHovering] = useState(false);

  const handleSubscribe = () => {
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail("");
    }
  };

  return (
    <motion.section 
      className="relative w-full overflow-hidden bg-gray-950 py-20 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 1 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
          }
        }
      }}
    >
      {/* Grid background with fade in */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Decorative blobs with floating animation */}
      <motion.div 
        className="absolute top-6 left-10 w-14 h-14 rounded-full bg-cyan-400 opacity-90"
        animate={{ 
          y: [0, -10, 0],
          x: [0, 5, 0]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut" 
        }}
      />
      
      <motion.div 
        className="absolute bottom-0 left-0 w-36 h-36 rounded-full bg-pink-300 opacity-80 translate-y-12 -translate-x-6"
        animate={{ 
          y: [0, -15, 0],
          x: [0, 10, 0]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity,
          repeatType: "reverse",
          delay: 0.5,
          ease: "easeInOut" 
        }}
      />
      
      <motion.div 
        className="absolute top-6 right-8 w-20 h-16 rounded-md bg-pink-300 opacity-80"
        animate={{ 
          rotate: [0, 5, -5, 0],
          y: [0, -8, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut" 
        }}
      />
      
      <motion.div 
        className="absolute bottom-8 right-10 w-12 h-12 rounded-md bg-cyan-300 opacity-80"
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          rotate: { duration: 8, repeat: Infinity, ease: "linear" },
          scale: { duration: 3, repeat: Infinity, repeatType: "reverse" }
        }}
      />

      
 

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-xl mx-auto">
        {/* Mail Icon - Original Version Without Animation */}
        <div
          className="mail-icon relative mb-6 cursor-pointer"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          {/* Glow ring */}
          <div
            className="mail-glow absolute inset-0 rounded-2xl blur-xl"
            style={{
              background: "radial-gradient(ellipse, rgba(99,179,237,0.35) 0%, rgba(236,72,153,0.15) 60%, transparent 80%)",
              transform: "scale(1.8)",
            }}
          />

          {/* Icon card */}
          <div
            className="relative flex items-center justify-center rounded-2xl"
            style={{
              width: 72,
              height: 72,
              background: "linear-gradient(145deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 100%)",
              border: "1px solid rgba(255,255,255,0.15)",
              boxShadow: hovering
                ? "0 0 32px rgba(99,179,237,0.4), 0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.2)"
                : "0 0 16px rgba(99,179,237,0.15), 0 8px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
              backdropFilter: "blur(12px)",
              transition: "box-shadow 0.3s ease, transform 0.3s ease",
              transform: hovering ? "scale(1.08)" : "scale(1)",
            }}
          >
            {/* SVG Mail */}
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Envelope body */}
              <rect x="2" y="4" width="20" height="16" rx="2" fill="url(#envGrad)" />
              {/* Envelope flap */}
              <path
                d="M2 7l10 7 10-7"
                stroke="rgba(255,255,255,0.9)"
                strokeWidth="1.5"
                strokeLinecap="round"
                fill="none"
              />
              {/* Shine */}
              <rect x="3" y="5" width="8" height="2" rx="1" fill="rgba(255,255,255,0.15)" />
              <defs>
                <linearGradient id="envGrad" x1="2" y1="4" x2="22" y2="20" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#60a5fa" />
                  <stop offset="50%" stopColor="#818cf8" />
                  <stop offset="100%" stopColor="#c084fc" />
                </linearGradient>
              </defs>
            </svg>

          </div>

          {/* Orbiting sparkle */}
          <div
            className="absolute"
            style={{
              top: -6,
              right: -8,
              width: 10,
              height: 10,
              animation: "spin-slow 4s linear infinite",
              transformOrigin: "5px 5px",
            }}
          >
            <svg width="10" height="10" viewBox="0 0 10 10">
              <path d="M5 0L5.8 4.2L10 5L5.8 5.8L5 10L4.2 5.8L0 5L4.2 4.2Z" fill="#f97316" />
            </svg>
          </div>
        </div>

        <motion.h2 
          className="text-white text-3xl font-bold mb-3 tracking-tight"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { type: "spring", damping: 15 }
            }
          }}
        >
          Subscribe to our newsletter.
        </motion.h2>

        <motion.p 
          className="text-gray-400 text-sm mb-8"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { type: "spring", damping: 15, delay: 0.1 }
            }
          }}
        >
          Get the latest updates, insights, and tips delivered straight to your inbox.
        </motion.p>

        {/* Input + Button */}
        <motion.div 
          className="flex w-full max-w-md shadow-lg"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { type: "spring", damping: 15, delay: 0.2 }
            }
          }}
        >
          <motion.input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
            className="flex-1 px-4 py-3 bg-white text-gray-800 text-sm outline-none placeholder-gray-400 rounded-l-sm"
            whileFocus={{ scale: 1.02, boxShadow: "0 0 0 2px rgba(234, 179, 8, 0.3)" }}
            transition={{ type: "spring", damping: 20 }}
          />
          
          <motion.button
            onClick={handleSubscribe}
            className="bg-red-600 text-white font-semibold text-sm px-6 py-3 rounded-r-sm whitespace-nowrap"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "#dc2626",
              boxShadow: "0 10px 25px -5px rgba(220, 38, 38, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            animate={subscribed ? {
              backgroundColor: "#16a34a",
              transition: { duration: 0.3 }
            } : {}}
          >
            {subscribed ? (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring" }}
              >
                ✓ Subscribed!
              </motion.span>
            ) : (
              "Subscribe"
            )}
          </motion.button>
        </motion.div>
      </div>

      {/* Keep the CSS animations for the mail icon */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes shimmer {
          0% { opacity: 0.6; }
          50% { opacity: 1; }
          100% { opacity: 0.6; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .mail-icon {
          animation: float 3s ease-in-out infinite;
        }
        .mail-glow {
          animation: shimmer 2s ease-in-out infinite;
        }
      `}</style>
    </motion.section>
  );
}