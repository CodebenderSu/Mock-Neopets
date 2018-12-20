import React, { Component } from 'react';

class Game extends Component {
  render() {
    return (
      <div className="games-item">
        <span className="change-game">{this.props.name}</span>
        <a href="https://codebendersu.github.io/Mock-Neopets/">
          <img src={this.props.avatar} alt={this.props.name}
            title={this.props.name}/>
        </a>
      </div>
    );
  }
}

export default Game;
