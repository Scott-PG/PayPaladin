import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserContext from "../contexts/UserContext";

export default class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { username, password } = this.state;
    return (
      <UserContext.Consumer>
        {(context) => (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              context.handleLogin(this.state);
              context.confirmUser();
              this.props.history.push("/");
            }}
          >
            <h3>Login</h3>
            <label htmlFor="username">Username:</label>
            <input
              id="username"
              type="text"
              name="username"
              value={username}
              onChange={this.handleChange}
            />
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
            <Link to="/register">Register</Link>
            <button>Submit</button>
          </form>
        )}
      </UserContext.Consumer>
    );
  }
}
