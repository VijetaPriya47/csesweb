# Vijeta Priya
+91-8837360428 | vijeta004@gmail.com | [Portfolio](https://vijetapriya47.github.io/csesweb/)
[Linkedin](https://linkedin.com/in/vzsaz) | [Codeforces](https://codeforces.com/profile/vijetapriya) | [Github](https://github.com/VijetaPriya47) | Leetcode | [Medium](https://medium.com/@vijeta004)

**Software Engineer**

## Education
**National Institute of Technology Agartala**
Bachelor of Technology
Nov 2022 – June 2026
CGPA: 8.0

## Open Source Contributions - Remote

### Kubernetes (Jan 2026)
* **Core Kubernetes - Goroutine Leak Fix:** Fixed a goroutine leak in `TestNodeSyncResync` by correctly handling the `opChan` lifecycle, preventing test hangs. [MR !135217]
* **CAPA (AWS Provider) - Test Stability:** Resolved flakiness in `TestROSANetworkReconciler` by implementing `Eventually` assertions. [MR !5861]
* **Cluster API (CAPI) - Logic Fix:** Updated controller to correctly remove finalizers during deletion if `ownerRef` was never set. [MR !13239]
* **Cluster API (CAPI) - Observability / Security:** Added Kubernetes Events for automatic certificate rotation in `KubeadmControlPlane`. [PR #13242]

### GitLab Terraform Provider (Sept 2025)
* **Refactored token rotation logic** into a shared `RotatableToken` interface for Project, Group, Personal and Service Account tokens, cutting repeated code and making fixes easier. [MR !2894]
* **Project Security Settings:** Implemented `gitlab_project_security_settings` resource for automated security management. [MR !2897]
* **Priority Field Support:** Enabled priority field for project and group labels to improve categorization. [MR !2898]
* **Wiki Subpage Drift Fix:** Resolved title drift issues for wiki subpages and handled special characters in slugs. [MR !2896]
* **Added `gitlab` group service account access tokens data source** so users can read group service account metadata without needing write permissions. [MR !2805]
* **Created `gitlab` project package dependency proxy resource** using GitLab’s GraphQL API to let teams manage Maven registry proxy settings in Terraform. [MR !2802]
* **Updated `DetermineExpiryDate` function** to return proper validation info, preventing segfaults and improving error handling across all token resources. [MR !2722]
* **Made project label renames work in-place** by mapping to numeric IDs instead of triggering full resource replacement. [MR !2719]
* **Built `gitlab` artifact file data source** to download both text and binary CI/CD job artifacts directly through Terraform. [MR !2721]

### Hyperledger Labs
* **Hyperledger Fablo:** Fixed a bug where the network generation script would fail if the optional `post-generate.sh` hook was missing. [PR #521]

## Achievements
* Ranked 332 AIR and 1594 World Rank in Meta Hacker Cup 2024 in Round 1.
* Codeforces : Specialist (1423+) with 1000+ problems.
* Published technical articles on distributed systems and backend engineering (Medium).

## Projects

### RideSync (Ride-Sharing Backend) — gRPC, REST, OTel, RabbitMQ
* Built a distributed logistics platform in Go with microservices, using gRPC for internal calls and REST for external clients behind a custom API Gateway.
* Implemented carpooling so a driver can accept multiple overlapping rides based on available seats, using path-overlap and dynamic seat patching to maximise vehicle utilisation.
* Designed the core matching engine with MongoDB 2dsphere indexing and Atomic Compare-and-Swap (CAS) at the database layer — prevented multiple drivers from accepting the same ride in high-traffic scenarios.
* Added real-time driver location sync with full end-to-end tracing through OpenTelemetry + Jaeger and custom Context Propagation over RabbitMQ, plus seat reservation/release on driver accept and payment completion.
* Built fault-tolerant dispatch using RabbitMQ TTL (120s), Dead Letter Queues, and a dedicated timeout consumer that sends instant “No Drivers Found” signals to riders via WebSocket.
* Added a finance + audit subsystem (RBAC/JWT gateway middleware, Postgres ledger, Stripe Checkout + webhooks) with admin/business dashboards for revenue/regions/package insights.

### Trading Low Latency System — C++, Scalable, Modular, OOPs
* Built with Factory Pattern for full order lifecycle (place/modify/cancel), Added chrono + spdlog timers to measure CPU/memory vs latency; Added runtime WebSocket switch (Boost vs Zsocketpp); benchmarked with Matplotlib — Zsocket 9% faster than Boost.

## TECHNICAL SKILLS
* **Languages & Backend:** C++, Go (Golang), Python, SQL, Bash, REST, GraphQL, gRPC, Protobuf
* **Core Engineering:** System Design (LLD/HLD), Distributed Microservices, Concurrency, SOLID Principles
