import React, { Component } from "react";
import { Route } from "react-router-dom";

import UserContext from "./contexts/UserContext";

import Login from "./shared/Login";
import Register from "./shared/Register";
import MyCampaignList from "./MyCampaignList";
import MyCharacterList from "./MyCharacterList";
import CampaignList from "./CampaignList";
import CampaignShowJoin from "./CampaignShowJoin";

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
      </main>
    );
  }
}
