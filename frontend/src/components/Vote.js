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
        <div>Overall Rating: {this.props.vote}</div>
        <button className="btn btn-info" onClick={this.handleVoteUp}>
          +
        </button>
        <button className="btn btn-warning" onClick={this.handleVoteDown}>
          -
        </button>
      </div>
    );
  }
}

export default Vote;
