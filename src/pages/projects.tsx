import React from 'react';
import Layout from '@theme/Layout';
import styles from '@site/src/components/PortfolioSections.module.css';

const ProjectsPage = () => {
  return (
    <Layout
      title="Projects - Vijeta Priya"
      description="Projects :: System Logs">
      <main>
        <div className={styles.container}>
          <div className={styles.section} style={{ paddingTop: '2rem' }}>
            <h1 className={styles.heading} style={{ textAlign: 'center', marginBottom: '2rem' }}>:: RUNNING_PROCESSES / PROJECTS</h1>

            <div className={styles.grid}>
              {/* New Projects from Request */}
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Ride-Sharing Microservices</h3>
                <div className={styles.techStack}>[gRPC] [K8s] [MongoDB] [Stripe] [OpenTelemetry]</div>
                <p className={styles.description}>
                  Distributed backend system ensuring "at-least-once delivery" and "idempotent consumers".
                  Designed for high availability and fault tolerance.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Trading Low Latency System</h3>
                <div className={styles.techStack}>[C++] [IPC] [Lock-free]</div>
                <p className={styles.description}>
                  High-performance trading engine achieving 2ms latency for 10k events.
                  Utilized lock-free data structures and shared memory IPC for maximum throughput.
                </p>
              </div>

              {/* Existing "CSES Solutions" Project mapped to new style */}
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>CSES Solutions</h3>
                <div className={styles.techStack}>[C++] [Python] [Algorithms] [Data Structures]</div>
                <p className={styles.description}>
                  Comprehensive solutions to CSES competitive programming problems with detailed explanations and multiple approaches.
                </p>
                <div style={{ marginTop: '1rem' }}>
                  <a href="https://github.com/VijetaPriya47" target="_blank" rel="noreferrer" style={{ color: 'var(--ifm-color-primary)', marginRight: '1rem' }}>[GitHub]</a>
                  <a href="/docs/cses/intro" style={{ color: 'var(--ifm-color-primary)' }}>[Live Demo]</a>
                </div>
              </div>

              {/* Existing "Personal Portfolio" Project mapped to new style */}
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Personal Portfolio Website</h3>
                <div className={styles.techStack}>[React] [TypeScript] [Docusaurus] [CSS]</div>
                <p className={styles.description}>
                  Modern portfolio website with GitHub-style design and interactive features.
                  Built with Docusaurus and custom React components.
                </p>
                <div style={{ marginTop: '1rem' }}>
                  <a href="https://github.com/VijetaPriya47/csesweb" target="_blank" rel="noreferrer" style={{ color: 'var(--ifm-color-primary)', marginRight: '1rem' }}>[GitHub]</a>
                </div>
              </div>

              {/* Existing "Competitive Programming" Project mapped to new style */}
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Competitive Programming Achievements</h3>
                <div className={styles.techStack}>[C++] [Algorithms] [Data Structures]</div>
                <p className={styles.description}>
                  Competitive programming achievements and contest rankings.
                  Solved 500+ problems across various platforms.
                </p>
                <div style={{ marginTop: '1rem' }}>
                  <a href="https://codeforces.com/profile/vijetapriya" target="_blank" rel="noreferrer" style={{ color: 'var(--ifm-color-primary)' }}>[Codeforces]</a>
                </div>
              </div>

              {/* Existing "Technical Documentation" Project mapped to new style */}
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Technical Documentation</h3>
                <div className={styles.techStack}>[Markdown] [Docusaurus] [Technical Writing]</div>
                <p className={styles.description}>
                  Technical articles and documentation on distributed systems and algorithms.
                </p>
                <div style={{ marginTop: '1rem' }}>
                  <a href="/blog" style={{ color: 'var(--ifm-color-primary)' }}>[Blog]</a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default ProjectsPage;
