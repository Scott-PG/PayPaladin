import React from "react";
import { Link } from "react-router-dom";

export default function CharacterList(props) {
  return (
    <div>
      <h3>Characters</h3>
      {props.characters.map((character) => (
        <React.Fragment key={character.id}>
          <p>{character.name}</p>
          <button
            onClick={() => {
              props.history.push(`/characters/${character.id}/edit`);
            }}
          >
            Edit
          </button>
        </React.Fragment>
      ))}
      <Link to="characters/new">
        <button>Create</button>
      </Link>
    </div>
  );
}
