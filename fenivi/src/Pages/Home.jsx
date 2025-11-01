import { useState } from "react";

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="h-screen w-full bg-gradient-to-r from-[#f7f5ff] via-[#eae1ff] to-[#f7f5ff] overflow-hidden relative">
        <section className="flex flex-col md:flex-row items-center justify-between h-full px-8 md:px-20 pt-20 gap-6">
          {/* Text Content */}
          <div className="max-w-xl text-center md:text-left">
            <h1 className="text-xl md:text-3xl font-bold text-gray-900 leading-snug">
              Advancing sustainable development
              <br />
              through data-driven
              <br />
              insights, convergence approaches and
              <br />
              community engagement
            </h1>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              {/* Partner With Us - Liquid glass button */}
              <button className="relative px-6 py-3 rounded-full font-medium overflow-hidden group">
                {/* Outer glow */}
                <div className="absolute -inset-2 bg-gradient-to-br from-purple-400/40 via-purple-500/50 to-indigo-600/40 rounded-full blur-xl opacity-60"></div>

                {/* Glass morphism backdrop */}
                <div className="absolute inset-0 backdrop-blur-md bg-gradient-to-br from-purple-600/30 via-purple-700/40 to-indigo-600/30 rounded-full border border-white/30 shadow-lg"></div>

                {/* Animated glass highlights */}
                <div className="absolute top-0 left-1/4 w-16 h-16 bg-gradient-to-br from-white/40 to-transparent rounded-full blur-xl animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-20 h-20 bg-gradient-to-tr from-white/30 to-transparent rounded-full blur-xl animate-pulse"></div>

                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>

                {/* Content */}
                <span className="relative text-white font-sans font-semibold group-hover:text-white transition-colors">
                  Partner With Us
                </span>
              </button>

              {/* Explore Our Services - Liquid glass button */}
              <button className="relative px-6 py-3 rounded-full font-medium overflow-hidden group">
                {/* Glass morphism backdrop */}
                <div className="absolute inset-0 backdrop-blur-md bg-white/30 border border-white/40 rounded-full shadow-lg"></div>

                {/* Animated glass shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>

                {/* Content */}
                <span className="relative text-gray-800 font-sans group-hover:text-gray-900 transition-colors">
                  Explore Our Services
                </span>
              </button>
            </div>
          </div>

          {/* Right Side Image with Liquid Glass Container */}
          <div className="w-[320px] md:w-[380px] h-[320px] md:h-[380px] mt-10 md:mt-0 relative">
            {/* Liquid glass container */}
            <div className="absolute inset-0 rounded-[3rem]">
              {/* Outer glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-purple-400/40 via-purple-500/50 to-indigo-600/40 rounded-[3rem] blur-2xl opacity-60"></div>

              {/* Glass morphism layer */}
              <div className="absolute inset-0 backdrop-blur-2xl bg-gradient-to-br from-purple-600/20 via-transparent to-indigo-600/20 rounded-[3rem] border border-white/30 shadow-2xl">
                {/* Animated glass highlights */}
                <div className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-br from-white/30 to-transparent rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-gradient-to-tr from-white/25 to-transparent rounded-full blur-2xl animate-pulse"></div>

                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-[3rem] translate-x-[-100%] animate-[shimmer_3s_ease-in-out_infinite]"></div>
              </div>

              {/* Inner content */}
              <div className="absolute inset-4 rounded-[2.5rem] overflow-hidden">
                <img
                  src="https://cdn.jsdelivr.net/gh/napthedev/assets@main/3d-purple-shape.png"
                  alt="3D Shape"
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Transition blend section */}
      <div className="h-32 w-full bg-gradient-to-b from-[#f7f5ff] via-[#f3ecff] to-[#f0e8f8]"></div>

      {/* About Section with Dynamic Gradient */}
      <section
        className="min-h-screen w-full relative py-24 px-8 flex items-center justify-center -mt-32 pt-40"
        onMouseMove={handleMouseMove}
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, #f0e8f8 0%, #ffffff 50%)`,
          transition: "background 0.3s ease-out",
        }}>
        {/* Content Container */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-black font-semibold text-base md:text-2xl leading-relaxed font-sans">
            Fenivi Research Solutions Pvt. Ltd. is a research and advisory
            organization committed to bridging the gap between policy, practice,
            and community needs. Since 2017, we have empowered governments,
            NGOs, corporates, and startups with evidence-based research,
            feasibility studies, and strategic advisory to drive sustainable and
            cost-effective outcomes.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
