import React, { Component } from 'react';
import Comment from './Comment';
import NewCommentForm from './NewCommentForm';

class PostedDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blog: { title: '', description: '', body: '', comments: [] },
      disabled: true
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    const blogs = this.props.blogs;
    const blog = blogs.find(blog => blog.id === id);
    if (blog) {
      this.setState({ blog });
    } else {
      alert('not existing');
      this.props.history.push('/');
    }
    //the state.blog will have id after above
  }
  edit = () => {
    this.setState({ disabled: false });
  };

  handleChange = evt => {
    this.setState({
      blog: { ...this.state.blog, [evt.target.name]: evt.target.value }
    });
  };

  handleEdit = evt => {
    evt.preventDefault();
    this.props.edit(this.state.blog);
    this.props.history.push('/');
  };

  handleDelete = evt => {
    evt.preventDefault();
    this.props.delete(this.state.blog.id);
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <section>
          <form onSubmit={this.handleEdit}>
            <h1>New Post</h1>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={this.state.blog.title}
                onChange={this.handleChange}
                disabled={this.state.disabled}
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
                value={this.state.blog.description}
                disabled={this.state.disabled}
              />
            </div>

            <div className="form-group">
              <label htmlFor="body">Body</label>
              <textarea
                className="form-control"
                id="body"
                rows="3"
                name="body"
                value={this.state.blog.body}
                onChange={this.handleChange}
                disabled={this.state.disabled}
              />
            </div>
            <button disabled={this.state.disabled}>Submit</button>
          </form>
          <button onClick={this.edit}>Edit</button>
          <button onClick={this.handleDelete}>Delete</button>
        </section>
        <section>
          <h2>Comments:</h2>
          {this.state.blog.comments.map(comment => (
            <Comment
              key={comment.id}
              blogId={this.state.blog.id}
              comment={comment}
              deleteComment={this.props.deleteComment}
            />
          ))}
          <NewCommentForm
            addComment={this.props.addComment}
            blogId={this.state.blog.id}
          />
        </section>
      </div>
    );
  }
}

PostedDetails.defaultProps = {};

PostedDetails.propTypes = {};

export default PostedDetails;
