import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAxIyyYPtKC6GRetyhcuvApYKZuR-akyzk",
    authDomain: "e-commerce-471eb.firebaseapp.com",
    databaseURL: "https://e-commerce-471eb.firebaseio.com",
    projectId: "e-commerce-471eb",
    storageBucket: "e-commerce-471eb.appspot.com",
    messagingSenderId: "160992444869",
    appId: "1:160992444869:web:52a218a892a8201d924bac",
    measurementId: "G-ZJ6LG9HRN7"
  };

  export const createUserProfileDocument = async(userAuth , additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapshot = await userRef.get();
    //console.log('this is the snapshot' , snapshot);
    if(!snapshot.exists) {
      const {displayName , email} = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          ...additionalData
        })
      } catch(error) {
        console.log('error creating user ' , error.message);
        
      }

    }

    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore  = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;