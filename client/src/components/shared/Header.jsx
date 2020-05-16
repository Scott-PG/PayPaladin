import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import "./Header.css";

class Header extends Component {
  async componentDidMount() {
    await this.props.confirmUser();
    await this.props.readMyCampaignsAndCharacters(this.props.user.id);
  }

  render() {
    return (
      <header>
        <h1 className="logo">PayPaladin</h1>
        <UserContext.Consumer>
          {(context) => (
            <>
              {context.user ? (
                <div className="navlinks">
                  <p className="welcome-message">
                    Welcome, {context.user.username}
                  </p>
                  <Link className="nav-link" to="/mycharacters">
                    My Characters
                  </Link>
                  <Link className="nav-link" to="/mycampaigns">
                    My Campaigns
                  </Link>

                  <button
                    className="nav-logout-button"
                    onClick={() => {
                      context.handleLogout();
                      this.props.history.push("/");
                    }}
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="navlinks">
                  <Link className="nav-link" to="/login">
                    Login/Register
                  </Link>
                </div>
              )}
            </>
          )}
        </UserContext.Consumer>
      </header>
    );
  }
}

export default withRouter(Header);
