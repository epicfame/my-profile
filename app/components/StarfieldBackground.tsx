"use client";

import { useEffect, useRef } from "react";

interface Star {
    x: number;
    y: number;
    z: number;
    size: number;
    color: string;
}

export default function StarfieldBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;

        if (!canvas) return;

        const ctx = canvas.getContext("2d");

        if (!ctx) return;

        let animationId = 0;

        let width = window.innerWidth;
        let height = window.innerHeight;

        const dpr = Math.min(window.devicePixelRatio || 1, 2);

        const starColors = [
            "rgba(255,255,255,",
            "rgba(147,197,253,",
            "rgba(167,139,250,",
            "rgba(103,232,249,",
        ];

        let stars: Star[] = [];

        const setupCanvas = () => {
            width = window.innerWidth;
            height = window.innerHeight;

            canvas.width = width * dpr;
            canvas.height = height * dpr;

            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;

            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };

        const createStars = () => {
            const isMobile = width < 768;

            const starCount = isMobile
                ? 60
                : Math.min(Math.floor((width * height) / 8000), 200);

            stars = [];

            for (let i = 0; i < starCount; i++) {
                stars.push({
                    x: Math.random() * width - width / 2,
                    y: Math.random() * height - height / 2,
                    z: Math.random() * width,
                    size: Math.random() * 1.5 + 0.5,
                    color:
                        starColors[
                        Math.floor(Math.random() * starColors.length)
                        ],
                });
            }
        };

        setupCanvas();
        createStars();

        let mouseX = 0;
        let mouseY = 0;

        let targetMouseX = 0;
        let targetMouseY = 0;

        let speed = 0.5;
        let targetSpeed = 0.5;

        const handleMouseMove = (e: MouseEvent) => {
            targetMouseX = (e.clientX - width / 2) * 0.05;
            targetMouseY = (e.clientY - height / 2) * 0.05;
        };

        let lastScrollTop = 0;
        let scrollTimeout: ReturnType<typeof setTimeout>;

        const handleScroll = () => {
            const currentScroll =
                window.pageYOffset ||
                document.documentElement.scrollTop;

            const diff = Math.abs(currentScroll - lastScrollTop);

            if (diff > 2) {
                targetSpeed = Math.min(diff * 0.15 + 0.5, 8);

                clearTimeout(scrollTimeout);

                scrollTimeout = setTimeout(() => {
                    targetSpeed = 0.5;
                }, 150);
            }

            lastScrollTop = currentScroll;
        };

        const handleResize = () => {
            setupCanvas();
            createStars();
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });
        window.addEventListener("resize", handleResize);

        const animate = () => {
            ctx.fillStyle = "rgba(3,0,10,0.25)";
            ctx.fillRect(0, 0, width, height);

            mouseX += (targetMouseX - mouseX) * 0.08;
            mouseY += (targetMouseY - mouseY) * 0.08;

            speed += (targetSpeed - speed) * 0.1;

            for (const star of stars) {
                star.z -= speed;

                if (star.z <= 1) {
                    star.z = width;

                    star.x = Math.random() * width - width / 2;
                    star.y = Math.random() * height - height / 2;
                }

                const px =
                    (star.x / star.z) * width * 0.8 +
                    width / 2 +
                    mouseX;

                const py =
                    (star.y / star.z) * height * 0.8 +
                    height / 2 +
                    mouseY;

                if (
                    px < -50 ||
                    px > width + 50 ||
                    py < -50 ||
                    py > height + 50
                ) {
                    continue;
                }

                const opacity = Math.max(
                    0,
                    Math.min(1, 1 - star.z / width)
                );

                if (speed > 3) {
                    const length = speed * 1.5;

                    const angle = Math.atan2(
                        py - height / 2 - mouseY,
                        px - width / 2 - mouseX
                    );

                    ctx.beginPath();

                    ctx.strokeStyle = `${star.color}${opacity})`;

                    ctx.lineWidth = Math.max(
                        0.5,
                        star.size * (speed / 3)
                    );

                    ctx.moveTo(px, py);

                    ctx.lineTo(
                        px + Math.cos(angle) * length,
                        py + Math.sin(angle) * length
                    );

                    ctx.stroke();
                } else {
                    const radius = Math.max(
                        0.1,
                        star.size *
                        (1 +
                            Math.max(
                                0,
                                (1 - star.z / width) * 1.5
                            ))
                    );

                    if (!Number.isFinite(radius)) continue;

                    ctx.beginPath();

                    ctx.fillStyle = `${star.color}${opacity})`;

                    ctx.arc(
                        px,
                        py,
                        radius,
                        0,
                        Math.PI * 2
                    );

                    ctx.fill();
                }
            }

            animationId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener(
                "mousemove",
                handleMouseMove
            );

            window.removeEventListener(
                "scroll",
                handleScroll
            );

            window.removeEventListener(
                "resize",
                handleResize
            );

            clearTimeout(scrollTimeout);

            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
        />
    );
}