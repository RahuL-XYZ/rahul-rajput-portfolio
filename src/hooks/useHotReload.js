import { useState, useCallback } from 'react';

export function useHotReload() {
  const [isHotReloading, setIsHotReloading] = useState(false);
  const [reloadMessage, setReloadMessage] = useState(null);

  const triggerHotReload = useCallback(() => {
    setIsHotReloading(true);
    const ms = Math.floor(Math.random() * 40) + 70;
    setReloadMessage(`⚡ Flutter Engine: Reassembled live widgets in ${ms}ms`);

    // Optional subtle Web Audio synth chirp
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        const ctx = new AudioContext();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
        osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.12); // A5
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.14);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.15);
      }
    } catch {
      // Audio context might be restricted before user gesture
    }

    const timer = setTimeout(() => {
      setIsHotReloading(false);
    }, 450);

    const msgTimer = setTimeout(() => {
      setReloadMessage(null);
    }, 2800);

    return () => {
      clearTimeout(timer);
      clearTimeout(msgTimer);
    };
  }, []);

  return {
    isHotReloading,
    reloadMessage,
    triggerHotReload
  };
}
