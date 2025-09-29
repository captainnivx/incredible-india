import React from 'react';
import './Destinations.css';

const destinations = [
  { name: 'Alleppey', state: 'Kerala', img: 'aleppey.avif' },
  { name: 'Backwater', state: 'Kerala', img: 'backwater.avif' },
  { name: 'Bangalore', state: 'Karnataka', img: 'bangalore.avif' },
  { name: 'Chamundi Hills', state: 'Karnataka', img: 'chamundi.avif' },
  { name: 'Charminar', state: 'Telangana', img: 'charminar.avif' },
  { name: 'Goa', state: 'Goa', img: 'goa.avif' },
  { name: 'Golden Temple', state: 'Punjab', img: 'goldentemple.avif' },
  { name: 'Hampi', state: 'Karnataka', img: 'hampi.avif' },
  { name: 'Jammu', state: 'Jammu & Kashmir', img: 'jammu.avif' },
  { name: 'Mumbai', state: 'Maharashtra', img: 'mumbai.avif' },
  { name: 'Munnar', state: 'Kerala', img: 'munnar.avif' },
  { name: 'Mysore Palace', state: 'Karnataka', img: 'mysorepalace.avif' },
  { name: 'Red Fort', state: 'Delhi', img: 'redfort.avif' },
  { name: 'Taj Mahal', state: 'Uttar Pradesh', img: 'tajmahal.avif' },
  { name: 'Tea Plantation', state: 'Kerala', img: 'teaplantation.avif' },
  { name: 'Tiruchendur', state: 'Tamil Nadu', img: 'tiruchendur.avif' },
  { name: 'Tulip Garden', state: 'Jammu & Kashmir', img: 'tulipgarden.avif' },
  { name: 'Vagamon', state: 'Kerala', img: 'vagamon.avif' },
  { name: 'Valley View', state: 'Himachal Pradesh', img: 'valley.avif' }
];

function Destinations() {
  return (
    <section className="destinations">
      <h2>Top Destinations</h2>
      <div className="destination-grid">
        {destinations.map((place, index) => (
          <div key={index} className="destination-card">
            <img
              src={`${process.env.PUBLIC_URL}/images/${place.img}`}
              alt={place.name}
              loading="lazy"
            />
            <h3>{place.name}</h3>
            <p>{place.state}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Destinations;
