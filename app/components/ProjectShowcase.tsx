"use client";

import React, { useState } from "react";
import { ExternalLink, Code2, Layers, Server } from "lucide-react";
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
                        className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                            filter === item.id
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
        </div>
    );
}
