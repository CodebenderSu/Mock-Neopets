import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Friend extends Component {
  render() {
    return (
      <div className="friend">
        <div className="friend-avatar">
          <a href="">
            <img src={this.props.avatar} alt="user avatar" />
          </a>
        </div>
        <div className="friend-info">
          <h1><a href="">{this.props.username}</a></h1>
          <a href="">
            <FontAwesomeIcon className="icon" icon="envelope" />
            {} Neomail
          </a>
          <span>
            <a href="">
              <FontAwesomeIcon className="icon" icon="home" />
              {} Visit
            </a>
            {} | {}
            <a href="">
              <FontAwesomeIcon className="icon" icon="store" />
              {} Shop
            </a>
          </span>
        </div>
      </div>
    );
  }
}

export default Friend;
