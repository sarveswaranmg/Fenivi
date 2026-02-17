import React, { useEffect, useRef } from "react";
import teamMeetImg from "../../../assets/Team meet.jpeg";

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
    <section ref={sectionRef} className="w-full py-6 sm:py-8 md:py-10">
      <div className="page-container bg-white rounded-xl sm:rounded-2xl border border-gray-100 shadow-sm">
        <div className="p-5 sm:p-6 md:p-10 lg:p-14">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center">
            {/* LEFT: TEXT */}
            <div
              ref={leftCardRef}
              className="flex flex-col opacity-0 translate-y-8 xl:translate-y-0 xl:-translate-x-8 transition-all duration-1000 ease-out"
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

            {/* RIGHT: IMAGE + STATS */}
            <div
              ref={rightCardRef}
              className="flex flex-col justify-center opacity-0 translate-y-8 xl:translate-y-0 xl:translate-x-8 transition-all duration-1000 ease-out"
              style={{ transitionDelay: '200ms' }}
            >
              {/* IMAGE */}
              <div className="rounded-lg sm:rounded-xl overflow-hidden shadow-md">
                <img
                  src={teamMeetImg}
                  alt="Fenivi team meeting"
                  className="w-full h-[140px] sm:h-[180px] md:h-[280px] object-cover"
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
