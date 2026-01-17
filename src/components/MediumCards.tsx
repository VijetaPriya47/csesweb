import React from 'react';
import mediumPosts from '../data/medium-posts.json';
import '../css/medium-cards.css';

interface Post {
    title: string;
    link: string;
    pubDate: string;
    image: string;
    description: string;
    categories: string[];
}

const MediumCards: React.FC = () => {
    const posts = (mediumPosts as Post[]).slice(0, 9); // Limit to 9 recent posts

    return (
        <div className="medium-card-container">
            {posts.map((post, index) => (
                <div key={index} className="medium-card" onClick={() => window.open(post.link, '_blank')}>
                    <div className="medium-card-inner">
                        {/* Front Side */}
                        <div className="medium-card-front">
                            {post.image ? (
                                <img src={post.image} alt={post.title} className="medium-card-image" />
                            ) : (
                                <div className="medium-card-image" style={{ background: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <span style={{ fontSize: '3rem', color: '#ccc' }}>M</span>
                                </div>
                            )}
                            <div className="medium-card-content">
                                <h3 className="medium-card-title">{post.title}</h3>
                                <small className="text--secondary">{new Date(post.pubDate).toLocaleDateString()}</small>
                            </div>
                        </div>

                        {/* Back Side */}
                        <div className="medium-card-back">
                            <p className="medium-card-description">{post.description}</p>
                            <a href={post.link} target="_blank" rel="noopener noreferrer" className="medium-card-link">
                                Read on Medium
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MediumCards;
