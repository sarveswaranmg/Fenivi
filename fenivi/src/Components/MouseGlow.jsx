import React, { useEffect, useState } from "react";

const MouseGlow = () => {
    const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            // Calculate percentage of viewport
            const x = (e.clientX / window.innerWidth) * 100;
            const y = (e.clientY / window.innerHeight) * 100;
            setMousePosition({ x, y });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div
            className="fixed inset-0 pointer-events-none -z-10"
            style={{
                background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, #f0e8f8 0%, #ffffff 60%)`,
                transition: "background 0.15s ease-out", // Slightly faster for smoother feel
            }}
        />
    );
};

export default MouseGlow;
