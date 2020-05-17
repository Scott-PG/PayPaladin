import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import UserContext from "./contexts/UserContext";

import Home from "./shared/Home";
import Login from "./shared/Login";
import Register from "./shared/Register";
import MyCampaignList from "./MyCampaignList";
import MyCharacterList from "./MyCharacterList";
import CampaignCreate from "./CampaignCreate";
import CampaignList from "./CampaignList";
import CampaignShowJoin from "./CampaignShowJoin";
import CharacterShowMoney from "./CharacterShowMoney";
import CharacterSettings from "./CharacterSettings";
import CharacterCreate from "./CharacterCreate";
import CampaignSettings from "./CampaignSettings";

export default class Main extends Component {
  render() {
    return (
      <main>
        <Route exact path="/" render={() => <Home />} />
        <Route path="/login" render={(props) => <Login {...props} />} />
        <Route path="/register" render={(props) => <Register {...props} />} />
        <Route
          exact
          path="/mycharacters"
          render={(props) => <MyCharacterList {...props} />}
        />
        <Route
          exact
          path="/mycampaigns"
          render={(props) => <MyCampaignList {...props} />}
        />
        <UserContext.Consumer>
          {(context) => (
            <Route
              exact
              path="/mycampaigns/create"
              render={(props) => {
                let userId;
                context.user !== null
                  ? (userId = context.user.id)
                  : (userId = null);
                return <CampaignCreate userId={userId} {...props} />;
              }}
            />
          )}
        </UserContext.Consumer>
        <Route
          exact
          path="/campaigns"
          render={(props) => <CampaignList {...props} />}
        />
        <UserContext.Consumer>
          {(context) => (
            <Switch>
              <Route
                path="/campaigns/:id/settings"
                render={(props) => {
                  let { id } = props.match.params;
                  let userId;
                  context.user !== null
                    ? (userId = context.user.id)
                    : (userId = null);
                  return (
                    <CampaignSettings
                      campaignId={parseInt(id)}
                      userId={userId}
                    />
                  );
                }}
              />
              <Route
                path="/campaigns/:id/"
                render={(props) => {
                  let { id } = props.match.params;
                  return (
                    <CampaignShowJoin
                      campaignId={parseInt(id)}
                      characters={context.myCharacters}
                    />
                  );
                }}
              />
            </Switch>
          )}
        </UserContext.Consumer>
        <UserContext.Consumer>
          {(context) => (
            <Switch>
              <Route
                path="/mycharacters/create"
                render={(props) => {
                  let userId;
                  context.user !== null
                    ? (userId = context.user.id)
                    : (userId = null);
                  return <CharacterCreate userId={userId} {...props} />;
                }}
              />
              <Route
                path="/mycharacters/:id/settings"
                render={(props) => {
                  let { id } = props.match.params;
                  let userId;
                  context.user !== null
                    ? (userId = context.user.id)
                    : (userId = null);
                  return (
                    <CharacterSettings
                      userId={userId}
                      characterId={parseInt(id)}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                path="/mycharacters/:id"
                render={(props) => <CharacterShowMoney {...props} />}
              />
            </Switch>
          )}
        </UserContext.Consumer>
      </main>
    );
  }
}
