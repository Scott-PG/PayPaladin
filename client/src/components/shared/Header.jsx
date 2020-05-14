import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import UserContext from "../contexts/UserContext";

class Header extends Component {
  async componentDidMount() {
    await this.props.confirmUser();
    await this.props.readMyCampaignsAndCharacters(this.props.user.id);
  }

  render() {
    return (
      <header>
        <h1>PayPaladin</h1>
        <UserContext.Consumer>
          {(context) => (
            <>
              {context.user ? (
                <>
                  <p>{context.user.username}</p>
                  <button
                    onClick={() => {
                      context.handleLogout();
                      this.props.history.push("/");
                    }}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link to="/login">Login/Register</Link>
              )}
              {context.user && (
                <>
                  <Link to="/campaigns">Campaigns</Link>
                  <Link to="/characters">Characters</Link>
                </>
              )}
            </>
          )}
        </UserContext.Consumer>
      </header>
    );
  }
}

export default withRouter(Header);
