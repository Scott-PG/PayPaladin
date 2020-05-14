import React, { useState, useEffect } from "react";
import { getOneCampaign, joinCampaignPC } from "../services/api-helper";

const CampaignShowJoin = ({
  id: propCampaignId,
  characters: propCharacters,
}) => {
  const [campaignId] = useState(propCampaignId);
  const [campaign, setCampaign] = useState(null);
  const [emptyCharacters, setEmptyCharacters] = useState([]);
  const [characterSelect, setCharacterSelect] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await getOneCampaign(campaignId);
      setCampaign(resp);
    };
    fetchData();
  }, [campaignId]);

  useEffect(() => {
    let emptyCharacters = propCharacters.filter(
      (character) => character.campaign_id == null
    );
    setEmptyCharacters(emptyCharacters);
  }, [propCharacters]);

  const handleDropdownChange = (event) => {
    const charSwitch = event.target.value;
    setCharacterSelect(charSwitch);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await joinCampaignPC(characterSelect, {
      campaign_id: parseInt(campaignId),
    });
    window.location.reload(false);
  };

  return (
    <div>
      {campaign == null ? null : (
        <>
          <h3>{campaign.name}</h3>
          <div className="campaign-player-list">
            {campaign.player_characters.map((character, id) => (
              <h4 key={id}>{character.name}</h4>
            ))}
          </div>
          {!Array.isArray(emptyCharacters) || !emptyCharacters.length ? null : (
            <form className="create-form" onSubmit={handleSubmit}>
              <select defaultValue="" onChange={handleDropdownChange}>
                <option key="0" value="">
                  Please Select an Option
                </option>
                {emptyCharacters.map((character, id) => (
                  <option key={id + 1} value={character.id}>
                    {character.name}
                  </option>
                ))}
              </select>
              <button>Join</button>
            </form>
          )}
        </>
      )}
    </div>
  );
};

export default CampaignShowJoin;
