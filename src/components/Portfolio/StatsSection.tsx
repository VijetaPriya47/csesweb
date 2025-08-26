import React from 'react';
import { stats } from '@site/src/data/stats';

export default function StatsSection() {
  return (
    <section className="stats-section">
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-value">{stat.value}</div>
            <div className="stat-title">{stat.title}</div>
            <div className="stat-description">{stat.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
