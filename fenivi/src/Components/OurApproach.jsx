import React from "react";

const OurApproach = () => {
  return (
    <section className="w-full py-32 px-8 pb-48 flex flex-col items-center justify-center bg-white overflow-visible">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-16 text-center">
        Our Approach
      </h2>

      <div className="relative flex flex-col md:flex-row items-center gap-2 justify-center max-w-5xl mx-auto">
        {/* Left Card - Facilitate */}
        <div
          className="relative w-75 h-56 bg-[#1A202C] text-white rounded-2xl flex flex-col justify-center items-start px-6 transition-all duration-500 ease-out hover:-translate-y-4 hover:scale-105 mb-6 md:mb-0 md:-mr-8"
          style={{
            transform: "rotate(5deg)",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
            zIndex: 1,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform =
              "rotate(7deg) translateY(-16px) scale(1.05)";
            e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.25)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "rotate(5deg)";
            e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.15)";
          }}
        >
          <h3 className="text-3xl font-bold mb-4 text-purple-400">
            Facilitate
          </h3>
          <p className="text-sm font-normal text-white/90 leading-relaxed">
            Enabling collaborations, partnerships, and multi-stakeholder
            engagement.
          </p>
        </div>

        {/* Middle Card - Navigate */}
        <div
          className="relative w-75 h-56 bg-gradient-to-br from-purple-600 to-violet-600 text-white rounded-2xl flex flex-col justify-center items-center px-6 transition-all duration-500 ease-out hover:-translate-y-4 hover:scale-105 my-6 md:my-0"
          style={{
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
            zIndex: 3,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-16px) scale(1.05)";
            e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.25)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0) scale(1)";
            e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.15)";
          }}
        >
          <h3 className="text-3xl font-bold mb-4">Navigate</h3>
          <p className="text-sm font-normal text-white/90 leading-relaxed text-center">
            Guiding projects through complexity with data-backed insights.
          </p>
        </div>

        {/* Right Card - Validate */}
        <div
          className="relative w-75 h-56 bg-[#1A202C] text-white rounded-2xl flex flex-col justify-center items-start px-6 transition-all duration-500 ease-out mt-6 md:mt-0 md:-ml-8"
          style={{
            transform: "rotate(-5deg)",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
            zIndex: 1,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform =
              "rotate(-7deg) translateY(-16px) scale(1.05)";
            e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.25)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "rotate(-5deg)";
            e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.15)";
          }}
        >
          <h3 className="text-3xl font-bold mb-4 text-purple-400">Validate</h3>
          <p className="text-sm font-normal text-white/90 leading-relaxed">
            Ensuring credibility, quality, and real-world relevance in every
            outcome.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
