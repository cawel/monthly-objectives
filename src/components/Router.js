import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ObjectivesApp } from "./ObjectivesApp";
import { PrivateRoute } from "./PrivateRoute";
import { Login } from "./Login";
import { NotFound } from "./NotFound";

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
