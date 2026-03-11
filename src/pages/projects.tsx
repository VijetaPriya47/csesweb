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
                title="GitLab Open Source"
                techStack="[Go] [Terraform] [CI/CD]"
                description="Core contributions to GitLab's Terraform Provider: Auth redesign, new data sources, and bug fixes."
                link="/projects/gitlab"
                image="/img/projects/gitlab-logo.png"
              />

              <ProjectFlipCard
                title="Hybrid Logistics Engine"
                techStack="[gRPC] [K8s] [MongoDB] [Stripe] [OpenTelemetry]"
                description="Technical architecture and system design documentation for a highly scalable Hybrid Logistics Engine."
                link="/projects/ride-sharing"
                image="/img/projects/hybrid-logistics.png"
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
