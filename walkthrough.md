# GitLab Merge Request Summaries for SDE Profile

Below is a summary of the contributions made to the `terraform-provider-gitlab` repository. Each entry highlights the technical impact and implementation details, categorized by their merge status.

## Merged Contributions (7)

1.  **Centralized Token Rotation Logic (!2894):** Refactored token rotation logic into a shared `RotatableToken` interface for Project, Group, Personal, and Service Account tokens to improve code maintainability and streamline future bug fixes.
2.  **Infrastructure Tooling Update (!2806):** Updated project documentation and remote development configurations to facilitate the transition from GitPod to Ona, ensuring a seamless setup for contributors.
3.  **New Data Source for Service Account Tokens (!2805):** Implemented the `gitlab_group_service_account_access_tokens` data source, enabling programmatic lookup of group-level service account credentials.
4.  **Maven Package Proxy Support (!2802):** Added the `gitlab_project_package_dependency_proxy` resource, utilizing the GitLab GraphQL API to manage project-level Maven registry proxy settings.
5.  **Robust Expiry Date Validation (!2722):** Refactored core `DetermineExpiryDate` utility to return validation metadata, preventing application-level segfaults and enhancing error handling across all token resources.
6.  **CI/CD Artifact Retrieval (!2721):** Developed the `gitlab_artifact_file` data source to support both text and binary (base64) downloads of specific CI/CD job artifacts.
7.  **Resource Persistence Optimization (!2719):** Enhanced the `gitlab_project_label` resource to support in-place renames via numeric ID-based state mapping, preserving historical metadata across GitLab issues and MRs.

## Open/In-Progress Contributions (4)

1.  **Label Priority Support (!2898):** Extending label resources to support the `priority` field, allowing users to define ordered label hierarchies for projects and groups.
2.  **Project Security Management (!2897):** Implementing the `gitlab_project_security_settings` resource to manage security features like secret validity checks via the GraphQL API.
3.  **Wiki Page Title Synchronization (!2896):** Resolving consistency errors in `gitlab_wiki_page` by implementing state persistence logic that handles automatic API title transformations for subpages and slugs.
4.  **Compliance Framework Management (!2804):** Introducing the `gitlab_compliance_requirement` resource to manage complex compliance requirements and their associated security controls using GraphQL.
