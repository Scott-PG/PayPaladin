import React, { Component } from "react";
import UserContext from "../contexts/UserContext";
import { Redirect } from "react-router";
import "./HomeLoginRegister.css";

export default class Register extends Component {
  state = {
    username: "",
    email: "",
    password: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { username, email, password } = this.state;
    return (
      <UserContext.Consumer>
        {(context) => (
          <>
            {context.user !== null ? (
              <Redirect to="/mycharacters" />
            ) : (
              <div className="authentication-card">
                <h3>Register</h3>
                <br />
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    context.handleRegister(this.state);
                    this.setState({
                      username: "",
                      email: "",
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
                      placeholder="This name is public"
                      value={username}
                      onChange={this.handleChange}
                    />
                  </div>
                  <br />
                  <div className="auth-field">
                    <label htmlFor="email">Email:</label>
                    <input
                      id="email"
                      type="text"
                      name="email"
                      placeholder="This email is kept private"
                      value={email}
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
                      placeholder="Length of 6 or more"
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
