// LandingSection.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

gsap.registerPlugin(gsap.ModifiersPlugin);

const LandingSection = ({ images }) => {
  const carouselRef = useRef();
  const tweenRef = useRef();

  // Example widths for variable-sized items
  const widths = [200, 270, 300, 320, 250];

  useEffect(() => {
    const carousel = carouselRef.current;

    // Calculate total width
    const totalWidth = Array.from(carousel.children).reduce(
      (acc, el) => acc + el.offsetWidth + 16, // 16 = gap-4 in px
      0
    );

    // Infinite scroll using modifiers for seamless loop
    tweenRef.current = gsap.to(carousel, {
      x: "-=" + totalWidth / 2, // half because we duplicated items
      duration: 150,
      ease: "linear",
      repeat: -1,
      modifiers: {
        x: (x) => {
          const val = parseFloat(x);
          return (val % (totalWidth / 2)) + "px";
        },
      },
    });
  }, []);

  const handleMouseEnter = () => {
    tweenRef.current.pause();
    gsap.to(carouselRef.current.children, { scale: 0.95, duration: 0.01 });
  };

  const handleMouseLeave = () => {
    tweenRef.current.play();
    gsap.to(carouselRef.current.children, { scale: 1, duration: 0.01 });
  };

  return (
    <div className="flex flex-col items-center justify-center text-center font-serif mb-5">
      <h2 className="text-xl md:text-3xl  p-50">
        Fenivi Research Solutions Pvt. Ltd. is a research and advisory
        organization committed to bridging the gap between policy, practice, and
        community needs. Since 2017, we have empowered governments, NGOs,
        corporates, and startups with evidence-based research, feasibility
        studies, and strategic advisory to drive sustainable and cost-effective
        outcomes.
      </h2>

      <div
        className="overflow-hidden w-full relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <div className="flex gap-4" ref={carouselRef}>
          {/* Duplicate images twice for seamless loop */}
          {[...images, ...images].map((img, idx) => (
            <div
              className="flex-shrink-0 h-[300px] rounded-lg overflow-hidden cursor-pointer transition-transform duration-300"
              style={{ width: widths[idx % widths.length] }}
              key={idx}>
              <img
                src={img}
                alt={`carousel-${idx}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
