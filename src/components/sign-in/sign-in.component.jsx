import React from 'react';
import {
  signInWithGoogle,
  signInWithFacebook,
  auth,
} from '../../firebase/firebase.utils';

import { SignInStyles } from './sign-in.styles';

const SignInPage = ({ currentUser }) => {
  console.log(currentUser);
  return (
    <SignInStyles>
      <div>
        <h1>Log In to FacebookClone</h1>
        {currentUser ? (
          <button onClick={() => auth.signOut()}>Sign Out</button>
        ) : (
          <div>
            <button onClick={signInWithGoogle}>Sign In with Google</button>
            <button onClick={signInWithFacebook}>Sign In with Facebook</button>
          </div>
        )}
        {/* <button onClick={signInWithGoogle}>Sign In with Google</button> */}
      </div>
    </SignInStyles>
  );
};

export default SignInPage;
