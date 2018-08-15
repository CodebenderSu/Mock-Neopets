import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUserCircle, faGlobe, faDice, faStore, faUsers } from '@fortawesome/free-solid-svg-icons';
import './header.css';
import Header from './components/header/Header';
import HomePage from './components/home/HomePage';

library.add(faSearch, faUserCircle, faGlobe, faDice, faStore, faUsers);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <HomePage />
      </div>
    );
  }
}

export default App;
