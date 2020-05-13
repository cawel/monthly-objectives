import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { PrivateRoute } from "./PrivateRoute";
import { ObjectivesApp } from "../views/ObjectivesApp";
import { Login } from "../views/Login";
import { NotFound } from "../views/NotFound";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/" component={ObjectivesApp} />
        <PrivateRoute exact path="/:year/:month" component={ObjectivesApp} />
        <Route exact component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};
