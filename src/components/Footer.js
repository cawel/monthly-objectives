import React, { Fragment } from "react";
import PropTypes from "prop-types";

import Logout from "./Logout";
import { isLoggedIn } from "../helpers";

export const Footer = (props) => {
  const logoutLink = () => {
    if (!isLoggedIn()) {
      return "";
    }
    return (
      <Fragment>
        <Logout history={props.history} />
        <span className="separator text-muted">|</span>
      </Fragment>
    );
  };

  return (
    <footer>
      <br />
      <br />
      <hr />
      <div className="row footer mx-auto">
        {logoutLink()}
        <span className="text-muted">&copy; Praline 2018</span>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  history: PropTypes.object,
};
