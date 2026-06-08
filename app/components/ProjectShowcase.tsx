"use client";

import React, { useState } from "react";
import { Folder, ExternalLink, Layers, Cpu, Eye, Star } from "lucide-react";

// Local Github icon definition since it's not exported by this version of lucide-react
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
);

interface Project {
    title: string;
    description: string;
    category: "fullstack" | "frontend" | "backend";
    tags: string[];
    backendHighlight: string;
    frontendHighlight: string;
    githubUrl: string;
    liveUrl: string;
    featured: boolean;
}

export default function ProjectShowcase() {
    const [filter, setFilter] = useState<"all" | "fullstack" | "frontend" | "backend">("all");

    const projects: Project[] = [
        {
            title: "Kingdom of Glory Application",
            description:
                "Church management platform that helps members book seats, access devotionals, and view worship schedules through web and mobile applications.",
            category: "fullstack",
            tags: [
                "Next.js",
                "React Native",
                "NestJS",
                "TypeScript",
                "MySQL"
            ],
            backendHighlight:
                "Designed and developed REST APIs, authentication flows, and database structures using NestJS and MySQL.",

            frontendHighlight:
                "Contributed to web and mobile frontend development by implementing features, fixing bugs, and improving user experience.",

            githubUrl: "#",
            liveUrl: "https://kingdomofglory.church",
            featured: true,
        },
        {
            title: "Personal Portfolio Website",
            description:
                "A modern portfolio website showcasing projects, skills, and frontend engineering capabilities.",

            category: "frontend",

            tags: [
                "Next.js",
                "React",
                "TypeScript",
                "Tailwind CSS"
            ],

            backendHighlight:
                "Integrated contact workflows and structured project data for scalable content management.",

            frontendHighlight:
                "Built responsive layouts, animated interactions, dark-themed UI, and optimized performance across devices.",

            githubUrl: "...",
            liveUrl: "...",
            featured: true,
        },
        {
            title: "GKMI Anugerah Website",
            description:
                "Church website platform used to manage events, media content, and organizational information.",

            category: "backend",

            tags: [
                "Laravel",
                "PHP",
                "MySQL",
                "REST API"
            ],

            backendHighlight:
                "Designed database schemas and developed REST API endpoints to support content management operations.",

            frontendHighlight:
                "Collaborated with frontend integration by providing structured APIs and optimized data delivery.",

            githubUrl: "#",
            liveUrl: "https://gkmi-anugerah.org",
            featured: true,
        },

        {
            title: "Enterprise ERP Modules",
            description:
                "Development and maintenance of ERP modules supporting Finance, HR, Payroll, and Cashier operations across multiple departments.",

            category: "fullstack",

            tags: [
                "Laravel",
                "MySQL",
                "REST API",
                "JavaScript"
            ],

            backendHighlight:
                "Developed and integrated more than 20 REST APIs while optimizing database performance and automation workflows.",

            frontendHighlight:
                "Implemented business-facing interfaces and collaborated with stakeholders to improve operational efficiency.",

            githubUrl: "#",
            liveUrl: "#",
            featured: true,
        }
    ];

    const filteredProjects = filter === "all"
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <div>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                <div>
                    <h3 className="text-xl md:text-2xl font-mono text-cyan-400 mb-2 flex items-center gap-2">
                        <Folder className="w-5 h-5 text-cyan-400" />
                        FEATURED PROJECTS
                    </h3>
                    <p className="text-sm text-slate-400">
                        Browse through custom systems, dashboards, and front-end interfaces.
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap gap-2 font-mono text-xs">
                    {[
                        { id: "all", label: "ALL" },
                        { id: "frontend", label: "FRONT_END" },
                        { id: "backend", label: "BACK_END" },
                        { id: "fullstack", label: "FULL_STACK" },
                    ].map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setFilter(item.id as any)}
                            className={`px-3 py-2 rounded-md border transition-all ${filter === item.id
                                ? "bg-indigo-950/40 border-cyan-500 text-cyan-300 glow-border-cyan"
                                : "bg-slate-950/40 border-slate-900 text-slate-400 hover:border-slate-800 hover:text-slate-200"
                                }`}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Grid */}
            <div className="grid md:grid-cols-2 gap-6">
                {filteredProjects.map((project) => (
                    <div
                        key={project.title}
                        className="glass-panel glass-panel-hover rounded-xl p-5 md:p-6 border border-slate-800 flex flex-col justify-between relative group"
                    >
                        {project.featured && (
                            <span className="absolute top-4 right-4 bg-indigo-950/60 border border-indigo-500/40 text-cyan-400 text-[10px] font-mono px-2 py-0.5 rounded-full flex items-center gap-1">
                                <Star className="w-3 h-3 text-cyan-400 fill-cyan-400" />
                                FEATURED
                            </span>
                        )}

                        <div>
                            {/* Category indicator */}
                            <span className="font-mono text-[10px] text-cyan-500 uppercase tracking-widest block mb-2">
                                {project.category} PROJECT
                            </span>

                            <h4 className="text-lg md:text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors mb-3">
                                {project.title}
                            </h4>

                            <p className="text-sm text-slate-400 mb-5 leading-relaxed">
                                {project.description}
                            </p>

                            {/* Backend & Frontend split highlights */}
                            <div className="space-y-3 mb-6 bg-slate-950/30 p-3 rounded-lg border border-slate-900/60">
                                <div className="flex gap-2.5 items-start">
                                    <Eye className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                                    <p className="text-xs text-slate-400 leading-normal">
                                        <strong className="text-slate-300 font-medium">Frontend Contribution: </strong>
                                        {project.frontendHighlight}
                                    </p>
                                </div>
                                <div className="flex gap-2.5 items-start">
                                    <Cpu className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                                    <p className="text-xs text-slate-400 leading-normal">
                                        <strong className="text-slate-300 font-medium">Backend Contribution: </strong>
                                        {project.backendHighlight}
                                    </p>
                                </div>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-1.5 mb-6">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="bg-slate-950/50 border border-slate-900 text-slate-400 text-[10px] font-mono px-2 py-1 rounded-md"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Links */}
                        <div className="flex items-center gap-4 pt-4 border-t border-slate-900/60 text-sm font-mono">
                            {project.githubUrl !== "#" && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 text-slate-400 hover:text-slate-100 transition-colors"
                                >
                                    <GithubIcon className="w-4 h-4" />
                                    <span>Source Code</span>
                                </a>
                            )}
                            {project.liveUrl !== "#" && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition-colors ml-auto"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    <span>Live Demo</span>
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
