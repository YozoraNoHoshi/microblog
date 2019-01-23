import React, { Component } from 'react';
import uuid from 'uuid/v4';

class AddBlogForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      body: ''
    };
  }

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.submit({ ...this.state, id: uuid(), comments: [] });
    this.props.history.push('/');
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>New Post</h1>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            onChange={this.handleChange}
            value={this.state.description}
          />
        </div>

        <div className="form-group">
          <label htmlFor="body">Body</label>
          <textarea
            className="form-control"
            id="body"
            rows="3"
            name="body"
            value={this.state.body}
            onChange={this.handleChange}
          />
        </div>
        <button>Submit</button>
      </form>
    );
  }
}

AddBlogForm.defaultProps = {};

AddBlogForm.propTypes = {};

export default AddBlogForm;
