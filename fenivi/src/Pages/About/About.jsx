import React from "react";
import AboutOverview from "./Components/AboutOverview";
import TeamSection from "./Components/TeamSection";
import KeyResponsibilities from "./Components/KeyResponsibilities";
import Vidhubala from "./Components/Vidhubala";

export default function About() {
  return (
    <div className="w-full min-h-screen">
      {/* ===== HERO SECTION ===== */}
      <section className="relative w-full pt-24 pb-8 sm:pb-12 md:pb-16 flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-20 bg-white text-gray-900">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center max-w-6xl w-full">
          {/* Left Text Side */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4">About Us</h2>
            <p className="text-sm leading-relaxed text-gray-600">
              Fenivi Research Solutions Pvt. Ltd. is a data-driven organization focused on creating sustainable, practical, and impactful solutions through research, innovation, and technology.
            </p>
          </div>

          {/* Right Image Side */}
          <img
            src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=900"
            alt="About illustration"
            className="w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-2xl shadow-lg object-cover"
          />
        </div>
      </section>

      {/* ===== ABOUT OVERVIEW (CLEAN WHITE SECTION) ===== */}
      <AboutOverview />

      <Vidhubala />

      {/* ===== TEAM SECTION ===== */}
      <TeamSection />

    </div>
  );
}
