import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import {
  changeNamePC,
  leaveCampaignPC,
  destroyPC,
  getOnePC,
} from "../services/api-helper";
import UserContext from "./contexts/UserContext";

const CharacterSettings = ({
  userId: propUserId,
  characterId: propCharacterId,
}) => {
  const [user_id] = useState(parseInt(propUserId));
  const [characterId] = useState(parseInt(propCharacterId));
  const [character, setCharacter] = useState(null);
  const [name, setName] = useState("");
  const [showNameChange, setShowNameChange] = useState(false);
  const [showCampaignLeave, setShowCampaignLeave] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const history = useHistory();
  const context = useContext(UserContext);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await getOnePC(characterId);
      setCharacter(resp);
    };
    fetchData();
  }, [characterId]);

  const handleNameChange = (e) => {
    const { value } = e.target;
    setName(value);
  };

  const toggleShowNameChangeTrue = () => {
    setShowNameChange(true);
    setShowCampaignLeave(false);
    setShowDelete(false);
  };

  const toggleShowCampaignLeaveTrue = () => {
    setShowNameChange(false);
    setShowCampaignLeave(true);
    setShowDelete(false);
  };

  const toggleShowDeleteTrue = () => {
    setShowNameChange(false);
    setShowCampaignLeave(false);
    setShowDelete(true);
  };

  const toggleAllChangeFalse = () => {
    setShowNameChange(false);
    setShowCampaignLeave(false);
    setShowDelete(false);
  };

  const characterSubmit = async () => {
    await changeNamePC(characterId, { name: name, user_id: user_id });
    await context.readMyCampaignsAndCharacters();
    history.push(`/mycharacters/${characterId}`);
  };

  const leaveCampaign = async () => {
    await leaveCampaignPC(characterId);
    await context.readMyCampaignsAndCharacters();
    history.push(`/mycharacters/${characterId}`);
  };

  const deleteCharacter = async () => {
    await destroyPC(characterId);
    await context.readMyCampaignsAndCharacters();
    history.push(`/mycharacters`);
  };

  return (
    <>
      {character === null ? null : (
        <>
          <h3>Settings for {character.name}</h3>
          <p>These settings are considered dangerous.</p>
          <p>
            They are hidden until you press the corresponding "Show" button.
          </p>
          <p>They will be applied instantly. You have been warned.</p>
          <div className="character-danger-button-div">
            {showNameChange === false ? (
              <button onClick={toggleShowNameChangeTrue}>
                Show Name Change
              </button>
            ) : (
              <button onClick={toggleAllChangeFalse}>Hide Name Change</button>
            )}
            {showCampaignLeave === false ? (
              <button onClick={toggleShowCampaignLeaveTrue}>
                Show Campaign Leave
              </button>
            ) : (
              <button onClick={toggleAllChangeFalse}>
                Hide Campaign Leave
              </button>
            )}
            {showDelete === false ? (
              <button onClick={toggleShowDeleteTrue}>
                Show Character Delete
              </button>
            ) : (
              <button onClick={toggleAllChangeFalse}>
                Hide Character Delete
              </button>
            )}
          </div>
          <div className="character-danger-settings">
            {showNameChange === false ? null : (
              <>
                <h4>Edit Character Name</h4>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    characterSubmit();
                  }}
                >
                  <label htmlFor="name">New Character Name</label>
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
            {showCampaignLeave === false ? null : (
              <button onClick={leaveCampaign}>Leave Your Campaign?</button>
            )}
            {showDelete === false ? null : (
              <button onClick={deleteCharacter}>Delete Your Character?</button>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default CharacterSettings;
