import { firebaseApp } from "./base";

export const isLoggedIn = () => firebaseApp.auth().currentUser !== null;
