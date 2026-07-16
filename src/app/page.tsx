import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div className={styles.main}>
      {/* Decorative Glow Elements */}
      <div className={`bg-glow-1 ${styles.glow1}`}></div>
      <div className={`bg-glow-2 ${styles.glow2}`}></div>
      <div className={`bg-glow-1 ${styles.glow3}`}></div>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContainer}>
            <div className={styles.heroContent}>
              <div className={styles.trustBadge}>
                <span className={styles.stars}>★★★★★</span>
                <span>100% Satisfaction Rate</span>
              </div>
              <h1 className={styles.heroTitle}>
                We Build <span className="text-gradient">High-Converting</span> Websites That Grow Your Business
              </h1>
              <p className={styles.heroSubtitle}>
                Hi, I'm Mukul Oli, a Full Stack Developer. I build blazing-fast static Next.js websites and premium web applications optimized for speed, search engine optimization (SEO), and high-conversion ad campaigns.
              </p>
              <div className={styles.heroActions}>
                <Link href="#contact" className="btn btn-primary">
                  Get a Free Proposal
                </Link>
                <Link href="#portfolio" className="btn btn-secondary">
                  View Our Work
                </Link>
              </div>
            </div>

            <div className={styles.heroImageContainer}>
              <div className="animate-float">
                <Image
                  src="/images/hero.png"
                  alt="Mukul Oli Full Stack Developer Tech Showcase"
                  width={500}
                  height={380}
                  className={styles.heroImage}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.stats}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <div className={styles.statNum}>100%</div>
              <div className={styles.statLabel}>Page Speed Score</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNum}>50+</div>
              <div className={styles.statLabel}>Startups Launched</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNum}>3.5x</div>
              <div className={styles.statLabel}>Average Conversion Uplift</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNum}>24/7</div>
              <div className={styles.statLabel}>Dedicated Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={styles.services}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className="badge">Services</span>
            <h2 className={styles.sectionTitle}>What We Do For Your Brand</h2>
            <p className={styles.sectionSubtitle}>
              Tailored solutions designed to attract high-intent visitors and turn them into paying customers.
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {/* Service 1 */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>⚡</div>
              <h3 className={styles.serviceTitle}>Custom Next.js Sites</h3>
              <p className={styles.serviceDesc}>
                Ultra-fast, fully responsive, static websites built with Next.js and custom CSS. Ideal for small businesses looking for maximum SEO and flawless styling.
              </p>
              <ul className={styles.serviceList}>
                <li className={styles.serviceListItem}><span className={styles.checkmark}>✓</span> High Google PageSpeed score</li>
                <li className={styles.serviceListItem}><span className={styles.checkmark}>✓</span> Static Generation (SSG)</li>
                <li className={styles.serviceListItem}><span className={styles.checkmark}>✓</span> Mobile-first responsive layouts</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🚀</div>
              <h3 className={styles.serviceTitle}>High-Converting Landing Pages</h3>
              <p className={styles.serviceDesc}>
                Specifically engineered for your Google and Facebook Ad campaigns. A/B tested layout models focused entirely on driving inquiries, leads, and sales.
              </p>
              <ul className={styles.serviceList}>
                <li className={styles.serviceListItem}><span className={styles.checkmark}>✓</span> Ad campaign readiness</li>
                <li className={styles.serviceListItem}><span className={styles.checkmark}>✓</span> Built-in conversion analytics</li>
                <li className={styles.serviceListItem}><span className={styles.checkmark}>✓</span> Catchy UX layout design</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🛠</div>
              <h3 className={styles.serviceTitle}>Full Stack Web Applications</h3>
              <p className={styles.serviceDesc}>
                Need something more dynamic? We design database-driven client portals, dashboard backends, and rapid startup MVP solutions to prove your product.
              </p>
              <ul className={styles.serviceList}>
                <li className={styles.serviceListItem}><span className={styles.checkmark}>✓</span> API integrations & Databases</li>
                <li className={styles.serviceListItem}><span className={styles.checkmark}>✓</span> User authentication & Stripe payments</li>
                <li className={styles.serviceListItem}><span className={styles.checkmark}>✓</span> Scalable serverless logic</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className={styles.portfolio}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className="badge">Portfolio</span>
            <h2 className={styles.sectionTitle}>Recent Startup Success Stories</h2>
            <p className={styles.sectionSubtitle}>
              Take a look at how we have helped local startups and online platforms establish high-impact digital presence.
            </p>
          </div>

          <div className={styles.portfolioGrid}>
            {/* Project 1 */}
            <div className={styles.portfolioCard}>
              <div className={styles.portfolioImgWrapper}>
                <div className={styles.projectMockup}>
                  <div className={styles.mockBrowserBar}>
                    <div className={styles.mockDot}></div>
                    <div className={styles.mockDot}></div>
                    <div className={styles.mockDot}></div>
                  </div>
                  <div className={styles.mockContent}>
                    <span style={{ fontSize: "2rem" }}>🩺</span>
                  </div>
                </div>
              </div>
              <div className={styles.portfolioInfo}>
                <div className={styles.projectMeta}>
                  <span>Healthcare Startup</span>
                  <span>•</span>
                  <span>Next.js Static Site</span>
                </div>
                <h3 className={styles.projectTitle}>CarePulse Digital Platform</h3>
                <p className={styles.serviceDesc}>
                  A clean, responsive static website designed to capture therapist leads. Boosted organic SEO traffic by 180% within the first 6 weeks of release.
                </p>
                <Link href="#contact" className={styles.projectLink}>
                  Request Case Study &rarr;
                </Link>
              </div>
            </div>

            {/* Project 2 */}
            <div className={styles.portfolioCard}>
              <div className={styles.portfolioImgWrapper}>
                <div className={styles.projectMockup}>
                  <div className={styles.mockBrowserBar}>
                    <div className={styles.mockDot}></div>
                    <div className={styles.mockDot}></div>
                    <div className={styles.mockDot}></div>
                  </div>
                  <div className={styles.mockContent}>
                    <span style={{ fontSize: "2rem" }}>📈</span>
                  </div>
                </div>
              </div>
              <div className={styles.portfolioInfo}>
                <div className={styles.projectMeta}>
                  <span>SaaS Startup</span>
                  <span>•</span>
                  <span>Full Stack MVP</span>
                </div>
                <h3 className={styles.projectTitle}>FinAlytics Premium Dashboard</h3>
                <p className={styles.serviceDesc}>
                  An intuitive MVP analytics panel featuring chart visualizations, serverless database connectivity, and Stripe integrations for user subscriptions.
                </p>
                <Link href="#contact" className={styles.projectLink}>
                  Request Case Study &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className={styles.reviews}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className="badge">Reviews</span>
            <h2 className={styles.sectionTitle}>What My Clients Say</h2>
            <p className={styles.sectionSubtitle}>
              Client feedback is the ultimate metric of success. Here is what business owners say about Mukul Oli's services.
            </p>
          </div>

          <div className={styles.reviewsGrid}>
            {/* Review 1 */}
            <div className={styles.reviewCard}>
              <div className={styles.reviewRating}>★★★★★</div>
              <p className={styles.reviewQuote}>
                "Mukul completely redesigned our local business landing page. Our Google Ads conversions jumped from 4% to nearly 17% in a week. The site loads instantly, and his Next.js setup is incredibly clean!"
              </p>
              <div className={styles.reviewUser}>
                <div className={styles.userAvatar}>AK</div>
                <div className={styles.userInfo}>
                  <span className={styles.userName}>Aarav Kumar</span>
                  <span className={styles.userRole}>Founder, GreenClean LLC</span>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className={styles.reviewCard}>
              <div className={styles.reviewRating}>★★★★★</div>
              <p className={styles.reviewQuote}>
                "We needed a rapid MVP for our tech startup. Mukul built the landing page and the database dashboard in record time. Professional, highly skilled, and responds instantly to changes. Recommend 100%!"
              </p>
              <div className={styles.reviewUser}>
                <div className={styles.userAvatarSec}>SM</div>
                <div className={styles.userInfo}>
                  <span className={styles.userName}>Sanya Mehta</span>
                  <span className={styles.userRole}>CTO, PaySwift Solutions</span>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className={styles.reviewCard}>
              <div className={styles.reviewRating}>★★★★★</div>
              <p className={styles.reviewQuote}>
                "I was skeptical about static sites, but Mukul proved me wrong. Our site traffic has tripled because the SEO score is perfect, and our mobile visitors are finally converting. Best developer in the startup space."
              </p>
              <div className={styles.reviewUser}>
                <div className={styles.userAvatar}>RD</div>
                <div className={styles.userInfo}>
                  <span className={styles.userName}>Rajesh Dixit</span>
                  <span className={styles.userRole}>Owner, Dixit Trading Corp</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className={styles.blogPreview}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className="badge">Insights</span>
            <h2 className={styles.sectionTitle}>Read Our Growth Guides</h2>
            <p className={styles.sectionSubtitle}>
              Tips, guides, and insights to help startup founders optimize their web portals and digital marketing.
            </p>
          </div>

          <div className={styles.blogGrid}>
            {/* Blog Post 1 */}
            <div className={styles.blogCard}>
              <div className={styles.blogImgWrapper}>
                <Image
                  src="/images/blog_dev.png"
                  alt="Next.js static site speed"
                  fill
                  className={styles.blogImg}
                />
              </div>
              <div className={styles.blogInfo}>
                <span className={styles.blogDate}>July 15, 2026 • Web Development</span>
                <Link href="/blog/why-nextjs-is-best-for-startups">
                  <h3 className={styles.blogCardTitle}>Why Next.js is the Ultimate Framework for Small Business Startups</h3>
                </Link>
                <p className={styles.blogCardDesc}>
                  Discover why migrating your landing page or startup portfolio to Next.js static site generation results in massive SEO gains and fast loading.
                </p>
                <Link href="/blog/why-nextjs-is-best-for-startups" className={styles.projectLink}>
                  Read Article &rarr;
                </Link>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className={styles.blogCard}>
              <div className={styles.blogImgWrapper}>
                <Image
                  src="/images/blog_mkt.png"
                  alt="Ad landing page conversion optimization"
                  fill
                  className={styles.blogImg}
                />
              </div>
              <div className={styles.blogInfo}>
                <span className={styles.blogDate}>July 10, 2026 • Conversion Rate Optimization</span>
                <Link href="/blog/high-converting-landing-pages-for-ads">
                  <h3 className={styles.blogCardTitle}>How to Design Landing Pages Optimized for High-Converting Google & Meta Ads</h3>
                </Link>
                <p className={styles.blogCardDesc}>
                  Stop wasting ad budget on slow, poorly formatted pages. Learn the structural blueprint of high-converting landing pages.
                </p>
                <Link href="/blog/high-converting-landing-pages-for-ads" className={styles.projectLink}>
                  Read Article &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={styles.contactSection}>
        <div className="container">
          <div className={styles.contactContainer}>
            <div className={styles.contactDetails}>
              <div className={styles.contactHeader}>
                <span className="badge">Start Project</span>
                <h2 className={styles.contactTitle}>Ready to Scale Your Startup?</h2>
                <p className={styles.heroSubtitle}>
                  Let's schedule a 15-minute discovery call to talk about your requirements, evaluate your current speed/SEO score, and design a custom roadmap.
                </p>
              </div>
              <ul className={styles.contactBenefits}>
                <li className={styles.benefitItem}>
                  <div className={styles.benefitIcon}>⭐</div>
                  <div>
                    <h4 className={styles.benefitTitle}>Free Speed & SEO Audit</h4>
                    <p className={styles.benefitDesc}>I'll audit your current landing page and pinpoint conversion leaks.</p>
                  </div>
                </li>
                <li className={styles.benefitItem}>
                  <div className={styles.benefitIcon}>🛡️</div>
                  <div>
                    <h4 className={styles.benefitTitle}>Startup-Friendly Pricing</h4>
                    <p className={styles.benefitDesc}>Custom package milestones fitted to your specific startup budget.</p>
                  </div>
                </li>
                <li className={styles.benefitItem}>
                  <div className={styles.benefitIcon}>⚡</div>
                  <div>
                    <h4 className={styles.benefitTitle}>Lightning-Fast Delivery</h4>
                    <p className={styles.benefitDesc}>Clean, fully functional code in as little as 10-14 days.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
