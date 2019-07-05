import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import './App.scss';
import MainPage from './containers/MainPage';
import UserPage from './containers/UserPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="users" />} />
            <Route exact path="/users" component={MainPage} />
            <Route
              path="/users/:username"
              render={routeProps => (
                <UserPage
                  {...routeProps}
                  username={routeProps.match.params.username}
                />
              )}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
