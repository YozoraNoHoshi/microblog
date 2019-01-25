import React, { Component } from 'react';
import { connect } from 'react-redux';
import { votePost } from '../actionCreator';

import Vote from '../components/Vote';

class VoteContainer extends Component {
  render() {
    return <Vote {...this.props} />;
  }
}

function mapStateToProps(state, ownProps) {
  if (state.blogs[ownProps.blogId]) {
    return { vote: state.blogs[ownProps.blogId].votes };
  } else return {};
}
export default connect(
  mapStateToProps,
  { votePost }
)(VoteContainer);
