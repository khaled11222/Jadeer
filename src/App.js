// App.js
import React from 'react';
import './styles.css'; 
import Navbar from './components/Navbar';
import Header from './components/Header';
import CompanyInfo from './components/Story';
import OurTeam from './components/Ourteam';
import FundRaising from './components/Fundraising';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <CompanyInfo />
      <OurTeam />
      <FundRaising />
    </div>
  );
};

export default App;
