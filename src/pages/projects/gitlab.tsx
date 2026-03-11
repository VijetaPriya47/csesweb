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

                        <h3>Key Contributions & Activity</h3>

                        <h4>Open Contributions (Active)</h4>
                        <ul>
                            <li><a href="https://gitlab.com/gitlab-org/terraform-provider-gitlab/-/merge_requests/2898" target="_blank">!2898: feat: Add priority field support to project and group labels</a></li>
                            <li><a href="https://gitlab.com/gitlab-org/terraform-provider-gitlab/-/merge_requests/2897" target="_blank">!2897: feat: add gitlab_project_security_settings resource</a></li>
                            <li><a href="https://gitlab.com/gitlab-org/terraform-provider-gitlab/-/merge_requests/2896" target="_blank">!2896: fix(resource/wiki_page): fix title drift for subpages and dashes</a></li>
                            <li><a href="https://gitlab.com/gitlab-org/terraform-provider-gitlab/-/merge_requests/2894" target="_blank">!2894: Refactor: centralize token rotation logic into shared interface</a></li>
                            <li><a href="https://gitlab.com/gitlab-org/terraform-provider-gitlab/-/merge_requests/2804" target="_blank">!2804: feat: add gitlab_compliance_requirement resource</a></li>
                        </ul>

                        <h4>Recent Merged MRs</h4>
                        <ul>
                            <li><a href="https://gitlab.com/gitlab-org/terraform-provider-gitlab/-/merge_requests/2806" target="_blank">!2806: fix: changed GitPod References to Ona</a></li>
                            <li><a href="https://gitlab.com/gitlab-org/terraform-provider-gitlab/-/merge_requests/2805" target="_blank">!2805: feat: add gitlab_group_service_account_access_tokens data source</a></li>
                            <li><a href="https://gitlab.com/gitlab-org/terraform-provider-gitlab/-/merge_requests/2802" target="_blank">!2802: Add gitlab_project_package_dependency_proxy resource</a></li>
                            <li><a href="https://gitlab.com/gitlab-org/terraform-provider-gitlab/-/merge_requests/2722" target="_blank">!2722: Redesigned core auth & expiry logic</a></li>
                            <li><a href="https://gitlab.com/gitlab-org/terraform-provider-gitlab/-/merge_requests/2721" target="_blank">!2721: Implemented gitlab_artifact_file data source</a></li>
                            <li><a href="https://gitlab.com/gitlab-org/terraform-provider-gitlab/-/merge_requests/2719" target="_blank">!2719: Allow gitlab_project_label name updates without replacement</a></li>
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
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                                        <a href="https://gitlab.com/gitlab-org/terraform-provider-gitlab/-/merge_requests/?sort=closed_at_desc&state=merged&author_username=vijeta004&first_page_size=20" className="button button--secondary button--block" target="_blank">Merged MRs</a>
                                        <a href="https://gitlab.com/gitlab-org/terraform-provider-gitlab" className="button button--primary button--block" target="_blank">Repo</a>
                                    </div>
                                    <a href="https://gitlab.com/gitlab-org/terraform-provider-gitlab/-/merge_requests/?sort=closed_at_desc&state=opened&author_username=vijeta004&first_page_size=20" className="button button--outline button--primary button--block" target="_blank">Active MRs (Open)</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}
