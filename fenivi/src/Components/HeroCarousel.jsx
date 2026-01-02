import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import newLogo from "../assets/New_Logo.png";

const slides = [
    {
        id: 1,
        title: (
            <>
                Advancing Sustainable Development
                <br />
                Through Data-Driven Insights,
                <br />
                Convergence Approaches and
                <br />
                Community Engagement
            </>
        ),
        description:
            "To be a trusted research partner delivering community-based evidence that informs policy, improves governance, and advances social well-being",
    },
    {
        id: 2,
        title: (
            <>
                Empowering Communities <br /> through Evidence-Based <br /> Decision Making
            </>
        ),
        description:
            "Bridging the gap between policy and practice by providing actionable insights that drive sustainable growth and social impact.",
    },
    {
        id: 3,
        title: (
            <>
                Strategic Advisory for <br /> Global Impact and <br /> Institutional Growth
            </>
        ),
        description:
            "Partnering with governments, NGOs, and corporates to design scalable solutions for complex development challenges.",
    },
];

const HeroCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideRef = useRef(null);
    const textRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000);
        return () => clearInterval(interval);
    }, [currentSlide]);

    const animateSlide = (direction = "next") => {
        const tl = gsap.timeline();

        // Fade out elements
        tl.to(textRef.current, {
            opacity: 0,
            y: -20,
            duration: 0.5,
            ease: "power2.in",
            onComplete: () => {
                // Update state after fade out
                setCurrentSlide((prev) => (prev + 1) % slides.length);

                // Reset position for fade in
                gsap.set(textRef.current, { y: 20 });
            }
        })
            .to(textRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out",
                stagger: 0.2
            });
    };

    const handleNext = () => {
        animateSlide();
    };

    return (
        <div className="min-h-fit md:min-h-[60vh] w-full bg-gradient-to-r from-[#f7f5ff] via-[#eae1ff] to-[#f7f5ff] overflow-hidden relative">
            <section className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-12 xl:gap-5 min-h-fit w-full px-5 md:px-10 lg:px-16 xl:px-24 2xl:px-32 pt-24 md:pt-28 pb-8 md:pb-12">

                {/* Image - Shows first on mobile, second on desktop */}
                <div ref={imageRef} className="flex justify-center order-1 md:order-2">
                    <img
                        src={newLogo}
                        alt="Homepage visual"
                        className="w-44 sm:w-56 md:w-72 lg:w-96 xl:w-150 object-cover"
                    />
                </div>

                {/* Text Content */}
                <div ref={textRef} className="w-full md:max-w text-left order-2 md:order-1">
                    <h1 className="text-[15px] sm:text-xl md:text-lg lg:text-xl xl:text-3xl font-bold text-gray-900 leading-snug min-h-[120px] md:min-h-[160px] flex items-center">
                        <span>{slides[currentSlide].title}</span>
                    </h1>

                    <p className="text-sm sm:text-base md:text-sm lg:text-base xl:text-lg text-gray-700 mt-3 md:mt-4 lg:mt-5 max-w-lg leading-relaxed min-h-[80px]">
                        {slides[currentSlide].description}
                    </p>

                    <div className="mt-5 md:mt-8 flex flex-row gap-2 sm:gap-4 justify-start">
                        <Link to="/contact">
                            <button className="relative px-3 py-1.5 sm:px-5 sm:py-2.5 lg:px-6 lg:py-3 rounded-full font-medium overflow-hidden group transform transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-0.5 hover:shadow-xl animate-gradient-premium focus:outline-none focus:ring-2 focus:ring-purple-200 bg-white/10 backdrop-blur-md border border-white/30 text-white cursor-pointer">
                                <span className="absolute inset-0 pointer-events-none bg-gradient-to-r from-white/10 via-white/6 to-transparent opacity-0 group-hover:opacity-40 transform -translate-x-6 group-hover:translate-x-0 transition-all duration-400"></span>
                                <span className="relative text-white font-sans font-semibold text-sm sm:text-sm lg:text-base">
                                    Partner With Us
                                </span>
                            </button>
                        </Link>

                        <Link to="/services">
                            <button className="relative px-3 py-1.5 sm:px-6 sm:py-2.5 lg:px-8 lg:py-3 rounded-full font-semibold overflow-hidden transform transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-purple-200 group bg-white/20 backdrop-blur-lg border border-white/20 text-gray-900 shadow-sm hover:scale-105 hover:-translate-y-0.5 hover:shadow-2xl z-10 cursor-pointer">
                                <span className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-white/100 to-transparent opacity-0 group-hover:opacity-30 transform -translate-x-6 group-hover:translate-x-0 transition-all duration-400"></span>
                                <span className="relative z-10 tracking-wide text-sm sm:text-sm lg:text-base">
                                    Schedule an Appointment
                                </span>
                            </button>
                        </Link>
                    </div>

                    {/* Dots to indicate current slide */}
                    <div className="flex gap-2 mt-6">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setCurrentSlide(index);
                                    // Optional: Trigger animation manually if needed, or just set state
                                    gsap.fromTo(textRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.5 });
                                }}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? "bg-purple-600 w-6" : "bg-purple-200 hover:bg-purple-300"
                                    }`}
                            />
                        ))}
                    </div>

                </div>
            </section>
        </div>
    );
};

export default HeroCarousel;
