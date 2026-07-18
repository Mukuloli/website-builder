"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import ContactForm from "@/components/ContactForm";

const phoneNumber = "9411398572";
const whatsappQuery = encodeURIComponent("Hello! I am interested in a free consultation for AI automation and web development.");
const whatsappUrl = `https://wa.me/91${phoneNumber}?text=${whatsappQuery}`;

const WhatsAppIcon = ({ size = 18 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" style={{ marginRight: '8px', display: 'inline-block', verticalAlign: 'middle' }}>
    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 001.333 4.993L2 22l5.233-1.371a9.944 9.944 0 004.777 1.218h.004c5.505 0 9.987-4.479 9.988-9.986.001-2.668-1.036-5.178-2.925-7.068C17.188 2.905 14.68 2 12.012 2zm5.786 14.646c-.317.893-1.544 1.637-2.126 1.733-.513.085-1.182.155-3.327-.733-2.743-1.135-4.512-3.92-4.65-4.1-.137-.18-1.123-1.493-1.123-2.85 0-1.355.702-2.022.951-2.274.249-.253.548-.317.731-.317.183 0 .366.002.53.01.171.008.398-.065.623.473.23.548.78 1.902.846 2.04.067.137.11.298.019.486-.092.188-.138.305-.275.463-.137.158-.288.354-.412.474-.137.133-.28.277-.12.553.16.276.71 1.17 1.523 1.89.1.088.196.175.292.26.744.66 1.34.863 1.657 1.01.317.148.502.124.69-.092.189-.216.805-.934 1.019-1.25.213-.317.426-.263.719-.153.292.11 1.853.874 2.17.1.317.22.528.328.602.455.074.127.074.733-.243 1.626z"/>
  </svg>
);

const PhoneIcon = ({ size = 18 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" style={{ marginRight: '8px', display: 'inline-block', verticalAlign: 'middle' }}>
    <path d="M6.62 10.79a15.15 15.15 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27 11.72 11.72 0 003.7 1.01 1 1 0 01.91 1v3.48a1 1 0 01-1.01 1A16 16 0 013 4.01a1 1 0 011-1.01H7.5a1 1 0 011 .91 11.72 11.72 0 001.01 3.7 1 1 0 01-.27 1.11z"/>
  </svg>
);

const services = [
  {
    icon: "📞",
    title: "AI Voice Agents",
    description: "Human-like voice assistants for calls, support, bookings, lead qualification, and 24/7 customer response.",
  },
  {
    icon: "💬",
    title: "AI Chatbots",
    description: "Smart GPT and RAG chatbots that answer questions using your business data, website content, and documents.",
  },
  {
    icon: "⚙️",
    title: "AI Automation",
    description: "Automate repetitive work such as lead follow-up, email tasks, CRM updates, internal support, and workflows.",
  },
  {
    icon: "🌐",
    title: "Full-Stack Development",
    description: "Modern websites, SaaS products, dashboards, portals, and custom applications built with scalable technology.",
  },
  {
    icon: "📝",
    title: "CMS Websites",
    description: "Content management systems so you can update pages, school notices, ecommerce content, and media easily.",
  },
  {
    icon: "🔌",
    title: "AI & API Integrations",
    description: "Connect OpenAI, Gemini, Claude, LiveKit, CRMs, payment gateways, WhatsApp, calendars, and third-party tools.",
  },
];

const websiteSolutions = [
  {
    title: "School Websites",
    description: "Professional websites for schools with admissions, notices, events, galleries, staff pages, and CMS updates.",
  },
  {
    title: "Ecommerce Brands",
    description: "Clean ecommerce websites for product catalogs, offers, payment flows, lead capture, and brand growth.",
  },
  {
    title: "Business Websites",
    description: "Fast, responsive websites for service companies, startups, agencies, clinics, restaurants, and local businesses.",
  },
  {
    title: "Content Management",
    description: "CMS setup for blogs, pages, product content, school updates, testimonials, and landing page sections.",
  },
];

const process = [
  ["01", "Discovery", "We understand your business, website goals, automation ideas, and customer journey."],
  ["02", "Strategy", "We plan the AI workflow, CMS structure, website pages, integrations, and launch roadmap."],
  ["03", "Development", "We build the website, AI agent, chatbot, dashboard, CMS, or automation system."],
  ["04", "Launch", "We deploy the solution, connect tools, test flows, and prepare it for real users."],
];

const techGroups = [
  ["AI", ["OpenAI GPT", "Gemini", "Claude", "LangChain", "LangGraph", "RAG", "AI Agents"]],
  ["Voice AI", ["LiveKit", "Speech-to-Text", "Text-to-Speech", "Real-Time AI", "Voice Bots"]],
  ["Web", ["React", "Next.js", "HTML5", "CSS3", "JavaScript", "Tailwind CSS"]],
  ["Backend", ["Python", "FastAPI", "Flask", "REST APIs", "Databases"]],
  ["CMS & Data", ["CMS Setup", "PostgreSQL", "MySQL", "MongoDB", "Pinecone"]],
  ["Tools", ["Vercel", "GitHub", "Docker", "Firebase", "Payment APIs"]],
];

const faqs = [
  ["Can you build websites for schools?", "Yes. We build school websites with admissions pages, notices, galleries, events, staff pages, and CMS-based updates."],
  ["Can you build ecommerce brand websites?", "Yes. We build clean ecommerce and brand websites with product sections, offers, payment or inquiry flows, and mobile-first design."],
  ["Can I manage website content myself?", "Yes. We can add a CMS so you can update pages, blogs, notices, product content, and images without editing code."],
  ["Can you add WhatsApp and phone contact?", `Yes. Your phone and WhatsApp number ${phoneNumber} is added for free consultation contact.`],
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <span className={styles.heroBadge}>AI Automation Agency</span>
              <h1 className={styles.heroTitle}>
                AI solutions, websites, and CMS that <span className="text-gradient">work 24/7</span>.
              </h1>
              <p className={styles.heroSubtitle}>
                We build AI voice bots, chatbots, automation systems, school websites, ecommerce brand websites, CMS platforms, and full-stack web applications that save time and grow your business.
              </p>
              <div className={styles.heroActions}>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  <WhatsAppIcon />
                  WhatsApp Free Consultation
                </a>
                <a href={`tel:${phoneNumber}`} className="btn btn-secondary">
                  <PhoneIcon />
                  Call {phoneNumber}
                </a>
              </div>

              <div className={styles.infoBoxes}>
                <div className={styles.infoBox}>
                  <div className={styles.infoBoxTitle}>What We Build</div>
                  <div className={styles.infoBoxItem}><span>📞</span> AI Voice Agents</div>
                  <div className={styles.infoBoxItem}><span>💬</span> AI Chatbots &amp; RAG</div>
                  <div className={styles.infoBoxItem}><span>⚙️</span> Business Automation</div>
                  <div className={styles.infoBoxItem}><span>🌐</span> Websites &amp; CMS</div>
                  <div className={styles.infoBoxItem}><span>🔌</span> AI Integrations</div>
                </div>
                <div className={styles.infoBox}>
                  <div className={styles.infoBoxTitle}>Get in Touch</div>
                  <div className={styles.infoBoxItem}><span>📱</span> WhatsApp: {phoneNumber}</div>
                  <div className={styles.infoBoxItem}><span>📞</span> Call: {phoneNumber}</div>
                  <div className={styles.infoBoxItem}><span>⚡</span> Free consultation</div>
                  <div className={styles.infoBoxItem}><span>🕐</span> Available 24/7</div>
                  <div className={styles.infoBoxItem}><span>🇮🇳</span> Based in India</div>
                </div>
              </div>
            </div>

            <div className={styles.heroVisual}>
              <Image
                src="/images/front.png"
                alt="AI automation voice agent and chatbot design"
                width={900}
                height={620}
                className={styles.heroImage}
                priority
              />
              <div className={styles.heroFloatOne}>AI Chatbots</div>
              <div className={styles.heroFloatTwo}>Voice AI</div>
              <div className={styles.heroFloatThree}>Automation</div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className={styles.serviceStrip}>
        <div className="container">
          <div className={styles.serviceCards}>
            {services.map((service) => (
              <article key={service.title} className={styles.serviceCard}>
                <span className={styles.serviceIcon}>{service.icon}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className={styles.featureSection}>
        <div className="container">
          <div className={styles.featureGrid}>
            <article className={styles.chatPanel}>
              <div className={styles.chatPanelDetails}>
                <span className="badge">AI Chatbot</span>
                <h2>Better customer support without manual replies.</h2>
                <p>Provide instant answers, capture leads, qualify users, and guide customers using your own business data.</p>
              </div>
              <div className={styles.chatBox}>
                <div className={styles.chatTop}>
                  <div className={styles.avatar}>AI</div>
                  <div>
                    <div className={styles.chatName}>AI Assistant</div>
                    <span className={styles.chatStatus}>Online</span>
                  </div>
                </div>
                <div className={styles.chatMessage}>Hello! How can I help you today?</div>
                <div className={`${styles.chatMessage} ${styles.chatUser}`}>I need help with my order.</div>
                <div className={styles.chatMessage}>Sure, share your order ID and I will check it.</div>
              </div>
            </article>

            <article className={styles.processPanel}>
              <span className="badge">Business Automation</span>
              <h2>Automate your business processes.</h2>
              <p>Save time, reduce errors, and increase productivity with AI workflows connected to your tools.</p>
              <div className={styles.flow}>
                <span>New lead</span>
                <span>AI qualifies</span>
                <span>CRM update</span>
                <span>Email sent</span>
              </div>
            </article>

            <article className={styles.voicePanel}>
              <span className="badge">Voice AI</span>
              <h2>AI voice agents that sound human.</h2>
              <p>Real-time conversations, natural voice, smart responses, booking flows, and lead qualification.</p>
              <div className={styles.waveContainer}>
                <div className={styles.waveBar}></div>
                <div className={styles.waveBar}></div>
                <div className={styles.waveBar}></div>
                <div className={styles.waveBar}></div>
                <div className={styles.waveBar}></div>
                <div className={styles.waveBar}></div>
                <div className={styles.waveBar}></div>
                <div className={styles.waveBar}></div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="websites" className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className="badge">Websites & CMS</span>
            <h2 className={`${styles.sectionTitle} ${styles.websitesTitle}`}>We also build websites for schools, ecommerce brands, and businesses.</h2>
            <p className={`${styles.sectionSubtitle} ${styles.websitesSubtitle}`}>
              Your website can include beautiful UI, SEO-friendly pages, fast performance, WhatsApp contact, lead forms, and CMS content management.
            </p>
          </div>
          <div className={styles.solutionGrid}>
            {websiteSolutions.map((item) => (
              <article key={item.title} className={styles.solutionCard}>
                <div className={styles.solutionCardHeader}>
                  <div className={styles.solutionCardIcon}>✓</div>
                  <h3>{item.title}</h3>
                </div>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="why-us" className={styles.benefitsBar}>
        <div className="container">
          <div className={styles.benefitsGrid}>
            <div><strong>Custom Solutions</strong><span>Built for your business</span></div>
            <div><strong>Fast Development</strong><span>On-time project delivery</span></div>
            <div><strong>Scalable & Secure</strong><span>Professional architecture</span></div>
            <div><strong>Modern Technology</strong><span>Latest AI and web tools</span></div>
            <div><strong>Ongoing Support</strong><span>Help after launch</span></div>
          </div>
        </div>
      </section>

      <section id="process" className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className="badge">Our Process</span>
            <h2 className={styles.sectionTitle}>From idea to launch with a clear workflow.</h2>
          </div>
          <div className={styles.processGrid}>
            {process.map(([step, title, description]) => (
              <article key={step} className={styles.processCard}>
                <div className={styles.processStep}>{step}</div>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="technologies" className={styles.techSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className="badge">Technologies</span>
            <h2 className={styles.sectionTitle}>Modern tools for AI, CMS, and full-stack development.</h2>
          </div>
          <div className={styles.techGrid}>
            {techGroups.map(([title, items]) => (
              <article key={title as string} className={styles.techCard}>
                <h3>{title as string}</h3>
                <div className={styles.tags}>
                  {(items as string[]).map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className="badge">FAQ</span>
            <h2 className={styles.sectionTitle}>Questions before your free consultation.</h2>
          </div>
          <div className={styles.faqList}>
            {faqs.map(([question, answer], index) => {
              const isOpen = openFaq === index;
              return (
                <article key={question} className={`${styles.faqItem} ${isOpen ? styles.faqActive : ""}`}>
                  <button 
                    className={styles.faqQuestion} 
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                  >
                    <span>{question}</span>
                    <span className={styles.faqIcon}>{isOpen ? "−" : "+"}</span>
                  </button>
                  <div className={`${styles.faqAnswer} ${isOpen ? styles.faqAnswerOpen : ""}`}>
                    <div className={styles.faqAnswerInner}>
                      <p>{answer}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contact" className={styles.contactSection}>
        <div className="container">
          <div className={styles.contactContainer}>
            <div className={styles.contactDetails}>
              <span className="badge">Free Consultation</span>
              <h2 className={styles.contactTitle}>Ready to build your AI automation or website?</h2>
              <p className={styles.contactSubtitle}>
                Contact us on WhatsApp or phone at <strong>{phoneNumber}</strong>. The same number works for calls and WhatsApp.
              </p>
              <div className={styles.contactButtons}>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  <WhatsAppIcon />
                  WhatsApp {phoneNumber}
                </a>
                <a href={`tel:${phoneNumber}`} className="btn btn-secondary">
                  <PhoneIcon />
                  Call Now
                </a>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
