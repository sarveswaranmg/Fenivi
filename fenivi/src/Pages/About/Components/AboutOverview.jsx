import React, { useEffect, useRef } from "react";

export default function AboutOverview() {
  const sectionRef = useRef(null);
  const leftCardRef = useRef(null);
  const rightCardRef = useRef(null);
  const statsRefs = useRef([]);

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

    if (leftCardRef.current) observer.observe(leftCardRef.current);
    if (rightCardRef.current) observer.observe(rightCardRef.current);
    statsRefs.current.forEach(stat => {
      if (stat) observer.observe(stat);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-8 sm:py-12 md:py-16 px-6 sm:px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-2">
        {/* LEFT: TEXT CARD */}
        <div
          ref={leftCardRef}
          className="bg-white rounded-xl sm:rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-5 md:p-6 h-full flex flex-col opacity-0 translate-y-8 xl:translate-y-0 xl:-translate-x-8 transition-all duration-1000 ease-out"
        >
          <p className="text-[10px] sm:text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
            How It Started
          </p>

          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 leading-tight">
            Our Journey Towards <br className="hidden sm:block" /> Research-Driven Impact
          </h2>

          <div className="text-gray-600 text-xs sm:text-sm leading-relaxed flex-1">
            <p className="mb-2">
              Fenivi was founded in 2017 by two experienced researchers who saw
              a persistent gap between evidence, policy, practice, and real
              community needs. In many settings, community priorities do not
              align with what programme implementers deliver—often due to
              limited consideration of cultural context and local realities.
            </p>
            <p className="mb-2">
              Despite India's abundance of data, it is rarely transformed into
              actionable insights that guide locally appropriate solutions.
              Fenivi emerged to bridge this gap by generating real-world
              evidence and converting it into practical, community-aligned
              knowledge.
            </p>

            <p className="mb-0">
              We focus on hydrology, health, and social development, creating
              measurable impact through collaboration, convergence, innovation,
              and deep grassroots understanding.
            </p>
          </div>
        </div>

        {/* RIGHT: IMAGE + STATS CARD */}
        <div
          ref={rightCardRef}
          className="bg-white rounded-xl sm:rounded-2xl border border-gray-100 shadow-sm h-full flex flex-col overflow-hidden opacity-0 translate-y-8 xl:translate-y-0 xl:translate-x-8 transition-all duration-1000 ease-out"
          style={{ transitionDelay: '200ms' }}
        >
          {/* IMAGE */}
          <div className="p-3 sm:p-4 pb-0">
            <div className="rounded-lg sm:rounded-xl overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop"
                alt="Fenivi collaboration"
                className="w-full h-[140px] sm:h-[180px] md:h-[340px] object-cover"
              />
            </div>
          </div>

          {/* STATS SECTION */}
          <div className="w-full mt-3 sm:mt-4 p-3 sm:p-4 pb-8 sm:pb-4">
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {[
                { number: "8+", label: "Years of Impact" },
                { number: "200+", label: "Publications" },
                { number: "100+", label: "Projects" },
                { number: "15+", label: "Partners" }
              ].map((stat, index) => (
                <div
                  key={index}
                  ref={el => statsRefs.current[index] = el}
                  className="rounded-lg sm:rounded-xl bg-gray-50 shadow-sm p-2 sm:p-2.5 flex flex-col justify-center items-start opacity-0 translate-y-6 transition-all duration-700 ease-out"
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="text-base sm:text-lg font-extrabold text-gray-900">
                    {stat.number}
                  </div>
                  <div className="text-[9px] sm:text-xs text-gray-600 mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
