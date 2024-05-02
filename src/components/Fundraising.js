import React from 'react';
import '../styles.css';
import robot_right from './images/robot_right.png'

const FundRaising = () => {
  return (
    <header className="header">
      <div className="header-text">
        <h1>
          Need more information <span className="blue-text">about </span> our fundraising{' '}
          <div>Please reach out by email of LinkedIn!</div>
          <div className='header-lower-text'>
          <button className="Contact-button">Contact Us</button>
          </div>
        </h1>
      </div>
      <div className="robot-image">
      <img src={robot_right} alt="horse" />
      </div>
    </header>
  );
};

export default FundRaising;
