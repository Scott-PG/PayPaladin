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
          <div className="authentication-card">
            <h3>Login</h3>
            <p>
              New User? <Link to="/register">Register here.</Link>
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                context.handleLogin(this.state);
                this.props.history.push("/");
              }}
            >
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
              <button>Submit</button>
            </form>
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}
