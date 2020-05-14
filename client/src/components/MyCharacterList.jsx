import React from "react";
import { Link } from "react-router-dom";
import UserContext from "./contexts/UserContext";

export default function MyCharacterList(props) {
  return (
    <div>
      <UserContext.Consumer>
        {(context) => (
          <>
            <h3>My Characters</h3>
            {context.myCharacters.map((character) => (
              <div className="character-holder" key={character.id}>
                <p>{character.name}</p>
                <button
                  onClick={() => {
                    props.history.push(`/characters/${character.id}`);
                  }}
                >
                  View
                </button>
                <button
                  onClick={() => {
                    props.history.push(`/characters/${character.id}/edit`);
                  }}
                >
                  Edit
                </button>
              </div>
            ))}
            <br />
            <Link to="characters/new">
              <button>Create</button>
            </Link>
          </>
        )}
      </UserContext.Consumer>
    </div>
  );
}