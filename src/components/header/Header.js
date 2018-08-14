import React, { Component } from 'react';
import * as logo from './neopets-logo.png';
import Navigation from './Navigation';
import Clock from './Clock';
import SearchBar from './SearchBar';

class Header extends Component {
  render() {
    return (
      <div className="header-master">
        <div className="header-container">
          <div className="header-left">
            <a href=""><img src={logo} alt="Neopets" title="Neopets Home"/></a>
          </div>
          <div className="header-center">
            <Navigation />
            <Clock />
            <SearchBar />
          </div>
          <div className="header-right">
            Log In/Out
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
