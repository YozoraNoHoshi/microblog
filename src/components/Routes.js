import React, { Component } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
// import AddBlogForm from './AddBlogForm';
// import PostedDetails from './PostedDetails';
import HomeContainer from '../containers/HomeContainer';
import AddBlogFormContainer from '../containers/AddBlogFormContainer';
import PostedDetailsContainer from '../containers/PostedDetailsContainer';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route
          path="/"
          exact
          render={() => <HomeContainer blogs={this.props.blogs} />}
        />
        <Route
          path="/new"
          exact
          render={props => (
            <AddBlogFormContainer {...props} />
            // <AddBlogForm submit={this.props.submit} {...props} />
          )}
        />
        <Route
          path="/blogs/:id"
          exact
          //component force the compponent to rerender
          component={props => (
            <PostedDetailsContainer
              // blogs={this.props.blogs}
              // edit={this.props.edit}
              // delete={this.props.delete}
              // deleteComment={this.props.deleteComment}
              // addComment={this.props.addComment}
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
