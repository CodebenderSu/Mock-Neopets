import React, { Component } from 'react';
import logo from '../../assets/neopets-logo.png';
import banner from '../../assets/banner.jpg';
import Navigation from './Navigation';
import Clock from './Clock';
import SearchBar from './SearchBar';

class Header extends Component {
  render() {
    return (
      <div className="header-master">
        <div className="header-container">
          <div className="header-left">
            <img className="banner" src={banner} alt="banner" />
            <a href=""><img src={logo} alt="Neopets" /></a>
          </div>
          <div className="header-center">
            <Navigation />
            <Clock />
            <SearchBar />
          </div>
          <div className="header-right">
            Log In/Out
            <img className="banner" src={banner} alt="banner" />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
