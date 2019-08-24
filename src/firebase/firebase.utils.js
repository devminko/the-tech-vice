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

// Initialize Firebase App
firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

// Creating a New User Authentication Flow and Storing in Firestore Database
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // get() method -- RETRIEVE 'uid' if exists in firestore (CRUD)
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    // set() method -- CREATE new user with the following data points if !snapShot.exists (CRUD)
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (err) {
      console.log(`Error creating user: ${err}`);
    }
  }

  return userRef;
};

// Set Up Google Authentication Flow
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ 'prompt': 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;