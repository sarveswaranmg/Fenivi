import { FaInstagram, FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-y-10 gap-x-6 sm:gap-8">

          {/* Brand Column - Full width on mobile */}
          <div className="col-span-2 lg:col-span-2 flex flex-col items-center text-center lg:items-start lg:text-left space-y-4">
            <div>
              <h3 className="text-base font-bold text-white tracking-tight">Fenivi Research Solutions</h3>
              <p className="text-[10px] text-gray-500 mt-1 uppercase tracking-widest">Policy · Research · Impact</p>
            </div>

            {/* Contact Details */}
            <ul className="space-y-2.5 flex flex-col items-center lg:items-start">
              <li className="flex items-start lg:items-start gap-2.5">
                <MapPin size={13} className="mt-0.5 shrink-0 text-gray-600" />
                <div className="text-[11px] text-gray-500 leading-relaxed flex flex-col">
                  <span>9/56C, ISRO Road,</span>
                  <span>Kavalkinaru Junction,</span>
                  <span>Tirunelveli – 627105</span>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={13} className="shrink-0 text-gray-600" />
                <a href="tel:+918148699354" className="text-[11px] text-gray-500 hover:text-white transition-colors">
                  +91 81486 99354
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={13} className="shrink-0 text-gray-600" />
                <a href="mailto:feniviresearch@gmail.com" className="text-[11px] text-gray-500 hover:text-white transition-colors">
                  feniviresearch@gmail.com
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <a href="https://www.instagram.com/fenivi2017/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-gray-800 flex items-center justify-center text-gray-500 hover:text-pink-400 hover:border-pink-400 transition-all bg-gray-950">
                <FaInstagram size={15} />
              </a>
              <a href="https://www.facebook.com/Fenivi/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-gray-800 flex items-center justify-center text-gray-500 hover:text-blue-400 hover:border-blue-400 transition-all bg-gray-950">
                <FaFacebookF size={15} />
              </a>
              <a href="https://www.linkedin.com/company/fenivi-research-solutions/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className="w-9 h-9 rounded-full border border-gray-800 flex items-center justify-center text-gray-500 hover:text-sky-400 hover:border-sky-400 transition-all bg-gray-950">
                <FaLinkedinIn size={15} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"
                className="w-9 h-9 rounded-full border border-gray-800 flex items-center justify-center text-gray-500 hover:text-red-400 hover:border-red-400 transition-all bg-gray-950">
                <FaYoutube size={15} />
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="col-span-1">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">Company</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Projects", href: "/projects" },
                { label: "Contact Us", href: "/contact" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link to={href} className="text-xs text-gray-500 hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">Resources</h4>
            <ul className="space-y-3">
              {[
                { label: "Knowledge Hub", href: "/knowledge-hub" },
                { label: "Events", href: "/events" },
                { label: "Courses", href: "/courses" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link to={href} className="text-xs text-gray-500 hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* External - Full width or careful wrap on mobile */}
          <div className="col-span-2 lg:col-span-1">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">Registry & Legal</h4>
            <ul className="grid grid-cols-2 lg:grid-cols-1 gap-y-3 gap-x-4">
              {[
                { label: "RWE Initiative", href: "https://realworldevidence.in/", external: true },
                { label: "LinkedIn", href: "https://www.linkedin.com/company/fenivi-research-solutions/", external: true },
                { label: "Terms & Conditions", href: "/terms" },
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Refund Policy", href: "/refund-policy" },
              ].map(({ label, href, external }) => (
                <li key={label} className="col-span-1">
                  {external ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-gray-500 hover:text-white transition-colors"
                    >
                      {label}
                    </a>
                  ) : (
                    <Link
                      to={href}
                      className="text-xs text-gray-500 hover:text-white transition-colors"
                    >
                      {label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800/60 max-w-7xl mx-auto px-6 py-3">
        <p className="text-center text-[10px] text-gray-700">
          © {new Date().getFullYear()} Fenivi Research Solutions Pvt. Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
