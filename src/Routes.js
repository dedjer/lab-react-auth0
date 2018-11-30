import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import SecuredPage from "./SecuredPage.js";
import SecuredRoute from "./SecuredRoute";
import Callback from "./Callback";
import LogoutPage from "./LogoutPage";
import LoginPage from "./LoginPage";

const Routes = () => (
  <App>
    <Switch>
      {/* TODO: Add a link to log out of Auth0 entirely: https://vehicle-history.auth0.com/v2/logout */}
      {/* TODO: Test history while navigating (use back buttons) */}
      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route exact path="/callback" component={Callback} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/logout" component={LogoutPage} />
      <SecuredRoute path="/secured" component={SecuredPage} />
    </Switch>
  </App>
);

export default Routes;
