import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class SearchBar extends Component {
  render() {
    return (
      <div className="search">
        <form>
          <input autoComplete="on" name="search" placeholder="Search Neopets"
                 type="text" title="" />
          <button type="submit">
            <FontAwesomeIcon icon="search" />
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
