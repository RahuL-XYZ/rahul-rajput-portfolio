import React, { createContext, useContext, useState, useEffect } from 'react';

const UniverseContext = createContext();

export function UniverseProvider({ children }) {
  const [universe, setUniverseState] = useState(() => {
    try {
      return localStorage.getItem('rahul_universe') || 'spiderman';
    } catch {
      return 'spiderman';
    }
  });

  const [isRifting, setIsRifting] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-universe', universe);
    try {
      localStorage.setItem('rahul_universe', universe);
    } catch {}
  }, [universe]);

  const toggleUniverse = (targetUniverse) => {
    const next = targetUniverse || (universe === 'spiderman' ? 'batman' : 'spiderman');
    if (next === universe) return;

    // Trigger dimensional rift transition
    setIsRifting(true);
    setTimeout(() => {
      setUniverseState(next);
      setTimeout(() => {
        setIsRifting(false);
      }, 450);
    }, 350);
  };

  return (
    <UniverseContext.Provider value={{ universe, setUniverse: setUniverseState, toggleUniverse, isRifting }}>
      {children}
    </UniverseContext.Provider>
  );
}

export function useUniverse() {
  const context = useContext(UniverseContext);
  if (!context) {
    throw new Error('useUniverse must be used within a UniverseProvider');
  }
  return context;
}

