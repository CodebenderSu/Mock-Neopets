import React, { Component } from 'react';
import Carousel from './Carousel';
import Panels from './Panels';
import OlderNews from './OlderNews';

class HomePage extends Component {
  render() {
    return (
      <div className="home-master">
        <Carousel />
        <Panels />
        <OlderNews />
      </div>
    );
  }
}

export default HomePage;
