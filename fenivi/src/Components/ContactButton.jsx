import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function ContactButton() {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = location.pathname === "/contact";

  return (
    <div className="fixed top-4 right-6 z-50">
      <div className="px-2 py-2 bg-gradient-to-r from-gray-900 to-gray-800 bg-white/10 backdrop-blur-md rounded-full shadow-lg border border-white/20">
        <button
          onClick={() => navigate("/contact")}
          className={`
            text-sm font-medium transition-all duration-300 px-5 py-2.5 rounded-full
            ${
              isActive
                ? "text-white bg-white/25 shadow-md scale-105"
                : "text-gray-300 hover:text-white hover:bg-white/10"
            }
          `}
        >
          Contact Us
        </button>
      </div>
    </div>
  );
}
