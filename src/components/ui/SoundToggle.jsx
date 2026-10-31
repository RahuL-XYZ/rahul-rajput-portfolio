import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import './SoundToggle.css';

export default function SoundToggle({ isMuted, onToggle }) {
  return (
    <button
      className={`sv-sound-toggle ${isMuted ? 'is-muted' : 'is-playing'}`}
      onClick={onToggle}
      aria-label={isMuted ? 'Unmute ambient audio' : 'Mute ambient audio'}
      title={isMuted ? 'Enable Superhero Ambient Audio' : 'Mute Audio'}
    >
      {isMuted ? (
        <VolumeX size={18} className="sv-sound-icon" />
      ) : (
        <>
          <Volume2 size={18} className="sv-sound-icon" />
          <span className="sv-sound-waves">
            <span className="wave-bar bar-1" />
            <span className="wave-bar bar-2" />
            <span className="wave-bar bar-3" />
          </span>
        </>
      )}
      <span className="sv-sound-label">{isMuted ? 'AUDIO OFF' : 'AUDIO ON'}</span>
    </button>
  );
}

