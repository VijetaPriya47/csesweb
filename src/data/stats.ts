export interface Stats {
  title: string;
  value: string | number;
  description: string;
  icon?: string;
}

export const stats: Stats[] = [
  {
    title: 'Codeforces Rating',
    value: '1423+',
    description: 'Specialist Rating',
    icon: '🏆'
  },
  {
    title: 'Problems Solved',
    value: '100+',
    description: 'Competitive Programming',
    icon: '💻'
  },
  {
    title: 'Video Editorials',
    value: '50+',
    description: 'Problem-solving Content',
    icon: '🎥'
  },
  {
    title: 'Articles',
    value: '2',
    description: 'Medium Publications',
    icon: '📝'
  },
  {
    title: 'Meta Hacker Cup',
    value: '332',
    description: 'AIR Rank 2024',
    icon: '🥇'
  },
  {
    title: 'Professional Programs',
    value: '4',
    description: 'Internships & Scholarships',
    icon: '🎓'
  }
];

export const githubStats = {
  contributions: 150, // Mock data - can be replaced with actual GitHub API
  streak: 7,
  repositories: 8,
  stars: 12
};
