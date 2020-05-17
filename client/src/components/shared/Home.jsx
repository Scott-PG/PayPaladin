import React, { Component } from "react";
// import { Link} from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <>
        <h3>Welcome to PayPaladin</h3>
        <br />
        <p className="home-blurb">
          Welcome, dear friend, welcome.
          <br />
          <br />
          Far be it for me to say what you should or should not do with your
          hard-earned platinum, gold, electrum, silver, or copper. However, if I
          were you, I'd store it someplace safe.
          <br />
          <br />
          PayPaladin is a place where you and the others in your campaign can
          keep track of and transfer fake virtual currency. So if you'd like to
          streamline your fantasy tabletop sessions, try us out!
          <br />
          <br />
          <em>
            Editor's Note: To be clear, we are not talking about actual, Real
            World Money. This is for tabletop RPGs. It was made as a final
            project for a coding bootcamp by ScottPG. If you attempt to transfer
            actual currency (or Bitcoin), you will not be able to.
          </em>
        </p>
      </>
    );
  }
}

export default Home;
