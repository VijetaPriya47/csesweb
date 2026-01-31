import React, { type ReactNode } from 'react';
import Layout from '@theme/Layout';

export default function TradingSystemPage(): ReactNode {
    return (
        <Layout
            title="Trading Low Latency System"
            description="Deep dive into the Low Latency Trading System">
            <main className="container margin-vert--lg">
                <h1>Trading Low Latency System</h1>
                <p className="lead">High-performance trading engine achieving sub-millisecond latency.</p>

                <div className="row">
                    <div className="col col--8">
                        <h2>System Design</h2>
                        <p>
                            Designed to process market data ticks and execute orders with minimal latency.
                            The system handles 10,00k events/second with a p99 latency of 2ms.
                        </p>

                        <h3>Optimization Techniques</h3>
                        <h4>1. Lock-Free Data Structures</h4>
                        <p>
                            Used SPSC (Single Producer Single Consumer) queues for generic message passing between threads to avoid
                            kernel-level context switches and mutex contention.
                        </p>

                        <h4>2. Shared Memory IPC</h4>
                        <p>
                            Implemented custom shared memory ring buffers for Inter-Process Communication, significantly faster than TCP loopback.
                        </p>

                        <h4>3. Kernel Bypass (Simulation)</h4>
                        <p>
                            Architected the system to be compatible with Solarflare OpenOnload techniques for future deployment.
                        </p>

                        <h3>Tech Stack</h3>
                        <span className="badge badge--success margin-right--sm">C++ 20</span>
                        <span className="badge badge--success margin-right--sm">CMake</span>
                        <span className="badge badge--success margin-right--sm">Linux System Programming</span>
                        <span className="badge badge--success margin-right--sm">GTest</span>
                    </div>
                    <div className="col col--4">
                        <div className="card shadow--md">
                            <div className="card__header">
                                <h3>Project Stats</h3>
                            </div>
                            <div className="card__body">
                                <p><strong>Focus:</strong> Performance</p>
                                <p><strong>Latency:</strong> ~2ms</p>
                                <p><strong>Throughput:</strong> 10k/sec</p>
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
