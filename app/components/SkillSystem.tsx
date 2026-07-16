"use client";

import React, { useState } from "react";

interface Skill {
    name: string;
    category: "frontend" | "backend" | "tools" | "soft";
}

export default function SkillSystem() {
    const [activeCategory, setActiveCategory] = useState<"all" | "frontend" | "backend" | "tools" | "soft">("all");

    const skills: Skill[] = [
        { name: "React", category: "frontend" },
        { name: "Next.js", category: "frontend" },
        { name: "JavaScript", category: "frontend" },
        { name: "TypeScript", category: "frontend" },
        { name: "HTML", category: "frontend" },
        { name: "CSS", category: "frontend" },
        { name: "Node.js", category: "backend" },
        { name: "NestJS", category: "backend" },
        { name: "PHP", category: "backend" },
        { name: "Laravel", category: "backend" },
        { name: "MySQL", category: "backend" },
        { name: "GIT", category: "tools" },
        { name: "Responsible", category: "soft" },
        { name: "Problem-solving", category: "soft" },
        { name: "Adaptability", category: "soft" },
        { name: "Fast Learner", category: "soft" },
    ];

    const filteredSkills = activeCategory === "all"
        ? skills
        : skills.filter(s => s.category === activeCategory);

    const getCategoryStyles = (category: string) => {
        switch (category) {
            case "frontend": return "bg-violet-500/20 border-violet-500/30 text-violet-300";
            case "backend": return "bg-blue-500/20 border-blue-500/30 text-blue-300";
            case "tools": return "bg-emerald-500/20 border-emerald-500/30 text-emerald-300";
            case "soft": return "bg-amber-500/20 border-amber-500/30 text-amber-300";
            default: return "bg-zinc-500/20 border-zinc-500/30 text-zinc-300";
        }
    };

    const getDotColor = (category: string) => {
        switch (category) {
            case "frontend": return "bg-violet-400";
            case "backend": return "bg-blue-400";
            case "tools": return "bg-emerald-400";
            case "soft": return "bg-amber-400";
            default: return "bg-zinc-400";
        }
    };

    const getCategoryLabel = (category: string) => {
        switch (category) {
            case "frontend": return "Frontend";
            case "backend": return "Backend";
            case "tools": return "Tools";
            case "soft": return "Soft Skills";
            default: return "Other";
        }
    };

    const categories = [
        { id: "all", label: "All Skills" },
        { id: "frontend", label: "Frontend" },
        { id: "backend", label: "Backend" },
        { id: "tools", label: "Tools" },
        { id: "soft", label: "Soft Skills" },
    ];

    return (
        <div className="glass-card rounded-3xl p-6 md:p-8">
            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
                {categories.map((cat) => {
                    const isActive = activeCategory === cat.id;
                    return (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id as any)}
                            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                                isActive
                                    ? getCategoryStyles(cat.id === "all" ? "frontend" : cat.id) // Use a default style for 'all' when active, or customize
                                    : "bg-white/[0.02] text-zinc-400 hover:text-zinc-200 border border-white/[0.05] hover:bg-white/[0.06]"
                            } ${isActive && cat.id === "all" ? "bg-white/10 border-white/20 text-white" : ""}`}
                        >
                            {cat.label}
                        </button>
                    )
                })}
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
                {filteredSkills.map((skill, i) => (
                    <div
                        key={skill.name}
                        className="glass-hover flex items-center gap-3 px-4 py-3.5 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] group"
                        style={{
                            animation: `scale-in 0.3s ease-out ${i * 0.05}s both`
                        }}
                    >
                        <span className={`w-2 h-2 rounded-full ${getDotColor(skill.category)} group-hover:animate-pulse shadow-lg`} />
                        <div className="flex flex-col">
                            <span className="text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors">
                                {skill.name}
                            </span>
                            <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-medium">
                                {getCategoryLabel(skill.category)}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
