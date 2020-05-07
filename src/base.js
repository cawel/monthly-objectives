import Rebase from "re-base";
import firebase from "firebase";

let prodConfig = {
  apiKey: "AIzaSyDPwuBzfWxIxpi9TQn9ZnxzBtYy0YIYbUE",
  authDomain: "monthly-objectives.firebaseapp.com",
  databaseURL: "https://monthly-objectives.firebaseio.com",
  projectId: "monthly-objectives",
  storageBucket: "monthly-objectives.appspot.com",
  messagingSenderId: "795804563760",
};

let devConfig = {
  apiKey: "AIzaSyA5TfI07yh31aNpKoX9BdZ2k4UUz7NQMTo",
  authDomain: "monthly-objectives-dev.firebaseapp.com",
  databaseURL: "https://monthly-objectives-dev.firebaseio.com",
  projectId: "monthly-objectives-dev",
  storageBucket: "monthly-objectives-dev.appspot.com",
  messagingSenderId: "149177821597",
};

let config = /herokuapp/.test(window.location.href) ? prodConfig : devConfig;

export const firebaseApp = firebase.initializeApp(config);

export default Rebase.createClass(firebaseApp.database());
