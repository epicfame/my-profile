import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "Giovanni Jose | Frontend Engineer",
    description: "Frontend Engineer specializing in React, Next.js, and TypeScript. Building modern, responsive web experiences.",
    keywords: ["Frontend Engineer", "React", "Next.js", "TypeScript", "Web Developer", "Portfolio"],
    authors: [{ name: "Giovanni Jose" }],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${inter.variable} h-full scroll-smooth antialiased`}
        >
            <body className="min-h-full flex flex-col bg-[#08080d] text-zinc-200 font-sans selection:bg-violet-500/20 selection:text-violet-200">
                {children}
            </body>
        </html>
    );
}
