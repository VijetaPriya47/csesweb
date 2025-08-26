import React from 'react';
import Avatar from '@site/src/components/Common/Avatar';
import GitHubButton from '@site/src/components/Common/GitHubButton';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-avatar">
          <Avatar 
            src="/img/vijeta-priya.jpg" 
            alt="Vijeta Priya" 
            size="xl"
          />
        </div>
        <div className="hero-text">
          <h1 className="hero-name">Vijeta Priya</h1>
          <p className="hero-title">Software Engineer & Competitive Programmer</p>
          <p className="hero-bio">
            Passionate competitive programmer with expertise in algorithms and data structures. 
            Specialist on Codeforces (1423+ rating) with 100+ problems solved. 
            Achieved AIR 332 in Meta Hacker Cup 2024 Round 1. 
            Currently working on comprehensive CSES solutions and building modern web applications.
          </p>
          <div className="hero-actions">
            <GitHubButton 
              href="/resume.pdf" 
              variant="primary" 
              size="lg"
            >
              📄 Download Resume
            </GitHubButton>
            <GitHubButton 
              href="https://github.com/VijetaPriya47" 
              variant="secondary" 
              size="lg"
            >
              🐙 View GitHub
            </GitHubButton>
          </div>
        </div>
      </div>
    </section>
  );
}
