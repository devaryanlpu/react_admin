import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Dashboard from "../pages/Dashboard/";
import NotFound from "../pages/NotFound";

export default function Navigations() {
  return (
    <Switch>
      <Route path="/scheduling" component={Dashboard} />
      <Redirect from="/" exact to="/scheduling" />
      <Route component={NotFound} />
    </Switch>
  );
}
