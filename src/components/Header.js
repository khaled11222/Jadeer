import React from 'react';
import '../styles.css';
import robot_right from './images/robot_right.png'

const Header = () => {
  return (
    <header className="header">
      <div className="header-text">
        <h1>
          Easy Trademark is <span className="blue-text">transforming</span> how brands are{' '}
          <div className='header-lower-text'>
          <div className="">Protected</div>{' '}
          <div className="">Enforced</div>{' '}
          <div className="">Commercialized</div>
          </div>
        </h1>
      </div>
      <div className="robot-image">
      <img src={robot_right} alt="horse" />
      </div>
    </header>
  );
};

export default Header;
