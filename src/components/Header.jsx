import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Incredible India</h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>Destinations</li>
          <li>Culture</li>
          <li>Festivals</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;