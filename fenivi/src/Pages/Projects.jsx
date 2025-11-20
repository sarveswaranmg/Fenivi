import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { useAuth } from "../contexts/AuthContext";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("newest"); // newest, oldest, a-z, z-a
  const [showSortMenu, setShowSortMenu] = useState(false);
  const { isAdmin } = useAuth();
  const navigate = useNavigate();

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

  // Filter and sort projects
  const getFilteredAndSortedProjects = () => {
    let filtered = [...projects];

    // Apply search filter
    if (searchQuery.trim()) {
      filtered = filtered.filter(
        (p) =>
          p.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply sorting
    switch (sortOrder) {
      case "newest":
        filtered.sort((a, b) => {
          const dateA = a.date ? new Date(a.date) : new Date(a.createdAt);
          const dateB = b.date ? new Date(b.date) : new Date(b.createdAt);
          return dateB - dateA;
        });
        break;
      case "oldest":
        filtered.sort((a, b) => {
          const dateA = a.date ? new Date(a.date) : new Date(a.createdAt);
          const dateB = b.date ? new Date(b.date) : new Date(b.createdAt);
          return dateA - dateB;
        });
        break;
      case "a-z":
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "z-a":
        filtered.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        break;
    }

    return filtered;
  };

  const filteredProjects = getFilteredAndSortedProjects();

  return (
    <div className="w-full min-h-screen">
      {/* === Static Flip Projects === */}
      <section className="relative w-full h-auto md:h-screen overflow-hidden pt-0">
        <div
          className="grid grid-cols-1 md:grid-cols-4 w-full h-full"
          style={{ perspective: "1400px" }}
        >
          {staticProjects.map((p) => (
            <div
              key={p.id}
              className="group relative h-[60vh] md:h-full w-full"
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
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex items-end justify-between">
                    <div>
                      <p className="text-white text-sm sm:text-lg md:text-xl font-medium">
                        {p.title}
                      </p>
                      <p className="text-white/80 text-[10px] sm:text-xs md:text-sm">
                        {p.city}
                      </p>
                    </div>
                    <span className="text-white text-xl sm:text-2xl md:text-3xl">↗</span>
                  </div>
                </div>

                {/* BACK */}
                <div
                  className="absolute inset-0 bg-black text-white p-4 sm:p-6 md:p-8 flex flex-col justify-between [transform:rotateY(180deg)]"
                  style={{
                    backfaceVisibility: "hidden",
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-8 sm:mt-12 gap-2">
                    <h3 className="text-lg sm:text-2xl md:text-3xl font-semibold">
                      {p.title}
                    </h3>
                    <span className="text-white/60 text-xs sm:text-sm">{p.city}</span>
                  </div>
                  <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                    {p.brief}
                  </p>
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="text-white/60 text-xs sm:text-sm">Project #{p.id}</span>
                    <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/80 text-black text-xs sm:text-sm font-medium">
                      Static Project
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* === Dynamic Projects (from Firestore) === */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-8 sm:py-12 md:py-14 lg:py-16 xl:py-20 bg-gray-50">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 sm:mb-8 md:mb-10 gap-4 sm:gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-semibold text-gray-900 mb-2 sm:mb-3">
              Projects & Impact
            </h2>
            <p className="text-gray-600 max-w-2xl text-sm sm:text-base md:text-base lg:text-base leading-relaxed">
              Shaping Change Through Research and Collaboration
            </p>
            <p className="text-gray-600 max-w-3xl mt-2 sm:mt-3 md:mt-4 text-xs sm:text-sm md:text-sm lg:text-sm leading-relaxed">
              Fenivi's projects span hydrology, public health, sustainability,
              and social development — combining technical expertise with local
              knowledge to deliver measurable impact.
            </p>
          </div>

          {/* Search and Sort Controls */}
          <div className="flex flex-col gap-3 sm:gap-4 items-stretch sm:items-end w-full md:w-auto">
            {/* Search Bar - Always Visible */}
            <div className="relative w-full md:w-96">
              <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 sm:pl-11 pr-10 sm:pr-12 py-2 sm:py-3 bg-white border-2 border-gray-200 rounded-xl text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-0 pr-3 sm:pr-4 flex items-center text-gray-400 hover:text-gray-600"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="relative w-full sm:w-auto">
              <button
                onClick={() => setShowSortMenu(!showSortMenu)}
                className="flex items-center justify-between sm:justify-start gap-2 px-3 sm:px-5 py-2 sm:py-2.5 bg-white border-2 border-gray-200 rounded-xl text-gray-700 text-xs sm:text-sm font-medium hover:border-gray-300 hover:bg-gray-50 transition-all shadow-sm w-full sm:w-auto"
              >
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
                  </svg>
                  <span>
                    {sortOrder === "newest" && "Newest First"}
                    {sortOrder === "oldest" && "Oldest First"}
                    {sortOrder === "a-z" && "A-Z"}
                    {sortOrder === "z-a" && "Z-A"}
                  </span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform ${showSortMenu ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {showSortMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-10">
                  <button
                    onClick={() => {
                      setSortOrder("newest");
                      setShowSortMenu(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-sm hover:bg-purple-50 transition-colors ${
                      sortOrder === "newest" ? "bg-purple-50 text-purple-700 font-semibold" : "text-gray-700"
                    }`}
                  >
                    Newest First
                  </button>
                  <button
                    onClick={() => {
                      setSortOrder("oldest");
                      setShowSortMenu(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-sm hover:bg-purple-50 transition-colors ${
                      sortOrder === "oldest" ? "bg-purple-50 text-purple-700 font-semibold" : "text-gray-700"
                    }`}
                  >
                    Oldest First
                  </button>
                  <button
                    onClick={() => {
                      setSortOrder("a-z");
                      setShowSortMenu(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-sm hover:bg-purple-50 transition-colors ${
                      sortOrder === "a-z" ? "bg-purple-50 text-purple-700 font-semibold" : "text-gray-700"
                    }`}
                  >
                    A-Z
                  </button>
                  <button
                    onClick={() => {
                      setSortOrder("z-a");
                      setShowSortMenu(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-sm hover:bg-purple-50 transition-colors ${
                      sortOrder === "z-a" ? "bg-purple-50 text-purple-700 font-semibold" : "text-gray-700"
                    }`}
                  >
                    Z-A
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {loading && (
            <p className="col-span-4 text-center text-gray-500">
              Loading projects...
            </p>
          )}

          {!loading && filteredProjects.length === 0 && (
            <p className="col-span-4 text-center text-gray-500">
              {searchQuery ? "No projects found matching your search." : "No projects available."}
            </p>
          )}

          {filteredProjects.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-xl sm:rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative h-36 sm:h-44 lg:h-48 xl:h-52 w-full overflow-hidden">
                <img
                  src={p.thumbnailUrl}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                {p.date && (
                  <span className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-purple-600 text-white text-[10px] sm:text-[11px] px-2 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-md">
                    {new Date(p.date).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                )}
                {/* Edit Button (Admin Only) */}
                {isAdmin && (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(`/admin/edit-project/${p.id}`);
                    }}
                    className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-white hover:bg-gray-100 text-gray-800 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-medium shadow-lg transition-all flex items-center gap-1"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-3.5 sm:w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    Edit
                  </button>
                )}
              </div>

              {/* Content */}
              <div className="p-3 sm:p-4 lg:p-4 xl:p-5 flex flex-col flex-1">
                <h3 className="text-sm sm:text-base lg:text-base xl:text-lg font-semibold text-gray-900 mb-1 line-clamp-2">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-sm text-gray-600 mb-3 sm:mb-4 line-clamp-3">
                  {p.description}
                </p>
                <Link
                  to={`/projects/${p.id}`}
                  className="mt-auto bg-black text-white text-xs sm:text-sm font-medium py-1.5 sm:py-2 rounded-full hover:opacity-90 transition text-center block"
                >
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
