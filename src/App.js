import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';
import Routes from './Routes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { blogs: [] };
  }

  addBlog = blogObj => {
    this.setState({ blogs: [...this.state.blogs, blogObj] });
  };

  edit = blogObj => {
    let updatedBlogs = this.state.blogs.map(blog => {
      if (blog.id === blogObj.id) {
        return blogObj;
      }
      return blog;
    });

    this.setState({ blogs: updatedBlogs });
  };

  delete = id => {
    let filteredBlogs = this.state.blogs.filter(blog => blog.id !== id);
    this.setState({ blogs: filteredBlogs });
  };

  deleteComment = (blogId, commentId) => {
    let filteredBlogComments = this.state.blogs.map(blog => {
      if (blog.id === blogId) {
        let filteredComments = blog.comments.filter(
          comment => comment.id !== commentId
        );
        return { ...blog, comments: filteredComments };
      }
      return blog;
    });

    this.setState({ blogs: filteredBlogComments });
  };

  addComment = (commentObj, blogId) => {
    let updatedBlogWithNewComment = this.state.blogs.map(blog => {
      if (blog.id === blogId) {
        blog.comments.push(commentObj);
        return blog;
      }
      return blog;
    });
    this.setState({ blogs: updatedBlogWithNewComment });
  };

  render() {
    return (
      <div className="App">
        <NavBar />
        <Routes
          blogs={this.state.blogs}
          submit={this.addBlog}
          edit={this.edit}
          delete={this.delete}
          deleteComment={this.deleteComment}
          addComment={this.addComment}
        />
      </div>
    );
  }
}

export default App;
