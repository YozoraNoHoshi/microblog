import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <nav>
        <NavLink to="/">Blog</NavLink>
        <NavLink to="/new">Add a new post</NavLink>
      </nav>
    );
  }
}

NavBar.defaultProps = {};

NavBar.propTypes = {};

export default NavBar;
