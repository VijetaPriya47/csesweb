import React, { type ReactNode } from 'react';
import Layout from '@theme/Layout';

export default function GitlabPage(): ReactNode {
    return (
        <Layout
            title="GitLab Open Source Contributions"
            description="Details of Open Source contributions to GitLab">
            <main className="container margin-vert--lg">
                <h1>GitLab Open Source Contributions</h1>
                <p className="lead">Backend Engineering contributions to the DevOps platform.</p>

                <div className="row">
                    <div className="col col--8">
                        <h2>Overview</h2>
                        <p>
                            As an Open Source Contributor to GitLab, I focused on the <strong>Terraform Provider</strong> and core backend services.
                            My work involved fixing critical race conditions, implementing new data sources, and resolving schema inconsistencies
                            to improve infrastructure-as-code reliability for thousands of users.
                        </p>

                        <h3>Key Contributions</h3>

                        <h4>1. Core Authentication Redesign</h4>
                        <p>
                            Addressed a race condition crash in the authentication flow by ensuring explicit error types were returned.
                            Refactored the expiry date logic to prevent pipeline crashes for time-rotating resources.
                        </p>
                        <ul>
                            <li><a href="https://gitlab.com/gitlab-org/terraform-provider-gitlab/-/merge_requests/2722" target="_blank">View MR !2722: Redesigned core auth & expiry logic</a></li>
                        </ul>

                        <h4>2. New Data Source: <code>gitlab_project_artifact</code></h4>
                        <p>
                            Implemented a new data source to enable dynamic fetching of build artifacts within Terraform.
                            This bridged a gap between CI/CD pipelines and infrastructure provisioning.
                        </p>
                        <ul>
                            <li><a href="https://gitlab.com/gitlab-org/terraform-provider-gitlab/-/merge_requests/2721" target="_blank">View MR !2721: Implemented artifacts data source</a></li>
                        </ul>

                        <h4>3. Schema Consistency Fixes</h4>
                        <p>
                            Fixed import failures for legacy tokens that lacked expiry dates, ensuring backward compatibility
                            and smooth upgrades for existing resources.
                        </p>
                        <ul>
                            <li><a href="https://gitlab.com/gitlab-org/terraform-provider-gitlab/-/merge_requests/2719" target="_blank">View MR !2719: Resolved legacy token schema issues</a></li>
                        </ul>

                        <h3>Tech Stack</h3>
                        <span className="badge badge--warning margin-right--sm">Go</span>
                        <span className="badge badge--warning margin-right--sm">Terraform Plugin SDK</span>
                        <span className="badge badge--warning margin-right--sm">REST API</span>
                        <span className="badge badge--warning margin-right--sm">CI/CD</span>
                    </div>
                    <div className="col col--4">
                        <div className="card shadow--md">
                            <div className="card__header">
                                <h3>Project Stats</h3>
                            </div>
                            <div className="card__body">
                                <p><strong>Role:</strong> Open Source Contributor</p>
                                <p><strong>Impact:</strong> Core Stability, New Features</p>
                                <p><strong>Status:</strong> Active (2024 - Present)</p>
                            </div>
                            <div className="card__footer">
                                <div style={{ display: 'flex', gap: '0.5rem' }}>
                                    <a href="https://gitlab.com/gitlab-org/terraform-provider-gitlab/-/merge_requests?scope=all&state=merged&author_username=VijetaPriya" className="button button--secondary button--block" target="_blank">View MRs</a>
                                    <a href="https://gitlab.com/gitlab-org/terraform-provider-gitlab" className="button button--primary button--block" target="_blank">Repo</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}
