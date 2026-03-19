import { useState } from "react"
import { Menu, X, Home } from "lucide-react"
import { Link } from "react-router-dom"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const leftNavItems = [
    { label: "Projects", path: "/projects" },
    { label: "Performance", path: "/performance" },
    { label: "Mechanical", path: "/mechanical" },
    // { label: "Detailing", path: "/detailing" },
  ]

  const rightNavItems = [
    // { label: "Restoration", path: "/restoration" },
    { label: "Paint Shop", path: "/paint-shop" },
    { label: "Blog", path: "/blog" },
    { label: "About", path: "/about-us" },
    { label: "Contact Us", path: "/contact-us" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

      <nav className="relative px-6 lg:px-12">
        {/* DESKTOP NAV */}
        <div className="h-20 hidden md:grid grid-cols-[1fr_auto_1fr] items-center">

          {/* LEFT NAV */}
          <div className="flex justify-end gap-6 pr-10">
            {leftNavItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="text-white hover:text-yellow-400 transition"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* LOGO — home button */}
          <Link to="/" aria-label="Home">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-10 h-12 object-contain hover:opacity-80 transition"
            />
          </Link>

          {/* RIGHT NAV */}
          <div className="flex justify-start gap-6 pl-10">
            {rightNavItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="text-white hover:text-yellow-400 transition"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* MOBILE HEADER */}
        <div className="flex md:hidden items-center justify-between h-16">
          <Link to="/" aria-label="Home">
            <img src="/logo.png" className="w-8 h-8 hover:opacity-80 transition" alt="Logo" />
          </Link>

          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="md:hidden bg-black/40 mt-2 rounded-lg p-4 space-y-2">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 text-white py-2 hover:text-yellow-400"
            >
              <Home className="w-4 h-4" />
              Home
            </Link>
            {[...leftNavItems, ...rightNavItems].map((item) => (
              <Link
                key={item.label}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="block text-white py-2 hover:text-yellow-400"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
