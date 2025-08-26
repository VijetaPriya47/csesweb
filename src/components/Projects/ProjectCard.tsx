import React from 'react';
import { Project } from '@site/src/data/projects';
import GitHubButton from '@site/src/components/Common/GitHubButton';

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div className="project-card" onClick={onClick}>
      {project.image && (
        <div className="project-image">
          <img src={project.image} alt={project.title} />
        </div>
      )}
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.shortDescription}</p>
        <div className="project-tech">
          {project.techStack.slice(0, 4).map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="tech-tag">+{project.techStack.length - 4} more</span>
          )}
        </div>
        <div className="project-actions">
          {project.githubUrl && (
            <GitHubButton 
              href={project.githubUrl} 
              variant="secondary" 
              size="sm"
            >
              GitHub
            </GitHubButton>
          )}
          {project.liveUrl && (
            <GitHubButton 
              href={project.liveUrl} 
              variant="primary" 
              size="sm"
            >
              Live Demo
            </GitHubButton>
          )}
        </div>
      </div>
    </div>
  );
}
