import React, { Component } from "react";

import Header from "./Header";
import Main from "../Main";
import Footer from "./Footer";
import {
  loginUser,
  registerUser,
  verifyUser,
  removeToken,
} from "../../services/api-helper";
import { withRouter } from "react-router-dom";

class Layout extends Component {
  state = {
    currentUser: null,
  };

  componentDidMount() {
    this.confirmUser();
  }

  handleLogin = async (loginData) => {
    const currentUser = await loginUser(loginData);
    this.setState({ currentUser });
  };

  handleLogout = async () => {
    localStorage.clear();
    this.setState({ currentUser: null });
    removeToken();
    this.props.history.push("/");
  };

  handleRegister = async (registerData) => {
    const currentUser = await registerUser(registerData);
    this.setState({ currentUser });
  };

  confirmUser = async () => {
    const currentUser = await verifyUser();
    this.setState({ currentUser });
  };

  render() {
    return (
      <div className="layout">
        <Header
          currentUser={this.state.currentUser}
          handleLogout={this.handleLogout}
        />
        <div className="layout-children">
          <Main
            handleLogin={this.handleLogin}
            handleRegister={this.handleRegister}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Layout);
