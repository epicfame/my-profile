import type { Metadata } from "next";
import { Space_Grotesk, Orbitron } from "next/font/google";
import "./globals.css";

const spaceSans = Space_Grotesk({
    variable: "--font-space-sans",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

const spaceMono = Orbitron({
    variable: "--font-space-mono",
    subsets: ["latin"],
    weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
    title: "Giovanni Jose | Cosmic Developer Portfolio",
    description: "Web developer transitioning from backend architecture to frontend interfaces. Explore the journey from the engine room to the control deck.",
    keywords: ["Software Engineer", "Backend Developer", "Frontend Developer", "Next.js", "React", "TypeScript", "Node.js", "Portfolio"],
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
            className={`${spaceSans.variable} ${spaceMono.variable} h-full scroll-smooth antialiased`}
        >
            <body className="min-h-full flex flex-col bg-space-dark text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
                {children}
            </body>
        </html>
    );
}
