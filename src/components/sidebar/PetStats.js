import React, { Component } from 'react';
import { Pet } from '../../data.json';

class PetStats extends Component {
  render() {
    const ratio = Pet.Health / Pet.HealthMax;
    let status;
    if (ratio >= 0.5) { status = 'green' }
    else if (ratio < 0.5 && ratio > 0.1) { status = 'yellow' }
    else if (ratio <= 0.1) { status = 'red' };

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
          <b className={ status }>{Pet.Health} / {Pet.HealthMax}</b><br />
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
