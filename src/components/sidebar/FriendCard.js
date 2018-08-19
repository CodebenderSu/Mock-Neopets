import React, { Component } from 'react';
import { Friends } from '../../data.json';

class FriendCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-label">
          Neofriends
        </div>
        <div className="card-content">
          {Friends[0]} {Friends[1]} {Friends[2]}
        </div>
      </div>
    );
  }
}

export default FriendCard;
