"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ChevronDown, Mail, MapPin, ArrowDownRight, Briefcase, User, GraduationCap, FolderDot, Code2 } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "./components/Icons";

import GradientBackground from "./components/GradientBackground";
import SkillSystem from "./components/SkillSystem";
import ProjectShowcase from "./components/ProjectShowcase";
import ContactForm from "./components/ContactForm";
import AboutSection from "./components/AboutSection";
import ExperienceTimeline from "./components/ExperienceTimeline";
import EducationSection from "./components/EducationSection";

export default function Home() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Nav scroll handler
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileMenuOpen]);

    const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

    const navLinks = [
        { name: "About", href: "#about", icon: User },
        { name: "Experience", href: "#experience", icon: Briefcase },
        { name: "Skills", href: "#skills", icon: FolderDot },
        { name: "Projects", href: "#projects", icon: FolderDot },
        { name: "Education", href: "#education", icon: GraduationCap },
    ];

    return (
        <div className="relative min-h-screen flex flex-col font-sans">
            <GradientBackground />

            {/* Navigation */}
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? "glass-strong py-4 border-b border-white/[0.05]"
                    : "bg-transparent py-6"
                    }`}
            >
                <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
                    {/* Logo */}
                    <a href="#hero" className="group flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center shadow-lg shadow-violet-500/20 group-hover:shadow-violet-500/40 transition-shadow">
                            <span className="text-white font-bold text-sm">G</span>
                        </div>
                        <span className="text-lg font-bold text-zinc-100 tracking-tight group-hover:text-violet-400 transition-colors">
                            giovanni<span className="text-violet-400">.</span>jr
                        </span>
                    </a>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/[0.05] p-1.5 rounded-2xl backdrop-blur-md">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="px-4 py-2 rounded-xl text-sm font-medium text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.06] transition-all"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    <div className="hidden lg:flex items-center gap-4">
                        <a
                            href="#contact"
                            className="px-5 py-2.5 bg-violet-600/90 hover:bg-violet-500 text-white rounded-xl text-sm font-semibold transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] border border-violet-500/50"
                        >
                            Hire Me
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMobileMenu}
                        className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/[0.05] border border-white/[0.1] text-zinc-300 hover:text-white transition-colors"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-lg lg:hidden transition-opacity duration-300 ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                        }`}
                    onClick={toggleMobileMenu}
                >
                    <div
                        className={`absolute right-0 top-0 bottom-0 w-[280px] bg-surface border-l border-white/10 p-6 flex flex-col transition-transform duration-300 ease-out ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
                            }`}
                        onClick={e => e.stopPropagation()}
                    >
                        <div className="flex justify-end mb-8">
                            <button onClick={toggleMobileMenu} className="p-2 text-zinc-400 hover:text-white">
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                        <nav className="flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={toggleMobileMenu}
                                    className="flex items-center gap-3 p-4 rounded-xl text-zinc-300 hover:text-white hover:bg-white/[0.06] transition-colors font-medium border border-transparent hover:border-white/[0.05]"
                                >
                                    <link.icon className="w-5 h-5 text-violet-400" />
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                onClick={toggleMobileMenu}
                                className="mt-4 p-4 text-center bg-gradient-to-r from-violet-600 to-blue-600 text-white rounded-xl font-semibold shadow-lg"
                            >
                                Get in Touch
                            </a>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section
                id="hero"
                className="min-h-screen flex flex-col justify-center items-center relative pt-24 pb-32 px-6"
            >
                <div className="max-w-4xl text-center space-y-8 z-10 flex flex-col items-center">

                    {/* Avatar */}
                    <div className="mb-4 animate-scale-in">
                        <div className="avatar-glow relative w-32 h-32 md:w-40 md:h-40 rounded-full p-1.5 border border-white/10 bg-white/5 backdrop-blur-sm">
                            <div className="w-full h-full rounded-full overflow-hidden bg-zinc-800 relative">
                                <Image
                                    src="/profile-picture.webp"
                                    alt="Giovanni Jose"
                                    fill
                                    sizes="(max-width: 768px) 128px, 160px"
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            {/* Status indicator */}
                            <div className="absolute bottom-2 right-2 w-5 h-5 bg-surface rounded-full flex items-center justify-center">
                                <div className="w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-surface animate-pulse" />
                            </div>
                        </div>
                    </div>

                    {/* Status Badges */}
                    <div className="flex flex-wrap justify-center items-center gap-3 animate-slide-up-delayed mt-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            Open for Opportunities
                        </div>
                        <a href="mailto:giovanni.jricardo@gmail.com" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-800/50 border border-white/10 text-zinc-300 text-xs font-medium hover:bg-zinc-700/50 transition-colors">
                            <Mail className="w-3.5 h-3.5" />
                            giovanni.jricardo@gmail.com
                        </a>
                    </div>

                    {/* Title & Introduction */}
                    <div className="space-y-4 animate-slide-up-delayed mt-6">
                        <h2 className="text-xl md:text-2xl text-zinc-300 font-medium">
                            Hi, I&apos;m <span className="text-white font-bold">Giovanni Jose</span> 👋
                        </h2>
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-zinc-100">
                            Frontend <span className="gradient-text">Engineer</span>
                        </h1>
                    </div>

                    <p className="max-w-2xl text-zinc-400 text-base md:text-lg leading-relaxed animate-slide-up-delayed-2">
                        A passionate Software Engineer focusing on Frontend Development.
                        I transform complex problems into elegant, user-friendly solutions using modern web technologies.
                    </p>

                    {/* Actions & Socials */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 animate-slide-up-delayed-3">
                        <a
                            href="#projects"
                            className="w-full sm:w-auto px-8 py-4 bg-white text-zinc-900 rounded-2xl text-sm font-bold shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
                        >
                            View Projects
                            <ArrowDownRight className="w-4 h-4" />
                        </a>
                        <a
                            href="/giovanni-jose-resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto px-8 py-4 glass-card hover:bg-white/[0.08] hover:border-white/[0.2] hover:-translate-y-1 text-white rounded-2xl text-sm font-bold transition-all flex items-center justify-center gap-2 group"
                        >
                            View CV
                            <div className="w-2 h-2 rounded-full bg-violet-400 group-hover:animate-ping" />
                        </a>
                    </div>

                    {/* Social links */}
                    <div className="flex items-center gap-4 pt-6 animate-fade-in" style={{ animationDelay: '0.8s' }}>
                        <a href="https://github.com/epicfame" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-zinc-400 hover:text-white hover:border-violet-500/50 transition-colors">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="https://www.linkedin.com/in/giovanni-jose-ricardo" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-zinc-400 hover:text-white hover:border-blue-500/50 transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="mailto:giovanni.jricardo@gmail.com" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-zinc-400 hover:text-white hover:border-emerald-500/50 transition-colors">
                            <Mail className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                {/* Scroll CTA */}
                <a
                    href="#about"
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs font-medium text-zinc-500 hover:text-zinc-300 transition-colors z-10 uppercase tracking-widest"
                >
                    <span>Discover More</span>
                    <div className="w-6 h-10 rounded-full border-2 border-zinc-500/30 flex items-start justify-center p-1 mt-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-bounce" />
                    </div>
                </a>
            </section>

            {/* Main Content */}
            <main className="flex-grow max-w-5xl mx-auto px-6 md:px-8 pb-32 w-full space-y-32 z-10">

                {/* About Section */}
                <section id="about" className="scroll-mt-32">
                    <AboutSection />
                </section>

                {/* Experience & Education */}
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-12">
                    <section id="experience" className="scroll-mt-32 lg:col-span-7">
                        <div className="mb-10 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                                <Briefcase className="w-5 h-5 text-violet-400" />
                            </div>
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-zinc-100">Experience</h2>
                                <p className="text-zinc-400 text-sm mt-1">My professional journey</p>
                            </div>
                        </div>
                        <ExperienceTimeline />
                    </section>

                    <section id="education" className="scroll-mt-32 lg:col-span-5">
                        <div className="mb-10 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                                <GraduationCap className="w-5 h-5 text-blue-400" />
                            </div>
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-zinc-100">Education</h2>
                                <p className="text-zinc-400 text-sm mt-1">Academic background & certs</p>
                            </div>
                        </div>
                        <EducationSection />
                    </section>
                </div>

                {/* Projects Section */}
                <section id="projects" className="scroll-mt-32">
                    <div className="mb-12 text-center">
                        <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-white/[0.03] border border-white/[0.08] mb-4">
                            <FolderDot className="w-6 h-6 text-zinc-300" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-4">
                            Featured Projects
                        </h2>
                        <p className="text-zinc-400 text-base max-w-2xl mx-auto">
                            A showcase of my recent work, highlighting full-stack capabilities, system architecture, and UI polish.
                        </p>
                    </div>
                    <ProjectShowcase />
                </section>

                {/* Skills Section */}
                <section id="skills" className="scroll-mt-32 relative">
                    {/* Background glow decoration */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-violet-500/5 blur-[120px] rounded-full pointer-events-none" />

                    <div className="mb-10 text-center relative z-10">
                        <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-white/[0.03] border border-white/[0.08] mb-4">
                            <Code2 className="w-6 h-6 text-zinc-300" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-4">
                            Technical Expertise
                        </h2>
                        <p className="text-zinc-400 text-base max-w-2xl mx-auto">
                            My arsenal of languages, frameworks, and tools used to build modern digital products.
                        </p>
                    </div>
                    <SkillSystem />
                </section>

                {/* Contact Section */}
                <section id="contact" className="scroll-mt-32">
                    <div className="glass-card-accent rounded-[2.5rem] p-1">
                        <div className="bg-surface/80 backdrop-blur-xl rounded-[2.25rem] p-8 md:p-12 lg:p-16 relative overflow-hidden">

                            {/* Decorative elements */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 blur-3xl rounded-full" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full" />

                            <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
                                <div className="lg:col-span-5 space-y-8">
                                    <div>
                                        <div className="inline-flex px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-semibold uppercase tracking-wider mb-6">
                                            Get in touch
                                        </div>
                                        <h2 className="text-4xl lg:text-5xl font-bold text-zinc-100 mb-6 leading-tight">
                                            Let&apos;s build something <span className="gradient-text">amazing</span> together.
                                        </h2>
                                        <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                                            Whether you have a question, a project in mind, or just want to say hi, my inbox is always open.
                                        </p>
                                    </div>

                                    {/* Contact Info Group */}
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-colors group">
                                            <div className="w-12 h-12 rounded-full bg-white/[0.05] flex items-center justify-center group-hover:bg-violet-500/20 group-hover:text-violet-400 transition-colors">
                                                <Mail className="w-5 h-5 text-zinc-400 group-hover:text-violet-400" />
                                            </div>
                                            <div>
                                                <span className="block text-xs font-medium text-zinc-500 mb-1 uppercase tracking-wider">Email</span>
                                                <a href="mailto:giovanni.jricardo@gmail.com" className="text-sm font-semibold text-zinc-200 hover:text-violet-400 transition-colors">
                                                    giovanni.jricardo@gmail.com
                                                </a>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-colors group">
                                            <div className="w-12 h-12 rounded-full bg-white/[0.05] flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                                                <MapPin className="w-5 h-5 text-zinc-400 group-hover:text-blue-400" />
                                            </div>
                                            <div>
                                                <span className="block text-xs font-medium text-zinc-500 mb-1 uppercase tracking-wider">Location</span>
                                                <span className="text-sm font-semibold text-zinc-200">
                                                    Indonesia
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="lg:col-span-7">
                                    <ContactForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="w-full border-t border-white/[0.08] py-10 px-6 z-10 glass-strong">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <a href="#hero" className="text-xl font-bold text-zinc-100 tracking-tight">
                            giovanni<span className="text-violet-400">.</span>jr
                        </a>
                        <p className="text-sm text-zinc-500 max-w-xs text-center md:text-left">
                            Frontend Engineer focused on building exceptional digital experiences.
                        </p>
                    </div>

                    <div className="flex items-center gap-4 border-y md:border-y-0 md:border-x border-white/10 py-4 md:py-0 md:px-8">
                        <a href="https://github.com/epicfame" className="text-zinc-500 hover:text-white transition-colors p-2"><Github className="w-5 h-5" /></a>
                        <a href="https://www.linkedin.com/in/giovanni-jose-ricardo" className="text-zinc-500 hover:text-white transition-colors p-2"><Linkedin className="w-5 h-5" /></a>
                        <a href="mailto:giovanni.jricardo@gmail.com" className="text-zinc-500 hover:text-white transition-colors p-2"><Mail className="w-5 h-5" /></a>
                    </div>

                    <div className="text-center md:text-right">
                        <div className="flex items-center justify-center md:justify-end gap-2 mb-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                            <span className="text-sm text-zinc-300 font-medium">Available for work</span>
                        </div>
                        <p className="text-xs text-zinc-600" suppressHydrationWarning>
                            &copy; {new Date().getFullYear()} Giovanni Jose. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
