import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const staticProjects = [
    {
      id: 1,
      title: "Hydrological Restoration & River Rejuvenation",
      city: "Tirunelveli & Kanniyakumari, Tamil Nadu",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1170",
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
      img: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=687",
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

  // 🔥 Firestore Fetch
  useEffect(() => {
    const q = query(collection(db, "projects"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(
      q,
      (snap) => {
        const list = snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setProjects(list);
        setLoading(false);
      },
      (err) => {
        console.error("Error fetching projects:", err);
        setLoading(false);
      }
    );
    return () => unsubscribe();
  }, []);

  return (
    <div className="w-full min-h-screen">
      {/* === Static Flip Projects === */}
      <section className="relative w-full h-screen overflow-hidden">
        <div
          className="grid grid-cols-1 md:grid-cols-4 w-full h-full"
          style={{ perspective: "1400px" }}
        >
          {staticProjects.map((p) => (
            <div
              key={p.id}
              className="group relative h-screen md:h-full w-full"
            >
              <div
                className="relative h-full w-full transition-transform duration-700 ease-out group-hover:[transform:rotateY(180deg)]"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* FRONT */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <img
                    src={p.img}
                    alt={p.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/90 drop-shadow-xl text-[30vw] md:text-[12vw] leading-none font-light select-none">
                      {p.id}
                    </span>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                    <div>
                      <p className="text-white text-lg md:text-xl font-medium">
                        {p.title}
                      </p>
                      <p className="text-white/80 text-xs md:text-sm">
                        {p.city}
                      </p>
                    </div>
                    <span className="text-white text-2xl md:text-3xl">↗</span>
                  </div>
                </div>

                {/* BACK */}
                <div
                  className="absolute inset-0 animate-gradient-premium text-white p-6 md:p-8 flex flex-col justify-between [transform:rotateY(180deg)]"
                  style={{
                    backfaceVisibility: "hidden",
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div className="flex items-center justify-between mt-12">
                    <h3 className="text-2xl md:text-3xl font-semibold">
                      {p.title}
                    </h3>
                    <span className="text-white/60">{p.city}</span>
                  </div>
                  <p className="text-base md:text-lg leading-relaxed">
                    {p.brief}
                  </p>
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
      {/* === Real World Evidence Section === */}
      <section className="w-full px-20 py-20 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
              Real-World Evidence
            </h2>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 text-justify">
              Real-World Evidence (RWE) integrates clinical insights, hospital
              workflows, and large-scale health datasets to generate actionable
              knowledge for policymakers, researchers, and clinicians. The
              initiative has enabled multi-site clinical collaborations,
              standardized data-sharing practices, and published impactful
              oncology research across India.
            </p>

            <button
              onClick={() =>
                window.open(
                  "https://realworldevidence.in/gallery/2023",
                  "_blank"
                )
              }
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform"
            >
              Learn More →
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full h-80 md:h-[420px] rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=1600&auto=format&fit=crop"
              alt="Real World Evidence"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* === Dynamic Projects (from Firestore) === */}
      <section className="w-full px-20  bg-gray-50">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-3">
              Projects & Impact
            </h2>
            <p className="text-gray-600 max-w-2xl text-base md:text-lg leading-relaxed">
              Shaping Change Through Research and Collaboration
            </p>
            <p className="text-gray-600 max-w-3xl mt-4 text-sm md:text-base leading-relaxed">
              Fenivi’s projects span hydrology, public health, sustainability,
              and social development — combining technical expertise with local
              knowledge to deliver measurable impact.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-12">
          {loading && (
            <p className="col-span-4 text-center text-gray-500">
              Loading projects...
            </p>
          )}

          {!loading && projects.length === 0 && (
            <p className="col-span-4 text-center text-gray-500">
              No projects available.
            </p>
          )}

          {projects.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative h-44 w-full overflow-hidden">
                <img
                  src={p.thumbnailUrl}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                {p.date && (
                  <span className="absolute top-3 left-3 bg-purple-600 text-white text-[11px] px-3 py-1 rounded-full shadow-md">
                    {new Date(p.date).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-2">
                  {p.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {p.description}
                </p>
                <button className="mt-auto bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-medium py-2 rounded-full hover:opacity-90 transition">
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
