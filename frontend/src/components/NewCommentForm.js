import React, { Component } from 'react';
import uuid from 'uuid/v4';
// Container

class NewCommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.postCommentToAPI(
      { ...this.state, id: uuid() },
      this.props.blogId
    );
    this.setState({ text: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="text" className="float-left">
            New Comment
          </label>
          <input
            type="text"
            className="form-control"
            id="text"
            name="text"
            onChange={this.handleChange}
            value={this.state.text}
          />
        </div>
        <button className="btn btn-primary">submit</button>
      </form>
    );
  }
}

NewCommentForm.defaultProps = {};

NewCommentForm.propTypes = {};

export default NewCommentForm;
