import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-6 px-6">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8">
        {/* Company Info */}
        <div className="col-span-2 sm:col-span-1 text-center md:text-left">
          <h3 className="text-base font-bold mb-2 text-white">Fenivi Research Solutions</h3>
          <p className="text-xs text-gray-400 mb-2 leading-relaxed">
            9/56C, ISRO Road,<br />
            Kavalkinaru Junction,<br />
            Tirunelveli District,<br />
            Tamil Nadu - 627105
          </p>
          <p className="text-gray-400 text-sm leading-relaxed mt-4">
            <span className="text-white font-semibold">Admin Address:</span><br />
            No 68, svastika star apartment,<br />
            A Block G1 House, Krishnaveni Ammal Nagar,<br />
            Iyyapanthangal, Chennai - 600056
          </p>
          <div className="flex space-x-3 text-lg justify-center md:justify-start mt-2">
            <a
              href="https://www.instagram.com/fenivi2017/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-gray-400 hover:text-pink-400 transition-colors duration-300">
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/Fenivi/?d=%7B%22u%22%3A100005858536869%2C%22f%22%3A1305728356435516%2C%22t%22%3A1763037625%2C%22ed%22%3A[]%7D&s=AWUfivayLGx3e0UpLkQ"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
              <FaFacebookF />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-gray-400 hover:text-red-400 transition-colors duration-300">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Column 1 - Company */}
        <div className="text-center md:text-left">
          <h4 className="text-xs font-bold mb-2 text-white uppercase tracking-wider">Company</h4>
          <ul className="space-y-1.5">
            <li>
              <a
                href="/"
                className="text-xs text-gray-400 hover:text-white transition-colors duration-300">
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="text-xs text-gray-400 hover:text-white transition-colors duration-300">
                About Us
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="text-xs text-gray-400 hover:text-white transition-colors duration-300">
                Services
              </a>
            </li>
            <li>
              <a
                href="/projects"
                className="text-xs text-gray-400 hover:text-white transition-colors duration-300">
                Projects
              </a>
            </li>
          </ul>
        </div>

        {/* Column 2 - Resources */}
        <div className="text-center md:text-left">
          <h4 className="text-xs font-bold mb-2 text-white uppercase tracking-wider">Resources</h4>
          <ul className="space-y-1.5">
            <li>
              <a
                href="/knowledge-hub"
                className="text-xs text-gray-400 hover:text-white transition-colors duration-300">
                Knowledge Hub
              </a>
            </li>
            <li>
              <a
                href="/events"
                className="text-xs text-gray-400 hover:text-white transition-colors duration-300">
                Events
              </a>
            </li>
            <li>
              <a
                href="/courses"
                className="text-xs text-gray-400 hover:text-white transition-colors duration-300">
                Courses
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 - Links */}
        <div className="text-center md:text-left">
          <h4 className="text-xs font-bold mb-2 text-white uppercase tracking-wider">Links</h4>
          <ul className="space-y-1.5">
            <li>
              <a
                href="https://realworldevidence.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-400 hover:text-white transition-colors duration-300">
                RWE Initiative
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/fenivi-research-solutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-400 hover:text-white transition-colors duration-300">
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-xs text-gray-400 hover:text-white transition-colors duration-300">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 - Contact */}
        <div className="text-center md:text-left">
          <h4 className="text-xs font-bold mb-2 text-white uppercase tracking-wider">Contact</h4>
          <ul className="space-y-1.5">
            <li>
              <a
                href="mailto:demo@fenivi.com"
                className="text-xs text-gray-400 hover:text-white transition-colors duration-300">
                Email Us
              </a>
            </li>
            <li>
              <a
                href="tel:+918148699354"
                className="text-xs text-gray-400 hover:text-white transition-colors duration-300">
                +91 98402 87857
              </a>
            </li>
            <li>
              <a
                href="/admin"
                className="text-xs text-gray-400 hover:text-white transition-colors duration-300">
                Admin Portal
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto mt-4 pt-3 border-t border-gray-700">
        <p className="text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Fenivi Research Solutions Pvt. Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
