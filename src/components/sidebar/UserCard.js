import React, { Component } from 'react';
import { Account } from '../../data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class UserCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-label">
          <a href="https://codebendersu.github.io/Mock-Neopets/">{Account.Username}</a>
        </div>
        <div className="card-content">
          <div className="avatar">
            <div className="avatar-photo">
              <span className="change-avatar">Change</span>
              <img src={Account.Avatar} alt="avatar" title="I'm rich, you know" />
            </div>
            <div className="peripherals">
              <a href="https://codebendersu.github.io/Mock-Neopets/">
                <FontAwesomeIcon className="icon" icon="shopping-bag" />
                {} Inventory
              </a>
              <br />
              <a href="https://codebendersu.github.io/Mock-Neopets/">
                <FontAwesomeIcon className="icon" icon="home" />
                {} Neohome
              </a>
              <br />
              <a href="https://codebendersu.github.io/Mock-Neopets/">
                <FontAwesomeIcon className="icon" icon="university" />
                {} Bank
              </a>
            </div>
          </div>
          <div className="card-subtitle">
            <span><b>NP:</b> {Account.Neopoints}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default UserCard;
