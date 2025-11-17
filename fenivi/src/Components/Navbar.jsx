import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Knowledge Hub", path: "/knowledge-hub" },
    { name: "Events", path: "/events" },
    { name: "Courses", path: "/courses" },
    { name: "Contact Us", path: "/contact" },
  ];

  // 🔥 Get active page name for mobile header
  const getCurrentTitle = () => {
    const current = links.find((l) => l.path === location.pathname);
    return current ? current.name : "Menu";
  };

  return (
    <nav className="fixed w-full flex justify-center py-4 z-50">
      {/* DESKTOP NAVBAR (UNCHANGED) */}
      <div 
      className="hidden md:flex gap-8 ps-2 pe-2 px-10 py-2 
      bg-gradient-to-r from-gray-900 to-gray-800 bg-white/10 backdrop-blur-md 
      rounded-full shadow-lg border border-white/20
      
      ">
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`text-sm font-medium transition-all duration-300 px-5 py-2.5 rounded-full ${
              location.pathname === link.path
                ? "text-white bg-white/25 shadow-md scale-105"
                : "text-gray-300 hover:text-white hover:bg-white/10"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* MOBILE NAVBAR */}
      <div className="md:hidden w-full px-4 ">

        {/* 🔥 MOBILE HEADER WITH CENTERED ACTIVE TITLE */}
        <div className="relative flex items-center bg-gradient-to-r from-gray-900 to-gray-800 backdrop-blur-md border border-white/20 px-4 py-3 rounded-full">
          
          {/* Centered Title */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <span className="text-white text-lg font-semibold">
              {getCurrentTitle()}
            </span>
          </div>

          {/* Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="ml-auto text-gray-300 hover:text-white"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE DROPDOWN */}
        {open && (
          <div className="mt-3 flex flex-col gap-3 
              bg-gray-900/60 backdrop-blur-xl 
              p-4 rounded-xl border border-white/20">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setOpen(false)}
                className={`
                  text-sm font-medium transition-all duration-300 px-3 py-2 rounded-lg
                  ${
                    location.pathname === link.path
                      ? "text-white bg-white/20"
                      : "text-gray-200 hover:text-white hover:bg-white/10"
                  }
                `}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}

      </div>
    </nav>
  );
}
