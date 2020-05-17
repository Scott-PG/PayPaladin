import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import "./HomeLoginRegister.css";

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
          <>
            {context.user !== null ? (
              <Redirect to="/mycharacters" />
            ) : (
              <div className="authentication-card">
                <h3>Login</h3>
                <br />
                <p>
                  New User? <Link to="/register">Register here.</Link>
                </p>
                <br />
                <form
                  className="auth-form"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    context.handleLogin(this.state);
                    this.setState({
                      username: "",
                      password: "",
                    });
                  }}
                >
                  <div className="auth-field">
                    <label htmlFor="username">Username:</label>
                    <input
                      id="username"
                      type="text"
                      name="username"
                      value={username}
                      onChange={this.handleChange}
                    />
                  </div>
                  <br />
                  <div className="auth-field">
                    <label htmlFor="password">Password:</label>
                    <input
                      id="password"
                      type="password"
                      name="password"
                      value={password}
                      onChange={this.handleChange}
                    />
                  </div>
                  <br />
                  <button>Submit</button>
                </form>
              </div>
            )}
          </>
        )}
      </UserContext.Consumer>
    );
  }
}
