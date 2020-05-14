import React from "react";
import PropTypes from "prop-types";

import { firebaseApp } from "../base";

export const Logout = (props) => {
  const logout = (event) => {
    event.preventDefault();
    firebaseApp
      .auth()
      .signOut()
      .then(() => {
        props.history.push("/");
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  return (
    <a href="/logout" onClick={logout}>
      Log out
    </a>
  );
};

Logout.propTypes = {
  history: PropTypes.object,
};
