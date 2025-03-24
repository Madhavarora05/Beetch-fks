// src/components/footer/footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import logo from '../../assets/images/logo.jpg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section - Logo */}
        <div className="footer-logo">
        <img src={logo} alt="Logo" className="logo-img" />
        </div>

        {/* Center Section - Navigation and Social Icons */}
        <div className="footer-links">
          <nav className="footer-nav">
            <Link to="/">Home</Link>
            <Link to="/all">All</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
          </nav>
          <div className="social-icons">
            <a href="#facebook"><i className="bi bi-instagram"></i></a>
            <a href="#instagram"><i className="bi bi-facebook"></i></a>
            <a href="#pinterest"><i className="bi bi-pinterest"></i></a>
          </div>
        </div>

        {/* Right Section - Newsletter */}
        <div className="newsletter">
          <h3>Subscribe to our newsletter</h3>
          <p>Be the first to know about our hottest discounts</p>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-btn">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Footer Policy Links */}
      <div className="footer-policies">
        <hr />
        <p>&copy; 2024 beetch.fks</p>
        <Link to="/refund-policy">Refund policy</Link>
        <Link to="/cancellation-policy">Cancellation policy</Link>
        <Link to="/shipping-policy">Shipping policy</Link>
        <Link to="/privacy-policy">Privacy policy</Link>
      </div>
    </footer>
  );
}

export default Footer;
