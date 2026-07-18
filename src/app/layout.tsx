import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI Automate | AI Automation, CMS Websites & Full-Stack Development",
  description: "AI automation agency building AI voice agents, chatbots, CMS websites, school websites, ecommerce websites, AI integrations, and full-stack web applications. Call or WhatsApp 9411398572.",
  keywords: [
    "AI Automation Agency",
    "AI Voice Agent Development",
    "AI Chatbot Development",
    "LiveKit Voice AI",
    "AI Business Automation",
    "Generative AI Development",
    "LangChain Development",
    "RAG Development",
    "Custom AI Solutions",
    "Full-Stack Development",
    "AI Integration Services",
    "AI Website Development",
    "School Website Development",
    "Ecommerce Website Development",
    "CMS Website Development",
    "Content Management System"
  ],
  authors: [{ name: "AI Automate" }],
  openGraph: {
    title: "AI Automate | AI Automation, CMS Websites & Full-Stack Development",
    description: "AI voice agents, chatbots, school websites, ecommerce websites, CMS, business automation, and modern web development.",
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
