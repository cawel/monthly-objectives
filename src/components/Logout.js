import React from "react";
import PropTypes from "prop-types";

import { firebaseApp } from "../base";

class Logout extends React.Component {
  logout = (event) => {
    event.preventDefault();
    firebaseApp
      .auth()
      .signOut()
      .then(() => {
        this.props.history.push("/");
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  render() {
    return (
      <a href="/logout" onClick={this.logout}>
        Log out
      </a>
    );
  }
}

Logout.propTypes = {
  history: PropTypes.object,
};

export default Logout;
