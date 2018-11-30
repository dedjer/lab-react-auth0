import React from "react";
import { Jumbotron } from "reactstrap";
import logo from "./logo.svg";

const LoginPage = () => {
  return (
    <React.Fragment>
      <div className="span-12">
        <div>
          <Jumbotron>
            <h1 className="display-3">You've successfully logged in!</h1>
            <p className="lead" />
            <img src={logo} className="App-logo" alt="logo" />
          </Jumbotron>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LoginPage;
