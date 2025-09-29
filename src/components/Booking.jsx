import React, { useState } from 'react';
import './Booking.css';

const tabs = [
  { label: 'Flights', icon: '✈️' },
  { label: 'Trains', icon: '🚆' },
  { label: 'Buses', icon: '🚌' },
  { label: 'Cabs', icon: '🚖' },
  { label: 'Accommodations', icon: '🏨' },
  { label: 'Travel Partners', icon: '🤝' },
];

const bookingStyle = {
  backgroundImage: `url(${process.env.PUBLIC_URL}/images/backwater.avif)`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  padding: "40px 20px",
  color: "white",
  textAlign: "center"
};

function Booking() {
  const [selectedTab, setSelectedTab] = useState('Flights');

  return (
    <section className="booking" style={bookingStyle}>
      <h2>Inspired? GET STARTED</h2>

      <div className="booking-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            className={selectedTab === tab.label ? 'tab active' : 'tab'}
            onClick={() => setSelectedTab(tab.label)}
          >
            <span className="icon">{tab.icon}</span> {tab.label}
          </button>
        ))}
      </div>

      <form className="booking-form">
        <input type="text" placeholder="From" />
        <input type="text" placeholder="To" />
        <input type="date" />
        {selectedTab === 'Flights' && <input type="date" placeholder="Return Date" />}
        <select>
          <option>Economy</option>
          <option>Business</option>
        </select>
        <button>Search {selectedTab}</button>
      </form>
    </section>
  );
}

export default Booking;
