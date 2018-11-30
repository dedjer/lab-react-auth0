import React from "react";
import { Jumbotron } from "reactstrap";
import logo from "./logo.svg";

const SecuredPage = () => {
  return (
    <React.Fragment>
      <div className="span-12">
        <div>
          <Jumbotron>
            <h1 className="display-3">
              You're authenticated! <br />
              One of us! One of us!
            </h1>
            <p className="lead" />
            <img src={logo} className="App-logo" alt="logo" />
          </Jumbotron>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SecuredPage;
