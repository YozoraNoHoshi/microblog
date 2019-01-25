import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comment from '../components/Comment';
import { deleteCommentToAPI, editCommentToAPI } from '../actionCreator';

class CommentContainer extends Component {
  render() {
    return <Comment {...this.props} />;
  }
}

export default connect(
  null,
  { deleteCommentToAPI, editCommentToAPI }
)(CommentContainer);
