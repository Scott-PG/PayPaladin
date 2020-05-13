import React, { Component } from "react";
import { Route } from "react-router-dom";

import Login from "./Login";
import Register from "./Register";

export default class Main extends Component {
  state = {
    campaigns: [],
    characters: [],
  };

  render() {
    return (
      <main>
        <Route
          path="/login"
          render={(props) => (
            <Login {...props} handleLogin={this.props.handleLogin} />
          )}
        />
        <Route
          path="/register"
          render={(props) => (
            <Register {...props} handleRegister={this.props.handleRegister} />
          )}
        />
      </main>
    );
  }
}
