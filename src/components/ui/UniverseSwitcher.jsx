import React from 'react';
import { useUniverse } from '../../context/UniverseContext';
import { useAudio } from '../../hooks/useAudio';
import './UniverseSwitcher.css';

// Sleek Spider Vector Glyph
function SpiderIcon() {
  return (
    <svg 
      className="universe-svg-icon spider-svg" 
      viewBox="0 0 24 24" 
      width="18" 
      height="18" 
      fill="currentColor"
      aria-hidden="true"
    >
      {/* Spider Head & Body */}
      <circle cx="12" cy="7" r="2.2" />
      <ellipse cx="12" cy="13.5" rx="3.2" ry="4.5" />
      {/* Upper Legs */}
      <path d="M10 7 C 7 3, 4 4, 3 8" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <path d="M14 7 C 17 3, 20 4, 21 8" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      {/* Mid Upper Legs */}
      <path d="M9.5 10 C 6 8, 3 10, 2 14" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <path d="M14.5 10 C 18 8, 21 10, 22 14" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      {/* Mid Lower Legs */}
      <path d="M9.5 14 C 6 15, 4 18, 4 22" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <path d="M14.5 14 C 18 15, 20 18, 20 22" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      {/* Bottom Legs */}
      <path d="M10.5 17 C 8 19, 7 21, 6.5 23" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <path d="M13.5 17 C 16 19, 17 21, 17.5 23" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" />
    </svg>
  );
}

// Sleek Bat Silhouette Glyph
function BatIcon() {
  return (
    <svg 
      className="universe-svg-icon bat-svg" 
      viewBox="0 0 24 24" 
      width="18" 
      height="18" 
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 7.2 L13.4 4.5 L14.5 7 C18 6 22 8.5 23.8 12.5 C21.5 13.5 19.5 15.5 17 14 C15 16.5 13.5 17 12 18 C10.5 17 9 16.5 7 14 C4.5 15.5 2.5 13.5 0.2 12.5 C2 8.5 6 6 9.5 7 L10.6 4.5 L12 7.2 Z" />
    </svg>
  );
}

export default function UniverseSwitcher() {
  const { universe, toggleUniverse, isRifting } = useUniverse();
  const { playSound } = useAudio();

  const handleSelect = (targetUniverse) => {
    if (targetUniverse === universe) return;
    if (targetUniverse === 'batman') {
      playSound('thunder');
    } else {
      playSound('thwip');
    }
    toggleUniverse(targetUniverse);
  };

  return (
    <>
      <div className="universe-switcher-bar" role="group" aria-label="Universe Switcher">
        <button
          type="button"
          className={`universe-btn ${universe === 'spiderman' ? 'active spiderman' : ''}`}
          onClick={() => handleSelect('spiderman')}
          aria-pressed={universe === 'spiderman'}
          aria-label="Spider-Verse Mode"
          title="Switch to Spider-Verse (Earth-616)"
        >
          <SpiderIcon />
        </button>

        <button
          type="button"
          className={`universe-btn ${universe === 'batman' ? 'active batman' : ''}`}
          onClick={() => handleSelect('batman')}
          aria-pressed={universe === 'batman'}
          aria-label="Dark Knight Batman Mode"
          title="Switch to Gotham City (The Dark Knight)"
        >
          <BatIcon />
        </button>
      </div>

      {isRifting && (
        <div className="dimensional-rift-overlay" aria-live="assertive">
          <div className="rift-lightning" />
          <div className="rift-text">
            {universe === 'batman' ? 'BREACHING GOTHAM SECTOR' : 'ACCESSING EARTH-616'}
          </div>
          <div className="rift-sub">
            {universe === 'batman' ? '/// INITIALIZING WAYNETECH BATCOMPUTER ///' : '/// SYNCING MULTIVERSE DIMENSION ///'}
          </div>
        </div>
      )}
    </>
  );
}
