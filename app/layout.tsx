import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "Giovanni Jose Ricardo | Software Engineer",
    description: "Software Engineer specializing in frontend engineering with React, Next.js, and TypeScript, backed by full-stack ERP experience.",
    keywords: ["Giovanni Jose Ricardo", "Software Engineer", "Frontend Engineer", "React", "Next.js", "TypeScript", "Portfolio"],
    authors: [{ name: "Giovanni Jose" }],
    openGraph: {
        title: "Giovanni Jose Ricardo | Software Engineer",
        description: "Software Engineer building reliable, user-friendly digital products with React, Next.js, and TypeScript.",
        type: "website",
    },
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
