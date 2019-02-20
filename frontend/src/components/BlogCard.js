import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import VoteContainer from '../containers/VoteContainer';
//render the individual blog card
class BlogCard extends Component {
  render() {
    return (
      <div className="col-4 border-box mt-4">
        <div className="card " style={{ width: '18rem' }}>
          <div className="card-body">
            <h5 className="card-title">
              <Link to={`/blogs/${this.props.blog.id}`} className="card-link">
                {this.props.blog.title}
              </Link>
            </h5>
            <p className="card-text">{this.props.blog.description}</p>
            <VoteContainer blogId={this.props.blog.id} />
          </div>
        </div>
      </div>
    );
  }
}

BlogCard.defaultProps = {};

BlogCard.propTypes = {};

export default BlogCard;
