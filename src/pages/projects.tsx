import React, { useState, useMemo } from 'react';
import Layout from '@theme/Layout';
import { projects, categories, techStacks } from '@site/src/data/projects';
import ProjectCard from '@site/src/components/Projects/ProjectCard';
import GitHubButton from '@site/src/components/Common/GitHubButton';

export default function ProjectsPage(): JSX.Element {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTech, setSelectedTech] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
      const matchesTech = selectedTech === 'all' || project.techStack.includes(selectedTech);
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           project.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesCategory && matchesTech && matchesSearch;
    });
  }, [selectedCategory, selectedTech, searchQuery]);

  return (
    <Layout
      title="Projects - Vijeta Priya"
      description="Explore my projects in competitive programming, web development, and technical documentation">
      <main className="projects-page">
        <div className="container">
          <div className="page-header">
            <h1 className="page-title">Projects</h1>
            <p className="page-description">
              A collection of my work across competitive programming, web development, and technical writing.
            </p>
          </div>

          <div className="filters-section">
            <div className="search-box">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>

            <div className="filter-controls">
              <div className="filter-group">
                <label>Category:</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="filter-select"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="filter-group">
                <label>Tech Stack:</label>
                <select
                  value={selectedTech}
                  onChange={(e) => setSelectedTech(e.target.value)}
                  className="filter-select"
                >
                  <option value="all">All Technologies</option>
                  {techStacks.map(tech => (
                    <option key={tech} value={tech}>
                      {tech}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="projects-results">
            <div className="results-header">
              <span className="results-count">
                {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} found
              </span>
            </div>

            {filteredProjects.length > 0 ? (
              <div className="projects-grid">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            ) : (
              <div className="no-results">
                <p>No projects found matching your criteria.</p>
                <GitHubButton 
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedTech('all');
                    setSearchQuery('');
                  }}
                  variant="primary"
                >
                  Clear Filters
                </GitHubButton>
              </div>
            )}
          </div>
        </div>
      </main>
    </Layout>
  );
}
