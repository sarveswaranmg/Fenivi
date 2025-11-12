import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const links = [
    { name: "Home", path: "/" },
        { name: "About", path: "/about" },
    { name: "Services", path: "/services" },

    { name: "Projects", path: "/projects" },
    { name: "Knowledge Hub", path: "/knowledge-hub" },
        { name: "Events", path: "/events" },
    { name: "Contact", path: "/contact" },

  ];

  return (
    <nav className="fixed w-full flex justify-center py-4 z-50 ">
      <div className="flex gap-8 px-10 py-2 pe-2 ps-2  bg-gradient-to-r from-gray-900 to-gray-800 bg-white/10 backdrop-blur-md rounded-full shadow-lg border border-white/20">
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`
              text-sm font-medium transition-all duration-300 px-5 py-2.5 rounded-full
              ${
                location.pathname === link.path
                  ? "text-white bg-white/25 shadow-md scale-105"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
              }
            `}>
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
