import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";

import { firebaseApp } from "../base";
import { getMonth } from "../dateHelper";
import { Footer } from "../components/Footer";

export const Login = (props) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault();
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log("Login successful !");
        const date = new Date();
        const defaultUrl = `/${date.getFullYear()}/${getMonth(
          date
        ).toLowerCase()}`;
        const from =
          props.location && props.location.state && props.location.state.from;
        const destination = from ?? defaultUrl;
        props.history.push(destination);
      })
      .catch((error) => {
        setErrorMessage("Error while loggin in.");
        const { code, message } = error;
        console.log(code, message);
      });
  };

  return (
    <Fragment>
      <div className="row">
        <div className="col">
          <h2 className="section-title">Log In</h2>
        </div>
      </div>
      <div className={"row " + (errorMessage ? "" : "d-none")}>
        <div className="col">
          <div className="alert alert-danger" role="alert">
            <i className="fas fa-exclamation-circle" />
            {errorMessage}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <form onSubmit={login}>
            <div className="form-group">
              <label>Email:</label>
              <input
                className="form-control login-field user-generated-content"
                type="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                className="form-control login-field user-generated-content"
                type="password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="btn btn-primary" type="submit">
              Log in
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

Login.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object,
};
