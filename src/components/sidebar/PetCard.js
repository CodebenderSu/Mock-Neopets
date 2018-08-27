import React, { Component } from 'react';
import PetStats from './PetStats';
import pet from '../../assets/pet.jpg';
import { Pet } from '../../data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class PetCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-label">
          <a href="">{Pet.Name}</a>
        </div>
        <div className="card-content">
          <div className="pet-photo">
            <img src={pet} alt="pet" />
          </div>
          <hr />
          <PetStats />
          <hr />
          <div className="sub-label">
            <a href="">
              <FontAwesomeIcon className="icon" icon="paw" />
              {} Pets
            </a>
            <a href="">
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
