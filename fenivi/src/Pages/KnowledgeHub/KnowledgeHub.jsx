import React, { useEffect, useState, useRef } from "react";
import ArticleCard from "./Components/ArticleCard.jsx";
import { db } from "../../firebase.js";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { gsap } from "gsap";
import { BookOpen, FileText, BarChart3, Newspaper } from "lucide-react";

export default function KnowledgeHub() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const rowRefs = useRef([]);

  // Firestore fetching
  useEffect(() => {
    if (!db) {
      setLoading(false);
      return;
    }
    const q = query(collection(db, "articles"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(
      q,
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
    return () => unsubscribe();
  }, []);

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
  }, [articles]);

  return (
    <div className="w-full min-h-screen bg-white text-gray-800">
      {/* HERO */}
      <section className="h-[110vh] w-full bg-gradient-to-r from-[#f8f9ff] to-[#f3f4fc] flex flex-col md:flex-row items-center justify-center px-8 md:px-20">
        {/* LEFT */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Turning Data into Knowledge
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg">
            Fenivi Research Solutions bridges the gap between policy, practice,
            and community needs through actionable research and evidence-based
            insights that drive sustainable change.
          </p>
        </div>

        {/* RIGHT */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="grid grid-cols-2 grid-rows-2 gap-6 w-[90%] max-w-[650px] h-[520px]">
            <div className="overflow-hidden rounded-3xl shadow-[0_6px_20px_rgba(0,0,0,0.08)] bg-white">
              <img
                src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=900"
                alt="Knowledge Hub"
                className="w-full h-full object-cover rounded-3xl hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Cards */}
            <div className="p-7 bg-white rounded-3xl shadow-[0_6px_20px_rgba(0,0,0,0.08)] border border-gray-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-all flex flex-col justify-between">
              <BookOpen className="w-8 h-8 text-purple-600 mb-4" />
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  200+ Publications
                </h3>
                <p className="text-gray-600 text-sm leading-snug">
                  Research papers, policy briefs, and scientific articles.
                </p>
              </div>
            </div>

            <div className="p-7 bg-white rounded-3xl shadow-[0_6px_20px_rgba(0,0,0,0.08)] border border-gray-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-all flex flex-col justify-between">
              <BarChart3 className="w-8 h-8 text-indigo-600 mb-4" />
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  Conference Leadership
                </h3>
                <p className="text-gray-600 text-sm leading-snug">
                  Leading the National Conference on Real-World Evidence in
                  Oncology.
                </p>
              </div>
            </div>

            <div className="p-7 bg-white rounded-3xl shadow-[0_6px_20px_rgba(0,0,0,0.08)] border border-gray-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-all flex flex-col justify-between">
              <FileText className="w-8 h-8 text-purple-700 mb-4" />
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  Reports & Studies
                </h3>
                <p className="text-gray-600 text-sm leading-snug">
                  Comprehensive environmental & social studies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-20">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-3">
              Insights • Reflections • Evidence
            </h2>
            <p className="text-gray-600 max-w-2xl text-base leading-relaxed">
              The Fenivi Blog shares research insights across environment,
              oncology, SDGs, and governance.
            </p>
          </div>

          
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "SDG & Policy Research",
            "Health Systems & Oncology",
            "Environmental & Hydrological Studies",
            "Research Methods & Data Insights",
            "Voices from the Field",
          ].map((cat, i) => (
            <div
              key={i}
              className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition group"
            >
              <Newspaper className="w-8 h-8 text-purple-600 mb-3 group-hover:scale-110 transition" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                {cat}
              </h4>
              <p className="text-gray-600 text-sm">
                Explore reflections from our work in {cat.toLowerCase()}.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ARTICLES GRID */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-20">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8">
          Latest Articles
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {(loading ? [...Array(6)] : articles).map((a, i) =>
            loading ? (
              <ArticleCard
                key={`skeleton-${i}`}
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
    </div>
  );
}
