import React, { useState, useEffect } from 'react';

import MainPage from './components/main-page/main-page.component';
import SignInPage from './components/sign-in/sign-in.component';
import WithSpinner from './components/with-spinner/with-spinner.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { AppStyles } from './App.styles';

const App = () => {
  /*const innerUser = {
    id: null,
    displayName: '',
    email: '',
    photoURL: '',
  };*/
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [photoURL, setPhotoURL] = useState('');

  useEffect(() => {
    const unlisten = auth.onAuthStateChanged(async (userAuth) => {
      setLoading(false);
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          /*const user = {
            id: snapShot.id,
            ...snapShot.data(),
          };*/
          const data = snapShot.data();
          setUserId(snapShot.id);
          setDisplayName(data.displayName);
          setEmail(data.email);
          setPhotoURL(data.photoURL);
        });
      } else {
        setUserId('');
        setDisplayName('');
        setEmail('');
        setPhotoURL('');
      }
    });
    return () => {
      unlisten();
    };
  });

  const AppStylesWithSpinner = WithSpinner(AppStyles);

  return (
    <AppStylesWithSpinner isLoading={loading}>
      {userId ? (
        <MainPage
          userId={userId}
          displayName={displayName}
          email={email}
          photoURL={photoURL}
        />
      ) : (
        <SignInPage />
      )}
    </AppStylesWithSpinner>
  );
};

export default App;
