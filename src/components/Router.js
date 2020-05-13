import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ObjectivesApp } from "./ObjectivesApp";
import { NotFound } from "./NotFound";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ObjectivesApp} />
        <Route exact path="/:year/:month" component={ObjectivesApp} />
        <Route exact component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};
