import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function SoundToggle({ muted, setMuted }) {
  return (
    <button
      type="button"
      className="sound-toggle"
      onClick={() => setMuted(!muted)}
      title={muted ? 'Enable ambient soundscape' : 'Mute ambient soundscape'}
      aria-label={muted ? 'Enable sound' : 'Mute sound'}
    >
      {muted ? <VolumeX size={15} /> : <Volume2 size={15} />}
      <span>{muted ? 'AMBIENT OFF' : 'AMBIENT LIVE'}</span>
    </button>
  );
}
