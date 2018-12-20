import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
        <div>
          <a href="https://codebendersu.github.io/Mock-Neopets/" className="nav-item">
            <FontAwesomeIcon className="nav-icon" icon="user-circle" />
            <span>Account</span>
          </a>
        </div>
        <div>
          <a href="https://codebendersu.github.io/Mock-Neopets/" className="nav-item">
            <FontAwesomeIcon className="nav-icon" icon="globe" />
            <span>Explore</span>
          </a>
        </div>
        <div>
          <a href="https://codebendersu.github.io/Mock-Neopets/" className="nav-item">
            <FontAwesomeIcon className="nav-icon" icon="dice" />
            <span>Games</span>
          </a>
        </div>
        <div>
          <a href="https://codebendersu.github.io/Mock-Neopets/" className="nav-item">
            <FontAwesomeIcon className="nav-icon" icon="store" />
            <span>Shops</span>
          </a>
        </div>
        <div>
          <a href="https://codebendersu.github.io/Mock-Neopets/" className="nav-item">
            <FontAwesomeIcon className="nav-icon" icon="users" />
            <span>Community</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Navigation;
