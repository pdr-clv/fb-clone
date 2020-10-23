import React, { useState, useEffect } from 'react';

import MainPage from './components/main-page/main-page.component';
import SignInPage from './components/sign-in/sign-in.component';
import WithSpinner from './components/with-spinner/with-spinner.component';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { AppStyles } from './App.styles';

const App = (props) => {
  const { currentUser, setCurrentUser } = props;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unlisten = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          const data = snapShot.data();
          setCurrentUser({ userId: snapShot.id, ...data });
          setLoading(false);
        });
      } else {
        setCurrentUser({
          userId: null,
          displayName: '',
          email: '',
          photoURL: '',
        });
        setLoading(false);
      }
    });
    return () => {
      unlisten();
    };
    // eslint-disable-next-line
  }, []);
  const AppStylesWithSpinner = WithSpinner(AppStyles);

  return (
    <AppStylesWithSpinner isLoading={loading}>
      {currentUser.userId ? <MainPage /> : <SignInPage />}
    </AppStylesWithSpinner>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
