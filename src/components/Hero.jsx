import React from 'react';
import './Hero.css';

const heroSlides = [
  { img: 'aleppey.avif', title: 'Aleppey' },
  { img: 'goldentemple.avif', title: 'Golden Temple' },
  { img: 'tajmahal.avif', title: 'Taj Mahal' },
];

function Hero() {
  return (
    <section className="hero">
      {heroSlides.map((slide, index) => (
        <div key={index} className="slide">
          <img
            src={`${process.env.PUBLIC_URL}/images/${slide.img}`}
            alt={slide.title}
          />
          <h2 className="slide-title">{slide.title}</h2>
        </div>
      ))}
    </section>
  );
}

export default Hero;
