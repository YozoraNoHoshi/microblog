import React, { Component } from 'react';

class Vote extends Component {
  handleVoteUp = () => {
    this.props.votePost(this.props.blogId, 'up');
  };

  handleVoteDown = () => {
    this.props.votePost(this.props.blogId, 'down');
  };

  render() {
    return (
      <div className="Vote">
        <div>{this.props.vote} votes.</div>
        <button onClick={this.handleVoteUp}>+</button>
        <button onClick={this.handleVoteDown}>-</button>
      </div>
    );
  }
}

export default Vote;
