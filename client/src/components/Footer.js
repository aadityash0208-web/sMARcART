import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* COLUMN 1: BRAND */}
        <div className="footer-col">
          <h3>🛍️ SmartCart</h3>
          <p>
            Experience the future of shopping with AI-powered suggestions and seamless 3D interactions.
            Quality meets technology.
          </p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>

        {/* COLUMN 2: QUICK LINKS */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cart">My Cart</Link></li>
            <li><Link to="/profile">Order History</Link></li>
            <li><Link to="/profile">My Profile</Link></li>
          </ul>
        </div>

        {/* COLUMN 3: CONTACT */}
        <div className="footer-col">
          <h3>Contact Us</h3>
          <ul className="contact-list">
            <li>
              <i className="fas fa-map-marker-alt"></i> 
              Mumbai, Maharashtra, India
            </li>
            <li>
              <i className="fas fa-phone"></i> 
              +91 98765 43210
            </li>
            <li>
              <i className="fas fa-envelope"></i> 
              support@smartcart.com
            </li>
          </ul>
        </div>

        {/* COLUMN 4: NEWSLETTER */}
        <div className="footer-col">
          <h3>Stay Updated</h3>
          <p>Subscribe for exclusive AI deals & drops.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 SmartCart. All rights reserved. | Built for Sem 6 Project</p>
      </div>
    </footer>
  );
};

export default Footer;