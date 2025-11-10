import React, { useEffect, useRef, useState } from "react";
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

  // ---- Refs matching Projects scroll system ----
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);         // auto-collected via [data-snap="true"]
  const currentIndex = useRef(0);
  const isAnimating = useRef(false);
  const touchStartY = useRef(null);
  const gestureLocked = useRef(false);
  const wheelDebounceTimer = useRef(null);

  // Content refs
  const titleRef = useRef(null);
  const gradientRef = useRef(null);
  const articlesSectionRef = useRef(null);
  const cardsRef = useRef(null);

  // ===== 0) Collect sections dynamically (same as Projects) =====
  const collectSections = () => {
    if (!containerRef.current) return;
    sectionsRef.current = Array.from(
      containerRef.current.querySelectorAll('[data-snap="true"]')
    );
  };

  useEffect(() => {
    // Lock native scroll like Projects page
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    collectSections();

    // Snap to first section on mount
    requestAnimationFrame(() => {
      const first = sectionsRef.current[0];
      if (first) gsap.set(window, { scrollTo: first });
    });

    // Re-collect on size/content change
    const ro = new ResizeObserver(() => collectSections());
    if (containerRef.current) ro.observe(containerRef.current);

    window.addEventListener("resize", collectSections);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("resize", collectSections);
      ro.disconnect();
    };
  }, []);

  // ===== 1) Title entrance (same timing) =====
  useEffect(() => {
    if (!titleRef.current) return;
    gsap.fromTo(
      titleRef.current,
      { y: 400, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.4, ease: "power3.out", delay: 0.4 }
    );
  }, []);

  // ===== 2) Gradient paragraph entrance (ScrollTrigger once) =====
  useEffect(() => {
    if (!gradientRef.current) return;
    gsap.fromTo(
      gradientRef.current,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: gradientRef.current,
          start: "top 80%",
          once: true,
        },
      }
    );
  }, []);

  // ===== 3) Snap logic with mid-animation unlock (identical behavior) =====
  const SCROLL_DURATION = 1.1;
  const SCROLL_EASE = "power4.inOut";
  const WHEEL_THRESHOLD = 20;
  const WHEEL_GESTURE_GAP = 200;

  const clampIndex = (i) => {
    const last = (sectionsRef.current?.length || 1) - 1;
    return Math.max(0, Math.min(i, last));
  };

  const snapToIndex = (index) => {
    const i = clampIndex(index);
    const target = sectionsRef.current[i];
    if (!target) return;

    isAnimating.current = true;

    const tween = gsap.to(window, {
      scrollTo: target,
      duration: SCROLL_DURATION,
      ease: SCROLL_EASE,
      onUpdate: () => {
        if (tween.progress() > 0.5 && isAnimating.current) {
          // mid-animation unlock for responsiveness
          isAnimating.current = false;
        }
      },
      onComplete: () => {
        currentIndex.current = i;
        isAnimating.current = false;
      },
    });

    currentIndex.current = i;
  };

  // ===== 4) Wheel/trackpad handling (strict one-per-gesture) =====
  useEffect(() => {
    const onWheel = (e) => {
      e.preventDefault(); // stop native scroll

      if (gestureLocked.current || isAnimating.current) {
        clearTimeout(wheelDebounceTimer.current);
        wheelDebounceTimer.current = setTimeout(() => {
          gestureLocked.current = false;
        }, WHEEL_GESTURE_GAP);
        return;
      }

      const delta = e.deltaY;
      if (Math.abs(delta) < WHEEL_THRESHOLD) return;

      const idx = currentIndex.current;
      if (delta > 0) snapToIndex(idx + 1);
      else snapToIndex(idx - 1);

      gestureLocked.current = true;
      clearTimeout(wheelDebounceTimer.current);
      wheelDebounceTimer.current = setTimeout(() => {
        gestureLocked.current = false;
      }, WHEEL_GESTURE_GAP);
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, []);

  // ===== 5) Touch & mouse-drag swipe (one-per-swipe) =====
  useEffect(() => {
    const onTouchStart = (e) => {
      e.preventDefault();
      const y = e.touches ? e.touches[0].clientY : e.clientY;
      touchStartY.current = y;
    };

    const onTouchMove = (e) => {
      e.preventDefault(); // prevent rubber-banding
    };

    const onTouchEnd = (e) => {
      e.preventDefault();
      if (touchStartY.current == null || isAnimating.current) return;

      const touchEndY = e.changedTouches?.[0]?.clientY ?? e.clientY;
      const diff = touchStartY.current - touchEndY;
      touchStartY.current = null;

      const SWIPE = 50; // px
      if (diff > SWIPE) snapToIndex(currentIndex.current + 1);
      else if (diff < -SWIPE) snapToIndex(currentIndex.current - 1);
    };

    // Touch
    window.addEventListener("touchstart", onTouchStart, { passive: false });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onTouchEnd, { passive: false });

    // Mouse drag as swipe (optional, matching Projects)
    window.addEventListener("mousedown", onTouchStart, { passive: false });
    window.addEventListener("mousemove", onTouchMove, { passive: false });
    window.addEventListener("mouseup", onTouchEnd, { passive: false });

    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);

      window.removeEventListener("mousedown", onTouchStart);
      window.removeEventListener("mousemove", onTouchMove);
      window.removeEventListener("mouseup", onTouchEnd);
    };
  }, []);

  // ===== 6) Articles entrance (stagger reveal when that section appears) =====
  useEffect(() => {
    if (!articlesSectionRef.current || !cardsRef.current) return;
    const items = Array.from(cardsRef.current.children || []);
    gsap.fromTo(
      items,
      { x: -80, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: articlesSectionRef.current,
          start: "top 75%",
          once: true,
        },
      }
    );
  }, [loading]);

  // ===== 7) Firestore fetching (unchanged) =====
  useEffect(() => {
    if (!db) {
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
      () => setLoading(false)
    );
    return () => unsubscribe();
  }, []);

  return (
    <div ref={containerRef} className="w-full min-h-screen">
      {/* Section 1: Title */}
      <section
        data-snap="true"
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

      {/* Section 2: Gradient intro */}
      <section
        data-snap="true"
        className="flex w-full h-screen items-center justify-center bg-gradient-to-br from-[#5304A3] via-[#9D50BB] to-[#7B2FF7] animate-gradient-premium"
      >
        <p
          ref={gradientRef}
          className="text-white text-3xl text-center max-w-2xl leading-snug opacity-0 2xl:text-4xl"
        >
          Explore a growing library of research, publications, and insights that
          drive sustainable solutions.
        </p>
      </section>

      {/* Section 3: Articles (full-screen snap like Projects) */}
      <section
        data-snap="true"
        ref={articlesSectionRef}
        className="relative w-full h-screen overflow-hidden bg-white"
      >
        <div className="absolute top-12 left-1/2 -translate-x-1/2 z-10">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-black">
            Our Trending Articles
          </h2>
        </div>

        {/* Cards area fills the screen like Projects; use padding at bottom for spacing */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full h-full px-8 pt-28 pb-10 overflow-hidden"
          style={{ perspective: "1400px" }}
        >
          {(loading ? [...Array(6)] : articles).map((a, i) =>
            loading ? (
              <ArticleCard key={`skeleton-${i}`} loading={true} />
            ) : (
              <ArticleCard
                key={a.id}
                id={a.id}
                title={a.title}
                excerpt={a.excerpt}
                content={a.content}
                imageUrl={a.imageUrl}
              />
            )
          )}
        </div>
      </section>

      {/* You can add more full-screen snap sections later with data-snap="true" */}
    </div>
  );
}
