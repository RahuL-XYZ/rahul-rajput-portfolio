import React from 'react';
import { useUniverse } from '../../context/UniverseContext';
import { useAudio } from '../../hooks/useAudio';
import './UniverseSwitcher.css';

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
      <div className="universe-switcher-bar" role="group" aria-label="Universe Mode Switcher">
        <button
          type="button"
          className={`universe-btn ${universe === 'spiderman' ? 'active spiderman' : ''}`}
          onClick={() => handleSelect('spiderman')}
          aria-pressed={universe === 'spiderman'}
          title="Switch to Spider-Verse Earth-616"
        >
          <span className="universe-icon">🕷️</span>
          <span className="universe-label">SPIDER-VERSE</span>
        </button>

        <button
          type="button"
          className={`universe-btn ${universe === 'batman' ? 'active batman' : ''}`}
          onClick={() => handleSelect('batman')}
          aria-pressed={universe === 'batman'}
          title="Switch to Gotham City / The Dark Knight"
        >
          <span className="universe-icon">🦇</span>
          <span className="universe-label">DARK KNIGHT</span>
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
