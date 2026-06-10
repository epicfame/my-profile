"use client";

import { useState, useEffect } from "react";
import { Menu, X, Terminal, Rocket, Cpu, Eye, ChevronDown, Mail, ArrowRight, Database, LayoutGrid, Globe } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./components/Icons";

import StarfieldBackground from "./components/StarfieldBackground";
import SkillSystem from "./components/SkillSystem";
import ProjectShowcase from "./components/ProjectShowcase";
import ContactForm from "./components/ContactForm";

export default function Home() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [textIndex, setTextIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    // const titles = [
    //     "Backend Roots, Frontend Horizons",
    //     "Database Architecture, Visual Elegance",
    //     "System Logic, Human Interface",
    // ];
    const titles = [
        "React & Next.js Frontend Engineer",
        "Building Fast & Responsive Web Apps",
        "Turning Ideas Into User Experiences",
    ];

    // Simple typewriter effect for Hero subtitle
    useEffect(() => {
        let timer: NodeJS.Timeout;
        let title = titles[textIndex];
        let isDeleting = false;
        let charIndex = 0;

        const tick = () => {
            title = titles[textIndex];
            if (!isDeleting) {
                setCurrentText(title.substring(0, charIndex + 1));
                charIndex++;
                if (charIndex === title.length) {
                    isDeleting = true;
                    timer = setTimeout(tick, 3000); // Wait 3s before deleting
                } else {
                    timer = setTimeout(tick, 100);
                }
            } else {
                setCurrentText(title.substring(0, charIndex - 1));
                charIndex--;
                if (charIndex === 0) {
                    isDeleting = false;
                    setTextIndex((prev) => (prev + 1) % titles.length);
                    timer = setTimeout(tick, 500);
                } else {
                    timer = setTimeout(tick, 50);
                }
            }
        };

        tick();
        return () => clearTimeout(timer);
    }, [textIndex]);

    // Handle nav background glow on scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
        };
    }, [mobileMenuOpen]);

    const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

    return (
        <div className="relative min-h-screen bg-space-dark text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">

            {/* 1. Starfield Background Canvas */}
            <StarfieldBackground />

            {/* Decorative Nebula Lights */}
            {/* <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full radial-glow opacity-30 pointer-events-none" />
            <div className="absolute top-[60%] right-[-10%] w-[600px] h-[600px] rounded-full radial-glow-cyan opacity-25 pointer-events-none" /> */}

            {/* 2. Navigation Header */}
            <header
                className={`absolute top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    scrolled
                    ? "bg-space-dark/85 backdrop-blur-md border-b border-slate-900/80 py-3"
                    : "bg-transparent py-4"
                }`}
            >
                <div className="max-w-screen-lg mx-auto px-4 md:px-8 flex justify-between items-center">
                    {/* Logo */}
                    <a href="#hero" className="flex items-center gap-2 group">
                        <div className="relative w-8 h-8 flex items-center justify-center border border-cyan-500/50 rounded-lg bg-indigo-950/40 group-hover:border-cyan-400 transition-all duration-300">
                            <Rocket className="w-4 h-4 text-cyan-400 group-hover:rotate-45 transition-transform duration-500" />
                        </div>
                        <span className="font-mono text-base md:text-lg font-bold tracking-wider text-slate-100 group-hover:text-cyan-400 transition-colors">
                            GIOVANNI<span className="text-cyan-400">.JR</span>
                        </span>
                    </a>

                    {/* Desktop Nav Links */}
                    <nav className="hidden md:flex items-center gap-8 font-mono text-xs tracking-widest text-slate-400">
                        <a href="#skills" className="hover:text-cyan-400 transition-colors uppercase">Skills</a>
                        <a href="#projects" className="hover:text-cyan-400 transition-colors uppercase">Projects</a>
                        <a href="#contact" className="hover:text-cyan-400 transition-colors uppercase">Contact</a>

                        {/* CTA */}
                        <a
                            href="#contact"
                            className="px-4 py-2 border border-cyan-500/40 hover:border-cyan-400 text-cyan-400 hover:text-cyan-300 hover:bg-cyan-950/20 rounded-md transition-all duration-300"
                        >
                            LAUNCH_COMMS
                        </a>
                    </nav>

                    {/* Mobile Hamburger Button */}
                    <button
                        onClick={toggleMobileMenu}
                        className="md:hidden p-2 text-slate-400 hover:text-slate-100 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Nav Links Overlay */}
                {mobileMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 right-0 bg-space-dark/95 backdrop-blur-lg z-40 border-t border-slate-900 px-6 py-10 flex flex-col gap-6 font-mono text-sm tracking-widest">
                        <a
                            href="#skills"
                            onClick={toggleMobileMenu}
                            className="py-2 border-b border-slate-900 text-slate-300 hover:text-cyan-400 transition-colors"
                        >
                            01 // SKILLS
                        </a>
                        <a
                            href="#projects"
                            onClick={toggleMobileMenu}
                            className="py-2 border-b border-slate-900 text-slate-300 hover:text-cyan-400 transition-colors"
                        >
                            02 // PROJECTS
                        </a>
                        <a
                            href="#contact"
                            onClick={toggleMobileMenu}
                            className="py-2 border-b border-slate-900 text-slate-300 hover:text-cyan-400 transition-colors"
                        >
                            03 // CONTACT
                        </a>
                        <a
                            href="#contact"
                            onClick={toggleMobileMenu}
                            className="py-3 text-center border border-cyan-500/40 text-cyan-400 rounded-md bg-cyan-950/20"
                        >
                            LAUNCH_COMMS
                        </a>
                    </div>
                )}
            </header>

            {/* 3. Hero Section */}
            <section
                id="hero"
                className="min-h-screen flex flex-col justify-center items-center relative pt-20 px-6 md:px-12 grid-bg"
            >
                {/* Orbital Circles */}
                {/* <div className="absolute w-[300px] h-[300px] md:w-[600px] md:h-[600px] border border-indigo-950/20 rounded-full animate-pulse-slow pointer-events-none z-0" />
                <div className="absolute w-[450px] h-[450px] md:w-[850px] md:h-[850px] border border-cyan-950/10 rounded-full animate-orbit-slow pointer-events-none z-0" /> */}

                <div className="max-w-4xl text-center space-y-6 md:space-y-8 z-10 flex flex-col items-center">
                    {/* Transition Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-950/30 text-indigo-300 font-mono text-[10px] md:text-xs tracking-wider uppercase">
                        <Cpu className="w-3.5 h-3.5 text-indigo-400" />
                        <span>Frontend Engineering</span>
                        <ArrowRight className="w-3 h-3 text-slate-500" />
                        <Eye className="w-3.5 h-3.5 text-cyan-400" />
                        <span className="text-cyan-300">Client Interfaces</span>
                    </div>

                    {/* Main Title */}
                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-sans tracking-tight leading-tight text-slate-100 max-w-3xl">
                        Building Modern Web Experiences{" "}
                        {/* <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent glow-text-cyan">
                            Logic & Gravity
                        </span> */}
                    </h1>

                    {/* Typewriter Subtitle */}
                    <div className="h-8 md:h-10 flex items-center justify-center font-mono text-sm md:text-lg text-slate-400">
                        <span>{currentText}</span>
                        <span className="w-2 h-4 bg-cyan-400 ml-1 animate-pulse" />
                    </div>

                    {/* Descriptive Pitch */}
                    <p className="max-w-2xl text-slate-400 text-sm md:text-base leading-relaxed">
                        Frontend Engineer with 2+ years of experience building modern web applications.
                        Specialized in React, Next.js, and TypeScript, focused on creating responsive, accessible, and high-performance user experiences.
                    </p>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
                        <a
                            href="#projects"
                            className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-slate-100 rounded-lg text-sm font-semibold shadow-lg hover:shadow-indigo-500/20 transition-all flex items-center justify-center gap-2 group cursor-pointer"
                        >
                            View Projects
                        </a>
                        <a
                            href="/giovanni-jose-resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3.5 border border-slate-700 hover:border-slate-500 hover:bg-slate-900/40 text-slate-300 hover:text-slate-100 rounded-lg text-sm font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer"
                        >
                            Download Resume
                        </a>

                    </div>
                </div>

                {/* Scroll Call to Action */}
                <a
                    href="#skills"
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 font-mono text-[10px] tracking-widest text-slate-500 hover:text-slate-300 transition-colors z-10"
                >
                    <span>EXPLORE_MORE</span>
                    <ChevronDown className="w-4 h-4 animate-bounce text-indigo-500" />
                </a>
            </section>

            {/* Main Content Sections */}
            <main className="flex-grow max-w-7xl mx-auto px-6 md:px-12 py-20 w-full space-y-32 z-10">

                {/* 1. Skills Section */}
                <section id="skills" className="scroll-mt-24">
                    <div className="max-w-3xl mb-12">
                        <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase block mb-2">
                            01 // Skills
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-100 mb-4">
                            Skills & Technologies
                        </h2>
                        <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                            A frontend-focused toolkit for building modern web applications, from reusable UI components and state management to API integration and performance optimization.
                        </p>
                    </div>

                    <SkillSystem />
                </section>

                {/* 2. Projects Section */}
                <section id="projects" className="scroll-mt-24">
                    <div className="max-w-3xl mb-12">
                        <span className="font-mono text-xs text-indigo-400 tracking-widest uppercase block mb-2">
                            02 // Projects
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-100 mb-4">
                            Selected Projects
                        </h2>
                        <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                            Selected projects that highlight both full-stack integration and fine-tuned UI polish.
                        </p>
                    </div>

                    <ProjectShowcase />
                </section>

                {/* 3. Contact Section */}
                <section id="contact" className="scroll-mt-24">
                    <div className="grid lg:grid-cols-12 gap-12 items-start">
                        <div className="lg:col-span-5 space-y-6">
                            <div>
                                <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase block mb-2">
                                    03 // Contact
                                </span>
                                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-100 mb-4">
                                    Let's Connect
                                </h2>
                                <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                                    chat about frontend engineering, UI development, web performance, or product experiences
                                </p>
                            </div>

                            {/* Direct Info */}
                            <div className="space-y-4 font-mono text-xs md:text-sm text-slate-400">
                                <div className="flex items-center gap-3 bg-slate-950/20 border border-slate-900 p-4 rounded-xl">
                                    <Mail className="w-5 h-5 text-cyan-400" />
                                    <div>
                                        <span className="block text-[10px] text-slate-500 uppercase">EMAIL</span>
                                        <a href="mailto:giovanni.jricardo@gmail.com" className="hover:text-cyan-300 transition-colors">
                                            giovanni.jricardo@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 bg-slate-950/20 border border-slate-900 p-4 rounded-xl">
                                    <Globe className="w-5 h-5 text-indigo-400" />
                                    <div>
                                        <span className="block text-[10px] text-slate-500 uppercase">LOCATION</span>
                                        <span className="text-slate-300">INDONESIA</span>
                                    </div>
                                </div>
                            </div>

                            {/* Social Nodes */}
                            <div className="flex gap-3 pt-2">
                                {/* <a
                                    href="https://github.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-slate-950/20 border border-slate-900 rounded-lg text-slate-400 hover:text-cyan-400 hover:border-slate-800 transition-all cursor-pointer"
                                    aria-label="GitHub Profile"
                                >
                                    <Github className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-slate-950/20 border border-slate-900 rounded-lg text-slate-400 hover:text-cyan-400 hover:border-slate-800 transition-all cursor-pointer"
                                    aria-label="LinkedIn Profile"
                                >
                                    <Linkedin className="w-5 h-5" />
                                </a> */}
                            </div>
                        </div>

                        <div className="lg:col-span-7">
                            <ContactForm />
                        </div>
                    </div>
                </section>

            </main>

            {/* 8. Footer */}
            <footer className="w-full bg-space-dark border-t border-slate-950 py-12 px-6 md:px-12 z-10 text-slate-500 text-xs md:text-sm">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2 font-mono">
                        <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                        <span>Available for Opportunities</span>
                    </div>

                    <div className="text-center md:text-right font-mono text-[10px] uppercase tracking-wider space-y-1">
                        <p>&copy; {new Date().getFullYear()} Giovanni Jose. All signals reserved.</p>
                        <p className="text-slate-600">Built using Next.js 16 & Tailwind CSS v4</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
