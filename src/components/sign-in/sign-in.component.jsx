import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import { Link } from 'react-router-dom';
import {
  auth,
  signInWithGoogle,
} from '../../firebase/firebase.utils';

import { SignInStyles,SubmitInput } from './sign-in.styles';

const SignInPage = () => {
  const [logInDetails,setLogInDetails] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = logInDetails;
    try {
      await auth.signInWithEmailAndPassword(email,password);
    } catch(err) {
      console.error(err);
      alert(err.message);
      setLogInDetails({...logInDetails, password: ''});
      if (err.code === 'auth/wrong-password') {
        alert('Check if user is registered with Google or Facebook')
      }
    }
    

  };

  const handleChange = (event) => {
    const {name, value} = event.target
    setLogInDetails({...logInDetails,[name]:value});
  };

  const { email, password} = logInDetails;
  return (
    <SignInStyles>
      <div>
        <h1>Log In to FacebookClone</h1>
        <form action="" onSubmit={handleSubmit}>
          <FormInput type='email'
					name='email'
					value={ email }
					onChange={handleChange}
					label='Email'
					required />
          <FormInput 
					type='password'
					name='password'
					value={password}
					onChange={handleChange}
					label='Password'
					required />
          <SubmitInput type="submit" value='Submit'/>
        </form>
        <h3>Also...</h3>
        <button onClick={signInWithGoogle}>Sign In with Google</button>
        <h3>Still you don't have an account?</h3>
        <Link to='/signup'>Create account and Sign Up with Email and Password</Link>
      </div>
    </SignInStyles>
  );
};

export default SignInPage;
