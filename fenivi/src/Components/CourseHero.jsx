import React, { useEffect, useState, useRef } from "react";
import coursesAndResearch from "../assets/home image (1).png";
import gsap from "gsap";
import { PRIMARY, PRIMARY_LIGHT, PRIMARY_BG } from "../theme";

const CourseHero = () => {
    const heroRef = useRef(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1024);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (!heroRef.current) return;

        // Stagger text animations
        gsap.fromTo(
            ".hero-pill",
            { opacity: 0, y: 15 },
            {
                opacity: 1,
                y: 0,
                duration: 0.35,
                delay: 0.05,
                ease: "power2.out",
            },
        );

        gsap.fromTo(
            ".hero-title",
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 0.4,
                delay: 0.1,
                ease: "power2.out",
            },
        );

        gsap.fromTo(
            ".hero-subtitle",
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 0.4,
                delay: 0.15,
                ease: "power2.out",
            },
        );

        gsap.fromTo(
            ".hero-buttons button, .hero-buttons a",
            { opacity: 0, y: 15 },
            {
                opacity: 1,
                y: 0,
                duration: 0.35,
                stagger: 0.05,
                delay: 0.2,
                ease: "power2.out",
            },
        );

        gsap.fromTo(
            ".hero-stats",
            { opacity: 0, y: 15 },
            {
                opacity: 1,
                y: 0,
                duration: 0.35,
                delay: 0.25,
                ease: "power2.out",
            },
        );

        gsap.fromTo(
            ".hero-float",
            { opacity: 0, x: !isMobile ? 40 : 0, y: isMobile ? 20 : 0 },
            {
                opacity: 1,
                x: 0,
                y: 0,
                duration: 0.5,
                delay: 0.15,
                ease: "power2.out",
            },
        );

        // Floating animation for image
        gsap.to(".hero-float", {
            y: -12,
            duration: 2.2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });
    }, [isMobile]);

    return (
        <section
            ref={heroRef}
            className="w-full pt-28 pb-8 md:pt-32 md:pb-10"
        >
            <div className="page-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    {/* LEFT: TEXT CONTENT */}
                    <div className="space-y-6">
                        <div className="hero-pill inline-block">
                            <span className="px-4 py-2 text-sm font-semibold rounded-full" style={{ backgroundColor: PRIMARY_BG, color: PRIMARY }}>
                                Policy . Research . Impact
                            </span>
                        </div>

                        <h1 className="hero-title text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 leading-tight">
                            <span className="lg:whitespace-nowrap">Transforming System Through</span> <br />
                            <span className="text-4xl md:text-5xl lg:text-6xl" style={{ color: PRIMARY }}>
                                Research
                            </span>
                        </h1>

                        <p className="hero-subtitle text-gray-600 text-xs sm:text-sm leading-relaxed max-w-xl">
                            Advancing sustainable development
                            through data driven insights,
                            convergence approaches,
                            and community engagement
                        </p>
                        <p className="hero-subtitle text-gray-500 text-xs sm:text-sm leading-relaxed max-w-xl italic mt-2">
                            To be a trusted research partner delivering community-based
                            evidence that informs policy, improves governance, and advances
                            social well-being
                        </p>

                        <div className="hero-buttons flex flex-wrap gap-4 pt-4">
                            <a
                                href="/contact"
                                className="px-8 py-3.5 text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105" style={{ background: `linear-gradient(135deg, ${PRIMARY_LIGHT}, ${PRIMARY})` }}
                            >
                                Partner with us
                            </a>
                        </div>

                        <div className="hero-stats grid grid-cols-3 gap-4 pt-8 border-t border-gray-200">
                            <div>
                                <p className="text-2xl md:text-3xl font-bold text-gray-900">
                                    75+
                                </p>
                                <p className="text-sm text-gray-600">Clients</p>
                            </div>
                            <div>
                                <p className="text-2xl md:text-3xl font-bold" style={{ color: PRIMARY }}>
                                    1Cr+
                                </p>
                                <p className="text-sm text-gray-600">Data Processed</p>
                            </div>
                            <div>
                                <p className="text-2xl md:text-3xl font-bold text-gray-900">
                                    95%
                                </p>
                                <p className="text-sm text-gray-600">Accuracy</p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT HERO IMAGE */}
                    <div
                        className="relative flex items-center justify-end
                h-[320px] md:h-[480px] lg:h-[520px]"
                    >
                        {/* === SOFT BACKGROUND LIGHT === */}
                        <div
                            className="absolute
               right-10 top-1/2 -translate-y-1/2
               w-[520px] h-[520px]
                bg-[radial-gradient(circle_at_center,rgba(48,51,122,0.08),transparent_70%)]
               blur-2xl"
                        />

                        {/* === FLOATING IMAGE === */}
                        <img
                            src={coursesAndResearch}
                            alt="Next Generation Researchers"
                            className="hero-float
               relative z-10
               w-[360px] md:w-[460px] lg:w-[520px]
               object-contain
                drop-shadow-[0_30px_50px_rgba(48,51,122,0.12)]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseHero;
