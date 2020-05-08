import React, { Fragment } from "react";
import PropTypes from "prop-types";

import Logout from "./Logout";
import { isLoggedIn } from "../helpers";

class Footer extends React.Component {
  logoutStr = () => {
    if (!isLoggedIn()) {
      return "";
    } else {
      return (
        <Fragment>
          <Logout history={this.props.history} />
          <span className="separator text-muted">|</span>
        </Fragment>
      );
    }
  };

  render() {
    return (
      <Fragment>
        <br />
        <br />
        <hr />
        <div className="row footer mx-auto">
          {this.logoutStr()}
          <span className="text-muted">&copy; Praline 2018</span>
        </div>
      </Fragment>
    );
  }
}

Footer.propTypes = {
  history: PropTypes.object,
};

export default Footer;
