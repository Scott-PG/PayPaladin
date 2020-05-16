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
              <div className="list-div" key={campaign.id}>
                <p>{campaign.name}</p>
                <div className="list-div-buttons">
                  <button
                    onClick={() => {
                      props.history.push(`/campaigns/${campaign.id}`);
                    }}
                  >
                    View
                  </button>
                  <button
                    onClick={() => {
                      props.history.push(`/campaigns/${campaign.id}/settings`);
                    }}
                  >
                    Settings
                  </button>
                </div>
              </div>
            ))}
          </>
        )}
      </UserContext.Consumer>
      <br />
      <br />
      <Link to="mycampaigns/create">
        <button>Create</button>
      </Link>
      <br />
      <br />
      <Link to="campaigns/">
        <button>All Campaigns</button>
      </Link>
    </div>
  );
}
