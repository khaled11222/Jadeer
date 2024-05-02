import React from 'react';
import '../styles.css';
import office from './images/office.jpeg';
import cronell from './images/cornell.png';

const CompanyInfo = () => {
  return (
    <div className="company-info-container">
      <div className="text-container">
        <h3>Our Story</h3>
        <h1>How it all Started...</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          vestibulum, justo at tincidunt lacinia, felis libero euismod elit,
          nec tincidunt justo nunc in nisi. Sed auctor, tortor vel ultrices
          aliquet, lorem ipsum dolor sit amet, consectetur adipiscing elit.
          I’ll start with the most obvious point, which is also the hardest to achieve. Everything that follows below is merely tactical advice. Your true strategic advantage will materialize if you raise your round from a position of strength
        </p>
        <div className="badge-container">
          <img
            src={cronell} 
            alt="Employee Badge"
            className="circle-badge"
          />
          <span className="badge-text">CORNELL EMI EMERGING</span>
        </div>
      </div>
      <div className="photo-container">
        <img
          src={office}
          alt="Company Meeting"
          className="company-photo"
        />
      </div>
    </div>
  );
};

export default CompanyInfo;
