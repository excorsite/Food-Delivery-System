import React from "react";
import "../styles/Header.css";
import logoImage from "../assets/images/logo.jpg"; // Will be placeholder initially
import cartIconSvg from "../assets/icons/cart.svg"; // Will be placeholder initially
import VintageToggle from "./VintageToggle";

function Header({ isVintageMode, onToggleVintage }) {
  return (
    <header className="app-header">
      <div className="logo-container">
        <img src={logoImage} alt="Vintage Bites Logo" />
        <span className="logo-text">Vintage Bites</span>
      </div>
      <nav className="nav-links">
        <a href="#">Home</a>
        <a href="#">Restaurants</a>
        <a href="#">Offers</a>
      </nav>
      <div className="header-actions">
        <VintageToggle
          isVintageMode={isVintageMode}
          onToggle={onToggleVintage}
        />
        <img src={cartIconSvg} alt="Cart" className="cart-icon" />
      </div>
    </header>
  );
}

export default Header;
