import React, { Component } from 'react';
import GameCard from './GameCard';
import AdCard from './AdCard';
import FooterCard from './FooterCard';

class RightBar extends Component {
  render() {
    return (
      <div className="right-margin">
        <GameCard />
        <AdCard />
        <FooterCard />
      </div>
    );
  }
}

export default RightBar;
