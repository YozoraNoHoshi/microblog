import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <header className="jumbotron">
        <h1 className="display-3 text-left">Micro Blog</h1>
        <p className="lead text-left">
          This is the blog to record trvial things.
        </p>
        <nav className="text-left">
          <NavLink className="blockquote mr-4" to="/">
            Blog
          </NavLink>
          <NavLink to="/new">
            <strong>Add a new post</strong>{' '}
          </NavLink>
        </nav>
      </header>
    );
  }
}

NavBar.defaultProps = {};

NavBar.propTypes = {};

export default NavBar;
