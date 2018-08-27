import React, { Component } from 'react';
import UserCard from './UserCard';
import PetCard from './PetCard';
import FriendCard from './FriendCard';

class LeftBar extends Component {
  render() {
    return (
      <div className="left-margin">
        <UserCard />
        <PetCard />
        <FriendCard />
      </div>
    );
  }
}

export default LeftBar;
