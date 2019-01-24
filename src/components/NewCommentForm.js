import React, { Component } from 'react';
import uuid from 'uuid/v4';
// Container

class NewCommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = { comment: '' };
  }

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.addComment({ ...this.state, id: uuid() }, this.props.blogId);
    this.setState({ comment: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="newComment">New Comment</label>
          <input
            type="text"
            className="form-control"
            id="comment"
            name="comment"
            onChange={this.handleChange}
            value={this.state.comment}
          />
        </div>
        <button>submit</button>
      </form>
    );
  }
}

NewCommentForm.defaultProps = {};

NewCommentForm.propTypes = {};

export default NewCommentForm;
