import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import homeVid from "../assets/homeVideo.mp4";

const HeroSection = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;

    const handleMouseEnter = () => {
      gsap.to(video, {
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        onStart: () => video.play(),
      });
    };

    const handleMouseLeave = () => {
      gsap.to(video, {
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
        onComplete: () => video.pause(),
      });
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-100% h-[45vh] md:h-[95vh] mx-3 my-3 rounded-3xl overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        src={homeVid} // replace with your file
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full md:scale-110 sm:scale-170 object-cover"
      />

      {/* Gradient Overlay */}
      {/*<div className="absolute inset-0 bg-gradient-to-r from-slate-800/10 to-slate-400/70 z-10" />*/}

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center  justify-center text-center  text-white h-full px-6">
        <h1 className="text-2xl absolute bottom-40 left-1/2 -translate-x-1/2 md:text-3xl lg:text-2xl lg:pt-56 font-semibold leading-snug ">
          Advancing sustainable development
          <br />
          through data-driven insights, convergence approaches,
          <br />
          and community engagement
        </h1>

        <div className="flex flex-wrap justify-center gap-4 mt-8 absolute bottom-10 left-1/2 -translate-x-1/2 lg:pt-52">
          <button
            className="px-6 py-3 rounded-full font-semibold bg-gradient-to-r from-fuchsia-900 to-fuchsia-900 hover:from-fuchsia-600 hover:fuchsia-900 hover:scale-105 hover:shadow-fuchsia-500/30 
             transition-all duration-500 ease-out transform">
            Partner With Us
          </button>

          <button className="px-6 py-3 rounded-full font-semibold bg-white text-gray-900 hover:bg-gray-100 hover:scale-105 shadow-md transition-all duration-500 ease-out transform">
            Explore Our Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
