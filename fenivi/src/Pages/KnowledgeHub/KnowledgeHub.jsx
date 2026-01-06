import React, { useEffect, useState, useRef } from "react";
import ArticleCard from "./Components/ArticleCard.jsx";
import { db } from "../../firebase.js";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { gsap } from "gsap";
import { BookOpen, FileText, BarChart3, Newspaper } from "lucide-react";

export default function KnowledgeHub() {
  const [articles, setArticles] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [blogsLoading, setBlogsLoading] = useState(true);

  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");
  const [showSortMenu, setShowSortMenu] = useState(false);

  const [blogSearchQuery, setBlogSearchQuery] = useState("");
  const [blogSortOrder, setBlogSortOrder] = useState("newest");
  const [showBlogSortMenu, setShowBlogSortMenu] = useState(false);
  const rowRefs = useRef([]);

  // Firestore fetching
  useEffect(() => {
    if (!db) {
      setLoading(false);
      setBlogsLoading(false);
      return;
    }

    // Fetch Articles
    const qArticles = query(collection(db, "articles"), orderBy("createdAt", "desc"));
    const unsubArticles = onSnapshot(
      qArticles,
      (snapshot) => {
        const list = snapshot.docs.map((doc, index) => ({
          no: String(index + 1).padStart(3, "0"),
          id: doc.id,
          ...doc.data(),
        }));
        setArticles(list);
        setLoading(false);
      },
      () => setLoading(false)
    );

    // Fetch Blogs
    const qBlogs = query(collection(db, "blogs"), orderBy("createdAt", "desc"));
    const unsubBlogs = onSnapshot(
      qBlogs,
      (snapshot) => {
        const list = snapshot.docs.map((doc, index) => ({
          no: String(index + 1).padStart(3, "0"),
          id: doc.id,
          ...doc.data(),
        }));
        setBlogs(list);
        setBlogsLoading(false);
      },
      () => setBlogsLoading(false)
    );

    return () => {
      unsubArticles();
      unsubBlogs();
    };
  }, []);

  // Filter and sort items (generic helper)
  const getProcessedItems = (items, queryText, order) => {
    let filtered = [...items];

    if (queryText.trim()) {
      filtered = filtered.filter(
        (a) =>
          a.title?.toLowerCase().includes(queryText.toLowerCase()) ||
          a.description?.toLowerCase().includes(queryText.toLowerCase()) ||
          a.author?.toLowerCase().includes(queryText.toLowerCase())
      );
    }

    switch (order) {
      case "newest":
        filtered.sort((a, b) => (b.publishedAt || b.createdAt) - (a.publishedAt || a.createdAt));
        break;
      case "oldest":
        filtered.sort((a, b) => (a.publishedAt || a.createdAt) - (b.publishedAt || b.createdAt));
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

  const filteredArticles = getProcessedItems(articles, searchQuery, sortOrder);
  const filteredBlogs = getProcessedItems(blogs, blogSearchQuery, blogSortOrder);

  // GSAP animation
  useEffect(() => {
    const rows = rowRefs.current.filter(Boolean);
    if (rows.length === 0) return;

    const hoverCapable = window.matchMedia("(hover: hover)").matches;

    const cleanups = rows.map((row) => {
      const wrapper = row.querySelector(".flip-wrapper");
      const front = row.querySelector(".flip-front");
      const back = row.querySelector(".flip-back");

      gsap.set(row, { perspective: 1000 });
      gsap.set(wrapper, { transformStyle: "preserve-3d" });
      gsap.set(front, { backfaceVisibility: "hidden", rotateX: 0 });
      gsap.set(back, { backfaceVisibility: "hidden", rotateX: 180 });

      const toFront = () =>
        gsap.to(wrapper, { rotateX: 0, duration: 0.6, ease: "power3.out" });
      const toBack = () =>
        gsap.to(wrapper, { rotateX: 180, duration: 0.6, ease: "power3.out" });

      let onEnter, onLeave, onClick;

      if (hoverCapable) {
        onEnter = () => toBack();
        onLeave = () => toFront();
        row.addEventListener("mouseenter", onEnter);
        row.addEventListener("mouseleave", onLeave);
      } else {
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
  }, [filteredArticles]);

  return (
    <div className="w-full min-h-screen bg-white text-gray-800">
      {/* HERO */}
      <section className="min-h-screen md:h-[110vh] w-full bg-gradient-to-r from-[#f8f9ff] to-[#f3f4fc] flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-12 lg:px-12 pt-20 md:pt-0 pb-8 md:pb-0">
        {/* LEFT */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left space-y-4 md:space-y-6 mb-6 md:mb-0 max-w-[1440px] mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl font-extrabold text-gray-900 leading-tight">
            Turning Data into Knowledge
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto md:mx-0">
            Fenivi Research Solutions bridges the gap between policy, practice,
            and community needs through actionable research and evidence-based
            insights that drive sustainable change.
          </p>
        </div>

        {/* RIGHT */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="grid grid-cols-2 grid-rows-2 gap-3 sm:gap-4 lg:gap-5 xl:gap-6 w-[95%] sm:w-[90%] max-w-[650px] h-[380px] sm:h-[420px] lg:h-[460px] xl:h-[520px]">
            <div className="relative overflow-hidden rounded-3xl shadow-[0_6px_20px_rgba(0,0,0,0.08)] bg-white group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=900"
                alt="Knowledge Hub"
                className="w-full h-full object-cover rounded-3xl group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 text-center">
                <button
                  onClick={() => {
                    const element = document.getElementById("blogs-section");
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-white text-gray-900 font-bold px-4 py-2 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm hover:bg-purple-600 hover:text-white transition-all transform hover:scale-105 shadow-xl"
                >
                  Go to Blogs
                </button>
              </div>
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
                  Conference Leadership
                </h3>
                <p className="text-gray-600 text-[10px] sm:text-xs lg:text-xs xl:text-sm leading-snug">
                  Leading the National Conference on Real-World Evidence in
                  Oncology.
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
        </div>
      </section>

      {/* Content Section */}
      <section id="articles-section" className="w-full bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* LEFT CONTENT - REAL WORLD EVIDENCE */}
            <div>
              <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Real-World Evidence
              </h2>

              <p className="text-gray-700 text-lg leading-relaxed mb-8 text-justify">
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
                className="bg-blue-500 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform"
              >
                Learn More →
              </button>
            </div>

            {/* RIGHT - IMAGE HIGHLIGHT */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1000&auto=format&fit=crop"
                alt="Real World Evidence"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLES GRID */}
      <section id="articles-section" className="max-w-7xl mx-auto px-6 lg:px-12 pb-12 sm:pb-16 lg:pb-20">
        {/* Header with Search and Sort */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-5 sm:mb-6 lg:mb-7 xl:mb-8 gap-4 sm:gap-5 md:gap-6">
          <div>
            <h2 className="text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl font-semibold text-gray-900">
              Latest Articles
            </h2>
            <p className="text-gray-600 mt-2 text-sm sm:text-base max-w-xl">
              Dive into our peer-reviewed papers, detailed reports, and evidence-based studies
              shaping the future of community and environmental health.
            </p>
          </div>

          {/* Search and Sort Controls */}
          <div className="flex flex-col gap-3 sm:gap-4 items-stretch sm:items-end w-full md:w-auto">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search articles..."
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
                className="flex items-center justify-between sm:justify-start gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-white border-2 border-gray-200 rounded-xl text-gray-700 text-xs sm:text-sm font-medium hover:border-gray-300 hover:bg-gray-50 transition-all shadow-sm w-full sm:w-auto"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
                </svg>
                <span>
                  {sortOrder === "newest" && "Newest First"}
                  {sortOrder === "oldest" && "Oldest First"}
                  {sortOrder === "a-z" && "A-Z"}
                  {sortOrder === "z-a" && "Z-A"}
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform ${showSortMenu ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                    className={`w-full text-left px-4 py-2.5 text-sm hover:bg-purple-50 transition-colors ${sortOrder === "newest" ? "bg-purple-50 text-purple-700 font-semibold" : "text-gray-700"
                      }`}
                  >
                    Newest First
                  </button>
                  <button
                    onClick={() => {
                      setSortOrder("oldest");
                      setShowSortMenu(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-sm hover:bg-purple-50 transition-colors ${sortOrder === "oldest" ? "bg-purple-50 text-purple-700 font-semibold" : "text-gray-700"
                      }`}
                  >
                    Oldest First
                  </button>
                  <button
                    onClick={() => {
                      setSortOrder("a-z");
                      setShowSortMenu(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-sm hover:bg-purple-50 transition-colors ${sortOrder === "a-z" ? "bg-purple-50 text-purple-700 font-semibold" : "text-gray-700"
                      }`}
                  >
                    A-Z
                  </button>
                  <button
                    onClick={() => {
                      setSortOrder("z-a");
                      setShowSortMenu(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-sm hover:bg-purple-50 transition-colors ${sortOrder === "z-a" ? "bg-purple-50 text-purple-700 font-semibold" : "text-gray-700"
                      }`}
                  >
                    Z-A
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        {!loading && filteredArticles.length === 0 && (
          <p className="text-center text-gray-500 py-10">
            {searchQuery ? "No articles found matching your search." : "No articles available."}
          </p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-6 xl:gap-8">
          {(loading ? [...Array(3)] : filteredArticles).map((a, i) =>
            loading ? (
              <ArticleCard
                key={`skeleton-art-${i}`}
                loading={true}
                imageHeight="h-64"
              />
            ) : (
              <ArticleCard
                key={a.id}
                id={a.id}
                title={a.title}
                description={a.description}
                author={a.author}
                place={a.place}
                publishedAt={a.publishedAt}
                imageUrl={a.thumbnailUrl}
              />
            )
          )}
        </div>
      </section>

      {/* BLOGS GRID */}
      <section id="blogs-section" className="max-w-7xl mx-auto px-6 lg:px-12 pb-12 sm:pb-16 lg:pb-20 pt-10 border-t border-gray-100">
        {/* Header with Search and Sort */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-5 sm:mb-6 lg:mb-7 xl:mb-8 gap-4 sm:gap-5 md:gap-6">
          <div>
            <h2 className="text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl font-semibold text-gray-900">
              Latest Blogs
            </h2>
            <p className="text-gray-600 mt-2 text-sm sm:text-base max-w-xl">
              Stories from the field, professional reflections, and community perspectives
              that bring our research to life.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:gap-4 items-stretch sm:items-end w-full md:w-auto">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search blogs..."
                value={blogSearchQuery}
                onChange={(e) => setBlogSearchQuery(e.target.value)}
                className="w-full pl-10 sm:pl-11 pr-10 sm:pr-12 py-2 sm:py-3 bg-white border-2 border-gray-200 rounded-xl text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200"
              />
              {blogSearchQuery && (
                <button
                  onClick={() => setBlogSearchQuery("")}
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
                onClick={() => setShowBlogSortMenu(!showBlogSortMenu)}
                className="flex items-center justify-between sm:justify-start gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-white border-2 border-gray-200 rounded-xl text-gray-700 text-xs sm:text-sm font-medium hover:border-gray-300 hover:bg-gray-50 transition-all shadow-sm w-full sm:w-auto"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
                </svg>
                <span>
                  {blogSortOrder === "newest" && "Newest First"}
                  {blogSortOrder === "oldest" && "Oldest First"}
                  {blogSortOrder === "a-z" && "A-Z"}
                  {blogSortOrder === "z-a" && "Z-A"}
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform ${showBlogSortMenu ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {showBlogSortMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-10">
                  {["newest", "oldest", "a-z", "z-a"].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => {
                        setBlogSortOrder(opt);
                        setShowBlogSortMenu(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 text-sm hover:bg-purple-50 transition-colors capitalize ${blogSortOrder === opt ? "bg-purple-50 text-purple-700 font-semibold" : "text-gray-700"}`}
                    >
                      {opt.replace("-", " ")} {opt.includes("est") ? "First" : ""}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Blogs Grid */}
        {!blogsLoading && filteredBlogs.length === 0 && (
          <p className="text-center text-gray-500 py-10">
            {blogSearchQuery ? "No blogs found matching your search." : "No blogs available."}
          </p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-6 xl:gap-8">
          {(blogsLoading ? [...Array(3)] : filteredBlogs).map((b, i) =>
            blogsLoading ? (
              <ArticleCard
                key={`skeleton-blog-${i}`}
                loading={true}
                imageHeight="h-64"
              />
            ) : (
              <ArticleCard
                key={b.id}
                id={b.id}
                title={b.title}
                description={b.description}
                author={b.author}
                place={b.place}
                publishedAt={b.publishedAt}
                imageUrl={b.thumbnailUrl}
              />
            )
          )}
        </div>
      </section>
    </div>
  );
}
