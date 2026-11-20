import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const PortfolioModeContext = createContext();

const STORAGE_KEY = 'rahul_portfolio_view_mode';

export function PortfolioModeProvider({ children }) {
  const [viewMode, setViewModeState] = useState(() => {
    try {
      // Check query param first
      const params = new URLSearchParams(window.location.search);
      const queryMode = params.get('mode');
      if (queryMode === 'spiderverse' || queryMode === 'editorial') {
        return queryMode;
      }
      // Check localStorage
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'spiderverse' || saved === 'editorial') {
        return saved;
      }
      return 'editorial'; // Default client view
    } catch {
      return 'editorial';
    }
  });

  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, viewMode);
      document.documentElement.setAttribute('data-portfolio-mode', viewMode);
    } catch {}
  }, [viewMode]);

  const switchToSpiderVerse = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setViewModeState('spiderverse');
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    }, 400);
  }, []);

  const switchToEditorial = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setViewModeState('editorial');
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    }, 400);
  }, []);

  return (
    <PortfolioModeContext.Provider
      value={{
        viewMode,
        isEditorial: viewMode === 'editorial',
        isSpiderVerse: viewMode === 'spiderverse',
        switchToSpiderVerse,
        switchToEditorial,
        isTransitioning
      }}
    >
      {children}
    </PortfolioModeContext.Provider>
  );
}

export function usePortfolioMode() {
  const context = useContext(PortfolioModeContext);
  if (!context) {
    throw new Error('usePortfolioMode must be used within a PortfolioModeProvider');
  }
  return context;
}
