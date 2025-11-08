import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import ArticleCard from "../Components/ArticleCard.jsx";
import { db } from "../firebase.js";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function KnowledgeHub() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const titleRef = useRef(null);
  const sectionsRef = useRef([]); // section DOM refs
  const currentIndex = useRef(0); // index of current section (0 = landing/title)
  const isAnimating = useRef(false);
  const touchStartY = useRef(null);

  // Title pop-up on load
  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { y: 400, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.4, ease: "power3.out", delay: 0.4 }
    );
  }, []);

  // Animate gradient paragraph when first viewed
  useEffect(() => {
    const para = sectionsRef.current.gradientText;
    if (!para) return;

    gsap.fromTo(
      para,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: para,
          start: "top 80%", // triggers when entering viewport
          toggleActions: "play none none none",
          once: true,       // only once
        },
      }
    );
  }, []);

  // Helper: animate to section index
  const scrollToIndex = (index) => {
    const sections = sectionsRef.current;
    if (!sections || !sections[index]) return;

    isAnimating.current = true;
    gsap.to(window, {
      scrollTo: sections[index],
      duration: 0.9,
      ease: "power2.inOut",
      onComplete: () => {
        currentIndex.current = index;
        setTimeout(() => {
          isAnimating.current = false;
        }, 60);
      },
    });
  };

  // Wheel handler
  useEffect(() => {
    const onWheel = (e) => {
      if (isAnimating.current) return;

      const delta = e.deltaY;
      const idx = currentIndex.current;
      const last = (sectionsRef.current?.length || 1) - 1;

      if (delta > 20 && idx < last) {
        scrollToIndex(idx + 1);
      } else if (delta < -20 && idx > 0) {
        scrollToIndex(idx - 1);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    return () => window.removeEventListener("wheel", onWheel);
  }, []);

  // Touch handlers for mobile swipe
  useEffect(() => {
    const onTouchStart = (e) => {
      touchStartY.current = e.touches ? e.touches[0].clientY : e.clientY;
    };
    const onTouchEnd = (e) => {
      if (isAnimating.current || touchStartY.current == null) return;
      const touchEndY =
        e.changedTouches && e.changedTouches[0]
          ? e.changedTouches[0].clientY
          : e.clientY;
      const diff = touchStartY.current - touchEndY;
      const idx = currentIndex.current;
      const last = (sectionsRef.current?.length || 1) - 1;

      if (diff > 50 && idx < last) {
        scrollToIndex(idx + 1);
      } else if (diff < -50 && idx > 0) {
        scrollToIndex(idx - 1);
      }

      touchStartY.current = null;
    };

    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("mousedown", onTouchStart);
    window.addEventListener("mouseup", onTouchEnd);

    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("mousedown", onTouchStart);
      window.removeEventListener("mouseup", onTouchEnd);
    };
  }, []);

  // Keep currentIndex synced if user manually scrolls
  useEffect(() => {
    let timeout;
    const onScroll = () => {
      if (isAnimating.current) return;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        const sections = sectionsRef.current || [];
        const scrollY = window.scrollY || window.pageYOffset;
        let nearest = 0;
        let minDist = Infinity;
        sections.forEach((sec, i) => {
          if (!sec) return;
          const rect = sec.getBoundingClientRect();
          const secCenter = rect.top + window.scrollY + rect.height / 2;
          const dist = Math.abs(secCenter - (scrollY + window.innerHeight / 2));
          if (dist < minDist) {
            minDist = dist;
            nearest = i;
          }
        });
        currentIndex.current = nearest;
      }, 100);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Firestore fetching
  useEffect(() => {
    if (!db) {
      console.warn("Firestore 'db' is not initialized.");
      setLoading(false);
      return;
    }

    const q = query(collection(db, "articles"), orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const list = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setArticles(list);
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching articles:", error);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  return (
    <div className="w-full min-h-screen">
      {/* Section 1: Title */}
      <section
        ref={(el) => (sectionsRef.current[0] = el)}
        className="flex w-full h-[70vh] justify-center items-end overflow-hidden"
      >
        <div className="flex flex-col items-center mb-10">
          <h1
            ref={titleRef}
            className="text-black font-bold text-9xl text-center"
          >
            Knowledge Hub.
          </h1>
        </div>
      </section>

      {/* Section 2: Gradient */}
      <section
        ref={(el) => (sectionsRef.current[1] = el)}
        className="flex w-full h-screen items-center justify-center bg-gradient-to-br from-[#5304A3] via-[#9D50BB] to-[#7B2FF7] animate-gradient-premium"
      >
        <p
          ref={(el) => (sectionsRef.current.gradientText = el)}
          className="text-white text-3xl text-center max-w-2xl leading-snug opacity-0 2xl:text-4xl"
        >
          Explore a growing library of research, publications, and insights that
          drive sustainable solutions.
        </p>
      </section>

      {/* Section 3: Articles */}
      <section
        ref={(el) => (sectionsRef.current[2] = el)}
        className="flex flex-col w-full min-h-screen px-16 py-20 bg-white"
      >
        <h2 className="text-black font-normal text-4xl mb-8 px-10">
          Our Trending Articles
        </h2>

        {loading && (
          <p className="px-10 py-6 text-gray-600">Loading articles...</p>
        )}
        {!loading && articles.length === 0 && (
          <p className="px-10 py-6 text-gray-600">No articles found.</p>
        )}

        {articles.map((a) => (
          <ArticleCard
            key={a.id}
            id={a.id}
            title={a.title}
            excerpt={a.excerpt}
            imageURL={a.imageURL}
          />
        ))}
      </section>
    </div>
  );
}
