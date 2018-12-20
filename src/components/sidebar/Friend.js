import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Friend extends Component {
  render() {
    return (
      <div className="friend">
        <div className="friend-avatar">
          <a href="https://codebendersu.github.io/Mock-Neopets/">
            <img src={this.props.avatar} alt="user avatar" />
          </a>
        </div>
        <div className="friend-info">
          <h1><a href="https://codebendersu.github.io/Mock-Neopets/">{this.props.username}</a></h1>
          <a href="https://codebendersu.github.io/Mock-Neopets/">
            <FontAwesomeIcon className="icon" icon="envelope" />
            {} Neomail
          </a>
          <span>
            <a href="https://codebendersu.github.io/Mock-Neopets/">
              <FontAwesomeIcon className="icon" icon="home" />
              {} Visit
            </a>
            {} | {}
            <a href="https://codebendersu.github.io/Mock-Neopets/">
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
