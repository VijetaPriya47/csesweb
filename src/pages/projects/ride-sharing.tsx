import React, { type ReactNode } from 'react';
import Layout from '@theme/Layout';

export default function RideSharingPage(): ReactNode {
    return (
        <Layout
            title="Hybrid Logistics Engine"
            description="Deep dive into the Hybrid Logistics Engine architecture">
            <main className="container margin-vert--lg">
                <h1>Hybrid Logistics Engine: Technical Summary</h1>
                <p className="lead">A distributed system ensuring high availability and fault tolerance through microservices and event-driven architecture.</p>

                <div className="row">
                    <div className="col col--8">
                        <h2>Core Features</h2>
                        <ul>
                            <li><strong>Distributed Dispatch:</strong> Optimized driver-matching via Geohash spatial indexing for high-performance proximity lookups.</li>
                            <li><strong>Event-Driven Architecture:</strong> 4 microservices (API Gateway, Trip, Driver, Payment) using gRPC for low-latency sync calls and RabbitMQ for async coordination.</li>
                            <li><strong>Real-time Sync:</strong> Persistent WebSockets for live location tracking and state updates.</li>
                            <li><strong>Automated Payments:</strong> Secure Stripe integration with webhook signature verification and idempotency management.</li>
                        </ul>

                        <h2>Production-Grade Attributes</h2>
                        <ul>
                            <li><strong>Resilience:</strong> Robust messaging with Dead Letter Queues (DLQ) and exponential backoff retry logic.</li>
                            <li><strong>Observability:</strong> Full OpenTelemetry instrumentation with Jaeger for distributed tracing across service boundaries.</li>
                            <li><strong>Cloud-Native Infrastructure:</strong> Kubernetes-native design with multi-stage Docker builds and Tilt for optimized local development.</li>
                            <li><strong>Clean Architecture:</strong> Domain-driven design with strict 3-layer separation (Transport, Service, Repository).</li>
                            <li><strong>Reliability:</strong> Graceful shutdown handling for zero-downtime updates and reliable connection draining.</li>
                        </ul>

                        <h2>Documentation</h2>
                        <ul>
                            <li><strong>Docusaurus Site:</strong> Professionally maintained technical documentation.</li>
                            <li><strong>Deep Dives:</strong> Thorough architectural analysis and trade-offs documented in the Technical_Assessment.md.</li>
                        </ul>

                        <div className="admonition admonition-note alert alert--secondary">
                            <div className="admonition-heading">
                                <h5>Note</h5>
                            </div>
                            <div className="admonition-content">
                                <p>The system prioritizes infrastructure and integration robustness; automated unit testing is a key area for immediate roadmap expansion.</p>
                            </div>
                        </div>

                        <div className="margin-top--lg">
                            <h3>Tech Stack</h3>
                            <span className="badge badge--primary margin-right--sm">Go</span>
                            <span className="badge badge--primary margin-right--sm">gRPC</span>
                            <span className="badge badge--primary margin-right--sm">RabbitMQ</span>
                            <span className="badge badge--primary margin-right--sm">WebSockets</span>
                            <span className="badge badge--primary margin-right--sm">Stripe API</span>
                            <span className="badge badge--primary margin-right--sm">Kubernetes</span>
                            <span className="badge badge--primary margin-right--sm">OpenTelemetry</span>
                        </div>
                    </div>
                    <div className="col col--4">
                        <div className="card shadow--md">
                            <div className="card__header">
                                <h3>Project Stats</h3>
                            </div>
                            <div className="card__body">
                                <p><strong>Role:</strong> Backend Engineer</p>
                                <p><strong>Timeline:</strong> 3 Months</p>
                                <p><strong>Status:</strong> Completed</p>
                            </div>
                            <div className="card__footer">
                                <div style={{ display: 'flex', gap: '0.5rem' }}>
                                    <a href="https://github.com/VijetaPriya47/Hybrid-Logistics-Engine" className="button button--secondary button--block">GitHub</a>
                                    <a href="https://vijetapriya47.github.io/Hybrid-Logistics-Engine/" className="button button--primary button--block">Documentation</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}
