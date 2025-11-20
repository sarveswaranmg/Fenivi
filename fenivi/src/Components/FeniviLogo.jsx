import React from "react";

export default function FeniviLogo({ className = "" }) {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      {/* Main Logo Text */}
      <div className="flex items-center gap-1 mb-2">
        {/* F - Purple */}
        <span className="text-6xl font-bold text-purple-600">F</span>

        {/* e with magnifying glass - Teal */}
        <div className="relative">
          <span className="text-6xl font-bold text-teal-500">e</span>
          <svg
            className="absolute -top-2 -right-3 w-8 h-8 text-teal-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="6" />
            <line x1="21" y1="21" x2="16" y2="16" />
          </svg>
        </div>

        {/* nivi - Purple */}
        <span className="text-6xl font-bold text-purple-600">nivi</span>
      </div>

      {/* Subtitle */}
      <p className="text-sm text-gray-700 tracking-wide mb-1">
        Research Solutions Pvt. Ltd.
      </p>

      {/* Tagline with underline */}
      <div className="flex items-center gap-2 text-xs text-gray-600 font-medium">
        <span className="relative">
          Facilitate
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-500"></span>
        </span>
        <span className="text-gray-400">/</span>
        <span className="relative">
          Navigate
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-600"></span>
        </span>
        <span className="text-gray-400">/</span>
        <span className="relative">
          Validate
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-500"></span>
        </span>
      </div>
    </div>
  );
}
