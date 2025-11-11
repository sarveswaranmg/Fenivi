import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Projects() {
  const rowRefs = useRef([]);

  const projects = [
    {
      id: 1,
      title: "Hydrological Restoration & River Rejuvenation",
      city: "Tirunelveli & Kanniyakumari, Tamil Nadu",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      brief:
        "GIS-based hydrological mapping and community-led river basin restoration reviving 99 irrigation tanks across Anuman Nathi & Pazhayaru.",
    },
    {
      id: 2,
      title: "Green Kanniyakumari Initiative",
      city: "Kanniyakumari, Tamil Nadu",
      img: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=1600&auto=format&fit=crop",
      brief:
        "Feasibility & sustainability study to build an SDG-driven action plan for ecology, tourism and climate resilience.",
    },
    {
      id: 3,
      title: "Public Health & Social Development Programs",
      city: "Tamil Nadu (Multi-District)",
      img: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
      brief:
        "CSR interventions for malnutrition mapping, anganwadi upgrades, renewable energy solutions, and community welfare initiatives.",
    },
    {
      id: 4,
      title: "National Conference on Real-World Evidence in Oncology",
      city: "India (National)",
      img: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=1600&auto=format&fit=crop",
      brief:
        "Annual conference enabling research collaboration across clinicians, researchers & policymakers, with 4 successful editions and 200+ publications.",
    },
  ];

  const listProjects = [
    { no: "001", title: "Street Chronicles: The Art of Everyday Moments", city: "Los Angeles, USA", date: "17/07/24" },
    { no: "002", title: "Timeless Alleyways: Streets in Analog", city: "New York, USA", date: "10/06/24" },
    { no: "003", title: "Silent Stories: The Streets Through My Lens", city: "London, UK", date: "07/03/24" },
    { no: "004", title: "In the Frame: City Rhythms on Film", city: "Milan, IT", date: "11/01/2024" },
    { no: "005", title: "Street Shadows: Light, Life, and Lenses", city: "Warsaw, PL", date: "23/12/24" },
    { no: "006", title: "Faces of the Streets: Captured in Grain", city: "Milan, IT", date: "17/11/2023" },
    { no: "007", title: "Analog Days: The Pulse of the City", city: "Budapest, HU", date: "13/10/2023" },
    { no: "008", title: "Fleeting Moments: Street Souls in Film", city: "Budapest, HU", date: "10/10/2023" },
  ];

  useEffect(() => {
    const rows = rowRefs.current.filter(Boolean);

    const hoverCapable = window.matchMedia("(hover: hover)").matches;

    const cleanups = rows.map((row) => {
      const wrapper = row.querySelector(".flip-wrapper");
      const front = row.querySelector(".flip-front");
      const back = row.querySelector(".flip-back");

      // 3D setup
      gsap.set(row, { perspective: 1000 });
      gsap.set(wrapper, { transformStyle: "preserve-3d", willChange: "transform" });
      gsap.set(front, { backfaceVisibility: "hidden", rotateX: 0 });
      gsap.set(back, { backfaceVisibility: "hidden", rotateX: 180 });

      const toFront = () => gsap.to(wrapper, { rotateX: 0, duration: 0.6, ease: "power3.out", force3D: true });
      const toBack = () => gsap.to(wrapper, { rotateX: 180, duration: 0.6, ease: "power3.out", force3D: true });

      let onEnter, onLeave, onClick;
      if (hoverCapable) {
        onEnter = () => toBack();
        onLeave = () => toFront();
        row.addEventListener("mouseenter", onEnter);
        row.addEventListener("mouseleave", onLeave);
      } else {
        // Mobile: tap to toggle; tap same row again to flip back
        onClick = () => {
          const flipped = row.classList.toggle("is-flipped");
          flipped ? toBack() : toFront();
        };
        row.addEventListener("click", onClick);
      }

      return () => {
        if (hoverCapable) {
          row.removeEventListener("mouseenter", onEnter);
          row.removeEventListener("mouseleave", onLeave);
        } else {
          row.removeEventListener("click", onClick);
        }
      };
    });

    return () => cleanups.forEach((fn) => fn && fn());
  }, []);

  return (
    <div className="w-full min-h-screen">
      {/* ===== 4 FLIP CARDS (unchanged) ===== */}
      <section className="relative w-full h-screen overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-4 w-full h-full" style={{ perspective: "1400px" }}>
          {projects.map((p) => (
            <div key={p.id} className="group relative h-screen md:h-full w-full">
              <div
                className="relative h-full w-full transition-transform duration-700 ease-out group-hover:[transform:rotateY(180deg)]"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* FRONT */}
                <div className="absolute inset-0 overflow-hidden" style={{ backfaceVisibility: "hidden" }}>
                  <img src={p.img} alt={p.title} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/90 drop-shadow-xl text-[30vw] md:text-[12vw] leading-none font-light select-none">
                      {p.id}
                    </span>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between ">
                    <div>
                      <p className="text-white text-lg md:text-xl font-medium">{p.title}</p>
                      <p className="text-white/80 text-xs md:text-sm">{p.city}</p>
                    </div>
                    <span className="text-white text-2xl md:text-3xl">↗</span>
                  </div>
                </div>

                {/* BACK */}
                <div
                  className="absolute inset-0 animate-gradient-premium text-white p-6 md:p-8 flex flex-col justify-between [transform:rotateY(180deg)]"
                  style={{ backfaceVisibility: "hidden", transformStyle: "preserve-3d" }}
                >
                  <div className="flex items-center justify-between mt-12">
                    <h3 className="text-2xl md:text-3xl font-semibold">{p.title}</h3>
                    <span className="text-white/60">{p.city}</span>
                  </div>
                  <p className="text-base md:text-lg leading-relaxed">{p.brief}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">Project #{p.id}</span>
                    <button className="px-4 py-2 rounded-full bg-white text-black text-sm font-medium hover:opacity-90 transition">
                      View Project →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FLIP LIST UNDER CARDS (Smooth Vertical Flip with GSAP) ===== */}
      <section className="w-full px-6 py-10">
        <div className="w-full border border-black">
          {/* Header */}
          <div className="grid grid-cols-12 font-medium border-b border-black bg-white py-3 px-4 text-sm">
            <span className="col-span-2">Number</span>
            <span className="col-span-6">Title</span>
            <span className="col-span-3">City</span>
            <span className="col-span-1">Date</span>
          </div>

          {/* Rows */}
          {listProjects.map((p, i) => (
            <div
              key={i}
              ref={(el) => (rowRefs.current[i] = el)}
              className="relative border-b border-black cursor-pointer select-none"
              // perspective applied by GSAP as well; keeping a small base here is fine
              style={{ perspective: "1000px" }}
            >
              {/* Fixed height container to avoid shake */}
              <div className="h-14 w-full relative"> {/* 56px (compact) */}
                {/* Flip wrapper (animated) */}
                <div className="flip-wrapper absolute inset-0" style={{ transformStyle: "preserve-3d" }}>
                  {/* FRONT */}
                  <div
                    className="flip-front absolute inset-0 grid grid-cols-12 items-center bg-white text-black px-4 [backface-visibility:hidden]"
                  >
                    <span className="col-span-2">{p.no}</span>
                    <span className="col-span-6 truncate">{p.title}</span>
                    <span className="col-span-3 truncate">{p.city}</span>
                    <span className="col-span-1 flex items-center justify-end">↗</span>
                  </div>

                  {/* BACK (same layout) */}
                  <div
                    className="flip-back absolute inset-0 grid grid-cols-12 items-center text-white px-4 [backface-visibility:hidden]"
                    style={{
                      backgroundImage:
                        "linear-gradient(to bottom right, #5304A3, #9D50BB, #7B2FF7)",
                    }}
                  >
                    <span className="col-span-2">{p.no}</span>
                    <span className="col-span-6 truncate">{p.title}</span>
                    <span className="col-span-3 truncate">{p.city}</span>
                    <span className="col-span-1 flex items-center justify-end">↗</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
