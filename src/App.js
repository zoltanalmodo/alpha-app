import React, { Component } from 'react';
import logo from './images/logo.svg';
import AboutUs from './AboutUs/AboutUs.js';
// import GoogleMap from './GoogleMap.js';
import './App.less';
import FloorPlan from './FloorPlan/FloorPlan';
// import Details from './FloorPlan/Details/Details';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-01">
          <header className="header-content">
            <img src={logo} className="logo" alt="" />
            <h1>MANY HANDS BERMONDSEY</h1>
            <h2>OPEN STUDIOS</h2>
          </header>
        </div>
          <AboutUs />
        <div className="container-03">
          <div className="flex-item-03">
            <FloorPlan />
          </div>
        </div>
        <div className="container-04">
          <div className="flex-item-04">
            Contact form
          </div>
        </div>
      </div>
    );
  }
}

export default App;
