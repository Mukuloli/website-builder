"use client";

import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Timeout after 10 seconds to prevent the form from hanging forever
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Request timed out")), 10000)
      );

      await Promise.race([
        addDoc(collection(db, "contacts"), {
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
          createdAt: serverTimestamp(),
        }),
        timeoutPromise,
      ]);

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className={styles.successCard}>
        <div className={styles.successIcon}>✓</div>
        <h3 className={styles.successTitle}>Thank you, consultation request sent.</h3>
        <p className={styles.successText}>
          Your inquiry has been received. We will review your requirements and respond within 24 hours to schedule a discovery call.
        </p>
        <button className="btn btn-primary" onClick={() => setStatus("idle")}>
          Send Another Message
        </button>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className={styles.successCard}>
        <div className={styles.successIcon} style={{ background: "rgba(239, 68, 68, 0.15)", color: "#ef4444" }}>✕</div>
        <h3 className={styles.successTitle}>Something went wrong.</h3>
        <p className={styles.successText}>
          We could not send your message. Please try again or contact us directly on WhatsApp.
        </p>
        <button className="btn btn-primary" onClick={() => setStatus("idle")}>
          Try Again
        </button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputGroup}>
        <label htmlFor="name" className={styles.label}>Your Name *</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          className={styles.input}
        />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="email" className={styles.label}>Email Address *</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          className={styles.input}
        />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="company" className={styles.label}>Company Name</label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Your company"
          className={styles.input}
        />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="message" className={styles.label}>Tell us about your automation idea *</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us if you need AI automation, a chatbot, voice agent, school website, ecommerce website, CMS, or full-stack app."
          className={styles.textarea}
        ></textarea>
      </div>

      <button
        type="submit"
        className="btn btn-primary"
        style={{ width: "100%", marginTop: "0.5rem" }}
        disabled={status === "loading"}
      >
        {status === "loading" ? "Submitting Request..." : "Schedule a Free Consultation"}
      </button>

      <p className={styles.disclaimer}>
        Your details stay private. We usually reply in under 24 hours.
      </p>
    </form>
  );
}
