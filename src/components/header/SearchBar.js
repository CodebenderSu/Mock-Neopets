import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div className="search">
      <form>
        <input type="hidden" value="" />
        <input autocomplete="on" name="q" placeholder="Search Neopets"
              required="required"  type="text" title="" />
        <i type="submit" class="fas fa-search"></i>
      </form>
      </div>
    );
  }
}

export default SearchBar;
