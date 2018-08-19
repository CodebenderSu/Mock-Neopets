import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUserCircle, faGlobe, faDice, faStore,
        faUsers, faEnvelope, faHome, faShoppingBag, faPaw,
        faUniversity, faDoorClosed} from '@fortawesome/free-solid-svg-icons';
import '../styles/header.css';
import '../styles/home.css';
import '../styles/sidebar.css';
import Header from './header/Header';
import LeftBar from './sidebar/LeftBar';
import RightBar from './sidebar/RightBar';
import HomePage from './home/HomePage';

library.add(faSearch, faUserCircle, faGlobe, faDice, faStore,
            faUsers, faEnvelope, faHome, faShoppingBag, faPaw,
            faUniversity, faDoorClosed);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <LeftBar />
        <RightBar />
        <HomePage />
      </div>
    );
  }
}

export default App;
