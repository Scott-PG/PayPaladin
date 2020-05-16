import React, { Component } from "react";
import UserContext from "../contexts/UserContext";

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
          <div className="authentication-card">
            <h3>Register</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                context.handleRegister(this.state);
                context.confirmUser();
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
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                type="text"
                name="email"
                value={email}
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
