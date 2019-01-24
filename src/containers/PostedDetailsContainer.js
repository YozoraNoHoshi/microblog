import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostedDetails from '../components/PostedDetails';
import { deleteBlogsToAPI, putBlogsToAPI } from '../actionCreator';
import { withRouter } from 'react-router-dom';
class PostedDetailsContainer extends Component {
  render() {
    console.log('broken?');
    return <PostedDetails {...this.props} />;
  }
}

function mapStateToProps(state) {
  return { blogs: state.blogs };
}

export default withRouter(
  connect(
    mapStateToProps,
    { deleteBlogsToAPI, putBlogsToAPI }
  )(PostedDetailsContainer)
);
