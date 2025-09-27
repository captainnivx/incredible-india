import React from 'react';
import './Destinations.css';

const places = [
  'aleppey',
  'backwater',
  'bangalore',
  'chamundi',
  'charminar',
  'goa',
  'goldentemple',
  'hampi',
  'jammu',
  'mumbai',
  'munnar',
  'mysorepalace',
  'redfort',
  'tajmahal',
  'tamilnadu',
  'teaplantation',
  'tiruchendur',
  'tulipgarden',
  'vagamon',
  'valley',
];

function Destinations() {
  return (
    <section className="destinations">
      <h2>Top Destinations</h2>
      <div className="grid">
        {places.map((place, index) => (
          <div key={index} className="card">
            <img src={`/images/${place}.avif`} alt={place} />
            <h3>{place.charAt(0).toUpperCase() + place.slice(1)}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Destinations;