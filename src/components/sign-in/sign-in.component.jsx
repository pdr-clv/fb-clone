import React from 'react';
import {
  signInWithGoogle,
  signInWithFacebook,
} from '../../firebase/firebase.utils';

import { SignInStyles } from './sign-in.styles';

const SignInPage = () => {
  return (
    <SignInStyles>
      <div>
        <h1>Log In to FacebookClone</h1>
        <button onClick={signInWithGoogle}>Sign In with Google</button>
        <button onClick={signInWithFacebook}>Sign In with Facebook</button>
      </div>
    </SignInStyles>
  );
};

export default SignInPage;
