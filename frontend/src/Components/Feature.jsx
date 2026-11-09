import React, { useEffect, useRef } from 'react';


const FeaturesSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      id: 1,
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 7h-9M14 17H5" />
          <circle cx="17" cy="17" r="3" />
          <circle cx="7" cy="7" r="3" />
        </svg>
      ),
      title: 'Curated Selection',
      description:
        'Every piece is hand-picked by our style team so you only see the best of the best.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80',
      tag: 'Quality First',
    },
    {
      id: 2,
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="3" width="15" height="13" rx="2" />
          <path d="M16 8h4l3 3v5a2 2 0 0 1-2 2h-1" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      ),
      title: 'Fast & Free Shipping',
      description:
        'Enjoy free express delivery on all orders over $50, straight to your doorstep.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80',
      tag: 'On Us',
    },
    {
      id: 3,
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      ),
      title: 'Secure Checkout',
      description:
        'Shop with confidence thanks to our encrypted, fully protected payment system.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80',
      tag: 'Safe & Sound',
    },
    {
      id: 4,
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      ),
      title: '24/7 Support',
      description:
        'Our friendly team is always here to help with sizing, orders, or anything else.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
      tag: 'Always Here',
    },
  ];

  return (
    <section className="features" ref={sectionRef}>
      {/* Background elements */}
      <div className="features-bg-grid" />
      <div className="features-bg-shape features-shape-1" />
      <div className="features-bg-shape features-shape-2" />

      <div className="features-container">
        {/* Header */}
        <div className="features-header reveal">
          <span className="features-badge">
            <span className="features-badge-dot" />
            Why Shop With Us
          </span>
          <h2 className="features-title">
            An Experience Built
            <span className="features-title-accent"> Around You</span>
          </h2>
          <p className="features-subtitle">
            More than just a store — we deliver a thoughtful shopping experience
            from the moment you land to the day your order arrives.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="features-grid">
          {features.map((feature, index) => (
            <article
              key={feature.id}
              className="feature-card reveal"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="feature-image-wrap">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="feature-image"
                  loading="lazy"
                />
                <div className="feature-image-overlay" />
                <span className="feature-tag">{feature.tag}</span>
              </div>

              <div className="feature-body">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>

              <div className="feature-glow" />
            </article>
          ))}
        </div>

        {/* Bottom strip */}
        <div className="features-strip reveal">
          <div className="strip-item">
            <span className="strip-number">50k+</span>
            <span className="strip-label">Orders Delivered</span>
          </div>
          <div className="strip-divider" />
          <div className="strip-item">
            <span className="strip-number">98%</span>
            <span className="strip-label">Satisfaction Rate</span>
          </div>
          <div className="strip-divider" />
          <div className="strip-item">
            <span className="strip-number">120+</span>
            <span className="strip-label">Countries Served</span>
          </div>
          <div className="strip-divider" />
          <div className="strip-item">
            <span className="strip-number">4.9★</span>
            <span className="strip-label">Average Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;