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
    <section className="w-full bg-gray-50 py-20 px-6 md:px-20">
      {/* Header */}
      <div className="text-center mb-14">
        
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mt-2">
          Our Dedicated Research & Development Team
        </h2>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-base leading-relaxed">
          A passionate group of scientists, data experts, and social researchers 
          working together to translate evidence into sustainable change.
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {team.map((member, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-2xl shadow-md bg-white"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-[480px] object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-r animate-gradient-premium text-white px-4 py-3 rounded-xl shadow-lg">
              <h4 className="text-lg font-semibold">{member.name}</h4>
              <p className="text-sm opacity-90">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
