import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  // Your Firebase configuration object
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export {}