import React from "react";
import AboutOverview from "./Components/AboutOverview";
import TeamSection from "./Components/TeamSection";
import KeyResponsibilities from "./Components/KeyResponsibilities";
import Vidhubala from "./Components/Vidhubala";

export default function About() {
  return (
    <div className="w-full min-h-screen">
      {/* ===== HERO SECTION ===== */}
      <section className="relative w-full pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden">
        <div className="page-container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text Side */}
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              About Us
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              Fenivi Research Solutions Pvt. Ltd. is a research and advisory organization committed to bridging the gap between policy, practice, and community needs. Since 2017, we have empowered governments, NGOs, corporates, and startups with evidence-based research, feasibility studies, and strategic advisory.
            </p>
          </div>

          {/* Right Image Side */}
          <div className="relative h-[300px] md:h-[450px] rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=900"
              alt="About illustration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ===== ABOUT OVERVIEW (CLEAN WHITE SECTION) ===== */}
      <AboutOverview />

      <Vidhubala />

      {/* ===== TEAM SECTION ===== */}
      <TeamSection />

      {/* ===== PARTNERS SECTION ===== */}
      <section className="w-full section-padding">
        <div className="page-container">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">Our Partners</h2>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-28 h-14 bg-gray-300 rounded-lg animate-pulse mb-2"></div>
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Partner {i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
