import { FaInstagram, FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">

          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-3">
            <div>
              <h3 className="text-sm font-bold text-white tracking-tight">Fenivi Research Solutions</h3>
              <p className="text-[10px] text-gray-500 mt-0.5 uppercase tracking-widest">Policy · Research · Impact</p>
            </div>

            {/* Contact Details */}
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2">
                <MapPin size={12} className="mt-0.5 shrink-0 text-gray-600" />
                <div className="text-[11px] text-gray-500 leading-relaxed flex flex-col">
                  <span>9/56C, ISRO Road,</span>
                  <span>Kavalkinaru Junction,</span>
                  <span>Tirunelveli – 627105</span>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={12} className="shrink-0 text-gray-600" />
                <a href="tel:+918148699354" className="text-[11px] text-gray-500 hover:text-white transition-colors">
                  +91 81486 99354
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={12} className="shrink-0 text-gray-600" />
                <a href="mailto:feniviresearch@gmail.com" className="text-[11px] text-gray-500 hover:text-white transition-colors">
                  feniviresearch@gmail.com
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex items-center gap-2">
              <a href="https://www.instagram.com/fenivi2017/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center text-gray-500 hover:text-pink-400 hover:border-pink-400 transition-all">
                <FaInstagram size={14} />
              </a>
              <a href="https://www.facebook.com/Fenivi/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center text-gray-500 hover:text-blue-400 hover:border-blue-400 transition-all">
                <FaFacebookF size={14} />
              </a>
              <a href="https://www.linkedin.com/company/fenivi-research-solutions/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center text-gray-500 hover:text-sky-400 hover:border-sky-400 transition-all">
                <FaLinkedinIn size={14} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"
                className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center text-gray-500 hover:text-red-400 hover:border-red-400 transition-all">
                <FaYoutube size={14} />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[10px] font-semibold uppercase tracking-widest text-gray-600 mb-3">Company</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Projects", href: "/projects" },
                { label: "Contact Us", href: "/contact" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-xs text-gray-400 hover:text-white transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-[10px] font-semibold uppercase tracking-widest text-gray-600 mb-3">Resources</h4>
            <ul className="space-y-2">
              {[
                { label: "Knowledge Hub", href: "/knowledge-hub" },
                { label: "Events", href: "/events" },
                { label: "Courses", href: "/courses" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-xs text-gray-400 hover:text-white transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* External */}
          <div>
            <h4 className="text-[10px] font-semibold uppercase tracking-widest text-gray-600 mb-3">External</h4>
            <ul className="space-y-2">
              {[
                { label: "RWE Initiative", href: "https://realworldevidence.in/", external: true },
                { label: "LinkedIn", href: "https://www.linkedin.com/company/fenivi-research-solutions/", external: true },
                { label: "Admin Portal", href: "/admin" },
              ].map(({ label, href, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="text-xs text-gray-400 hover:text-white transition-colors"
                  >
                    {label}
                  </a>
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
