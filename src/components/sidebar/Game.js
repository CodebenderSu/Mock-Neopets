import React, { Component } from 'react';

class Game extends Component {
  render() {
    return (
      <div className="games-item">
        <div>
          <img src={this.props.avatar} alt=""/>
        </div>
      </div>
    );
  }
}

export default Game;
