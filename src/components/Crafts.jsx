import React from 'react';
import './Crafts.css';

const crafts = [
  { state: 'Karnataka', item: 'Channapatna Toys', img: 'mysorepalace.avif' },
  { state: 'Kerala', item: 'Aranmula Kannadi', img: 'tamilnadu.avif' },
  { state: 'Madhya Pradesh', item: 'Bagh Prints', img: 'teaplantation.avif' },
  { state: 'Maharashtra', item: 'Warli Painting', img: 'tulipgarden.avif' },
];

function Crafts() {
  return (
    <section className="crafts">
      <h2>Exquisite Crafts</h2>
      <p>of timeless tradition</p>
      <div className="craft-grid">
        {crafts.map((craft, index) => (
          <div key={index} className="craft-card">
            <img src={`/images/${craft.img}`} alt={craft.item} />
            <h3>{craft.item}</h3>
            <p>{craft.state}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Crafts;

