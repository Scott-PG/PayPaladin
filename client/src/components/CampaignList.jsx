import React from "react";
import { Link } from "react-router-dom";

export default function CampaignList(props) {
  return (
    <div>
      <h3>My Campaigns</h3>
      {props.myCampaigns.map((campaign) => (
        <React.Fragment key={campaign.id}>
          <p>{campaign.name}</p>
          <button
            onClick={() => {
              props.history.push(`/campaigns/${campaign.id}/edit`);
            }}
          >
            Edit
          </button>
        </React.Fragment>
      ))}
      <Link to="campaigns/new">
        <button>Create</button>
      </Link>
      <h3>Campaigns</h3>
      {props.campaigns.map((campaign) => (
        <React.Fragment key={campaign.id}>
          <p>{campaign.name}</p>
          <button
            onClick={() => {
              props.history.push(`/campaigns/${campaign.id}`);
            }}
          >
            View
          </button>
        </React.Fragment>
      ))}
    </div>
  );
}
