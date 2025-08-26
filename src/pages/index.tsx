import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import HeroSection from '@site/src/components/Portfolio/HeroSection';
import StatsSection from '@site/src/components/Portfolio/StatsSection';
import FeaturedProjects from '@site/src/components/Portfolio/FeaturedProjects';
import AchievementTimeline from '@site/src/components/Timeline/AchievementTimeline';
import GitHubStats from '@site/src/components/Portfolio/GitHubStats';

export default function Home(): ReactNode {
  return (
    <Layout
      title="Vijeta Priya - Software Engineer & Competitive Programmer"
      description="Portfolio of Vijeta Priya - Competitive Programming Specialist, Software Engineer, and CSES Solutions Contributor">
      <main>
        <HeroSection />
        <StatsSection />
        <FeaturedProjects />
        <AchievementTimeline />
        <GitHubStats />
      </main>
    </Layout>
  );
}
