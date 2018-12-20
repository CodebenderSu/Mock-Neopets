import React, { Component } from 'react';
import Friend from './Friend';
import { Friends } from '../../data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class FriendCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawer: false
    };
  }
  handleClick = () => {
    const status = this.state.drawer;
    this.setState({ drawer: !status });
  }
  render() {
    let drawer;
    let button;

    if (this.state.drawer) {
      drawer =
        <div>
          <span>These Neofriends are currently online!</span>
          <hr />
          <Friend avatar={Friends[0].Avatar} username={Friends[0].Name} />
          <Friend avatar={Friends[1].Avatar} username={Friends[1].Name} />
          <Friend avatar={Friends[3].Avatar} username={Friends[3].Name} />
        </div>;
      button = <FontAwesomeIcon className="icon" icon="caret-square-up"
          onClick={this.handleClick} />;
    } else {
      drawer = <div></div>;
      button = <FontAwesomeIcon className="icon" icon="caret-square-down"
          onClick={this.handleClick} />
    };

    return (
      <div className="card">
        <div className="card-label">
          Neofriends
          {button}
        </div>
        <div className="card-content">
          {drawer}
          <hr />
          <div className="card-subtitle">
            <a href="https://codebendersu.github.io/Mock-Neopets/">
              <FontAwesomeIcon className="icon" icon="users" />
              {} Neofriends
            </a>
            <a href="https://codebendersu.github.io/Mock-Neopets/">
              <FontAwesomeIcon className="icon" icon="envelope" />
              {} Neomail
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default FriendCard;
