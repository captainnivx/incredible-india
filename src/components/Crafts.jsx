import React from 'react';
import './Crafts.css';

const crafts = [
  {
    name: 'Charminar',
    state: 'Telangana',
    img: 'charminar.avif'
  },
  {
    name: 'Red Fort',
    state: 'Delhi',
    img: 'redfort.avif'
  },
  {
    name: 'Tamil Nadu Heritage',
    state: 'Tamil Nadu',
    img: 'tamilnadu.avif'
  },
  {
    name: 'Tiruchendur Temple',
    state: 'Tamil Nadu',
    img: 'tiruchendur.avif'
  }
];

function Crafts() {
  return (
    <section className="crafts">
      <h2>Exquisite Crafts by S.S.</h2>
      <p>of timeless tradition</p>
      <div className="craft-grid">
        {crafts.map((craft, index) => (
          <div key={index} className="craft-card">
            <img
              src={`${process.env.PUBLIC_URL}/images/${craft.img}`}
              alt={craft.name}
            />
            <h3>{craft.name}</h3>
            <p>{craft.state}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Crafts;
