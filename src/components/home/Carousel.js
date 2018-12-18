import React, { Component } from 'react';
import Slider from 'react-slick';
import { Tiles } from '../../data.json';
import CarouselTile from './CarouselTile.js';

class Carousel extends Component {
  render() {
    const settings = {
      arrows: false,
      autoplay: true,
      autoplaySpeed: 8000,
      dots: true
    };
    // Generate Carousel Tiles dynamically!
    const tiles = Tiles.map((i) =>
      <CarouselTile key={i.Key} redirect={i.Redirect} span={i.Span}
        image={i.Image} />
    );
    return (
      <div className="carousel">
        <Slider {...settings}>
          {tiles}
        </Slider>
      </div>
    );
  }
}

export default Carousel;
