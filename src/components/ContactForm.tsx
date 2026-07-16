"use client";

import React, { useState } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    budget: "$1,000 - $3,000",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate form submission API (for static site, we can use Web3Forms or standard mockup)
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
        budget: "$1,000 - $3,000",
      });
    }, 1500);
  };

  if (status === "success") {
    return (
      <div className={styles.successCard}>
        <div className={styles.successIcon}>✓</div>
        <h3 className={styles.successTitle}>Thank You, Project Request Sent!</h3>
        <p className={styles.successText}>
          Your inquiry has been successfully received. Mukul Oli will review your requirements and reach out to you within the next 24 hours to schedule a discovery call.
        </p>
        <button className="btn btn-primary" onClick={() => setStatus("idle")}>
          Send Another Message
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
          placeholder="Mukul Oli"
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
          placeholder="mukul@example.com"
          className={styles.input}
        />
      </div>

      <div className={styles.row}>
        <div className={styles.inputGroup} style={{ flex: 1 }}>
          <label htmlFor="company" className={styles.label}>Company / Startup Name</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="My Business LLC"
            className={styles.input}
          />
        </div>

        <div className={styles.inputGroup} style={{ flex: 1 }}>
          <label htmlFor="budget" className={styles.label}>Estimated Budget</label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className={styles.select}
          >
            <option value="Under $1,000">Under $1,000</option>
            <option value="$1,000 - $3,000">$1,000 - $3,000</option>
            <option value="$3,000 - $10,000">$3,000 - $10,000</option>
            <option value="$10,000+">$10,000+</option>
          </select>
        </div>
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="message" className={styles.label}>Tell me about your project *</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="What features are you looking to build? Who is your target audience?"
          className={styles.textarea}
        ></textarea>
      </div>

      <button
        type="submit"
        className="btn btn-primary"
        style={{ width: "100%", marginTop: "1rem" }}
        disabled={status === "loading"}
      >
        {status === "loading" ? "Submitting Request..." : "Launch My Project Proposal"}
      </button>

      <p className={styles.disclaimer}>
        🔒 Your data is fully encrypted and never shared. We usually reply in under 24 hours.
      </p>
    </form>
  );
}
