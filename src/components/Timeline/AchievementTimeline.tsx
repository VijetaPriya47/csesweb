import React, { useState } from 'react';
import { achievements, achievementCategories } from '@site/src/data/achievements';

export default function AchievementTimeline() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Filter achievements based on selected category
  const filteredAchievements = selectedCategory === 'all' 
    ? achievements 
    : achievements.filter(achievement => achievement.categories.includes(selectedCategory as any));

  // Sort by date (newest first)
  const sortedAchievements = [...filteredAchievements].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Separate experience and achievements
  const experienceItems = sortedAchievements.filter(item => item.type === 'experience');
  const achievementItems = sortedAchievements.filter(item => item.type !== 'experience');

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short',
      day: 'numeric'
    });
  };

  const getDateRange = (startDate: string, endDate?: string) => {
    const start = formatDate(startDate);
    if (endDate) {
      const end = formatDate(endDate);
      return `${start} - ${end}`;
    }
    return start;
  };

  return (
    <section className="timeline-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Experience & Achievements</h2>
          <p className="section-description">
            My professional journey and notable accomplishments in competitive programming and beyond.
          </p>
        </div>

        {/* Category Filter */}
        <div className="category-filter">
          {achievementCategories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="timeline-content">
          {/* Experience Section */}
          {selectedCategory === 'all' || selectedCategory === 'experience' ? (
            <div className="experience-section">
              <h3 className="section-subtitle">Experience</h3>
              <div className="experience-timeline">
                {experienceItems.map((item, index) => (
                  <div key={item.id} className="experience-item">
                    <div className="experience-header">
                      <h4 className="experience-title">{item.title}</h4>
                      <div className="experience-meta">
                        <span className="company">{item.company}</span>
                        <span className="location">{item.location}</span>
                        <span className="date">{getDateRange(item.date, item.endDate)}</span>
                      </div>
                    </div>
                    <p className="experience-description">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          {/* Achievements Section */}
          {selectedCategory === 'all' || selectedCategory !== 'experience' ? (
            <div className="achievements-section">
              <h3 className="section-subtitle">Achievements</h3>
              <div className="achievements-grid">
                {achievementItems.map((item, index) => (
                  <div key={item.id} className="achievement-card">
                    <div className="achievement-header">
                      <h4 className="achievement-title">{item.title}</h4>
                      <span className="achievement-date">{formatDate(item.date)}</span>
                    </div>
                    <p className="achievement-description">{item.description}</p>
                    {item.url && (
                      <a href={item.url} target="_blank" rel="noopener noreferrer" className="achievement-link">
                        View Details →
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          {/* No items message */}
          {sortedAchievements.length === 0 && (
            <div className="no-items">
              <p>No items found for the selected category.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
