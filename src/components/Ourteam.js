import React from 'react';
import '../styles.css';
import jomana from './images/jomana.png';
import bahia from './images/bahia.png';
import ahmed from './images/ahmed.png';
import ruba from './images/ruba.png';

const OurTeam = () => {
  return (
    <div className="container">
      <h1 className="centered-text">Our Team are Business Professionals with Subject Matter Expertise</h1>
      <p>Please feel free to reach out to us and connect with us on LinkedIn.</p>
      <div className="image-container">
        <div className="circle">
          <img src={bahia} alt="bahia" />
          <div className="linkedin-icon">
            <a href="https://www.linkedin.com/in/your-linkedin-profile-1">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="circle">
          <img src={ruba} alt="ruba" />
          <div className="linkedin-icon">
            <a href="https://www.linkedin.com/in/your-linkedin-profile-2">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="circle">
          <img src={jomana} alt="jomana" />
          <div className="linkedin-icon">
            <a href="https://www.linkedin.com/in/your-linkedin-profile-3">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="circle">
          <img src={ahmed} alt="ahmed" />
          <div className="linkedin-icon">
            <a href="https://www.linkedin.com/in/your-linkedin-profile-4">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
