import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const LoadingScreen = () => {
  const [showLoading, setShowLoading] = useState(() => {
    const hasLoadedBefore = localStorage.getItem("fenivi-loaded");
    return !hasLoadedBefore; // show only if first time
  });

  const screenRef = useRef(null);
  const mainTextRef = useRef(null);
  const subTextRef = useRef(null);

  useEffect(() => {
    if (!showLoading) return; // skip animation if not first load

    // Mark as loaded so next time it won't show
    localStorage.setItem("fenivi-loaded", "true");

    // Fade in main text
    gsap.fromTo(
      mainTextRef.current,
      { opacity: 0, y: 50, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power3.out" }
    );

    // Typing effect
    const subText = subTextRef.current;
    const textContent = subText.textContent;
    subText.textContent = "";

    textContent.split("").forEach((char, i) => {
      gsap.to(subText, {
        textContent: subText.textContent + char,
        duration: 0.05,
        delay: 1.3 + i * 0.05,
        ease: "none",
        onUpdate: () => {
          subText.innerHTML = subText.textContent;
        },
      });
    });

    // Fade out screen
    gsap.to(screenRef.current, {
      opacity: 0,
      duration: 1.8,
      ease: "power1.inOut",
      delay: 3.5,
      onComplete: () => {
        setShowLoading(false); // remove from DOM
      },
    });
  }, [showLoading]);

  if (!showLoading) return null; // ⚡ Skip rendering after first load

  return (
    <div
      ref={screenRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-[#5304A3] via-[#9D50BB] to-[#7B2FF7]"
      style={{ backdropFilter: "blur(10px)" }}
    >
      <h1
        ref={mainTextRef}
        className="text-white text-6xl md:text-8xl font-bold tracking-widest"
        style={{ fontFamily: "Poppins, ui-sans-serif, system-ui" }}
      >
        FENIVI
      </h1>
      <h2
        ref={subTextRef}
        className="text-white text-xl md:text-2xl mt-4 opacity-100"
        style={{ fontFamily: "Instrument Sans, ui-sans-serif, system-ui" }}
      >
        research and solutions
      </h2>
    </div>
  );
};

export default LoadingScreen;
