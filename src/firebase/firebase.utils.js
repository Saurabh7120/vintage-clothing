/*jshint esversion:9*/
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAq4yhKj9ayqMBWQPyKm5SSThR6Ilh90sM",
    authDomain: "vintage-db.firebaseapp.com",
    databaseURL: "https://vintage-db.firebaseio.com",
    projectId: "vintage-db",
    storageBucket: "vintage-db.appspot.com",
    messagingSenderId: "996295234960",
    appId: "1:996295234960:web:20e4455b0a75d49570cf15",
    measurementId: "G-PK0RJY7MWB"
  };

  export const createUserProfileDocument = async(userAuth, additionalData) =>{
      if(!userAuth) return;

      const userRef = firestore.doc(`users/${userAuth.uid}`);
      const snapshot = await userRef.get();

      if(!snapshot.exists){
        const{displayName, email} = userAuth;
        const createdAt =  new Date();

        try {
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
          })
        } catch (error) {
          console.log('error creating user', error.message);
        }
      }
      return userRef;
  }


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider =  new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
