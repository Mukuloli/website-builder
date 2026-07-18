import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";

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
            <a href="https://wa.me/919411398572" target="_blank" rel="noopener noreferrer" className={styles.emailLink}>
              WhatsApp 9411398572
            </a>
            <a href="tel:9411398572" className={styles.emailLink}>
              Call 9411398572
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
