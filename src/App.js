import React from 'react';
import './App.less';
import Header from './Header/Header.js';
import AboutUs from './AboutUs/AboutUs.js';
import FloorPlan from './FloorPlan/FloorPlan';
import FAQ from './FAQ/FAQ';
import Contact from './Contact/Contact';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <AboutUs />
        {/* <Filters /> */}
        <FloorPlan />
        <FAQ />
        <Contact />
      </div>
    );
  }
}
