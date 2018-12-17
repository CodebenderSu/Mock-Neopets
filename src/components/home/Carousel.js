import React, { Component } from 'react';
import { Carousels } from '../../data.json';
import Slider from 'react-slick';

class Carousel extends Component {
  render() {
    const settings = {
      arrows: false,
      autoplay: true,
      autoplaySpeed: 10000,
      dots: true
    };
    return (
      <div className="carousel">
        <Slider {...settings}>
          <div>
            <img src={Carousels[0].Image} alt="" />
          </div>
          <div>
            <img src={Carousels[1].Image} alt="" />
          </div>
          <div>
            <img src={Carousels[2].Image} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}

export default Carousel;
