import React from 'react';
import { firebaseApp } from '../base';

class Logout extends React.Component {
  logout = event => {
    event.preventDefault();
    firebaseApp
      .auth()
      .signOut()
      .then(() => {
        this.props.history.push('/');
      })
      .catch(function(err) {
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
export default Logout;
