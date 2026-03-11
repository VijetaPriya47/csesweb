import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

interface ProjectFlipCardProps {
    title: string;
    techStack: string;
    description: string;
    link: string;
    image?: string;
}

export const ProjectFlipCard: React.FC<ProjectFlipCardProps> = ({ title, techStack, description, link, image }) => {
    const imageUrl = useBaseUrl(image);

    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    {image && <img src={imageUrl} alt={title} className="flip-card-image" />}
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
