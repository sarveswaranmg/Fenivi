import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import newLogo from "../assets/New_Logo.png";

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services", hasDropdown: true },
    { name: "Projects", path: "/projects" },
    { name: "Knowledge Hub", path: "/knowledge-hub" },
    { name: "Events", path: "/events" },
    { name: "Courses", path: "/courses" },
    { name: "Contact Us", path: "/contact" },
  ];

  const serviceSections = [
    { name: "Research & Field Services", filter: "research" },
    { name: "Training & Education", filter: "training" },
    { name: "Startup Mentoring", filter: "startup" },
  ];

  // 🔥 Get active page name for mobile header
  const getCurrentTitle = () => {
    const current = links.find((l) => l.path === location.pathname);
    return current ? current.name : "Menu";
  };

  return (
    <nav className="fixed w-full bg-white shadow-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <img src={newLogo} alt="Fenivi Logo" className="h-20 xl:h-24 w-auto" />
        </Link>

        {/* DESKTOP NAVBAR - Right-aligned */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-4">
          {links.map((link) => (
            <div
              key={link.name}
              className="relative group"
              onMouseEnter={() => link.hasDropdown && setServicesDropdownOpen(true)}
              onMouseLeave={() => link.hasDropdown && setServicesDropdownOpen(false)}
            >
              <Link
                to={link.path}
                onClick={(e) => link.hasDropdown && e.preventDefault()}
                className={`text-sm xl:text-[15px] font-semibold transition-all duration-300 px-4 py-2 rounded-full whitespace-nowrap ${location.pathname === link.path && !link.hasDropdown
                  ? "text-purple-700 bg-purple-50"
                  : "text-gray-700 hover:text-purple-600 hover:bg-gray-50 uppercase tracking-wide"
                  }`}
              >
                {link.name}
              </Link>

              {/* Services Dropdown */}
              {link.hasDropdown && (
                <div
                  className={`absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-3 transition-all duration-300 ${servicesDropdownOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2 pointer-events-none"
                    }`}
                >
                  {serviceSections.map((section) => (
                    <Link
                      key={section.name}
                      to={`/services?filter=${section.filter}`}
                      className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                      onClick={() => setServicesDropdownOpen(false)}
                    >
                      {section.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* MOBILE/TABLET HEADER */}
        <div className="lg:hidden flex items-center w-full px-4 justify-between">
          <Link to="/" className="flex items-center">
            <img src={newLogo} alt="Fenivi Logo" className="h-12 w-auto" />
          </Link>

          <div className="flex items-center gap-4">
            <span className="text-gray-900 text-lg font-semibold lg:hidden">
              {getCurrentTitle()}
            </span>
            <button
              onClick={() => setOpen(!open)}
              className="text-gray-700 hover:text-purple-600"
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col p-4 gap-2">
            {links.map((link) => (
              <div key={link.name}>
                <Link
                  to={link.path}
                  onClick={(e) => {
                    if (link.hasDropdown) {
                      e.preventDefault();
                      setServicesDropdownOpen(!servicesDropdownOpen);
                    } else {
                      setOpen(false);
                    }
                  }}
                  className={`
                    flex items-center justify-between text-[15px] font-medium transition-all duration-300 px-4 py-3 rounded-xl
                    ${location.pathname === link.path && !link.hasDropdown
                      ? "text-purple-700 bg-purple-50"
                      : "text-gray-700 hover:bg-gray-50 uppercase tracking-wide"
                    }
                  `}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <div className="p-1 text-purple-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  )}
                </Link>

                {link.hasDropdown && servicesDropdownOpen && (
                  <div className="ml-6 flex flex-col gap-1 mt-1 pb-2">
                    {serviceSections.map((section) => (
                      <Link
                        key={section.name}
                        to={`/services?filter=${section.filter}`}
                        onClick={() => setOpen(false)}
                        className="text-sm text-gray-600 px-4 py-2.5 hover:text-purple-700 hover:bg-purple-50 rounded-lg"
                      >
                        {section.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
