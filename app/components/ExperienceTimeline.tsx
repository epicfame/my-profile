"use client";

import { Building2, Calendar } from "lucide-react";

interface Experience {
    title: string;
    company: string;
    location: string;
    period: string;
    type: "current" | "past";
    highlights: string[];
}

const experiences: Experience[] = [
    {
        title: "System Analyst",
        company: "PT. Hartono Istana Teknologi (Polytron)",
        location: "Kudus, Indonesia",
        period: "March 2026 - Present",
        type: "current",
        highlights: [
            "Analyzed business processes and proposed solutions that reduced manual workflows by up to 30%",
            "Gathered and translated requirements for 10+ application enhancement and development projects",
            "Produced technical specifications, system flows, and documentation to guide development teams",
            "Collaborated with business stakeholders and development teams for on-time delivery",
        ],
    },
    {
        title: "Application Developer",
        company: "PT. Hartono Istana Teknologi (Polytron)",
        location: "Kudus, Indonesia",
        period: "June 2024 - March 2026",
        type: "past",
        highlights: [
            "Developed and maintained ERP modules for Finance, HR, and Payroll operations",
            "Built and integrated 20+ RESTful APIs, background job, and fullstack application for web applications and internal systems",
            "Improved application performance by optimizing database queries and using multithreading by 50%",
            "Implemented queue-based background jobs for report generation and automation",
        ],
    },
    {
        title: "Application Developer Internship",
        company: "PT. Hartono Istana Teknologi (Polytron)",
        location: "Kudus, Indonesia",
        period: "March 2023 - March 2024",
        type: "past",
        highlights: [
            "Developed RESTful APIs and CRUD modules for ERP system enhancements",
            "Assisted in feature development, bug fixing, and production issue investigation",
            "Developed and maintained a Fixed Asset Management System to reduce the manual work",
        ],
    },
];

export default function ExperienceTimeline() {
    return (
        <div className="relative">
            {/* Timeline Line */}
            <div className="timeline-line hidden md:block" />

            <div className="space-y-5">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className="relative flex gap-5 md:gap-8 group"
                    >
                        {/* Timeline Dot */}
                        <div className="hidden md:flex items-start pt-7">
                            <div className={`timeline-dot ${exp.type === "current" ? "animate-pulse" : "opacity-60"}`} />
                        </div>

                        {/* Card */}
                        <div className="flex-1 glass-card rounded-2xl p-5 md:p-6 group-hover:border-violet-500/15 transition-all duration-300">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <h4 className="text-base md:text-lg font-semibold text-zinc-100">
                                            {exp.title}
                                        </h4>
                                        {exp.type === "current" && (
                                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-medium text-emerald-400">
                                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                                Current
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-zinc-400">
                                        <Building2 className="w-3.5 h-3.5 text-violet-400/60" />
                                        <span>{exp.company}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1.5 text-xs text-zinc-500 flex-shrink-0">
                                    <Calendar className="w-3.5 h-3.5" />
                                    <span>{exp.period}</span>
                                </div>
                            </div>

                            <ul className="space-y-2">
                                {exp.highlights.map((highlight, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start gap-2.5 text-sm text-zinc-400 leading-relaxed"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-violet-500/50 mt-2 flex-shrink-0" />
                                        <span>{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
