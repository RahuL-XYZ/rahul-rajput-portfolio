import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';
import SoundToggle from '../ui/SoundToggle';
import '../../styles/navigation.css';

export default function Navigation({ activeSection, isMuted, onToggleAudio }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
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
          <div className="sv-nav-spider-mark">RR</div>
          <div className="sv-nav-brand-title">
            <span className="sv-nav-name">RAHUL RAJPUT</span>
            <span className="sv-nav-tag">FLUTTER DEVELOPER</span>
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
        </ul>

        {/* Right Actions */}
        <div className="sv-nav-actions">
          <SoundToggle isMuted={isMuted} onToggle={onToggleAudio} />
          
          <MagneticButton 
            href="#contact" 
            variant="primary" 
            className="sv-nav-cta-btn"
          >
            <span>DISCUSS MISSION</span>
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

