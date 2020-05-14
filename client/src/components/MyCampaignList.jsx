import React from "react";
import { Link } from "react-router-dom";
import UserContext from "./contexts/UserContext";

export default function MyCampaignList(props) {
  return (
    <div>
      <h3>My Campaigns</h3>
      <UserContext.Consumer>
        {(context) => (
          <>
            {context.myCampaigns.map((campaign) => (
              <React.Fragment key={campaign.id}>
                <p>{campaign.name}</p>
                <button
                  onClick={() => {
                    props.history.push(`/campaigns/${campaign.id}`);
                  }}
                >
                  View
                </button>
                <button
                  onClick={() => {
                    props.history.push(`/campaigns/${campaign.id}/edit`);
                  }}
                >
                  Edit
                </button>
              </React.Fragment>
            ))}
          </>
        )}
      </UserContext.Consumer>
      <Link to="mycampaigns/new">
        <button>Create</button>
      </Link>
    </div>
  );
}
