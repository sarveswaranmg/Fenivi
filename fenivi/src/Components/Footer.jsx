import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#6A40B8] px-15 md:px-16 py-12 border-b-2 border-blue-500">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 max-w-7xl mx-auto items-center justify-center">
        {/* Column 1 - Company Info */}
        <div className="md:col-span-1 space-y-4">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white rounded grid grid-cols-2 gap-0.5 p-0.5">
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
            </div>
            <h2 className="text-white text-2xl font-sans font-medium">
              consulting
            </h2>
          </div>

          {/* Description */}
          <p className="text-[#E0CFFC] text-sm leading-relaxed font-sans">
            Industry-leading consulting firm with innovative solutions
          </p>

          {/* Social Media Icons */}
          <div className="flex gap-4 pt-2">
            {/* Facebook */}
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
              />
            </svg>

            {/* Twitter */}
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
              />
            </svg>

            {/* Instagram */}
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"
              />
            </svg>

            {/* YouTube */}
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
          </div>
        </div>

        {/* Column 2 - Company Links */}
        <div className="space-y-3">
          <h3 className="text-white text-base font-sans font-medium">
            Company
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="text-[#E0CFFC] text-sm font-sans hover:text-white transition-colors">
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#E0CFFC] text-sm font-sans hover:text-white transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#E0CFFC] text-sm font-sans hover:text-white transition-colors">
                Services
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 - Pages Links */}
        <div className="space-y-3">
          <h3 className="text-white text-base font-sans font-medium">Pages</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="text-[#E0CFFC] text-sm font-sans hover:text-white transition-colors">
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#E0CFFC] text-sm font-sans hover:text-white transition-colors">
                Contact
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#E0CFFC] text-sm font-sans hover:text-white transition-colors">
                404
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 - Services Links */}
        <div className="space-y-3">
          <h3 className="text-white text-base font-sans font-medium">
            Services
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="text-[#E0CFFC] text-sm font-sans hover:text-white transition-colors">
                Market research
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#E0CFFC] text-sm font-sans hover:text-white transition-colors">
                Strategic planning
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#E0CFFC] text-sm font-sans hover:text-white transition-colors">
                Financial advisory
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
