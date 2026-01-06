import React, { useEffect, useState } from "react";
import LoadingScreen from "../Components/LoadingScreen";
import { Link } from "react-router-dom";

import { db } from "../firebase.js";
import { collection, query, orderBy, limit, getDocs, onSnapshot } from "firebase/firestore";
import StatsShowcase from "../Components/StatsShowcase";
import { BookOpen, FileText, BarChart3, ArrowRight } from "lucide-react";
import HeroCarousel from "../Components/HeroCarousel";
const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [articles, setArticles] = useState([]);
  const [events, setEvents] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [eventsLoading, setEventsLoading] = useState(true);
  const [blogsLoading, setBlogsLoading] = useState(true);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  useEffect(() => {
    if (!db) {
      setLoading(false);
      setEventsLoading(false);
      setBlogsLoading(false);
      return;
    }

    // Fetch Articles
    const qArticles = query(collection(db, "articles"), orderBy("createdAt", "desc"), limit(3));
    const unsubArticles = onSnapshot(qArticles, (snap) => {
      setArticles(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
      setLoading(false);
    });

    // Fetch Events
    const qEvents = query(collection(db, "events"), orderBy("createdAt", "desc"), limit(3));
    const unsubEvents = onSnapshot(qEvents, (snap) => {
      setEvents(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
      setEventsLoading(false);
    });

    // Fetch Blogs
    const qBlogs = query(collection(db, "blogs"), orderBy("createdAt", "desc"), limit(3));
    const unsubBlogs = onSnapshot(qBlogs, (snap) => {
      setBlogs(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
      setBlogsLoading(false);
    });

    return () => {
      unsubArticles();
      unsubEvents();
      unsubBlogs();
    };
  }, []);

  return (
    <div className="w-full">

      {/* Hero Section */}
      {/* Hero Section */}
      <HeroCarousel />

      {/* Intro Section - Moved Up */}
      <section
        className="w-full relative py-16 md:py-24"
        onMouseMove={handleMouseMove}
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, #f0e8f8 0%, #ffffff 50%)`,
          transition: "background 0.3s ease-out",
        }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-2 items-center gap-16">
          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-center">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium mb-6">
              Fenivi Research Solutions Pvt. Ltd. is a research and advisory
              organization committed to bridging the gap between policy,
              practice, and community needs.
            </p>
            <p className="text-lg md:text-lg text-gray-600 leading-relaxed">
              Since 2017, we have empowered governments, NGOs, corporates, and startups
              with evidence-based research, feasibility studies, and strategic advisory.
            </p>
          </div>

          {/* 2x2 STATS GRID (SYNCED WITH KNOWLEDGE HUB) */}
          <div className="grid grid-cols-2 grid-rows-2 gap-3 sm:gap-4 lg:gap-5 xl:gap-6 w-full max-w-[650px] aspect-[4/3] md:aspect-square">
            {/* Box 1: Image + Label */}
            <div className="overflow-hidden rounded-3xl shadow-[0_6px_20px_rgba(0,0,0,0.08)] bg-white relative group">
              <img
                src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=900"
                alt="Impact Footprint"
                className="w-full h-full object-cover rounded-3xl transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 sm:p-6 flex flex-col justify-end h-full">
                <p className="text-white text-[10px] sm:text-xs uppercase tracking-widest font-semibold opacity-90 mb-1">Impact Footprint</p>
                <h4 className="text-white text-lg sm:text-xl xl:text-2xl font-bold">12+ Districts</h4>
              </div>
            </div>

            {/* Box 2: Publications */}
            <div className="p-4 sm:p-6 lg:p-7 xl:p-8 bg-white rounded-3xl shadow-[0_6px_20px_rgba(0,0,0,0.08)] border border-gray-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-all flex flex-col justify-center items-center text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-3 sm:mb-4 text-purple-600">
                <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">200+</h3>
              <p className="text-gray-500 text-[10px] sm:text-xs font-bold uppercase tracking-wider">Publications</p>
            </div>

            {/* Box 3: Years of Impact */}
            <div className="p-4 sm:p-6 lg:p-7 xl:p-8 bg-white rounded-3xl shadow-[0_6px_20px_rgba(0,0,0,0.08)] border border-gray-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-all flex flex-col justify-center items-center text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-3 sm:mb-4 text-indigo-600">
                <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">8+</h3>
              <p className="text-gray-500 text-[10px] sm:text-xs font-bold uppercase tracking-wider">Years of Impact</p>
            </div>

            {/* Box 4: Strategic Reports */}
            <div className="p-4 sm:p-6 lg:p-7 xl:p-8 bg-white rounded-3xl shadow-[0_6px_20px_rgba(0,0,0,0.08)] border border-gray-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-all flex flex-col justify-center items-center text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-3 sm:mb-4 text-purple-700">
                <FileText className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">100+</h3>
              <p className="text-gray-500 text-[10px] sm:text-xs font-bold uppercase tracking-wider">Strategic Reports</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Events Section ===== */}
      <section className="w-full py-16 md:py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 md:mb-8 lg:mb-10">
            <div>
              <h2 className="text-xl md:text-2xl lg:text-2xl xl:text-3xl font-semibold text-gray-900 mb-2 md:mb-3">
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
      <section className="w-full pt-8 md:pt-12">
        <StatsShowcase />
      </section>

      {/* ===== Articles Section ===== */}
      <section className="w-full py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 md:mb-8 lg:mb-10">
            <div>
              <h2 className="text-xl md:text-2xl lg:text-2xl xl:text-3xl font-semibold text-gray-900 mb-2 md:mb-3">
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

      {/* ===== Latest Blogs Section (Synced with Events) ===== */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 md:mb-8 lg:mb-10">
            <div>
              <h2 className="text-xl md:text-2xl lg:text-2xl xl:text-3xl font-semibold text-gray-900 mb-2 md:mb-3">
                Latest Blogs
              </h2>
              <p className="text-gray-600 max-w-2xl text-base md:text-sm lg:text-base leading-relaxed">
                Explore our latest insights, professional stories, and research updates
                designed to keep you informed and inspired.
              </p>
            </div>

            <Link to="/knowledge-hub">
              <button className="mt-4 md:mt-0 bg-blue-500 text-white font-medium px-5 md:px-5 lg:px-6 py-2.5 md:py-2 text-base md:text-sm lg:text-base rounded-full shadow-md hover:scale-105 transition-transform">
                Explore more →
              </button>
            </Link>
          </div>

          {/* Blogs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
            {blogsLoading && (
              <p className="col-span-4 text-center text-gray-500">
                Loading blogs...
              </p>
            )}

            {!blogsLoading && blogs.length === 0 && (
              <p className="col-span-4 text-center text-gray-500">
                No articles available.
              </p>
            )}

            {blogs.slice(0, 4).map((blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-lg md:rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col">
                {/* Image */}
                <div className="relative h-40 md:h-40 lg:h-44 w-full overflow-hidden">
                  <img
                    src={blog.thumbnailUrl}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-2 left-2 md:top-3 md:left-3">
                    <span className="bg-indigo-600 text-white text-xs md:text-[10px] uppercase font-bold px-2.5 md:px-3 py-1 md:py-1 rounded-full shadow-md">
                      Blog
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 md:p-4 lg:p-5 flex flex-col flex-1">
                  <h3 className="text-base md:text-base lg:text-lg font-semibold text-gray-900 mb-1.5 line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-sm md:text-sm text-gray-600 mb-3 md:mb-4 line-clamp-3">
                    {blog.description}
                  </p>
                  <Link
                    to={`/article/${blog.id}`}
                    className="mt-auto bg-blue-500 text-white text-sm md:text-sm font-medium py-2 md:py-2 rounded-full hover:opacity-90 transition text-center block">
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Real World Evidence Section ===== */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Real-World Evidence
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-8 text-left md:text-justify">
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
              className="bg-blue-500 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform">
              Learn More →
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full h-[300px] md:h-[450px] rounded-3xl overflow-hidden shadow-xl">
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
