import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from '../components/Home';

class HomeContainer extends Component {
  render() {
    return <Home {...this.props} />;
  }
}

function mapStateToProps(state) {
  return { blogs: state.blogs };
}

export default connect(mapStateToProps)(HomeContainer);
