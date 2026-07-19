"use client";

import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import emailjs from "@emailjs/browser";

const COUNTRY_CODES = [
  { code: "+91", label: "🇮🇳 +91 (India)" },
  { code: "+1", label: "🇺🇸 +1 (USA / CA)" },
  { code: "+44", label: "🇬🇧 +44 (UK)" },
  { code: "+971", label: "🇦🇪 +971 (UAE)" },
  { code: "+61", label: "🇦🇺 +61 (Australia)" },
  { code: "+65", label: "🇸🇬 +65 (Singapore)" },
  { code: "+49", label: "🇩🇪 +49 (Germany)" },
  { code: "+33", label: "🇫🇷 +33 (France)" },
  { code: "+966", label: "🇸🇦 +966 (Saudi Arabia)" },
  { code: "+974", label: "🇶🇦 +974 (Qatar)" },
  { code: "+977", label: "🇳🇵 +977 (Nepal)" }
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
  }>({});

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear field error on change
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = () => {
    const newErrors: typeof errors = {};

    // Validate Name
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = "Please enter your valid name (at least 2 characters).";
    }

    // Strict Email Regex Validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address (e.g. name@example.com).";
    }

    // Validate Phone/WhatsApp Number
    const rawPhone = formData.phone.replace(/[\s-]/g, "");
    if (!rawPhone || !/^\d{7,15}$/.test(rawPhone)) {
      newErrors.phone = "Please enter a valid phone/WhatsApp number (7-15 digits).";
    }

    // Validate Message
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = "Please write a message describing your requirements (at least 10 characters).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setStatus("loading");

    const fullPhoneNumber = `${formData.countryCode} ${formData.phone.trim()}`;

    try {
      // Timeout after 10 seconds to prevent the form from hanging forever
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Request timed out")), 10000)
      );

      // Save to Firestore
      const firestoreTask = addDoc(collection(db, "contacts"), {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: fullPhoneNumber,
        message: formData.message.trim(),
        createdAt: serverTimestamp(),
      });

      // Send EmailJS notification if environment variables exist
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      const emailTask =
        serviceId && templateId && publicKey
          ? emailjs.send(
              serviceId,
              templateId,
              {
                from_name: formData.name.trim(),
                from_email: formData.email.trim(),
                phone: fullPhoneNumber,
                message: formData.message.trim(),
              },
              publicKey
            )
          : Promise.resolve();

      await Promise.race([
        Promise.all([firestoreTask, emailTask]),
        timeoutPromise,
      ]);

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        countryCode: "+91",
        phone: "",
        message: "",
      });
      setErrors({});
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
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.inputGroup}>
        <label htmlFor="name" className={styles.label}>Your Name *</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="Your full name"
          className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
        />
        {errors.name && <span className={styles.errorText}>{errors.name}</span>}
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
          className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
        />
        {errors.email && <span className={styles.errorText}>{errors.email}</span>}
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="phone" className={styles.label}>Phone / WhatsApp Number *</label>
        <div className={styles.phoneInputGroup}>
          <select
            name="countryCode"
            value={formData.countryCode}
            onChange={handleChange}
            className={styles.countrySelect}
            aria-label="Country Code"
          >
            {COUNTRY_CODES.map((item) => (
              <option key={item.code} value={item.code}>
                {item.label}
              </option>
            ))}
          </select>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="98765 43210"
            className={`${styles.input} ${errors.phone ? styles.inputError : ""}`}
          />
        </div>
        {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="message" className={styles.label}>Tell us about your requirement *</label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Describe if you need AI automation, chatbot, voice agent, school website, ecommerce website, CMS, or custom full-stack app."
          className={`${styles.textarea} ${errors.message ? styles.inputError : ""}`}
        ></textarea>
        {errors.message && <span className={styles.errorText}>{errors.message}</span>}
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
