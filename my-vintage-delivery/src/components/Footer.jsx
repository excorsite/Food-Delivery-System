import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="app-footer">
      <div className="social-links">
        {/* Replace with actual icons or links later */}
        <a href="#" aria-label="Facebook">
          Facebook
        </a>
        <a href="#" aria-label="Instagram">
          Instagram
        </a>
        <a href="#" aria-label="Twitter">
          Twitter
        </a>
      </div>
      <p>© {new Date().getFullYear()} Vintage Bites. All Rights Reserved.</p>
      <p>A Food Delivery Experience.</p>
    </footer>
  );
}

export default Footer;
