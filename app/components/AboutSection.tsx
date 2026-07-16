"use client";

import { Briefcase, GraduationCap, Code, Globe } from "lucide-react";

const stats = [
    { icon: Briefcase, label: "Years Experience", value: "3+", color: "violet" },
    { icon: Code, label: "Finished Projects", value: "10+", color: "blue" },
    { icon: GraduationCap, label: "GPA", value: "3.85", color: "emerald" },
    { icon: Globe, label: "Live Projects", value: "3+", color: "amber" },
];

const colorMap: Record<string, { bg: string; text: string; border: string; shadow: string }> = {
    violet: {
        bg: "bg-violet-500/10",
        text: "text-violet-400",
        border: "border-violet-500/20",
        shadow: "shadow-violet-500/5",
    },
    blue: {
        bg: "bg-blue-500/10",
        text: "text-blue-400",
        border: "border-blue-500/20",
        shadow: "shadow-blue-500/5",
    },
    emerald: {
        bg: "bg-emerald-500/10",
        text: "text-emerald-400",
        border: "border-emerald-500/20",
        shadow: "shadow-emerald-500/5",
    },
    amber: {
        bg: "bg-amber-500/10",
        text: "text-amber-400",
        border: "border-amber-500/20",
        shadow: "shadow-amber-500/5",
    },
};

export default function AboutSection() {
    return (
        <div className="space-y-8">
            {/* About Card */}
            <div className="glass-card-accent rounded-3xl p-6 md:p-8">
                <div className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-lg">👋</span>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-zinc-100 mb-1">About Me</h3>
                        <p className="text-xs text-zinc-500">Get to know me better</p>
                    </div>
                </div>

                <div className="space-y-4">
                    <p className="text-sm md:text-base text-zinc-300 leading-relaxed">
                        I&apos;m a <span className="text-violet-300 font-medium">Software Engineer</span> with{" "}
                        <span className="text-violet-300 font-medium">3 years of experience</span> in full-stack
                        development and system analysis, currently specializing in frontend development with
                        React and JavaScript.
                    </p>
                    <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
                        Currently working at{" "}
                        <span className="text-zinc-200 font-medium">PT. Hartono Istana Teknologi (Polytron)</span>{" "}
                        as a System Analyst, where I gather and translate requirements for application
                        enhancement projects, analyze business processes, and collaborate with development
                        teams to ensure on-time delivery.
                    </p>
                    <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
                        I enhanced my frontend expertise through{" "}
                        <span className="text-zinc-200 font-medium">KodingUp Bootcamp</span>, focusing on
                        modern React development and building responsive web applications. Passionate about{" "}
                        <span className="text-violet-300/80">building scalable applications</span>,{" "}
                        <span className="text-blue-300/80">clean code</span>, and{" "}
                        <span className="text-emerald-300/80">user-friendly digital experiences</span>.
                    </p>
                </div>

                {/* Quick Info Tags */}
                <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-white/[0.06]">
                    {["🇮🇩 Indonesian Native", "🌏 English Intermediate", "📍 Indonesia", "💼 Open to Opportunities"].map((tag) => (
                        <span
                            key={tag}
                            className="text-xs px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-zinc-400"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {stats.map((stat) => {
                    const colors = colorMap[stat.color];
                    return (
                        <div
                            key={stat.label}
                            className={`stat-card-shine glass-card rounded-2xl p-5 text-center group hover:scale-[1.02] transition-transform duration-300`}
                        >
                            <div className={`w-10 h-10 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center mx-auto mb-3 shadow-lg ${colors.shadow}`}>
                                <stat.icon className={`w-4.5 h-4.5 ${colors.text}`} />
                            </div>
                            <p className="text-2xl md:text-3xl font-bold text-zinc-100 mb-1 gradient-text">
                                {stat.value}
                            </p>
                            <p className="text-[11px] text-zinc-500 font-medium tracking-wide uppercase">
                                {stat.label}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
