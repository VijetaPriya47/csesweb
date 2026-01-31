import React, { type ReactNode } from 'react';
import Layout from '@theme/Layout';

export default function RideSharingPage(): ReactNode {
    return (
        <Layout
            title="Ride-Sharing Microservices"
            description="Deep dive into the Ride-Sharing Microservices architecture">
            <main className="container margin-vert--lg">
                <h1>Ride-Sharing Microservices</h1>
                <p className="lead">A distributed system ensuring high availability and fault tolerance.</p>

                <div className="row">
                    <div className="col col--8">
                        <h2>Architecture Overview</h2>
                        <p>
                            This project implements a scalable backend for a ride-sharing application (like Uber/Lyft).
                            It is composed of loosely coupled microservices communicating via gRPC and message queues.
                        </p>
                        <ul>
                            <li><strong>Microservices:</strong> Driver Service, Rider Service, Trip Service, Payment Service.</li>
                            <li><strong>Communication:</strong> gRPC for synchronous low-latency calls, Kafka for asynchronous events.</li>
                            <li><strong>Database:</strong> MongoDB for flexible schema design (Trips), Redis for caching and geospatial data (Driver locations).</li>
                        </ul>

                        <h3>Key Technical Challenges</h3>
                        <h4>1. At-Least-Once Delivery</h4>
                        <p>
                            Ensured by implementing idempotent consumers. Each message processing logic checks a unique event ID
                            against a processed-events store before execution to prevent duplicate side effects (e.g., charging a user twice).
                        </p>

                        <h4>2. Geospatial Search</h4>
                        <p>
                            Utilized Redis Geo to index driver locations and efficiently query "drivers within radius R" in O(log(N)) time.
                        </p>

                        <h3>Tech Stack</h3>
                        <span className="badge badge--primary margin-right--sm">Go</span>
                        <span className="badge badge--primary margin-right--sm">gRPC</span>
                        <span className="badge badge--primary margin-right--sm">Kubernetes</span>
                        <span className="badge badge--primary margin-right--sm">MongoDB</span>
                        <span className="badge badge--primary margin-right--sm">Stripe API</span>
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
                                    <a href="https://github.com/VijetaPriya47" className="button button--secondary button--block">GitHub</a>
                                    <a href="#" className="button button--primary button--block">Deployed</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}
