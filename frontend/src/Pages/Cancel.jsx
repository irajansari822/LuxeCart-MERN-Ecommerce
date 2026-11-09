import React, { useState } from 'react';


const PaymentCancel = () => {
  const [showDetails, setShowDetails] = useState(false);

  const reasons = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="4" width="22" height="16" rx="2" />
          <line x1="1" y1="10" x2="23" y2="10" />
        </svg>
      ),
      title: 'Payment Declined',
      description: 'Your card was declined by the bank. Try a different payment method.',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      title: 'Session Timed Out',
      description: 'The checkout session expired for security. Restart your order.',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
          <line x1="12" y1="2" x2="12" y2="12" />
        </svg>
      ),
      title: 'Changed Your Mind',
      description: 'No worries — your cart is saved and waiting for you anytime.',
    },
  ];

  return (
    <div className="cancel-page">
      {/* Background */}
      <div className="cancel-bg-grid" />
      <div className="cancel-bg-shape cancel-shape-1" />
      <div className="cancel-bg-shape cancel-shape-2" />

      <div className="cancel-container">
        {/* Cancel Card */}
        <div className="cancel-card">
          {/* Animated Icon */}
          <div className="cancel-icon-wrap">
            <div className="cancel-icon-ring" />
            <div className="cancel-icon-ring cancel-ring-2" />
            <div className="cancel-icon">
              <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" className="x-line-1" />
                <line x1="6" y1="6" x2="18" y2="18" className="x-line-2" />
              </svg>
            </div>
          </div>

          <span className="cancel-badge">
            <span className="cancel-badge-dot" />
            Payment Not Completed
          </span>

          <h1 className="cancel-title">
            Payment <span className="cancel-accent">Cancelled</span>
          </h1>
          <p className="cancel-subtitle">
            No worries — your payment was not processed and you have not been charged.
            Your cart is still saved and ready whenever you are.
          </p>

          {/* Info Box */}
          <div className="cancel-info">
            <div className="cancel-info-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div className="cancel-info-text">
              <strong>You have not been charged.</strong>
              <span>Any pending authorization will be released within 3-5 business days.</span>
            </div>
          </div>

          {/* Actions */}
          <div className="cancel-actions">
            <a href="#" className="btn btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="1 4 1 10 7 10" />
                <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
              </svg>
              Try Again
            </a>
            <a href="#" className="btn btn-secondary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              Back to Cart
            </a>
          </div>

          {/* Toggle Reasons */}
          <button
            className={`cancel-toggle ${showDetails ? 'open' : ''}`}
            onClick={() => setShowDetails(!showDetails)}
          >
            <span>Why might this happen?</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          <div className={`cancel-reasons ${showDetails ? 'open' : ''}`}>
            <div className="cancel-reasons-inner">
              {reasons.map((reason, i) => (
                <div key={i} className="cancel-reason">
                  <div className="cancel-reason-icon">{reason.icon}</div>
                  <div className="cancel-reason-info">
                    <h4>{reason.title}</h4>
                    <p>{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Support */}
          <div className="cancel-support">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            <span>
              Still having trouble? <a href="#" className="support-link">Contact our support team</a>
            </span>
          </div>
        </div>

        {/* Reassurance Strip */}
        <div className="cancel-strip">
          <div className="strip-item">
            <div className="strip-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <span>Secure Checkout</span>
          </div>
          <div className="strip-divider" />
          <div className="strip-item">
            <div className="strip-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
                <polyline points="21 3 21 8 16 8" />
              </svg>
            </div>
            <span>Free Returns</span>
          </div>
          <div className="strip-divider" />
          <div className="strip-item">
            <div className="strip-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </div>
            <span>24/7 Support</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCancel;