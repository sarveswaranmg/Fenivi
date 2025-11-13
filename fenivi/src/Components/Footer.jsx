import { useNavigate } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-purple-700 text-white py-12 px-6">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-4 md:gap-0">
          <h2 className="text-2xl md:text-3xl font-semibold text-center md:text-left">
            Ready to transform your business
          </h2>
          <button
            onClick={() => {
              navigate("/contact");
              window.scrollTo(0, 0);
            }}
            className="border-2 border-white text-white rounded-full px-8 py-3 hover:bg-white hover:text-purple-700 transition-all duration-300 font-medium"
          >
            Get started
          </button>
        </div>
        <div className="h-[1px] bg-white/30 mt-8 mb-10 w-full"></div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
        {/* Company Info */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold mb-3">Fenivi Solutions</h3>
          <p className="text-sm text-white/80 mb-6 leading-relaxed">
            Address of the company
          </p>
          <div className="flex space-x-5 text-2xl justify-center md:justify-start">
            <a
              href="https://www.instagram.com/fenivi2017/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-pink-300 transition-colors duration-300 hover:scale-110 transform"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/Fenivi/?d=%7B%22u%22%3A100005858536869%2C%22f%22%3A1305728356435516%2C%22t%22%3A1763037625%2C%22ed%22%3A[]%7D&s=AWUfivayLGx3e0UpLkQ"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-blue-300 transition-colors duration-300 hover:scale-110 transform"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="hover:text-red-300 transition-colors duration-300 hover:scale-110 transform"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Column 1 - Quick Links */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-3">
            <li>
              <a
                href="/"
                className="text-white/80 hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="text-white/80 hover:text-white transition-colors duration-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="text-white/80 hover:text-white transition-colors duration-300"
              >
                Services
              </a>
            </li>
          </ul>
        </div>

        {/* Column 2 - Resources */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold mb-4">Resources</h4>
          <ul className="space-y-3">
            <li>
              <a
                href="/knowledge-hub"
                className="text-white/80 hover:text-white transition-colors duration-300"
              >
                Knowledge Hub
              </a>
            </li>
            <li>
              <a
                href="/events"
                className="text-white/80 hover:text-white transition-colors duration-300"
              >
                Events
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors duration-300"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-white/80 hover:text-white transition-colors duration-300"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
