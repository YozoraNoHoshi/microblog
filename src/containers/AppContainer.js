import React, { Component } from 'react';
import App from '../components/App';
import { connect } from 'react-redux';
import { getBlogsFromAPI } from '../actionCreator';
import { withRouter } from 'react-router-dom';

class AppContainer extends Component {
  render() {
    return <App {...this.props} />;
  }
}
function mapStateToProps(state) {
  return { blogs: state.blogs };
}
export default withRouter(
  connect(
    mapStateToProps,
    { getBlogsFromAPI }
  )(AppContainer)
);
