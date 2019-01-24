import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddBlogForm from '../components/AddBlogForm';
import { addPost } from '../actionCreator';

class AddBlogFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return <AddBlogForm {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(
  mapStateToProps,
  { addPost }
)(AddBlogFormContainer);
