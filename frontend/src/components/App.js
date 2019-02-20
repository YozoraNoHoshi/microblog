import React, { Component } from 'react';
import '../App.css';
import Routes from './Routes';
import NavBar from './NavBar';

class App extends Component {
  componentDidMount() {
    this.props.getBlogsFromAPI();
  }
  render() {
    return (
      <div className="App container mt-2 mb-2">
        <NavBar />
        <Routes />
      </div>
    );
  }
}

export default App;
