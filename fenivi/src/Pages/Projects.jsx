import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Projects() {
  const titleRef = useRef(null);

  // Dynamic list of snap sections (auto-collect via [data-snap="true"])
  const sectionsRef = useRef([]);
  const containerRef = useRef(null);

  const gradientRef = useRef(null);      // gradient paragraph
  const currentIndex = useRef(0);        // current snapped section index
  const isAnimating = useRef(false);     // animation lock (released mid-animation)
  const touchStartY = useRef(null);      // touch/swipe start Y

  // Wheel gesture lock: prevents multiple snaps during one long/continuous scroll
  const gestureLocked = useRef(false);
  const wheelDebounceTimer = useRef(null);

  // Projects section + cards
  const projectsSectionRef = useRef(null);
  const projectCardsRef = useRef([]);

  // ===== 0) Collect sections dynamically =====
  const collectSections = () => {
    if (!containerRef.current) return;
    sectionsRef.current = Array.from(
      containerRef.current.querySelectorAll('[data-snap="true"]')
    );
  };

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden"; // fully lock native scroll

    collectSections();

    // Snap to first section on mount
    requestAnimationFrame(() => {
      const first = sectionsRef.current[0];
      if (first) gsap.set(window, { scrollTo: first });
    });

    // Re-collect on resize/content changes
    const ro = new ResizeObserver(() => collectSections());
    if (containerRef.current) ro.observe(containerRef.current);

    window.addEventListener("resize", collectSections);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("resize", collectSections);
      ro.disconnect();
    };
  }, []);

  // ===== 1) Title entrance =====
  useEffect(() => {
    if (!titleRef.current) return;
    gsap.fromTo(
      titleRef.current,
      { y: 400, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.4, ease: "power3.out", delay: 0.4 }
    );
  }, []);

  // ===== 2) Gradient paragraph entrance =====
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

  // ===== 3) Snap logic with mid-animation unlock =====
  const SCROLL_DURATION = 1.1;      // smooth Apple-like
  const SCROLL_EASE = "power4.inOut";
  const WHEEL_THRESHOLD = 20;       // ignore tiny trackpad jitters
  const WHEEL_GESTURE_GAP = 200;    // ms of silence to end a gesture

  const clampIndex = (i) => {
    const last = (sectionsRef.current?.length || 1) - 1;
    return Math.max(0, Math.min(i, last));
  };

  const snapToIndex = (index) => {
    const i = clampIndex(index);
    const target = sectionsRef.current[i];
    if (!target) return;

    // Lock immediately (one snap per gesture), unlock mid-animation
    isAnimating.current = true;

    const tween = gsap.to(window, {
      scrollTo: target,
      duration: SCROLL_DURATION,
      ease: SCROLL_EASE,
      onUpdate: () => {
        // Mid-animation unlock: becomes responsive but still one-per-gesture
        if (tween.progress() > 0.5 && isAnimating.current) {
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

      // If we're in the same continuous wheel gesture or animating, ignore.
      if (gestureLocked.current || isAnimating.current) {
        // Reset the gesture end timer so it unlocks after user stops scrolling.
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

      // Lock for the rest of this continuous gesture.
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
      const touchY = e.touches ? e.touches[0].clientY : e.clientY;
      touchStartY.current = touchY;
    };

    const onTouchMove = (e) => {
      e.preventDefault(); // prevent rubber-banding
    };

    const onTouchEnd = (e) => {
      e.preventDefault();
      if (touchStartY.current == null) return;

      const touchEndY = e.changedTouches?.[0]?.clientY ?? e.clientY;
      const diff = touchStartY.current - touchEndY;
      touchStartY.current = null;

      if (isAnimating.current) return;

      const SWIPE = 50; // px
      if (diff > SWIPE) {
        // swipe up -> go next
        snapToIndex(currentIndex.current + 1);
      } else if (diff < -SWIPE) {
        // swipe down -> go previous
        snapToIndex(currentIndex.current - 1);
      }
    };

    // Touch
    window.addEventListener("touchstart", onTouchStart, { passive: false });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onTouchEnd, { passive: false });

    // Mouse drag as swipe (optional)
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

  // ===== 6) Animate project cards entrance =====
  useEffect(() => {
    if (!projectsSectionRef.current) return;
    const cards = projectCardsRef.current.filter(Boolean);
    gsap.fromTo(
      cards,
      { x: -80, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: projectsSectionRef.current,
          start: "top 75%",
          once: true,
        },
      }
    );
  }, []);

  // ===== Demo content =====
  const projects = [
    {
      id: 1,
      title: "Hydrological Restoration & River Rejuvenation",
      city: "Tirunelveli & Kanniyakumari, Tamil Nadu",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
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
      img: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
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
            Projects.
          </h1>
        </div>
      </section>

      {/* Section 2: Gradient */}
      <section
        data-snap="true"
        className="flex w-full h-screen items-center justify-center bg-gradient-to-br from-[#5304A3] via-[#9D50BB] to-[#7B2FF7] animate-gradient-premium"
      >
        <p
          ref={gradientRef}
          className="text-white text-3xl text-center max-w-2xl leading-snug opacity-0 2xl:text-4xl"
        >
          Dive into my world of innovative builds, experiments, and real-world
          tech solutions — crafted with passion and code.
        </p>
      </section>

      {/* Section 3: Latest Projects (four full-screen cards) */}
      <section
        data-snap="true"
        ref={projectsSectionRef}
        className="relative w-full h-screen overflow-hidden"
      >
        <div className="absolute top-16 left-1/2 -translate-x-1/2 z-10">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white"></h2>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-4 w-full h-full"
          style={{ perspective: "1400px" }}
        >
          {projects.map((p, i) => (
            <div
              key={p.id}
              ref={(el) => (projectCardsRef.current[i] = el)}
              className="group relative h-screen md:h-full w-full opacity-0"
            >
              {/* card container that flips */}
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
                  {/* large central number */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/90 drop-shadow-xl text-[30vw] md:text-[12vw] leading-none font-light select-none">
                      {p.id}
                    </span>
                  </div>
                  {/* bottom meta */}
                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between ">
                    <div>
                      <p className="text-white text-lg md:text-xl font-medium">
                        {p.title}
                      </p>
                      <p className="text-white/80 text-xs md:text-sm">
                        {p.city}
                      </p>
                    </div>
                    <span className="text-white text-2xl md:text-3xl">↗</span>
                  </div>
                </div>

                {/* BACK */}
                <div
                  className="absolute inset-0 animate-gradient-premium text-white p-6 md:p-8 flex flex-col justify-between [transform:rotateY(180deg)]"
                  style={{
                    backfaceVisibility: "hidden",
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div className="flex items-center justify-between mt-12">
                    <h3 className="text-2xl md:text-3xl font-semibold">
                      {p.title}
                    </h3>
                    <span className="text-white/60">{p.city}</span>
                  </div>
                  <p className="text-base md:text-lg leading-relaxed">
                    {p.brief}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">Project #{p.id}</span>
                    <button className="px-4 py-2 rounded-full bg-white text-black text-sm font-medium hover:opacity-90 transition">
                      View Project →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Add more sections later:
          <section data-snap="true" className="h-screen">...</section>
      */}
    </div>
  );
}
