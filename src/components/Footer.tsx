import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand Info */}
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              Mukul<span className="text-gradient">Oli</span>
            </Link>
            <p className={styles.description}>
              High-converting websites and rapid MVP development for startup founders and small businesses looking to scale their digital presence.
            </p>
          </div>

          {/* Quick Links */}
          <div className={styles.linksGroup}>
            <h4 className={styles.heading}>Services</h4>
            <ul className={styles.linksList}>
              <li><Link href="/#services" className={styles.link}>Custom Development</Link></li>
              <li><Link href="/#services" className={styles.link}>Startup MVPs</Link></li>
              <li><Link href="/#services" className={styles.link}>Ad Landing Pages</Link></li>
              <li><Link href="/#services" className={styles.link}>E-commerce Stores</Link></li>
            </ul>
          </div>

          <div className={styles.linksGroup}>
            <h4 className={styles.heading}>Company</h4>
            <ul className={styles.linksList}>
              <li><Link href="/#portfolio" className={styles.link}>Our Work</Link></li>
              <li><Link href="/#reviews" className={styles.link}>Testimonials</Link></li>
              <li><Link href="/blog" className={styles.link}>Insights Blog</Link></li>
              <li><Link href="/#contact" className={styles.link}>Get a Quote</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className={styles.contactInfo}>
            <h4 className={styles.heading}>Connect</h4>
            <p className={styles.contactText}>
              Have a project in mind? Let's build something exceptional together.
            </p>
            <a href="mailto:hello@mukuloli.dev" className={styles.emailLink}>
              hello@mukuloli.dev
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            &copy; {currentYear} Mukul Oli. All rights reserved. Designed for ultimate conversion.
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
