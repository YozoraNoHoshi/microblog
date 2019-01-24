import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comment from '../components/Comment';
import { deleteComment } from '../actionCreator';

class CommentContainer extends Component {
  render() {
    return <Comment {...this.props} />;
  }
}

export default connect(
  null,
  { deleteComment }
)(CommentContainer);
