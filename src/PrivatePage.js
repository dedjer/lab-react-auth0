import React, { Component } from "react";
import * as api from "./api.js";
// import { CardBody, CardTitle, CardText, CardSubtitle } from "reactstrap";

class PrivatePage extends Component {
  constructor(props) {
    super(props);
    this.state = { response: [] };
  }
  componentDidMount() {
    this.getResponse();
  }
  async getResponse() {
    await api
      .getResponse()
      .then(response => this.setState({ response: [response] }))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <React.Fragment>
        {this.state.response.map((data, index) => (
          <div key={index}>{data.data.message}</div>
        ))}
      </React.Fragment>
    );
  }
}

export default PrivatePage;
