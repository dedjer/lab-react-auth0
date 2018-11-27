import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import auth0Client from "./Auth";
import loading from "./loading.svg";

//This component is responsible for two things.
//First, it calls the handleAuthentication method to fetch the user
//information sent by Auth0. Second, it redirects your users to the
//home page (history.replace('/')) after it finishes the
//handleAuthentication process. In the meantime, this component shows the
//following message: "Loading profile".
class Callback extends Component {
	async componentDidMount() {
		await auth0Client.handleAuthentication();
		this.props.history.replace("/home");
	}

	render() {
		return (
			<div>
				<img src={loading} alt="loading" />
			</div>
		);
	}
}

export default withRouter(Callback);
