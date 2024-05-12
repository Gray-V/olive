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
      title: 'Free Trial',
      price: 'Free for a Month',
      features: ['Try our software for free for a month and experience its full capabilities.'],
      buttonLabel: 'coming soon'
    },
    {
      title: 'Premium',
      price: '$2.99/month',
      features: ['Perfect for individual users who want to manage their tasks effectively.'],
      buttonLabel: 'coming soon'
    },
    {
      title: 'Education',
      price: 'Contact Us',
      features: ['Tailored for universities to empower their students with our software. Contact us for a personalized plan to meet the specific needs of your institution.'],
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
