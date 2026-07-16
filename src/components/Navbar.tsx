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
          Mukul<span className="text-gradient">Oli</span>
        </NextLink>

        {/* Desktop Menu */}
        <div className={styles.navLinks}>
          <NextLink href="/#services" className={styles.link}>Services</NextLink>
          <NextLink href="/#portfolio" className={styles.link}>Portfolio</NextLink>
          <NextLink href="/#reviews" className={styles.link}>Reviews</NextLink>
          <NextLink href="/blog" className={styles.link}>Blog</NextLink>
          <NextLink href="/#contact" className={styles.link}>Contact</NextLink>
        </div>

        <div className={styles.actions}>
          <NextLink href="/#contact" className="btn btn-primary">
            Get Proposal
          </NextLink>
        </div>

        {/* Mobile Toggle */}
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

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isOpen ? styles.mobileOpen : ""}`}>
        <NextLink href="/#services" className={styles.mobileLink} onClick={() => setIsOpen(false)}>Services</NextLink>
        <NextLink href="/#portfolio" className={styles.mobileLink} onClick={() => setIsOpen(false)}>Portfolio</NextLink>
        <NextLink href="/#reviews" className={styles.mobileLink} onClick={() => setIsOpen(false)}>Reviews</NextLink>
        <NextLink href="/blog" className={styles.mobileLink} onClick={() => setIsOpen(false)}>Blog</NextLink>
        <NextLink href="/#contact" className={styles.mobileLink} onClick={() => setIsOpen(false)}>Contact</NextLink>
        <NextLink href="/#contact" className="btn btn-primary" style={{ marginTop: '1.5rem', width: '100%' }} onClick={() => setIsOpen(false)}>
          Get Proposal
        </NextLink>
      </div>
    </nav>
  );
}
