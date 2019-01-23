import React, { Component } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import AddBlogForm from './AddBlogForm';
import Home from './Home';
import PostedDetails from './PostedDetails';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route
          path="/"
          exact
          render={() => <Home blogs={this.props.blogs} />}
        />
        <Route
          path="/new"
          exact
          render={props => (
            <AddBlogForm submit={this.props.submit} {...props} />
          )}
        />
        <Route
          path="/blogs/:id"
          exact
          //component force the compponent to rerender
          component={props => (
            <PostedDetails
              blogs={this.props.blogs}
              edit={this.props.edit}
              delete={this.props.delete}
              deleteComment={this.props.deleteComment}
              addComment={this.props.addComment}
              {...props}
            />
          )}
        />
        <Redirect to="/" />
      </Switch>
    );
  }
}
export default Routes;
