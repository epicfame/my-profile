"use client";

import { useEffect, useState } from "react";

export default function GradientBackground() {
    const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const x = (e.clientX / window.innerWidth) * 100;
            const y = (e.clientY / window.innerHeight) * 100;
            setMousePos({ x, y });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Top left violet orb */}
            <div
                className="absolute -top-[20%] -left-[10%] w-[700px] h-[700px] rounded-full opacity-30 animate-float-slow"
                style={{
                    background: "radial-gradient(circle, rgba(139, 92, 246, 0.18) 0%, transparent 65%)",
                }}
            />

            {/* Top right blue orb */}
            <div
                className="absolute -top-[10%] right-[5%] w-[500px] h-[500px] rounded-full opacity-25 animate-float-delayed"
                style={{
                    background: "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 65%)",
                }}
            />

            {/* Center violet glow */}
            <div
                className="absolute top-[30%] left-[40%] w-[900px] h-[500px] rounded-full opacity-15"
                style={{
                    background: "radial-gradient(ellipse, rgba(168, 85, 247, 0.1) 0%, transparent 65%)",
                }}
            />

            {/* Bottom left emerald orb */}
            <div
                className="absolute bottom-[5%] -left-[5%] w-[400px] h-[400px] rounded-full opacity-20 animate-float"
                style={{
                    background: "radial-gradient(circle, rgba(52, 211, 153, 0.08) 0%, transparent 65%)",
                }}
            />

            {/* Bottom right purple orb */}
            <div
                className="absolute -bottom-[15%] -right-[10%] w-[600px] h-[600px] rounded-full opacity-25 animate-float-slow"
                style={{
                    background: "radial-gradient(circle, rgba(139, 92, 246, 0.14) 0%, transparent 65%)",
                }}
            />

            {/* Mouse-following subtle glow */}
            <div
                className="absolute w-[600px] h-[600px] rounded-full opacity-10 transition-all duration-[2000ms] ease-out"
                style={{
                    background: "radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, transparent 60%)",
                    left: `${mousePos.x}%`,
                    top: `${mousePos.y}%`,
                    transform: "translate(-50%, -50%)",
                }}
            />

            {/* Grid pattern overlay */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
                    `,
                    backgroundSize: "60px 60px",
                }}
            />

            {/* Noise texture overlay */}
            <div className="noise-overlay" />
        </div>
    );
}
