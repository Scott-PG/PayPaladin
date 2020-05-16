import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import {
  getOneCampaign,
  leaveCampaignPC,
  putCampaign,
  destroyCampaign,
} from "../services/api-helper";
import UserContext from "./contexts/UserContext";

const CampaignSettings = ({
  userId: propUserId,
  campaignId: propCampaignId,
}) => {
  const [user_id] = useState(propUserId);
  const [campaignId] = useState(parseInt(propCampaignId));
  const [campaign, setCampaign] = useState(null);
  const [characters, setCharacters] = useState(null);
  const [name, setName] = useState("");
  const [showNameChange, setShowNameChange] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const history = useHistory();
  const context = useContext(UserContext);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await getOneCampaign(campaignId);
      setCampaign(resp);
      if (resp.player_characters.length !== 0) {
        setCharacters(resp.player_characters);
      }
    };
    fetchData();
  }, [campaignId]);

  const handleNameChange = (e) => {
    const { value } = e.target;
    setName(value);
  };

  const toggleShowNameChangeTrue = () => {
    setShowNameChange(true);
    setShowDelete(false);
  };

  const toggleShowDeleteTrue = () => {
    setShowNameChange(false);
    setShowDelete(true);
  };

  const toggleAllChangeFalse = () => {
    setShowNameChange(false);
    setShowDelete(false);
  };

  const campaignSubmit = async () => {
    await putCampaign(campaignId, { name: name, user_id: user_id });
    await context.readMyCampaignsAndCharacters();
    history.push(`/campaigns/${campaignId}`);
  };

  const kickPlayers = async () => {
    if (characters !== null) {
      characters.map(async (character) => {
        await leaveCampaignPC(character.id);
      });
      setCharacters(null);
    }
    return;
  };

  const deleteCampaign = async () => {
    await kickPlayers();
    await destroyCampaign(campaignId);
    await context.readMyCampaignsAndCharacters();
    history.push(`/mycampaigns`);
  };

  return (
    <>
      {campaign === null ? null : (
        <>
          <h3>Campaign Settings for {campaign.name}</h3>
          <p>These settings are considered dangerous.</p>
          <p>
            They are hidden until you press the corresponding "Show" button.
          </p>
          <p>They will be applied instantly. You have been warned.</p>
          <div className="campaign-danger-button-div">
            {showNameChange === false ? (
              <button onClick={toggleShowNameChangeTrue}>
                Show Name Change
              </button>
            ) : (
              <button onClick={toggleAllChangeFalse}>Hide Name Change</button>
            )}
            {showDelete === false ? (
              <button onClick={toggleShowDeleteTrue}>
                Show Campaign Delete
              </button>
            ) : (
              <button onClick={toggleAllChangeFalse}>
                Hide Campaign Delete
              </button>
            )}
          </div>
          <div className="campaign-danger-settings">
            {showNameChange === false ? null : (
              <>
                <h4>Edit Campaign Name</h4>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    campaignSubmit();
                  }}
                >
                  <label htmlFor="name">New Campaign Name</label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleNameChange}
                  />
                  <button>Submit</button>
                </form>
              </>
            )}
            {showDelete === false ? null : (
              <button onClick={deleteCampaign}>Delete Your Campaign?</button>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default CampaignSettings;
