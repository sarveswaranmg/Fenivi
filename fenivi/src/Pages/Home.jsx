import React, { useEffect, useState, useRef } from "react";
import LoadingScreen from "../Components/LoadingScreen";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { db } from "../firebase.js";
import { collection, query, orderBy, limit, getDocs, onSnapshot } from "firebase/firestore";
import StatsShowcase from "../Components/StatsShowcase";
import { BookOpen, FileText, BarChart3, ArrowRight } from "lucide-react";
import HeroCarousel from "../Components/HeroCarousel";
import ContentCarousel from "../Components/ContentCarousel";

gsap.registerPlugin(ScrollTrigger);
const Home = () => {
  const [articles, setArticles] = useState([]);
  const [events, setEvents] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [eventsLoading, setEventsLoading] = useState(true);
  const [blogsLoading, setBlogsLoading] = useState(true);

  useEffect(() => {
    if (!db) {
      setLoading(false);
      setEventsLoading(false);
      setBlogsLoading(false);
      return;
    }

    // Fetch Articles
    const qArticles = query(collection(db, "articles"), orderBy("createdAt", "desc"), limit(10));
    const unsubArticles = onSnapshot(qArticles, (snap) => {
      setArticles(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
      setLoading(false);
    });

    // Fetch Events
    const qEvents = query(collection(db, "events"), orderBy("createdAt", "desc"), limit(10));
    const unsubEvents = onSnapshot(qEvents, (snap) => {
      setEvents(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
      setEventsLoading(false);
    });

    // Fetch Blogs
    const qBlogs = query(collection(db, "blogs"), orderBy("createdAt", "desc"), limit(10));
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

  // GSAP Animations for intro section
  useEffect(() => {
    // Animate intro text
    gsap.fromTo(
      ".intro-text",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: "power2.out" }
    );

    // Animate stats grid boxes with stagger
    gsap.fromTo(
      ".stat-box",
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.4,
        ease: "back.out",
      }
    );
  }, []);

  // GSAP Animations for scroll-triggered sections
  useEffect(() => {
    // Events cards scroll animation
    const eventCards = gsap.utils.toArray(".event-card");
    eventCards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "top 50%",
            scrub: false,
          },
        }
      );
    });

    // Articles cards scroll animation
    const articleCards = gsap.utils.toArray(".article-card");
    articleCards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          delay: index * 0.08,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "top 50%",
            scrub: false,
          },
        }
      );
    });

    // Blogs cards scroll animation
    const blogCards = gsap.utils.toArray(".blog-card");
    blogCards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, x: index % 2 === 0 ? -40 : 40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          delay: index * 0.08,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "top 50%",
            scrub: false,
          },
        }
      );
    });

    // Real World Evidence section
    gsap.fromTo(
      ".rwe-content",
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".rwe-content",
          start: "top 80%",
          end: "top 50%",
          scrub: false,
        },
      }
    );

    gsap.fromTo(
      ".rwe-image",
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".rwe-image",
          start: "top 80%",
          end: "top 50%",
          scrub: false,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [events, articles, blogs]);

  return (
    <div className="w-full">

      {/* Hero Section */}
      {/* Hero Section */}
      <HeroCarousel />

      {/* Intro Section - Moved Up */}
      <section className="w-full relative py-12 lg:py-20">
        <div className="page-container grid grid-cols-1 md:grid-cols-2 items-center gap-12 lg:gap-16">
          {/* LEFT CONTENT */}
          <div className="intro-text flex flex-col justify-center">
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
            <div className="stat-box overflow-hidden rounded-3xl shadow-[0_6px_20px_rgba(0,0,0,0.08)] bg-white relative group hover-lift">
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
            <div className="stat-box p-4 sm:p-6 lg:p-7 xl:p-8 bg-white rounded-3xl shadow-[0_6px_20px_rgba(0,0,0,0.08)] border border-gray-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-all flex flex-col justify-center items-center text-center hover-lift">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-3 sm:mb-4 text-purple-600">
                <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">200+</h3>
              <p className="text-gray-500 text-[10px] sm:text-xs font-bold uppercase tracking-wider">Publications</p>
            </div>

            {/* Box 3: Years of Impact */}
            <div className="stat-box p-4 sm:p-6 lg:p-7 xl:p-8 bg-white rounded-3xl shadow-[0_6px_20px_rgba(0,0,0,0.08)] border border-gray-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-all flex flex-col justify-center items-center text-center hover-lift">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-3 sm:mb-4 text-indigo-600">
                <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">8+</h3>
              <p className="text-gray-500 text-[10px] sm:text-xs font-bold uppercase tracking-wider">Years of Impact</p>
            </div>

            {/* Box 4: Strategic Reports */}
            <div className="stat-box p-4 sm:p-6 lg:p-7 xl:p-8 bg-white rounded-3xl shadow-[0_6px_20px_rgba(0,0,0,0.08)] border border-gray-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-all flex flex-col justify-center items-center text-center hover-lift">
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
      <section className="w-full py-12 lg:py-20">
        <div className="page-container">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 md:mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
                Events
              </h2>
              <p className="text-gray-600 max-w-2xl text-base leading-relaxed">
                Join our global community for insightful workshops, hands-on
                masterclasses, and networking events designed to boost your skills
                and connections.
              </p>
            </div>

            <Link to="/events">
              <button className="btn-primary mt-4 md:mt-0">
                Explore more →
              </button>
            </Link>
          </div>

          {/* Events Carousel */}
          {eventsLoading && (
            <p className="text-center text-gray-500">Loading events...</p>
          )}

          {!eventsLoading && events.length === 0 && (
            <p className="text-center text-gray-500">No upcoming events.</p>
          )}

          {!eventsLoading && events.length > 0 && (
            <ContentCarousel
              items={events}
              exploreMoreLink="/events"
              exploreMoreText="Explore More Events"
              maxVisibleItems={7}
              renderCard={(e) => (
                <div className="event-card card flex flex-col hover-lift h-full">
                  {/* Image */}
                  <div className="relative h-44 w-full overflow-hidden">
                    <img
                      src={e.thumbnailUrl}
                      alt={e.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    {e.date && (
                      <span className="absolute top-3 left-3 bg-purple-600 text-white text-xs px-3 py-1 rounded-full shadow-md font-medium">
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
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                      {e.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-1">
                      {e.description}
                    </p>
                    {e.registrationUrl ? (
                      <a
                        href={e.registrationUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-primary w-full text-center">
                        Register
                      </a>
                    ) : (
                      <Link
                        to={`/events/${e.id}`}
                        className="btn-primary w-full text-center">
                        View Details
                      </Link>
                    )}
                  </div>
                </div>
              )}
            />
          )}
        </div>
      </section>
      <section className="w-full py-4 lg:py-8">
        <StatsShowcase />
      </section>

      {/* ===== Articles Section ===== */}
      <section className="w-full py-12 lg:py-20">
        <div className="page-container">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 md:mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
                Recent Evidence-Driven Projects
              </h2>
              <p className="text-gray-600 max-w-2xl text-base leading-relaxed">
                Discover our latest research studies, field insights, and
                innovations driving sustainable and community-led development
                across sectors.
              </p>
            </div>
            <Link to="/knowledge-hub">
              <button className="btn-primary mt-4 md:mt-0">
                Explore more →
              </button>
            </Link>
          </div>

          {/* Articles Carousel */}
          {loading && (
            <p className="text-center text-gray-500">Loading articles...</p>
          )}

          {!loading && articles.length === 0 && (
            <p className="text-center text-gray-500">No articles available.</p>
          )}

          {!loading && articles.length > 0 && (
            <ContentCarousel
              items={articles}
              exploreMoreLink="/knowledge-hub"
              exploreMoreText="Explore More Projects"
              maxVisibleItems={7}
              renderCard={(a) => (
                <div className="article-card card flex flex-col hover-lift h-full">
                  {/* Image */}
                  <div className="relative h-44 w-full overflow-hidden">
                    <img
                      src={a.thumbnailUrl}
                      alt={a.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    {a.publishedAt && (
                      <span className="absolute top-3 left-3 bg-purple-600 text-white text-xs px-3 py-1 rounded-full shadow-md font-medium">
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
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                      {a.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-1">
                      {a.description}
                    </p>
                    <Link
                      to={`/article/${a.id}`}
                      className="btn-primary w-full text-center">
                      Read More
                    </Link>
                  </div>
                </div>
              )}
            />
          )}
        </div>
      </section>

      {/* ===== Latest Blogs Section ===== */}
      <section className="w-full py-12 lg:py-20">
        <div className="page-container">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 md:mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
                Latest Blogs
              </h2>
              <p className="text-gray-600 max-w-2xl text-base leading-relaxed">
                Explore our latest insights, professional stories, and research updates
                designed to keep you informed and inspired.
              </p>
            </div>

            <Link to="/knowledge-hub">
              <button className="btn-primary mt-4 md:mt-0">
                Explore more →
              </button>
            </Link>
          </div>

          {/* Blogs Carousel */}
          {blogsLoading && (
            <p className="text-center text-gray-500">Loading blogs...</p>
          )}

          {!blogsLoading && blogs.length === 0 && (
            <p className="text-center text-gray-500">No blogs available.</p>
          )}

          {!blogsLoading && blogs.length > 0 && (
            <ContentCarousel
              items={blogs}
              exploreMoreLink="/knowledge-hub"
              exploreMoreText="Explore More Blogs"
              maxVisibleItems={7}
              renderCard={(blog) => (
                <div className="blog-card card flex flex-col hover-lift h-full">
                  {/* Image */}
                  <div className="relative h-44 w-full overflow-hidden">
                    <img
                      src={blog.thumbnailUrl}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 bg-indigo-600 text-white text-xs uppercase font-semibold px-3 py-1 rounded-full shadow-md">
                      Blog
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-1">
                      {blog.description}
                    </p>
                    <Link
                      to={`/article/${blog.id}`}
                      className="btn-primary w-full text-center">
                      Read More
                    </Link>
                  </div>
                </div>
              )}
            />
          )}
        </div>
      </section>

      {/* ===== Real World Evidence Section ===== */}
      <section className="w-full py-12 lg:py-20">
        <div className="page-container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="rwe-content">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Real-World Evidence
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
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
              className="btn-primary">
              Learn More →
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="rwe-image w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl">
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
