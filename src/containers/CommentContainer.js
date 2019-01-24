import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comment from '../components/Comment';
import { deleteComment } from '../actionCreator';

class CommentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return <Comment {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(
  mapStateToProps,
  { deleteComment }
)(CommentContainer);
