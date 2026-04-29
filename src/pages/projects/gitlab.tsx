import React, { type ReactNode } from 'react';
import Layout from '@theme/Layout';

export default function GitLabContributionsPage(): ReactNode {
    return (
        <Layout
            title="GitLab Engineering Contributions"
            description="Summary of contributions to the terraform-provider-gitlab repository">
            <main className="container margin-vert--lg">
                <h1>GitLab Engineering Contributions</h1>
                <p className="lead">
                    Detailed summary of the contributions made to the <code>terraform-provider-gitlab</code> repository,
                    focusing on technical impact, infrastructure robustness, and implementation details for an SDE profile.
                </p>

                <div className="row">
                    <div className="col col--12">
                        <section className="margin-bottom--xl">
                            <h2>Merged Contributions (7)</h2>
                            <div className="row">
                                {[
                                    {
                                        title: 'Centralized Token Rotation Logic (!2894)',
                                        desc: 'Refactored token rotation logic into a shared RotatableToken interface for Project, Group, Personal, and Service Account tokens to improve code maintainability and streamline future bug fixes.',
                                        link: 'https://gitlab.com/gitlab-org/terraform-provider-gitlab/-/merge_requests/2894',
                                    },
                                    {
                                        title: 'Infrastructure Tooling Update (!2806)',
                                        desc: 'Updated project documentation and remote development configurations to facilitate the transition from GitPod to Ona, ensuring a seamless setup for contributors.',
                                        link: 'https://gitlab.com/gitlab-org/terraform-provider-gitlab/-/merge_requests/2806',
                                    },
                                    {
                                        title: 'New Data Source for Service Account Tokens (!2805)',
                                        desc: 'Implemented the gitlab_group_service_account_access_tokens data source, enabling programmatic lookup of group-level service account credentials.',
                                        link: 'https://gitlab.com/gitlab-org/terraform-provider-gitlab/-/merge_requests/2805',
                                    },
                                    {
                                        title: 'Maven Package Proxy Support (!2802)',
                                        desc: 'Added the gitlab_project_package_dependency_proxy resource, utilizing the GitLab GraphQL API to manage project-level Maven registry proxy settings.',
                                        link: 'https://gitlab.com/gitlab-org/terraform-provider-gitlab/-/merge_requests/2802',
                                    },
                                    {
                                        title: 'Robust Expiry Date Validation (!2722)',
                                        desc: 'Refactored core DetermineExpiryDate utility to return validation metadata, preventing application-level segfaults and enhancing error handling across all token resources.',
                                        link: 'https://gitlab.com/gitlab-org/terraform-provider-gitlab/-/merge_requests/2722',
                                    },
                                    {
                                        title: 'CI/CD Artifact Retrieval (!2721)',
                                        desc: 'Developed the gitlab_artifact_file data source to support both text and binary (base64) downloads of specific CI/CD job artifacts.',
                                        link: 'https://gitlab.com/gitlab-org/terraform-provider-gitlab/-/merge_requests/2721',
                                    },
                                    {
                                        title: 'Resource Persistence Optimization (!2719)',
                                        desc: 'Enhanced the gitlab_project_label resource to support in-place renames via numeric ID-based state mapping, preserving historical metadata across GitLab issues and MRs.',
                                        link: 'https://gitlab.com/gitlab-org/terraform-provider-gitlab/-/merge_requests/2719',
                                    }
                                ].map((item, index) => (
                                    <div key={index} className="col col--4 margin-bottom--lg">
                                        <div className="card shadow--md h-100" style={{ height: '100%' }}>
                                            <div className="card__header">
                                                <h4>{item.title}</h4>
                                            </div>
                                            <div className="card__body">
                                                <p>{item.desc}</p>
                                            </div>
                                            <div className="card__footer">
                                                <a href={item.link} target="_blank" rel="noreferrer" className="button button--primary button--sm">
                                                    Click to see code
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="margin-bottom--xl">
                            <h2>Open/In-Progress Contributions (4)</h2>
                            <div className="row">
                                {[
                                    {
                                        title: 'Label Priority Support (PR #2898)',
                                        desc: 'Extending label resources to support the priority field, allowing users to define ordered label hierarchies for projects and groups.',
                                        link: 'https://gitlab.com/gitlab-org/terraform-provider-gitlab/-/merge_requests/2898',
                                    },
                                    {
                                        title: 'Project Security Management (PR #2897)',
                                        desc: 'Implementing the gitlab_project_security_settings resource to manage security features like secret validity checks via the GraphQL API.',
                                        link: 'https://gitlab.com/gitlab-org/terraform-provider-gitlab/-/merge_requests/2897',
                                    },
                                    {
                                        title: 'Wiki Page Title Synchronization (PR #2896)',
                                        desc: 'Resolving consistency errors in gitlab_wiki_page by implementing state persistence logic that handles automatic API title transformations for subpages and slugs.',
                                        link: 'https://gitlab.com/gitlab-org/terraform-provider-gitlab/-/merge_requests/2896',
                                    },
                                    {
                                        title: 'Compliance Framework Management (PR #2804)',
                                        desc: 'Introducing the gitlab_compliance_requirement resource to manage complex compliance requirements and their associated security controls using GraphQL.',
                                        link: 'https://gitlab.com/gitlab-org/terraform-provider-gitlab/-/merge_requests/2804',
                                    }
                                ].map((item, index) => (
                                    <div key={index} className="col col--6 margin-bottom--lg">
                                        <div className="card shadow--md h-100" style={{ borderLeft: '5px solid #ffa500', height: '100%' }}>
                                            <div className="card__header">
                                                <h4>{item.title}</h4>
                                            </div>
                                            <div className="card__body">
                                                <p>{item.desc}</p>
                                            </div>
                                            <div className="card__footer">
                                                <a href={item.link} target="_blank" rel="noreferrer" className="button button--secondary button--sm">
                                                    Click to see code
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>

                <div className="admonition admonition-tip alert alert--success">
                    <div className="admonition-heading">
                        <h5>Technical Impact</h5>
                    </div>
                    <div className="admonition-content">
                        <p>These contributions demonstrate proficiency in <strong>Go</strong>, <strong>Terraform Provider Development</strong>, <strong>GraphQL API integration</strong>, and <strong>distributed systems infrastructure</strong>.</p>
                    </div>
                </div>
            </main>
        </Layout>
    );
}
