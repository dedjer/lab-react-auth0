import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import SecuredPage from "./SecuredPage.js";
import SecuredRoute from "./SecuredRoute";
import Callback from "./Callback";
import LogoutPage from "./LogoutPage";
import LoginPage from "./LoginPage";
import PrivatePage from "./PrivatePage";

const Routes = () => (
  <App>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route exact path="/callback" component={Callback} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/logout" component={LogoutPage} />
      <SecuredRoute path="/secured" component={SecuredPage} />
      <SecuredRoute path="/private" component={PrivatePage} />
    </Switch>
  </App>
);

export default Routes;
