import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

const logos = [
    "/assets/logos/akra.png",
    "/assets/logos/f1.png",
   "/assets/logos/capr.png",
     "/assets/logos/akra.png",
    "/assets/logos/f1.png",
    "/assets/logos/vossn.png",
     "/assets/logos/capr.png",
]

export default function LogoSlider() {
    const containerRef = useRef(null)
    const [isMobile, setIsMobile] = useState(false)
    const [containerWidth, setContainerWidth] = useState(0)

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 768px)")
        setIsMobile(mediaQuery.matches)

        const handleResize = () => {
            if (containerRef.current) {
                setContainerWidth(containerRef.current.offsetWidth)
            }
        }

        handleResize()

        mediaQuery.addEventListener("change", (e) => setIsMobile(e.matches))
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return (
        <div className="flex flex-col gap-1">
            {/* Heading */}
            <h2 className="md:text-[32px] text-[20px] font-[Open Sans] font-bold text-black text-left m-0 leading-tight">
                Performance Tuning
            </h2>

            {/* Slider */}
            <div
                ref={containerRef}
                className="relative w-full overflow-hidden bg-white"
            >
                <motion.div
                    className="flex gap-10 w-max items-center"
                    animate={
                        isMobile
                            ? { x: [containerWidth, -containerWidth] }
                            : { x: [containerWidth, 0, 0, containerWidth] }
                    }
                    transition={
                        isMobile
                            ? {
                                  duration: 8,
                                  ease: "linear",
                                  repeat: Infinity,
                              }
                            : {
                                  duration: 14,
                                  ease: "linear",
                                  repeat: Infinity,
                                  times: [0, 0.45, 0.55, 1],
                              }
                    }
                >
                    {(isMobile ? [...logos, ...logos] : logos).map(
                        (logo, index) => (
                            <div
                                key={index}
                                className="w-40 h-20 flex items-center justify-center"
                            >
                                <img
                                    src={logo}
                                    alt="brand"
                                    className="max-w-full max-h-full object-cover"
                                />
                            </div>
                        )
                    )}
                </motion.div>
            </div>
        </div>
    )
}
