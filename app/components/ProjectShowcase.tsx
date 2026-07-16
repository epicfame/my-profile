"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { ExternalLink, Code2, Layers, Server, X, Maximize2 } from "lucide-react";
import { GithubIcon as Github } from "./Icons";

interface Project {
    title: string;
    role: string;
    period: string;
    description: string;
    category: "fullstack" | "frontend" | "backend";
    tags: string[];
    githubUrl?: string;
    liveUrl?: string;
}

export default function ProjectShowcase() {
    const [filter, setFilter] = useState<"all" | "fullstack" | "frontend" | "backend">("all");
    const [previewProject, setPreviewProject] = useState<Project | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (previewProject) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [previewProject]);

    const projects: Project[] = [
        {
            title: "Landezy",
            role: "Frontend Engineer",
            period: "2026 – Present",
            description: "Developing a property marketplace platform building responsive UI components for property listing and management workflows. Integrating REST APIs, authentication, and frontend state management.",
            category: "frontend",
            tags: ["Next.js", "React", "TypeScript", "REST APIs"],
        },
        {
            title: "Kingdom of Glory Application",
            role: "Fullstack Engineer",
            period: "March 2025 - June 2025",
            description: "A live application used by church members for seat booking, reading devotionals, and viewing service schedules. Led backend API development and database design.",
            category: "fullstack",
            tags: ["Next.js", "NestJS", "React Native"],
            liveUrl: "https://kingdomofglory.church",
        },
        {
            title: "GKMI Anugerah",
            role: "Backend Engineer",
            period: "June 2025 - August 2025",
            description: "Stable backend supporting the church website in managing various activities and digital content. Responsible for database design and REST API endpoint development.",
            category: "backend",
            tags: ["Laravel", "MySQL", "REST API"],
            liveUrl: "https://gkmi-anugerah.org",
        }
    ];

    const filteredProjects = filter === "all"
        ? projects
        : projects.filter(p => p.category === filter);

    const getCategoryBadge = (category: string) => {
        switch (category) {
            case "fullstack": return { bg: "bg-violet-500/15", border: "border-violet-500/30", text: "text-violet-300", icon: Layers };
            case "frontend": return { bg: "bg-blue-500/15", border: "border-blue-500/30", text: "text-blue-300", icon: Code2 };
            case "backend": return { bg: "bg-emerald-500/15", border: "border-emerald-500/30", text: "text-emerald-300", icon: Server };
            default: return { bg: "bg-zinc-500/15", border: "border-zinc-500/30", text: "text-zinc-300", icon: Layers };
        }
    };

    return (
        <div>
            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
                {[
                    { id: "all", label: "All Projects" },
                    { id: "frontend", label: "Frontend" },
                    { id: "backend", label: "Backend" },
                    { id: "fullstack", label: "Full Stack" },
                ].map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setFilter(item.id as any)}
                        className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${filter === item.id
                            ? "bg-white/10 text-white border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                            : "bg-white/[0.02] text-zinc-400 hover:text-zinc-200 border border-white/[0.06] hover:bg-white/[0.06]"
                            }`}
                    >
                        {item.label}
                    </button>
                ))}
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
                {filteredProjects.map((project, i) => {
                    const style = getCategoryBadge(project.category);
                    const Icon = style.icon;
                    return (
                        <div
                            key={project.title}
                            className="glass-card glass-hover rounded-3xl p-6 md:p-8 flex flex-col justify-between group overflow-hidden relative"
                            style={{ animation: `slide-up 0.5s ease-out ${i * 0.1}s both` }}
                        >


                            {/* Decorative background glow */}
                            <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-20 ${style.bg.replace('/15', '')} transition-opacity duration-500 group-hover:opacity-40`} />

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-6">
                                    <div className={`inline-flex items-center gap-1.5 text-[11px] font-semibold px-3 py-1.5 rounded-full border uppercase tracking-wider ${style.bg} ${style.border} ${style.text}`}>
                                        <Icon className="w-3.5 h-3.5" />
                                        {project.category}
                                    </div>
                                    <span className="text-xs text-zinc-500 border border-white/[0.06] px-2.5 py-1 rounded-full bg-white/[0.02]">
                                        {project.period}
                                    </span>
                                </div>

                                <h4 className="text-xl font-bold text-zinc-100 group-hover:text-white transition-colors mb-2">
                                    {project.title}
                                </h4>
                                <h5 className="text-sm font-medium text-violet-400 mb-4">{project.role}</h5>

                                <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                {project.liveUrl && (
                                    <div 
                                        className="w-full h-32 md:h-40 mb-6 rounded-xl overflow-hidden border border-white/[0.08] bg-zinc-900/50 relative group/iframe cursor-pointer hover:border-violet-500/40 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] transition-all duration-300 ring-1 ring-transparent hover:ring-violet-500/20 flex flex-col"
                                        onClick={() => setPreviewProject(project)}
                                    >
                                        {/* Mock browser header */}
                                        <div className="h-6 bg-white/[0.04] border-b border-white/[0.08] flex items-center px-3 gap-1.5 w-full z-20">
                                            <div className="w-2 h-2 rounded-full bg-zinc-600 group-hover/iframe:bg-red-400 transition-colors"></div>
                                            <div className="w-2 h-2 rounded-full bg-zinc-600 group-hover/iframe:bg-amber-400 transition-colors"></div>
                                            <div className="w-2 h-2 rounded-full bg-zinc-600 group-hover/iframe:bg-emerald-400 transition-colors"></div>
                                        </div>
                                        
                                        {/* Body */}
                                        <div className="flex-1 relative overflow-hidden flex items-center justify-center">
                                            {/* Pattern bg */}
                                            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]"></div>
                                            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-blue-500/5 group-hover/iframe:opacity-100 opacity-50 transition-opacity"></div>
                                            
                                            {/* Button */}
                                            <div className="relative z-10 bg-zinc-800/80 backdrop-blur-md border border-white/10 px-5 py-2.5 rounded-full flex items-center gap-2 text-sm font-semibold text-white shadow-xl transform group-hover/iframe:scale-105 group-hover/iframe:bg-zinc-800 transition-all duration-300">
                                                <Maximize2 className="w-4 h-4 text-violet-400" />
                                                Live Preview
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="bg-white/[0.03] border border-white/[0.08] hover:border-white/[0.15] hover:bg-white/[0.06] transition-colors text-zinc-300 text-xs px-3 py-1.5 rounded-lg"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Links */}
                            <div className="flex items-center gap-4 pt-5 border-t border-white/[0.08] text-sm relative z-10">
                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-transparent hover:border-white/[0.1] text-zinc-300 hover:text-white transition-all"
                                    >
                                        <Github className="w-4 h-4" />
                                        <span className="font-medium">Code</span>
                                    </a>
                                )}
                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-violet-600/20 hover:bg-violet-600/40 border border-violet-500/30 hover:border-violet-500/50 text-violet-300 hover:text-violet-200 transition-all ml-auto"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        <span className="font-medium">Visit Site</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Live Preview Modal */}
            {mounted && previewProject && previewProject.liveUrl && createPortal(
                <div 
                    className="fixed inset-0 z-[9999] flex items-center justify-center p-2 sm:p-4 md:p-6 lg:p-12 animate-fade-in"
                    onClick={() => setPreviewProject(null)}
                >
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />
                    
                    {/* Modal Content */}
                    <div 
                        className="relative w-full max-w-6xl h-full sm:max-h-[90vh] bg-[#0c0c0e] border border-white/10 rounded-2xl md:rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-scale-in"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/[0.02] backdrop-blur z-20">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2">
                                    <button onClick={() => setPreviewProject(null)} className="w-3.5 h-3.5 rounded-full bg-red-500 hover:bg-red-400 transition-colors flex items-center justify-center group">
                                        <X className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 text-red-950" />
                                    </button>
                                    <div className="w-3.5 h-3.5 rounded-full bg-amber-500"></div>
                                    <div className="w-3.5 h-3.5 rounded-full bg-emerald-500"></div>
                                </div>
                                <div className="h-4 w-px bg-white/20 hidden sm:block"></div>
                                <h3 className="font-semibold text-zinc-200 text-sm truncate max-w-[150px] sm:max-w-none">{previewProject.title}</h3>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="px-3 py-1.5 rounded-full bg-black/50 border border-white/10 text-xs text-zinc-400 hidden lg:block font-mono max-w-[200px] truncate select-all">
                                    {previewProject.liveUrl}
                                </div>
                                <a 
                                    href={previewProject.liveUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-violet-300 transition-colors"
                                    title="Open in new tab"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                                <button 
                                    onClick={() => setPreviewProject(null)} 
                                    className="p-1.5 text-zinc-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors ml-1"
                                    title="Close Preview"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Interactive Iframe */}
                        <div className="flex-1 bg-white relative w-full h-full">
                            {/* Loading Skeleton */}
                            <div className="absolute inset-0 flex flex-col gap-4 p-8 bg-zinc-950 animate-pulse">
                                <div className="h-12 bg-white/5 rounded-xl w-full max-w-3xl mb-4"></div>
                                <div className="h-64 bg-white/5 rounded-xl w-full max-w-5xl"></div>
                                <div className="h-32 bg-white/5 rounded-xl w-full max-w-lg"></div>
                            </div>

                            <iframe 
                                src={previewProject.liveUrl} 
                                className="relative w-full h-full border-none z-10"
                                title={`Preview of ${previewProject.title}`}
                                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                                allow="fullscreen"
                            />
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </div>
    );
}
