import React from 'react';
import Layout from '@theme/Layout';
import styles from '@site/src/components/PortfolioSections.module.css';

import { ProjectFlipCard } from '../components/ProjectFlipCard';

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
              {/* Flip Cards for Main Projects */}
              <ProjectFlipCard
                title="Ride-Sharing Microservices"
                techStack="[gRPC] [K8s] [MongoDB] [Stripe] [OpenTelemetry]"
                description="Distributed backend system ensuring 'at-least-once delivery' and 'idempotent consumers'."
                link="/projects/ride-sharing"
              />

              <ProjectFlipCard
                title="Trading Low Latency System"
                techStack="[C++] [IPC] [Lock-free]"
                description="High-performance trading engine achieving 2ms latency for 10k events."
                link="/projects/trading-system"
              />
            </div>

            {/* Orbit Browser removed */}

          </div>
        </div>
      </main>
    </Layout>
  );
};

export default ProjectsPage;
