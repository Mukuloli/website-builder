import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blogData";
import styles from "../blog.module.css";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) {
    return {
      title: "Post Not Found | AI Automate",
    };
  }
  return {
    title: `${post.title} | AI Automate Insights`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className={styles.postDetail}>
      <div className={styles.postContainer}>
        <Link href="/blog" className={styles.backButton}>
          &larr; Back to all articles
        </Link>

        <header className={styles.postHeader}>
          <span className="badge">{post.category}</span>
          <h1 className={styles.postTitle}>{post.title}</h1>

          <div className={styles.postMeta}>
            <div className={styles.authorAvatar}>AI</div>
            <div className={styles.metaInfo}>
              <span className={styles.authorName}>{post.author}</span>
              <span className={styles.publishDetails}>
                Published on {post.date} | {post.readTime}
              </span>
            </div>
          </div>
        </header>

        <div className={styles.postImageWrapper}>
          <Image
            src={post.image}
            alt={post.title}
            fill
            className={styles.postImage}
            priority
          />
        </div>

        <div className={styles.postBody}>
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
