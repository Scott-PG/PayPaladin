import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { postCampaign } from "../services/api-helper";
import UserContext from "./contexts/UserContext";

const CampaignCreate = ({ userId: propUserId }) => {
  const [user_id, setUserId] = useState(propUserId);
  const [name, setName] = useState("");

  useEffect(() => {
    setUserId(propUserId);
  }, [propUserId]);

  const handleNameChange = (e) => {
    const { value } = e.target;
    setName(value);
  };

  let history = useHistory();

  const context = useContext(UserContext);

  let characterSubmit = async () => {
    await postCampaign({ name: name, user_id: user_id });
    await context.readMyCampaignsAndCharacters();
    history.push("/mycampaigns");
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        characterSubmit();
      }}
    >
      <h3>Create Campaign</h3>
      <br />
      <label htmlFor="name">Campaign Name:</label>
      <input type="text" name="name" value={name} onChange={handleNameChange} />
      <br />
      <button>Submit</button>
    </form>
  );
};

export default CampaignCreate;
