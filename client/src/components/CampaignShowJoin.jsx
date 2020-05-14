import React, { useState, useEffect } from "react";
import { getOneCampaign } from "../services/api-helper";

const CampaignShowJoin = ({
  id: propCampaignId,
  characters: propCharacters,
}) => {
  const [campaignId] = useState(propCampaignId);
  const [campaign, setCampaign] = useState(null);
  const [emptyCharacters, setEmptyCharacters] = useState([]);

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

  // handleDropdownChange = (event) => {
  //   const { name, value } = event.target;
  //   setSelectedChar({
  //     [name]: value,
  //   });
  // };

  return (
    <div>
      {campaign == null ? (
        <h3>Plane Shifting, Please Wait.</h3>
      ) : (
        <>
          <h3>{campaign.name}</h3>
          <div className="campaign-player-list">
            {campaign.player_characters.map((character, id) => (
              <h4 key={id}>{character.name}</h4>
            ))}
          </div>
          <select>
            <option key="0">Please Select an Option</option>
            {emptyCharacters.map((character, id) => (
              <option key={id + 1} value={character.id}>
                {character.name}
              </option>
            ))}
          </select>
        </>
      )}
    </div>
  );
};

export default CampaignShowJoin;
