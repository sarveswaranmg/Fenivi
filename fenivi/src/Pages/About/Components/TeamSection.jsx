import React, { useEffect, useRef } from "react";
import vidhubala from "../../../assets/Team/Vidhubala.png";
import femil from "../../../assets/Team/Femil.jpeg";

export default function TeamSection() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardsRefs = useRef([]);

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

    if (titleRef.current) observer.observe(titleRef.current);
    if (subtitleRef.current) observer.observe(subtitleRef.current);
    cardsRefs.current.forEach(card => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const team = [
    { name: "Dr. Vidhubala E", role: "Founder & Director", img: vidhubala },
    { name: "Dr. E. S. Femil", role: "Director", img: femil },
  ];

  return (
    <section className="w-full pt-4 pb-8 sm:py-12 md:py-16 px-6 sm:px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-6 sm:mb-8 md:mb-10">
        <h2
          ref={titleRef}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mt-2 opacity-0 translate-y-8 transition-all duration-700 ease-out"
        >
          Our Dedicated Research & Development Team
        </h2>
        <p
          ref={subtitleRef}
          className="text-gray-600 mt-2 sm:mt-3 max-w-2xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed px-2 sm:px-4 opacity-0 translate-y-6 transition-all duration-700 ease-out"
          style={{ transitionDelay: '200ms' }}
        >
          A passionate group of scientists, data experts, and social researchers
          working together to translate evidence into sustainable change.
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6 max-w-4xl mx-auto">
        {team.map((member, index) => (
          <div
            key={index}
            ref={el => cardsRefs.current[index] = el}
            className="relative overflow-hidden rounded-lg shadow-md bg-white opacity-0 translate-y-10 transition-all duration-700 ease-out"
            style={{ transitionDelay: `${300 + index * 100}ms` }}
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-[220px] sm:h-[240px] md:h-[280px] lg:h-[320px] object-cover"
            />
            <div className="absolute bottom-1.5 left-1.5 right-1.5 bg-gradient-to-r animate-gradient-premium text-white px-2 py-1.5 sm:py-2 rounded-lg shadow-lg">
              <h4 className="text-[10px] sm:text-sm font-semibold truncate">{member.name}</h4>
              <p className="text-[8px] sm:text-[10px] opacity-90 truncate">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
