import React, { Component } from "react";
import { Route } from "react-router-dom";

import Login from "./shared/Login";
import Register from "./shared/Register";
import {
  getAllCampaigns,
  postCampaign,
  postPC,
  getOneUser,
} from "../services/api-helper";
import CampaignList from "./CampaignList";
import CharacterList from "./CharacterList";

export default class Main extends Component {
  state = {
    campaigns: [],
  };
  // async componentDidMount() {
  //   let user = await verifyUser();
  //   await this.readAllCampaigns();
  //   await this.readMyCampaignsAndCharacters(user.id);
  // }

  // readAllCampaigns = async () => {
  //   const otherCampaigns = await getAllCampaigns();
  //   this.setState({ otherCampaigns });
  // };

  readMyCampaignsAndCharacters = async (id) => {
    const resp = await getOneUser(id);
    if (resp.campaigns != null) {
      let myCampaigns = resp.campaigns;
      this.setState({ myCampaigns });
    }
    if (resp.player_characters != null) {
      let myCharacters = resp.player_characters;
      this.setState({ myCharacters });
    }
  };

  // handleCampaignSubmit = async (campaignData) => {
  //   const newCampaign = await postCampaign(campaignData);
  //   this.setState((prevState) => ({
  //     campaigns: [...prevState.campaigns, newCampaign],
  //   }));
  // };

  // handleCharacterSubmit = async (characterData) => {
  //   const newCharacter = await postPC(characterData);
  //   this.setState((prevState) => ({
  //     characters: [...prevState.characters, newCharacter],
  //   }));
  // };
  render() {
    return (
      <main>
        <Route
          path="/login"
          render={(props) => (
            <Login
              {...props}
              // handleLogin={this.props.handleLogin}
            />
          )}
        />
        <Route
          path="/register"
          render={(props) => (
            <Register
              {...props}
              // handleRegister={this.props.handleRegister}
            />
          )}
        />
        <Route
          exact
          path="/campaigns"
          render={(props) => (
            <CampaignList
              {...props}
              campaigns={this.state.otherCampaigns}
              myCampaigns={this.state.myCampaigns}
            />
          )}
        />
        <Route
          exact
          path="/characters"
          render={(props) => (
            <CharacterList {...props} characters={this.state.characters} />
          )}
        />
      </main>
    );
  }
}
