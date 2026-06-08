"use client";

import React, { useState } from "react";
import { Send, Terminal, ShieldCheck, Loader2 } from "lucide-react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "GENERAL_INQUIRY",
        message: "",
    });

    const [status, setStatus] = useState<"idle" | "transmitting" | "success" | "error">("idle");
    const [logs, setLogs] = useState<string[]>([]);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const addLogLine = (line: string, delay: number) => {
        return new Promise<void>((resolve) => {
            setTimeout(() => {
                setLogs((prev) => [...prev, line]);
                resolve();
            }, delay);
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            setStatus("error");
            setLogs(["[ERROR] Missing required fields.", "Please check fields."]);
            return;
        }

        setStatus("transmitting");
        setLogs([]);

        await addLogLine("[INITIATING] Sub-space connection to Giovanni's terminal...", 400);
        await addLogLine("[RESOLVING] Address: giovanni.jricardo@gmail.com", 300);
        await addLogLine("[ENCRYPTING] Packing payload using SHA-256...", 500);
        await addLogLine(`[METADATA] Sender: ${formData.name.toUpperCase()} <${formData.email}>`, 300);
        await addLogLine(`[METADATA] Subject: ${formData.subject}`, 200);
        await addLogLine("[UPLINK] Transmitting telemetry packets...", 600);
        await addLogLine("[SUCCESS] Uplink verified. Code: 202 ACCEPTED", 400);
        await addLogLine(`[RESPONSE] Giovanni: "Message received, human. Initiating response in T-minus 24h."`, 400);

        const subject = encodeURIComponent(formData.subject);
        const body = encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
        );

        window.location.href = `mailto:giovanni.jricardo@gmail.com?subject=${subject}&body=${body}`;
        setStatus("success");
    };

    const resetConsole = () => {
        setFormData({
            name: "",
            email: "",
            subject: "GENERAL_INQUIRY",
            message: "",
        });
        setStatus("idle");
        setLogs([]);
    };

    return (
        <div className="glass-panel rounded-2xl p-6 md:p-8 border border-slate-800 relative">
            <div className="absolute top-0 right-0 w-32 h-32 radial-glow-cyan opacity-20 pointer-events-none" />

            <h3 className="text-xl md:text-2xl font-mono text-cyan-400 mb-6 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-cyan-400 animate-pulse" />
                COMMUNICATION_LINK: UPLINK
            </h3>

            {status !== "success" ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-4">
                        {/* Name */}
                        <div>
                            <label htmlFor="name" className="block text-xs font-mono text-slate-400 uppercase tracking-widest mb-2">
                                Sender Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 glass-input text-sm"
                                placeholder="Enter name"
                                required
                                disabled={status === "transmitting"}
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-xs font-mono text-slate-400 uppercase tracking-widest mb-2">
                                Sender Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 glass-input text-sm"
                                placeholder="Enter email"
                                required
                                disabled={status === "transmitting"}
                            />
                        </div>
                    </div>

                    {/* Subject */}
                    <div>
                        <label htmlFor="subject" className="block text-xs font-mono text-slate-400 uppercase tracking-widest mb-2">
                            Transmission Subject
                        </label>
                        <select
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 glass-input text-sm appearance-none cursor-pointer focus:ring-0 focus:border-cyan-500"
                            disabled={status === "transmitting"}
                        >
                            <option value="GENERAL_INQUIRY">GENERAL_INQUIRY</option>
                            <option value="PROJECT_COLLAB">PROJECT_COLLABORATION</option>
                            <option value="JOB_OFFER">JOB_OPPORTUNITY</option>
                            <option value="SYSTEMS_DISCUSSION">SYSTEMS_DISCUSSION</option>
                        </select>
                    </div>

                    {/* Message */}
                    <div>
                        <label htmlFor="message" className="block text-xs font-mono text-slate-400 uppercase tracking-widest mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows={4}
                            className="w-full px-4 py-3 glass-input text-sm resize-none"
                            placeholder="Input your transmission details..."
                            required
                            disabled={status === "transmitting"}
                        />
                    </div>

                    {/* Error Message */}
                    {status === "error" && (
                        <div className="p-3 bg-red-950/20 border border-red-500/30 rounded-lg text-xs font-mono text-red-400">
                            {logs.map((log, index) => (
                                <p key={index}>{log}</p>
                            ))}
                        </div>
                    )}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={status === "transmitting"}
                        className="w-full py-3 bg-indigo-950/40 border border-indigo-500/40 text-cyan-300 rounded-lg font-mono text-sm uppercase tracking-widest hover:border-cyan-400 hover:text-cyan-200 transition-all hover:bg-indigo-950/60 duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group cursor-pointer"
                    >
                        {status === "transmitting" ? (
                            <>
                                <Loader2 className="w-4 h-4 animate-spin text-cyan-400" />
                                SENDING...
                            </>
                        ) : (
                            <>
                                <Send className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                SEND EMAIL
                            </>
                        )}
                    </button>
                </form>
            ) : (
                /* Transmission Terminal Logs */
                <div className="bg-slate-950 border border-slate-900 rounded-xl p-5 font-mono text-xs md:text-sm text-emerald-400 space-y-2 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-3 flex gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 animate-ping" />
                        <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    </div>

                    <div className="border-b border-emerald-950 pb-2 mb-3 text-slate-500 flex items-center justify-between text-[10px]">
                        <span>EMAIL_TERMINAL</span>
                        <span>UPLINK_SECURE</span>
                    </div>

                    <div className="space-y-1">
                        {logs.map((log, index) => (
                            <p key={index} className="leading-relaxed">
                                {log}
                            </p>
                        ))}
                    </div>

                    <div className="pt-4 mt-4 border-t border-emerald-950/50 flex flex-col sm:flex-row justify-between items-center gap-3">
                        <span className="text-[10px] text-slate-500">TRANSMISSION COMPLETION STATE: SECURE_COMMS</span>
                        <button
                            onClick={resetConsole}
                            className="px-3 py-1.5 bg-emerald-950/20 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-950/40 rounded transition-all cursor-pointer text-xs uppercase"
                        >
                            Link New Session
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
