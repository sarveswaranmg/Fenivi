import { useState, useRef } from "react";
import OurApproach from "../Components/OurApproach";

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Card navigation refs
  const dragStartX = useRef(null);
  const isDragging = useRef(false);

  const highlights = [
    {
      text: "Conducted pre-feasibility study for augmenting water resources in Pachamalai (Eastern Ghats) with the Tiruchirappalli District Administration.",
      gradient: "from-purple-500 to-purple-700",
    },
    {
      text: "Carried out need and feasibility analyses in Kanniyakumari district under the Green Kanniyakumari initiative.",
      gradient: "from-blue-500 to-blue-700",
    },
    {
      text: "Led digitization and restoration of Anuman Nathi (32 km) in Tirunelveli district, reviving 99 irrigation tanks that had remained dry for decades.",
      gradient: "from-teal-500 to-teal-700",
    },
    {
      text: "Digitized Pazhayaru River (Kanniyakumari) in collaboration with Anna University and the district administration.",
      gradient: "from-indigo-500 to-indigo-700",
    },
    {
      text: "Published Chennai Waterscape Series – Hydrological Insights from Pallikaranai Catchment, addressing urban water and ecosystem challenges.",
      gradient: "from-pink-500 to-pink-700",
    },
    {
      text: "Established community-led river basin organizations such as Nam Anuman Nathi, Namadhu Pazhayaru, and Namadhu Nambiyaru.",
      gradient: "from-green-500 to-green-700",
    },
    {
      text: "Conducted malnutrition mapping, anganwadi renovations, social development surveys, and renewable energy interventions in the health and urban sectors.",
      gradient: "from-orange-500 to-orange-700",
    },
    {
      text: "Organized the National Conference on Real-World Evidence in Oncology (4 editions).",
      gradient: "from-red-500 to-red-700",
    },
    {
      text: "Contributed to 200+ scientific publications in national and international journals.",
      gradient: "from-violet-500 to-violet-700",
    },
  ];

  // Card navigation functions
  const nextCard = () => {
    setCurrentSlide((prev) => (prev + 1) % highlights.length);
  };

  const prevCard = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + highlights.length) % highlights.length
    );
  };

  const handleDragStart = (e) => {
    isDragging.current = false;
    dragStartX.current =
      e.type === "mousedown" ? e.clientX : e.touches[0].clientX;
  };

  const handleDragMove = () => {
    if (dragStartX.current === null) return;
    isDragging.current = true;
  };

  const handleDragEnd = (e) => {
    if (dragStartX.current === null) return;

    const endX = e.type === "mouseup" ? e.clientX : e.changedTouches[0].clientX;
    const diff = dragStartX.current - endX;

    // If it was a drag gesture (moved more than 50px)
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextCard(); // Dragged left, go to next
      } else {
        prevCard(); // Dragged right, go to previous
      }
    } else if (!isDragging.current && Math.abs(diff) < 10) {
      // If it was just a click (minimal movement)
      nextCard();
    }

    dragStartX.current = null;
    isDragging.current = false;
  };

  return (
    <div className="w-full min-h-screen">
      {/* About Us Section */}
      <section className="relative w-full h-screen">
        {/* Fixed gradient background */}
        {/* <div className="fixed inset-0 -z-10 animate-gradient-premium"></div> */}

        {/* Scrollable content */}
        <div className="relative z-10 w-full h-full overflow-y-auto px-8 md:px-16 lg:px-24 py-16 flex items-start justify-center">
          <div className="max-w-4xl text-center my-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              About Us
            </h2>
            <p className="text-white text-lg md:text-xl leading-relaxed">
              Founded in 2017, Fenivi Research Solutions Pvt. Ltd. is a
              data-driven organization dedicated to advancing sustainable
              development through convergence-based approaches. Our expertise
              spans third-party assessments, feasibility studies, impact
              evaluations, GIS-based hydrological research, and policy advisory.
              By combining rigorous analysis with grassroots engagement, we
              design actionable solutions that are practical, cost-effective,
              and sustainable.
            </p>
          </div>
        </div>
      </section>

      {/* About paragraph and image */}
      <section className="relative w-full py-16 px-8 md:px-16 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <div className="relative h-[350px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop"
                alt="Research and Development"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            {/* Paragraph */}
            <div className="space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                At Fenivi Research Solutions, we believe in a convergence-based
                approach that integrates scientific rigor with practical
                implementation. Our team of experts combines advanced
                technologies like GIS mapping, hydrological modeling, and
                data-driven analytics with grassroots engagement to deliver
                sustainable solutions.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                We work closely with government agencies, academic institutions,
                and local communities to ensure our interventions are not only
                technically sound but also socially inclusive and
                environmentally sustainable. From water resource management to
                health sector innovations, our projects are designed to create
                lasting impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights Section - One Card at a Time */}
      <section className="relative w-full h-screen">
        {/* Fixed gradient background */}
        <div className="fixed inset-0 -z-10 animate-gradient-premium"></div>

        {/* Scrollable content */}
        <div className="relative z-10 w-full h-full overflow-y-auto flex flex-col items-center justify-start py-16 px-8 md:px-16 lg:px-24">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            Key Highlights
          </h2>

          {/* Card Container */}
          <div className="relative w-full max-w-6xl h-[600px] flex items-center justify-center my-auto">
            <div className="absolute inset-0 overflow-hidden rounded-lg">
              {/* Render all cards with transitions */}
              {highlights.map((highlight, index) => {
                let position = index - currentSlide;

                // Handle wrap-around for seamless transition
                if (position < -highlights.length / 2) {
                  position += highlights.length;
                } else if (position > highlights.length / 2) {
                  position -= highlights.length;
                }

                const isActive = index === currentSlide;
                const isPast = position < 0;
                const isVisible = Math.abs(position) <= 1 || isActive;

                return (
                  <div
                    key={index}
                    className={`absolute w-full h-full transition-all duration-700 ease-out cursor-pointer select-none ${
                      isActive
                        ? "opacity-100 scale-100 z-10"
                        : isPast && isVisible
                        ? "opacity-100 scale-90 pointer-events-none"
                        : "opacity-0 scale-90 pointer-events-none"
                    }`}
                    style={{
                      transform: `translateX(${position * 100}%) scale(${
                        isActive ? 1 : 0.9
                      })`,
                    }}
                    onMouseDown={handleDragStart}
                    onMouseMove={handleDragMove}
                    onMouseUp={handleDragEnd}
                    onMouseLeave={handleDragEnd}
                    onTouchStart={handleDragStart}
                    onTouchMove={handleDragMove}
                    onTouchEnd={handleDragEnd}
                  >
                    {/* Current Card with Glassmorphism */}
                    <div className="relative w-full h-full rounded-lg overflow-hidden opacity-90">
                      {/* Outer glow */}
                      <div className="absolute -inset-4 bg-gradient-to-br from-violet-400/60 via-purple-500/60 to-violet-600/60 rounded-lg blur-2xl opacity-75 animate-pulse"></div>

                      {/* Animated violet edges */}
                      <div className="absolute inset-0 rounded-lg overflow-hidden">
                        <div className="absolute -top-20 -left-20 w-40 h-40 bg-violet-500/30 rounded-full blur-3xl animate-pulse"></div>
                        <div
                          className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl animate-pulse"
                          style={{ animationDelay: "1s" }}
                        ></div>
                        <div
                          className="absolute top-1/2 -right-10 w-32 h-32 bg-violet-400/20 rounded-full blur-2xl animate-pulse"
                          style={{ animationDelay: "0.5s" }}
                        ></div>
                        <div
                          className="absolute top-1/4 -left-10 w-32 h-32 bg-purple-400/20 rounded-full blur-2xl animate-pulse"
                          style={{ animationDelay: "1.5s" }}
                        ></div>
                      </div>

                      {/* Glass morphism card */}
                      <div className="absolute inset-0 backdrop-blur-2xl bg-black/70 rounded-lg border border-violet-400/40 shadow-2xl overflow-hidden">
                        {/* Noise texture */}
                        <div
                          className="absolute inset-0 opacity-20 rounded-lg"
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                            backgroundSize: "100px 100px",
                          }}
                        ></div>
                      </div>

                      {/* Content */}
                      <div className="relative z-10 w-full h-full flex items-center justify-center p-12">
                        <p className="text-white text-xl md:text-2xl leading-relaxed text-center drop-shadow-lg">
                          {highlight.text}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-4 mt-8">
            <button
              onClick={prevCard}
              className="p-3 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all duration-300 hover:scale-110"
              aria-label="Previous highlight"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Dot Indicators */}
            <div className="flex gap-2">
              {highlights.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-white w-8"
                      : "bg-white/40 w-2 hover:bg-white/60"
                  }`}
                  aria-label={`Go to highlight ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextCard}
              className="p-3 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all duration-300 hover:scale-110"
              aria-label="Next highlight"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
      {/* Our approach */}
      <OurApproach />
    </div>
  );
}
