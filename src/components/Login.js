import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { firebaseApp } from '../base';
import { getMonth } from '../helpers';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { errorMessage: '' };
  }

  static propTypes = {
    history: PropTypes.object.isRequired
  };

  email = React.createRef();
  password = React.createRef();

  loginFailed = () => {
    this.setState({ errorMessage: 'Error while loggin in.' });
  };

  login = event => {
    event.preventDefault();

    firebaseApp
      .auth()
      .signInWithEmailAndPassword(
        this.email.value.value,
        this.password.value.value
      )
      .then(() => {
        console.log('Login successful !');
        let date = new Date();
        this.props.history.push(
          `/${date.getFullYear()}/${getMonth(date).toLowerCase()}`
        );
      })
      .catch(error => {
        var errorCode = error.code;

        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
        this.loginFailed();
      });
  };

  hasErrorMessage = () => this.state.errorMessage !== '';

  render() {
    return (
      <Fragment>
        <div className="row">
          <div className="col">
            <h2 className="section-title">Log In</h2>
          </div>
        </div>
        <div className={'row ' + (this.hasErrorMessage() ? '' : 'd-none')}>
          <div className="col">
            <div className="alert alert-danger" role="alert">
              <i className="fas fa-exclamation-circle" />
              {this.state.errorMessage}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <form onSubmit={this.login}>
              <div className="form-group">
                <label>Email:</label>
                <input
                  className="form-control login-field user-generated-content"
                  type="email"
                  ref={this.email}
                  name="email"
                />
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input
                  className="form-control login-field user-generated-content"
                  type="password"
                  ref={this.password}
                  name="password"
                />
              </div>
              <button className="btn btn-primary" type="submit">
                Log in
              </button>
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Login;
