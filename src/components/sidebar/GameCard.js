import React, { Component } from 'react';
import Game from './Game';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Games } from '../../data.json';

class GameCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-label">
          Favourite Games
        </div>
        <div className="card-content">
          <div className="games">

            <Game avatar={Games[0].Avatar} name={Games[0].Name} />
            <Game avatar={Games[1].Avatar} name={Games[1].Name} />
            <Game avatar={Games[2].Avatar} name={Games[2].Name} />
            <Game avatar={Games[3].Avatar} name={Games[3].Name} />
            <Game avatar={Games[4].Avatar} name={Games[4].Name} />
            <Game avatar={Games[5].Avatar} name={Games[5].Name} />

          </div>
          <hr />
          <div className="card-subtitle">
            <a href="">
              <FontAwesomeIcon className="icon" icon="gamepad" />
              {} All games
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default GameCard;
