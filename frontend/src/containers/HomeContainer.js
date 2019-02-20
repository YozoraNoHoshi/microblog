import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from '../components/Home';
import { getBlogsFromAPI } from '../actionCreator';
import { withRouter } from 'react-router-dom';

class HomeContainer extends Component {
  render() {
    return <Home {...this.props} />;
  }
}

function mapStateToProps(state) {
  return { blogs: state.blogs };
}

export default withRouter(
  connect(
    mapStateToProps,
    { getBlogsFromAPI }
  )(HomeContainer)
);
