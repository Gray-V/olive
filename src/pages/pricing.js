import React from 'react';
import './css/pricing.css'; // Ensure the correct path to your CSS file

// PricingCard Component
function PricingCard({ title, price, features, buttonLabel }) {
  return (
    <div className="pricing-card">
      <h2>{title}</h2>
      <p className="price">{price}</p>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button>{buttonLabel}</button>
    </div>
  );
}

// PricingPage Component
function Pricing() {
  const plans = [
    {
      title: 'Basic',
      price: '$10/month',
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
      buttonLabel: 'coming soon'
    },
    {
      title: 'Pro',
      price: '$30/month',
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
      buttonLabel: 'coming soon'
    },
    {
      title: 'Enterprise',
      price: 'Contact Us',
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
      buttonLabel: 'coming soon'
    }
  ];

  return (
    <div className="pricing-page">
      <div className="pricing-cards-container">
        {plans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
    </div>
  );
}

export default Pricing;
