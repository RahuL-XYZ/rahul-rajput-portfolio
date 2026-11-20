import React from 'react';
import { useTheme } from '../../hooks/useTheme';

import EditorialHeader from './EditorialHeader';
import EditorialHero from './EditorialHero';
import HorizontalProjectsShowcase from './HorizontalProjectsShowcase';
import EditorialWebShowcase from './EditorialWebShowcase';
import EditorialProof from './EditorialProof';
import EditorialPerson from './EditorialPerson';
import EditorialContact from './EditorialContact';
import EditorialFooter from './EditorialFooter';

export default function EditorialPortfolio() {
  const { theme, isDark, toggleTheme } = useTheme();

  return (
    <div className="editorial-shell" data-theme={theme}>
      <a href="#hero" className="sv-skip-link">
        Skip to main content
      </a>

      <EditorialHeader
        theme={theme}
        isDark={isDark}
        onToggleTheme={toggleTheme}
      />

      <main id="content" className="editorial-main">
        <EditorialHero />
        <HorizontalProjectsShowcase />
        <EditorialWebShowcase />
        <EditorialProof />
        <EditorialPerson />
        <EditorialContact />
      </main>

      <EditorialFooter />
    </div>
  );
}
