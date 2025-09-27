import React from 'react';
import './Festivals.css';

const festivals = [
  { name: "Diwali", img: "https://images.unsplash.com/photo-1602354301221-8e68a0f0f1bb?q=80&w=1200&auto=format&fit=crop" },
  { name: "Holi", img: "https://images.unsplash.com/photo-1613722294847-0de5c6ecfbae?q=80&w=1200&auto=format&fit=crop" },
  { name: "Navratri", img: "https://images.unsplash.com/photo-1606312618893-abbc7e63bff6?q=80&w=1200&auto=format&fit=crop" },
  { name: "Pongal", img: "https://images.unsplash.com/photo-1615978224850-8cbbacb5e5c2?q=80&w=1200&auto=format&fit=crop" }
];

const Festivals = () => {
  return (
    <section className="festivals-section">
      <h2>Festivals</h2>
      <div className="festivals-grid">
        {festivals.map((f, i) => (
          <div key={i} className="festival-card">
            <img src={f.img} alt={f.name} />
            <h3>{f.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Festivals;
