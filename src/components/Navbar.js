import React from 'react';
import '../styles.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left-section">
      <span className="easytrademark">easy</span>
      <span className="trademark">trademarks.</span>
      </div>
      <div className="center-section">
        <ul className="menu">
          <li>HOME.</li>
          <li>SERVICES.</li>
          <li>ABOUT US.</li>
          <li>RESOURCE CENTER.</li>
          <li>CONTACT US</li>
        </ul>
      </div>
      <div className="right-section">
        <span>LANGUAGE/CURRENCY</span>
        <select className="language-currency-selector">
        </select>
        <button className="login-button">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
