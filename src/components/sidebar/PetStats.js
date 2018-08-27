import React, { Component } from 'react';
import { Pet } from '../../data.json';

class PetStats extends Component {
  render() {
    return (
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
    );
  }
}

export default PetStats;
