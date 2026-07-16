"use client";

import React, { useState } from "react";
import { Send, Loader2, CheckCircle } from "lucide-react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "General Inquiry",
        message: "",
    });

    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            setStatus("error");
            return;
        }

        setStatus("sending");

        // Small delay for UX
        await new Promise((resolve) => setTimeout(resolve, 800));

        const subject = encodeURIComponent(formData.subject);
        const body = encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
        );

        window.location.href = `mailto:giovanni.jricardo@gmail.com?subject=${subject}&body=${body}`;
        setStatus("success");
    };

    const reset = () => {
        setFormData({ name: "", email: "", subject: "General Inquiry", message: "" });
        setStatus("idle");
    };

    return (
        <div className="glass rounded-2xl p-6 md:p-8">
            {status !== "success" ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="name" className="block text-xs font-medium text-zinc-400 mb-2">
                                Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 glass-input text-sm"
                                placeholder="Your name"
                                required
                                disabled={status === "sending"}
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-xs font-medium text-zinc-400 mb-2">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 glass-input text-sm"
                                placeholder="you@example.com"
                                required
                                disabled={status === "sending"}
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="subject" className="block text-xs font-medium text-zinc-400 mb-2">
                            Subject
                        </label>
                        <select
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 glass-input text-sm appearance-none cursor-pointer"
                            disabled={status === "sending"}
                        >
                            <option value="General Inquiry">General Inquiry</option>
                            <option value="Project Collaboration">Project Collaboration</option>
                            <option value="Job Opportunity">Job Opportunity</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-xs font-medium text-zinc-400 mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows={4}
                            className="w-full px-4 py-3 glass-input text-sm resize-none"
                            placeholder="Message"
                            required
                            disabled={status === "sending"}
                        />
                    </div>

                    {status === "error" && (
                        <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-sm text-red-400">
                            Please fill in all required fields.
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={status === "sending"}
                        className="w-full py-3.5 bg-violet-600 hover:bg-violet-500 text-white rounded-xl text-sm font-medium transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    >
                        {status === "sending" ? (
                            <>
                                <Loader2 className="w-4 h-4 animate-spin" />
                                Sending...
                            </>
                        ) : (
                            <>
                                <Send className="w-4 h-4" />
                                Send Message
                            </>
                        )}
                    </button>
                </form>
            ) : (
                <div className="text-center py-8 space-y-4">
                    <div className="w-14 h-14 mx-auto bg-emerald-500/15 border border-emerald-500/20 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-7 h-7 text-emerald-400" />
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-zinc-100 mb-1">Message Sent!</h4>
                        <p className="text-sm text-zinc-400">Your email client should have opened. I&apos;ll get back to you soon.</p>
                    </div>
                    <button
                        onClick={reset}
                        className="px-5 py-2 bg-white/[0.06] border border-white/10 text-zinc-300 hover:text-zinc-100 hover:bg-white/[0.1] rounded-xl transition-all cursor-pointer text-sm"
                    >
                        Send Another
                    </button>
                </div>
            )}
        </div>
    );
}
