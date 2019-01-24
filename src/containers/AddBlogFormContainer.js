import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddBlogForm from '../components/AddBlogForm';
import { postBlogsToAPI } from '../actionCreator';

class AddBlogFormContainer extends Component {
  render() {
    return <AddBlogForm {...this.props} />;
  }
}

export default connect(
  null,
  { postBlogsToAPI }
)(AddBlogFormContainer);
