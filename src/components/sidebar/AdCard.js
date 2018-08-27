import React, { Component } from 'react';

class AdCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <div className="ad-space">
            <a href="https://codebendersu.github.io/" target="_blank"
              rel="noopener noreferrer">
              <img src="https://codebendersu.github.io/cover.png"
                alt="[Insert funny doge meme here]"
                title="Brought to you by CodebenderSu"/>
            </a>
            <span>Advertisement</span>
          </div>
        </div>
      </div>
    );
  }
}

export default AdCard;
