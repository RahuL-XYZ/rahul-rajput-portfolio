import React from 'react';
import { ArrowLeft, Briefcase } from 'lucide-react';
import { usePortfolioMode } from '../../context/PortfolioModeContext';

export default function ReturnToEditorialBanner() {
  const { switchToEditorial } = usePortfolioMode();

  return (
    <button
      type="button"
      onClick={switchToEditorial}
      className="return-to-editorial-banner"
      title="Return to the client-facing Executive Portfolio"
      aria-label="Return to Executive Portfolio"
    >
      <ArrowLeft size={14} color="#00F5FF" />
      <Briefcase size={14} color="#00F5FF" />
      <span>Return to Executive Portfolio</span>
    </button>
  );
}
