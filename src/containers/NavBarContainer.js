import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import { connect } from 'react-redux';
import { getBlogsFromAPI } from '../actionCreator';

class NavBarContainer extends Component {
  render() {
    return <NavBar {...this.props} />;
  }
}
function mapStateToProps(state) {
  return { blogs: state.blogs };
}
export default connect(
  mapStateToProps,
  { getBlogsFromAPI }
)(NavBarContainer);
