import React, { Component } from 'react';
import './App.css';
import './default-theme.css';
import Header from './components/header/Header';
import HomePage from './components/home/HomePage';

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
