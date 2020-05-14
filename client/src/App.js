import React, { Component } from "react";
import "./App.css";
import Layout from "./components/shared/Layout";
import UserProvider from "./components/contexts/UserProvider";

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserProvider>
          <Layout />
        </UserProvider>
      </div>
    );
  }
}

export default App;
