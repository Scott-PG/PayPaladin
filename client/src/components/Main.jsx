import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import UserContext from "./contexts/UserContext";

import Login from "./shared/Login";
import Register from "./shared/Register";
import MyCampaignList from "./MyCampaignList";
import MyCharacterList from "./MyCharacterList";
import CampaignList from "./CampaignList";
import CampaignShowJoin from "./CampaignShowJoin";
import CharacterShowMoney from "./CharacterShowMoney";
import CharacterCreate from "./CharacterCreate";

export default class Main extends Component {
  render() {
    return (
      <main>
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
        <Route
          exact
          path="/campaigns"
          render={(props) => <CampaignList {...props} />}
        />
        <UserContext.Consumer>
          {(context) => (
            <Route
              exact
              path="/campaigns/:id"
              render={(props) => {
                const { id } = props.match.params;
                return (
                  <CampaignShowJoin
                    id={parseInt(id)}
                    characters={context.myCharacters}
                  />
                );
              }}
            />
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
