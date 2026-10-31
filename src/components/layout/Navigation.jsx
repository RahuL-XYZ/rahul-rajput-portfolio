import React, { useState, useEffect } from 'react';
import { Menu, X, ShieldAlert } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';
import SoundToggle from '../ui/SoundToggle';
import UniverseSwitcher from '../ui/UniverseSwitcher';
import { useUniverse } from '../../context/UniverseContext';
import '../../styles/navigation.css';

export default function Navigation({ activeSection, isMuted, onToggleAudio }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { universe } = useUniverse();
  const isBatman = universe === 'batman';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = isBatman ? [
    { label: 'Dossier', href: '#about' },
    { label: 'Arsenal', href: '#skills' },
    { label: 'Case Files', href: '#projects' },
    { label: 'Timeline', href: '#experience' },
    { label: 'Batcomputer', href: '#terminal' },
    { label: 'Bat-Signal', href: '#contact' },
  ] : [
    { label: 'Origin', href: '#about' },
    { label: 'Superpowers', href: '#skills' },
    { label: 'Missions', href: '#projects' },
    { label: 'Timeline', href: '#experience' },
    { label: 'Terminal', href: '#terminal' },
    { label: 'Comms', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`sv-navbar ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="sv-nav-inner">
        <a href="#hero" className="sv-nav-brand">
          <div className="sv-nav-spider-mark">
            {isBatman ? '🦇' : 'RR'}
          </div>
          <div className="sv-nav-brand-title">
            <span className="sv-nav-name">RAHUL RAJPUT</span>
            <span className="sv-nav-tag">
              {isBatman ? 'GOTHAM · FLUTTER ARCHITECT' : 'FLUTTER DEVELOPER'}
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <ul className={`sv-nav-links ${mobileMenuOpen ? 'is-open' : ''}`}>
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={`sv-nav-link ${activeSection === item.href.slice(1) ? 'active' : ''}`}
                onClick={handleLinkClick}
              >
                {item.label}
              </a>
            </li>
          ))}

          {/* Mobile-only switcher inside drawer */}
          <li className="mobile-only-switcher" style={{ marginTop: '16px' }}>
            <UniverseSwitcher />
          </li>
        </ul>

        {/* Right Actions */}
        <div className="sv-nav-actions">
          {/* Universe Mode Switcher Pill */}
          <div className="desktop-only-switcher">
            <UniverseSwitcher />
          </div>

          <SoundToggle isMuted={isMuted} onToggle={onToggleAudio} />
          
          <MagneticButton 
            href="#contact" 
            variant="primary" 
            className="sv-nav-cta-btn"
          >
            <span>{isBatman ? 'ACTIVATE SIGNAL' : 'DISCUSS MISSION'}</span>
          </MagneticButton>

          {/* Mobile Hamburger */}
          <button 
            className="sv-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
