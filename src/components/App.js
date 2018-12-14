import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faUserCircle, faGlobe, faDice, faStore,
        faUsers, faEnvelope, faHome, faShoppingBag, faPaw,
        faUniversity, faDoorClosed, faCaretSquareDown,
        faCaretSquareUp, faGamepad, faWindowClose, faArrowsAlt } from '@fortawesome/free-solid-svg-icons';
import '../styles/header.css';
import '../styles/home.css';
import '../styles/sidebar.css';
import Header from './header/Header';
import LeftBar from './sidebar/LeftBar';
import RightBar from './sidebar/RightBar';
import HomePage from './home/HomePage';
import UnderConstruction from './UnderConstruction';

library.add(faSearch, faUserCircle, faGlobe, faDice, faStore,
            faUsers, faEnvelope, faHome, faShoppingBag, faPaw,
            faUniversity, faDoorClosed, faCaretSquareUp,
            faCaretSquareDown, faGamepad, faWindowClose, faArrowsAlt);

class App extends Component {
  render() {
    return (
      <div className="App">
        <UnderConstruction />
        <Header />
        <div className="content">
          <LeftBar />
          <HomePage />
          <RightBar />
        </div>
      </div>
    );
  }
}

export default App;
