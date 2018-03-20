import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import NotFound from './NotFound';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/:year/:month" component={App} />
        <Route exact component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
