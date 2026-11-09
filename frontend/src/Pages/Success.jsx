import React, { useEffect, useState } from 'react';


const PaymentSuccess = () => {
  const [confettiActive, setConfettiActive] = useState(true);
  const [orderNumber] = useState(() => Math.floor(100000 + Math.random() * 900000));

  useEffect(() => {
    const timer = setTimeout(() => setConfettiActive(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  const orderDetails = {
    number: `#LC-${orderNumber}`,
    date: new Date().toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }),
    total: '$249.00',
    email: 'customer@example.com',
    method: 'Visa •••• 4242',
    items: [
      { name: 'Premium Collection Jacket', qty: 1, price: '$149.00', emoji: '🧥' },
      { name: 'Minimalist Leather Belt', qty: 1, price: '$59.00', emoji: '👔' },
      { name: 'Cotton Crew Socks (3-pack)', qty: 1, price: '$41.00', emoji: '🧦' },
    ],
  };

  return (
    <div className="success-page">
      {/* Confetti */}
      {confettiActive && (
        <div className="confetti-container">
          {Array.from({ length: 50 }).map((_, i) => (
            <span
              key={i}
              className="confetti-piece"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2.5 + Math.random() * 2}s`,
                backgroundColor: ['#6366f1', '#a855f7', '#f59e0b', '#ec4899', '#10b981'][
                  Math.floor(Math.random() * 5)
                ],
                width: `${6 + Math.random() * 6}px`,
                height: `${6 + Math.random() * 6}px`,
                borderRadius: Math.random() > 0.5 ? '50%' : '2px',
              }}
            />
          ))}
        </div>
      )}

      {/* Background */}
      <div className="success-bg-grid" />
      <div className="success-bg-shape success-shape-1" />
      <div className="success-bg-shape success-shape-2" />

      <div className="success-container">
        {/* Success Card */}
        <div className="success-card">
          {/* Animated Checkmark */}
          <div className="success-icon-wrap">
            <div className="success-icon-ring" />
            <div className="success-icon-ring success-ring-2" />
            <div className="success-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" className="check-path" />
              </svg>
            </div>
          </div>

          <h1 className="success-title">
            Payment <span className="success-accent">Successful!</span>
          </h1>
          <p className="success-subtitle">
            Thank you for your order. Your payment was processed securely and a
            confirmation has been sent to your email.
          </p>

          {/* Order Summary */}
          <div className="success-summary">
            <div className="summary-row">
              <span className="summary-label">Order Number</span>
              <span className="summary-value summary-mono">{orderDetails.number}</span>
            </div>
            <div className="summary-row">
              <span className="summary-label">Date</span>
              <span className="summary-value">{orderDetails.date}</span>
            </div>
            <div className="summary-row">
              <span className="summary-label">Email</span>
              <span className="summary-value">{orderDetails.email}</span>
            </div>
            <div className="summary-row">
              <span className="summary-label">Payment Method</span>
              <span className="summary-value">{orderDetails.method}</span>
            </div>

            <div className="summary-divider" />

            <div className="summary-items">
              {orderDetails.items.map((item, i) => (
                <div key={i} className="summary-item">
                  <span className="summary-item-emoji">{item.emoji}</span>
                  <div className="summary-item-info">
                    <span className="summary-item-name">{item.name}</span>
                    <span className="summary-item-qty">Qty: {item.qty}</span>
                  </div>
                  <span className="summary-item-price">{item.price}</span>
                </div>
              ))}
            </div>

            <div className="summary-divider" />

            <div className="summary-row summary-total">
              <span className="summary-label">Total Paid</span>
              <span className="summary-value summary-total-value">{orderDetails.total}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="success-actions">
            <a href="#" className="btn btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              Continue Shopping
            </a>
            <a href="#" className="btn btn-secondary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Email Receipt
            </a>
          </div>

          {/* Support Note */}
          <div className="success-support">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            <span>
              Need help? <a href="#" className="support-link">Contact our support team</a>
            </span>
          </div>
        </div>

        {/* Steps */}
        <div className="success-steps">
          <div className="step completed">
            <div className="step-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <span className="step-label">Order Placed</span>
          </div>
          <div className="step-line completed" />
          <div className="step completed">
            <div className="step-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <span className="step-label">Payment Confirmed</span>
          </div>
          <div className="step-line" />
          <div className="step active">
            <div className="step-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="3" width="15" height="13" rx="2" />
                <path d="M16 8h4l3 3v5a2 2 0 0 1-2 2h-1" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
              </svg>
            </div>
            <span className="step-label">Processing</span>
          </div>
          <div className="step-line" />
          <div className="step">
            <div className="step-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
              </svg>
            </div>
            <span className="step-label">Shipped</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;