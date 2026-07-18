import React from "react";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blogData";
import styles from "./blog.module.css";

export const metadata = {
  title: "AI Automation Insights | AI Automate",
  description: "Read guides on AI voice agents, RAG chatbots, business automation, AI integrations, and full-stack development.",
};

export default function BlogList() {
  return (
    <main className={styles.blogList}>
      <div className="container">
        <header className={styles.blogHeader}>
          <span className="badge">Insights</span>
          <h1 className={styles.title}>AI automation guides for growing businesses</h1>
          <p className={styles.subtitle}>
            Practical articles on voice agents, RAG chatbots, workflow automation, AI integrations, and modern web applications.
          </p>
        </header>

        <div className={styles.grid}>
          {blogPosts.map((post) => (
            <article key={post.slug} className={styles.blogCard}>
              <div className={styles.blogImgWrapper}>
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className={styles.blogImg}
                />
              </div>
              <div className={styles.blogInfo}>
                <span className={styles.blogDate}>
                  {post.date} | {post.category}
                </span>
                <Link href={`/blog/${post.slug}`}>
                  <h2 className={styles.blogCardTitle}>{post.title}</h2>
                </Link>
                <p className={styles.blogCardDesc}>{post.description}</p>
                <div className={styles.blogFooter}>
                  <Link href={`/blog/${post.slug}`} className={styles.projectLink}>
                    Read article &rarr;
                  </Link>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
