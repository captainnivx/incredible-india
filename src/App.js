import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Itinerary from './components/Itinerary';
import Crafts from './components/Crafts';
import Destinations from './components/Destinations';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Itinerary />
      <Crafts />
      <Destinations />
      <Booking />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
