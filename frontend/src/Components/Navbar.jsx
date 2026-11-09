import React, { useState, useEffect } from 'react';


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navLinks = ['Home', 'Shop', 'Collections', 'About', 'Contact'];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Logo */}
          <a href="/" className="navbar-logo">
            <span className="logo-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7l10 5 10-5-10-5z" fill="url(#logoGrad1)" />
                <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="url(#logoGrad2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                <defs>
                  <linearGradient id="logoGrad1" x1="2" y1="2" x2="22" y2="12">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#a855f7" />
                  </linearGradient>
                  <linearGradient id="logoGrad2" x1="2" y1="7" x2="22" y2="22">
                    <stop offset="0%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#6366f1" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span className="logo-text">
              Luxe<span className="logo-accent">Cart</span>
            </span>
          </a>

          {/* Desktop Links */}
          <ul className="navbar-links">
            {navLinks.map((link, i) => (
              <li key={link} style={{ animationDelay: `${0.1 + i * 0.05}s` }}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className={`nav-link ${activeLink === link ? 'active' : ''}`}
                  onClick={() => setActiveLink(link)}
                >
                  {link}
                  <span className="nav-link-underline" />
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Actions */}
          <div className="navbar-actions">
            <button className="icon-btn search-btn" aria-label="Search">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>

            <button className="icon-btn cart-btn" aria-label="Cart">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              <span className="cart-badge">3</span>
            </button>

            <button className="btn btn-primary nav-cta">
              Sign In
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`hamburger ${mobileOpen ? 'open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        <div className="mobile-menu-inner">
          <ul className="mobile-links">
            {navLinks.map((link, i) => (
              <li key={link} style={{ transitionDelay: `${0.05 + i * 0.06}s` }}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className={`mobile-link ${activeLink === link ? 'active' : ''}`}
                  onClick={() => { setActiveLink(link); setMobileOpen(false); }}
                >
                  <span className="mobile-link-num">0{i + 1}</span>
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <div className="mobile-actions">
            <button className="btn btn-primary mobile-cta">Sign In</button>
            <button className="btn btn-secondary mobile-cta">Shop Now</button>
          </div>

          <div className="mobile-footer">
            <span>Follow us</span>
            <div className="mobile-socials">
              <a href="#" aria-label="Instagram">IG</a>
              <a href="#" aria-label="Twitter">TW</a>
              <a href="#" aria-label="Facebook">FB</a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`mobile-overlay ${mobileOpen ? 'open' : ''}`}
        onClick={() => setMobileOpen(false)}
      />
    </>
  );
};

export default Navbar;