import React, { Component } from 'react';
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
          <div className="pet-stats">
            <div className="stats-left">
              Species: <br />
              Health: <br />
              Mood: <br />
              Hunger: <br />
              Age: <br />
              Level:
            </div>
            <div className="stats-right">
              <b>{Pet.Species}</b><br />
              <b>{Pet.Health} / {Pet.HealthMax}</b><br />
              <b>{Pet.Mood}</b><br />
              <b>{Pet.Hunger}</b><br />
              <b>{Pet.Age} days</b><br />
              <b>{Pet.Level}</b>
            </div>
          </div>
          <hr />
          <div className="pet-links sub-label">
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
