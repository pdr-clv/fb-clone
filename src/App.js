import React, { useState, useEffect } from 'react';

import Header from './components/header/header.component';
import SideBar from './components/side-bar/side-bar.component';
import Feed from './components/feed/feedBody.component';
import Widgets from './components/widgets/widgets.component';
import SignInPage from './components/sign-in/sign-in.component';
import WithSpinner from './components/with-spinner/with-spinner.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { AppStyles, AppBody } from './App.styles';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unlisten = auth.onAuthStateChanged(async (user) => {
      //user ? createUserProfileDocument(user) : setCurrentUser(null);
      setCurrentUser(user);
      createUserProfileDocument(user);
      setLoading(false);
    });
    return () => {
      unlisten();
    };
  });

  const Main = () => (
    <div>
      <Header />
      <AppBody>
        <SideBar />
        <Feed />
        <Widgets />
      </AppBody>
    </div>
  );

  const AppStylesWithSpinner = WithSpinner(AppStyles);

  return (
    <AppStylesWithSpinner isLoading={loading}>
      {currentUser ? <Main /> : <SignInPage currentUser={currentUser} />}
    </AppStylesWithSpinner>
  );
};

export default App;
