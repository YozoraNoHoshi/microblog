import React, { Component } from 'react';

class Comment extends Component {
  delete = () => {
    this.props.deleteComment(this.props.blogId, this.props.comment.id);
  };

  render() {
    return (
      <div>
        <button onClick={this.delete}>delete</button>
        <p>{this.props.comment.comment}</p>
      </div>
    );
  }
}

Comment.defaultProps = {};

Comment.propTypes = {};

export default Comment;
