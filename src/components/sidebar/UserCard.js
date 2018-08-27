import React, { Component } from 'react';
import avatar from '../../assets/avatar.gif';
import { Account } from '../../data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class UserCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-label">
          <a href="">{Account.Username}</a>
        </div>
        <div className="card-content">
          <div className="avatar">
            <div className="avatar-photo">
              <span className="change-avatar">Change</span>
              <img src={avatar} alt="avatar" title="I'm rich, you know" />
            </div>
            <div className="peripherals">
              <a href="">
                <FontAwesomeIcon className="icon" icon="shopping-bag" />
                {} Inventory
              </a>
              <br />
              <a href="">
                <FontAwesomeIcon className="icon" icon="home" />
                {} Neohome
              </a>
              <br />
              <a href="">
                <FontAwesomeIcon className="icon" icon="university" />
                {} Bank
              </a>
            </div>
          </div>
          <div className="sub-label">
            <span><b>NP:</b> {Account.Neopoints}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default UserCard;
