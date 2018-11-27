import React, { Component } from "react";
import auth0Client from "./Auth";

class Home extends Component {
  render() {
    return (
      <div className="container">
        {/* TODO: Style this page (i.e. Add Jumobotron) */}
        {auth0Client.isAuthenticated() && <h4>You are logged in!</h4>}
        {!auth0Client.isAuthenticated() && <h4>You are not logged in!</h4>}
      </div>
    );
  }
}

export default Home;
