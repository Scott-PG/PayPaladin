import React, { Component } from "react";
import UserContext from "../contexts/UserContext";
import "./Layout.css";

import Header from "./Header";
import Main from "../Main";
import Footer from "./Footer";

class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <UserContext.Consumer>
          {(context) => (
            <Header
              confirmUser={context.confirmUser}
              readMyCampaignsAndCharacters={
                context.readMyCampaignsAndCharacters
              }
              user={context.user}
            />
          )}
        </UserContext.Consumer>
        <div className="layout-children">
          <Main />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Layout;
