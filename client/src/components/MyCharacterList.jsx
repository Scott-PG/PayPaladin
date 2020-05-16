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
              <div className="list-div" key={character.id}>
                <p>{character.name}</p>
                <div className="list-div-buttons">
                  <button
                    onClick={() => {
                      props.history.push(`/mycharacters/${character.id}`);
                    }}
                  >
                    View
                  </button>
                  <button
                    onClick={() => {
                      props.history.push(
                        `/mycharacters/${character.id}/settings`
                      );
                    }}
                  >
                    Settings
                  </button>
                </div>
              </div>
            ))}
            <br />
            <Link to="/mycharacters/create">
              <button>Create</button>
            </Link>
          </>
        )}
      </UserContext.Consumer>
    </div>
  );
}
