import React, { useEffect, useState } from 'react';

interface GitHubStatsData {
  contributions: number;
  repositories: number;
  followers: number;
  following: number;
}

export default function GitHubStats() {
  const [stats, setStats] = useState<GitHubStatsData>({
    contributions: 150, // Fallback values
    repositories: 8,
    followers: 25,
    following: 15
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // GitHub API is rate-limited, so we'll use mock data for now
    // In production, you could use GitHub API with authentication
    const fetchGitHubStats = async () => {
      try {
        // Mock API call - replace with actual GitHub API
        setTimeout(() => {
          setStats({
            contributions: 180,
            repositories: 12,
            followers: 45,
            following: 20
          });
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Failed to fetch GitHub stats:', error);
        setLoading(false);
      }
    };

    fetchGitHubStats();
  }, []);

  if (loading) {
    return (
      <div className="github-stats-loading">
        <div className="loading-spinner"></div>
        <p>Loading GitHub stats...</p>
      </div>
    );
  }

  return (
    <section className="github-stats-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">GitHub Activity</h2>
          <p className="section-description">
            My coding activity and contributions on GitHub
          </p>
        </div>
        
        <div className="github-stats-grid">
          <div className="github-stat-card">
            <div className="stat-icon">📊</div>
            <div className="stat-number">{stats.contributions}</div>
            <div className="stat-label">Contributions</div>
            <div className="stat-period">This year</div>
          </div>
          
          <div className="github-stat-card">
            <div className="stat-icon">📁</div>
            <div className="stat-number">{stats.repositories}</div>
            <div className="stat-label">Repositories</div>
            <div className="stat-period">Public</div>
          </div>
          
          <div className="github-stat-card">
            <div className="stat-icon">👥</div>
            <div className="stat-number">{stats.followers}</div>
            <div className="stat-label">Followers</div>
            <div className="stat-period">Total</div>
          </div>
          
          <div className="github-stat-card">
            <div className="stat-icon">👤</div>
            <div className="stat-number">{stats.following}</div>
            <div className="stat-label">Following</div>
            <div className="stat-period">Total</div>
          </div>
        </div>

        <div className="github-contribution-graph">
          <h3>Contribution Activity</h3>
          <div className="contribution-grid">
            {/* Simple contribution graph visualization */}
            {Array.from({ length: 52 }, (_, week) => (
              <div key={week} className="contribution-week">
                {Array.from({ length: 7 }, (_, day) => {
                  const contributions = Math.floor(Math.random() * 5);
                  return (
                    <div 
                      key={day} 
                      className={`contribution-day level-${contributions}`}
                      title={`${contributions} contributions`}
                    />
                  );
                })}
              </div>
            ))}
          </div>
          <div className="contribution-legend">
            <span>Less</span>
            <div className="legend-levels">
              <div className="contribution-day level-0"></div>
              <div className="contribution-day level-1"></div>
              <div className="contribution-day level-2"></div>
              <div className="contribution-day level-3"></div>
              <div className="contribution-day level-4"></div>
            </div>
            <span>More</span>
          </div>
        </div>
      </div>
    </section>
  );
}
