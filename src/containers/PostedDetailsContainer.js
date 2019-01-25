import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostedDetails from '../components/PostedDetails';
import {
  deleteBlogsToAPI,
  putBlogsToAPI,
  getAllCommentsBlogId
} from '../actionCreator';
import { withRouter } from 'react-router-dom';
class PostedDetailsContainer extends Component {
  render() {
    return <PostedDetails {...this.props} />;
  }
}

function mapStateToProps(state) {
  return { blogs: state.blogs, comments: state.comments };
}
// should add the comments to the states

export default withRouter(
  connect(
    mapStateToProps,
    { deleteBlogsToAPI, putBlogsToAPI, getAllCommentsBlogId }
  )(PostedDetailsContainer)
);
