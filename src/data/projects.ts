export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  techStack: string[];
  category: 'web' | 'mobile' | 'competitive-programming' | 'documentation' | 'other';
  timeline: {
    startDate: string;
    endDate?: string;
  };
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'cses-solutions',
    title: 'CSES Solutions',
    description: 'A comprehensive collection of solutions to CSES (Code Submission Evaluation System) problems. This project includes detailed explanations, multiple approaches, and optimized solutions for various algorithmic problems including Dynamic Programming, Graph Algorithms, Sorting, and Mathematics.',
    shortDescription: 'Comprehensive solutions to CSES competitive programming problems with detailed explanations and multiple approaches.',
    image: '/img/cses-solutions.png',
    githubUrl: 'https://github.com/VijetaPriya47/csesweb',
    liveUrl: 'https://vijetapriya47.github.io/csesweb/docs/cses/intro',
    techStack: ['C++', 'Python', 'Algorithms', 'Data Structures', 'Markdown'],
    category: 'competitive-programming',
    timeline: {
      startDate: '2024-01-01',
      endDate: '2024-12-31'
    },
    featured: true
  },
  {
    id: 'portfolio-website',
    title: 'Personal Portfolio Website',
    description: 'A modern, responsive portfolio website built with Docusaurus showcasing my projects, achievements, and technical skills. Features GitHub-style design, dark/light theme toggle, and interactive project cards.',
    shortDescription: 'Modern portfolio website with GitHub-style design and interactive features.',
    image: '/img/portfolio.png',
    githubUrl: 'https://github.com/VijetaPriya47/csesweb',
    liveUrl: 'https://vijetapriya47.github.io/csesweb',
    techStack: ['React', 'TypeScript', 'Docusaurus', 'CSS', 'GitHub Pages'],
    category: 'web',
    timeline: {
      startDate: '2024-12-01'
    },
    featured: true
  },
  {
    id: 'competitive-programming',
    title: 'Competitive Programming Achievements',
    description: 'Collection of competitive programming achievements including Meta Hacker Cup 2024 Round 1 (AIR 332, World Rank 1594), Codeforces Specialist (1423+ rating), and various contest rankings.',
    shortDescription: 'Competitive programming achievements and contest rankings.',
    techStack: ['C++', 'Algorithms', 'Data Structures', 'Problem Solving'],
    category: 'competitive-programming',
    timeline: {
      startDate: '2022-01-01'
    },
    featured: true
  },
  {
    id: 'technical-documentation',
    title: 'Technical Documentation',
    description: 'Medium articles showcasing technical documentation skills and knowledge sharing in software development and competitive programming.',
    shortDescription: 'Technical articles and documentation on Medium platform.',
    techStack: ['Technical Writing', 'Markdown', 'Documentation'],
    category: 'documentation',
    timeline: {
      startDate: '2023-01-01'
    },
    featured: false
  }
];

export const techStacks = [
  'C++',
  'Python',
  'React',
  'TypeScript',
  'JavaScript',
  'Algorithms',
  'Data Structures',
  'Competitive Programming',
  'Technical Writing'
];

export const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'competitive-programming', label: 'Competitive Programming' },
  { id: 'web', label: 'Web Development' },
  { id: 'documentation', label: 'Documentation' },
  { id: 'other', label: 'Other' }
];
