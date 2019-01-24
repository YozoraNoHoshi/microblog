import React, { Component } from 'react';
// import uuid from 'uuid/v4';

// Uses container

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
    this.props.postBlogsToAPI(this.state);
    // this.props.addPost({ ...this.state, id: uuid(), comments: [] });
    this.props.history.push('/');
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1 className="text-left">New Post</h1>
        <div className="form-group row">
          <label className="col-sm-2" htmlFor="title">
            Title
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2" htmlFor="description">
            Description
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              onChange={this.handleChange}
              value={this.state.description}
            />
          </div>
        </div>

        <div className="form-group">
          <label className="text-left" htmlFor="body">
            Body
          </label>
          <textarea
            className="form-control"
            id="body"
            rows="3"
            name="body"
            value={this.state.body}
            onChange={this.handleChange}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

AddBlogForm.defaultProps = {};

AddBlogForm.propTypes = {};

export default AddBlogForm;
