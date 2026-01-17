import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import TerminalHero from '@site/src/components/TerminalHero';
import PortfolioSections from '@site/src/components/PortfolioSections';

import Link from '@docusaurus/Link';

export default function Home(): ReactNode {
  return (
    <Layout
      title="Vijeta Priya - Backend & Distributed Systems"
      description="Portfolio of Vijeta Priya - Backend & Distributed Systems Engineer">
      <main>
        <TerminalHero />

        <div className="read-blog-container">
          <Link to="/blog" className="read-blog-btn">
            Read my Blog ➜
          </Link>
        </div>

        <PortfolioSections />
      </main>
    </Layout>
  );
}
