import React from "react";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blogData";
import styles from "./blog.module.css";
import pageStyles from "../page.module.css"; // Reuse card layouts if helpful or use local scoped styles

export const metadata = {
  title: "Insights & Guides | Mukul Oli Full Stack Developer",
  description: "Read professional guides on Next.js, static site optimization, startup MVPs, and designing landing pages for high-converting ads.",
};

export default function BlogList() {
  return (
    <div className={styles.blogList}>
      <div className={`bg-glow-1 ${pageStyles.glow1}`}></div>
      <div className={`bg-glow-2 ${pageStyles.glow2}`}></div>

      <div className="container">
        {/* Header */}
        <header className={styles.blogHeader}>
          <span className="badge">Insights</span>
          <h1 className={styles.title}>Marketing & Web Design Guides</h1>
          <p className={styles.subtitle}>
            Actionable strategies and developer insights focused on scaling startup landing pages, optimization of ad conversions, and modern web application building.
          </p>
        </header>

        {/* Grid */}
        <div className={styles.grid}>
          {blogPosts.map((post) => (
            <div key={post.slug} className={pageStyles.blogCard}>
              <div className={pageStyles.blogImgWrapper}>
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className={pageStyles.blogImg}
                />
              </div>
              <div className={pageStyles.blogInfo}>
                <span className={pageStyles.blogDate}>
                  {post.date} • {post.category}
                </span>
                <Link href={`/blog/${post.slug}`}>
                  <h3 className={pageStyles.blogCardTitle}>{post.title}</h3>
                </Link>
                <p className={pageStyles.blogCardDesc}>{post.description}</p>
                <div style={{ marginTop: "auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Link href={`/blog/${post.slug}`} className={pageStyles.projectLink}>
                    Read Article &rarr;
                  </Link>
                  <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{post.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
