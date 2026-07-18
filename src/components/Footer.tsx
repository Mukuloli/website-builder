import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";

const phoneNumber = "9411398572";
const whatsappQuery = encodeURIComponent("Hello! I am interested in a free consultation for AI automation and web development.");
const whatsappUrl = `https://wa.me/91${phoneNumber}?text=${whatsappQuery}`;

const WhatsAppIcon = ({ size = 16 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" style={{ marginRight: '6px', display: 'inline-block', verticalAlign: 'middle' }}>
    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 001.333 4.993L2 22l5.233-1.371a9.944 9.944 0 004.777 1.218h.004c5.505 0 9.987-4.479 9.988-9.986.001-2.668-1.036-5.178-2.925-7.068C17.188 2.905 14.68 2 12.012 2zm5.786 14.646c-.317.893-1.544 1.637-2.126 1.733-.513.085-1.182.155-3.327-.733-2.743-1.135-4.512-3.92-4.65-4.1-.137-.18-1.123-1.493-1.123-2.85 0-1.355.702-2.022.951-2.274.249-.253.548-.317.731-.317.183 0 .366.002.53.01.171.008.398-.065.623.473.23.548.78 1.902.846 2.04.067.137.11.298.019.486-.092.188-.138.305-.275.463-.137.158-.288.354-.412.474-.137.133-.28.277-.12.553.16.276.71 1.17 1.523 1.89.1.088.196.175.292.26.744.66 1.34.863 1.657 1.01.317.148.502.124.69-.092.189-.216.805-.934 1.019-1.25.213-.317.426-.263.719-.153.292.11 1.853.874 2.17.1.317.22.528.328.602.455.074.127.074.733-.243 1.626z"/>
  </svg>
);const PhoneIcon = ({ size = 16 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" style={{ marginRight: '6px', display: 'inline-block', verticalAlign: 'middle' }}>
    <path d="M6.62 10.79a15.15 15.15 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27 11.72 11.72 0 003.7 1.01 1 1 0 01.91 1v3.48a1 1 0 01-1.01 1A16 16 0 013 4.01a1 1 0 011-1.01H7.5a1 1 0 011 .91 11.72 11.72 0 001.01 3.7 1 1 0 01-.27 1.11z"/>
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              AI<span className="text-gradient">Automate</span>
            </Link>
            <p className={styles.description}>
              AI automation, voice agents, chatbots, CMS websites, school websites, ecommerce brand websites, and full-stack development.
            </p>
          </div>

          <div className={styles.linksGroup}>
            <h4 className={styles.heading}>Services</h4>
            <ul className={styles.linksList}>
              <li><Link href="/#services" className={styles.link}>AI Voice Agents</Link></li>
              <li><Link href="/#services" className={styles.link}>AI Chatbots</Link></li>
              <li><Link href="/#services" className={styles.link}>Business Automation</Link></li>
              <li><Link href="/#websites" className={styles.link}>School & Ecommerce Websites</Link></li>
            </ul>
          </div>

          <div className={styles.linksGroup}>
            <h4 className={styles.heading}>Company</h4>
            <ul className={styles.linksList}>
              <li><Link href="/#about" className={styles.link}>About</Link></li>
              <li><Link href="/#websites" className={styles.link}>CMS Websites</Link></li>
              <li><Link href="/#process" className={styles.link}>Process</Link></li>
              <li><Link href="/#faq" className={styles.link}>FAQ</Link></li>
            </ul>
          </div>

          <div className={styles.contactInfo}>
            <h4 className={styles.heading}>Book a Consultation</h4>
            <p className={styles.contactText}>
              Free consultation for AI automation, websites, CMS, school websites, and ecommerce projects.
            </p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.emailLink}>
              <WhatsAppIcon />
              WhatsApp {phoneNumber}
            </a>
            <a href={`tel:${phoneNumber}`} className={styles.emailLink}>
              <PhoneIcon />
              Call {phoneNumber}
            </a>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            &copy; {currentYear} AI Automate. All rights reserved.
          </p>
          <div className={styles.socials}>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>LinkedIn</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
