import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewCommentForm from '../components/NewCommentForm';
import { postCommentToAPI } from '../actionCreator';

class NewCommentFormContainer extends Component {
  render() {
    return <NewCommentForm {...this.props} />;
  }
}

export default connect(
  null,
  { postCommentToAPI }
)(NewCommentFormContainer);
