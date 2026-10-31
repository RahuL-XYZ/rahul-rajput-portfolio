import { useState, useEffect, useRef, useCallback } from 'react';

export function useAudio() {
  const [isMuted, setIsMuted] = useState(() => {
    try {
      return localStorage.getItem('spiderverse_muted') !== 'false';
    } catch {
      return true;
    }
  });

  const audioCtxRef = useRef(null);
  const ambientOsc1Ref = useRef(null);
  const ambientOsc2Ref = useRef(null);
  const ambientGainRef = useRef(null);
  const hasInteractedRef = useRef(false);

  // Initialize Web Audio Context safely on first user gesture
  const initAudio = useCallback(() => {
    if (audioCtxRef.current) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      audioCtxRef.current = new AudioCtx();
    } catch (e) {
      console.warn('Web Audio API not supported', e);
    }
  }, []);

  // Ambient synth drone
  const startAmbient = useCallback(() => {
    if (!audioCtxRef.current || isMuted) return;
    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
    if (ambientGainRef.current) return; // already running

    try {
      const ctx = audioCtxRef.current;
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.035, ctx.currentTime + 3);

      // Low frequency superhero atmospheric sub-bass drone (55Hz and 110Hz harmonic)
      const osc1 = ctx.createOscillator();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(55, ctx.currentTime);

      const osc2 = ctx.createOscillator();
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(110, ctx.currentTime);

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(160, ctx.currentTime);

      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc1.start();
      osc2.start();

      ambientOsc1Ref.current = osc1;
      ambientOsc2Ref.current = osc2;
      ambientGainRef.current = gain;
    } catch (e) {
      console.warn('Failed to start ambient audio', e);
    }
  }, [isMuted]);

  const stopAmbient = useCallback(() => {
    try {
      if (ambientGainRef.current && audioCtxRef.current) {
        const ctx = audioCtxRef.current;
        ambientGainRef.current.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.8);
        setTimeout(() => {
          ambientOsc1Ref.current?.stop();
          ambientOsc2Ref.current?.stop();
          ambientOsc1Ref.current?.disconnect();
          ambientOsc2Ref.current?.disconnect();
          ambientGainRef.current?.disconnect();
          ambientOsc1Ref.current = null;
          ambientOsc2Ref.current = null;
          ambientGainRef.current = null;
        }, 900);
      }
    } catch (e) {
      console.warn('Failed to stop ambient audio', e);
    }
  }, []);

  const toggleMute = useCallback(() => {
    setIsMuted(prev => {
      const next = !prev;
      try {
        localStorage.setItem('spiderverse_muted', String(next));
      } catch {}

      if (!hasInteractedRef.current) {
        hasInteractedRef.current = true;
        initAudio();
      }

      return next;
    });
  }, [initAudio]);

  useEffect(() => {
    if (!isMuted && hasInteractedRef.current) {
      startAmbient();
    } else {
      stopAmbient();
    }
  }, [isMuted, startAmbient, stopAmbient]);

  // Handle visibility change (pause audio when tab hidden)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (audioCtxRef.current?.state === 'running') {
          audioCtxRef.current.suspend();
        }
      } else {
        if (!isMuted && audioCtxRef.current?.state === 'suspended') {
          audioCtxRef.current.resume();
        }
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [isMuted]);

  // Sound effects: Web-thwip, Glitch click, Hover hum
  const playSound = useCallback((type = 'click') => {
    if (isMuted) return;
    initAudio();
    if (!audioCtxRef.current) return;
    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }

    try {
      const ctx = audioCtxRef.current;
      const gain = ctx.createGain();
      gain.connect(ctx.destination);

      if (type === 'click') {
        const osc = ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.08);

        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);

        osc.connect(gain);
        osc.start();
        osc.stop(ctx.currentTime + 0.08);
      } else if (type === 'thwip') {
        // Spider-web release sound (fast pitch sweep)
        const osc = ctx.createOscillator();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(1400, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(320, ctx.currentTime + 0.14);

        const filter = ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(800, ctx.currentTime);

        gain.gain.setValueAtTime(0.06, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.14);

        osc.connect(filter);
        filter.connect(gain);
        osc.start();
        osc.stop(ctx.currentTime + 0.14);
      } else if (type === 'thunder') {
        // Deep Gotham thunder rumble
        const osc = ctx.createOscillator();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(80, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(30, ctx.currentTime + 0.6);

        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(140, ctx.currentTime);

        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.6);

        osc.connect(filter);
        filter.connect(gain);
        osc.start();
        osc.stop(ctx.currentTime + 0.6);
      } else if (type === 'glitch') {
        // High tech glitch chirp
        const osc = ctx.createOscillator();
        osc.type = 'square';
        osc.frequency.setValueAtTime(1200, ctx.currentTime);
        osc.frequency.setValueAtTime(600, ctx.currentTime + 0.03);
        osc.frequency.setValueAtTime(1800, ctx.currentTime + 0.06);

        gain.gain.setValueAtTime(0.04, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);

        osc.connect(gain);
        osc.start();
        osc.stop(ctx.currentTime + 0.1);
      }
    } catch {}
  }, [isMuted, initAudio]);

  return {
    isMuted,
    toggleMute,
    playSound
  };
}

