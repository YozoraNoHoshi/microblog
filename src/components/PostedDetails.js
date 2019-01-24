import React, { Component } from 'react';
// import Comment from './Comment';
// import NewCommentForm from './NewCommentForm';
import NewCommentFormContainer from '../containers/NewCommentFormContainer';
import CommentContainer from '../containers/CommentContainer';
import VoteContainer from '../containers/VoteContainer';
// Container

class PostedDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // For edit form
      blog: {
        title: '',
        description: '',
        body: '',
        comments: [],
        votes: 0
      },
      disabled: true
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    const blog = this.props.blogs[id];
    if (blog) {
      this.setState({ blog });
    } else {
      this.props.history.push('/');
    }
    //the state.blog will have id after above
  }
  edit = () => {
    this.setState({ disabled: !this.state.disabled });
  };

  handleChange = evt => {
    this.setState({
      blog: { ...this.state.blog, [evt.target.name]: evt.target.value }
    });
  };

  handleEdit = evt => {
    evt.preventDefault();
    this.props.putBlogsToAPI(this.state.blog, this.props.match.params.id);
    this.props.history.push('/');
  };

  handleDelete = evt => {
    evt.preventDefault();
    this.props.deleteBlogsToAPI(this.state.blog.id);
    this.props.history.push('/');
  };

  render() {
    let vote = this.state.blog.id ? (
      <VoteContainer blogId={this.state.blog.id} />
    ) : (
      false
    );
    return (
      <div>
        <section>
          <form onSubmit={this.handleEdit}>
            <h1>Edit Post</h1>
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
            <button hidden={this.state.disabled} className="btn btn-danger">
              Submit
            </button>
          </form>
          <button onClick={this.edit} className="btn btn-primary">
            Edit
          </button>
          <button onClick={this.handleDelete} className="btn btn-primary">
            Delete
          </button>
          {vote}
        </section>
        <section>
          <h2>Comments:</h2>
          <div className="container">
            {this.state.blog.comments.map(comment => (
              <CommentContainer
                key={comment.id}
                blogId={this.state.blog.id}
                comment={comment}
              />
            ))}
          </div>
          <NewCommentFormContainer blogId={this.state.blog.id} />
        </section>
      </div>
    );
  }
}

PostedDetails.defaultProps = {};

PostedDetails.propTypes = {};

export default PostedDetails;
