import React from 'react';
import { MapPin, ArrowUpRight, Plus, Music2, Play, Volume2 } from 'lucide-react';
import FlutterLogo from '../common/FlutterLogo';
import AppIcon from '../common/AppIcon';
import SoundToggle from '../common/SoundToggle';
import { apps } from '../../data/apps';

export default function DesktopWidgets({ onOpenApp, onOpenSearch, muted, setMuted }) {
  return (
    <aside className="desktop-right">
      {/* Profile Card */}
      <div className="widget-card profile-widget">
        <div className="widget-head">
          <span>FLUTTER DEVELOPER CARD</span>
          <span className="widget-more">•••</span>
        </div>

        <div className="profile-main">
          <div className="profile-avatar">
            <span className="profile-initials">RR</span>
            <span className="profile-flutter-badge">
              <FlutterLogo size={12} />
            </span>
          </div>
          <div>
            <h3>Rahul Rajput</h3>
            <p>Flutter Developer</p>
            <span className="profile-location">
              <MapPin size={12} /> Korba, Chhattisgarh · Available
            </span>
          </div>
        </div>


        <div className="profile-tags">
          <span className="tag-primary">
            <FlutterLogo size={11} className="inline-flutter-icon" /> Flutter
          </span>
          <span>Dart</span>
          <span>Riverpod</span>
          <span>Firebase</span>
          <span>Stripe</span>
        </div>

        <button
          type="button"
          className="widget-action"
          onClick={() => onOpenApp('contact')}
        >
          Let’s Connect <ArrowUpRight size={14} />
        </button>
      </div>

      {/* Quick Access Apps Widget */}
      <div className="widget-card app-widget">
        <div className="widget-head">
          <span>QUICK WIDGETS</span>
          <button
            type="button"
            onClick={onOpenSearch}
            title="Browse all apps"
            aria-label="Open search"
          >
            <Plus size={14} />
          </button>
        </div>

        <div className="app-grid">
          {apps.slice(0, 6).map((a) => (
            <AppIcon key={a.id} app={a} onOpen={onOpenApp} />
          ))}
        </div>

        <button
          type="button"
          className="launchpad-link"
          onClick={onOpenSearch}
        >
          Launchpad (Ctrl + K) <ArrowUpRight size={13} />
        </button>
      </div>

      {/* Now Playing Widget */}
      <div className="widget-card now-widget">
        <div className="widget-head">
          <span>CODING SOUNDSCAPE</span>
          <Music2 size={14} />
        </div>

        <div className="now-content">
          <div className="album-art flutter-art">
            <div className="album-ring" />
            <div className="album-flutter-logo">
              <FlutterLogo size={18} />
            </div>
          </div>
          <div>
            <strong>Flutter Flow · Lofi Beats</strong>
            <span>Deep Work Soundtrack</span>
            <small>{muted ? 'Muted · Focus Mode' : 'Sound Live · Flutter Radio'}</small>
          </div>
          <button
            type="button"
            onClick={() => setMuted(!muted)}
            aria-label={muted ? 'Play soundscape' : 'Mute soundscape'}
            className="play-sound-btn"
          >
            {muted ? <Play size={15} /> : <Volume2 size={15} />}
          </button>
        </div>

        <div className="audio-progress">
          <span style={{ width: muted ? '18%' : '56%' }} />
        </div>

        <div className="audio-foot">
          <span>AMBIENT RUNTIME</span>
          <SoundToggle muted={muted} setMuted={setMuted} />
        </div>
      </div>
    </aside>
  );
}
