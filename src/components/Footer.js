import React from 'react';
import '../styles.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-logo">
        <img src="/icon.png" alt="uifry logo" className="footer-logo-img" />
        <span className="footer-logo-text">uifry</span>
        <div className="contact-info">
          <p><img src="/mail.png" alt="mail logo" className="footer-logo-img" />: Help@Frybix.Com</p>
          <p><img src="/call.png" alt="call logo" className="footer-logo-img" />: +1234 456 67889</p>
        </div>
      </div>
      <div className="footer-links">
        <div className="footer-column">
          <h4>Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Bookings</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Legal</h4>
          <ul>
            <li><a href="#">Terms Of Use</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Cookie Policy</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Product</h4>
          <ul>
            <li><a href="#">Take Tour</a></li>
            <li><a href="#">Live Chat</a></li>
            <li><a href="#">Reviews</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Newsletter</h4>
          <p>Stay Up To Date</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; 2022 Uifry.Com All Rights Reserved</p>
    </div>
  </footer>
);

export default Footer;
