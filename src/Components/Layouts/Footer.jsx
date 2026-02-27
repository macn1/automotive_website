import { Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#0e0e0e] text-gray-400 px-6 md:px-20 py-20">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12">

        {/* Brand / Left Section */}
        <div className="space-y-4 md:col-span-1">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-[#C9A24D] flex items-center justify-center">
              <img
                src="/logo.png"
                alt="AJP Group Logo"
                className="w-6 h-6 object-contain"
              />
            </div>

            <h3 className="text-white font-medium tracking-wide">
              AJP GROUP
            </h3>
          </div>

          <p className="text-sm leading-relaxed">
            All rights reserved, a registered, <br />
            trademarked company established in 2010.
          </p>

          <p className="text-xs text-gray-500 pt-6">
            AJP GROUP. © All rights reserved 2022–2023
            <br />
            Privacy Policy · Terms of Service
          </p>
        </div>

        {/* Discover */}
        {/* Center Sections */}
        <div className="md:col-span-3 flex flex-col md:flex-row justify-center gap-10 md:gap-20">
          {/* Discover */}
          <div>
            <h4 className="text-white text-sm font-medium mb-4">DISCOVER</h4>
            <ul className="space-y-2 text-sm">
              <li>Mechanical</li>
              <li>Paint Shop</li>
              <li>Detailing</li>
              <li>Restorations</li>
              <li>Tuning</li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="text-white text-sm font-medium mb-4">GET IN TOUCH</h4>
            <ul className="space-y-2 text-sm">
              <li>Find a Dealer</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-white text-sm font-medium mb-4">INFORMATION</h4>
            <ul className="space-y-2 text-sm">
              <li>Imprint</li>
              <li>Blog</li>
              <li>About Us</li>
              <li>Terms</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

        </div>


        {/* Social Media */}
        <div>
          <h4 className="text-white text-sm font-medium mb-4">SOCIAL MEDIA</h4>

          <div className="flex gap-4 mb-6">
            <a
              href="https://www.instagram.com/ajperformanceofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-gray-600 flex items-center justify-center hover:border-[#C9A24D] transition"
              aria-label="AJP Performance Instagram"
            >
              <Instagram size={16} />
            </a>

            <a
              href="https://www.youtube.com/channel/UC7dkWWaeEiyEvilU5R8dVcQ"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-gray-600 flex items-center justify-center hover:border-[#C9A24D] transition"
              aria-label="AJP Performance YouTube"
            >
              <Youtube size={16} />
            </a>
          </div>


          <p className="text-xs mb-3">Proud supporters of:</p>
          <div className="flex items-center gap-3 opacity-70">
            <img
              src="/assets/logos/img1.png"
              alt="Partner logo 1"
              className="w-10 h-12  md:w-12 md:h-10  object-contain"
            />
            <img
              src="/assets/logos/img2.png"
              alt="Partner logo 2"
              className="w-6 h-6  md:w-12 md:h-10  object-contain"
            />
            <img
              src="/assets/logos/img3.png"
              alt="Partner logo 3"
              className="w-6 h-6 md:w-12 md:h-10 object-contain"
            />
            <img
              src="/assets/logos/img4.png"
              alt="Partner logo 4"
              className="w-12 h-10 object-contain"
            />
          </div>

        </div>

      </div>
    </footer>
  )
}
