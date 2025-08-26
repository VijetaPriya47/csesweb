import React from 'react';
import { projects } from '@site/src/data/projects';
import ProjectCard from '@site/src/components/Projects/ProjectCard';
import GitHubButton from '@site/src/components/Common/GitHubButton';

export default function FeaturedProjects() {
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-description">
            A showcase of my recent work in competitive programming, web development, and technical documentation.
          </p>
        </div>
        <div className="projects-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="section-footer">
          <GitHubButton to="/projects" variant="outline" size="lg">
            View All Projects →
          </GitHubButton>
        </div>
      </div>
    </section>
  );
}
