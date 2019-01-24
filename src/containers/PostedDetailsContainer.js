import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostedDetails from '../components/PostedDetails';
import { editPost, deletePost } from '../actionCreator';

class PostedDetailsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return <PostedDetails {...this.props} />;
  }
}

function mapStateToProps(state) {
  return { blogs: state.blogs };
}

export default connect(
  mapStateToProps,
  { editPost, deletePost }
)(PostedDetailsContainer);
