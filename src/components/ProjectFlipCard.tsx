import React from 'react';
import Link from '@docusaurus/Link';
// We can import the CSS globally in config or use module.css. 
// For simplicity given the setup, I'll rely on the global CSS file I just created.

interface ProjectFlipCardProps {
    title: string;
    techStack: string;
    description: string;
    link: string;
}

export const ProjectFlipCard: React.FC<ProjectFlipCardProps> = ({ title, techStack, description, link }) => {
    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <h3 className="flip-card-title">{title}</h3>
                    <div className="flip-card-tech">{techStack}</div>
                </div>
                <div className="flip-card-back">
                    <p className="flip-card-desc">{description}</p>
                    <Link to={link} className="button button--secondary button--lg">
                        View Project
                    </Link>
                </div>
            </div>
        </div>
    );
};
