import React, { useEffect, useRef } from "react";
import AboutOverview from "./Components/AboutOverview";
import TeamSection from "./Components/TeamSection";
import KeyResponsibilities from "./Components/KeyResponsibilities";
import Vidhubala from "./Components/Vidhubala";

export default function About() {
  const heroLeftRef = useRef(null);
  const heroRightRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -10% 0px'
    };

    const animateOnScroll = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    };

    const observer = new IntersectionObserver(animateOnScroll, observerOptions);

    // Observe hero sections
    if (heroLeftRef.current) observer.observe(heroLeftRef.current);
    if (heroRightRef.current) observer.observe(heroRightRef.current);

    // Observe all sections with data-animate attribute
    const animatedElements = document.querySelectorAll('[data-animate]');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full min-h-screen">
      {/* ===== HERO SECTION ===== */}
      <section className="relative w-full pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden">
        <div className="page-container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text Side */}
          <div
            ref={heroLeftRef}
            className="relative z-10 opacity-0 translate-y-12 transition-all duration-1000 ease-out"
            style={{ transitionDelay: '100ms' }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              About Us
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              Fenivi Research Solutions Pvt. Ltd. is a research and advisory organization committed to bridging the gap between policy, practice, and community needs. Since 2017, we have empowered governments, NGOs, corporates, and startups with evidence-based research, feasibility studies, and strategic advisory.
            </p>
          </div>

          {/* Right Image Side */}
          <div
            ref={heroRightRef}
            className="relative h-[300px] md:h-[450px] rounded-2xl overflow-hidden shadow-xl opacity-0 translate-x-12 transition-all duration-1000 ease-out"
            style={{ transitionDelay: '300ms' }}
          >
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
          <h2
            data-animate
            className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12 opacity-0 translate-y-8 transition-all duration-700 ease-out"
          >
            Our Partners
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                data-animate
                className="flex flex-col items-center opacity-0 translate-y-6 transition-all duration-700 ease-out"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
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
