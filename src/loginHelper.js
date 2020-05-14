import { firebaseApp } from "./base";

// this is a synchronous function
// it will fail if firebase is not not initializing
// see: https://firebase.google.com/docs/auth/web/manage-users
export const isLoggedIn = () => firebaseApp.auth().currentUser !== null;

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = firebaseApp.auth().onAuthStateChanged((user) => {
      unsubscribe();
      resolve(user);
    }, reject);
  });
};
