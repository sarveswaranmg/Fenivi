import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const LoadingScreen = () => {
  const screenRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Animate text: fade in, slight scale, and subtle rotation
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50, scale: 0.9, rotation: -5 },
      { opacity: 1, y: 0, scale: 1, rotation: 0, duration: 1.2, ease: "power3.out" }
    );

    // Add subtle shimmer/glow effect
    gsap.to(textRef.current, {
      textShadow: "0 0 20px rgba(255,255,255,0.6)",
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 0.5
    });

    // Fade out screen with slight scale-down after delay
    gsap.to(screenRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 1,
      ease: "power2.inOut",
      delay: 2.5,
      onComplete: () => {
        if (screenRef.current) {
          screenRef.current.style.display = 'none';
        }
      }
    });
  }, []);

  return (
    <div
      ref={screenRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#5304A3] via-[#9D50BB] to-[#7B2FF7] animate-gradient-premium"
      style={{ backdropFilter: 'blur(10px)' }}
    >
      <h1
        ref={textRef}
        className="text-white text-6xl md:text-8xl font-extrabold opacity-0 tracking-widest"
      >
        FENIVI
      </h1>
    </div>
  );
};

export default LoadingScreen;
