export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  endDate?: string;
  type: 'experience' | 'achievement' | 'competition' | 'scholarship' | 'program' | 'ranking' | 'article';
  categories: ('experience' | 'achievement' | 'competitive-programming' | 'academic' | 'professional' | 'documentation')[];
  url?: string;
  featured: boolean;
  company?: string;
  location?: string;
  role?: string;
}

export const achievements: Achievement[] = [
  // Experience Section
  {
    id: 'ask-senior-mentor',
    title: 'Senior Mentor',
    description: 'Created 50+ video editorials on problem-solving and algorithm design, applying analytical and problem-solving skills, team collaboration, to improve engagement. Made Videos on Editorials of Bit Manipulation and Interactive Problems on Codeforces and Leetcode.',
    date: '2024-08-02',
    endDate: '2025-01-01',
    type: 'experience',
    categories: ['experience'],
    featured: true,
    company: 'Ask Senior',
    location: 'Remote',
    role: 'Mentor'
  },
  {
    id: 'jubilant-ingrevia-intern',
    title: 'Summer Intern',
    description: 'Under Surge Initiative, Worked on improving the efficiency of the Column, by AI-Assisted Distillation Column Design Advisor using supervised regression models.',
    date: '2025-06-01',
    endDate: '2025-08-01',
    type: 'experience',
    categories: ['experience'],
    featured: true,
    company: 'Jubilant Ingrevia',
    location: 'Gajraula, U P',
    role: 'Summer Intern'
  },
  
  // Achievements Section
  {
    id: 'meta-hacker-cup-2024',
    title: 'Meta Hacker Cup 2024 Round 1',
    description: 'Ranked 332 AIR and 1594 World Rank in Meta Hacker Cup 2024 in Round 1.',
    date: '2024-10-01',
    type: 'achievement',
    categories: ['competitive-programming', 'achievement'],
    featured: true
  },
  {
    id: 'shubra-kar-lift-2025',
    title: 'Shubra Kar LiFT Scholar 2025',
    description: 'Shubra Kar LiFT[Linux Foundational Training] Scholar 2025',
    date: '2025-01-01',
    type: 'scholarship',
    categories: ['academic'],
    featured: true
  },
  {
    id: 'mckinsey-forward-2025',
    title: 'McKinsey Forward Learners Program 2025',
    description: 'McKinsey Forward Learners Program\'25',
    date: '2025-01-01',
    type: 'program',
    categories: ['professional', 'academic'],
    featured: true
  },
  {
    id: 'codeforces-specialist',
    title: 'Codeforces Specialist',
    description: 'Codeforces : Specialist (1423+) with 100+ problems.',
    date: '2024-06-01',
    type: 'ranking',
    categories: ['competitive-programming', 'achievement'],
    url: 'https://codeforces.com/profile/vijetapriya',
    featured: true
  },
  {
    id: 'medium-articles',
    title: 'Medium Articles',
    description: '2 Medium Articles to show technical Documentation skills.',
    date: '2024-08-01',
    type: 'article',
    categories: ['documentation'],
    featured: true
  },
  {
    id: 'ffe-scholar-2022-2026',
    title: 'FFE Scholar 2022-2026',
    description: 'FFE Scholar 2022-2026',
    date: '2022-01-01',
    type: 'scholarship',
    categories: ['academic'],
    featured: true
  },
  {
    id: 'codeforces-round-984',
    title: 'Codeforces Round 984 (Div. 3)',
    description: 'Secured 1663 in Codeforces Round 984 (Div. 3)',
    date: '2024-05-15',
    type: 'competition',
    categories: ['competitive-programming'],
    featured: false
  },
  {
    id: 'codeforces-round-1008',
    title: 'Codeforces Round 1008 (Div. 2)',
    description: 'Secured 2522 in Codeforces Round 1008 (Div. 2)',
    date: '2024-06-20',
    type: 'competition',
    categories: ['competitive-programming'],
    featured: false
  },
  {
    id: 'codeforces-round-970',
    title: 'Codeforces Round 970 (Div. 3)',
    description: 'Secured 2479 in Codeforces Round 970 (Div. 3)',
    date: '2024-07-10',
    type: 'competition',
    categories: ['competitive-programming'],
    featured: false
  }
];

export const achievementCategories = [
  { id: 'all', label: 'All' },
  { id: 'experience', label: 'Experience' },
  { id: 'achievement', label: 'Achievements' },
  { id: 'competitive-programming', label: 'Competitive Programming' },
  { id: 'academic', label: 'Academic' },
  { id: 'professional', label: 'Professional' },
  { id: 'documentation', label: 'Documentation' }
];
