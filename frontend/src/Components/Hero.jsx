import React, { useEffect, useRef } from 'react';


const HeroSection = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = heroRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-content">
          <span className="hero-badge animate-on-scroll">
            <span className="badge-dot" />
            New Collection 2025
          </span>

          <h1 className="hero-title animate-on-scroll">
            Discover Your
            <span className="hero-title-accent"> Perfect Style</span>
          </h1>

          <p className="hero-description animate-on-scroll">
            Curated collections, exclusive drops, and timeless pieces — all in
            one place. Elevate your wardrobe with our latest arrivals.
          </p>

          <div className="hero-actions animate-on-scroll">
            <button className="btn btn-primary">
              Shop Now
              <svg
                className="btn-icon"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
            <button className="btn btn-secondary">Explore Collections</button>
          </div>

          <div className="hero-stats animate-on-scroll">
            <div className="stat">
              <span className="stat-number">10k+</span>
              <span className="stat-label">Happy Customers</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-number">500+</span>
              <span className="stat-label">Premium Brands</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-number">4.9★</span>
              <span className="stat-label">Average Rating</span>
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="hero-visual">
          <div className="hero-image-wrapper animate-on-scroll">
            <div className="hero-image-glow" />
            <div className="hero-image">
              <div className="product-card">
                <div className="product-image-placeholder">
                  <div className="product-shimmer" />
                </div>
                <div className="product-info">
                  <span className="product-tag">Best Seller</span>
                  <h3 className="product-name">Premium Collection</h3>
                  <p className="product-price">$149.00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="floating-card floating-card-1">
            <span className="floating-emoji">🚚</span>
            <div>
              <span className="floating-title">Free Shipping</span>
              <span className="floating-subtitle">On orders over $50</span>
            </div>
          </div>

          <div className="floating-card floating-card-2">
            <span className="floating-emoji">✨</span>
            <div>
              <span className="floating-title">New Arrivals</span>
              <span className="floating-subtitle">Just dropped</span>
            </div>
          </div>

          <div className="floating-card floating-card-3">
            <span className="floating-emoji">🔒</span>
            <div>
              <span className="floating-title">Secure Payment</span>
              <span className="floating-subtitle">100% protected</span>
            </div>
          </div>

          {/* Decorative Circles */}
          <div className="decorative-circle circle-1" />
          <div className="decorative-circle circle-2" />
          <div className="decorative-circle circle-3" />
        </div>
      </div>

      {/* Background Elements */}
      <div className="hero-bg-shape shape-1" />
      <div className="hero-bg-shape shape-2" />
      <div className="hero-grid" />
    </section>
  );
};

export default HeroSection;