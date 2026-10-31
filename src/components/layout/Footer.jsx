import React from 'react';
import { ArrowUp, Heart, Terminal } from 'lucide-react';
import '../../styles/footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="sv-footer">
      <div className="sv-footer-web-line" />
      
      <div className="sv-footer-inner">
        <div className="sv-footer-left">
          <span className="sv-footer-quote">
            "With great code comes great applications."
          </span>
          <p className="sv-footer-copy">
            Designed & Engineered with React, Three.js, GSAP & Flutter passion.
          </p>
        </div>

        <div className="sv-footer-center">
          <span className="sv-badge-universe">EARTH-616 // RAHUL RAJPUT PORTFOLIO</span>
        </div>

        <div className="sv-footer-right">
          <button 
            onClick={scrollToTop} 
            className="sv-back-to-top"
            aria-label="Back to top"
          >
            <span>TOP OF THE CITY</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}

