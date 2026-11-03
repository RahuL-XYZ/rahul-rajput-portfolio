import React, { useState } from 'react';
import { Mail, Linkedin, Github, FileText, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import GlitchText from '../ui/GlitchText';
import MagneticButton from '../ui/MagneticButton';
import { useUniverse } from '../../context/UniverseContext';
import '../../styles/contact.css';

export default function ContactSection({ onPlaySound }) {
  const { universe } = useUniverse();
  const isBatman = universe === 'batman';
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [feedback, setFeedback] = useState(null); // { type: 'success' | 'error', message: string }
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFeedback({ type: 'error', message: 'Please fill out your name, email, and message.' });
      if (onPlaySound) onPlaySound('glitch');
      return;
    }

    // Basic email pattern check
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setFeedback({ type: 'error', message: 'Please provide a valid email address.' });
      return;
    }

    setIsSubmitting(true);
    if (onPlaySound) onPlaySound('thwip');

    // Generate mailto link transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setFeedback({
        type: 'success',
        message: 'Message prepared. Opening your email client to send.'
      });
      const mailtoUrl = `mailto:rahulrajput.dev@gmail.com?subject=Mission%20Inquiry%20from%20${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`)}`;
      window.location.href = mailtoUrl;
    }, 600);
  };

  return (
    <section className="sv-contact-section" id="contact">
      <div className="sv-contact-inner">
        {/* Section Heading */}
        <div className="sv-section-header">
          <span className="sv-section-kicker">
            {isBatman ? 'WAYNETECH COMMS // BAT-SIGNAL UPLINK' : 'CHAPTER 06 // COMMS FREQUENCY'}
          </span>
          <GlitchText 
            text={isBatman ? 'THE CITY NEEDS GREAT DEVELOPERS.' : 'YOUR FRIENDLY NEIGHBORHOOD DEVELOPER IS AVAILABLE.'} 
            as="h2" 
            className="sv-section-title"
            glow={isBatman ? 'cyan' : 'red'}
          />
        </div>

        <div className="sv-contact-grid">
          {/* Left Column: Direct Comms Nodes */}
          <div className="sv-comms-column">
            <h3 className="sv-comms-headline">
              {isBatman ? 'DIRECT LINE & CONTACT.' : 'GET IN TOUCH.'}
            </h3>
            <p className="sv-comms-desc">
              Looking for a dedicated Flutter engineer to ship a dual-store mobile app, migrate an existing codebase to Clean Architecture, or integrate real-time Firebase and Stripe payments? Let's talk.
            </p>

            <div className="sv-contact-cards-list">
              <a 
                href="mailto:rahulrajput.dev@gmail.com" 
                className="contact-card-link"
              >
                <div className="contact-icon-box">
                  <Mail size={20} />
                </div>
                <div className="contact-info-block">
                  <span className="contact-label">DIRECT EMAIL COMMS</span>
                  <span className="contact-value">rahulrajput.dev@gmail.com</span>
                </div>
              </a>

              <a 
                href="https://linkedin.com/in/rahul-rajput-flutter" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-card-link blue"
              >
                <div className="contact-icon-box">
                  <Linkedin size={20} />
                </div>
                <div className="contact-info-block">
                  <span className="contact-label">PROFESSIONAL NETWORK</span>
                  <span className="contact-value">linkedin.com/in/rahul-rajput-flutter</span>
                </div>
              </a>

              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-card-link"
              >
                <div className="contact-icon-box">
                  <Github size={20} />
                </div>
                <div className="contact-info-block">
                  <span className="contact-label">CODE REPOSITORY</span>
                  <span className="contact-value">github.com/rahul-rajput-flutter</span>
                </div>
              </a>

              <a 
                href="/Rahul_Rajput_Resume.pdf" 
                download="Rahul_Rajput_Flutter_Developer_Resume.pdf"
                className="contact-card-link blue"
                title="Download Rahul Rajput's Official Resume PDF"
              >
                <div className="contact-icon-box">
                  <FileText size={20} />
                </div>
                <div className="contact-info-block">
                  <span className="contact-label">OFFICIAL DOSSIER</span>
                  <span className="contact-value">Download Rahul Rajput Resume (PDF)</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Transmission Form */}
          <div className="sv-form-column">
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 800, color: 'var(--sv-white)', marginBottom: '20px', letterSpacing: '0.04em' }}>
              TRANSMIT A MISSION BRIEF
            </h4>

            {feedback && (
              <div className={`form-feedback ${feedback.type}`}>
                {feedback.type === 'success' ? (
                  <CheckCircle2 size={16} style={{ display: 'inline', marginRight: '6px' }} />
                ) : (
                  <AlertCircle size={16} style={{ display: 'inline', marginRight: '6px' }} />
                )}
                <span>{feedback.message}</span>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-field-group">
                <label className="field-label" htmlFor="name">Your Name / Agency</label>
                <input
                  id="name"
                  type="text"
                  className="field-input"
                  placeholder={isBatman ? 'e.g. Bruce Wayne / Wayne Enterprises' : 'e.g. Peter Parker / Tech Lead'}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-field-group">
                <label className="field-label" htmlFor="email">Return Frequency (Email)</label>
                <input
                  id="email"
                  type="email"
                  className="field-input"
                  placeholder="e.g. contact@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-field-group">
                <label className="field-label" htmlFor="message">Mission Scope & Specifications</label>
                <textarea
                  id="message"
                  className="field-textarea"
                  placeholder="Describe your project, timeline, or engineering role..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <MagneticButton
                variant="primary"
                className="w-full"
                style={{ width: '100%' }}
              >
                <span>{isSubmitting ? 'TRANSMITTING...' : 'TRANSMIT MESSAGE'}</span>
                <Send size={15} />
              </MagneticButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

