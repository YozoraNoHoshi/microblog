import React, { Component } from 'react';
// Uses container

class Comment extends Component {
  delete = () => {
    this.props.deleteComment(this.props.blogId, this.props.comment.id);
  };

  render() {
    return (
      <li className="container">
        <span>{this.props.comment.text}</span>

        <button onClick={this.delete} className="btn btn-link">
          delete
        </button>
      </li>
    );
  }
}

Comment.defaultProps = {};

Comment.propTypes = {};

export default Comment;
