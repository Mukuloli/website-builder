"use client";

import React, { useState, useEffect } from "react";
import NextLink from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

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

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""} ${isOpen ? styles.menuOpen : ""}`}>
      <div className={styles.container}>
        <NextLink href="/" className={styles.logo} onClick={() => setIsOpen(false)}>
          <Image
            src="/images/ai-automate-logo.png"
            alt="AI Automate Logo"
            width={34}
            height={34}
            style={{ borderRadius: "8px", objectFit: "cover", marginRight: "8px" }}
          />
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
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.phoneLink}>
            <WhatsAppIcon />
            WhatsApp {phoneNumber}
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
        <div className={styles.mobileLinksContainer}>
          <NextLink href="/#about" className={styles.mobileLink} onClick={() => setIsOpen(false)}>About</NextLink>
          <NextLink href="/#services" className={styles.mobileLink} onClick={() => setIsOpen(false)}>Services</NextLink>
          <NextLink href="/#websites" className={styles.mobileLink} onClick={() => setIsOpen(false)}>Websites</NextLink>
          <NextLink href="/#technologies" className={styles.mobileLink} onClick={() => setIsOpen(false)}>Technologies</NextLink>
          <NextLink href="/#process" className={styles.mobileLink} onClick={() => setIsOpen(false)}>Process</NextLink>
          <NextLink href="/#contact" className={styles.mobileLink} onClick={() => setIsOpen(false)}>Contact</NextLink>
          
          <div className={styles.mobileActions}>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary" onClick={() => setIsOpen(false)}>
              <WhatsAppIcon />
              WhatsApp {phoneNumber}
            </a>
            <a href={`tel:${phoneNumber}`} className="btn btn-secondary" onClick={() => setIsOpen(false)} style={{ marginTop: '0.85rem' }}>
              <PhoneIcon />
              Call {phoneNumber}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
