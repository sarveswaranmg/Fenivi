import React, { useEffect, useState, useRef } from "react";
import ArticleCard from "../Components/ArticleCard.jsx";
import { db } from "../firebase.js";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { gsap } from "gsap";

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

  // GSAP Flip Animation for bottom list
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

      const toFront = () => gsap.to(wrapper, { rotateX: 0, duration: 0.6, ease: "power3.out" });
      const toBack = () => gsap.to(wrapper, { rotateX: 180, duration: 0.6, ease: "power3.out" });

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
    <div className="w-full min-h-screen overflow-y-auto p-8">
      {/* Intro Section */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-12 py-14">
        <div className="md:w-1/2 flex flex-col gap-5">
          <h1 className="text-4xl md:text-6xl font-bold text-black leading-tight">
            Knowledge Hub
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Explore a growing library of research, publications, and insights which fuel innovation,
            sustainability, and impactful solutions for the modern world. Stay informed and inspired
            with our curated articles and expert knowledge.
          </p>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
            alt="Knowledge"
            className="w-full max-w-xl rounded-xl object-cover shadow-xl h-[380px] md:h-[450px]"
          />
        </div>
      </section>

      {/* Articles Grid */}
      <section className="w-full mt-6">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-black mb-8">
          Latest Articles
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {(loading ? [...Array(6)] : articles).map((a, i) =>
            loading ? (
              <ArticleCard key={`skeleton-${i}`} loading={true} imageHeight="h-64" />
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

      {/* Flip List Section */}
{/* Flip List Section */}
{/* Flip List Section */}
<section className="w-full px-6 py-10 mt-16">
  <div className="w-full border border-black">

    {/* Header */}
    <div className="grid grid-cols-12 font-medium border-b border-black bg-white py-3 px-4 text-sm">
      <span className="col-span-1">No</span>
      <span className="col-span-4">Title</span>
      <span className="col-span-3">Author</span>
      <span className="col-span-2">Place</span>
      <span className="col-span-1 text-right">Date</span>
      <span className="col-span-1 text-center">↗</span>

    </div>

    {/* Rows */}
    {articles.map((a, i) => {
      const date = a.publishedAt
        ? new Date(a.publishedAt).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })
        : "—";

      return (
        <div
          key={a.id}
          ref={(el) => (rowRefs.current[i] = el)}
          className="relative border-b border-black cursor-pointer select-none"
          style={{ perspective: "1000px" }}
        >
          <div className="h-14 w-full relative">
            <div className="flip-wrapper absolute inset-0" style={{ transformStyle: "preserve-3d" }}>

              {/* FRONT */}
              <div className="flip-front absolute inset-0 grid grid-cols-12 items-center bg-white text-black px-4">
                <span className="col-span-1">{a.no}</span>
                <span className="col-span-4 truncate">{a.title}</span>
                <span className="col-span-3 truncate">{a.author}</span>
                <span className="col-span-2 truncate">{a.place}</span>

                {/* Arrow (Clickable) */}
                

                <span className="col-span-1 flex items-center justify-end">{date}</span>
                <span
                  className="col-span-1 flex items-center justify-center hover:text-purple-700 transition"
                  onClick={(e) => {
                    e.stopPropagation(); // stop flip
                    window.location.href = `/article/${a.id}`;
                  }}
                >
                  ↗
                </span>
              </div>

              {/* BACK */}
              <div
                className="flip-back absolute inset-0 grid grid-cols-12 items-center text-white px-4"
                style={{
                  backgroundImage: "linear-gradient(to bottom right, #5304A3, #9D50BB, #7B2FF7)",
                }}
              >
                <span className="col-span-1">{a.no}</span>
                <span className="col-span-4 truncate">{a.title}</span>
                <span className="col-span-3 truncate">{a.author}</span>
                <span className="col-span-2 truncate">{a.place}</span>

                

                <span className="col-span-1 flex items-center justify-end">{date}</span>
                {/* Arrow (Clickable) */}
                <span
                  className="col-span-1 flex items-center justify-center hover:text-yellow-200 transition"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.location.href = `/article/${a.id}`;
                  }}
                >
                  ↗
                </span>
              </div>

            </div>
          </div>
        </div>
      );
    })}
  </div>
</section>


    </div>
  );
}
