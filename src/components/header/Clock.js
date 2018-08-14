import React, { Component } from 'react';
import * as Moment from 'moment-timezone';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: Moment(new Date()).tz("America/Los_Angeles").format('LTS')
    };
  }
  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 500);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  tick = () => {
    this.setState({
      time: Moment(new Date()).tz("America/Los_Angeles").format('LTS')
    });
  }
  render() {
    return (
      <div className="clock">
        <span>{this.state.time} <b>NST</b></span>
      </div>
    );
  }
}

export default Clock;
