import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import TerminalHero from '@site/src/components/TerminalHero';
import PortfolioSections from '@site/src/components/PortfolioSections';

export default function Home(): ReactNode {
  return (
    <Layout
      title="Vijeta Priya - Backend & Distributed Systems"
      description="Portfolio of Vijeta Priya - Backend & Distributed Systems Engineer">
      <main>
        <TerminalHero />
        <PortfolioSections />
      </main>
    </Layout>
  );
}
