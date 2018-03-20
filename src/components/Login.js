import React from 'react';
import { firebaseApp } from '../base';
import { getMonth } from '../helpers';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loginMessage: '' };
  }

  email = React.createRef();
  password = React.createRef();

  loginFailed = () => {
    this.setState({ loginMessage: 'Error while loggin in' });
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

  render() {
    return (
      <div>
        <h2>Login</h2>
        <p>{this.state.loginMessage}</p>
        <form onSubmit={this.login}>
          <label>
            Email:
            <input type="email" ref={this.email} name="email" />
          </label>
          <label>
            Password:
            <input type="password" ref={this.password} name="password" />
          </label>
          <button type="submit">Log in</button>
        </form>
      </div>
    );
  }
}

export default Login;
