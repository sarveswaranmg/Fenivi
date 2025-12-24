import React, { useEffect, useState } from "react";
import LoadingScreen from "../Components/LoadingScreen";
import { Link } from "react-router-dom";

import { db } from "../firebase.js";
import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";
import StatsShowcase from "../Components/StatsShowcase";
import { BookOpen, FileText, BarChart3 } from "lucide-react";
import homeImage from "../assets/homeImage.png";
const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [articles, setArticles] = useState([]);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [eventsLoading, setEventsLoading] = useState(true);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  // Fetch latest 3 articles
  useEffect(() => {
    async function loadTopArticles() {
      if (!db) {
        console.warn("Firestore 'db' is not initialized.");
        setLoading(false);
        return;
      }
      try {
        const q = query(
          collection(db, "articles"),
          orderBy("createdAt", "desc"),
          limit(3)
        );
        const snap = await getDocs(q);
        const list = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
        setArticles(list);
      } catch (err) {
        console.error("Error loading articles for home:", err);
      } finally {
        setLoading(false);
      }
    }
    loadTopArticles();
  }, []);

  // Fetch latest 3 events
  useEffect(() => {
    async function loadEvents() {
      if (!db) {
        console.warn("Firestore 'db' is not initialized.");
        setEventsLoading(false);
        return;
      }
      try {
        const q = query(
          collection(db, "events"),
          orderBy("createdAt", "desc"),
          limit(3)
        );
        const snap = await getDocs(q);
        const list = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
        setEvents(list);
      } catch (err) {
        console.error("Error loading events for home:", err);
      } finally {
        setEventsLoading(false);
      }
    }
    loadEvents();
  }, []);

  return (
    <div className="w-full">
      <LoadingScreen />

      {/* Hero Section */}
      <div className="min-h-fit md:min-h-screen w-full bg-gradient-to-r from-[#f7f5ff] via-[#eae1ff] to-[#f7f5ff] overflow-hidden relative">
        <section className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-12 xl:gap-15 min-h-fit md:min-h-screen w-full px-5 md:px-10 lg:px-16 pt-24 pb-12 md:py-0">
          {/* Image - Shows first on mobile (order-1), second on desktop (md:order-2) */}
          <div className="flex justify-center order-1 md:order-2">
            <img
              src={homeImage}
              alt="Homepage visual"
              className="w-44 sm:w-56 md:w-72 lg:w-96 xl:w-150 object-cover"
            />
          </div>

          {/* Text Content - Shows second on mobile (order-2), first on desktop (md:order-1) */}
          <div className="w-full md:max-w text-left order-2 md:order-1">
            <h1 className="text-[15px] sm:text-xl md:text-lg lg:text-xl xl:text-3xl font-bold text-gray-900 leading-snug">
              Advancing sustainable development
              <br />
              through data-driven insights,
              <br />
              convergence approaches and
              <br />
              community engagement
            </h1>

            <div className="mt-5 md:mt-8 flex flex-row gap-2 sm:gap-4 justify-start">
              <Link to="/contact">
                <button className="relative px-3 py-1.5 sm:px-5 sm:py-2.5 lg:px-6 lg:py-3 rounded-full font-medium overflow-hidden group transform transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-0.5 hover:shadow-xl animate-gradient-premium focus:outline-none focus:ring-2 focus:ring-purple-200 bg-white/10 backdrop-blur-md border border-white/30 text-white">
                  {/* sheen overlay */}
                  <span className="absolute inset-0 pointer-events-none bg-gradient-to-r from-white/10 via-white/6 to-transparent opacity-0 group-hover:opacity-40 transform -translate-x-6 group-hover:translate-x-0 transition-all duration-400"></span>
                  <span className="relative text-white font-sans font-semibold text-sm sm:text-sm lg:text-base">
                    Partner With Us
                  </span>
                </button>
              </Link>

              <Link to="/services">
                <button className="relative px-3 py-1.5 sm:px-6 sm:py-2.5 lg:px-8 lg:py-3 rounded-full font-semibold overflow-hidden transform transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-purple-200 group bg-white/20 backdrop-blur-lg border border-white/20 text-gray-900 shadow-sm hover:scale-105 hover:-translate-y-0.5 hover:shadow-2xl z-10">
                  <span className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-white/100 to-transparent opacity-0 group-hover:opacity-30 transform -translate-x-6 group-hover:translate-x-0 transition-all duration-400"></span>

                  <span className="relative z-10 tracking-wide text-sm sm:text-sm lg:text-base">
                    Explore Our Services
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* About Section */}
      <div className="h-16 md:h-32 w-full bg-gradient-to-b from-[#f7f5ff] via-[#f3ecff] to-[#f0e8f8]"></div>
      <section
        className="min-h-[auto] md:min-h-screen w-full relative py-12 md:py-24 px-5 md:px-10 lg:px-16 flex flex-col items-center justify-center -mt-16 md:-mt-32"
        onMouseMove={handleMouseMove}
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, #f0e8f8 0%, #ffffff 50%)`,
          transition: "background 0.3s ease-out",
        }}>
        <section className="min-h-[auto] md:h-auto lg:h-[100vh] xl:h-[110vh] w-full flex flex-col md:flex-row items-center justify-center pt-8 md:pt-0 pb-6 md:pb-0 gap-6 md:gap-8 lg:gap-10">
          {/* LEFT */}
          <div className="w-full md:w-1/2 flex flex-col justify-center text-left space-y-3 md:space-y-4 lg:space-y-6 mb-4 md:mb-0">
            <p className="text-base sm:text-base md:text-sm lg:text-base xl:text-xl text-gray-600 leading-relaxed max-w-lg">
              Fenivi Research Solutions Pvt. Ltd. is a research and advisory
              organization committed to bridging the gap between policy,
              practice, and community needs. Since 2017, we have empowered
              governments, NGOs, corporates, and startups with evidence-based
              research, feasibility studies, and strategic advisory.
            </p>
          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-2 grid-rows-2 gap-3 sm:gap-4 md:gap-3 lg:gap-4 xl:gap-6 w-full md:w-[95%] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[650px] h-[260px] sm:h-[320px] md:h-[320px] lg:h-[380px] xl:h-[520px]">
            <div className="overflow-hidden rounded-3xl shadow-[0_6px_20px_rgba(0,0,0,0.08)] bg-white">
              <img
                src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=900"
                alt="Knowledge Hub"
                className="w-full h-full object-cover rounded-3xl hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Cards */}
            <div className="p-2 sm:p-4 md:p-3 lg:p-4 xl:p-7 bg-white rounded-xl sm:rounded-3xl shadow-[0_6px_20px_rgba(0,0,0,0.08)] border border-gray-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-all flex flex-col justify-between">
              <BookOpen className="w-5 h-5 sm:w-7 sm:h-7 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8 text-purple-600 mb-1 sm:mb-3 md:mb-2 lg:mb-3 xl:mb-4" />
              <div>
                <h3 className="text-sm sm:text-sm md:text-xs lg:text-sm xl:text-lg font-semibold mb-0.5 sm:mb-1.5 md:mb-1 lg:mb-1.5 xl:mb-2 text-gray-900">
                  200+ Publications
                </h3>
                <p className="text-gray-600 text-xs sm:text-xs md:text-[9px] lg:text-[10px] xl:text-sm leading-snug">
                  Research papers, policy briefs, and scientific articles.
                </p>
              </div>
            </div>

            <div className="p-2 sm:p-4 md:p-3 lg:p-4 xl:p-7 bg-white rounded-xl sm:rounded-3xl shadow-[0_6px_20px_rgba(0,0,0,0.08)] border border-gray-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-all flex flex-col justify-between">
              <BarChart3 className="w-5 h-5 sm:w-7 sm:h-7 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8 text-indigo-600 mb-1 sm:mb-3 md:mb-2 lg:mb-3 xl:mb-4" />
              <div>
                <h3 className="text-sm sm:text-sm md:text-xs lg:text-sm xl:text-lg font-semibold mb-0.5 sm:mb-1.5 md:mb-1 lg:mb-1.5 xl:mb-2 text-gray-900">
                  8+ years of experience
                </h3>
                <p className="text-gray-600 text-xs sm:text-xs md:text-[9px] lg:text-[10px] xl:text-sm leading-snug">
                  Successfully launched 10+ major projects.
                </p>
              </div>
            </div>

            <div className="p-2 sm:p-4 md:p-3 lg:p-4 xl:p-7 bg-white rounded-xl sm:rounded-3xl shadow-[0_6px_20px_rgba(0,0,0,0.08)] border border-gray-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-all flex flex-col justify-between">
              <FileText className="w-5 h-5 sm:w-7 sm:h-7 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8 text-purple-700 mb-1 sm:mb-3 md:mb-2 lg:mb-3 xl:mb-4" />
              <div>
                <h3 className="text-sm sm:text-sm md:text-xs lg:text-sm xl:text-lg font-semibold mb-0.5 sm:mb-1.5 md:mb-1 lg:mb-1.5 xl:mb-2 text-gray-900">
                  Reports & Studies
                </h3>
                <p className="text-gray-600 text-xs sm:text-xs md:text-[9px] lg:text-[10px] xl:text-sm leading-snug">
                  Comprehensive environmental & social studies.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full pt-8 md:pt-12">
          <StatsShowcase />
        </section>
      </section>

      
      {/* ===== Events Section ===== */}
      <section className="w-full px-5 md:px-10 lg:px-16 py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 md:mb-8 lg:mb-10">
            <div>
              <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-900 mb-2 md:mb-3">
                Events
              </h2>
              <p className="text-gray-600 max-w-2xl text-base md:text-sm lg:text-base leading-relaxed">
                Join our global community for insightful workshops, hands-on
                masterclasses, and networking events designed to boost your skills
                and connections.
              </p>
            </div>

            <Link to="/events">
              <button className="mt-4 md:mt-0 bg-blue-500 text-white font-medium px-5 md:px-5 lg:px-6 py-2.5 md:py-2 text-base md:text-sm lg:text-base rounded-full shadow-md hover:scale-105 transition-transform">
                Explore more →
              </button>
            </Link>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
            {eventsLoading && (
              <p className="col-span-4 text-center text-gray-500">
                Loading events...
              </p>
            )}

            {!eventsLoading && events.length === 0 && (
              <p className="col-span-4 text-center text-gray-500">
                No upcoming events.
              </p>
            )}

            {events.map((e) => (
              <div
                key={e.id}
                className="bg-white rounded-lg md:rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col">
                {/* Image */}
                <div className="relative h-40 md:h-40 lg:h-44 w-full overflow-hidden">
                  <img
                    src={e.thumbnailUrl}
                    alt={e.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  {e.date && (
                    <span className="absolute top-2 left-2 md:top-3 md:left-3 bg-purple-600 text-white text-xs md:text-[11px] px-2.5 md:px-3 py-1 md:py-1 rounded-full shadow-md">
                      {new Date(e.date).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-4 md:p-4 lg:p-5 flex flex-col flex-1">
                  <h3 className="text-base md:text-base lg:text-lg font-semibold text-gray-900 mb-1.5 line-clamp-2">
                    {e.title}
                  </h3>
                  <p className="text-sm md:text-sm text-gray-600 mb-3 md:mb-4 line-clamp-3">
                    {e.description}
                  </p>
                  {e.registrationUrl ? (
                    <a
                      href={e.registrationUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-auto bg-blue-500 text-white text-sm md:text-sm font-medium py-2 md:py-2 rounded-full hover:opacity-90 transition text-center block">
                      Register
                    </a>
                  ) : (
                    <Link
                      to={`/events/${e.id}`}
                      className="mt-auto bg-blue-500 text-white text-sm md:text-sm font-medium py-2 md:py-2 rounded-full hover:opacity-90 transition text-center block">
                      View Details
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Articles Section ===== */}
      <section className="w-full px-5 md:px-10 lg:px-16 py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 md:mb-8 lg:mb-10">
            <div>
              <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-900 mb-2 md:mb-3">
                Recent Evidence-Driven Projects
              </h2>
              <p className="text-gray-600 max-w-2xl text-base md:text-sm lg:text-base leading-relaxed">
                Discover our latest research studies, field insights, and
                innovations driving sustainable and community-led development
                across sectors.
              </p>
            </div>
            <Link to="/knowledge-hub">
              <button className="mt-4 md:mt-0 bg-blue-500 text-white font-medium px-5 md:px-5 lg:px-6 py-2.5 md:py-2 text-base md:text-sm lg:text-base rounded-full shadow-md hover:scale-105 transition-transform">
                Explore more →
              </button>
            </Link>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
          {loading && (
            <p className="col-span-4 text-center text-gray-500">
              Loading articles...
            </p>
          )}

          {!loading && articles.length === 0 && (
            <p className="col-span-4 text-center text-gray-500">
              No articles available.
            </p>
          )}

          {articles.map((a) => (
            <div
              key={a.id}
              className="bg-white rounded-lg md:rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col">
              {/* Image */}
              <div className="relative h-40 md:h-40 lg:h-44 w-full overflow-hidden">
                <img
                  src={a.thumbnailUrl}
                  alt={a.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                {a.publishedAt && (
                  <span className="absolute top-2 left-2 md:top-3 md:left-3 bg-purple-600 text-white text-xs md:text-[11px] px-2.5 md:px-3 py-1 md:py-1 rounded-full shadow-md">
                    {new Date(a.publishedAt).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-4 md:p-4 lg:p-5 flex flex-col flex-1">
                <h3 className="text-base md:text-base lg:text-lg font-semibold text-gray-900 mb-1.5 line-clamp-2">
                  {a.title}
                </h3>
                <p className="text-sm md:text-sm text-gray-600 mb-3 md:mb-4 line-clamp-3">
                  {a.description}
                </p>
                <Link to={`/article/${a.id}`} className="block w-full">
                  <button className="w-full mt-auto bg-blue-500 text-white text-sm md:text-sm font-medium py-2 md:py-2 rounded-full hover:opacity-90 transition">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          ))}
          </div>
        </div>
      </section>


      {/* ===== Real World Evidence Section ===== */}
      <section className="w-full px-5 md:px-10 lg:px-16 py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 lg:gap-10 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-gray-900 mb-3 md:mb-5 lg:mb-6">
              Real-World Evidence
            </h2>

            <p className="text-gray-700 text-base md:text-sm lg:text-base xl:text-lg leading-relaxed mb-4 md:mb-5 lg:mb-6 text-left md:text-justify">
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
              className="bg-blue-500 text-white font-medium px-5 md:px-5 lg:px-6 py-2.5 md:py-2.5 lg:py-3 text-base md:text-sm lg:text-base rounded-full shadow-md hover:scale-105 transition-transform">
              Learn More →
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full h-48 md:h-72 lg:h-80 xl:h-[420px] rounded-lg md:rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=1600&auto=format&fit=crop"
              alt="Real World Evidence"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
