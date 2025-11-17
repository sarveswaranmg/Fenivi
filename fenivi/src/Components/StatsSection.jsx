import React from "react";

const StatsSection = () => {
  // Trophy Icon SVG
  const TrophyIcon = () => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#00BFFF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-3"
    >
      <path d="M6 9H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2"></path>
      <path d="M18 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2"></path>
      <path d="M6 9v9a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9"></path>
      <path d="M12 16v2"></path>
      <path d="M9 18h6"></path>
      <circle cx="12" cy="8" r="2"></circle>
    </svg>
  );

  // Star Icon SVG
  const StarIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#00BFFF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
  );

  // Double Star Icon SVG (for emphasis - award badge style)
  const DoubleStarIcon = () => (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#00BFFF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="relative"
    >
      {/* Outer star */}
      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
        fill="none"
        stroke="#00BFFF"
        strokeWidth="1.5"
        opacity="0.8"
      />
      {/* Inner star (smaller, offset slightly) */}
      <polygon
        points="12 5 14.18 9.13 18.5 9.75 15.25 12.87 16.09 17.25 12 14.88 7.91 17.25 8.75 12.87 5.5 9.75 9.82 9.13 12 5"
        fill="none"
        stroke="#00BFFF"
        strokeWidth="1.5"
      />
    </svg>
  );

  return (
    <section className="w-full mt-30 mb-30  py-24 px-8 flex items-center justify-center bg-transparent overflow-visible ">
      <div className="relative flex flex-col md:flex-row items-center gap-2 justify-center max-w-5xl mx-auto">
        {/* Left Card - Dark Blue with 5+ yrs experience */}
        <div
          className="relative w-75 h-48 bg-[#1A202C] text-white rounded-2xl flex flex-col justify-center items-center transition-all duration-500 ease-out hover:-translate-y-4 hover:scale-105 mb-6 md:mb-0 md:-mr-8"
          style={{
            transform: "rotate(5deg)",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
            zIndex: 1,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform =
              "rotate(7deg) translateY(-16px) scale(1.05)";
            e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.25)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "rotate(5deg)";
            e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.15)";
          }}
        >
          <h2 className="text-5xl font-bold mb-1">8+</h2>
          <p className="text-base font-normal text-white mb-2">
            yrs experience
          </p>
          <TrophyIcon />
        </div>

        {/* Middle Card - Geometric Pattern */}
        <div
          className="relative w-75 h-48 rounded-2xl overflow-hidden transition-all duration-500 ease-out hover:-translate-y-4 hover:scale-105 my-6 md:my-0"
          style={{
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
            zIndex: 3,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-16px) scale(1.05)";
            e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.25)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0) scale(1)";
            e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.15)";
          }}
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 256 192"
            className="absolute inset-0"
            preserveAspectRatio="none"
          >
            {/* Base background */}
            <rect width="256" height="192" fill="#F5F8FA" />

            {/* Grid of squares and triangles */}
            {[...Array(8)]
              .map((_, i) =>
                [...Array(6)].map((_, j) => {
                  const x = i * 32;
                  const y = j * 32;
                  const patternType = (i + j) % 4;

                  if (patternType === 0) {
                    // Solid color squares
                    return (
                      <rect
                        key={`${i}-${j}`}
                        x={x}
                        y={y}
                        width="32"
                        height="32"
                        fill={j % 2 === 0 ? "#4A90E2" : "#6BB3FF"}
                        opacity="0.8"
                      />
                    );
                  } else if (patternType === 1) {
                    // Diagonal split triangles
                    return (
                      <g key={`${i}-${j}`}>
                        <polygon
                          points={`${x},${y} ${x + 32},${y} ${x + 32},${
                            y + 32
                          }`}
                          fill="#87CEEB"
                        />
                        <polygon
                          points={`${x},${y} ${x},${y + 32} ${x + 32},${
                            y + 32
                          }`}
                          fill="#B0E0E6"
                        />
                      </g>
                    );
                  } else if (patternType === 2) {
                    // White squares with blue borders
                    return (
                      <g key={`${i}-${j}`}>
                        <rect
                          x={x}
                          y={y}
                          width="32"
                          height="32"
                          fill="#ffffff"
                        />
                        <rect
                          x={x}
                          y={y}
                          width="32"
                          height="32"
                          fill="none"
                          stroke="#4A90E2"
                          strokeWidth="1"
                        />
                      </g>
                    );
                  } else {
                    // Diagonal stripes
                    return (
                      <g key={`${i}-${j}`}>
                        <rect
                          x={x}
                          y={y}
                          width="32"
                          height="32"
                          fill={i % 2 === 0 ? "#E0F2F7" : "#ffffff"}
                        />
                        <line
                          x1={x}
                          y1={y}
                          x2={x + 32}
                          y2={y + 32}
                          stroke="#4A90E2"
                          strokeWidth="1.5"
                        />
                        <line
                          x1={x}
                          y1={y + 16}
                          x2={x + 32}
                          y2={y + 48}
                          stroke="#6BB3FF"
                          strokeWidth="1"
                          opacity="0.6"
                        />
                      </g>
                    );
                  }
                })
              )
              .flat()}

            {/* Additional geometric accents */}
            <polygon points="0,0 64,0 32,32" fill="#4682B4" opacity="0.5" />
            <polygon
              points="192,0 256,0 256,32 224,32"
              fill="#5F9EA0"
              opacity="0.6"
            />
            <polygon
              points="128,64 160,96 96,96"
              fill="#87CEEB"
              opacity="0.7"
            />
            <polygon
              points="192,128 256,128 224,160"
              fill="#B0E0E6"
              opacity="0.8"
            />
            <polygon
              points="0,160 32,128 64,160"
              fill="#4682B4"
              opacity="0.5"
            />
          </svg>
        </div>

        {/* Right Card - Dark Blue with Achievement */}
        <div
          className="relative w-75 h-48 bg-[#1A202C] text-white rounded-2xl flex flex-col justify-center items-start px-15 transition-all duration-500 ease-out mt-6 md:mt-0 md:-ml-8"
          style={{
            transform: "rotate(-5deg)",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
            zIndex: 1,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform =
              "rotate(-7deg) translateY(-16px) scale(1.05)";
            e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.25)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "rotate(-5deg)";
            e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.15)";
          }}
        >
          <h2 className="text-2xl font-bold mb-3 w-full text-left">
            Achievement
          </h2>
          <p className="text-sm font-normal text-white mb-1 leading-relaxed w-full text-left">
            Recognized for innovation teamwork
          </p>
          <p className="text-sm font-normal text-white mb-4 leading-relaxed w-full text-left">
            Successfully launched 10+ major projects
          </p>
          <div className="absolute bottom-4 left-6 right-6 flex justify-between items-center">
            <StarIcon />
            <DoubleStarIcon />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
