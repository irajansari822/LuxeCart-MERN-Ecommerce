import React, { useEffect, useRef, useState } from 'react';


const Footer = () => {
  const footerRef = useRef(null);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = footerRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  const footerLinks = {
    Shop: ['New Arrivals', 'Best Sellers', 'Collections', 'Sale', 'Gift Cards'],
    Company: ['About Us', 'Careers', 'Press', 'Sustainability', 'Blog'],
    Support: ['Help Center', 'Shipping Info', 'Returns', 'Size Guide', 'Contact Us'],
  };

  return (
    <footer className="footer" ref={footerRef}>
      {/* Background elements */}
      <div className="footer-bg-grid" />
      <div className="footer-bg-shape footer-shape-1" />
      <div className="footer-bg-shape footer-shape-2" />

      <div className="footer-container">
        {/* Top: Newsletter */}
        <div className="footer-newsletter reveal">
          <div className="newsletter-content">
            <span className="newsletter-badge">
              <span className="newsletter-dot" />
              Stay in the Loop
            </span>
            <h2 className="newsletter-title">
              Get <span className="newsletter-accent">10% off</span> your first order
            </h2>
            <p className="newsletter-text">
              Join our newsletter for early access to drops, exclusive offers, and style inspiration.
            </p>
          </div>

          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <div className="newsletter-input-wrap">
              <svg className="newsletter-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="3" />
                <path d="m22 7-10 6L2 7" />
              </svg>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="newsletter-input"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary newsletter-btn">
              {subscribed ? (
                <>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Subscribed!
                </>
              ) : (
                <>
                  Subscribe
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Middle: Links */}
        <div className="footer-main reveal">
          {/* Brand column */}
          <div className="footer-brand">
            <a href="/" className="footer-logo">
              <span className="footer-logo-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" fill="url(#footGrad1)" />
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="url(#footGrad2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  <defs>
                    <linearGradient id="footGrad1" x1="2" y1="2" x2="22" y2="12">
                      <stop offset="0%" stopColor="#6366f1" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                    <linearGradient id="footGrad2" x1="2" y1="7" x2="22" y2="22">
                      <stop offset="0%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#6366f1" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className="footer-logo-text">
                Luxe<span className="footer-logo-accent">Cart</span>
              </span>
            </a>
            <p className="footer-brand-text">
              Curated collections and timeless pieces, delivered with care to your doorstep since 2020.
            </p>

            <div className="footer-socials">
              {[
                { name: 'Instagram', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg> },
                { name: 'Twitter', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg> },
                { name: 'Facebook', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg> },
                { name: 'Pinterest', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 20a10 10 0 1 1 8 0" /><path d="M12 12v8" /></svg> },
              ].map((social) => (
                <a key={social.name} href="#" className="social-link" aria-label={social.name}>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="footer-col">
              <h3 className="footer-col-title">{title}</h3>
              <ul className="footer-col-list">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="footer-link">
                      <span className="footer-link-dot" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom reveal">
          <p className="footer-copyright">
            © {new Date().getFullYear()} LuxeCart. All rights reserved.
          </p>

          <div className="footer-bottom-links">
            <a href="#" className="footer-bottom-link">Privacy Policy</a>
            <span className="footer-bottom-divider" />
            <a href="#" className="footer-bottom-link">Terms of Service</a>
            <span className="footer-bottom-divider" />
            <a href="#" className="footer-bottom-link">Cookies</a>
          </div>

          <div className="footer-payments">
            {['Visa', 'Master', 'Amex', 'PayPal'].map((pay) => (
              <span key={pay} className="payment-badge">{pay}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;