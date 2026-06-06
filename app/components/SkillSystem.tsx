"use client";

import React, { useState } from "react";
import { HardDrive, Compass, Terminal, ShieldAlert, CheckCircle2 } from "lucide-react";

interface Skill {
    name: string;
    category: "frontend" | "backend" | "tools";
}

export default function SkillSystem() {
    const [activeCategory, setActiveCategory] = useState<"all" | "backend" | "frontend" | "tools">("all");

    const skills: Skill[] = [
        // Frontend
        { name: "React.js", category: "frontend" },
        { name: "Next.js", category: "frontend" },
        { name: "JavaScript (ES6+)", category: "frontend" },
        { name: "TypeScript", category: "frontend" },

        // Backend
        { name: "Node.js / Express", category: "backend" },
        { name: "REST APIs", category: "backend" },

        // Tools & Aux
        { name: "Git / Version Control", category: "tools" },
    ];

    const filteredSkills = activeCategory === "all"
        ? skills
        : skills.filter(s => s.category === activeCategory);

    const getCategoryTheme = (category: string) => {
        switch (category) {
            case "frontend":
                return {
                    bg: "bg-cyan-950/20",
                    border: "border-cyan-800/40",
                    barBg: "bg-cyan-950",
                    barColor: "bg-cyan-500",
                    text: "text-cyan-400",
                    glow: "shadow-[0_0_12px_rgba(6,182,212,0.3)]",
                };
            case "backend":
                return {
                    bg: "bg-indigo-950/20",
                    border: "border-indigo-800/40",
                    barBg: "bg-indigo-950",
                    barColor: "bg-indigo-500",
                    text: "text-indigo-400",
                    glow: "shadow-[0_0_12px_rgba(99,102,241,0.3)]",
                };
            default:
                return {
                    bg: "bg-slate-900/20",
                    border: "border-slate-800/60",
                    barBg: "bg-slate-950",
                    barColor: "bg-slate-400",
                    text: "text-slate-400",
                    glow: "shadow-[0_0_12px_rgba(148,163,184,0.2)]",
                };
        }
    };

    return (
        <div className="glass-panel rounded-2xl p-6 md:p-8 border border-slate-800 relative">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                <div>
                    <h3 className="text-xl md:text-2xl font-mono text-cyan-400 mb-2 flex items-center gap-2">
                        Technical Skills
                    </h3>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap gap-2 font-mono text-xs">
                    {[
                        { id: "all", label: "ALL" },
                        { id: "frontend", label: "FRONTEND" },
                        { id: "backend", label: "BACKEND" },
                        { id: "tools", label: "TOOLS" },
                    ].map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id as any)}
                            className={`px-3 py-2 rounded-md border transition-all ${activeCategory === cat.id
                                ? "bg-cyan-950/40 border-cyan-500 text-cyan-300"
                                : "bg-slate-950/40 border-slate-900 text-slate-400 hover:border-slate-800 hover:text-slate-200"
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Skills Matrix */}
            <div className="grid md:grid-cols-2 gap-6">
                {filteredSkills.map((skill, index) => {
                    const theme = getCategoryTheme(skill.category);
                    return (
                        <div
                            key={skill.name}
                            className={`p-4 rounded-xl border ${theme.bg} ${theme.border} flex flex-col justify-between hover:border-slate-700/80 transition-all`}
                        >
                            <div className="flex items-center justify-between mb-3">
                                <span className="font-mono text-sm font-semibold tracking-wide text-slate-200 flex items-center gap-2">
                                    <span className={`w-1.5 h-1.5 rounded-full ${theme.barColor}`} />
                                    {skill.name}
                                </span>
                            </div>

                            <div className="flex justify-between items-center mt-2.5 font-mono text-[10px] text-slate-500">
                                <span className="uppercase">{skill.category} MODULE</span>
                                <span className="flex items-center gap-1 text-emerald-500">
                                    <CheckCircle2 className="w-3 h-3" />
                                    STATUS OK
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Spacecraft Diagnostics Banner */}
            <div className="mt-8 pt-6 border-t border-slate-900/80 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-slate-500">
                <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-indigo-500" />
                    <span>DIAGNOSTIC: READY_FOR_MISSION</span>
                </div>
                <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                        Backend Systems
                    </span>
                    <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                        Frontend Systems
                    </span>
                </div>
            </div>
        </div>
    );
}
