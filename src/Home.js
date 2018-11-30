import React, { Component } from "react";
import { Jumbotron, Button } from "reactstrap";
import logo from "./logo.svg";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="span-12">
          <div>
            <Jumbotron>
              <h1 className="display-3">Hello, world!</h1>
              <p className="lead">
                This is a simple hero unit, a simple Jumbotron-style component
                for calling extra attention to featured content or information.
              </p>
              <hr className="my-2" />
              <p>
                It uses utility classes for typography and spacing to space
                content out within the larger container.
              </p>
              <p className="lead">
                <Button color="primary">Learn More</Button>
              </p>
              <img src={logo} className="App-logo" alt="logo" />
            </Jumbotron>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
