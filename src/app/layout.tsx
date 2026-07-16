import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mukul Oli | Premium Web Development & High-Converting Websites",
  description: "Mukul Oli is a Full Stack Developer creating premium, blazing-fast Next.js websites for small business startups and platforms. Get optimized landing pages, SEO-first structures, and high ad conversions.",
  keywords: [
    "Mukul Oli",
    "Full Stack Developer",
    "Next.js Static Site",
    "Web Development for Startups",
    "Landing Page Developer",
    "High Converting Websites",
    "Startup MVP"
  ],
  authors: [{ name: "Mukul Oli" }],
  openGraph: {
    title: "Mukul Oli | Premium Web Development & High-Converting Websites",
    description: "Mukul Oli is a Full Stack Developer creating premium, blazing-fast Next.js websites for small business startups and platforms.",
    type: "website",
    locale: "en_US",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div style={{ minHeight: "calc(100vh - 80px)" }}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
