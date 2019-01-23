import React, { Component } from 'react';
import BlogCard from './BlogCard';
// view list of all the blogs
class Home extends Component {
  //componentDidMount() {}
  //this.props.blogs

  render() {
    return (
      <div>
        {this.props.blogs.map(blog => (
          <BlogCard blog={blog} key={blog.id} />
        ))}
      </div>
    );
  }
}

Home.defaultProps = {};

Home.propTypes = {};

export default Home;
