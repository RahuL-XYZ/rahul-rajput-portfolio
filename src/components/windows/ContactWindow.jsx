import React, { useState } from 'react';
import { Send, Mail, Check, ArrowUpRight, Github, Linkedin, Phone, MapPin } from 'lucide-react';
import WindowFrame from '../common/WindowFrame';

export default function ContactWindow({ onClose, onMinimize }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const email = 'rahul77478@gmail.com';
  const phone = '+91 7000036929';
  const linkedinUrl = 'https://www.linkedin.com/in/rahul-rajput-155616188';

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  const copyPhone = async () => {
    try {
      await navigator.clipboard.writeText(phone);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } catch {
      window.location.href = `tel:${phone}`;
    }
  };

  return (
    <WindowFrame
      title="Contact — Rahul Rajput"
      badge="OPEN FOR OPPORTUNITIES"
      onClose={onClose}
      onMinimize={onMinimize}
    >
      <div className="contact-window">
        <div className="contact-visual">
          <div className="contact-center">
            <Send size={32} />
          </div>
          <span>FLUTTER DISPATCH</span>
        </div>

        <div className="contact-content">
          <span className="eyebrow">LOOKING FOR A FLUTTER DEVELOPER?</span>
          <h2>
            Let’s build your next<br />mobile product <em>together.</em>
          </h2>
          <p>
            With 3.8+ years of production experience, 9 apps published on the Google Play Store, and 8 on the Apple App Store, I’m ready to contribute to ambitious cross-platform mobile engineering teams.
          </p>

          <div className="contact-actions-list">
            {/* Email Button */}
            <button type="button" className="contact-email" onClick={copyEmail}>
              <div className="contact-action-info">
                <Mail size={16} />
                <span>{copiedEmail ? 'Email copied to clipboard!' : email}</span>
              </div>
              {copiedEmail ? <Check size={16} /> : <ArrowUpRight size={16} />}
            </button>

            {/* Phone Button */}
            <button type="button" className="contact-email" onClick={copyPhone}>
              <div className="contact-action-info">
                <Phone size={16} />
                <span>{copiedPhone ? 'Phone number copied!' : phone}</span>
              </div>
              {copiedPhone ? <Check size={16} /> : <ArrowUpRight size={16} />}
            </button>
          </div>

          <div className="social-links">
            <a href={linkedinUrl} target="_blank" rel="noreferrer">
              <Linkedin size={15} /> LinkedIn Profile <ArrowUpRight size={12} />
            </a>
            <a href="https://github.com/RahuL-XYZ" target="_blank" rel="noreferrer">
              <Github size={15} /> GitHub <ArrowUpRight size={12} />
            </a>
          </div>

          <div className="contact-location-tag">
            <MapPin size={13} />
            <span>Korba, Chhattisgarh – 495447, India</span>
          </div>
        </div>
      </div>
    </WindowFrame>
  );
}
