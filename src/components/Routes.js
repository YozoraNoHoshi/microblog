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
          render={() => {
            return <HomeContainer />;
          }}
        />

        <Route
          path="/new"
          exact
          render={props => <AddBlogFormContainer {...props} />}
        />
        <Route
          path="/blogs/:id"
          exact
          //component force the compponent to rerender
          component={PostedDetailsContainer}
        />
        <Redirect to="/" />
      </Switch>
    );
  }
}
export default Routes;
