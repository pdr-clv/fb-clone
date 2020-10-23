import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCeLTF2YK1NmD2jyU-RfwNRYb4obGuV18Q',
  authDomain: 'facebook-clone-851f5.firebaseapp.com',
  databaseURL: 'https://facebook-clone-851f5.firebaseio.com',
  projectId: 'facebook-clone-851f5',
  storageBucket: 'facebook-clone-851f5.appspot.com',
  messagingSenderId: '939756230619',
  appId: '1:939756230619:web:ba260aeb40cfc769fbb9fe',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const providerGoogle = new firebase.auth.GoogleAuthProvider();
const providerFacebook = new firebase.auth.FacebookAuthProvider();
providerGoogle.setCustomParameters({ prompt: 'select_account' });
providerFacebook.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(providerGoogle);
export const signInWithFacebook = () => auth.signInWithPopup(providerFacebook);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email, photoURL } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        photoURL,
        ...additionalData,
      });
    } catch (err) {
      console.log('error creating user', err.message);
    }
  }
  return userRef;
};

export const addPost = async (dataPost) => {
  const { textPost, imgPost, userId, displayName, photoURL } = dataPost;
  const createdAt = new Date();
  const newPostRef = firestore.collection('posts').doc();
  try {
    await newPostRef.set({
      textPost,
      imgPost,
      userId,
      displayName,
      photoURL,
      createdAt,
    });
  } catch (err) {
    console.log('error creating post', err.message);
  }
};

export default firebase;
