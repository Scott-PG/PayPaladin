import React, { Component } from "react";
import { getAllCampaigns } from "../services/api-helper";

export default class CampaignList extends Component {
  state = {
    campaigns: [],
  };

  componentDidMount() {
    this.readAllCampaigns();
  }

  readAllCampaigns = async () => {
    const campaigns = await getAllCampaigns();
    this.setState({ campaigns });
  };

  render() {
    return (
      <div>
        <h3>All Campaigns</h3>
        {this.state.campaigns.map((campaign) => (
          <React.Fragment key={campaign.id}>
            <p>
              {campaign.name} - {campaign.user.username}
            </p>
            <button
              onClick={() => {
                this.props.history.push(`/campaigns/${campaign.id}`);
              }}
            >
              View
            </button>
          </React.Fragment>
        ))}
      </div>
    );
  }
}