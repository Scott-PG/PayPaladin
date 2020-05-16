import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { postPC } from "../services/api-helper";
import UserContext from "./contexts/UserContext";

const CharacterCreate = ({ userId: propUserId }) => {
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
    await postPC({ name: name, user_id: user_id });
    await context.readMyCampaignsAndCharacters();
    history.push("/mycharacters");
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        characterSubmit();
      }}
    >
      <h3>Create Character</h3>
      <label htmlFor="name">Character Name</label>
      <input type="text" name="name" value={name} onChange={handleNameChange} />
      <button>Submit</button>
    </form>
  );
};

export default CharacterCreate;
