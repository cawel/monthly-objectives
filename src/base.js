import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDPwuBzfWxIxpi9TQn9ZnxzBtYy0YIYbUE',
  authDomain: 'monthly-objectives.firebaseapp.com',
  databaseURL: 'https://monthly-objectives.firebaseio.com',
  projectId: 'monthly-objectives',
  storageBucket: 'monthly-objectives.appspot.com',
  messagingSenderId: '795804563760'
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
