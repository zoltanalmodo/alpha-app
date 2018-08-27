import React, { Component } from 'react';
import Header from './Header/Header.js';
import AboutUs from './AboutUs/AboutUs.js';
import './App.less';
import FloorPlan from './FloorPlan/FloorPlan';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
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
