import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import newLogo from "../assets/New_Logo.png";

const slides = [
    {
        id: 1,
        title: (
            <>
                Advancing sustainable development
                <br />
                through data-driven insights,
                <br />
                convergence approaches,
                <br />
                and community engagement
            </>
        ),
    },
    {
        id: 2,
        title: (
            <>
                To be a trusted research partner delivering community-based evidence that informs policy, improves governance, and advances social well-being
            </>
        ),
    },
];

const HeroCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const textRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000);
        return () => clearInterval(interval);
    }, [currentSlide]);

    const animateSlide = () => {
        gsap.to(textRef.current, {
            opacity: 0,
            y: -20,
            duration: 0.5,
            ease: "power2.in",
            onComplete: () => {
                setCurrentSlide((prev) => (prev + 1) % slides.length);
                gsap.set(textRef.current, { y: 20 });
                gsap.to(textRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power2.out",
                });
            }
        });
    };

    const handleNext = () => {
        animateSlide();
    };

    return (
        <div className="min-h-[50vh] md:min-h-[60vh] w-full bg-[#f9f8ff] overflow-hidden relative flex items-center">
            {/* Background Diagonal Image - Right 40% */}
            <div className="absolute top-0 right-0 w-full h-full pointer-events-none z-0">
                <div
                    className="absolute top-0 right-0 w-[45%] h-full bg-cover bg-center"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop')`,
                        clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)'
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-l from-white/10 to-white/40"></div>
                </div>
            </div>

            <section className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 items-center gap-12 py-12 pb-6">
                {/* Text Content */}
                <div className="flex flex-col justify-center">
                    <div className="min-h-[180px] md:min-h-[220px] flex flex-col justify-center">
                        <h1 ref={textRef} className="text-lg md:text-2xl font-semibold leading-snug text-gray-900">
                            {slides[currentSlide].title}
                        </h1>
                    </div>

                    {/* Stationary Buttons */}
                    <div className="flex flex-row flex-wrap justify-start gap-4 mt-10">
                        <Link to="/contact">
                            <button
                                className="px-8 py-3.5 rounded-full font-bold bg-gradient-to-r from-purple-600 to-violet-800 hover:from-purple-500 hover:to-violet-700 hover:scale-105 transition-all duration-500 ease-out transform text-white shadow-lg shadow-purple-500/20">
                                Partner With Us
                            </button>
                        </Link>
                    </div>

                    {/* Dots */}
                    <div className="flex gap-3 mt-10">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    if (currentSlide !== index) {
                                        animateSlide();
                                    }
                                }}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? "bg-purple-600 w-8" : "bg-purple-200 hover:bg-purple-300"
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Empty element for grid spacing, ensuring text stays left */}
                <div className="hidden md:block"></div>
            </section>
        </div>
    );
};

export default HeroCarousel;
