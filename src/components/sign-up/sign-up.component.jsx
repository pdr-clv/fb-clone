import React, { useState, useEffect } from 'react';
import FormInput from '../form-input/form-input.component';
import { Link } from 'react-router-dom';

import {
  auth,
  createUserProfileDocument,
} from '../../firebase/firebase.utils';

import { SignInStyles } from './sign-up.styles';

const SignUpPage = () => {
  const [userCredentials,setCredentials] = useState({
		displayName:'',
		email:'',
		password:'',
		confirmPassword:''
  });
  
  const {displayName, email, password, confirmPassword} = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Password and ConfirmPassword don't match");
      return;
    }

    try {
      const {user} = await auth.createUserWithEmailAndPassword(email,password);
      
      await createUserProfileDocument(user, { displayName });
      //without cleaning function, this doesn't work.
      /*setCredentials({
        displayName:'',
        email:'',
        password:'',
        confirmPassword:''
      });*/

    } catch(err) {
      console.log(err);
      alert(err.message);
    }
    
  };
  const handleChange = (event) => {
    const {name,value} = event.target;
// si ponemos name entre [] asignará el valor de la propiedad name del input (password o email) al valor value del input.
		setCredentials({...userCredentials,[name]:value});
  };
  return (
    <SignInStyles>
      <div>
        <h1>Sign Up</h1>
        <form action="" onSubmit={handleSubmit}>
          <FormInput type='text'
					name='displayName'
					value={ displayName }
					onChange={handleChange}
					label='Display Name'
					required />
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
					label='Choose Password'
					required />
					<FormInput 
					type='password'
					name='confirmPassword'
					value={confirmPassword}
					onChange={handleChange}
					label='Confirm Password'
          required />
          <input type="submit" value='Submit'/>
          <Link to='/'>Go to Sign In Page</Link>
        </form>
      </div>
    </SignInStyles>
  );
};

export default SignUpPage;
