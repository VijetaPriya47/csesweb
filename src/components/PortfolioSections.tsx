import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';
import styles from './PortfolioSections.module.css';

const ResumeSection = () => (
        <div className={styles.section}>
            <h2 className={styles.heading}>:: SYSTEM_LOGS / EXPERIENCE</h2>
            <div className={styles.timeline}>
                <div className={styles.experienceItem}>
                    <div className={styles.logoContainer}>
                    <img src="/csesweb/img/gitlab.png" alt="GitLab" className={styles.timelineLogo} />
                    </div>
                    <div className={styles.meta}>
                        <span className={styles.date}>[2024 - Present]</span>
                        <span className={styles.role}>GitLab (Open Source Contributor)</span>
                    </div>
                    <div className={styles.content}>
                        <ul className={styles.list}>
                            <li>
                                <strong>Redesigned core authentication:</strong> Return explicit error types to resolve race condition crash. Refactored expiry date function. Prevented pipeline crashes for time_rotating resources.
                                <a href="https://gitlab.com/gitlab-org/terraform-provider-gitlab/-/merge_requests/2722" target="_blank" rel="noreferrer"> [MR !2722]</a>
                            </li>
                            <li>
                                <strong>Implemented gitlab_project_artifact data source:</strong> Enabled dynamic build artifact fetching in Terraform, bridging CI/CD and infrastructure.
                                <a href="https://gitlab.com/gitlab-org/terraform-provider-gitlab/-/merge_requests/2721" target="_blank" rel="noreferrer"> [MR !2721]</a>
                            </li>
                            <li>
                                <strong>Resolved schema inconsistency:</strong> Fixed import failures for legacy tokens without expiry dates in gitlab_project_access_token.
                                <a href="https://gitlab.com/gitlab-org/terraform-provider-gitlab/-/merge_requests/2719" target="_blank" rel="noreferrer"> [MR !2719]</a>
                            </li>
                            <li>
                                <strong>Add priority field support:</strong> Enabled priority field for project and group labels to improve categorization.
                                <a href="https://gitlab.com/gitlab-org/terraform-provider-gitlab/-/merge_requests/2898" target="_blank" rel="noreferrer"> [PR #2898]</a>
                            </li>
                            <li>
                                <strong>Project Security Settings:</strong> Implemented <code>gitlab_project_security_settings</code> resource for automated security management.
                                <a href="https://gitlab.com/gitlab-org/terraform-provider-gitlab/-/merge_requests/2897" target="_blank" rel="noreferrer"> [PR #2897]</a>
                            </li>
                            <li>
                                <strong>Wiki Subpage Drift Fix:</strong> Resolved title drift issues for wiki subpages and handled special characters in slugs.
                                <a href="https://gitlab.com/gitlab-org/terraform-provider-gitlab/-/merge_requests/2896" target="_blank" rel="noreferrer"> [PR #2896]</a>
                            </li>
                            <li>
                                <strong>Centralized Token Rotation:</strong> Refactored token handling by centralizing rotation logic into a shared interface.
                                <a href="https://gitlab.com/gitlab-org/terraform-provider-gitlab/-/merge_requests/2894" target="_blank" rel="noreferrer"> [MR !2894]</a>
                            </li>
                            <li>
                                <strong>Compliance Requirements:</strong> Added <code>gitlab_compliance_requirement</code> resource to enhance enterprise compliance workflows.
                                <a href="https://gitlab.com/gitlab-org/terraform-provider-gitlab/-/merge_requests/2804" target="_blank" rel="noreferrer"> [PR #2804]</a>
                            </li>
                            <li>
                                <strong>Group Service Account Tokens:</strong> Implemented data source for group service account access tokens.
                                <a href="https://gitlab.com/gitlab-org/terraform-provider-gitlab/-/merge_requests/2805" target="_blank" rel="noreferrer"> [MR !2805]</a>
                            </li>
                            <li>
                                <strong>Package Dependency Proxy:</strong> Added support for managing project package dependency proxy settings.
                                <a href="https://gitlab.com/gitlab-org/terraform-provider-gitlab/-/merge_requests/2802" target="_blank" rel="noreferrer"> [MR !2802]</a>
                            </li>
                            <li>
                                <strong>GitPod References:</strong> Updated internal project references from GitPod to Ona for better workspace consistency.
                                <a href="https://gitlab.com/gitlab-org/terraform-provider-gitlab/-/merge_requests/2806" target="_blank" rel="noreferrer"> [MR !2806]</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.experienceItem}>
                    <div className={styles.logoContainer}>
                    <img src="/csesweb/img/jubilant.jpeg" alt="Jubilant Ingrevia" className={styles.timelineLogo} />
                    </div>
                    <div className={styles.meta}>
                        <span className={styles.date}>[Jun 2025 - Jul 2025]</span>
                        <span className={styles.role}>Jubilant Ingrevia Limited (GET Intern)</span>
                    </div>
                    <div className={styles.content}>
                        <ul className={styles.list}>
                            <li>
                                <strong>Process Optimization & Data Analysis:</strong> Enhanced distillation efficiency using Fenske-Underwood-Gilliland and McCabe-Thiele methods.
                            </li>
                            <li>
                                <strong>Pattern Recognition:</strong> Analyzed performance data using <strong>Matplotlib</strong> and applied pattern recognition techniques to identify critical optimization factors.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.experienceItem}>
                    <div className={styles.logoContainer}>
                    <img src="/csesweb/img/asksenior.jpeg" alt="Ask Senior" className={styles.timelineLogo} />
                    </div>
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

const featuredProjects = [
    {
        title: 'GitLab Open Source',
        description: 'Core contributions to GitLab Terraform Provider: auth redesign, new resources, and stability fixes.',
        tech: ['Go', 'Terraform', 'CI/CD'],
        link: '/projects/gitlab',
        image: '/img/projects/gitlab-logo.png',
        media: 'code',
        icon: '</>',
    },
    {
        title: 'RideSync',
        description: 'Scalable microservices architecture with observability, resilient payment flow, and fault-tolerant eventing.',
        tech: ['gRPC', 'K8s', 'MongoDB', 'Stripe', 'OpenTelemetry'],
        link: 'https://vijetapriya47.github.io/RideSync/',
        image: '/img/projects/hybrid-logistics.png',
        media: 'network',
        icon: '::',
    },
    {
        title: 'Trading Low Latency System',
        description: 'C++ event engine designed for ultra-fast execution with lock-free queues and shared-memory IPC.',
        tech: ['C++', 'IPC', 'Lock-free'],
        link: '/projects/trading-system',
        media: 'latency',
        icon: '2ms',
    },
];

const ProjectsSection = () => (
    <div id="projects" className={styles.section}>
        <h2 className={styles.heading}>:: RUNNING_PROCESSES / PROJECTS</h2>
        <div className={styles.projectsGoogleGrid}>
            {featuredProjects.map((project) => (
                <article key={project.title} className={styles.googleCard}>
                    <div className={styles.googleCardMedia}>
                        {project.image ? (
                            <img src={useBaseUrl(project.image)} alt={`${project.title} cover`} />
                        ) : (
                            <div className={`${styles.googleMediaPattern} ${styles[`googleMedia_${project.media}`]}`}>
                                <span>{project.icon}</span>
                            </div>
                        )}
                    </div>
                    <div className={styles.googleCardTop}>
                        <span className={styles.googleCardLabel}>Featured Project</span>
                        <h3 className={styles.googleCardTitle}>{project.title}</h3>
                    </div>

                    <p className={styles.googleCardDescription}>{project.description}</p>

                    <div className={styles.googleTags}>
                        {project.tech.map((item) => (
                            <span key={`${project.title}-${item}`} className={styles.googleTag}>
                                {item}
                            </span>
                        ))}
                    </div>

                    <div className={styles.googleCardFooter}>
                        <Link to={project.link} className={styles.googleCardLink}>
                            Open Project
                        </Link>
                    </div>
                </article>
            ))}
        </div>
    </div>
);

const contributions = [
    {
        project: "Hyperledger Fablo",
        desc: "Fixed a bug where the network generation script would fail if the optional post-generate.sh hook was missing.",
        link: "https://github.com/hyperledger-labs/fablo/pull/521"
    },
    {
        project: "Hyperledger Fablo",
        desc: "Co-Commited with others",
        link: "https://github.com/hyperledger-labs/fablo/pull/594"
    },
    {
        project: "Volcano (CNCF)",
        desc: "Contributed improvements to the official Volcano documentation site.",
        link: "https://github.com/volcano-sh/website/pull/377"
    },
    {
        project: "Kubernetes",
        desc: "Contributed code fixes/improvements to the core Kubernetes repository.",
        link: "https://github.com/kubernetes/kubernetes/pull/135217"
    },
    {
        project: "Kubernetes SIGs",
        desc: "CAPD: Remove finalizers during deletion if ownerRef was never set for cluster controllers",
        link: "https://github.com/kubernetes-sigs/cluster-api/pull/13239"
    },
    {
        project: "GitLab Terraform",
        desc: "Add priority field support to project and group labels",
        link: "https://gitlab.com/gitlab-org/terraform-provider-gitlab/-/merge_requests/2898"
    },
    {
        project: "GitLab Terraform",
        desc: "feat: add gitlab_project_security_settings resource",
        link: "https://gitlab.com/gitlab-org/terraform-provider-gitlab/-/merge_requests/2897"
    },
    {
        project: "GitLab Terraform",
        desc: "fix(resource/wiki_page): fix title drift for subpages and dashes",
        link: "https://gitlab.com/gitlab-org/terraform-provider-gitlab/-/merge_requests/2896"
    }
];

const ContributionsSection = () => (
    <div className={styles.contributionsSection}>
        <h2 className={styles.heading}>:: GIT_REPOS / GIT_LOGS</h2>

        <div className={styles.spotifyCard}>
            <div className={styles.spotifyHeader}>
                <div className={styles.spotifyCover}>
                    <img src="https://github.com/VijetaPriya47.png" alt="Cover" />
                </div>
                <div className={styles.spotifyInfo}>
                    <span className={styles.spotifyLabel}>Playlist</span>
                    <h1 className={styles.spotifyTitle}>Git_LOG</h1>
                    <div className={styles.spotifyMeta}>
                        <img src="https://github.com/VijetaPriya47.png" alt="User" className={styles.spotifyAvatar} />
                        <span className={styles.spotifyUsername}>Vijeta Priya</span>
                        <span className={styles.spotifyStats}>• 10+ commits • 2024-2025</span>
                    </div>
                </div>
            </div>

            <div className={styles.spotifyControls}>
                <button className={styles.playButton} title="Play/Pause Scroll">
                    <svg role="img" height="24" width="24" viewBox="0 0 24 24" fill="currentColor"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
                </button>
                <div className={styles.iconButtons}>
                    <svg role="img" height="32" width="32" viewBox="0 0 24 24" fill="currentColor" className={styles.iconOp}><path d="M5.21 1.57a.75.75 0 01.54 1.25L2.56 6h15.9a3.5 3.5 0 110 7h-1.6a.75.75 0 010-1.5h1.6a2 2 0 100-4H2.56l3.19 3.18a.75.75 0 01-1.06 1.06l-4.5-4.5a.75.75 0 010-1.06l4.5-4.5a.75.75 0 01.52-.21zm13.58 13.66a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 011.06-1.06l3.19 3.18H5.54a2 2 0 100 4H7.1a.75.75 0 010 1.5H5.54a3.5 3.5 0 110-7h12.09l-3.26 3.18a.75.75 0 01.42 1.21z"></path></svg>
                    <svg role="img" height="32" width="32" viewBox="0 0 24 24" fill="currentColor" className={styles.iconOp}><path d="M12 2.75a9.25 9.25 0 104.737 17.197l.91 1.623A11.125 11.125 0 1121.36 12a11.068 11.068 0 01-2.903 7.02l-1.39-1.996a9.208 9.208 0 002.183-5.024h-1.905l3-4.5 3 4.5h-1.92a9.266 9.266 0 00-6.725 8.973v1.86l1.202-1.724a.75.75 0 111.23.858l-2.073 2.973a.75.75 0 01-1.166 0l-2.5-3.586a.75.75 0 111.23-.858l1.777 2.55v-2.074a10.75 10.75 0 0110.428-10.368z"></path></svg>
                    <svg role="img" height="32" width="32" viewBox="0 0 24 24" fill="currentColor" className={styles.iconOp}><path d="M4.5 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm15 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-7.5 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
                </div>
            </div>

            <div className={styles.scrollWindow}>
                <div className={styles.scrollContent}>
                    {contributions.map((item, index) => (
                        <a key={`orig-${index}`} href={item.link} target="_blank" rel="noreferrer" className={styles.contributionItem}>
                            <span className={styles.trackIndex}>{index + 1}</span>
                            <div className={styles.trackInfo}>
                                <span className={styles.projectName}>{item.project}</span>
                                <span className={styles.trackDesc}>{item.desc}</span>
                            </div>
                            <span className={styles.trackTime}>Merged</span>
                        </a>
                    ))}
                    {contributions.map((item, index) => (
                        <a key={`dup-${index}`} href={item.link} target="_blank" rel="noreferrer" className={styles.contributionItem}>
                            <span className={styles.trackIndex}>{contributions.length + index + 1}</span>
                            <div className={styles.trackInfo}>
                                <span className={styles.projectName}>{item.project}</span>
                                <span className={styles.trackDesc}>{item.desc}</span>
                            </div>
                            <span className={styles.trackTime}>Merged</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

const PortfolioSections = () => (
    <div className={styles.container}>
        <ResumeSection />
        <ContributionsSection />
        <ProjectsSection />
    </div>
);

export default PortfolioSections;
