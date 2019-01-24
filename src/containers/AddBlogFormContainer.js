import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddBlogForm from '../components/AddBlogForm';
import { addPost } from '../actionCreator';

class AddBlogFormContainer extends Component {
  render() {
    return <AddBlogForm {...this.props} />;
  }
}

// function mapStateToProps(state) {
//   return {null};
// }

export default connect(
  null,
  { addPost }
)(AddBlogFormContainer);
