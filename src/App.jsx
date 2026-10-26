import React from 'react';
import { useTheme } from './hooks/useTheme';

import EditorialHeader from './components/editorial/EditorialHeader';
import EditorialHero from './components/editorial/EditorialHero';
import EditorialBelief from './components/editorial/EditorialBelief';
import EditorialWork from './components/editorial/EditorialWork';
import EditorialProof from './components/editorial/EditorialProof';
import EditorialPerson from './components/editorial/EditorialPerson';
import EditorialContact from './components/editorial/EditorialContact';
import EditorialFooter from './components/editorial/EditorialFooter';

export default function App() {
  const { theme, isDark, toggleTheme } = useTheme();

  return (
    <div className="editorial-shell" data-theme={theme}>
      <EditorialHeader
        theme={theme}
        isDark={isDark}
        onToggleTheme={toggleTheme}
      />

      <main id="content" className="editorial-main">
        <EditorialHero />
        <EditorialBelief />
        <EditorialWork />
        <EditorialProof />
        <EditorialPerson />
        <EditorialContact />
      </main>

      <EditorialFooter />
    </div>
  );
}