import React, { Component } from 'react';

class CarouselTile extends Component {
  render() {
    return (
      <div>
        <a href={this.props.redirect}>
          <div className="carousel-text"><span>{this.props.span}</span></div>
          <img src={this.props.image} alt="" />
        </a>
      </div>
    );
  };
};

export default CarouselTile;
