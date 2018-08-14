import React, { Component } from 'react';

class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
        <span>
          <a href="" title="Account">
            <i class="fas fa-user-circle"></i>
            Account
          </a>
        </span>
        <span>
          <a href="" title="Explore">
            <i class="fas fa-globe-asia"></i>
            Explore
          </a>
        </span>
        <span>
          <a href="" title="Games">
            <i class="fas fa-dice"></i>
            Games
          </a>
        </span>
        <span>
          <a href="" title="Shops">
            <i class="fas fa-store"></i>
            Shops
          </a>
        </span>
        <span>
          <a href="" title="Community">
            <i class="fas fa-users"></i>
            Community
          </a>
        </span>
      </div>
    );
  }
}

export default Navigation;
