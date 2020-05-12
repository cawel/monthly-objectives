import firebase from "firebase";

const prodConfig = {
  apiKey: "AIzaSyDPwuBzfWxIxpi9TQn9ZnxzBtYy0YIYbUE",
  authDomain: "monthly-objectives.firebaseapp.com",
  databaseURL: "https://monthly-objectives.firebaseio.com",
  projectId: "monthly-objectives",
  storageBucket: "monthly-objectives.appspot.com",
  messagingSenderId: "795804563760",
};

const devConfig = {
  apiKey: "AIzaSyA5TfI07yh31aNpKoX9BdZ2k4UUz7NQMTo",
  authDomain: "monthly-objectives-dev.firebaseapp.com",
  databaseURL: "https://monthly-objectives-dev.firebaseio.com",
  projectId: "monthly-objectives-dev",
  storageBucket: "monthly-objectives-dev.appspot.com",
  messagingSenderId: "149177821597",
};

const config = /herokuapp/.test(window.location.href) ? prodConfig : devConfig;

export const firebaseApp = firebase.initializeApp(config);
