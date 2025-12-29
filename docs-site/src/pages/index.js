import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import ChatbotIcon from '@site/src/components/ChatbotIcon';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/modules">
            Browse Modules
          </Link>
        </div>
      </div>
    </header>
  );
}

function BookDescription() {
  return (
    <section className={styles.bookDescription}>
      <div className="container">
        <div className="text--center">
          <h2 className={styles.bookDescriptionHeading}>What this Textbook Covers</h2>
          <p className={styles.bookDescriptionText}>
            This comprehensive textbook on Physical AI & Humanoid Robotics bridges the gap between digital intelligence and physical systems.
            It covers cutting-edge topics including embodied AI, sensorimotor learning, and the integration of artificial intelligence with humanoid robots.
            Designed for students, researchers, and practitioners, this book provides both theoretical foundations and practical implementations
            essential for understanding and developing next-generation intelligent robotic systems that interact seamlessly with the physical world.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Physical AI & Humanoid Robotics Textbook">
      <HomepageHeader />
      <main>
        <BookDescription />
        <HomepageFeatures />
      </main>
      <ChatbotIcon />
    </Layout>
  );
}