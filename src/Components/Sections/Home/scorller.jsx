import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const products = [
  { title: "Key Chain Holder", price: "190 ₹ ", image: "/assets/products/prod1.jpg" },
  { title: "Face masks", price: "50 ₹", image: "/assets/products/prod2.jpg" },
  { title: "Bags", price: "150 ₹", image: "/assets/products/prod3.jpg" },
  { title: " T-Shirts", price: "750 ₹", image: "/assets/products/prod4.jpg" },
    { title: "Key Chain Holder", price: "190 ₹ ", image: "/assets/products/prod1.jpg" },
  { title: "Face masks", price: "50 ₹", image: "/assets/products/prod2.jpg" },
  { title: "Bags", price: "150 ₹", image: "/assets/products/prod3.jpg" },
  { title: " T-Shirts", price: "750 ₹", image: "/assets/products/prod4.jpg" },

]

const CARD_WIDTH = 280 // card width + gap

export default function OurAccessories() {
  const [index, setIndex] = useState(0)

  const maxIndex = products.length - 4 // visible cards on desktop

  const next = () => {
    if (index < maxIndex) setIndex(index + 1)
  }

  const prev = () => {
    if (index > 0) setIndex(index - 1)
  }

  return (
    <section className="relative z-20 bg-[#1A1A1A] py-14">
      <div className="max-w-screen-xl mx-auto px-6 relative">

        {/* Header */}
        <h2 className="text-white text-2xl md:text-4xl font-semibold mb-6">
          Our Accessories
        </h2>

        {/* Left Arrow */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/70 border border-gray-600 flex items-center justify-center text-white hover:bg-[#ba1e1e] hover:text-black transition disabled:opacity-40"
          disabled={index === 0}
        >
          <ChevronLeft size={18} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/70 border border-gray-600 flex items-center justify-center text-white hover:bg-[#ba1e1e] hover:text-black transition disabled:opacity-40"
          disabled={index === maxIndex}
        >
          <ChevronRight size={18} />
        </button>

        {/* Viewport */}
        <div className="overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${index * CARD_WIDTH}px)`,
            }}
          >
            {products.map((item, i) => (
              <div
                key={i}
                className="min-w-[260px] bg-[#1a1a1a] border border-[#2a2a2a]"
              >
                <div className="h-[170px] bg-[#e5e5e5] flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-h-full object-contain"
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-white text-sm mb-1">
                    {item.title}
                  </h3>

                  <div className="flex items-center justify-between">
                    <span className="text-[#C9A24D] font-semibold text-base">
                      {item.price}
                    </span>

                    <button className="bg-[#ba1e1e] text-black text-xs px-3 py-1 ] transition">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
