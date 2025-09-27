import React from 'react';
import './Itinerary.css';

const itineraryStyle = {
  backgroundImage: "url('/images/munnar.avif')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  padding: "40px 20px",
  color: "white",
  textAlign: "center"
};

function Itinerary() {
  return (
    <section className="itinerary" style={itineraryStyle}>
      <h2>Itineraries</h2>
      <p>that beckon every traveller</p>
      <div className="filters">
        <select><option>Region</option></select>
        <select><option>Interest</option></select>
        <select><option>Trip Length</option></select>
      </div>
    </section>
  );
}

export default Itinerary;
