import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import Callback from "./Callback";

const Routes = () => (
	<App>
		<Switch>
			{/* TODO: Add more routes for Login and Logout links */}
			{/* TODO: Add a link to log out of Auth0 entirely: https://vehicle-history.auth0.com/v2/logout */}
			{/* TODO: Test history while navigating (use back buttons) */}
			<Route exact path="/" component={Home} />
			<Route path="/home" component={Home} />
			<Route exact path="/callback" component={Callback} />
			{/* <SecuredRoute path='/new-question' component={NewQuestion} /> */}
		</Switch>
	</App>
);

export default Routes;
