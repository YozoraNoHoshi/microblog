import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewCommentForm from '../components/NewCommentForm';
import { addComment } from '../actionCreator';

class NewCommentFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return <NewCommentForm {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(
  mapStateToProps,
  { addComment }
)(NewCommentFormContainer);
