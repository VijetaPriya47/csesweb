import React from 'react';
import { Achievement } from '@site/src/data/achievements';

interface TimelineItemProps {
  achievement: Achievement;
  isLeft: boolean;
}

export default function TimelineItem({ achievement, isLeft }: TimelineItemProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long'
    });
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'competition': return '🏆';
      case 'scholarship': return '🎓';
      case 'program': return achievement.categories.includes('professional') ? '💼' : '📚';
      case 'ranking': return '⭐';
      case 'article': return '📝';
      default: return '🎯';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'competition': return '#0366d6';
      case 'scholarship': return '#28a745';
      case 'program': return achievement.categories.includes('professional') ? '#dc3545' : '#6f42c1';
      case 'ranking': return '#fd7e14';
      case 'article': return '#20c997';
      default: return '#6c757d';
    }
  };

  return (
    <div className={`timeline-item ${isLeft ? 'timeline-left' : 'timeline-right'}`}>


      <div className="timeline-content">
        <div className="timeline-header">
          <span
            className="timeline-icon"
            style={{ backgroundColor: getTypeColor(achievement.type) }}
          >
            {getTypeIcon(achievement.type)}
          </span>
          <div className="timeline-meta">
            <span className="timeline-date">{formatDate(achievement.date)}</span>
            <span className="timeline-category">{achievement.categories[0]}</span>
          </div>
        </div>
        <h3 className="timeline-title">{achievement.title}</h3>
        <p className="timeline-description">{achievement.description}</p>
        {achievement.url && (
          <a
            href={achievement.url}
            className="timeline-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Details →
          </a>
        )}
        {achievement.featured && (
          <span className="timeline-featured">Featured</span>
        )}
      </div>
    </div>
  );
}
