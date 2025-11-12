// src/Components/KeyResponsibilities.jsx
import React, { useState } from "react";

export default function KeyResponsibilities() {
  const [activeIndex, setActiveIndex] = useState(0);

  const responsibilities = [
    {
      title: "Research & Evidence Generation",
      description:
        "We conduct in-depth studies and evaluations across hydrology, health, and social sectors to provide data-backed insights for policy and community action.",
    },
    {
      title: "Sustainability & Impact Planning",
      description:
        "Our experts develop long-term frameworks that integrate environmental, social, and economic sustainability into projects and policy recommendations.",
    },
    {
      title: "Collaboration & Capacity Building",
      description:
        "We enable knowledge sharing through conferences, workshops, and stakeholder engagement to promote data-driven governance and innovation.",
    },
    {
      title: "Technology Integration",
      description:
        "By leveraging GIS, data visualization, and AI tools, we make complex information accessible and actionable for real-world implementation.",
    },
    {
      title: "Community Partnerships",
      description:
        "We engage with grassroots organizations and local governments to co-develop sustainable solutions tailored to specific regional needs.",
    },
    {
      title: "Policy Advocacy & Implementation",
      description:
        "Our insights are translated into actionable frameworks that influence evidence-based policies and large-scale program implementations.",
    },
  ];

  return (
    <section className="w-full bg-white py-20 px-6 md:px-16 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-14">
          Our Key Responsibilities
        </h2>

        {/* === Full-width timeline with dots === */}
        <div className="relative w-screen left-1/2 right-1/2 -translate-x-1/2 flex justify-center items-center mb-20">
          <div className="relative w-full max-w-7xl flex justify-between items-center">
            {/* Base line (gray) */}
            <div className="absolute top-1/2 left-0 right-0 h-[3px] bg-gray-200 z-0" />

            {/* Growing gradient line */}
            <div
              className="absolute top-1/2 left-0 h-[3px] bg-gradient-to-r from-purple-600 to-indigo-600 transition-all duration-700 ease-out z-0"
              style={{
                width:
                  activeIndex === 0
                    ? "0%"
                    : `${(activeIndex / (responsibilities.length - 1)) * 100}%`,
              }}
            />

            {/* Dots */}
            {responsibilities.map((_, i) => (
              <div
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`relative z-10 w-6 h-6 rounded-full cursor-pointer flex items-center justify-center transition-all duration-300
                  ${
                    i <= activeIndex
                      ? "bg-gradient-to-r from-purple-600 to-indigo-600 shadow-md scale-110"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                aria-label={`Go to responsibility ${i + 1}`}
              >
                {i === activeIndex && (
                  <span className="absolute inset-0 rounded-full bg-purple-400/30 animate-ping" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* === Card Section === */}
        <div className="relative w-full max-w-3xl mx-auto flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={() =>
              setActiveIndex((p) =>
                p === 0 ? responsibilities.length - 1 : p - 1
              )
            }
            className="absolute left-0 md:-left-14 p-3 rounded-full bg-gray-200 hover:bg-purple-200 transition z-10"
            aria-label="Previous"
          >
            ←
          </button>

          {/* Card */}
          <div className="p-8 md:p-10 min-h-[220px] bg-gray-50 border border-gray-100 rounded-2xl shadow-md flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-medium text-gray-900 mb-4">
              {responsibilities[activeIndex].title}
            </h3>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              {responsibilities[activeIndex].description}
            </p>
          </div>

          {/* Right Arrow */}
          <button
            onClick={() =>
              setActiveIndex((p) =>
                p === responsibilities.length - 1 ? 0 : p + 1
              )
            }
            className="absolute right-0 md:-right-14 p-3 rounded-full bg-gray-200 hover:bg-purple-200 transition z-10"
            aria-label="Next"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
