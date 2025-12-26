import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import newLogo from "../assets/New_Logo.png";

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
    <nav className="fixed w-full flex items-center justify-between px-12 lg:px-20 xl:px-24 py-2 z-50">
      {/* LOGO - Outside the navbar bar */}
      <Link to="/" className="hidden lg:flex items-center">
        <img src={newLogo} alt="Fenivi Logo" className="h-14 xl:h-24 w-auto" />
      </Link>

      {/* DESKTOP NAVBAR - Centered navigation items */}
      <div
        className="hidden lg:flex gap-3 xl:gap-5 ps-2 pe-2 py-2
      bg-white/95 backdrop-blur-md
      rounded-full shadow-lg border border-gray-200
      absolute left-1/2 -translate-x-1/2
      ">
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`text-xs xl:text-sm font-medium transition-all duration-300 px-3 xl:px-4 py-2 rounded-full whitespace-nowrap ${location.pathname === link.path
                ? "text-white shadow-md scale-105 animate-gradient-premium"
                : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
              }`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* MOBILE/TABLET NAVBAR */}
      <div className="lg:hidden w-full px-4">

        {/* 🔥 MOBILE HEADER WITH CENTERED ACTIVE TITLE */}
        <div className="relative flex items-center bg-white/95 backdrop-blur-md border border-gray-200 px-4 py-3 rounded-full shadow-lg">

          {/* Centered Title */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <span className="text-gray-900 text-lg font-semibold">
              {getCurrentTitle()}
            </span>
          </div>

          {/* Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="ml-auto text-gray-700 hover:text-purple-600"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE DROPDOWN */}
        {open && (
          <div className="mt-3 flex flex-col gap-3 
              bg-white/95 backdrop-blur-xl 
              p-4 rounded-xl border border-gray-200 shadow-lg">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setOpen(false)}
                className={`
                  text-sm font-medium transition-all duration-300 px-3 py-2 rounded-lg
                  ${location.pathname === link.path
                    ? "text-white animate-gradient-premium"
                    : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
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
