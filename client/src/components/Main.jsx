import React, { Component } from "react";
import { Route } from "react-router-dom";

import Login from "./shared/Login";
import Register from "./shared/Register";
import { getAllCampaigns } from "../services/api-helper";
import MyCampaignList from "./MyCampaignList";
import MyCharacterList from "./MyCharacterList";
import CampaignList from "./CampaignList";

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
      </main>
    );
  }
}
