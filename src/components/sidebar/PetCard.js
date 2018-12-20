import React, { Component } from 'react';
import PetStats from './PetStats';
import { Pet } from '../../data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class PetCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-label">
          <a href="https://codebendersu.github.io/Mock-Neopets/">{Pet.Name}</a>
        </div>
        <div className="card-content">
          <div className="pet-photo">
            <img src={Pet.Avatar} alt="pet" />
          </div>
          <hr />
          <PetStats />
          <hr />
          <div className="card-subtitle">
            <a href="https://codebendersu.github.io/Mock-Neopets/">
              <FontAwesomeIcon className="icon" icon="paw" />
              {} Pets
            </a>
            <a href="https://codebendersu.github.io/Mock-Neopets/">
              <FontAwesomeIcon className="icon" icon="door-closed" />
              {} Closet
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default PetCard;
