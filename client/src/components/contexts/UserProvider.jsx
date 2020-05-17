import UserContext from "./UserContext";
import React, { Component } from "react";

import {
  loginUser,
  registerUser,
  verifyUser,
  removeToken,
  getOneUser,
} from "../../services/api-helper";

export default class UserProvider extends Component {
  state = {
    currentUser: null,
    myCharacters: [],
    myCampaigns: [],
  };

  render() {
    return (
      <UserContext.Provider
        value={{
          user: this.state.currentUser,
          myCharacters: this.state.myCharacters,
          myCampaigns: this.state.myCampaigns,
          handleLogin: async (loginData) => {
            const currentUser = await loginUser(loginData);
            this.setState({ currentUser });
            const resp = await getOneUser(currentUser.id);
            if (resp.campaigns != null) {
              let myCampaigns = resp.campaigns;
              this.setState({ myCampaigns });
            }
            if (resp.player_characters != null) {
              let myCharacters = resp.player_characters;
              this.setState({ myCharacters });
            }
          },
          handleLogout: async () => {
            localStorage.clear();
            this.setState({
              currentUser: null,
              myCharacters: [],
              myCampaigns: [],
            });
            removeToken();
          },
          handleRegister: async (registerData) => {
            const currentUser = await registerUser(registerData);
            this.setState({ currentUser });
          },
          confirmUser: async () => {
            const currentUser = await verifyUser();
            this.setState({ currentUser });
            if (currentUser !== null) {
              const resp = await getOneUser(currentUser.id);
              if (resp.campaigns != null) {
                let myCampaigns = resp.campaigns;
                this.setState({ myCampaigns });
              }
              if (resp.player_characters != null) {
                let myCharacters = resp.player_characters;
                this.setState({ myCharacters });
              }
            }
          },
          readMyCampaignsAndCharacters: async () => {
            const resp = await getOneUser(this.state.currentUser.id);
            if (resp.campaigns != null) {
              let myCampaigns = resp.campaigns;
              this.setState({ myCampaigns });
            }
            if (resp.player_characters != null) {
              let myCharacters = resp.player_characters;
              this.setState({ myCharacters });
            }
          },
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
