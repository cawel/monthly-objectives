import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

import { isLoggedIn } from "../loginHelper";

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isLoggedIn() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string,
    pathname: PropTypes.string,
    hash: PropTypes.string,
  }),
};
