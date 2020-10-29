import React from 'react';
import { Link } from 'react-router-dom';
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
        <h2>Still you don't have an account?</h2>
        <Link to='/signup'>Create account and Sign Up with Email and Password</Link>
      </div>
    </SignInStyles>
  );
};

export default SignInPage;
