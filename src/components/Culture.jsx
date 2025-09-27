import React from 'react';
import './Culture.css';

const Culture = () => {
  return (
    <section className="culture-section">
      <h2>Culture</h2>
      <p>
        India is a land of diverse cultures, languages, and traditions. Each region has its own unique festivals, cuisines, art forms, and rituals.
        From the colorful festivals of Rajasthan to the classical dances of South India, every part of India tells a story of rich heritage and history.
      </p>
      <div className="culture-images">
        <img src="https://images.unsplash.com/photo-1584049015437-54d0f0f8724e?q=80&w=1200&auto=format&fit=crop" alt="Indian Dance" />
        <img src="https://images.unsplash.com/photo-1600047502603-05f21e62bda4?q=80&w=1200&auto=format&fit=crop" alt="Festival" />
      </div>
    </section>
  );
};

export default Culture;
