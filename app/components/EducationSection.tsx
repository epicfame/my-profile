"use client";

import { GraduationCap, Award, Calendar, BookOpen, Globe } from "lucide-react";

interface Education {
    school: string;
    degree: string;
    period: string;
    gpa: string;
    gpaMax: string;
    icon: typeof GraduationCap;
}

interface Certification {
    name: string;
    issuer: string;
    year: string;
}

const education: Education[] = [
    {
        school: "Binus University Alam Sutera",
        degree: "Bachelor's Degree in Computer Science",
        period: "Sept 2020 - April 2024",
        gpa: "3.85",
        gpaMax: "4.00",
        icon: GraduationCap,
    },
    {
        school: "SMA Regina Pacis Surakarta",
        degree: "High School in Science",
        period: "June 2017 - June 2020",
        gpa: "90.87",
        gpaMax: "100",
        icon: BookOpen,
    },
];

const certifications: Certification[] = [
    {
        name: "Secure Code Corporate Training",
        issuer: "Cyber Academy Indonesia",
        year: "2025",
    },
    {
        name: "Belajar Dasar Pemrograman JavaScript",
        issuer: "Dicoding",
        year: "2025",
    },
    {
        name: "Certification of Mentoring Program by Binus SASC",
        issuer: "Binus University",
        year: "2022",
    },
];

export default function EducationSection() {
    return (
        <div className="space-y-6">
            {/* Education Cards */}
            <div className="grid md:grid-cols-2 gap-4">
                {education.map((edu, index) => (
                    <div
                        key={index}
                        className="glass-card rounded-2xl p-5 md:p-6 group hover:border-violet-500/15 transition-all duration-300"
                    >
                        <div className="flex items-start gap-4">
                            <div className="w-11 h-11 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0">
                                <edu.icon className="w-5 h-5 text-violet-400" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className="text-base font-semibold text-zinc-100 mb-0.5 truncate">
                                    {edu.school}
                                </h4>
                                <p className="text-sm text-zinc-400 mb-2">{edu.degree}</p>
                                <div className="flex items-center gap-3 text-xs text-zinc-500">
                                    <span className="flex items-center gap-1">
                                        <Calendar className="w-3 h-3" />
                                        {edu.period}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* GPA Badge */}
                        <div className="mt-4 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                            <span className="text-xs text-zinc-500 font-medium">GPA</span>
                            <div className="flex items-baseline gap-1">
                                <span className="text-lg font-bold gradient-text">{edu.gpa}</span>
                                <span className="text-xs text-zinc-500">/ {edu.gpaMax}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Certifications */}
            <div className="glass-card rounded-2xl p-5 md:p-6">
                <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                        <Award className="w-4 h-4 text-amber-400" />
                    </div>
                    <h4 className="text-base font-semibold text-zinc-100">Certifications</h4>
                </div>

                <div className="space-y-3">
                    {certifications.map((cert, index) => (
                        <div
                            key={index}
                            className="flex items-start gap-3 px-4 py-3 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] hover:border-white/[0.08] transition-all duration-300"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400/60 mt-2 flex-shrink-0" />
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-zinc-200 mb-0.5">{cert.name}</p>
                                <p className="text-xs text-zinc-500">
                                    {cert.issuer} · {cert.year}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Languages */}
            <div className="glass-card rounded-2xl p-5 md:p-6">
                <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center">
                        <Globe className="w-4 h-4 text-pink-400" />
                    </div>
                    <h4 className="text-base font-semibold text-zinc-100">Languages</h4>
                </div>

                <div className="space-y-3">
                    <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                        <div className="flex items-center gap-3">
                            <span className="text-lg">🇮🇩</span>
                            <span className="text-sm font-medium text-zinc-200">Indonesian</span>
                        </div>
                        <span className="text-xs text-zinc-500 font-medium px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/[0.05]">Native</span>
                    </div>
                    
                    <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                        <div className="flex items-center gap-3">
                            <span className="text-lg">🌏</span>
                            <span className="text-sm font-medium text-zinc-200">English</span>
                        </div>
                        <span className="text-xs text-zinc-500 font-medium px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/[0.05]">Intermediate</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
