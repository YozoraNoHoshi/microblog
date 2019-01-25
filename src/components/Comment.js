import React, { Component } from 'react';
// Uses container

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = { text: this.props.comment.text, disabled: true };
  }
  delete = () => {
    this.props.deleteCommentToAPI(this.props.blogId, this.props.comment.id);
  };
  edit = () => {
    this.setState({ disabled: !this.state.disabled });
  };

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };
  handleSubmit = evt => {
    evt.preventDefault();
    this.props.editCommentToAPI(this.props.blogId, {
      ...this.props.comment,
      text: this.state.text
    });
    this.setState({ disabled: true });
  };

  render() {
    return (
      <li className="container list-unstyled">
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <input
              type="text"
              className="form-control col-6"
              id="text"
              name="text"
              value={this.state.text}
              onChange={this.handleChange}
              disabled={this.state.disabled}
            />
            {this.state.disabled ? (
              false
            ) : (
              <button type="submit" className="btn btn-primary col-2">
                submit
              </button>
            )}
          </div>
        </form>
        <button onClick={this.edit} className="btn btn-link">
          edit
        </button>
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
