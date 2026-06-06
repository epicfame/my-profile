"use client";

import React, { useEffect, useRef } from "react";

interface Star {
    x: number;
    y: number;
    z: number;
    size: number;
    color: string;
}

export default function StarfieldBackground() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationId: number;
        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        const stars: Star[] = [];
        const starCount = Math.min(Math.floor((width * height) / 8000), 200);

        // Color palette for stars to look more natural and glowing (white, soft blue, soft purple, soft cyan)
        const starColors = [
            "rgba(255, 255, 255, ",
            "rgba(147, 197, 253, ", // Blue 300
            "rgba(167, 139, 250, ", // Violet 400
            "rgba(103, 232, 249, ", // Cyan 300
        ];

        // Initialize stars
        for (let i = 0; i < starCount; i++) {
            stars.push({
                x: Math.random() * width - width / 2,
                y: Math.random() * height - height / 2,
                z: Math.random() * width,
                size: Math.random() * 1.5 + 0.5,
                color: starColors[Math.floor(Math.random() * starColors.length)],
            });
        }

        let mouseX = 0;
        let mouseY = 0;
        let targetMouseX = 0;
        let targetMouseY = 0;

        let speed = 0.5;
        let targetSpeed = 0.5;

        // Track mouse
        const handleMouseMove = (e: MouseEvent) => {
            targetMouseX = (e.clientX - width / 2) * 0.05;
            targetMouseY = (e.clientY - height / 2) * 0.05;
        };

        // Track scroll to trigger temporary speed increase (warp drive)
        let lastScrollTop = 0;
        let scrollTimeout: NodeJS.Timeout;

        const handleScroll = () => {
            const st = window.pageYOffset || document.documentElement.scrollTop;
            const diff = Math.abs(st - lastScrollTop);

            if (diff > 2) {
                targetSpeed = Math.min(diff * 0.2 + 0.5, 12); // Speed up

                clearTimeout(scrollTimeout);
                scrollTimeout = setTimeout(() => {
                    targetSpeed = 0.5; // Decelerate back to normal speed
                }, 150);
            }

            lastScrollTop = st <= 0 ? 0 : st;
        };

        // Resize handler
        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleResize);

        const animate = () => {
            ctx.fillStyle = "rgba(3, 0, 10, 0.2)"; // Subtle tail for motion blur
            ctx.fillRect(0, 0, width, height);

            // Smoothly interpolate mouse parallax and speed
            mouseX += (targetMouseX - mouseX) * 0.08;
            mouseY += (targetMouseY - mouseY) * 0.08;
            speed += (targetSpeed - speed) * 0.1;

            // Draw and update stars
            for (let i = 0; i < stars.length; i++) {
                const star = stars[i];

                // Move stars closer (decreasing z makes them appear closer)
                star.z -= speed;

                // Reset star if it passes the camera or goes out of boundaries
                if (star.z <= 0) {
                    star.z = width;
                    star.x = Math.random() * width - width / 2;
                    star.y = Math.random() * height - height / 2;
                }

                // Project 3D coordinates onto 2D screen
                const px = (star.x / star.z) * width * 0.8 + width / 2 + mouseX;
                const py = (star.y / star.z) * height * 0.8 + height / 2 + mouseY;

                // Check if star is within bounds
                if (px >= 0 && px <= width && py >= 0 && py <= height) {
                    // Opacity based on depth (closer = brighter)
                    const opacity = Math.min(1 - star.z / width, 1.0);
                    ctx.beginPath();

                    // Draw as lines if moving fast (warp effect), otherwise as small circles
                    if (speed > 3) {
                        const length = speed * 1.5;
                        const angle = Math.atan2(py - height / 2 - mouseY, px - width / 2 - mouseX);
                        ctx.strokeStyle = `${star.color}${opacity})`;
                        ctx.lineWidth = star.size * (speed / 3);
                        ctx.moveTo(px, py);
                        ctx.lineTo(px + Math.cos(angle) * length, py + Math.sin(angle) * length);
                        ctx.stroke();
                    } else {
                        ctx.fillStyle = `${star.color}${opacity})`;
                        ctx.arc(px, py, star.size * (1 + (1 - star.z / width) * 1.5), 0, Math.PI * 2);
                        ctx.fill();
                    }
                }
            }

            animationId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationId);
            clearTimeout(scrollTimeout);
        };
    }, []);

    return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />;
}
