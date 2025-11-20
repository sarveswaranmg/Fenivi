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
      <div className="min-h-[70vh] md:min-h-screen w-full bg-gradient-to-r from-[#f7f5ff] via-[#eae1ff] to-[#f7f5ff] overflow-hidden relative">
        <section className="flex items-center justify-center gap-15 min-h-screen w-full">
          {/* Text Content */}
          <div className="max-w text-center md:text-left">
            <h1 className="text-xl md:text-3xl font-bold text-gray-900 leading-snug">
              Advancing sustainable development
              <br />
              through data-driven insights,
              <br />
              convergence approaches and
              <br />
              community engagement
            </h1>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/contact">
                <button className="relative px-6 py-3 rounded-full font-medium overflow-hidden group transform transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-0.5 hover:shadow-xl animate-gradient-premium focus:outline-none focus:ring-2 focus:ring-purple-200 bg-white/10 backdrop-blur-md border border-white/30 text-white">
                  {/* sheen overlay */}
                  <span className="absolute inset-0 pointer-events-none bg-gradient-to-r from-white/10 via-white/6 to-transparent opacity-0 group-hover:opacity-40 transform -translate-x-6 group-hover:translate-x-0 transition-all duration-400"></span>
                  <span className="relative text-white font-sans font-semibold">
                    Partner With Us
                  </span>
                </button>
              </Link>

              <Link to="/services">
                <button className="relative px-8 py-3 rounded-full font-semibold overflow-hidden transform transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-purple-200 group bg-white/20 backdrop-blur-lg border border-white/20 text-gray-900 shadow-sm hover:scale-105 hover:-translate-y-0.5 hover:shadow-2xl z-10">
                  <span className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-white/100 to-transparent opacity-0 group-hover:opacity-30 transform -translate-x-6 group-hover:translate-x-0 transition-all duration-400"></span>

                  <span className="relative z-10 tracking-wide">
                    Explore Our Services
                  </span>
                </button>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className=" flex justify-center">
            <img
              src={homeImage}
              alt="Homepage visual"
              className="w-150 object-cover"
            />
          </div>
        </section>
      </div>

      {/* About Section */}
      <div className="h-32 w-full bg-gradient-to-b from-[#f7f5ff] via-[#f3ecff] to-[#f0e8f8]"></div>
      <section
        className="min-h-screen w-full relative py-24 px-8 flex flex-col items-center justify-center -mt-32 pt-5"
        onMouseMove={handleMouseMove}
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, #f0e8f8 0%, #ffffff 50%)`,
          transition: "background 0.3s ease-out",
        }}>
        <section className="min-h-screen md:h-[110vh] w-full  flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 pt-20 md:pt-0 pb-8 md:pb-0">
          {/* LEFT */}
          <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left space-y-4 md:space-y-6 mb-6 md:mb-0">
            <p className="text-xl sm:text-base md:text-xl lg:text-lg xl:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto md:mx-0">
              Fenivi Research Solutions Pvt. Ltd. is a research and advisory
              organization committed to bridging the gap between policy,
              practice, and community needs. Since 2017, we have empowered
              governments, NGOs, corporates, and startups with evidence-based
              research, feasibility studies, and strategic advisory.
            </p>
          </div>

          {/* RIGHT */}

          <div className="grid grid-cols-2 grid-rows-2 gap-3 sm:gap-4 lg:gap-5 xl:gap-6 w-[95%] sm:w-[90%] max-w-[650px] h-[380px] sm:h-[420px] lg:h-[460px] xl:h-[520px]">
            <div className="overflow-hidden rounded-3xl shadow-[0_6px_20px_rgba(0,0,0,0.08)] bg-white">
              <img
                src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=900"
                alt="Knowledge Hub"
                className="w-full h-full object-cover rounded-3xl hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Cards */}
            <div className="p-3 sm:p-4 lg:p-5 xl:p-7 bg-white rounded-2xl sm:rounded-3xl shadow-[0_6px_20px_rgba(0,0,0,0.08)] border border-gray-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-all flex flex-col justify-between">
              <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-purple-600 mb-2 sm:mb-3 lg:mb-3 xl:mb-4" />
              <div>
                <h3 className="text-sm sm:text-base lg:text-base xl:text-lg font-semibold mb-1 sm:mb-1.5 lg:mb-1.5 xl:mb-2 text-gray-900">
                  200+ Publications
                </h3>
                <p className="text-gray-600 text-[10px] sm:text-xs lg:text-xs xl:text-sm leading-snug">
                  Research papers, policy briefs, and scientific articles.
                </p>
              </div>
            </div>

            <div className="p-3 sm:p-4 lg:p-5 xl:p-7 bg-white rounded-2xl sm:rounded-3xl shadow-[0_6px_20px_rgba(0,0,0,0.08)] border border-gray-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-all flex flex-col justify-between">
              <BarChart3 className="w-6 h-6 sm:w-7 sm:h-7 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-indigo-600 mb-2 sm:mb-3 lg:mb-3 xl:mb-4" />
              <div>
                <h3 className="text-sm sm:text-base lg:text-base xl:text-lg font-semibold mb-1 sm:mb-1.5 lg:mb-1.5 xl:mb-2 text-gray-900">
                  8+ years of experience
                </h3>
                <p className="text-gray-600 text-[10px] sm:text-xs lg:text-xs xl:text-sm leading-snug">
                  Successfully launched 10+ major projects.
                </p>
              </div>
            </div>

            <div className="p-3 sm:p-4 lg:p-5 xl:p-7 bg-white rounded-2xl sm:rounded-3xl shadow-[0_6px_20px_rgba(0,0,0,0.08)] border border-gray-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-all flex flex-col justify-between">
              <FileText className="w-6 h-6 sm:w-7 sm:h-7 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-purple-700 mb-2 sm:mb-3 lg:mb-3 xl:mb-4" />
              <div>
                <h3 className="text-sm sm:text-base lg:text-base xl:text-lg font-semibold mb-1 sm:mb-1.5 lg:mb-1.5 xl:mb-2 text-gray-900">
                  Reports & Studies
                </h3>
                <p className="text-gray-600 text-[10px] sm:text-xs lg:text-xs xl:text-sm leading-snug">
                  Comprehensive environmental & social studies.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-7xl mx-auto px-6 pt-10">
          <StatsShowcase />
        </section>
      </section>

      {/* ===== Articles Section ===== */}
      {/* ===== Articles Section ===== */}
      <section className="max-w-7xl mx-auto px-6  mt-20 pb-24">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <div>
            <h2 className="text-4xl font-semibold text-gray-900 mb-3">
              Recent Evidence-Driven Projects
            </h2>
            <p className="text-gray-600 max-w-2xl text-base leading-relaxed">
              Discover our latest research studies, field insights, and
              innovations driving sustainable and community-led development
              across sectors.
            </p>
          </div>
          <Link to="/knowledge-hub">
            <button className="mt-6 md:mt-0 bg-blue-500 text-white font-medium px-6 py-2 rounded-full shadow-md hover:scale-105 transition-transform">
              Explore more →
            </button>
          </Link>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col">
              {/* Image */}
              <div className="relative h-44 w-full overflow-hidden">
                <img
                  src={a.thumbnailUrl}
                  alt={a.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                {a.publishedAt && (
                  <span className="absolute top-3 left-3 bg-purple-600 text-white text-[11px] px-3 py-1 rounded-full shadow-md">
                    {new Date(a.publishedAt).toLocaleDateString("en-GB", {
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
                  {a.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {a.description}
                </p>
                <Link to={`/article/${a.id}`} className="block w-full">
                  <button className="w-full mt-auto bg-blue-500 text-white text-sm font-medium py-2 rounded-full hover:opacity-90 transition">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Events Section ===== */}

      <section className="max-w-7xl mx-auto px-6 pb-24">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <div>
            <h2 className="text-4xl font-semibold text-gray-900 mb-3">
              Events
            </h2>
            <p className="text-gray-600 max-w-2xl text-base leading-relaxed">
              Join our global community for insightful workshops, hands-on
              masterclasses, and networking events designed to boost your skills
              and connections.
            </p>
          </div>

          <Link to="/events">
            <button className="mt-6 md:mt-0 bg-blue-500 text-white font-medium px-6 py-2 rounded-full shadow-md hover:scale-105 transition-transform">
              Explore more →
            </button>
          </Link>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col">
              {/* Image */}
              <div className="relative h-44 w-full overflow-hidden">
                <img
                  src={e.thumbnailUrl}
                  alt={e.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                {e.date && (
                  <span className="absolute top-3 left-3 bg-purple-600 text-white text-[11px] px-3 py-1 rounded-full shadow-md">
                    {new Date(e.date).toLocaleDateString("en-GB", {
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
                  {e.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {e.description}
                </p>
                {e.registrationUrl ? (
                  <a
                    href={e.registrationUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto bg-blue-500 text-white text-sm font-medium py-2 rounded-full hover:opacity-90 transition text-center block">
                    Register
                  </a>
                ) : (
                  <Link
                    to={`/events/${e.id}`}
                    className="mt-auto bg-blue-500 text-white text-sm font-medium py-2 rounded-full hover:opacity-90 transition text-center block">
                    View Details
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full px-6 md:px-20 py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
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
              className="bg-blue-500 text-white font-medium px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform">
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
    </div>
  );
};

export default Home;
