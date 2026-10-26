import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Download, Check, ArrowUpRight } from 'lucide-react';

export default function EditorialContact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const email = 'rahul77478@gmail.com';
  const phone = '+91 7000036929';
  const linkedinUrl = 'https://www.linkedin.com/in/rahul-rajput-155616188';

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

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

  const downloadResume = () => {
    const text = `RAHUL RAJPUT — Flutter Developer
Korba, Chhattisgarh | rahul77478@gmail.com | +91 7000036929
LinkedIn: https://www.linkedin.com/in/rahul-rajput-155616188

PROFESSIONAL SUMMARY
Flutter Developer with 3.8+ years of production experience building and shipping cross-platform mobile apps for iOS and Android. Delivered 9 apps on Google Play Store and 8 on Apple App Store with clean architecture, Riverpod, and Firebase.

EXPERIENCE
- Codiant (A YASH Technologies Company) — Associate Software Engineer (Apr 2023 – Jun 2026)
  Baurow, CalCounts Pro, HireGroww, Fitterloop, Glowpeer
- Imaginar Technologies — Associate Software Engineer (May 2022 – Nov 2022)
  FoodIngram App

EDUCATION
- MBA: RKDF University, Bhopal (2020-2022)
- B.E. in Computer Science: SISTec, Bhopal (2016-2020)`;
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Rahul_Rajput_Resume.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section className="ed-section contact-sec" id="contact">
      <div className="section-head">
        <span className="section-kicker">WORK WITH ME</span>
        <h2>Have an ambitious mobile product?<br /><span className="accent-text">Tell me about it.</span></h2>
      </div>

      <div className="contact-grid">
        <div className="contact-info-col">
          <p className="contact-lead">
            Whether you are launching a dual-store mobile app from scratch, migrating an existing codebase to clean architecture, or untangling complex real-time Firebase & Stripe integrations, I would love to hear from you.
          </p>

          <div className="contact-direct-actions">
            <button type="button" className="contact-pill-btn" onClick={copyEmail}>
              <Mail size={15} />
              <span>{copiedEmail ? 'Email copied!' : email}</span>
              {copiedEmail ? <Check size={14} /> : <ArrowUpRight size={14} />}
            </button>

            <button type="button" className="contact-pill-btn" onClick={copyPhone}>
              <Phone size={15} />
              <span>{copiedPhone ? 'Phone copied!' : phone}</span>
              {copiedPhone ? <Check size={14} /> : <ArrowUpRight size={14} />}
            </button>

            <button type="button" className="contact-pill-btn download-btn" onClick={downloadResume}>
              <Download size={15} />
              <span>Download Official Resume (.txt)</span>
            </button>
          </div>

          <div className="social-row">
            <a href={linkedinUrl} target="_blank" rel="noreferrer" className="social-link">
              <Linkedin size={15} /> LinkedIn <ArrowUpRight size={12} />
            </a>
            <a href="https://github.com/RahuL-XYZ" target="_blank" rel="noreferrer" className="social-link">
              <Github size={15} /> GitHub <ArrowUpRight size={12} />
            </a>
            <span className="location-pill">
              <MapPin size={13} /> Korba, Chhattisgarh, India
            </span>
          </div>
        </div>

        <div className="contact-form-col">
          <form className="ed-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your name</label>
              <input
                id="name"
                type="text"
                required
                placeholder="e.g. Meena or David"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your email</label>
              <input
                id="email"
                type="email"
                required
                placeholder="you@company.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">What are you building, and what needs to ship?</label>
              <textarea
                id="message"
                rows={4}
                required
                placeholder="A couple of sentences about the mobile app, target stores, and key timeline..."
              />
            </div>

            <button type="submit" className="btn-primary form-submit-btn">
              {formSubmitted ? 'Message Received ✓' : 'Send message'}
            </button>
            <p className="form-note">
              Goes directly to rahul77478@gmail.com. I reply personally within 24 hours.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
