import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const StatsShowcase = () => {
  const sectionRef = useRef(null);
  const num1Ref = useRef(null);
  const num2Ref = useRef(null);
  const num3Ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          // Animate numbers independently
          const stats = [
            { ref: num1Ref, value: 12 },
            { ref: num2Ref, value: 50 },
            { ref: num3Ref, value: 100 },
          ];

          stats.forEach(({ ref, value }) => {
            const counter = { val: 0 };
            gsap.to(counter, {
              val: value,
              duration: 2.5,
              ease: "power2.out",
              onUpdate: () => {
                if (ref.current) {
                  ref.current.textContent = Math.ceil(counter.val);
                }
              },
            });
          });
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full max-w-7xl mx-auto px-6 lg:px-12 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-end h-full">

        {/* Shortest Card (Top-most) */}
        <div className="flex flex-col gap-4 self-end">
          <h3 className="text-sm font-semibold tracking-widest text-gray-500">
            IMPACT FOOTPRINT
          </h3>
          <h1 className="text-6xl font-bold text-black">
            <span ref={num1Ref}>0</span>+
          </h1>
          <p className="text-gray-700 text-[15px] leading-relaxed max-w-sm">
            Districts across South India impacted through hydrology, sustainability
            and public health interventions.
          </p>
          <img
            src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
            alt="Impact Footprint"
            className="w-full h-44 object-cover rounded-lg" // Shortest
          />
        </div>

        {/* Medium Card */}
        <div className="flex flex-col gap-4 self-end">
          <h3 className="text-sm font-semibold tracking-widest text-gray-500">
            CLIENTS
          </h3>
          <h1 className="text-6xl font-bold text-black">
            <span ref={num2Ref}>0</span>+
          </h1>
          <p className="text-gray-700 text-[15px] leading-relaxed max-w-sm">
            Governments, NGOs, CSR foundations, universities & startups rely on Fenivi
            for credible research collaborations and advisory support.
          </p>
          <img
            src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
            alt="Clients"
            className="w-full h-64 object-cover rounded-lg" // Medium
          />
        </div>

        {/* Tallest Card (Lowest but aligned at bottom) */}
        <div className="flex flex-col gap-4 self-end">
          <h3 className="text-sm font-semibold tracking-widest text-gray-500">
            PROJECTS
          </h3>
          <h1 className="text-6xl font-bold text-black">
            <span ref={num3Ref}>0</span>+
          </h1>
          <p className="text-gray-700 text-[15px] leading-relaxed max-w-sm">
            We have executed 100+ research, advisory, and field-impact projects across
            India — driving evidence-based sustainable outcomes.
          </p>
          <img
            src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
            alt="Projects"
            className="w-full h-80 object-cover rounded-lg" // Tallest
          />
        </div>

      </div>
    </section>
  );
};

export default StatsShowcase;
