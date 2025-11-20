import React from "react";
import vidhubala from "../../../assets/Team/Vidhubala.png";

export default function TeamSection() {
  const team = [
    { name: "Dr. Vidhubala E", role: "Founder & Director", img: vidhubala },
    { name: "Dr. R. Dinesh", role: "Hydrological Research Lead", img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=800&auto=format&fit=crop" },
    { name: "Dr. Meera Narayanan", role: "Sustainability & Policy Analyst", img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=800&auto=format&fit=crop" },
    { name: "Dr. A. Harish", role: "GIS & Data Systems Engineer", img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=800&auto=format&fit=crop" },
    { name: "Dr. Kavya S.", role: "Public Health Specialist", img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=800&auto=format&fit=crop" },
    { name: "Dr. Ramesh P.", role: "Community Development Coordinator", img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=800&auto=format&fit=crop" },
  ];

  return (
    <section className="w-full bg-gray-50 py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-12 lg:px-20">
      {/* Header */}
      <div className="text-center mb-10 sm:mb-12 md:mb-14">

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mt-2">
          Our Dedicated Research & Development Team
        </h2>
        <p className="text-gray-600 mt-3 md:mt-4 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed px-4">
          A passionate group of scientists, data experts, and social researchers
          working together to translate evidence into sustainable change.
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 md:gap-8 lg:gap-10 max-w-7xl mx-auto">
        {team.map((member, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-md bg-white"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-[180px] sm:h-[320px] md:h-[400px] lg:h-[420px] xl:h-[480px] object-cover"
            />
            <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-2 sm:left-3 md:left-4 right-2 sm:right-3 md:right-4 bg-gradient-to-r animate-gradient-premium text-white px-2 sm:px-3 md:px-4 py-1.5 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl shadow-lg">
              <h4 className="text-xs sm:text-base md:text-lg font-semibold">{member.name}</h4>
              <p className="text-[10px] sm:text-xs md:text-sm opacity-90">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
