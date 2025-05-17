import React from 'react';
import '../styles/Hero.css';

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Deliciously Delivered, With a Touch of Nostalgia</h1>
        <p>Discover the finest local restaurants and get your favorite meals delivered fast.</p>
        <div className="search-bar">
          <input type="text" placeholder="Enter your delivery address or postal code" />
          <button type="button">Find Food</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
