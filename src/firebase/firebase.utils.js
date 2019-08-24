import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCW5dTrKIoo0UvavO8a0C1PGIrA8YqEck4",
  authDomain: "tech-vice.firebaseapp.com",
  databaseURL: "https://tech-vice.firebaseio.com",
  projectId: "tech-vice",
  storageBucket: "tech-vice.appspot.com",
  messagingSenderId: "964751289136",
  appId: "1:964751289136:web:e0c2b10d1cfcc01b"
};

// Initialize Firebase
firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

// Google Authentication Flow
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ 'prompt': 'select_account' });
export const signInWithGoogle = auth.signInWithPopup(provider);

export default firebase;