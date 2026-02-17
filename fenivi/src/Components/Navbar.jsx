import React, { useState, useLayoutEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import gsap from "gsap";
import newLogo from "../assets/New_Logo.png";

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef([]);
  const mobileMenuRef = useRef(null);
  const indicatorRef = useRef(null);
  const servicesDropdownRef = useRef(null);

  // Handle click outside services dropdown
  React.useEffect(() => {
    function handleClickOutside(event) {
      if (
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target)
      ) {
        setServicesDropdownOpen(false);
      }
    }

    if (servicesDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [servicesDropdownOpen]);

  // Modern Sliding Pill Animation
  React.useEffect(() => {
    const activeIndex = links.findIndex(
      (link) => link.path === location.pathname,
    );
    const activeEl = linksRef.current[activeIndex];

    if (activeEl && indicatorRef.current) {
      // Get the link element (child of the wrapper) for precise measurement
      // We target the 'a' tag (first child) to match the padding/rounded shape perfectly
      const linkEl = activeEl.querySelector("a");

      if (linkEl) {
        gsap.to(indicatorRef.current, {
          width: linkEl.offsetWidth,
          height: linkEl.offsetHeight,
          x: activeEl.offsetLeft + linkEl.offsetLeft, // Account for any offset
          y: activeEl.offsetTop + linkEl.offsetTop,
          opacity: 1,
          duration: 0.5,
          ease: "elastic.out(1, 0.75)",
        });
      }
    } else if (indicatorRef.current) {
      // Hide if no match (optional: could stay on last active)
      gsap.to(indicatorRef.current, { opacity: 0, duration: 0.3 });
    }
  }, [location.pathname]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Navbar slide down
      gsap.from(navRef.current, {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      });

      // Logo fade in
      gsap.from(logoRef.current, {
        x: -20,
        opacity: 0,
        duration: 0.8,
        delay: 0.5,
        ease: "power2.out",
      });

      // Links staggered fade in
      gsap.from(linksRef.current, {
        y: -10,
        opacity: 0,
        stagger: 0.05,
        duration: 0.5,
        delay: 0.8,
        ease: "power2.out",
      });
    });

    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    if (open && mobileMenuRef.current) {
      gsap.fromTo(
        mobileMenuRef.current,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.4, ease: "power2.inOut" },
      );
    }
  }, [open]);

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
    <nav
      ref={navRef}
      className="fixed w-full bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100 z-50 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* LOGO - Hidden on mobile/tablet, shown on desktop */}
        <Link
          to="/"
          ref={logoRef}
          className="hidden lg:flex items-center shrink-0"
        >
          <img
            src={newLogo}
            alt="Fenivi Logo"
            className="h-10 lg:h-12 w-auto object-contain py-1"
          />
        </Link>

        {/* DESKTOP NAVBAR - Right-aligned and compact */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2 ml-auto relative">
          {/* Sliding Pill Indicator */}
          <div
            ref={indicatorRef}
            className="absolute rounded-full z-0 pointer-events-none"
            style={{ backgroundColor: "#eeeef7", height: "0px", width: "0px", opacity: 0 }}
          />

          {links.map((link, index) => (
            <div
              key={link.name}
              ref={(el) => {
                linksRef.current[index] = el;
                if (link.hasDropdown) {
                  servicesDropdownRef.current = el;
                }
              }}
              className="relative group z-10" // z-10 to stay above pill
            >
              <Link
                to={link.path}
                onClick={(e) => {
                  if (link.hasDropdown) {
                    e.preventDefault();
                    setServicesDropdownOpen(!servicesDropdownOpen);
                  }
                }}
                className={`text-[13px] xl:text-[14px] font-medium uppercase tracking-tight transition-all duration-300 px-3 py-2 rounded-full whitespace-nowrap flex items-center gap-1 ${
                  location.pathname === link.path && !link.hasDropdown
                    ? ""
                    : "text-gray-700"
                }`}
                style={
                  location.pathname === link.path && !link.hasDropdown
                    ? { color: "#30337A" }
                    : {}
                }
              >
                {link.name}
                {link.hasDropdown && (
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-300 ${servicesDropdownOpen ? "rotate-180" : ""}`}
                  />
                )}
              </Link>

              {/* Services Dropdown */}
              {link.hasDropdown && (
                <div
                  className={`absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-3 transition-all duration-300 ${
                    servicesDropdownOpen
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
            <img src={newLogo} alt="Fenivi Logo" className="h-12 w-auto py-1" />
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
        <div
          ref={mobileMenuRef}
          className="lg:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden"
        >
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
                    flex items-center justify-between text-[15px] font-medium transition-all duration-300 px-4 py-3 rounded-xl uppercase tracking-wide
                    ${
                      location.pathname === link.path && !link.hasDropdown
                        ? "bg-purple-50"
                        : "text-gray-700 hover:bg-gray-50"
                    }
                  `}
                  style={
                    location.pathname === link.path && !link.hasDropdown
                      ? { color: "#30337A" }
                      : {}
                  }
                >
                  {link.name}
                  {link.hasDropdown && (
                    <div className="p-1 text-purple-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-5 w-5 transition-transform ${servicesDropdownOpen ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
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
