import React from 'react';
import styles from './PortfolioSections.module.css';

const ResumeSection = () => (
    <div className={styles.section}>
        <h2 className={styles.heading}>:: SYSTEM_LOGS / EXPERIENCE</h2>
        <div className={styles.timeline}>
            <div className={styles.item}>
                <div className={styles.meta}>
                    <span className={styles.date}>[2024 - Present]</span>
                    <span className={styles.role}>GitLab (Open Source Contributor)</span>
                </div>
                <div className={styles.content}>
                    <ul className={styles.list}>
                        <li>PATCH: Fixed segmentation faults in authentication logic (Go).</li>
                        <li>FEATURE: Developed artifact data sources for Terraform provider.</li>
                        <li>BUGFIX: Patched state validation bugs in core services.</li>
                    </ul>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.meta}>
                    <span className={styles.date}>[2023 - 2024]</span>
                    <span className={styles.role}>Ask Senior (Mentor)</span>
                </div>
                <div className={styles.content}>
                    <ul className={styles.list}>
                        <li>OUTPUT: Created 50+ video editorials on Bit Manipulation/Interactive problems.</li>
                        <li>IMPACT: Mentored junior developers in competitive programming concepts.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
);

const ProjectsSection = () => (
    <div className={styles.section}>
        <h2 className={styles.heading}>:: RUNNING_PROCESSES / PROJECTS</h2>
        <div className={styles.grid}>
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
        </div>
    </div>
);

const PortfolioSections = () => (
    <div className={styles.container}>
        <ResumeSection />
        <ProjectsSection />
    </div>
);

export default PortfolioSections;
