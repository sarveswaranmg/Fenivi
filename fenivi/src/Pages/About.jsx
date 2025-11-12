import React from "react";
import AboutOverview from "../Components/AboutOverview";
import TeamSection from "../Components/TeamSection";
import KeyResponsibilities from "../Components/KeyResponsibilities";

export default function About() {
  return (
    <div className="w-full min-h-screen">
      {/* ===== HERO SECTION (OLD PURPLE GRADIENT) ===== */}
      <section className="relative w-full h-screen animate-gradient-premium flex items-center justify-center px-8 md:px-16 lg:px-24 text-center">
        <div className="max-w-4xl mx-auto text-white">
          <h2 className="text-4xl md:text-6xl font-semibold mb-6">About Us</h2>
          <p className="text-lg md:text-xl leading-relaxed">
            Founded in 2017, Fenivi Research Solutions Pvt. Ltd. is a data-driven
            organization dedicated to advancing sustainable development through
            convergence-based approaches. Our expertise spans third-party
            assessments, feasibility studies, impact evaluations, GIS-based
            hydrological research, and policy advisory. By combining rigorous
            analysis with grassroots engagement, we design actionable solutions
            that are practical, cost-effective, and sustainable.
          </p>
        </div>
      </section>

      {/* ===== ABOUT OVERVIEW (CLEAN WHITE SECTION) ===== */}
      <AboutOverview />

      {/* ===== TEAM SECTION ===== */}
      <TeamSection />

      {/* ===== KEY HIGHLIGHTS (COMING NEXT) ===== */}
      <KeyResponsibilities />
    </div>
  );
}
