"use client";

import React, { useState, useEffect } from "react";
import NextLink from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <NextLink href="/" className={styles.logo}>
          AI<span className="text-gradient">Automate</span>
        </NextLink>

        <div className={styles.navLinks}>
          <NextLink href="/#about" className={styles.link}>About</NextLink>
          <NextLink href="/#services" className={styles.link}>Services</NextLink>
          <NextLink href="/#websites" className={styles.link}>Websites</NextLink>
          <NextLink href="/#technologies" className={styles.link}>Technologies</NextLink>
          <NextLink href="/#process" className={styles.link}>Process</NextLink>
          <NextLink href="/#contact" className={styles.link}>Contact</NextLink>
        </div>

        <div className={styles.actions}>
          <a href="https://wa.me/919411398572" target="_blank" rel="noopener noreferrer" className={styles.phoneLink}>
            WhatsApp 9411398572
          </a>
        </div>

        <button 
          className={`${styles.hamburger} ${isOpen ? styles.active : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
      </div>

      <div className={`${styles.mobileMenu} ${isOpen ? styles.mobileOpen : ""}`}>
        <NextLink href="/#about" className={styles.mobileLink} onClick={() => setIsOpen(false)}>About</NextLink>
        <NextLink href="/#services" className={styles.mobileLink} onClick={() => setIsOpen(false)}>Services</NextLink>
        <NextLink href="/#websites" className={styles.mobileLink} onClick={() => setIsOpen(false)}>Websites</NextLink>
        <NextLink href="/#technologies" className={styles.mobileLink} onClick={() => setIsOpen(false)}>Technologies</NextLink>
        <NextLink href="/#process" className={styles.mobileLink} onClick={() => setIsOpen(false)}>Process</NextLink>
        <NextLink href="/#contact" className={styles.mobileLink} onClick={() => setIsOpen(false)}>Contact</NextLink>
        <a href="https://wa.me/919411398572" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: '1.5rem', width: '100%' }} onClick={() => setIsOpen(false)}>
          WhatsApp 9411398572
        </a>
      </div>
    </nav>
  );
}
