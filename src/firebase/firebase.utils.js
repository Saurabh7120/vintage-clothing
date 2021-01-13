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
          });
        } catch (error) {
          console.log('error creating user', error.message);
        }
      }
      return userRef;
  };

  export const addCollectionsAndDocuments = async(collectionKey,objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, obj);
    });

    return await batch.commit();
  };

  export const convertCollectionSnapshotsToMap =  collections => {
    console.log(collections.docs);
    const transformedCollection = collections.docs.map(doc => {
      const {title,items} = doc.data();
      // console.log({
      //   routeName:encodeURI(title.toLowerCase()),
      //   id:doc.id,
      //   title:title,
      //   items:items
      // });
      return {
        routeName:encodeURI(title.toLowerCase()),
        id:doc.id,
        title:title,
        items:items
      };
    });
    console.log(transformedCollection);
       return transformedCollection.reduce((accumulator,collection)=>{
        console.log(accumulator);
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
    },{});
    //eturn final;
  };

  export const getCurrentUser = () => {
    return new Promise((resolve,reject)=>{
      const unsubscribe = auth.onAuthStateChanged(userAuth => {
        unsubscribe();
        resolve(userAuth);
      },reject)
    })
  }


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  export const googleProvider =  new firebase.auth.GoogleAuthProvider();
  googleProvider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

  export default firebase;
