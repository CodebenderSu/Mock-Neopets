import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class UnderConstruction extends Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }
  handleClick = () => {
    this.setState({ show: false });
  }
  render() {
    let modal;
    if (this.state.show) {
      modal =
      <div className="construction">
        <div className="construction-content">
          <span onClick={this.handleClick}>
            <FontAwesomeIcon icon="window-close" />
          </span>
          <h2> Under Construction </h2>
          <p>
            Hey there, I know you're checking out this page, and I'ma let you
            finish, but this webpage is currently under construction.
          </p>
        </div>
      </div>
    } else {
      modal =
      <div />
    };
    return (
      <div>
        {modal}
      </div>
    );
  }
}

export default UnderConstruction;
